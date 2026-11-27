// The desert's plants and dead things, shared by every slice.
// Saguaros are sculpted offline (plants-sdf.js → gen-plants.mjs) and drawn at three levels of detail,
// the nearest ones with every spine. The field of plants repeats every PLANT_PER metres around you.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const PLANT_PER = 120;
export const PLANT_U = { uPC: { value: new THREE.Vector2() } };
export const SAGUAROS = []; // trunk positions and radii, so you (and the cows) can't walk through them
export const wrapTo = (v, c) => v + Math.round((c - v) / PLANT_PER) * PLANT_PER;
const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
export function noise2(x, z) {
  const h = (i, j) => { let k = (Math.imul(i, 374761393) + Math.imul(j, 668265263)) | 0; k = Math.imul(k ^ (k >>> 13), 1274126177); return ((k ^ (k >>> 16)) >>> 0) / 4294967295; };
  const xi = Math.floor(x), zi = Math.floor(z), fx = x - xi, fz = z - zi, u = fx * fx * (3 - 2 * fx), v = fz * fz * (3 - 2 * fz);
  return (h(xi, zi) * (1 - u) + h(xi + 1, zi) * u) * (1 - v) + (h(xi, zi + 1) * (1 - u) + h(xi + 1, zi + 1) * u) * v;
}
export function rng(seed) { let s = seed >>> 0 || 1; return () => { s = (Math.imul(s ^ (s >>> 15), 2246822507) + 0x9e3779b9) >>> 0; s ^= s >>> 13; return (s >>> 0) / 4294967296; }; }

export const PLANT_NOISE = /* glsl */ `
float pHash(vec3 p){ p = fract(p*0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float pNoise(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(pHash(i), pHash(i+vec3(1,0,0)), f.x), mix(pHash(i+vec3(0,1,0)), pHash(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(pHash(i+vec3(0,0,1)), pHash(i+vec3(1,0,1)), f.x), mix(pHash(i+vec3(0,1,1)), pHash(i+vec3(1,1,1)), f.x), f.y), f.z)*2.0-1.0; }
`;
// plants are only half fogged, so at night they stand as dark shapes against the haze instead of fading into pale ghosts
export const HALF_FOG = `#ifdef USE_FOG
  float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor * 0.5);
  #endif`;

// ---------------- loading a baked sculpt ----------------
export async function loadSculpt(url) {
  const j = await (await fetch(url)).json();
  const raw = atob(j.data), u8 = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) u8[i] = raw.charCodeAt(i);
  const buf = u8.buffer;
  let o = 0;
  const take = (Ctor, n) => { const a = new Ctor(buf, o, n); o += (n * Ctor.BYTES_PER_ELEMENT + 3) & ~3; return a; };
  const lods = j.lods.map((l) => {
    const pos16 = take(Int16Array, l.vc * 3), nrm = take(Int8Array, l.vc * 3), a = take(Uint8Array, l.vc * 4), b = take(Uint8Array, l.vc * 4), s16 = take(Uint16Array, l.vc);
    const idx = l.big ? take(Uint32Array, l.ic) : take(Uint16Array, l.ic);
    const pos = new Float32Array(l.vc * 3), s = new Float32Array(l.vc);
    for (let i = 0; i < l.vc * 3; i++) pos[i] = pos16[i] * j.ps;
    for (let i = 0; i < l.vc; i++) s[i] = s16[i] / 1000;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(new Int8Array(nrm), 3, true));
    g.setAttribute('aA', new THREE.BufferAttribute(new Uint8Array(a), 4, true));
    g.setAttribute('aB', new THREE.BufferAttribute(new Uint8Array(b), 4, true));
    g.setAttribute('aS', new THREE.BufferAttribute(s, 1));
    g.setIndex(new THREE.BufferAttribute(l.big ? new Uint32Array(idx) : new Uint16Array(idx), 1));
    g.computeBoundingSphere();
    return g;
  });
  const out = { lods, meta: j };
  if (j.areoles) {
    const n = j.areoles, ap = take(Int16Array, n * 3), an = take(Int8Array, n * 4), at = take(Int8Array, n * 4);
    out.areoles = { n, ap, an, at, aps: j.aps };
  }
  return out;
}

// ---------------- saguaro skin ----------------
export const SAGUARO_U = { uSpineHaze: { value: 1 } };
export function saguaroMaterial() {
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0 });
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, SAGUARO_U);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec4 aA; attribute vec4 aB; attribute float aS;\nvarying vec4 vA; varying vec4 vB; varying float vS; varying vec3 vObj;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvA = aA; vB = aB; vS = aS; vObj = position;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>\nvarying vec4 vA; varying vec4 vB; varying float vS; varying vec3 vObj; uniform float uSpineHaze;\n${PLANT_NOISE}`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
      {
        float crest = vA.x, bark = vA.y, scar = vA.z, ao = vA.w, dark = vB.x, crown = vB.y, vary = vB.z;
        // living skin: dull grey-green; crests paler and greyer, grooves a deeper green
        vec3 col = mix(vec3(0.032, 0.056, 0.03), vec3(0.1, 0.12, 0.076), smoothstep(0.12, 0.95, crest));
        col *= mix(vec3(1.1, 1.03, 0.82), vec3(0.9, 1.0, 1.1), vary);
        col *= 0.9 + 0.12 * pNoise(vec3(vObj.x * 9.0, vS * 1.6, vObj.z * 9.0));          // fine streaks along the stem
        col *= 0.95 + 0.05 * sin(vS * 9.0 + vary * 6.0);                                  // faint growth bands
        // corky bark low on old trunks: grey-brown and cracked
        float crack = smoothstep(0.45, 0.8, abs(pNoise(vec3(vObj.x * 13.0, vS * 4.0, vObj.z * 13.0))));
        vec3 barkC = vec3(0.16, 0.135, 0.105) * (0.8 + 0.35 * pNoise(vObj * 4.0)) * (1.0 - 0.5 * crack);
        col = mix(col, barkC, smoothstep(0.1, 0.9, bark));
        col = mix(col, vec3(0.055, 0.04, 0.03) * (0.8 + 0.4 * pNoise(vObj * 20.0)), scar);  // old wounds
        col = mix(col, vec3(0.01, 0.008, 0.007), dark);                                    // woodpecker holes
        col = mix(col, vec3(0.19, 0.15, 0.1), crown * 0.75);                               // felted crown
        // spines seen edge-on hide the skin behind a grey haze: the bright outline of a cactus against the light
        vec3 V = normalize(vViewPosition);
        float graze = pow(1.0 - abs(dot(normal, V)), 2.0);
        col = mix(col, vec3(0.3, 0.28, 0.24), graze * (0.2 + 0.55 * smoothstep(0.55, 1.0, crest)) * (1.0 - bark) * (1.0 - dark) * uSpineHaze);
        diffuseColor.rgb *= col * (0.28 + 0.72 * ao);
        roughnessFactor = mix(0.55, 0.95, max(bark, scar));
      }`)
      .replace('#include <fog_fragment>', HALF_FOG);
  };
  m.customProgramCacheKey = () => 'saguaro-skin-v1';
  return m;
}

// ---------------- spines: camera-facing needles, one instance each ----------------
export const SPINE_U = { uPx: { value: 0.002 } };
export function spineMaterial() {
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.55, metalness: 0, side: THREE.DoubleSide });
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, SPINE_U);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec2 aT; attribute vec3 iBase; attribute vec3 iDir; attribute float iW; attribute vec3 iN; attribute vec3 iCol;\nuniform float uPx; varying vec3 vSp;')
      .replace('#include <beginnormal_vertex>', 'vec3 objectNormal = iN;')
      .replace('#include <begin_vertex>', 'vec3 transformed = iBase + iDir * aT.x; vSp = iCol * mix(1.0, 0.42, aT.x * aT.x);')
      .replace('#include <project_vertex>', `vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
        { vec3 dv = normalize((modelViewMatrix * vec4(iDir, 0.0)).xyz);
          vec3 sv = cross(dv, normalize(mvPosition.xyz)); float sl = length(sv); sv = sl > 1e-4 ? sv / sl : vec3(1.0, 0.0, 0.0);
          float w = max(iW * (1.0 - 0.85 * aT.x), -mvPosition.z * uPx * 0.45); // never much thinner than a pixel
          mvPosition.xyz += sv * w * aT.y; }
        gl_Position = projectionMatrix * mvPosition;`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vSp;')
      .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb *= vSp;')
      .replace('#include <fog_fragment>', HALF_FOG);
  };
  m.customProgramCacheKey = () => 'spine-v1';
  return m;
}
// a saguaro areole: one stout central spine and three shorter radial ones
export function buildSpines(sc, seed, H) {
  const A = sc.areoles, per = 4, n = A.n * per;
  const iBase = new Float32Array(n * 3), iDir = new Float32Array(n * 3), iW = new Float32Array(n), iN = new Float32Array(n * 3), iCol = new Float32Array(n * 3);
  const rnd = rng(seed);
  const P = new THREE.Vector3(), N = new THREE.Vector3(), T = new THREE.Vector3(), e1 = new THREE.Vector3(), e2 = new THREE.Vector3(), D = new THREE.Vector3();
  let k = 0;
  const put = (len, w, col) => {
    iBase.set([P.x + N.x * 0.002, P.y + N.y * 0.002, P.z + N.z * 0.002], k * 3);
    iDir.set([D.x * len, D.y * len, D.z * len], k * 3);
    iW[k] = w; iN.set([N.x, N.y, N.z], k * 3); iCol.set(col, k * 3); k++;
  };
  for (let i = 0; i < A.n; i++) {
    P.set(A.ap[3 * i], A.ap[3 * i + 1], A.ap[3 * i + 2]).multiplyScalar(A.aps);
    N.set(A.an[4 * i], A.an[4 * i + 1], A.an[4 * i + 2]).normalize();
    T.set(A.at[4 * i], A.at[4 * i + 1], A.at[4 * i + 2]).normalize();
    const crown = A.an[4 * i + 3] > 60;
    e1.copy(T).addScaledVector(N, -T.dot(N)).normalize(); e2.crossVectors(N, e1);
    // old spines go grey; young ones near the crown are red-brown
    const g = 0.75 + 0.45 * rnd(), age = Math.min(1, P.y / (H * 0.9));
    const col = crown ? [0.3 * g, 0.15 * g, 0.075 * g] : [(0.36 + 0.06 * age) * g, (0.335 + 0.04 * age) * g, (0.29 + 0.02 * age) * g];
    D.copy(N).multiplyScalar(0.92).addScaledVector(e1, -0.38).add({ x: (rnd() - 0.5) * 0.25, y: (rnd() - 0.5) * 0.25, z: (rnd() - 0.5) * 0.25 }).normalize();
    put(crown ? 0.018 + 0.012 * rnd() : 0.026 + 0.02 * rnd(), 0.0011, col);
    for (const phi of [-2.0, 2.0, Math.PI]) {
      const f = phi + (rnd() - 0.5) * 0.6;
      D.copy(N).multiplyScalar(0.35).addScaledVector(e1, Math.cos(f) * 0.94).addScaledVector(e2, Math.sin(f) * 0.94).normalize();
      put(0.011 + 0.011 * rnd(), 0.0006, [col[0] * 0.92, col[1] * 0.92, col[2] * 0.92]);
    }
  }
  const g = new THREE.InstancedBufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12), 3));
  g.setAttribute('aT', new THREE.BufferAttribute(new Float32Array([0, -1, 0, 1, 1, -1, 1, 1]), 2));
  g.setIndex([0, 2, 1, 1, 2, 3]);
  g.setAttribute('iBase', new THREE.InstancedBufferAttribute(iBase, 3));
  g.setAttribute('iDir', new THREE.InstancedBufferAttribute(iDir, 3));
  g.setAttribute('iW', new THREE.InstancedBufferAttribute(iW, 1));
  g.setAttribute('iN', new THREE.InstancedBufferAttribute(iN, 3));
  g.setAttribute('iCol', new THREE.InstancedBufferAttribute(iCol, 3));
  g.instanceCount = n;
  g.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, H / 2, 0), H / 2 + 1.6);
  return g;
}

// ---------------- wind: everything thin sways together ----------------
export const WIND_U = { uTime: { value: 0 }, uGust: { value: 0 }, uWind: { value: new THREE.Vector2(0.94, 0.33) } };
// code-built plants: vertex colours, a sway weight and phase per vertex, half fog
export function plantMaterial(key, roughness = 0.85, map = null, twoSided = !!map) {
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness, metalness: 0, map, alphaTest: map ? 0.4 : 0, side: twoSided ? THREE.DoubleSide : THREE.FrontSide });
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, WIND_U);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec2 aSway; uniform float uTime, uGust; uniform vec2 uWind;')
      .replace('#include <project_vertex>', `vec4 mvPosition = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
        mvPosition = instanceMatrix * mvPosition;
        { float ph = aSway.y + dot(instanceMatrix[3].xz, vec2(0.13, 0.17));
          float wob = sin(uTime * 1.6 + ph) * 0.65 + sin(uTime * 2.9 + ph * 1.7) * 0.35;
          float sc = length(instanceMatrix[1].xyz);
          mvPosition.xz += uWind * (aSway.x * sc) * (0.05 + 0.32 * uGust + wob * (0.035 + 0.1 * uGust)); }
        #endif
        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <fog_fragment>', HALF_FOG);
    // leaves: the same outward normal on both faces, so a crown shades as one volume instead of flickering dark
    if (twoSided) sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>', '#include <normal_fragment_begin>\n normal = normalize(vNormal);');
  };
  m.customProgramCacheKey = () => key;
  return m;
}
// the shadow of a leafy card is cut out like the card
export function cardDepthMaterial(map) { return new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map, alphaTest: 0.4 }); }

// ---------------- leaf textures, drawn once: many small leaves on twigs, colour bled under the cut-out ----------------
export function leafTexture(kind, seed = 5) {
  const S = 256, rnd = rng(seed);
  const mk = () => { const c = document.createElement('canvas'); c.width = c.height = S; return [c, c.getContext('2d')]; };
  const [cc, gc] = mk(), [ca, ga] = mk();
  const base = kind === 'creosote' ? '#363c22' : '#4a4d40';
  gc.fillStyle = base; gc.fillRect(0, 0, S, S);           // colour everywhere, so edges never pick up black
  ga.fillStyle = '#000'; ga.fillRect(0, 0, S, S);
  ga.fillStyle = '#fff'; ga.fillRect(0, 0, 6, 6);         // a solid corner for stems, which sample uv (0,0)
  const both = (f) => { f(gc, false); f(ga, true); };
  const twig = (x0, y0, ang, len, w) => {
    const pts = [[x0, y0]];
    let x = x0, y = y0, a = ang;
    for (let s = 0; s < len; s += 12) { a += (rnd() - 0.5) * 0.7; x += Math.cos(a) * 12; y += Math.sin(a) * 12; pts.push([x, y]); }
    both((g, alpha) => { g.strokeStyle = alpha ? '#fff' : (kind === 'creosote' ? '#2a2620' : '#8c8270'); g.lineWidth = w; g.beginPath(); g.moveTo(pts[0][0], pts[0][1]); for (const p of pts) g.lineTo(p[0], p[1]); g.stroke(); });
    return pts;
  };
  const ell = (x, y, rx, ry, rot, col) => both((g, alpha) => { g.fillStyle = alpha ? '#fff' : col; g.beginPath(); g.ellipse(x, y, rx, ry, rot, 0, Math.PI * 2); g.fill(); });
  const tri = (x, y, r, rot, col) => both((g, alpha) => { g.fillStyle = alpha ? '#fff' : col; g.beginPath(); for (let k = 0; k < 3; k++) { const a = rot + (k * Math.PI * 2) / 3; g.lineTo(x + Math.cos(a) * r * (k === 0 ? 1.3 : 0.8), y + Math.sin(a) * r * (k === 0 ? 1.3 : 0.8)); } g.fill(); });
  const rgb = (r, g, b) => `rgb(${r | 0},${g | 0},${b | 0})`;
  if (kind === 'creosote') {
    // twigs fanning up from the bottom, leaflet pairs at every node, crowding toward the tips
    for (let i = 0; i < 7; i++) {
      const pts = twig(S * (0.3 + 0.4 * rnd()), S * 0.98, -Math.PI / 2 + (rnd() - 0.5) * 1.3, 150 + rnd() * 90, 2.2);
      pts.forEach(([x, y], k) => {
        if (k < 2) return;
        const n = k > pts.length * 0.5 ? 3 : 1;
        for (let q = 0; q < n; q++) {
          const a = rnd() * Math.PI * 2, l = 0.8 + 0.4 * rnd(), v = 0.8 + 0.4 * rnd();
          const col = rnd() < 0.12 ? rgb(90 * v, 88 * v, 50 * v) : rgb(52 * v, 58 * v, 33 * v);
          ell(x + Math.cos(a) * 6, y + Math.sin(a) * 6, 7 * l, 3.2 * l, a, col);
          ell(x + Math.cos(a + 0.7) * 6, y + Math.sin(a + 0.7) * 6, 7 * l, 3.2 * l, a + 0.7, col);
        }
      });
    }
  } else {
    // bursage: a dense tuft of small grey-green triangles, many already dry
    for (let i = 0; i < 9; i++) twig(S * (0.2 + 0.6 * rnd()), S * 0.98, -Math.PI / 2 + (rnd() - 0.5) * 1.6, 120 + rnd() * 100, 1.6);
    for (let i = 0; i < 760; i++) {
      const r = Math.sqrt(rnd()) * 0.5, a = rnd() * Math.PI * 2, x = S * (0.5 + Math.cos(a) * r), y = S * (0.52 + Math.sin(a) * r * 0.92);
      const v = 0.8 + 0.4 * rnd(), d = rnd();
      const col = d < 0.55 ? rgb(66 * v, 74 * v, 56 * v) : d < 0.9 ? rgb(98 * v, 94 * v, 74 * v) : rgb(126 * v, 112 * v, 84 * v);
      tri(x, y, 5 + rnd() * 3, rnd() * 6.28, col);
    }
  }
  const c = gc.getImageData(0, 0, S, S).data, a = ga.getImageData(0, 0, S, S).data, out = new Uint8Array(S * S * 4);
  for (let i = 0; i < S * S; i++) { out[4 * i] = c[4 * i]; out[4 * i + 1] = c[4 * i + 1]; out[4 * i + 2] = c[4 * i + 2]; out[4 * i + 3] = a[4 * i]; }
  const t = new THREE.DataTexture(out, S, S, THREE.RGBAFormat);
  t.colorSpace = THREE.SRGBColorSpace; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter;
  t.flipY = false; t.needsUpdate = true;
  return t;
}
class GeoBuilder {
  constructor() { this.p = []; this.n = []; this.c = []; this.w = []; this.u = []; this.i = []; }
  get count() { return this.p.length / 3; }
  vert(x, y, z, nx, ny, nz, col, sw, ph, u = 0.004, v = 0.004) { this.p.push(x, y, z); this.n.push(nx, ny, nz); this.c.push(col[0], col[1], col[2]); this.w.push(sw, ph); this.u.push(u, v); return this.count - 1; }
  // a square card of leaves centred at p, spanned by unit vectors r and up, lit with normal n
  card(p, r, up, size, n, col, sw, ph) {
    const h = size / 2, b = this.count;
    for (const [i, j] of [[0, 0], [1, 0], [1, 1], [0, 1]]) {
      const x = (i - 0.5) * 2 * h, y = (j - 0.5) * 2 * h;
      this.vert(p.x + r.x * x + up.x * y, p.y + r.y * x + up.y * y, p.z + r.z * x + up.z * y, n.x, n.y, n.z, col, sw, ph, 0.03 + 0.94 * i, 0.03 + 0.94 * (1 - j));
    }
    this.i.push(b, b + 1, b + 2, b, b + 2, b + 3);
  }
  // a tapering tube along pts; colorAt(t) and swayAt(t) for t = 0..1 along it
  tube(pts, radii, sides, colorAt, swayAt, ph) {
    const n = pts.length, T = new THREE.Vector3(), N = new THREE.Vector3(), B = new THREE.Vector3(), base = this.count;
    for (let k = 0; k < n; k++) {
      if (k < n - 1) T.subVectors(pts[k + 1], pts[k]).normalize(); else T.subVectors(pts[k], pts[k - 1]).normalize();
      if (k === 0) { N.set(0.3, 0.1, 1); if (Math.abs(T.dot(N.normalize())) > 0.9) N.set(1, 0, 0); }
      N.addScaledVector(T, -N.dot(T)).normalize(); B.crossVectors(T, N);
      const t = k / (n - 1), col = colorAt(t), sw = swayAt(t), r = radii[k];
      for (let j = 0; j < sides; j++) {
        const a = (j / sides) * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a);
        const nx = N.x * ca + B.x * sa, ny = N.y * ca + B.y * sa, nz = N.z * ca + B.z * sa;
        this.vert(pts[k].x + nx * r, pts[k].y + ny * r, pts[k].z + nz * r, nx, ny, nz, col, sw, ph);
      }
    }
    for (let k = 0; k < n - 1; k++) for (let j = 0; j < sides; j++) {
      const a = base + k * sides + j, b = base + k * sides + ((j + 1) % sides), c = a + sides, d = b + sides;
      this.i.push(a, b, c, b, d, c);
    }
  }
  // a little three-sided spike from p along d (unit), lit like the stem it grows from (n)
  spike(p, d, len, w, n, col, tipCol, sw, ph) {
    const e1 = new THREE.Vector3(0, 1, 0); if (Math.abs(e1.dot(d)) > 0.9) e1.set(1, 0, 0);
    e1.addScaledVector(d, -e1.dot(d)).normalize(); const e2 = new THREE.Vector3().crossVectors(d, e1);
    const base = this.count;
    for (let j = 0; j < 3; j++) {
      const a = (j / 3) * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a);
      this.vert(p.x + (e1.x * ca + e2.x * sa) * w, p.y + (e1.y * ca + e2.y * sa) * w, p.z + (e1.z * ca + e2.z * sa) * w, n.x, n.y, n.z, col, sw, ph);
    }
    const t = this.vert(p.x + d.x * len, p.y + d.y * len, p.z + d.z * len, n.x, n.y, n.z, tipCol, sw, ph);
    this.i.push(base, base + 1, t, base + 1, base + 2, t, base + 2, base, t);
  }
  // a flat leaf (both faces), lit with the given normal so the crown shades as one soft volume
  leaf(p, d, side, len, wid, n, col, sw, ph) {
    const tip = p.clone().addScaledVector(d, len), m1 = p.clone().addScaledVector(d, len * 0.45).addScaledVector(side, wid * 0.5), m2 = p.clone().addScaledVector(d, len * 0.45).addScaledVector(side, -wid * 0.5);
    const a = this.vert(p.x, p.y, p.z, n.x, n.y, n.z, col, sw, ph), b = this.vert(m1.x, m1.y, m1.z, n.x, n.y, n.z, col, sw, ph);
    const c = this.vert(tip.x, tip.y, tip.z, n.x, n.y, n.z, col, sw, ph), e = this.vert(m2.x, m2.y, m2.z, n.x, n.y, n.z, col, sw, ph);
    this.i.push(a, b, c, a, c, e, a, c, b, a, e, c);
  }
  toGeometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    g.setAttribute('aSway', new THREE.Float32BufferAttribute(this.w, 2));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.u, 2));
    g.setIndex(this.count > 65535 ? new THREE.Uint32BufferAttribute(this.i, 1) : new THREE.Uint16BufferAttribute(this.i, 1));
    g.computeBoundingSphere();
    return g;
  }
  // stems first, then the leaf cards of `cards`, as two draw groups (opaque stems, cut-out leaves)
  withCards(cards) {
    const off = this.count, ni = this.i.length;
    this.p.push(...cards.p); this.n.push(...cards.n); this.c.push(...cards.c); this.w.push(...cards.w); this.u.push(...cards.u);
    for (const k of cards.i) this.i.push(k + off);
    const g = this.toGeometry();
    g.addGroup(0, ni, 0); g.addGroup(ni, cards.i.length, 1);
    return g;
  }
}
const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
const mixc = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

// ---------------- ocotillo: a vase of long thorny whips; in autumn mostly bare, a few still holding yellowing leaves ----------------
function ocotilloPlan(seed) {
  const rnd = rng(seed), canes = [], n = 22 + Math.floor(rnd() * 22), rc = 0.12 + rnd() * 0.08;
  const leafy = rnd() < 0.4;
  for (let i = 0; i < n; i++) {
    const rr = Math.sqrt(rnd()) * rc * 0.85, az = rnd() * Math.PI * 2, out = rr / rc;
    const start = V3(Math.cos(az) * rr, 0.03, Math.sin(az) * rr);
    const tilt = 0.06 + out * 0.42 + rnd() * 0.12, dirAz = az + (rnd() - 0.5) * 0.5;
    const L = 2.2 + rnd() * 2.6 * (1 - 0.35 * out), pts = [], dead = rnd() < 0.06;
    let d = V3(Math.sin(tilt) * Math.cos(dirAz), Math.cos(tilt), Math.sin(tilt) * Math.sin(dirAz)), p = start.clone();
    const segs = 16, bend = (0.04 + out * 0.12) * (rnd() < 0.5 ? 1 : 0.6), wav = rnd() * 6;
    for (let k = 0; k <= segs; k++) {
      pts.push(p.clone());
      const t = k / segs, step = L / segs;
      // tips lean out a little under their own weight, and the whole cane wanders slightly
      d.x += Math.cos(dirAz) * bend * step * (0.5 + t) + Math.sin(wav + t * 7) * 0.012;
      d.z += Math.sin(dirAz) * bend * step * (0.5 + t) + Math.cos(wav + t * 5) * 0.012;
      d.normalize(); p.addScaledVector(d, step);
    }
    const r0 = 0.016 + rnd() * 0.008;
    canes.push({ pts, r0, L, dead, ph: rnd() * 6.28, leafy: leafy && !dead && rnd() < 0.8 });
  }
  return { canes, rc, leafy };
}
export function ocotilloGeometry(seed, lod) {
  const plan = ocotilloPlan(seed), rnd = rng(seed * 31 + 7), b = new GeoBuilder();
  const sides = [6, 4, 3][lod], every = [1, 2, 4][lod];
  // the woody crown they all come out of
  const crown = [V3(0, -0.05, 0), V3(0, 0.05, 0), V3(0, 0.1, 0)];
  b.tube(crown, [plan.rc * 1.05, plan.rc, plan.rc * 0.6], [10, 6, 4][lod], () => [0.1, 0.085, 0.065], () => 0, 0);
  for (const c of plan.canes) {
    const pts = c.pts.filter((_, k) => k % every === 0 || k === c.pts.length - 1);
    const radii = pts.map((_, k) => c.r0 * Math.pow(1 - 0.8 * (k / (pts.length - 1)), 0.9));
    const base = c.dead ? [0.15, 0.14, 0.125] : [0.085, 0.078, 0.063], top = c.dead ? [0.18, 0.17, 0.155] : [0.09, 0.095, 0.07];
    b.tube(pts, radii, sides, (t) => mixc(base, top, t), (t) => Math.pow(t, 1.6) * c.L * 0.22, c.ph);
    if (lod > 1) continue;
    // spines in a spiral every few centimetres; near the tips the leaves of the summer rains, yellowing
    const P = c.pts, segL = c.L / (P.length - 1), gap = lod === 0 ? 0.045 : 0.12;
    for (let s = 0.15, ang = rnd() * 6.28; s < c.L * 0.97; s += gap * (0.8 + 0.4 * rnd()), ang += 2.4) {
      const k = Math.min(P.length - 2, Math.floor(s / segL)), f = s / segL - k;
      const T = P[k + 1].clone().sub(P[k]).normalize(), at = P[k].clone().lerp(P[k + 1], f);
      let N = V3(0, 1, 0); if (Math.abs(N.dot(T)) > 0.9) N.set(1, 0, 0);
      N.addScaledVector(T, -N.dot(T)).normalize(); const Bv = V3(0, 0, 0).crossVectors(T, N);
      const out = N.clone().multiplyScalar(Math.cos(ang)).addScaledVector(Bv, Math.sin(ang));
      const r = c.r0 * Math.pow(1 - 0.8 * (s / c.L), 0.9), t = s / c.L, sw = Math.pow(t, 1.6) * c.L * 0.22;
      const p = at.clone().addScaledVector(out, r * 0.8);
      if (lod === 0) {
        const d = out.clone().multiplyScalar(0.75).addScaledVector(T, 0.55).normalize();
        b.spike(p, d, 0.012 + rnd() * 0.01, 0.0022, out, c.dead ? [0.2, 0.19, 0.17] : [0.2, 0.18, 0.15], [0.06, 0.055, 0.05], sw, c.ph);
      }
      if (c.leafy && t > 0.45 && rnd() < 0.7) {
        const nl = lod === 0 ? 2 + Math.floor(rnd() * 3) : 1;
        for (let q = 0; q < nl; q++) {
          const d = out.clone().multiplyScalar(0.8).addScaledVector(T, 0.4 + rnd() * 0.4).add(V3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).multiplyScalar(0.7)).normalize();
          const side = V3(0, 0, 0).crossVectors(d, out).normalize();
          const y = rnd(), col = y < 0.25 ? [0.1, 0.13, 0.035] : y < 0.75 ? [0.26, 0.21, 0.05] : [0.2, 0.12, 0.05];
          b.leaf(p, d, side, (lod === 0 ? 0.022 : 0.04) + rnd() * 0.01, lod === 0 ? 0.011 : 0.022, out, col, sw, c.ph);
        }
      }
    }
  }
  return b.toGeometry();
}

// ---------------- creosote bush: an open crown of grey zigzag stems, dark resinous leaves out at the tips ----------------
function creosotePlan(seed) {
  const rnd = rng(seed), branches = [], H = 1.0 + rnd() * 1.1, nMain = 9 + Math.floor(rnd() * 8), rb = 0.1 + rnd() * 0.1;
  const grow = (start, dir, len, r0, depth, ph) => {
    const pts = [start.clone()], d = dir.clone(), p = start.clone();
    let s = 0;
    while (s < len) {
      const step = 0.08 + rnd() * 0.07;
      // zigzag at each node, curving gently up and out
      d.x += (rnd() - 0.5) * 0.4; d.z += (rnd() - 0.5) * 0.4; d.y += (rnd() - 0.5) * 0.2 + 0.06;
      d.normalize(); p.addScaledVector(d, step); s += step; pts.push(p.clone());
      if (depth < 2 && s > len * 0.25 && s < len * 0.85 && rnd() < 0.32) {
        const side = V3(rnd() - 0.5, 0.25 + rnd() * 0.3, rnd() - 0.5).normalize().lerp(d, 0.45).normalize();
        grow(p.clone(), side, (len - s) * (0.5 + rnd() * 0.4), r0 * 0.55, depth + 1, ph + rnd());
      }
    }
    branches.push({ pts, r0, len, depth, ph });
  };
  for (let i = 0; i < nMain; i++) {
    const az = (i / nMain) * Math.PI * 2 + rnd() * 0.5, rr = Math.sqrt(rnd()) * rb, tilt = 0.14 + rnd() * 0.36;
    const start = V3(Math.cos(az) * rr, 0, Math.sin(az) * rr);
    const dir = V3(Math.sin(tilt) * Math.cos(az), Math.cos(tilt), Math.sin(tilt) * Math.sin(az));
    grow(start, dir, H * (0.75 + rnd() * 0.45) / Math.cos(tilt * 0.6), 0.011 + rnd() * 0.004, 0, rnd() * 6.28);
  }
  return { branches, H };
}
export function creosoteGeometry(seed, lod) {
  const plan = creosotePlan(seed), rnd = rng(seed * 17 + 3), b = new GeoBuilder(), cards = new GeoBuilder();
  const centre = V3(0, plan.H * 0.45, 0), size = [0.13, 0.24, 0.42][lod], gap = [0.045, 0.11, 0.24][lod];
  for (const br of plan.branches) {
    if (lod === 2 && br.depth > 1) continue;
    const every = lod === 0 ? 1 : 2, pts = br.pts.filter((_, k) => k % every === 0 || k === br.pts.length - 1);
    if (pts.length < 2) continue;
    const radii = pts.map((_, k) => Math.max(0.0022, br.r0 * (1 - 0.75 * (k / (pts.length - 1)))));
    // grey-brown bark, darker toward the ground
    b.tube(pts, radii, lod === 0 ? 4 : 3, (t) => mixc([0.05, 0.044, 0.037], [0.085, 0.076, 0.064], t), (t) => Math.pow(t, 1.5) * 0.35, br.ph);
    // leaves crowd the outer part of every stem
    const P = br.pts;
    let acc = gap;
    for (let k = 1; k < P.length; k++) {
      const t = k / (P.length - 1);
      acc += P[k].distanceTo(P[k - 1]);
      if (t < 0.35 || acc < gap) continue;
      acc = 0;
      const at = P[k].clone().add(V3(rnd() - 0.5, rnd() - 0.3, rnd() - 0.5).multiplyScalar(size * 0.3));
      const n = at.clone().sub(centre).normalize(); n.y += 0.9; n.normalize();
      // each card faces somewhere between outward and a random way, so the crown has depth from every side
      const f = V3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).normalize().lerp(n, 0.4).normalize();
      const r = V3(0, 1, 0).cross(f); if (r.lengthSq() < 1e-3) r.set(1, 0, 0); r.normalize();
      const up = V3(0, 0, 0).crossVectors(f, r).normalize();
      const g = 0.85 + rnd() * 0.3;
      cards.card(at, r, up, size * (0.8 + rnd() * 0.45), n, [g, g, g * (0.9 + rnd() * 0.2)], Math.pow(t, 1.5) * 0.35, br.ph);
    }
  }
  return b.withCards(cards);
}

// ---------------- bursage: a low grey dome of fine twigs and small triangular leaves, half dry in autumn ----------------
export function bursageGeometry(seed, lod) {
  const rnd = rng(seed), b = new GeoBuilder(), cards = new GeoBuilder();
  const H = 0.35 + rnd() * 0.4, W = H * (1.3 + rnd() * 0.5), centre = V3(0, H * 0.2, 0);
  const nTwig = [14, 7, 0][lod], nCard = [90, 28, 12][lod], size = [0.15, 0.27, 0.42][lod];
  for (let i = 0; i < nTwig; i++) {
    const az = rnd() * Math.PI * 2, el = 0.35 + rnd() * 0.9, ph = rnd() * 6.28;
    const dir = V3(Math.cos(az) * Math.cos(el) * W / H * 0.5, Math.sin(el), Math.sin(az) * Math.cos(el) * W / H * 0.5).normalize();
    const pts = [V3(Math.cos(az) * 0.03, 0, Math.sin(az) * 0.03)], p = pts[0].clone();
    for (let k = 0; k < 4; k++) { p.addScaledVector(dir, (0.85 * H) / 4); p.x += (rnd() - 0.5) * 0.03; p.z += (rnd() - 0.5) * 0.03; pts.push(p.clone()); }
    b.tube(pts, pts.map((_, k) => 0.006 * (1 - 0.6 * k / 4)), 3, () => [0.12, 0.11, 0.09], (t) => t * t * 0.12, ph);
  }
  for (let i = 0; i < nCard; i++) {
    // spread over a squashed dome, denser toward the top
    const az = rnd() * Math.PI * 2, el = Math.asin(Math.pow(rnd(), 0.7)), rr = 0.75 + 0.25 * rnd();
    const at = V3(Math.cos(az) * Math.cos(el) * W * 0.5 * rr, Math.sin(el) * H * rr, Math.sin(az) * Math.cos(el) * W * 0.5 * rr);
    const n = at.clone().sub(centre).normalize();
    const f = V3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).normalize().lerp(n, 0.78).normalize();
    const r = V3(0, 1, 0).cross(f); if (r.lengthSq() < 1e-3) r.set(1, 0, 0); r.normalize();
    const up = V3(0, 0, 0).crossVectors(f, r).normalize(), g = 0.85 + rnd() * 0.3;
    n.y += 0.9; n.normalize();
    cards.card(at, r, up, size * (0.8 + rnd() * 0.4), n, [g, g, g], Math.pow(Math.max(0, at.y / H), 2) * 0.12, rnd() * 6.28);
  }
  return b.withCards(cards);
}

// ---------------- autumn bunchgrass: arching straw blades and a few seed stalks ----------------
// three kinds: three-awn (straw with a purple cast, feathery awns), galleta (coarse grey straw), grama (pale gold, little comb flags)
export function grassTuftGeometry(seed, lod) {
  const rnd = rng(seed), b = new GeoBuilder(), kind = seed % 3;
  const nBlades = [34, 14, 7][lod], segs = [4, 3, 2][lod], nStalk = [6, 3, 1][lod];
  const H = [0.34, 0.3, 0.42][kind] * (0.75 + rnd() * 0.5);
  const tipC = [[0.44, 0.38, 0.29], [0.39, 0.37, 0.32], [0.48, 0.41, 0.26]][kind], midC = [[0.36, 0.28, 0.21], [0.3, 0.28, 0.22], [0.4, 0.33, 0.2]][kind];
  const ribbon = (pts, widths, cols, sw, ph) => {
    // a flat strip that turns to face sideways from its own direction, lit as if it faced the sky
    const base = b.count;
    for (let k = 0; k < pts.length; k++) {
      const d = (k < pts.length - 1 ? pts[k + 1].clone().sub(pts[k]) : pts[k].clone().sub(pts[k - 1])).normalize();
      const side = V3(-d.z, 0, d.x); if (side.lengthSq() < 1e-4) side.set(1, 0, 0); side.normalize();
      const n = V3(0, 1, 0).addScaledVector(d, -0.3).normalize(), w = widths[k];
      b.vert(pts[k].x - side.x * w, pts[k].y, pts[k].z - side.z * w, n.x, n.y, n.z, cols[k], sw[k], ph);
      b.vert(pts[k].x + side.x * w, pts[k].y, pts[k].z + side.z * w, n.x, n.y, n.z, cols[k], sw[k], ph);
    }
    for (let k = 0; k < pts.length - 1; k++) { const a = base + 2 * k; b.i.push(a, a + 1, a + 3, a, a + 3, a + 2); }
  };
  for (let i = 0; i < nBlades; i++) {
    const az = rnd() * Math.PI * 2, rr = rnd() * 0.035, lean = 0.12 + rnd() * 0.75, h = H * (0.45 + rnd() * 0.6), ph = rnd() * 6.28;
    const shade = 0.75 + rnd() * 0.4, old = rnd() < 0.25;
    let p = V3(Math.cos(az) * rr, 0, Math.sin(az) * rr), d = V3(Math.sin(lean) * Math.cos(az), Math.cos(lean), Math.sin(lean) * Math.sin(az));
    const pts = [p.clone()], ws = [0.005], cs = [[0.09, 0.075, 0.055]], sw = [0];
    for (let k = 1; k <= segs; k++) {
      const t = k / segs;
      // each blade arches out and its tip droops
      d.x += Math.cos(az) * 0.22 * t; d.z += Math.sin(az) * 0.22 * t; d.y -= 0.18 * t * (lean + 0.3); d.normalize();
      p = p.clone().addScaledVector(d, h / segs); pts.push(p);
      ws.push(0.005 * (1 - 0.8 * t)); sw.push(t * t * h * 0.6);
      const c = mixc(midC, tipC, t).map((v) => v * shade);
      cs.push(old ? mixc(c, [0.33, 0.31, 0.28], 0.6) : c);
    }
    ribbon(pts, ws, cs, sw, ph);
  }
  for (let i = 0; i < nStalk; i++) {
    const az = rnd() * Math.PI * 2, lean = 0.05 + rnd() * 0.35, h = H * (1.15 + rnd() * 0.6), ph = rnd() * 6.28;
    const d = V3(Math.sin(lean) * Math.cos(az), Math.cos(lean), Math.sin(lean) * Math.sin(az));
    const pts = [], ws = [], cs = [], sw = [];
    for (let k = 0; k <= 4; k++) { const t = k / 4; pts.push(d.clone().multiplyScalar(h * t).add(V3(Math.cos(az) * 0.08 * t * t, 0, Math.sin(az) * 0.08 * t * t))); ws.push(0.0012); cs.push(mixc(midC, tipC, t)); sw.push(t * t * h * 0.8); }
    ribbon(pts, ws, cs, sw, ph);
    // the seed head: feathery awns, or a little comb
    const top = pts[4];
    for (let q = 0; q < (kind === 2 ? 4 : 7); q++) {
      const a = rnd() * Math.PI * 2, out = V3(Math.cos(a), kind === 2 ? -0.2 : 0.4 + rnd() * 0.6, Math.sin(a)).normalize();
      const s0 = top.clone().addScaledVector(d, -rnd() * 0.06), len = kind === 2 ? 0.012 : 0.03 + rnd() * 0.03;
      ribbon([s0, s0.clone().addScaledVector(out, len)], [kind === 2 ? 0.003 : 0.0008, 0.0003], [tipC, kind === 0 ? [0.42, 0.3, 0.3] : tipC], [h * 0.8, h * 0.85], ph);
    }
  }
  return b.toGeometry();
}
export function makeGrass(clearFire) {
  const mat = plantMaterial('grass-v1', 0.9, null, true);
  // temporary: on average a tuft every 2 square metres, in patches, drawn out to 40 m
  const clump = (x, z, rnd) => rnd() < Math.min(1, Math.max(0.05, (noise2(x * 0.09 + 3.1, z * 0.09 - 7.7) - 0.25) * 2.2 + 0.25 * noise2(x * 0.5, z * 0.5)));
  return new PlantField({ kinds: [1, 2, 3, 4, 5, 6].map((sd) => ({ lods: [0, 1, 2].map((l) => grassTuftGeometry(sd, l)), count: 1200, r: 0.15, H: 0.5, scale: [0.7, 1.3] })),
    material: mat, lodDist: [8, 20], maxDist: 40, clear: clearFire, seed: 59, minGap: 0.05, claim: false, accept: clump, lazy: true });
}

// ---------------- tumbleweed: a ball of stiff, endlessly forking straw-coloured stems ----------------
export function tumbleweedGeometry(seed) {
  const rnd = rng(seed), b = new GeoBuilder(), R = 0.3;
  const c = V3(0, 0, 0);
  const grow = (p0, d0, len, r0, depth) => {
    const pts = [p0.clone()], d = d0.clone(), p = p0.clone();
    let s = 0;
    while (s < len) {
      const step = 0.025 + rnd() * 0.02;
      d.x += (rnd() - 0.5) * 0.5; d.y += (rnd() - 0.5) * 0.5; d.z += (rnd() - 0.5) * 0.5; d.normalize();
      // stay inside the ball: near the edge, turn along it
      const q = p.clone().addScaledVector(d, step), out = q.clone().sub(c), l = out.length();
      if (l > R * (0.85 + 0.2 * rnd())) { out.normalize(); d.addScaledVector(out, -1.3 * d.dot(out)).normalize(); }
      p.addScaledVector(d, step); s += step; pts.push(p.clone());
      if (depth < 3 && rnd() < 0.2) grow(p.clone(), V3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).normalize().lerp(d, 0.3).normalize(), (len - s) * (0.6 + rnd() * 0.5) + 0.05, r0 * 0.7, depth + 1);
    }
    const tone = 0.85 + rnd() * 0.3;
    b.tube(pts, pts.map((_, k) => Math.max(0.0007, r0 * (1 - 0.7 * k / pts.length))), 3, (t) => mixc([0.27, 0.22, 0.15], [0.36, 0.3, 0.2], t).map((v) => v * tone), () => 0, 0);
  };
  // from the broken-off root at the bottom, stems fan up and curl round into a ball
  const root = V3(0, -R * 0.92, 0);
  b.tube([root.clone().add(V3(0, -0.03, 0)), root], [0.006, 0.006], 4, () => [0.2, 0.16, 0.11], () => 0, 0);
  for (let i = 0; i < 9; i++) {
    const az = (i / 9) * Math.PI * 2 + rnd() * 0.4;
    grow(root, V3(Math.cos(az) * 0.8, 0.6, Math.sin(az) * 0.8).normalize(), 0.7 + rnd() * 0.5, 0.004, 0);
  }
  return b.toGeometry();
}

// ---------------- a field of one kind of plant: placement, level of detail, culling ----------------
// kinds: [{ lods: [geometry...], count, r (keep-clear radius), H (height), scale: [min, max] }]
export const TAKEN = []; // everything already placed, so plants don't grow through each other
export class PlantField {
  constructor({ kinds, material, lodDist, clear, seed, minGap = 0.5, shadowLods = 1, nearR = 0, depthMat = null, maxDist = 1e9, claim = true, cull = true, accept = null, lazy = false }) {
    this.lazy = lazy; this._last = [1e9, 1e9, 1e9];
    this.group = new THREE.Group(); this.depthMat = depthMat; this.maxDist = maxDist; this.cull = cull;
    this.kinds = kinds; this.lodDist = lodDist; this.nearR = nearR; this.shadowLods = shadowLods;
    const rnd = rng(seed);
    this.items = [];
    kinds.forEach((k, v) => {
      for (let i = 0; i < k.count; i++) {
        let x, z, tries = 0, ok;
        do {
          x = (rnd() - 0.5) * PLANT_PER; z = (rnd() - 0.5) * PLANT_PER; tries++;
          ok = !clear(x, z) && (!accept || accept(x, z, rnd)) && !TAKEN.some((o) => (claim || o.solid) && Math.hypot(wrapTo(o.x, x) - x, wrapTo(o.z, z) - z) < o.r + k.r + minGap);
        } while (!ok && tries < 400);
        const s = k.scale[0] + rnd() * (k.scale[1] - k.scale[0]), t = 0.9 + rnd() * 0.2;
        const it = { v, x, z, rot: rnd() * Math.PI * 2, s, tint: new THREE.Color(t, t * (0.97 + rnd() * 0.06), t * (0.95 + rnd() * 0.1)), H: k.H * s, r: k.r * s };
        this.items.push(it); if (claim) TAKEN.push(it);
      }
    });
    this.meshes = kinds.map((k, v) => k.lods.map((g, l) => {
      const m = new THREE.InstancedMesh(g, material, k.count);
      m.frustumCulled = false; m.count = 0;
      for (let i = 0; i < k.count; i++) m.setColorAt(i, new THREE.Color(1, 1, 1));
      this.group.add(m);
      return m;
    }));
    this._M = new THREE.Matrix4(); this._Q = new THREE.Quaternion(); this._S = new THREE.Vector3(); this._P = new THREE.Vector3(); this._Y = new THREE.Vector3(0, 1, 0);
    this._sph = new THREE.Sphere(); this._fr = new THREE.Frustum(); this._pv = new THREE.Matrix4();
  }
  setShadows(on) { this.meshes.forEach((lods) => lods.forEach((m, l) => { m.castShadow = on && l < this.shadowLods; m.receiveShadow = on && !this.depthMat; if (this.depthMat) m.customDepthMaterial = this.depthMat; })); }
  update(px, pz, camera) {
    // a field of thousands only re-sorts when you have moved or turned a little
    if (this.lazy) {
      const e = camera.matrixWorld.elements, yaw = Math.atan2(e[8], e[10]), L = this._last;
      if (Math.hypot(px - L[0], pz - L[1]) < 0.3 && Math.abs(Math.atan2(Math.sin(yaw - L[2]), Math.cos(yaw - L[2]))) < 0.06) return [];
      L[0] = px; L[1] = pz; L[2] = yaw;
    }
    for (const lods of this.meshes) for (const m of lods) m.count = 0;
    this._pv.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse); this._fr.setFromProjectionMatrix(this._pv);
    const near = [], L = this.lodDist;
    for (const it of this.items) {
      const x = wrapTo(it.x, px), z = wrapTo(it.z, pz), dx = x - px, dz = z - pz, d = Math.hypot(dx, dz);
      const edge = 1 - sstep(PLANT_PER * 0.36, PLANT_PER * 0.48, Math.max(Math.abs(dx), Math.abs(dz))); // sink out of sight near the tile edge
      if (edge < 0.002 || d > this.maxDist) continue;
      // things behind you are skipped, except close ones whose shadows may still fall in view
      if (this.cull && d > 20) { this._sph.center.set(x, it.H * 0.5, z); this._sph.radius = it.H * 0.5 + it.r + 1; if (!this._fr.intersectsSphere(this._sph)) continue; }
      let l = 0; while (l < L.length && d >= L[l]) l++;
      const lods = this.meshes[it.v]; l = Math.min(l, lods.length - 1);
      const m = lods[l];
      this._M.compose(this._P.set(x, 0, z), this._Q.setFromAxisAngle(this._Y, it.rot), this._S.setScalar(it.s * edge));
      m.setMatrixAt(m.count, this._M); m.setColorAt(m.count, it.tint); m.count++;
      if (d < this.nearR) near.push({ it, d, M: this._M.clone() });
    }
    for (const lods of this.meshes) for (const m of lods) { m.visible = m.count > 0; m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true; } // empty batches cost a draw call each
    return near;
  }
}

// ---------------- saguaros: sculpted, three levels, and every spine on the nearest few ----------------
// temporary: how many of each kind in every 120 m square (classic, old, spear, one arm, drooping)
export const SAGUARO_KINDS = ['classic', 'old', 'spear', 'onearm', 'droop'];
export const SAGUARO_COUNTS = [12, 5, 15, 10, 6];
export class SaguaroField extends PlantField {
  constructor(sculpts, clear, seed = 7) {
    const mat = saguaroMaterial();
    super({ kinds: sculpts.map((sc, v) => ({ lods: sc.lods, count: SAGUARO_COUNTS[v], r: sc.meta.R0 + 0.6, H: sc.meta.H, scale: [0.86, 1.14] })),
      material: mat, lodDist: [13, 36], clear, seed, minGap: 3.5, shadowLods: 2, nearR: 8 });
    for (const it of this.items) { it.solid = true; SAGUAROS.push({ x: it.x, z: it.z, r: sculpts[it.v].meta.R0 * 1.08 * it.s + 0.05 }); }
    this.spineMat = spineMaterial();
    this.spineGeos = sculpts.map((sc, v) => (sc.areoles ? buildSpines(sc, 101 + v * 7, sc.meta.H) : null));
    this.spines = [0, 1].map(() => { const m = new THREE.Mesh(this.spineGeos[0], this.spineMat); m.matrixAutoUpdate = false; m.visible = false; this.group.add(m); return m; });
  }
  update(px, pz, camera) {
    const near = super.update(px, pz, camera).filter((n) => this.spineGeos[n.it.v]).sort((a, b) => a.d - b.d);
    this.spines.forEach((sp, k) => {
      const n = near[k];
      sp.visible = !!n;
      if (n) { sp.geometry = this.spineGeos[n.it.v]; sp.matrix.copy(n.M); sp.matrixWorldNeedsUpdate = true; }
    });
  }
  // the size of one screen pixel at 1 m, so far needles never thin out below a pixel
  setPixel(camera, heightPx) { SPINE_U.uPx.value = (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2)) / Math.max(1, heightPx); }
}

// ---------------- the brush and the ocotillo ----------------
// temporary counts per 120 m square: ocotillo 3 kinds x 6, creosote 3 x 45, bursage 3 x 70
export function makeBrush(clear) {
  const mat = plantMaterial('plant-v1', 0.8);
  const creoTex = leafTexture('creosote', 5), bursTex = leafTexture('bursage', 9);
  const creoLeaf = plantMaterial('leaf-creosote-v1', 0.6, creoTex), bursLeaf = plantMaterial('leaf-bursage-v1', 0.9, bursTex);
  const oco = new PlantField({ kinds: [11, 23, 37].map((sd) => ({ lods: [0, 1, 2].map((l) => ocotilloGeometry(sd, l)), count: 6, r: 0.9, H: 4.5, scale: [0.8, 1.15] })),
    material: mat, lodDist: [14, 40], clear, seed: 41, minGap: 1.5 });
  const creo = new PlantField({ kinds: [5, 9, 14].map((sd) => ({ lods: [0, 1, 2].map((l) => creosoteGeometry(sd, l)), count: 45, r: 0.8, H: 1.8, scale: [0.75, 1.2] })),
    material: [mat, creoLeaf], lodDist: [12, 35], clear, seed: 43, minGap: 1.2, depthMat: cardDepthMaterial(creoTex) });
  const burs = new PlantField({ kinds: [3, 8, 13].map((sd) => ({ lods: [0, 1, 2].map((l) => bursageGeometry(sd, l)), count: 70, r: 0.4, H: 0.6, scale: [0.7, 1.3] })),
    material: [mat, bursLeaf], lodDist: [10, 28], clear, seed: 47, minGap: 0.3, depthMat: cardDepthMaterial(bursTex) });
  return [oco, creo, burs];
}

// ---------------- dead things: fallen saguaro skeletons and the bones of a cow ----------------
// a fallen saguaro: the woody ribs that held it up, lying in a loose collapsed bundle, broken here and there,
// a root crown at one end, and the hollow "boots" the woodpeckers left
export function saguaroSkeletonGeometry(seed, lod) {
  const rnd = rng(seed), b = new GeoBuilder();
  const L = 4.2 + rnd() * 2.6, nRib = [24, 16, 10][lod], sides = [5, 4, 3][lod], segs = [24, 10, 5][lod];
  const wood = (t, k) => { const g = 0.8 + 0.4 * ((k * 0.37) % 1); return mixc([0.27 * g, 0.25 * g, 0.215 * g], [0.33 * g, 0.315 * g, 0.28 * g], t); };
  const bundle = (origin, dir, side, len, ringR, n, seed2) => {
    const r2 = rng(seed2);
    for (let k = 0; k < n; k++) {
      const th = (k / n) * Math.PI * 2 + r2() * 0.2;
      // collapsed: the upper ribs fell onto the lower ones and the bundle spread sideways
      const lat = Math.cos(th) * ringR * (1.5 + r2() * 0.7), up = (Math.sin(th) * 0.3 + 0.45) * ringR;
      let a = r2() * len * 0.15, end = len * (0.75 + r2() * 0.25);
      const pieces = r2() < 0.35 ? 2 : 1;
      for (let pc = 0; pc < pieces; pc++) {
        const s0 = pieces === 1 ? a : pc === 0 ? a : a + (end - a) * (0.5 + r2() * 0.1), s1 = pieces === 1 ? end : pc === 0 ? a + (end - a) * (0.45 + r2() * 0.05) : end;
        const splay = (r2() - 0.5) * 0.12, pts = [];
        for (let i = 0; i <= segs; i++) {
          const t = i / segs, sAt = s0 + (s1 - s0) * t, bow = Math.sin(t * Math.PI) * (r2() - 0.5) * 0.04;
          const knot = 0.3 + 0.7 * sstep(0.0, 0.7, sAt), off = (lat + splay * (sAt - s0) + bow) * knot;
          pts.push(origin.clone().addScaledVector(dir, sAt).addScaledVector(side, off).add(V3(0, Math.max(0.016, (up + bow * 0.5) * knot + 0.03 * (1 - knot)), 0)));
        }
        const r0 = 0.013 + r2() * 0.008;
        b.tube(pts, pts.map(() => r0), sides, (t) => wood(t, k), () => 0, 0);
      }
    }
  };
  const dir = V3(1, 0, 0), side = V3(0, 0, 1);
  bundle(V3(0.15, 0, 0), dir, side, L, 0.13, nRib, seed * 3 + 1);
  // an arm, broken off and lying beside the trunk
  if (rnd() < 0.8) {
    const at = 1.6 + rnd() * 1.4, ang = (rnd() < 0.5 ? 1 : -1) * (0.5 + rnd() * 0.5);
    const d2 = V3(Math.cos(ang), 0, Math.sin(ang)), s2 = V3(-d2.z, 0, d2.x);
    bundle(V3(at, 0, Math.sign(ang) * 0.35), d2, s2, 1.2 + rnd() * 1.2, 0.08, Math.max(5, Math.round(nRib * 0.55)), seed * 5 + 2);
  }
  // the root crown: thick broken roots splaying from the knot where the ribs start
  for (let k = 0; k < (lod === 2 ? 3 : 7); k++) {
    const a = (k / 7) * Math.PI * 2 + rnd() * 0.5, l = 0.25 + rnd() * 0.35;
    const p0 = V3(0.12, 0.05, 0), p1 = V3(0.05 - Math.abs(Math.cos(a)) * l * 0.6, 0.02 + Math.max(0, Math.sin(a)) * 0.08, Math.sin(a) * l * 0.8);
    b.tube([p0, p0.clone().lerp(p1, 0.5).add(V3(0, 0.02, 0)), p1], [0.035, 0.025, 0.01], [5, 4, 3][lod], () => [0.2, 0.18, 0.155], () => 0, 0);
  }
  // woodpecker boots: hollow brown cups of hardened callus, lying where the flesh rotted off them
  if (lod < 2) for (let k = 0; k < 2; k++) {
    const c = V3(0.6 + rnd() * (L - 1.2), 0.05, (rnd() - 0.5) * 0.7), ax = V3(rnd() - 0.5, 0.15, rnd() - 0.5).normalize();
    const prof = [], n = 7;
    for (let i = 0; i <= n; i++) { const t = i / n; prof.push([0.035 + 0.035 * Math.sin(t * Math.PI * 0.85), t * 0.13]); }
    const sidesB = lod === 0 ? 9 : 5;
    const e1 = V3(0, 1, 0).cross(ax); if (e1.lengthSq() < 1e-3) e1.set(1, 0, 0); e1.normalize(); const e2 = V3(0, 0, 0).crossVectors(ax, e1);
    const base = b.count;
    for (const [rr, h] of prof) for (let j = 0; j < sidesB; j++) {
      const a = (j / sidesB) * Math.PI * 2, nx = e1.x * Math.cos(a) + e2.x * Math.sin(a), ny = e1.y * Math.cos(a) + e2.y * Math.sin(a), nz = e1.z * Math.cos(a) + e2.z * Math.sin(a);
      b.vert(c.x + ax.x * h + nx * rr, c.y + ax.y * h + ny * rr, c.z + ax.z * h + nz * rr, nx, ny, nz, [0.13, 0.085, 0.05], 0, 0);
    }
    for (let i = 0; i < n; i++) for (let j = 0; j < sidesB; j++) {
      const a = base + i * sidesB + j, bb = base + i * sidesB + ((j + 1) % sidesB), cc = a + sidesB, dd = bb + sidesB;
      b.i.push(a, bb, cc, bb, dd, cc, a, cc, bb, bb, cc, dd); // seen from inside too: it's a cup
    }
  }
  return b.toGeometry();
}

// bleached bone: off-white, yellowed teeth, grey in the hollows, dirty where it sinks into the ground, fine cracks
export function boneMaterial() {
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.78, metalness: 0 });
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec4 aA; attribute vec4 aB;\nvarying vec4 vA; varying vec4 vB; varying vec3 vBo; varying float vWy;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvA = aA; vB = aB; vBo = position;')
      .replace('#include <project_vertex>', `#include <project_vertex>
        #ifdef USE_INSTANCING
        vWy = (instanceMatrix * vec4(transformed, 1.0)).y;
        #else
        vWy = (modelMatrix * vec4(transformed, 1.0)).y;
        #endif`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>\nvarying vec4 vA; varying vec4 vB; varying vec3 vBo; varying float vWy;\n${PLANT_NOISE}`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
      {
        float tooth = vA.x, porous = vA.y, ao = vA.w, vary = vB.z;
        vec3 col = vec3(0.58, 0.55, 0.47) * (0.9 + 0.18 * vary);
        col *= 0.92 + 0.1 * pNoise(vBo * 60.0);
        float crack = smoothstep(0.975, 0.998, 1.0 - abs(pNoise(vBo * vec3(110.0, 110.0, 35.0)))) * smoothstep(0.1, 0.4, pNoise(vBo * 9.0));  // a few hairline cracks
        col *= 1.0 - 0.25 * crack;
        col = mix(col, col * vec3(0.8, 0.75, 0.68) * (0.75 + 0.3 * pNoise(vBo * 150.0)), porous * 0.7);  // weathered, pitted
        col = mix(col, vec3(0.42, 0.35, 0.24), tooth);                                                // old yellow teeth
        col = mix(vec3(0.2, 0.16, 0.12), col, smoothstep(0.0, 0.045, vWy));                          // earth where it sinks in
        diffuseColor.rgb *= col * (0.25 + 0.75 * ao);
        roughnessFactor = mix(0.72, 0.9, porous);
      }`)
      .replace('#include <fog_fragment>', HALF_FOG);
  };
  m.customProgramCacheKey = () => 'bone-v1';
  return m;
}
// a rib: a long flattened curve
function ribGeometry(len, bend, seed) {
  const rnd = rng(seed), segs = 14, sides = 6, pos = [], nrm = [], idx = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs, a = (t - 0.5) * bend, R = len / bend;
    const cx = Math.sin(a) * R, cz = (Math.cos(a) - Math.cos(bend / 2)) * R;
    const tx = Math.cos(a), tz = -Math.sin(a), w = 0.011 * (1 - 0.35 * t) + 0.004 * (t < 0.08 ? 1 - t / 0.08 : 0), h = 0.005;
    for (let j = 0; j < sides; j++) {
      const q = (j / sides) * Math.PI * 2, ox = Math.cos(q) * w, oy = Math.sin(q) * h;
      // across the curve (in the ground plane) and up
      const nx = -tz, nz = tx;
      pos.push(cx + nx * ox, oy + h, cz + nz * ox);
      const nl = Math.hypot(Math.cos(q) / w, Math.sin(q) / h);
      nrm.push((nx * Math.cos(q)) / w / nl, Math.sin(q) / h / nl, (nz * Math.cos(q)) / w / nl);
    }
  }
  for (let i = 0; i < segs; i++) for (let j = 0; j < sides; j++) { const a = i * sides + j, b = i * sides + ((j + 1) % sides), c = a + sides, d = b + sides; idx.push(a, c, b, b, c, d); }
  const n = pos.length / 3, A = new Uint8Array(n * 4), B = new Uint8Array(n * 4);
  for (let k = 0; k < n; k++) { A[4 * k + 3] = 230; B[4 * k + 2] = Math.floor(rnd() * 255); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('aA', new THREE.BufferAttribute(A, 4, true));
  g.setAttribute('aB', new THREE.BufferAttribute(B, 4, true));
  g.setAttribute('aS', new THREE.BufferAttribute(new Float32Array(n), 1));
  g.setIndex(idx);
  return g;
}
// where a cow died a year or two ago and the coyotes scattered it: [piece, x, y, z, yaw, pitch, roll]
const BONE_SITES = [
  [['skull', 0, 0.07, 0, 0.5, 0.05, 0.12], ['jaw', 0.36, 0.012, 0.22, 0.9, 0, 1.5708], ['jaw', -0.7, 0.012, -0.45, -2.3, 0, -1.5708],
   ['vert-t', 0.25, 0.02, -0.55, 0.3, 0, 1.4], ['vert-t', 0.33, 0.02, -0.72, 0.4, 0, -1.3], ['vert-t', 0.38, 0.0, -0.92, 0.2, 0, 0.1], ['vert-t', 0.52, 0.02, -1.1, 0.5, 0, 1.5],
   ['vert-l', 0.6, 0.0, -1.32, 0.35, 0, 0.2], ['vert-l', 0.7, 0.01, -1.5, 0.6, 0, -0.1], ['vert-l', 1.2, 0.0, -1.2, 2.1, 0, 0.05],
   ['pelvis', 0.9, 0.035, -2.0, 0.4, 0.08, 0.25], ['femur', 1.6, 0.012, -1.7, 1.1, 0, 0], ['femur', -0.2, 0.01, -2.5, -0.5, 0, 3.1], ['scapula', -0.55, 0.0, -0.95, 0.7, 0, 0],
   ...[0, 1, 2, 3, 4, 5, 6, 7].map((k) => ['rib', 0.5 + k * 0.1, 0.0, -0.6 - k * 0.12, -1.3 - k * 0.05 + (k % 2) * 0.15, 0, 0]),
   ['rib', -1.1, 0, 0.6, 2.4, 0, 0], ['rib', 1.9, 0, -0.4, 0.3, 0, 0]],
  [['skull', 0, 0.09, 0, -1.9, 0.0, 1.45], ['jaw', 0.55, 0.012, 0.4, 2.6, 0, 1.5708],
   ['vert-t', -0.8, 0.02, 0.5, 1.2, 0, 1.5], ['vert-l', -1.15, 0.0, 0.2, 0.4, 0, 0.1], ['vert-t', 1.3, 0.02, -0.7, 2.0, 0, -1.4],
   ['pelvis', -1.6, 0.03, -0.9, 2.2, -0.1, -0.2], ['femur', 0.4, 0.012, -1.3, 0.2, 0, 0], ['scapula', 1.5, 0.0, 0.5, -0.4, 0, 3.14159],
   ...[0, 1, 2, 3, 4].map((k) => ['rib', -0.4 + k * 0.45, 0, -0.5 - (k % 2) * 0.4, k * 1.3, 0, 0])],
];
export const BONE_PIECES = ['skull', 'jaw', 'vert-t', 'vert-l', 'femur', 'pelvis', 'scapula'];
export function boneSiteGeometry(sculpts, site, lod) {
  const parts = [], M = new THREE.Matrix4(), E = new THREE.Euler(), Q = new THREE.Quaternion(), S = new THREE.Vector3(1, 1, 1), P = new THREE.Vector3();
  site.forEach(([name, x, y, z, yaw, pitch, roll], k) => {
    let g;
    if (name === 'rib') g = ribGeometry(0.36 + ((k * 0.37) % 1) * 0.16, 1.4, k + 3);
    else g = sculpts[BONE_PIECES.indexOf(name)].lods[lod].clone();
    E.set(pitch, yaw, roll, 'YXZ'); Q.setFromEuler(E); M.compose(P.set(x, y, z), Q, S);
    g.applyMatrix4(M);
    // pieces must agree to be merged: float normals, and the same index type
    const n = g.attributes.normal;
    if (!(n.array instanceof Float32Array)) { const f = new Float32Array(n.count * 3); for (let i = 0; i < n.count; i++) { f[3 * i] = n.getX(i); f[3 * i + 1] = n.getY(i); f[3 * i + 2] = n.getZ(i); } g.setAttribute('normal', new THREE.BufferAttribute(f, 3)); }
    parts.push(g);
  });
  const g = mergeGeometries(parts.map((p) => { for (const a of ['aA', 'aB']) if (!p.attributes[a].normalized) p.attributes[a].normalized = true; return p; }));
  g.computeBoundingSphere();
  return g;
}
export function makeDeadThings(boneSculpts, clear) {
  const wood = plantMaterial('deadwood-v1', 0.92);
  // temporary: in every 120 m square, six fallen saguaros and three places where a cow's bones lie
  const skel = new PlantField({ kinds: [21, 34].map((sd) => ({ lods: [0, 1, 2].map((l) => saguaroSkeletonGeometry(sd, l)), count: 3, r: 2.6, H: 0.4, scale: [0.85, 1.1] })),
    material: wood, lodDist: [16, 40], clear, seed: 61, minGap: 1 });
  const bones = new PlantField({ kinds: BONE_SITES.map((site, v) => ({ lods: [0, 1, 2].map((l) => boneSiteGeometry(boneSculpts, site, l)), count: v === 0 ? 2 : 1, r: 2.2, H: 0.3, scale: [1, 1] })),
    material: boneMaterial(), lodDist: [12, 30], clear, seed: 67, minGap: 1 });
  return [skel, bones];
}

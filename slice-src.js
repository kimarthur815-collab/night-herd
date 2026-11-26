// 밤 한 번 — first vertical slice.
// Walk by the campfire, open the ledger, count the herd by lantern light.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { fbm } from './cow.js';

const DEBUG = location.hash === '#debug';
// Lights never blow up at point-blank range: soften the falloff inside ~1 m (lantern held right against a cow).
THREE.ShaderChunk.lights_pars_begin = THREE.ShaderChunk.lights_pars_begin.replace(
  'float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );',
  'float distanceFalloff = 1.0 / pow( sqrt( lightDistance * lightDistance + 0.81 ), decayExponent );');
const $ = (id) => document.getElementById(id);
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);
const approach = (v, g, d) => (v < g ? Math.min(g, v + d) : Math.max(g, v - d));
const damp = (v, g, rate, dt) => v + (g - v) * (1 - Math.exp(-rate * dt));
const rand = (a, b) => a + Math.random() * (b - a);
const TOUCH = matchMedia('(pointer: coarse)').matches;

// ---------------- world layout ----------------
const LEDGER_COUNT = 10; // what the ledger says; the herd really has 11
const FIRE_POS = new THREE.Vector3(-1.6, 0, 1.5);
const EYE_H = 1.62;
const HERD = [
  { x: -1.25, z: -3.9, off: 25, s: 1.0, coat: 0.82, v: 0 },
  { x: 0.95, z: -3.0, off: -40, s: 0.97, coat: 0.72, v: 1 },
  { x: 3.1, z: -5.4, off: 70, s: 1.03, coat: 0.7, v: 2 },
  { x: -3.4, z: -6.9, off: -55, s: 1.02, coat: 0.85, v: 1 },
  { x: -0.15, z: -6.2, off: 15, s: 0.95, coat: 0.62, v: 0 },
  { x: 1.9, z: -8.6, off: 60, s: 1.0, coat: 0.8, v: 2 },
  { x: 4.6, z: -9.4, off: -75, s: 0.98, coat: 0.22, face: 0.85, v: 0 },
  { x: -2.1, z: -10.2, off: 35, s: 1.0, coat: 0.75, v: 1 },
  { x: 0.7, z: -11.6, off: -20, s: 1.05, coat: 0.83, v: 2 },
  { x: -4.2, z: -9.0, off: 80, s: 0.97, coat: 0.18, face: 0.85, v: 0 },
  { x: 3.0, z: -13.0, off: -50, s: 1.0, coat: 0.78, v: 1 },
];
const NUM = ['하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉', '열', '열하나', '열둘', '열셋'];

// ---------------- renderer ----------------
const ui = {
  start: $('start'), startBtn: $('startBtn'), loadTxt: $('loadTxt'), ledger: $('ledger'), ledgerBtn: $('ledgerBtn'),
  sub: $('sub'), joy: $('joy'), knob: $('knob'), end: $('end'), again: $('again'), fps: $('fps'), hint: $('hint'), resume: $('resume'),
};
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
} catch (e) {
  ui.loadTxt.textContent = '이 기기에서는 3D 화면을 열 수 없어요.';
  throw e;
}
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;
$('stage').appendChild(renderer.domElement);
const canvas = renderer.domElement;
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(new THREE.Color(0.0035, 0.004, 0.0055), 0.009);
const camera = new THREE.PerspectiveCamera(55, 16 / 9, 0.05, 1200);
camera.rotation.order = 'YXZ';

const U = { uLanternPos: { value: new THREE.Vector3() }, uEyeGain: { value: 200 }, uTime: { value: 0 } };
const NOISE_GLSL = /* glsl */ `
float hash13(vec3 p){ p = fract(p*0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vnoise3(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(hash13(i), hash13(i+vec3(1,0,0)), f.x), mix(hash13(i+vec3(0,1,0)), hash13(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(hash13(i+vec3(0,0,1)), hash13(i+vec3(1,0,1)), f.x), mix(hash13(i+vec3(0,1,1)), hash13(i+vec3(1,1,1)), f.x), f.y), f.z)*2.0-1.0; }
`;

// ---------------- cows ----------------
function cowMaterial(coat, face, phase) {
  const m = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.82, metalness: 0, sheen: 0.4, sheenRoughness: 0.6, sheenColor: new THREE.Color(coat * 0.6, coat * 0.56, coat * 0.48) });
  const own = {
    uBody: { value: new THREE.Color(coat, coat * 0.93, coat * 0.8) }, uFace: { value: new THREE.Color(face, face * 0.93, face * 0.8) },
    uPhase: { value: phase }, uPose: { value: new THREE.Vector4() }, uTail: { value: 0 },
  };
  m.userData.own = own;
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, U, own);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        attribute vec4 aMat; attribute vec4 aExt4; attribute vec3 aHead; attribute vec4 aRig;
        uniform float uTime; uniform float uPhase; uniform vec4 uPose; uniform float uTail;
        varying vec4 vMat; varying float vEye; varying vec3 vObj; varying vec3 vWP; varying vec3 vExt; varying vec3 vHead;
        mat3 rotYP(float yaw, float pitchUp){ float cy = cos(yaw), sy = sin(yaw), ca = cos(-pitchUp), sa = sin(-pitchUp);
          return mat3(cy,0.0,-sy, 0.0,1.0,0.0, sy,0.0,cy) * mat3(1.0,0.0,0.0, 0.0,ca,sa, 0.0,-sa,ca); }
        mat3 rotZ(float a){ float c = cos(a), s = sin(a); return mat3(c,s,0.0, -s,c,0.0, 0.0,0.0,1.0); }`)
      .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
        const vec3 N0 = vec3(0.0, 1.08, 0.58); const vec3 H0 = vec3(0.0, 1.22, 1.03); const vec3 T0 = vec3(0.0, 1.2, -0.9);
        mat3 rH = rotYP(uPose.z * aRig.y, uPose.w * aRig.y);
        mat3 rN = rotYP(uPose.x * aRig.x, uPose.y * aRig.x);
        mat3 rT = rotZ(uTail * aRig.z);
        objectNormal = rN * (rH * (rT * objectNormal));`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vMat = aMat; vEye = aExt4.x; vExt = aExt4.yzw; vObj = position; vHead = aHead;
        { float br = sin(uTime*1.3 + uPhase)*0.5 + 0.5;
          float barrel = smoothstep(0.6, 0.85, position.y) * (1.0 - smoothstep(1.15, 1.32, position.y)) * (1.0 - smoothstep(0.5, 0.85, abs(position.z + 0.05))) * (1.0 - aRig.x);
          transformed += normal * barrel * br * 0.007; }
        transformed = T0 + rT * (transformed - T0);
        transformed = H0 + rH * (transformed - H0);
        transformed = N0 + rN * (transformed - N0);`)
      .replace('#include <fog_vertex>', '#include <fog_vertex>\n vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>\nuniform vec3 uLanternPos; uniform float uEyeGain; uniform vec3 uBody; uniform vec3 uFace; varying vec4 vMat; varying float vEye; varying vec3 vObj; varying vec3 vWP; varying vec3 vExt; varying vec3 vHead;\n${NOISE_GLSL}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        { float pn = vnoise3(vObj*2.7)*0.5+0.5; float pn2 = vnoise3(vObj*9.0);
          float fm = smoothstep(0.2, 0.8, vExt.z + 0.25*vnoise3(vObj*14.0));
          float hc = vnoise3(vObj*vec3(32.0,22.0,32.0))*0.6 + vnoise3(vObj*vec3(70.0,45.0,70.0))*0.4;
          vec3 c = mix(uBody, uFace, fm) * (0.74 + 0.4*pn) * (0.93 + 0.07*pn2) * (1.0 + 0.16*hc);
          c = mix(c, c*0.45, vExt.x*0.8);
          c = mix(c, c*0.5, vExt.y*0.8);
          { float fx = abs(vHead.x), fs = vHead.y, ft = vHead.z, fc0 = vExt.z;
            float tear = (1.0 - smoothstep(0.006, 0.02, abs(fx - 0.1 + (fs - 0.2)*0.12))) * smoothstep(0.18, 0.22, fs) * (1.0 - smoothstep(0.28, 0.36, fs)) * smoothstep(-0.02, -0.06, ft);
            float muzS = smoothstep(0.36, 0.46, fs) * smoothstep(0.045, 0.08, fx) * (1.0 - vMat.y);
            float chin = smoothstep(-0.09, -0.12, ft) * smoothstep(0.3, 0.42, fs);
            float poll = (1.0 - smoothstep(-0.02, 0.06, fs)) * smoothstep(-0.03, 0.03, ft);
            c *= 1.0 - fc0 * (0.55*tear + 0.25*muzS + 0.25*chin);
            c *= 1.0 + fc0 * 0.12 * poll; }
          float mud = smoothstep(0.1, 0.6, vnoise3(vObj*vec3(6.0,11.0,6.0))*0.5+0.5) * (1.0 - smoothstep(0.55, 0.85, vObj.y));
          c = mix(c, c*0.5, mud*0.55);
          c = mix(c, c*0.3, vMat.w*0.85);
          c = mix(c, vec3(0.2,0.16,0.16), vMat.y);
          c = mix(c, vec3(0.03,0.028,0.026), vMat.z);
          c *= mix(1.0, vMat.x, 0.55);
          c = mix(c, vec3(0.008), vEye);
          diffuseColor.rgb = c; }`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.35, vMat.y); roughnessFactor = mix(roughnessFactor, 0.08, vEye); roughnessFactor = mix(roughnessFactor, 0.55, vMat.z);`)
      .replace('#include <lights_physical_fragment>', `#include <lights_physical_fragment>
        #ifdef USE_SHEEN
        material.sheenColor *= (1.0 - vMat.y) * (1.0 - vEye) * (1.0 - vMat.z);
        #endif`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        { float dl = length(vWP - uLanternPos); float fc = clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
          totalEmissiveRadiance += vEye * vec3(0.95,1.0,0.92) * uEyeGain * pow(fc, 6.0) / pow(max(dl, 1.3), 1.5); }`);
  };
  m.customProgramCacheKey = () => 'cow-rig-v1';
  return m;
}

async function loadVariants(onProgress) {
  const meta = await (await fetch('cows/cows.json')).json();
  let done = 0;
  return Promise.all(meta.map(async (m) => {
    const j = await (await fetch(m.file)).json();
    const raw = atob(j.data);
    const u8 = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) u8[i] = raw.charCodeAt(i);
    const buf = u8.buffer, vc = m.vc, ic = m.ic;
    let o = 0;
    const pos16 = new Int16Array(buf, o, vc * 3); o += vc * 6;
    const head16 = new Int16Array(buf, o, vc * 3); o += vc * 6;
    const idx = new Uint16Array(buf, o, ic); o += ic * 2;
    const nrm = new Int8Array(buf, o, vc * 3); o += vc * 3;
    const mat = new Uint8Array(buf, o, vc * 4); o += vc * 4;
    const ext = new Uint8Array(buf, o, vc * 4); o += vc * 4;
    const rig = new Uint8Array(buf, o, vc * 4);
    const pos = new Float32Array(vc * 3), head = new Float32Array(vc * 3);
    for (let i = 0; i < vc * 3; i++) { pos[i] = pos16[i] * m.ps; head[i] = head16[i] * m.hs; }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(new Int8Array(nrm), 3, true));
    g.setAttribute('aMat', new THREE.BufferAttribute(new Uint8Array(mat), 4, true));
    g.setAttribute('aExt4', new THREE.BufferAttribute(new Uint8Array(ext), 4, true));
    g.setAttribute('aRig', new THREE.BufferAttribute(new Uint8Array(rig), 4, true));
    g.setAttribute('aHead', new THREE.BufferAttribute(head, 3));
    g.setIndex(new THREE.BufferAttribute(new Uint16Array(idx), 1));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0.8, 0), 2.2); // heads move: keep a generous bound
    onProgress(++done / meta.length);
    return g;
  }));
}

// ---------------- environment ----------------
// no invisible walls: the ground, grass, sky and horizon travel with the player, so the prairie never ends
const WORLD_FOLLOW = [];
const GRASS_U = { uGC: { value: new THREE.Vector2(0, -4) } };
function followWorld(x, z) {
  for (const o of WORLD_FOLLOW) { o.position.x = x; o.position.z = z; }
  GRASS_U.uGC.value.set(x, z - 4); // grass window, biased toward the herd
}
function makeGround() {
  const g = new THREE.PlaneGeometry(400, 400, 8, 8); // flat; shading is anchored to the world, not the mesh
  g.rotateX(-Math.PI / 2);
  const m = new THREE.MeshStandardMaterial({ color: 0x332a1f, roughness: 1.0 });
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP2;').replace('#include <fog_vertex>', '#include <fog_vertex>\nvWP2 = (modelMatrix*vec4(transformed,1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>\nvarying vec3 vWP2;\n${NOISE_GLSL}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        { vec3 q = vec3(vWP2.x, 0.0, vWP2.z);
          float a = vnoise3(q*0.35)*0.5+0.5; float b = vnoise3(q*2.5)*0.5+0.5; float c2 = vnoise3(q*14.0)*0.5+0.5; float c3 = vnoise3(q*55.0)*0.5+0.5;
          vec3 col = mix(vec3(0.09,0.075,0.06), vec3(0.13,0.125,0.08), smoothstep(0.35,0.7,a*0.6+b*0.4));
          float burnt = 1.0 - smoothstep(0.5, 1.2, length(vWP2.xz - vec2(${FIRE_POS.x.toFixed(2)}, ${FIRE_POS.z.toFixed(2)})));
          col = mix(col, vec3(0.03,0.025,0.02), burnt);
          col *= (0.7 + 0.45*c2) * (0.85 + 0.3*c3);
          diffuseColor.rgb = col; }`);
  };
  const mesh = new THREE.Mesh(g, m);
  WORLD_FOLLOW.push(mesh);
  return mesh;
}

function makeGrass(count) {
  const segs = 2, pos = [], nrm = [], idx = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs, w = 0.007 * (1 - t * 0.85), bend = 0.22 * t * t;
    pos.push(-w, t, bend, w, t, bend);
    nrm.push(0, 1, 0, 0, 1, 0);
    if (i < segs) { const a = 2 * i; idx.push(a, a + 1, a + 3, a, a + 3, a + 2); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setIndex(idx);
  const m = new THREE.MeshStandardMaterial({ color: 0x7c7456, roughness: 0.95, side: THREE.DoubleSide });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uGC = GRASS_U.uGC;
    // each blade keeps its place in the world but wraps by whole tiles to stay near the player
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform vec2 uGC;')
      .replace('#include <project_vertex>', `vec4 mvPosition = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
        { mat4 im = instanceMatrix; vec2 per = vec2(28.0, 30.0);
          im[3].xz += floor((uGC - im[3].xz) / per + 0.5) * per;
          mvPosition = im * mvPosition; }
        #endif
        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>', '#include <normal_fragment_begin>\n normal = normalize((viewMatrix * vec4(0.15, 1.0, 0.25, 0.0)).xyz);');
  };
  m.customProgramCacheKey = () => 'grass-wrap-v1';
  const mesh = new THREE.InstancedMesh(g, m, count);
  mesh.frustumCulled = false;
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), v = new THREE.Vector3(), e = new THREE.Euler(), c = new THREE.Color();
  let n = 0, guard = 0;
  while (n < count && guard++ < count * 20) {
    const x = (Math.random() - 0.5) * 28, z = 5 - Math.random() * 30;
    if (Math.hypot(x - FIRE_POS.x, z - FIRE_POS.z) < 1.1) continue;
    const clump = fbm(x * 0.6, 0.3, z * 0.6, 3) * 0.5 + 0.5;
    if (Math.random() > clump * 1.4 - 0.15) continue;
    const h = (0.03 + 0.2 * Math.pow(Math.random(), 2.0) * clump) * (1 + Math.max(0, -z - 10) * 0.02);
    e.set((Math.random() - 0.5) * 0.9, Math.random() * Math.PI * 2, (Math.random() - 0.5) * 0.9);
    q.setFromEuler(e); s.set(1 + Math.random(), h, h); v.set(x, 0, z);
    M.compose(v, q, s); mesh.setMatrixAt(n, M);
    c.setScalar(0.55 + Math.random() * 0.6); mesh.setColorAt(n, c);
    n++;
  }
  mesh.count = n;
  return mesh;
}

function makeTrees() {
  const grp = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: 0x000000, fog: false, side: THREE.DoubleSide });
  const R = 170, segs = 360, pos = [], idx = [];
  for (let i = 0; i <= segs; i++) {
    const a = -Math.PI + (2 * Math.PI) * (i / segs), x = Math.sin(a) * R, z = -Math.cos(a) * R;
    const hgt = Math.max(0.6, 4.5 + 7 * fbm(a * 9.0, 2.1, 0.7, 4) + 5 * Math.max(0, fbm(a * 40.0, 7.3, 1.1, 2)));
    pos.push(x, -2, z, x, hgt, z);
    if (i < segs) { const b = 2 * i; idx.push(b, b + 2, b + 1, b + 1, b + 2, b + 3); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  grp.add(new THREE.Mesh(g, mat));
  const spots = [[-31, -62, 9], [24, -70, 11], [55, -95, 10], [-48, 40, 12], [30, 55, 10]];
  const blobs = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), mat, spots.length * 70);
  const trunks = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.15, 0.35, 1, 6), mat, spots.length);
  const M = new THREE.Matrix4(), Qt = new THREE.Quaternion(), S = new THREE.Vector3(), P = new THREE.Vector3(), E = new THREE.Euler();
  let k = 0;
  spots.forEach(([x, z, h], ti) => {
    M.compose(P.set(x, h * 0.27, z), Qt.identity(), S.set(1, h * 0.55, 1)); trunks.setMatrixAt(ti, M);
    for (let i = 0; i < 70; i++) {
      const r = h * (0.04 + Math.random() * 0.07), ang = Math.random() * Math.PI * 2, rad = Math.sqrt(Math.random()) * h * 0.38;
      E.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
      M.compose(P.set(x + Math.cos(ang) * rad, h * (0.5 + Math.random() * 0.5) - rad * 0.3, z + Math.sin(ang) * rad * 0.6), Qt.setFromEuler(E), S.set(r * (0.8 + Math.random() * 0.8), r * (0.5 + Math.random() * 0.5), r));
      blobs.setMatrixAt(k++, M);
    }
  });
  grp.add(blobs, trunks);
  WORLD_FOLLOW.push(grp);
  return grp;
}

function makeSky() {
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { uHor: { value: new THREE.Color(0.028, 0.03, 0.038) }, uZen: { value: new THREE.Color(0.002, 0.0022, 0.003) } },
    vertexShader: 'varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }',
    fragmentShader: `uniform vec3 uHor; uniform vec3 uZen; varying vec3 vDir; ${NOISE_GLSL}
      void main(){ float h = clamp(vDir.y, 0.0, 1.0); vec3 c = mix(uHor, uZen, pow(h, 0.45));
        c *= 0.85 + 0.3*(vnoise3(vDir*vec3(3.0,9.0,3.0))*0.5+0.5);
        gl_FragColor = vec4(c, 1.0); }`,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), m);
  WORLD_FOLLOW.push(mesh);
  return mesh;
}

const FIRE_U = { uTime: { value: 0 } };
function makeCampfire() {
  const g = new THREE.Group();
  g.position.copy(FIRE_POS);
  const stoneMat = new THREE.MeshStandardMaterial({ color: 0x4d4843, roughness: 1 });
  const stone = new THREE.DodecahedronGeometry(0.11, 0);
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 + rand(-0.1, 0.1), r = rand(0.48, 0.56);
    const s = new THREE.Mesh(stone, stoneMat);
    s.position.set(Math.cos(a) * r, 0.04, Math.sin(a) * r);
    s.scale.set(rand(0.8, 1.4), rand(0.6, 1.0), rand(0.8, 1.3));
    s.rotation.set(rand(0, 3), rand(0, 3), rand(0, 3));
    g.add(s);
  }
  const logMat = new THREE.MeshStandardMaterial({ color: 0x24170e, roughness: 1, emissive: new THREE.Color(0.35, 0.08, 0.01), emissiveIntensity: 0.5 });
  const log = new THREE.CylinderGeometry(0.045, 0.06, 0.75, 7);
  for (let i = 0; i < 5; i++) {
    const l = new THREE.Mesh(log, logMat);
    const a = (i / 5) * Math.PI * 2;
    l.position.set(Math.cos(a) * 0.14, 0.17, Math.sin(a) * 0.14);
    l.rotation.set(0, -a, 0); l.rotateZ(1.15);
    g.add(l);
  }
  const flameMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: FIRE_U,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: `uniform float uTime; varying vec2 vUv; ${NOISE_GLSL}
      void main(){ vec2 p = vUv;
        float n = vnoise3(vec3(p.x*4.0, p.y*3.0 - uTime*2.4, uTime*0.6))*0.5+0.5;
        float n2 = vnoise3(vec3(p.x*9.0, p.y*7.0 - uTime*3.8, 1.7 + uTime*0.3))*0.5+0.5;
        float w = 1.0 - abs(p.x - 0.5)*2.0;
        float shape = w * w * (1.0 - p.y*0.85);
        float f = smoothstep(0.18, 0.62, shape * (n*0.75 + n2*0.5) * 1.5 - p.y*0.35);
        vec3 col = mix(vec3(1.0,0.22,0.02), vec3(1.0,0.72,0.28), smoothstep(0.3, 0.9, f)) * f * 6.0;
        gl_FragColor = vec4(col, f); }`,
  });
  const plane = new THREE.PlaneGeometry(0.62, 0.95);
  plane.translate(0, 0.47, 0);
  for (let i = 0; i < 3; i++) { const f = new THREE.Mesh(plane, flameMat); f.rotation.y = (i / 3) * Math.PI; f.position.y = 0.05; g.add(f); }
  // embers
  const EN = 70, ep = new Float32Array(EN * 3), seeds = new Float32Array(EN);
  for (let i = 0; i < EN; i++) { seeds[i] = Math.random(); }
  const eg = new THREE.BufferGeometry();
  eg.setAttribute('position', new THREE.BufferAttribute(ep, 3));
  eg.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
  const em = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: FIRE_U,
    vertexShader: `uniform float uTime; attribute float aSeed; varying float vA;
      void main(){ float t = fract(uTime*0.35 + aSeed); float a = aSeed*43.0;
        vec3 p = vec3(sin(a + t*3.0)*0.25*t, t*2.4, cos(a*1.7 + t*2.0)*0.25*t);
        vA = (1.0 - t) * step(0.0, t);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv; gl_PointSize = 3.0 * (1.0 - t*0.6) * 6.0 / max(1.0, -mv.z); }`,
    fragmentShader: 'varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float m = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0,0.45,0.1)*4.0*vA*m, vA*m); }',
  });
  const embers = new THREE.Points(eg, em);
  embers.frustumCulled = false;
  g.add(embers);
  return g;
}

// ---------------- post: painterly (Kuwahara) <-> counting look ----------------
const KuwaharaShader = {
  uniforms: { tDiffuse: { value: null }, uRes: { value: new THREE.Vector2(960, 540) }, uCount: { value: 0 }, uBrush: { value: 1.5 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uCount, uBrush; varying vec2 vUv;
    // generalized Kuwahara with polynomial sector weights (8 sectors): soft, painterly, no blocks
    vec3 kuwahara(vec2 uv){
      const int R = 3;
      const float zeta = 2.0 / 3.0;
      const float sinZ = 0.5480, cosZ = 0.8365;
      float eta = (zeta + cosZ) / (sinZ * sinZ);
      vec2 tx = uBrush / uRes;
      vec4 m[8]; vec3 s[8];
      for (int k = 0; k < 8; k++) { m[k] = vec4(0.0); s[k] = vec3(0.0); }
      for (int j = -R; j <= R; j++) {
        for (int i = -R; i <= R; i++) {
          vec2 v = vec2(float(i), float(j)) / float(R);
          if (dot(v, v) > 1.0) continue;
          vec3 c = texture2D(tDiffuse, uv + vec2(float(i), float(j)) * tx).rgb;
          c = c / (1.0 + c);
          float w[8]; float sum = 0.0; float z;
          float vxx = zeta - eta * v.x * v.x, vyy = zeta - eta * v.y * v.y;
          z = max(0.0, v.y + vxx); w[0] = z*z; sum += w[0];
          z = max(0.0, -v.x + vyy); w[2] = z*z; sum += w[2];
          z = max(0.0, -v.y + vxx); w[4] = z*z; sum += w[4];
          z = max(0.0, v.x + vyy); w[6] = z*z; sum += w[6];
          vec2 r = 0.70710678 * vec2(v.x - v.y, v.x + v.y);
          vxx = zeta - eta * r.x * r.x; vyy = zeta - eta * r.y * r.y;
          z = max(0.0, r.y + vxx); w[1] = z*z; sum += w[1];
          z = max(0.0, -r.x + vyy); w[3] = z*z; sum += w[3];
          z = max(0.0, -r.y + vxx); w[5] = z*z; sum += w[5];
          z = max(0.0, r.x + vyy); w[7] = z*z; sum += w[7];
          float g = exp(-3.125 * dot(v, v)) / max(sum, 1e-5);
          for (int k = 0; k < 8; k++) { float wk = w[k] * g; m[k] += vec4(c * wk, wk); s[k] += c * c * wk; }
        }
      }
      float sig[8]; float minSig = 1e9;
      for (int k = 0; k < 8; k++) {
        vec3 mk = m[k].rgb / max(m[k].w, 1e-5);
        vec3 sk = abs(s[k] / max(m[k].w, 1e-5) - mk * mk);
        sig[k] = sk.r + sk.g + sk.b; minSig = min(minSig, sig[k]);
      }
      vec4 o = vec4(0.0);
      for (int k = 0; k < 8; k++) {
        vec3 mk = m[k].rgb / max(m[k].w, 1e-5);
        float ratio = sig[k] / (minSig + 2e-4);
        float wk = 1.0 / (1.0 + ratio * ratio * ratio * ratio);
        o += vec4(mk * wk, wk);
      }
      vec3 c = clamp(o.rgb / max(o.w, 1e-5), 0.0, 0.995);
      return c / (1.0 - c);
    }
    void main(){
      vec3 src = texture2D(tDiffuse, vUv).rgb;
      float k = smoothstep(0.0, 1.0, uCount);
      if (k > 0.999) { gl_FragColor = vec4(src, 1.0); return; }
      vec3 kw = kuwahara(vUv) + max(src - 2.5, 0.0); // keep tiny very bright things (eyes, embers) crisp
      gl_FragColor = vec4(mix(kw, src, k), 1.0);
    }`,
};

const FinalShader = {
  uniforms: {
    tDiffuse: { value: null }, uRes: { value: new THREE.Vector2(960, 540) }, uCount: { value: 0 }, uExpC: { value: 0.26 }, uExpG: { value: 0.21 },
    uSeed: { value: 1 }, uFade: { value: 0 },
  },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uCount, uExpC, uExpG, uSeed, uFade; varying vec2 vUv;
    vec3 aces(vec3 x){ const float a=2.51,b=0.03,c=2.43,d=0.59,e=0.14; return clamp((x*(a*x+b))/(x*(c*x+d)+e),0.0,1.0); }
    float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
    vec3 lowLook(vec2 uv){
      float lowMin = mix(min(uRes.x, uRes.y), 300.0, uCount);
      vec2 lr = uRes * (lowMin / min(uRes.x, uRes.y));
      vec2 q = (floor(uv * lr) + 0.5) / lr;
      vec2 tx = 0.8 / lr;
      return (texture2D(tDiffuse, q).rgb * 2.0 + texture2D(tDiffuse, q + vec2(tx.x, 0.0)).rgb + texture2D(tDiffuse, q - vec2(tx.x, 0.0)).rgb + texture2D(tDiffuse, q + vec2(0.0, tx.y)).rgb + texture2D(tDiffuse, q - vec2(0.0, tx.y)).rgb) / 6.0;
    }
    void main(){
      float k = smoothstep(0.0, 1.0, uCount);
      vec3 c = k > 0.001 ? lowLook(vUv) : texture2D(tDiffuse, vUv).rgb;
      c *= mix(uExpC, uExpG, k);
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      vec3 graded = c * vec3(1.03, 0.98, 0.92) + vec3(0.0, 0.0006, 0.0018) * (1.0 - smoothstep(0.0, 0.05, l));
      c = mix(graded, vec3(l) * vec3(1.0, 0.985, 0.96), k * 0.95);
      c = aces(c);
      c = mix(c, c*c*(3.0-2.0*c), 0.25 + 0.1*k);
      vec2 q = vUv - 0.5; q.x *= uRes.x / uRes.y;
      c *= mix(1.0, smoothstep(1.15, 0.25, length(q)), 0.35 + 0.2*k);
      c = pow(c, vec3(1.0/2.2));
      vec2 px = floor(vUv * mix(uRes, uRes*0.5, k));
      float n = hash12(px + uSeed) + hash12(px*1.37 + uSeed*3.1) - 1.0;
      float lum = dot(c, vec3(0.3333));
      c += n * mix(0.014, 0.06, k) * (0.45 + 0.9*(1.0 - lum));
      c *= 1.0 - uFade;
      gl_FragColor = vec4(max(c, 0.0), 1.0);
    }`,
};

// ---------------- sound (all procedural) ----------------
class Sound {
  init() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain(); this.master.gain.value = 0.9; this.master.connect(ctx.destination);
    const len = ctx.sampleRate * 2, nb = ctx.createBuffer(1, len, ctx.sampleRate), d = nb.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.noise = nb;
    // wind
    const w = this.loopNoise(), wf = ctx.createBiquadFilter(); wf.type = 'bandpass'; wf.frequency.value = 380; wf.Q.value = 0.6;
    const wg = ctx.createGain(); wg.gain.value = 0.05;
    w.connect(wf).connect(wg).connect(this.master);
    const lfo = ctx.createOscillator(), lg = ctx.createGain(); lfo.frequency.value = 0.07; lg.gain.value = 0.035; lfo.connect(lg).connect(wg.gain); lfo.start();
    const lfo2 = ctx.createOscillator(), lg2 = ctx.createGain(); lfo2.frequency.value = 0.045; lg2.gain.value = 160; lfo2.connect(lg2).connect(wf.frequency); lfo2.start();
    // crickets
    this.crickets = ctx.createGain(); this.crickets.gain.value = 1; this.crickets.connect(this.master);
    this.cricketOn = true;
    for (let i = 0; i < 6; i++) this.cricketLoop(rand(-0.9, 0.9), rand(4000, 5200), rand(0.4, 2));
    // campfire: low roar + crackles, positioned at the fire
    this.fireP = this.panner(FIRE_POS.x, 0.4, FIRE_POS.z, 1.2);
    const fr = this.loopNoise(), ff = ctx.createBiquadFilter(); ff.type = 'lowpass'; ff.frequency.value = 260;
    const fg = ctx.createGain(); fg.gain.value = 0.22;
    fr.connect(ff).connect(fg).connect(this.fireP);
    this.crackleLoop();
    // breath sources for a few nearby cows
    this.breaths = [0, 1, 2].map(() => {
      const p = this.panner(0, 1, -4, 1.0);
      const src = this.loopNoise(), f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 520; f.Q.value = 0.9;
      const g = ctx.createGain(); g.gain.value = 0;
      src.connect(f).connect(g).connect(p);
      return { p, g };
    });
  }
  loopNoise() { const s = this.ctx.createBufferSource(); s.buffer = this.noise; s.loop = true; s.loopStart = Math.random(); s.start(0, Math.random() * 1.5); return s; }
  panner(x, y, z, ref) {
    const p = this.ctx.createPanner();
    p.panningModel = 'HRTF'; p.distanceModel = 'inverse'; p.refDistance = ref; p.rolloffFactor = 1.3;
    this.setPos(p, x, y, z); p.connect(this.master); return p;
  }
  setPos(p, x, y, z) { if (p.positionX) { p.positionX.value = x; p.positionY.value = y; p.positionZ.value = z; } else p.setPosition(x, y, z); }
  cricketLoop(pan, freq, delay) {
    const go = () => {
      if (!this.ctx) return;
      if (this.cricketOn) {
        const t = this.ctx.currentTime, o = this.ctx.createOscillator(), g = this.ctx.createGain(), pn = this.ctx.createStereoPanner();
        o.frequency.value = freq; pn.pan.value = pan; g.gain.value = 0;
        const pulses = 2 + Math.floor(Math.random() * 3);
        for (let k = 0; k < pulses; k++) { const s = t + k * 0.055; g.gain.setValueAtTime(0, s); g.gain.linearRampToValueAtTime(0.012, s + 0.012); g.gain.linearRampToValueAtTime(0, s + 0.04); }
        o.connect(g).connect(pn).connect(this.crickets); o.start(t); o.stop(t + pulses * 0.055 + 0.05);
      }
      setTimeout(go, rand(350, 1300));
    };
    setTimeout(go, delay * 1000);
  }
  crackleLoop() {
    const go = () => {
      if (!this.ctx) return;
      const t = this.ctx.currentTime, s = this.ctx.createBufferSource(), f = this.ctx.createBiquadFilter(), g = this.ctx.createGain();
      s.buffer = this.noise; f.type = 'highpass'; f.frequency.value = rand(1200, 3500);
      g.gain.setValueAtTime(rand(0.15, 0.5), t); g.gain.exponentialRampToValueAtTime(0.001, t + rand(0.02, 0.07));
      s.connect(f).connect(g).connect(this.fireP); s.start(t, Math.random() * 1.5, 0.1);
      setTimeout(go, Math.random() < 0.2 ? rand(20, 60) : rand(80, 420));
    };
    go();
  }
  step() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, s = this.ctx.createBufferSource(), f = this.ctx.createBiquadFilter(), g = this.ctx.createGain();
    s.buffer = this.noise; f.type = 'bandpass'; f.frequency.value = rand(1800, 3200); f.Q.value = 0.8;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(rand(0.05, 0.08), t + 0.02); g.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
    s.connect(f).connect(g).connect(this.master); s.start(t, Math.random() * 1.5, 0.2);
  }
  silenceCrickets() {
    if (!this.ctx) return;
    this.cricketOn = false;
    const t = this.ctx.currentTime; this.crickets.gain.cancelScheduledValues(t); this.crickets.gain.setTargetAtTime(0, t, 0.05);
  }
  update(cam, fwd, cows, time) {
    if (!this.ctx) return;
    const L = this.ctx.listener;
    if (L.positionX) { L.positionX.value = cam.x; L.positionY.value = cam.y; L.positionZ.value = cam.z; L.forwardX.value = fwd.x; L.forwardY.value = fwd.y; L.forwardZ.value = fwd.z; L.upX.value = 0; L.upY.value = 1; L.upZ.value = 0; }
    else { L.setPosition(cam.x, cam.y, cam.z); L.setOrientation(fwd.x, fwd.y, fwd.z, 0, 1, 0); }
    const near = cows.map((c) => [c, c.mesh.position.distanceToSquared(cam)]).sort((a, b) => a[1] - b[1]).slice(0, 3);
    near.forEach(([c], i) => {
      const b = this.breaths[i];
      const hp = c.headWorld;
      this.setPos(b.p, hp.x, hp.y, hp.z);
      const ph = Math.sin(time * 1.3 + c.phase);
      b.g.gain.value = 0.05 * Math.max(0, ph) ** 3;
    });
  }
  resume() { if (this.ctx && this.ctx.state !== 'running') this.ctx.resume(); }
}
const sound = new Sound();

// ---------------- scene assembly ----------------
const sky = makeSky();
scene.add(sky, makeGround(), makeGrass(42000), makeTrees(), makeCampfire());
const LANTERN_I = 19;
const spot = new THREE.SpotLight(new THREE.Color(1.0, 0.86, 0.68), LANTERN_I, 0, 0.95, 1.0, 1.4);
scene.add(spot, spot.target);
const fireLight = new THREE.PointLight(new THREE.Color(1.0, 0.52, 0.2), 9, 0, 2);
fireLight.position.copy(FIRE_POS).add(new THREE.Vector3(0, 0.5, 0));
const moon = new THREE.DirectionalLight(new THREE.Color(0.55, 0.62, 0.8), 0.05);
moon.position.set(-20, 25, -45);
scene.add(fireLight, moon, new THREE.HemisphereLight(0x0c1018, 0x040302, 0.05));

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(960, 540), 0.55, 0.3, 2.2);
const mist = new UnrealBloomPass(new THREE.Vector2(960, 540), 0.025, 1.0, 0.0);
const kuwaPass = new ShaderPass(KuwaharaShader);
const finalPass = new ShaderPass(FinalShader);
composer.addPass(kuwaPass); composer.addPass(bloom); composer.addPass(mist); composer.addPass(finalPass);

let target = 540;
function resize() {
  const w = innerWidth, h = innerHeight;
  const pr = Math.min(window.devicePixelRatio || 1, target / Math.min(w, h));
  renderer.setPixelRatio(pr); renderer.setSize(w, h);
  composer.setPixelRatio(pr); composer.setSize(w, h);
  camera.aspect = w / h;
  camera.fov = w / h >= 1.3 ? 55 : Math.min(85, THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(38)) / (w / h))));
  camera.updateProjectionMatrix();
  finalPass.uniforms.uRes.value.set(Math.round(w * pr), Math.round(h * pr));
  kuwaPass.uniforms.uRes.value.copy(finalPass.uniforms.uRes.value);
  document.body.classList.toggle('portrait', w < h);
}
addEventListener('resize', resize);
resize();

// ---------------- player ----------------
const player = { pos: new THREE.Vector3(0.2, 0, 0.9), vel: new THREE.Vector3(), yaw: 0, pitch: -0.05, bob: 0, stepPhase: 0 };
const keys = new Set();
let started = false, locked = false, dragLook = TOUCH;
const joy = { id: null, cx: 0, cy: 0, x: 0, y: 0 };
const look = { id: null, x: 0, y: 0 };

function tryLock() {
  if (TOUCH) return;
  try {
    const r = canvas.requestPointerLock && canvas.requestPointerLock();
    if (r && r.catch) r.catch(() => { dragLook = true; });
  } catch { dragLook = true; }
}
document.addEventListener('pointerlockchange', () => {
  locked = document.pointerLockElement === canvas;
  if (locked) dragLook = false;
  ui.resume.classList.toggle('show', started && !TOUCH && !locked && !dragLook && !ended);
});
document.addEventListener('pointerlockerror', () => { dragLook = true; });
document.addEventListener('mousemove', (e) => {
  if (!locked) return;
  player.yaw -= e.movementX * 0.0022; player.pitch -= e.movementY * 0.0022;
  player.pitch = clamp(player.pitch, -1.2, 1.1);
});
canvas.addEventListener('pointerdown', (e) => {
  if (!started) return;
  if (!TOUCH && !locked && !dragLook) { tryLock(); return; }
  if (TOUCH && e.clientX < innerWidth * 0.45 && joy.id === null) {
    joy.id = e.pointerId; joy.cx = e.clientX; joy.cy = e.clientY; joy.x = joy.y = 0;
    ui.joy.style.left = `${joy.cx}px`; ui.joy.style.top = `${joy.cy}px`; ui.joy.classList.add('show'); ui.knob.style.transform = 'translate(-50%,-50%)';
  } else if (look.id === null) { look.id = e.pointerId; look.x = e.clientX; look.y = e.clientY; }
  try { canvas.setPointerCapture(e.pointerId); } catch {}
});
canvas.addEventListener('pointermove', (e) => {
  if (e.pointerId === joy.id) {
    let dx = e.clientX - joy.cx, dy = e.clientY - joy.cy; const r = Math.hypot(dx, dy), R = 56;
    if (r > R) { dx *= R / r; dy *= R / r; }
    joy.x = dx / R; joy.y = dy / R;
    ui.knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
  } else if (e.pointerId === look.id) {
    const k = TOUCH ? 0.0052 : 0.0042;
    player.yaw -= (e.clientX - look.x) * k; player.pitch -= (e.clientY - look.y) * k;
    player.pitch = clamp(player.pitch, -1.2, 1.1);
    look.x = e.clientX; look.y = e.clientY;
  }
});
const endPointer = (e) => {
  if (e.pointerId === joy.id) { joy.id = null; joy.x = joy.y = 0; ui.joy.classList.remove('show'); }
  if (e.pointerId === look.id) look.id = null;
};
canvas.addEventListener('pointerup', endPointer); canvas.addEventListener('pointercancel', endPointer);
addEventListener('keydown', (e) => {
  if (!started) return;
  if (e.code === 'KeyE') { toggleLedger(); return; }
  keys.add(e.code);
  if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => keys.clear());

const cows = [];
function resolveCollisions(p) {
  const pr = 0.25;
  const push = (cx, cz, r) => {
    const dx = p.x - cx, dz = p.z - cz, d = Math.hypot(dx, dz), m = r + pr;
    if (d < m && d > 1e-5) { p.x = cx + (dx / d) * m; p.z = cz + (dz / d) * m; }
  };
  for (let it = 0; it < 3; it++) {
    push(FIRE_POS.x, FIRE_POS.z, 0.62);
    for (const c of cows) {
      for (const b of c.blockers) push(b.x, b.z, b.r);
      push(c.headWorld.x, c.headWorld.z, 0.24 * c.s);
    }
  }
}

// ---------------- ledger, counting, ending ----------------
let ledgerOpen = false, countT = 0, count = 0, revealT = -1, ended = false;
let subTimer = 0;
function say(text, secs = 2.4) {
  ui.sub.textContent = text; ui.sub.classList.add('show'); subTimer = secs;
}
function toggleLedger(force) {
  if (ended || revealT >= 0) return;
  ledgerOpen = typeof force === 'boolean' ? force : !ledgerOpen;
  ui.ledger.classList.toggle('open', ledgerOpen);
  ui.ledgerBtn.setAttribute('aria-pressed', String(ledgerOpen));
  ui.ledgerBtn.querySelector('span').textContent = ledgerOpen ? '장부 덮기' : '장부 펴기';
}
ui.ledgerBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleLedger(); });

const rayO = new THREE.Vector3(), rayD = new THREE.Vector3(), tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3(), aimTmp = new THREE.Vector3();
function cowVisibleFrom(c, pt) {
  // occlusion by other cows' bodies (spheres)
  tmpA.copy(pt).sub(rayO); const L = tmpA.length(); tmpA.divideScalar(L);
  for (const o of cows) {
    if (o === c) continue;
    for (const b of o.blockers) {
      tmpB.set(b.x, 1.0 * o.s, b.z).sub(rayO);
      const t = tmpB.dot(tmpA);
      if (t <= 0 || t >= L - 0.3) continue;
      const d2 = tmpB.lengthSq() - t * t;
      if (d2 < (b.r * 1.05) ** 2) return false;
    }
  }
  return true;
}
function countStep(dt) {
  if (!ledgerOpen || revealT >= 0) return;
  rayO.copy(camera.position); camera.getWorldDirection(rayD);
  for (const c of cows) {
    if (c.counted) continue;
    let lit = false;
    for (const lp of c.aimPoints) {
      const pt = c.mesh.localToWorld(aimTmp.copy(lp));
      const v = pt.clone().sub(rayO); const dist = v.length();
      if (dist > 15) continue;
      const ang = Math.acos(clamp(v.dot(rayD) / dist, -1, 1));
      if (ang < 0.2 && cowVisibleFrom(c, pt)) { lit = true; break; }
    }
    c.lit = lit ? c.lit + dt : Math.max(0, c.lit - dt * 2);
    if (c.lit > 0.7) {
      c.counted = true; count++;
      if (count < LEDGER_COUNT) say(`${NUM[count - 1]}…`);
      else if (count === LEDGER_COUNT) say('열… 다 있네.', 2.8);
      else { say(`…${NUM[count - 1]}.`, 3.6); startReveal(); }
    }
  }
}
let revealStart = 0;
function startReveal() { revealT = 0; revealStart = performance.now(); }
function revealStep(dt) {
  if (revealT < 0) return;
  const before = revealT; revealT = (performance.now() - revealStart) / 1000;
  if (before < 1.4 && revealT >= 1.4) { for (const c of cows) c.staring = true; sound.silenceCrickets(); }
  if (revealT > 8.5) finalPass.uniforms.uFade.value = clamp((revealT - 8.5) / 2.2, 0, 1);
  if (revealT > 10.8 && !ended) {
    ended = true; ui.end.classList.add('show');
    if (document.pointerLockElement) document.exitPointerLock();
  }
}
ui.again.addEventListener('click', () => location.reload());

// ---------------- cows: idle life + stare ----------------
const camLocal = new THREE.Vector3();
function lookAngles(c, worldTarget) {
  camLocal.copy(worldTarget); c.mesh.worldToLocal(camLocal);
  const dx = camLocal.x, dy = camLocal.y - 1.16, dz = camLocal.z - 0.98;
  return [clamp(Math.atan2(dx, dz), -1.35, 1.35), clamp(Math.atan2(dy, Math.hypot(dx, dz)), -0.6, 0.5)];
}
function cowStep(c, dt, time) {
  const ai = c.ai;
  if (c.staring) {
    const [y, p] = lookAngles(c, camera.position);
    ai.yaw = damp(ai.yaw, y, 7, dt); ai.pitch = damp(ai.pitch, p, 7, dt);
  } else {
    ai.t -= dt;
    if (ai.t <= 0) {
      if (Math.random() < 0.45) { ai.tYaw = rand(-0.35, 0.35); ai.tPitch = -1.05; ai.t = rand(4, 9); }
      else { ai.tYaw = rand(-0.8, 0.8); ai.tPitch = rand(-0.2, 0.12); ai.t = rand(2.5, 6); }
    }
    ai.yaw = damp(ai.yaw, ai.tYaw, 1.4, dt); ai.pitch = damp(ai.pitch, ai.tPitch, 1.1, dt);
  }
  const own = c.mesh.material.userData.own;
  own.uPose.value.set(ai.yaw * 0.45, ai.pitch * 0.4, ai.yaw * 0.55, ai.pitch * 0.6);
  ai.flick = Math.max(0, ai.flick - dt * 1.8);
  if (Math.random() < dt * 0.12) ai.flick = 1;
  own.uTail.value = 0.1 * Math.sin(time * 1.1 + c.phase) + 0.5 * ai.flick * Math.sin(time * 9 + c.phase);
  // head position for breath sound
  c.headWorld.set(Math.sin(ai.yaw) * 0.75, 1.0, 0.58 + Math.cos(ai.yaw) * 0.75).applyMatrix4(c.mesh.matrixWorld);
}

// ---------------- eye adaptation: close, brightly lit things lower the exposure ----------------
let adapt = 1;
const adaptV = new THREE.Vector3();
function updateAdapt(dt) {
  let dNear = 99;
  if (fwd.y < -0.05) dNear = camera.position.y / -fwd.y;
  for (const c of cows) {
    for (const b of c.blockers) {
      adaptV.set(b.x, 1.0 * c.s, b.z).sub(camera.position);
      const d = adaptV.length();
      if (Math.acos(clamp(adaptV.dot(fwd) / d, -1, 1)) < 0.7) dNear = Math.min(dNear, Math.max(0.3, d - b.r));
    }
  }
  const goal = clamp(Math.pow(dNear / 2.4, 1.2), 0.3, 1.0);
  adapt = damp(adapt, goal, goal < adapt ? 6 : 2.5, dt);
}

// ---------------- frame loop ----------------
const FRAME_MS = 1000 / 60;
let nextDue = 0, last = performance.now(), fpsAcc = 0, fpsN = 0, slow = 0;
const fwd = new THREE.Vector3(), right = new THREE.Vector3(), lanternOffset = new THREE.Vector3(0.3, -0.5, -0.1), tmpV = new THREE.Vector3();
function frame(now) {
  if (!document.hidden) requestAnimationFrame(frame);
  if (now < nextDue - 1) return;
  nextDue = Math.max(nextDue + FRAME_MS, now + FRAME_MS * 0.6);
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  const time = now / 1000;
  U.uTime.value = time; FIRE_U.uTime.value = time;

  // movement
  let ix = 0, iz = 0;
  if (keys.has('KeyD') || keys.has('ArrowRight')) ix += 1;
  if (keys.has('KeyA') || keys.has('ArrowLeft')) ix -= 1;
  if (keys.has('KeyW') || keys.has('ArrowUp')) iz += 1;
  if (keys.has('KeyS') || keys.has('ArrowDown')) iz -= 1;
  ix += joy.x; iz -= joy.y;
  const im = Math.hypot(ix, iz); if (im > 1) { ix /= im; iz /= im; }
  if (ended) { ix = iz = 0; }
  const sy = Math.sin(player.yaw), cy = Math.cos(player.yaw);
  const wantX = (ix * cy - iz * sy) * 1.5, wantZ = (-ix * sy - iz * cy) * 1.5;
  player.vel.x = damp(player.vel.x, wantX, 8, dt); player.vel.z = damp(player.vel.z, wantZ, 8, dt);
  player.pos.x += player.vel.x * dt; player.pos.z += player.vel.z * dt;
  resolveCollisions(player.pos);
  const speed = Math.hypot(player.vel.x, player.vel.z);
  const prevPhase = player.stepPhase;
  player.stepPhase += dt * speed * 4.4;
  if (Math.floor(prevPhase / Math.PI) !== Math.floor(player.stepPhase / Math.PI) && speed > 0.3) sound.step();
  const bobA = clamp(speed / 1.5, 0, 1);
  camera.position.set(player.pos.x + Math.cos(player.stepPhase) * 0.012 * bobA * cy, EYE_H + Math.abs(Math.sin(player.stepPhase)) * 0.025 * bobA, player.pos.z - Math.cos(player.stepPhase) * 0.012 * bobA * sy);
  followWorld(camera.position.x, camera.position.z);
  camera.rotation.set(player.pitch, player.yaw, 0);

  // lantern held low in the right hand, pointing where you look
  tmpV.copy(lanternOffset).applyAxisAngle(THREE.Object3D.DEFAULT_UP, player.yaw);
  spot.position.copy(camera.position).add(tmpV); spot.position.y += Math.sin(time / 0.9) * 0.01;
  camera.getWorldDirection(fwd);
  spot.target.position.copy(camera.position).addScaledVector(fwd, 8);
  U.uLanternPos.value.copy(spot.position);
  spot.intensity = LANTERN_I * (1 + 0.035 * Math.sin(time * 9) * Math.sin(time * 20.7 + 1.7));
  updateAdapt(dt);
  finalPass.uniforms.uExpC.value = 0.26 * adapt; finalPass.uniforms.uExpG.value = 0.21 * adapt;
  fireLight.intensity = 9 * (1 + 0.14 * Math.sin(time * 7.7) * Math.sin(time * 2.3 + 1.1) + 0.06 * Math.sin(time * 23.0));

  // counting look follows the ledger
  countT = approach(countT, ledgerOpen || revealT >= 0 ? 1 : 0, dt / (ledgerOpen ? 3.0 : 1.5));
  finalPass.uniforms.uCount.value = countT; kuwaPass.uniforms.uCount.value = countT;
  mist.strength = 0.025 + 0.02 * countT;
  scene.fog.density = 0.009 + 0.004 * countT;
  finalPass.uniforms.uSeed.value = (now * 0.061) % 997;

  for (const c of cows) cowStep(c, dt, time);
  countStep(dt);
  revealStep(dt);
  sound.update(camera.position, fwd, cows, time);
  if (subTimer > 0) { subTimer -= dt; if (subTimer <= 0) ui.sub.classList.remove('show'); }

  composer.render(dt);

  fpsAcc += dt; fpsN++;
  if (fpsAcc >= 1) {
    const fps = fpsN / fpsAcc;
    ui.fps.textContent = `fps ${Math.round(fps)} · ${finalPass.uniforms.uRes.value.x}×${finalPass.uniforms.uRes.value.y}`;
    slow = fps < 50 ? slow + 1 : 0;
    if (slow >= 3 && target > 360) { target -= 60; resize(); slow = 0; }
    fpsAcc = 0; fpsN = 0;
  }
}
document.addEventListener('visibilitychange', () => { if (!document.hidden) { last = performance.now(); nextDue = 0; requestAnimationFrame(frame); sound.resume(); } });

// ---------------- boot ----------------
(async () => {
  try {
    const geos = await loadVariants((p) => { ui.loadTxt.textContent = `불러오는 중… ${Math.round(p * 100)}%`; });
    HERD.forEach((h, i) => {
      const toCamp = Math.atan2(0 - h.x, 0.5 - h.z);
      const mesh = new THREE.Mesh(geos[h.v], cowMaterial(h.coat, h.face ?? h.coat, i * 1.7));
      mesh.position.set(h.x, 0, h.z);
      mesh.rotation.y = toCamp + (h.off * Math.PI) / 180;
      mesh.scale.setScalar(h.s);
      mesh.frustumCulled = true;
      scene.add(mesh);
      mesh.updateMatrixWorld(true);
      const blockers = [0.55, 0.0, -0.6].map((lz) => { const p = new THREE.Vector3(0, 0, lz * 0.92).applyMatrix4(mesh.matrixWorld); return { x: p.x, z: p.z, r: 0.37 * h.s }; });
      cows.push({
        mesh, s: h.s, phase: i * 1.7, blockers, counted: false, lit: 0, staring: false, headWorld: new THREE.Vector3(),
        aimPoints: [new THREE.Vector3(0, 1.0, 0.0), new THREE.Vector3(0, 1.0, 0.6), new THREE.Vector3(0, 1.0, -0.6), new THREE.Vector3(0, 1.15, 1.1)],
        ai: { t: rand(0, 3), yaw: rand(-0.4, 0.4), pitch: rand(-0.9, 0.0), tYaw: 0, tPitch: -0.5, flick: 0 },
      });
    });
    renderer.compile(scene, camera);
    ui.loadTxt.textContent = TOUCH ? '왼쪽을 밀어서 걷고, 오른쪽을 끌어서 둘러봐요' : 'WASD로 걷고, 마우스로 둘러봐요 · E로 장부를 펴요';
    ui.startBtn.disabled = false; ui.startBtn.textContent = '시작';
    window.__ready = true;
    last = performance.now();
    requestAnimationFrame(frame);
  } catch (err) {
    console.error(err);
    ui.loadTxt.textContent = '불러오지 못했어요. 새로고침해 주세요.';
  }
})();
ui.startBtn.addEventListener('click', () => {
  if (started) return;
  started = true;
  ui.start.classList.add('gone');
  document.body.classList.add('playing');
  try { sound.init(); } catch (e) { console.warn('sound', e); }
  tryLock();
  setTimeout(() => ui.hint.classList.add('gone'), 9000);
});
ui.resume.addEventListener('click', () => tryLock());

if (DEBUG) {
  window.__dbg = {
    openLedger: () => toggleLedger(true),
    countAll: () => { for (const c of cows) c.lit = 1; },
    state: () => ({ count, ledgerOpen, countT, revealT, ended, pos: player.pos.toArray() }),
    walk: (code, ms) => { keys.add(code); setTimeout(() => keys.delete(code), ms); },
    turn: (dy) => { player.yaw += dy; },
    goto: (x, z, yaw, pitch) => { player.pos.set(x, 0, z); player.yaw = yaw; player.pitch = pitch ?? 0; },
    faceFire: () => { player.pos.set(-0.2, 0, 2.6); player.yaw = Math.atan2(-(FIRE_POS.x - -0.2), -(FIRE_POS.z - 2.6)); player.pitch = -0.45; },
  };
}

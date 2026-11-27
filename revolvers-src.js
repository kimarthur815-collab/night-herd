// Night Herd: the revolver candidates, side by side on a turntable.
// The gun turns under lighting that stays put, like a product turntable; buttons cock and fire it.
import * as THREE from 'three';

const GUNS = {
  colt75: {
    tag: '게임에 쓸 총', chip: '① 콜트 기병용', title: '① 콜트 피스메이커 7½″ · 기병용',
    sub: '1873년 미군 제식 · .45 콜트 6연발 · 청색 총열과 실린더, 무지갯빛 표면경화 프레임 · 호두나무 통손잡이',
    pts: ['가장 유명한 서부 리볼버예요. 총열이 길어 1인칭에서 겨누는 맛이 좋아요.', '장전은 옆의 작은 덮개를 열고 한 발씩 (느리고 긴장돼요).', '총열이 길어서 화면을 조금 더 가려요.'],
    mats: { frame: 'case', barrel: 'blued', straps: 'blued', grip: 'walnut', screws: 'fireblue', cylinder: 'blued', hammer: 'case', trigger: 'case' },
    wear: 0.75, turn: 1, hamMax: 0.82,
  },
  colt475: {
    tag: '나중에 업그레이드: 공이치기와 겨누기가 빨라지고 화면을 덜 가려요. 대신 탄이 조금 더 퍼져요.', chip: '② 콜트 니켈', title: '② 콜트 피스메이커 4¾″ · 민수용 니켈',
    sub: '1879년 무렵부터 · .45 콜트 6연발 · 니켈 도금 · 상아 손잡이',
    pts: ['짧아서 화면을 덜 가리고, 랜턴 불빛에 은색으로 번쩍여요.', '장전은 ①과 같아요 (한 발씩).', '밝게 빛나서 어두운 분위기와는 덜 어울릴 수 있어요.'],
    mats: { frame: 'nickel', barrel: 'nickel', straps: 'nickel', grip: 'ivory', screws: 'nickel', cylinder: 'nickel', hammer: 'nickel', trigger: 'nickel' },
    wear: 0.45, turn: 1, hamMax: 0.82,
  },
  schofield: {
    tag: '후보', chip: '③ S&W 스코필드', title: '③ 스미스 & 웨슨 스코필드 7″',
    sub: '1875년 미군 채택 · .45 스코필드 6연발 · 청색, 표면경화 공이 · 호두나무 손잡이 · 끈 고리',
    pts: ['총을 아래로 꺾어 열면 탄피 6개가 한꺼번에 튀어나와요 (장전이 빨라요).', '뒤쪽 위의 걸쇠와 손잡이 밑 고리가 독특해요. 실린더는 콜트와 반대로 돌아요.', '콜트보다 덜 알려진 모양이에요.'],
    mats: { frame: 'blued', barrel: 'blued', grip: 'walnut', screws: 'blued', ring: 'steel', cylinder: 'blued', hammer: 'case', trigger: 'case' },
    wear: 0.75, turn: -1, hamMax: 0.78,
  },
};
const ORDER = ['colt75', 'colt475', 'schofield'];
const $ = (id) => document.getElementById(id);

// ---------------- renderer, camera ----------------
const stage = $('stage'), canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setClearColor(0x000000, 0);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(26, 1, 0.05, 20);
const R_FIT = 0.2; // every gun framed for the longest one, so their sizes compare

// ---------------- lighting: studio, desert day, night with the lantern ----------------
const pmrem = new THREE.PMREMGenerator(renderer);
function dome(top, mid, bottom, blobs) {
  const s = new THREE.Scene();
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: { cT: { value: new THREE.Color(top) }, cM: { value: new THREE.Color(mid) }, cB: { value: new THREE.Color(bottom) } },
    vertexShader: 'varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: 'uniform vec3 cT, cM, cB; varying vec3 vD; void main(){ float y = normalize(vD).y; vec3 c = y > 0.0 ? mix(cM, cT, pow(y, 0.55)) : mix(cM, cB, pow(-y, 0.35)); gl_FragColor = vec4(c, 1.0); }',
  });
  s.add(new THREE.Mesh(new THREE.SphereGeometry(10, 64, 32), mat));
  for (const b of blobs) {
    const geo = b.box ? new THREE.PlaneGeometry(b.box[0], b.box[1]) : new THREE.SphereGeometry(b.r, 32, 16);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: new THREE.Color(b.c[0], b.c[1], b.c[2]), side: THREE.DoubleSide }));
    m.position.set(b.p[0], b.p[1], b.p[2]);
    if (b.box) m.lookAt(0, 0, 0);
    if (b.s) m.scale.set(b.s[0], b.s[1], b.s[2]);
    s.add(m);
  }
  return s;
}
const ENV = {
  studio: pmrem.fromScene(dome('#29292d', '#1a1a1d', '#0f0f11', [
    { box: [7, 3.5], p: [0, 7.5, 1.5], c: [4.6, 4.6, 4.7] }, // overhead softbox
    { box: [1.2, 7], p: [-7, 1, 3], c: [5.5, 5.4, 5.2] }, // tall strip to the left
    { box: [0.8, 7], p: [7, 0.5, -2], c: [3.2, 3.4, 3.8] }, // cool rim strip behind, right
    { box: [9, 5], p: [-1, 1, 8.5], c: [1.25, 1.25, 1.25] }, // big diffuser behind the camera
    { box: [3, 7], p: [6, 1, 5], c: [1.9, 1.9, 1.9] }, // diffuser front right
    { box: [8, 1.5], p: [0, -6, 4], c: [0.4, 0.38, 0.35] }, // the table, faintly
  ]), 0.02).texture,
  day: pmrem.fromScene(dome('#3d6aae', '#ead9ba', '#8c6a46', [
    { p: [4.2, 6.4, 3.4], r: 0.42, c: [70, 58, 42] }, // the sun
    { p: [0, -7, 2], r: 3.5, c: [0.9, 0.72, 0.5], s: [1.6, 0.3, 1.6] }, // bright sand in front
  ]), 0.02).texture,
  night: pmrem.fromScene(dome('#05070d', '#0c0a09', '#050403', [
    { p: [-3.4, -1.0, 3.2], r: 0.5, c: [30, 13.5, 4] }, // the lantern in the left hand
    { p: [1.8, -2.6, -6], r: 1.5, c: [1.5, 0.5, 0.13] }, // the campfire, further off
    { p: [2.5, 6.5, -4], r: 0.22, c: [3.2, 3.4, 3.8] }, // moon
  ]), 0.015).texture,
};
const key = new THREE.DirectionalLight(0xffffff, 0.9); key.position.set(-1.0, 1.6, 1.4);
const sun = new THREE.DirectionalLight(0xfff0d8, 2.6); sun.position.set(0.9, 1.7, 0.7);
const lantern = new THREE.PointLight(0xffa452, 0.45, 0, 2); lantern.position.set(-0.24, -0.07, 0.3);
const moon = new THREE.DirectionalLight(0x9fb4ff, 0.1); moon.position.set(0.6, 1.5, -1);
const flashLight = new THREE.PointLight(0xffb060, 0, 0, 2);
scene.add(key, sun, lantern, moon);
let lightMode = 'studio';
function setLight(mode) {
  lightMode = mode;
  scene.environment = ENV[mode];
  scene.environmentIntensity = mode === 'day' ? 0.9 : 1.0;
  key.visible = mode === 'studio'; sun.visible = mode === 'day'; lantern.visible = moon.visible = mode === 'night';
  renderer.toneMappingExposure = mode === 'night' ? 1.15 : 1.0;
  document.body.dataset.light = mode;
  for (const b of document.querySelectorAll('#light button')) b.classList.toggle('on', b.dataset.v === mode);
}

// ---------------- materials ----------------
const NOISE = `
float h3(vec3 p){ p = fract(p*0.3183099 + 0.1); p *= 17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
float vn(vec3 x){ vec3 i = floor(x), f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(h3(i), h3(i+vec3(1,0,0)), f.x), mix(h3(i+vec3(0,1,0)), h3(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i+vec3(0,0,1)), h3(i+vec3(1,0,1)), f.x), mix(h3(i+vec3(0,1,1)), h3(i+vec3(1,1,1)), f.x), f.y), f.z); }
float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vn(p); p = p*2.03 + 1.7; a *= 0.5; } return s; }
`;
// every finish in one shader, picked by KIND; P is the part's own position in metres
const FINISH = `
vec3 P = vLP; float ao = vAtt.x, cv = vAtt.y;
// how fast the surface bends here, per pixel: big flat triangles stay clean even when a vertex sits on an edge
vec3 nn = normalize(vNormal);
float bend = length(abs(dFdx(nn)) + abs(dFdy(nn))) / max(length(abs(dFdx(vViewPosition)) + abs(dFdy(vViewPosition))), 1e-7);
float edge = smoothstep(0.35, 0.75, smoothstep(300.0, 900.0, bend) * smoothstep(0.52, 0.6, cv) + (vn(P*1500.0) - 0.5)*0.35) * uWear; // holster wear on sharp edges
float hollow = smoothstep(0.48, 0.4, cv) * smoothstep(150.0, 600.0, bend);    // grime in the corners
vec3 c; float rough;
#if KIND == 0 // blued steel
  c = vec3(0.1, 0.12, 0.17) * (0.9 + 0.2*vn(P*260.0));
  c = mix(c, vec3(0.56, 0.56, 0.57), edge);
  rough = mix(0.3, 0.22, edge);
#elif KIND == 1 // colour case hardening: swirls of straw, purple, blue and smoke over grey
  vec3 q = P*70.0;
  q += vec3(fbm(q*0.9), fbm(q*0.9 + 5.2), fbm(q*0.9 + 9.7))*4.0;
  float ca = fbm(q), cb = fbm(q*1.4 + 3.3), cd = fbm(q*0.8 + 11.0);
  c = vec3(0.3, 0.3, 0.32);
  c = mix(c, vec3(0.6, 0.42, 0.18), smoothstep(0.4, 0.68, ca)*0.8);
  c = mix(c, vec3(0.28, 0.12, 0.34), smoothstep(0.42, 0.7, cb)*0.9);
  c = mix(c, vec3(0.06, 0.14, 0.42), smoothstep(0.42, 0.68, cd)*0.9);
  c = mix(c, vec3(0.1, 0.11, 0.13), smoothstep(0.5, 0.75, ca - cb*0.4 + 0.25)*0.8);
  c = mix(c, vec3(0.66), edge*0.6);
  rough = 0.3;
#elif KIND == 2 // nickel plate, worn through to steel in places
  c = vec3(0.76, 0.73, 0.66) * (0.95 + 0.08*vn(P*300.0));
  float worn = smoothstep(0.55, 0.8, fbm(P*140.0)) * edge;
  c = mix(c, vec3(0.44, 0.42, 0.4), worn);
  c *= mix(1.0, 0.72, hollow);
  rough = mix(0.12, 0.3, worn) + 0.04*vn(P*500.0);
#elif KIND == 3 // oiled walnut: grain running down the grip, open pores, hands have polished the edges
  vec2 ax = normalize(vec2(0.4, -1.0));
  float along = dot(P.zy, ax), across = dot(P.zy, vec2(-ax.y, ax.x)) + P.x*0.3;
  float w = fbm(vec3(along*25.0, across*90.0, P.x*90.0));
  float ring = 0.5 + 0.5*sin(across*1800.0 + w*30.0);
  float fig = fbm(vec3(along*60.0, across*220.0, P.x*220.0));
  c = mix(vec3(0.2, 0.095, 0.042), vec3(0.1, 0.045, 0.02), smoothstep(0.35, 1.0, ring)*0.5 + smoothstep(0.4, 0.72, fig)*0.5);
  c *= 0.86 + 0.28*vn(vec3(along*150.0, across*3200.0, P.x*3200.0));
  c *= mix(1.0, 0.6, hollow) * mix(0.75, 1.0, ao);
  c = mix(c, c*1.35 + 0.02, edge*0.5);
  rough = mix(0.55, 0.38, edge);
#elif KIND == 4 // old ivory, yellowed where dirt sits
  float g = fbm(P*160.0);
  c = vec3(0.74, 0.66, 0.5) * (0.92 + 0.14*g);
  c *= 0.975 + 0.025*sin(dot(P.zy, vec2(0.95, 0.3))*1900.0 + g*10.0);
  c = mix(c, vec3(0.5, 0.37, 0.2), clamp(hollow*0.7 + (1.0 - ao)*0.6, 0.0, 0.85));
  rough = 0.33 + 0.08*g;
#elif KIND == 5 // fire-blued screws
  c = mix(vec3(0.1, 0.26, 0.66), vec3(0.6), edge*0.5);
  rough = 0.22;
#elif KIND == 6 // lead
  c = vec3(0.38, 0.38, 0.4) * (0.9 + 0.2*vn(P*900.0));
  rough = 0.55;
#else // bright steel
  c = vec3(0.58, 0.58, 0.6) * (0.95 + 0.1*vn(P*400.0));
  rough = 0.3;
#endif
diffuseColor.rgb = c;
`;
const AO = `
{ float occ = mix(1.0, vAtt.x, 0.92);
  reflectedLight.indirectDiffuse *= occ;
  #if defined( USE_CLEARCOAT )
    clearcoatSpecularIndirect *= occ;
  #endif
  float dNV = saturate(dot(geometryNormal, geometryViewDir));
  reflectedLight.indirectSpecular *= computeSpecularOcclusion(dNV, occ, material.roughness);
  float dOcc = mix(1.0, vAtt.x, 0.6);
  reflectedLight.directSpecular *= dOcc; reflectedLight.directDiffuse *= dOcc; }
`;
const KINDS = { blued: 0, case: 1, nickel: 2, walnut: 3, ivory: 4, fireblue: 5, lead: 6, steel: 7 };
const matCache = new Map();
function material(kind, wear) {
  const id = kind + wear;
  if (matCache.has(id)) return matCache.get(id);
  const wood = kind === 'walnut' || kind === 'ivory';
  const m = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, metalness: wood ? 0 : 1, roughness: 0.3,
    clearcoat: { blued: 0.8, case: 0.6, walnut: 0.35, ivory: 0.5 }[kind] || 0,
    clearcoatRoughness: kind === 'walnut' ? 0.35 : 0.12,
  });
  m.defines = { KIND: KINDS[kind] };
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uWear = { value: wear };
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute vec2 aAtt; varying vec2 vAtt; varying vec3 vLP;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvAtt = aAtt; vLP = position;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>\nvarying vec2 vAtt; varying vec3 vLP; uniform float uWear;\n${NOISE}`)
      .replace('#include <color_fragment>', `#include <color_fragment>\n${FINISH}`)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = rough;')
      .replace('#include <aomap_fragment>', AO);
  };
  m.customProgramCacheKey = () => 'rv' + kind;
  matCache.set(id, m);
  return m;
}

// ---------------- meshes ----------------
function parse(j) {
  const raw = atob(j.data), u8 = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) u8[i] = raw.charCodeAt(i);
  const buf = u8.buffer, vc = j.vc, ic = j.ic;
  let o = 0, idx;
  if (j.i32) { idx = new Uint32Array(buf, o, ic); o += ic * 4; }
  const p16 = new Int16Array(buf, o, vc * 3); o += vc * 6;
  if (!j.i32) { idx = new Uint16Array(buf, o, ic); o += ic * 2; }
  const nrm = new Int8Array(buf, o, vc * 3); o += vc * 3;
  const att = new Uint8Array(buf, o, vc * 2);
  const pos = new Float32Array(vc * 3); for (let i = 0; i < vc * 3; i++) pos[i] = p16[i] * j.ps;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(new Int8Array(nrm), 3, true));
  g.setAttribute('aAtt', new THREE.BufferAttribute(new Uint8Array(att), 2, true));
  g.setIndex(new THREE.BufferAttribute(j.i32 ? new Uint32Array(idx) : new Uint16Array(idx), 1));
  g.computeBoundingSphere();
  return g;
}
// split off the triangles wholly below a height (the Schofield's lanyard ring shares a bake with the screws)
function splitBelow(g, yCut) {
  const ix = g.index.array, p = g.attributes.position.array, a = [], b = [];
  for (let t = 0; t < ix.length; t += 3) {
    const low = p[3 * ix[t] + 1] < yCut && p[3 * ix[t + 1] + 1] < yCut && p[3 * ix[t + 2] + 1] < yCut;
    (low ? b : a).push(ix[t], ix[t + 1], ix[t + 2]);
  }
  return [a, b].map((list) => {
    const h = new THREE.BufferGeometry();
    for (const k of ['position', 'normal', 'aAtt']) h.setAttribute(k, g.attributes[k]);
    h.setIndex(list); h.computeBoundingSphere(); return h;
  });
}
function plainAtt(g) { // lathe parts have no baked occlusion: fully open, flat
  const n = g.attributes.position.count, a = new Uint8Array(n * 2);
  for (let i = 0; i < n; i++) { a[2 * i] = 255; a[2 * i + 1] = 128; }
  g.setAttribute('aAtt', new THREE.BufferAttribute(a, 2, true));
  return g;
}
// a round-nosed lead bullet, its tip at z = 0, the body running back to +z
const bulletGeo = (() => {
  const prof = [[0.0057, 0], [0.0057, 0.0068], [0.0055, 0.0082], [0.0049, 0.0097], [0.0039, 0.011], [0.0025, 0.0119], [0.001, 0.0124], [0, 0.0125]];
  const g = new THREE.LatheGeometry(prof.map(([r, y]) => new THREE.Vector2(r, y)), 28);
  g.rotateX(-Math.PI / 2); g.translate(0, 0, 0.0125);
  return plainAtt(g);
})();
const flashTex = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d'), gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(255,250,230,1)'); gr.addColorStop(0.18, 'rgba(255,200,110,0.85)'); gr.addColorStop(0.5, 'rgba(255,120,40,0.25)'); gr.addColorStop(1, 'rgba(255,90,20,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
})();

const turntable = new THREE.Group(); scene.add(turntable);
let META = null;
const guns = {};
async function loadGun(id) {
  if (guns[id]) return guns[id];
  if (!META) META = await (await fetch('data/guns.json')).json();
  const meta = META[id], conf = GUNS[id], geos = {};
  await Promise.all(meta.parts.map(async (n) => { geos[n] = parse(await (await fetch(`data/${id}-${n}.json`)).json()); }));
  const body = new THREE.Group(), recoil = new THREE.Group(), center = new THREE.Group();
  const grip = new THREE.Vector3(0, -0.08, 0.045); // the gun kicks up about the hand
  recoil.position.copy(grip); body.position.copy(grip).negate();
  recoil.add(body); center.add(recoil);
  const M = (k) => material(k, conf.wear);
  const add = (geo, k, parent = body) => { const m = new THREE.Mesh(geo, M(k)); parent.add(m); return m; };
  const cyl = new THREE.Group(), ham = new THREE.Group(), trg = new THREE.Group();
  cyl.position.set(0, meta.cylY, 0);
  ham.position.set(0, meta.hammerPivot[1], meta.hammerPivot[0]);
  trg.position.set(0, meta.triggerPivot[1], meta.triggerPivot[0]);
  body.add(cyl, ham, trg);
  for (const n of meta.parts) {
    const geo = geos[n];
    if (n === 'cylinder') { geo.translate(0, -meta.cylY, 0); add(geo, conf.mats.cylinder, cyl); }
    else if (n === 'hammer') add(geo, conf.mats.hammer, ham);
    else if (n === 'trigger') add(geo, conf.mats.trigger, trg);
    else if (n === 'screws' && conf.mats.ring) { const [s, r] = splitBelow(geo, -0.11); add(s, conf.mats.screws); add(r, conf.mats.ring); }
    else add(geo, conf.mats[n]);
  }
  const bullets = [];
  for (let k = 0; k < 6; k++) {
    const a = Math.PI / 2 + conf.turn * k * Math.PI / 3, b = add(bulletGeo, 'lead', cyl);
    b.position.set(Math.cos(a) * meta.chamberR, Math.sin(a) * meta.chamberR, meta.chamberZ + 0.0032);
    bullets.push(b);
  }
  const box = new THREE.Box3().setFromObject(center), mid = box.getCenter(new THREE.Vector3()); // measured through the recoil pivot
  center.position.copy(mid).negate();
  const flash = new THREE.Sprite(new THREE.SpriteMaterial({ map: flashTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 }));
  flash.position.set(0, 0, meta.zMuz - 0.025); flash.scale.setScalar(0.001); body.add(flash);
  const g = { id, conf, meta, root: center, recoil, cyl, ham, trg, bullets, flash, muzzle: new THREE.Vector3(0, 0, meta.zMuz - 0.02),
    top: 0, loaded: [false, true, true, true, true, true], cocked: false, anim: null, kick: 0, flashT: 9 };
  reload(g); pose(g, 0, 1, 0);
  return (guns[id] = g);
}
function reload(g) { g.loaded = [false, true, true, true, true, true]; g.top = 0; g.bullets.forEach((b, k) => (b.visible = g.loaded[k])); }

// ---------------- the action: cock, fire ----------------
const TRIG_BACK = 0.11;
function pose(g, ham, trig, cylA) {
  g.ham.rotation.x = g.conf.hamMax * ham;
  g.trg.rotation.x = -TRIG_BACK * trig;
  g.cyl.rotation.z = -g.conf.turn * cylA * Math.PI / 3;
}
const ease = (u) => u * u * (3 - 2 * u), sstep = (a, b, x) => ease(Math.min(1, Math.max(0, (x - a) / (b - a))));
function cock(g) {
  if (!g || g.anim || g.cocked) return;
  g.anim = { type: 'cock', t: 0, from: g.top }; g.top = (g.top + 1) % 6;
  snd.click(0.25, 2400);
}
function fire(g) {
  if (!g || g.anim) return;
  if (!g.cocked) { cock(g); return; } // a single action: the hammer has to come back first
  g.anim = { type: 'fire', t: 0 };
}
function step(g, dt) {
  const a = g.anim;
  let ham = g.cocked ? 1 : 0, trig = g.cocked ? 0 : 1, cylA = g.top;
  if (a) {
    a.t += dt;
    if (a.type === 'cock') {
      const u = Math.min(1, a.t / 0.34);
      ham = ease(u); cylA = a.from + sstep(0.25, 0.85, u); trig = 1 - sstep(0.75, 1, u);
      if (!a.c1 && u > 0.5) { a.c1 = 1; snd.click(0.35, 3300); }
      if (u >= 1) { snd.click(0.6, 2900); g.cocked = true; g.anim = null; }
    } else {
      const u = a.t;
      trig = Math.min(1.45, (u / 0.05) * 1.45);
      ham = u < 0.05 ? 1 : Math.max(0, 1 - (u - 0.05) / 0.03);
      if (!a.shot && u >= 0.08) {
        a.shot = 1; g.cocked = false;
        if (g.loaded[g.top]) { g.loaded[g.top] = false; g.bullets[g.top].visible = false; g.kick = 1; g.flashT = 0; snd.bang(); }
        else snd.click(0.7, 1800);
        updateAmmo();
      }
      if (u > 0.08) trig = 1 + 0.45 * Math.max(0, 1 - (u - 0.08) / 0.2);
      if (u > 0.32) g.anim = null;
    }
  }
  pose(g, ham, trig, cylA);
  // recoil: the muzzle flips up and settles back
  g.kick = Math.max(0, g.kick - dt * 3.2);
  const k = g.kick, kk = k * k * (3 - 2 * k);
  g.recoil.rotation.x = 0.42 * kk; g.recoil.position.z = 0.045 + 0.012 * kk;
  // flash
  g.flashT += dt;
  const f = Math.max(0, 1 - g.flashT / 0.07);
  g.flash.material.opacity = f; g.flash.scale.setScalar(0.02 + 0.11 * f * (0.8 + 0.4 * Math.random()));
  flashLight.intensity = 6 * f;
  if (f > 0) { g.flash.updateWorldMatrix(true, false); flashLight.position.setFromMatrixPosition(g.flash.matrixWorld); }
}

// ---------------- sound ----------------
const snd = (() => {
  let ac = null, nb = null;
  const ctx = () => {
    if (!ac) { try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; } }
    if (ac.state === 'suspended') ac.resume();
    if (!nb) { nb = ac.createBuffer(1, ac.sampleRate * 1.5, ac.sampleRate); const d = nb.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
    return ac;
  };
  const burst = (a, t, f, type, q, gain, dur, dest) => {
    const s = a.createBufferSource(); s.buffer = nb;
    const fl = a.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q;
    const g = a.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0005, t + dur);
    s.connect(fl).connect(g).connect(dest || a.destination); s.start(t, Math.random()); s.stop(t + dur + 0.02);
  };
  return {
    click(gain, f) { const a = ctx(); if (!a) return; const t = a.currentTime; burst(a, t, f, 'bandpass', 6, gain, 0.025); burst(a, t + 0.004, f * 0.55, 'bandpass', 3, gain * 0.5, 0.05); },
    bang() {
      const a = ctx(); if (!a) return; const t = a.currentTime;
      const echo = a.createDelay(1); echo.delayTime.value = 0.31;
      const fb = a.createGain(); fb.gain.value = 0.32; const lp = a.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900;
      const wet = a.createGain(); wet.gain.value = 0.5;
      echo.connect(lp).connect(fb).connect(echo); lp.connect(wet).connect(a.destination);
      const bus = a.createGain(); bus.connect(a.destination); bus.connect(echo);
      burst(a, t, 2800, 'lowpass', 0.7, 1.0, 0.45, bus);
      burst(a, t, 6000, 'highpass', 0.7, 0.5, 0.06, bus);
      const o = a.createOscillator(), og = a.createGain(); o.frequency.setValueAtTime(95, t); o.frequency.exponentialRampToValueAtTime(38, t + 0.25);
      og.gain.setValueAtTime(0.9, t); og.gain.exponentialRampToValueAtTime(0.001, t + 0.3); o.connect(og).connect(bus); o.start(t); o.stop(t + 0.32);
    },
  };
})();

// ---------------- views and input ----------------
const VIEWS = { side: { yaw: -Math.PI / 2 + 0.38, pitch: 0.2, zoom: 1 }, left: { yaw: Math.PI / 2 - 0.38, pitch: 0.2, zoom: 1 },
  fp: { yaw: 0.3, pitch: 0.4, zoom: 0.66 }, front: { yaw: Math.PI - 0.3, pitch: 0.12, zoom: 0.85 } };
const view = { yaw: VIEWS.side.yaw, pitch: VIEWS.side.pitch, zoom: 1, goal: null };
let spin = true, idle = 0;
function setView(v) {
  view.goal = { ...VIEWS[v] };
  const dy = ((view.goal.yaw - view.yaw + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI; // the short way round
  view.goal.yaw = view.yaw + dy; idle = -4;
  for (const b of document.querySelectorAll('#view button')) b.classList.toggle('on', b.dataset.v === v);
}
const ptrs = new Map();
let pinch0 = 0, zoom0 = 1;
stage.addEventListener('pointerdown', (e) => { stage.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY }); if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch0 = Math.hypot(a.x - b.x, a.y - b.y); zoom0 = view.zoom; } idle = 0; view.goal = null; });
stage.addEventListener('pointermove', (e) => {
  const p = ptrs.get(e.pointerId); if (!p) return;
  if (ptrs.size === 1) { view.yaw += (e.clientX - p.x) * 0.009; view.pitch = Math.max(-1.3, Math.min(1.3, view.pitch + (e.clientY - p.y) * 0.007)); }
  p.x = e.clientX; p.y = e.clientY;
  if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; view.zoom = Math.max(0.35, Math.min(1.6, zoom0 * pinch0 / Math.max(1, Math.hypot(a.x - b.x, a.y - b.y)))); }
  idle = 0;
});
const up = (e) => { ptrs.delete(e.pointerId); };
stage.addEventListener('pointerup', up); stage.addEventListener('pointercancel', up);
stage.addEventListener('wheel', (e) => { e.preventDefault(); view.zoom = Math.max(0.35, Math.min(1.6, view.zoom * Math.exp(e.deltaY * 0.001))); idle = 0; }, { passive: false });

// ---------------- page ----------------
let cur = null;
function updateAmmo() {
  if (!cur) return;
  const n = cur.loaded.filter(Boolean).length;
  $('ammo').textContent = `남은 탄 ${n}/6` + (n === 0 ? ' · 채우기를 누르세요' : '');
}
async function setGun(id) {
  for (const b of document.querySelectorAll('#guns button')) b.classList.toggle('on', b.dataset.v === id);
  const c = GUNS[id];
  $('title').textContent = c.title; $('sub').textContent = c.sub; $('tag').textContent = c.tag;
  $('pts').innerHTML = c.pts.map((t) => `<li>${t}</li>`).join('');
  $('loading').hidden = !!guns[id] ? true : false;
  const g = await loadGun(id);
  $('loading').hidden = true;
  if (cur) turntable.remove(cur.root);
  cur = g; turntable.add(g.root); g.root.add(flashLight);
  updateAmmo();
}
function resize() {
  const w = stage.clientWidth, h = stage.clientHeight;
  renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(stage); resize();

$('guns').innerHTML = ORDER.map((id) => `<button class="chip" data-v="${id}">${GUNS[id].chip}</button>`).join('');
$('guns').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) setGun(b.dataset.v); });
$('light').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) setLight(b.dataset.v); });
$('view').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) setView(b.dataset.v); });
$('cock').addEventListener('click', () => cock(cur));
$('fire').addEventListener('click', () => fire(cur));
$('reload').addEventListener('click', () => { if (cur && !cur.anim) { cur.cocked = false; reload(cur); snd.click(0.3, 1500); updateAmmo(); } });
$('spin').addEventListener('click', () => { spin = !spin; $('spin').classList.toggle('on', spin); idle = 99; });

setLight('studio');
const ready = setGun('colt75').then(() => Promise.all(ORDER.map(loadGun)));
let last = performance.now(), tt = 0;
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now; tt += dt; idle += dt;
  if (view.goal) {
    const k = 1 - Math.exp(-dt * 7);
    view.yaw += (view.goal.yaw - view.yaw) * k; view.pitch += (view.goal.pitch - view.pitch) * k; view.zoom += (view.goal.zoom - view.zoom) * k;
    if (Math.abs(view.goal.yaw - view.yaw) < 1e-3 && Math.abs(view.goal.pitch - view.pitch) < 1e-3) view.goal = null;
  } else if (spin && idle > 2.5) view.yaw += dt * 0.35;
  turntable.rotation.set(view.pitch, view.yaw, 0);
  const vf = THREE.MathUtils.degToRad(camera.fov), hf = 2 * Math.atan(Math.tan(vf / 2) * camera.aspect);
  camera.position.set(0, 0, (R_FIT / Math.sin(Math.min(vf, hf) / 2)) * view.zoom);
  camera.lookAt(0, 0, 0);
  lantern.intensity = 0.45 * (1 + 0.07 * Math.sin(tt * 13.0) + 0.05 * Math.sin(tt * 7.3 + 1.0) + 0.03 * Math.sin(tt * 23.0));
  if (cur) step(cur, dt);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
window.__rv = { ready, setGun, setView, setLight, cock: () => cock(cur), fire: () => fire(cur), view, setSpin: (s) => (spin = s), get cur() { return cur; } };

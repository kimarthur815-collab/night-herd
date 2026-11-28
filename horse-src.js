// The horse page (horse/): the baked horse (gen-horse.mjs) as a skinned mesh on its skeleton, to turn round and look at.
// 사용자 2026-11-28: 말 먼저 고퀄리티 3D로 — then the gallop, then the title screen (석양 속을 달리는 카우보이).
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const $ = (id) => document.getElementById(id);
const DEBUG = location.hash === '#debug';
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 200);
camera.position.set(4.6, 1.5, 0.6);
const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 1.0, 0.15); controls.enableDamping = true; controls.minDistance = 0.4; controls.maxDistance = 14;
controls.maxPolarAngle = Math.PI * 0.53;

// ---- light: the setting sun behind and to one side (the title screen), or plain and bright to see the shapes ----
const pmrem = new THREE.PMREMGenerator(renderer);
const studioEnv = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
const sun = new THREE.DirectionalLight(0xffffff, 3);
sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -2.5, right: 2.5, top: 2.5, bottom: -2.5, near: 0.5, far: 20 }); sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02;
const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
const rim = new THREE.DirectionalLight(0xffffff, 0);
scene.add(sun, sun.target, hemi, rim);
const ground = new THREE.Mesh(new THREE.CircleGeometry(30, 64), new THREE.MeshStandardMaterial({ color: 0x8a6a4a, roughness: 1 }));
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
function setLight(v) {
  if (v === 'sunset') { // 레퍼런스: 큰 해가 뒤에서 낮게, 하늘은 붉은 주황
    scene.background = new THREE.Color(0xd8642a); scene.fog = new THREE.Fog(0xd8642a, 8, 40); scene.environment = null;
    sun.color.set(0xffa35a); sun.intensity = 4.2; sun.position.set(-3, 1.6, -4.5);
    hemi.color.set(0xff8a4c); hemi.groundColor.set(0x3a1a0c); hemi.intensity = 1.1;
    rim.color.set(0xffd08a); rim.intensity = 1.2; rim.position.set(2.5, 1.0, -5);
    ground.material.color.set(0x8c5434);
  } else {
    scene.background = new THREE.Color(0x3b3a3e); scene.fog = null; scene.environment = studioEnv;
    sun.color.set(0xffffff); sun.intensity = 2.4; sun.position.set(3, 5, 3);
    hemi.color.set(0xffffff); hemi.groundColor.set(0x555555); hemi.intensity = 0.5; rim.intensity = 0;
    ground.material.color.set(0x77706a);
  }
  for (const b of document.querySelectorAll('#light button')) b.classList.toggle('on', b.dataset.v === v);
}

// ---- the coat (임시: bay — red-brown body, black points) ----
const COAT = { body: new THREE.Color('#4d1e0d'), belly: new THREE.Color('#6a3015'), points: new THREE.Color('#121010'), hoof: new THREE.Color('#2b2520'), hoofLight: new THREE.Color('#8a7a62'), muzzle: new THREE.Color('#2a1c15'), nostril: new THREE.Color('#120b0a'), white: new THREE.Color('#e8e2d8'), pink: new THREE.Color('#b8968a') };
function horseMaterial() {
  const m = new THREE.MeshPhysicalMaterial({ roughness: 0.66, metalness: 0, sheen: 0.45, sheenRoughness: 0.5, sheenColor: new THREE.Color('#a8643a'), envMapIntensity: 0.55 });
  m.onBeforeCompile = (sh) => {
    for (const [k, c] of Object.entries(COAT)) sh.uniforms[`c_${k}`] = { value: c };
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute vec4 aMat; attribute vec4 aExt; varying vec4 vMat; varying vec4 vExt; varying vec3 vRest;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvMat = aMat; vExt = aExt; vRest = position;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
varying vec4 vMat; varying vec4 vExt; varying vec3 vRest;
uniform vec3 c_body, c_belly, c_points, c_hoof, c_hoofLight, c_muzzle, c_nostril, c_white, c_pink;
float hh(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float hoofWhite(vec3 p){ return 1.0; } // (임시: all four socks, so all four hooves are pale horn)
float vn(vec3 x){ vec3 i = floor(x), f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(hh(i), hh(i+vec3(1,0,0)), f.x), mix(hh(i+vec3(0,1,0)), hh(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(hh(i+vec3(0,0,1)), hh(i+vec3(1,0,1)), f.x), mix(hh(i+vec3(0,1,1)), hh(i+vec3(1,1,1)), f.x), f.y), f.z); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
{ // the coat: a little lighter low on the barrel and flank, darker along the back; black points; hooves, muzzle, eyes
  float low = smoothstep(1.25, 0.85, vRest.y) * (1.0 - smoothstep(0.7, 0.55, vRest.y));
  // the coat: lighter low on the barrel, inside the legs and under the belly, darker along the top of the neck and back; faint dapples
  vec3 coat = mix(c_body, c_belly, low * 0.55) * (0.93 + 0.1 * vn(vRest * 9.0) + 0.04 * smoothstep(0.55, 0.75, vn(vRest * 22.0)));
  coat *= mix(1.0, 0.78, smoothstep(1.32, 1.52, vRest.y + 0.1 * smoothstep(0.4, 1.2, vRest.z)));
  // hair (mane, tail, forelock): streaks along the fall, a little lighter and redder toward the ends (sun-bleached)
  float streak = vn(vRest * vec3(160.0, 7.0, 160.0)) * 0.6 + vn(vRest * vec3(420.0, 18.0, 420.0)) * 0.4;
  vec3 pts = c_points * (0.75 + 0.55 * streak);
  pts = mix(pts, vec3(0.06, 0.035, 0.02), vExt.y * smoothstep(1.2, 0.55, vRest.y) * 0.5 * step(vRest.z, -0.6));
  vec3 col = mix(coat, mix(c_points * (0.85 + 0.3 * vn(vRest * vec3(40.0, 6.0, 40.0))), pts, vExt.y), vMat.y);
  col = mix(col, c_white * (0.94 + 0.08 * vn(vRest * 30.0)), vExt.w);
  col = mix(col, mix(c_muzzle, c_pink, vExt.w), vMat.w * (1.0 - vMat.y));
  float lightHoof = smoothstep(0.5, 0.9, vExt.w + smoothstep(0.12, 0.1, vRest.y) * 0.0);
  col = mix(col, mix(c_hoof, c_hoofLight, step(0.5, hoofWhite(vRest))) * (0.92 + 0.1 * vn(vRest * vec3(160.0, 5.0, 160.0))), vMat.z);
  col = mix(col, c_nostril, vExt.z);
  col = mix(col, vec3(0.012, 0.009, 0.008), vExt.x);
  diffuseColor.rgb = col * mix(0.35, 1.0, vMat.x);
}`)
      .replace('#include <lights_physical_fragment>', `#include <lights_physical_fragment>
material.sheenColor *= (1.0 - vExt.y) * (1.0 - vExt.w * 0.6) * (1.0 - vMat.y * 0.7); // (the coat's sheen: not on hair, white or black points)`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.6, vExt.y); roughnessFactor = mix(roughnessFactor, 0.75, vMat.z); roughnessFactor = mix(roughnessFactor, 0.06, vExt.x);`);
  };
  return m;
}

// ---- load: geometry, skeleton ----
let horse = null, skeleton = null, bones = [], rest = [];
const restPos = {};
async function load() {
  const j = await (await fetch('data/horse.json?v=0.027')).json();
  const raw = atob(j.data), u8 = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) u8[i] = raw.charCodeAt(i);
  const buf = u8.buffer, vc = j.vc, ic = j.ic; let o = 0;
  const pos16 = new Int16Array(buf, o, vc * 3); o += vc * 6;
  const nrm = new Int8Array(buf, o, vc * 3); o += vc * 3;
  const mat = new Uint8Array(buf, o, vc * 4); o += vc * 4;
  const ext = new Uint8Array(buf, o, vc * 4); o += vc * 4;
  const si = new Uint8Array(buf, o, vc * 4); o += vc * 4;
  const sw = new Uint8Array(buf, o, vc * 4); o += vc * 4;
  const idx = new Uint32Array(buf.slice(o, o + ic * 4));
  const pos = new Float32Array(vc * 3); for (let i = 0; i < vc * 3; i++) pos[i] = pos16[i] * j.ps;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(new Int8Array(nrm), 3, true));
  g.setAttribute('aMat', new THREE.BufferAttribute(new Uint8Array(mat), 4, true));
  g.setAttribute('aExt', new THREE.BufferAttribute(new Uint8Array(ext), 4, true));
  g.setAttribute('skinIndex', new THREE.BufferAttribute(new Uint16Array(si), 4));
  g.setAttribute('skinWeight', new THREE.BufferAttribute(new Uint8Array(sw), 4, true));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  // bones: each placed relative to its parent
  bones = j.bones.map((b) => { const bone = new THREE.Bone(); bone.name = b.name; return bone; });
  j.bones.forEach((b, i) => {
    const p = b.parent >= 0 ? j.bones[b.parent].pos : [0, 0, 0];
    bones[i].position.set(b.pos[0] - p[0], b.pos[1] - p[1], b.pos[2] - p[2]);
    if (b.parent >= 0) bones[b.parent].add(bones[i]);
  });
  rest = bones.map((b) => b.quaternion.clone());
  j.bones.forEach((b) => { restPos[b.name] = b.pos; });
  horse = new THREE.SkinnedMesh(g, horseMaterial());
  horse.add(bones[0]); horse.castShadow = true; horse.receiveShadow = true; horse.frustumCulled = false;
  skeleton = new THREE.Skeleton(bones);
  horse.bind(skeleton);
  scene.add(horse);
  $('loading').hidden = true;
  window.__ready = true;
}
const bone = (n) => bones.find((b) => b.name === n);

// ---- views ----
const VIEWS = { chest: [[1.7, 1.2, 1.9], [0.05, 1.08, 0.6]], rear: [[-1.9, 1.3, -2.2], [0, 1.05, -0.55]], top: [[0.01, 4.6, 0.2], [0, 1.0, 0.2]], side: [[4.6, 1.3, 0.25], [0, 1.0, 0.2]], q: [[3.0, 1.6, 3.2], [0, 1.0, 0.2]], front: [[0.4, 1.4, 4.4], [0, 1.0, 0.3]], back: [[-0.6, 1.5, -4.2], [0, 1.0, -0.2]],
  head: [[1.15, 1.75, 1.95], [0, 1.6, 1.15]], legs: [[2.2, 0.55, 0.9], [0.1, 0.45, 0.0]] };
function setView(v) {
  const [p, t] = VIEWS[v]; camera.position.set(...p); controls.target.set(...t); controls.update();
  for (const b of document.querySelectorAll('#view button')) b.classList.toggle('on', b.dataset.v === v);
}
let spin = false;
$('spin').onclick = () => { spin = !spin; controls.autoRotate = spin; controls.autoRotateSpeed = 1.2; $('spin').classList.toggle('on', spin); };
for (const b of document.querySelectorAll('#light button')) b.onclick = () => setLight(b.dataset.v);
for (const b of document.querySelectorAll('#view button')) b.onclick = () => setView(b.dataset.v);
setLight('sunset'); setView('side');

function resize() {
  const r = canvas.parentElement.getBoundingClientRect();
  renderer.setSize(r.width, r.height, false); camera.aspect = r.width / Math.max(1, r.height); camera.updateProjectionMatrix();
}
addEventListener('resize', resize); resize();
// ---- the gallop (사용자: 달리는 동작은 실제 말의 다리 순서로) ----
// A transverse gallop: left hind, right hind, left fore, right fore, then a moment with all four off the ground, gathered under
// the body (as Muybridge's photographs showed; never front legs out ahead and hind legs out behind). Each joint's angle is drawn
// over the stride: on the ground the leg sweeps back as fast as the ground goes by and the hoof stays flat; in the air the
// knee and fetlock fold, the stifle and hock bend together (the reciprocal apparatus), and the leg reaches forward again.
// 임시 values: stride, speed, how long each hoof is down, the angles.
const GAL = { T: 0.46, v: 7.4, duty: 0.27, off: { LH: 0.0, RH: 0.11, LF: 0.31, RF: 0.42 } };
const sm = (x) => { x = Math.min(1, Math.max(0, x)); return x * x * (3 - 2 * x); };
const bell = (w, a, p, b) => (w <= a || w >= b ? 0 : w < p ? Math.sin(((w - a) / (p - a)) * Math.PI / 2) ** 2 : Math.cos(((w - p) / (b - p)) * Math.PI / 2) ** 2);
// whole-leg swing at the top joint: forward (−) at touchdown, back (+) at lift-off; in the air, back to forward with a reach
function legSwing(phi, fwd, back, reach) {
  const D = GAL.duty;
  if (phi < D) return fwd + (back - fwd) * (phi / D);
  const w = (phi - D) / (1 - D);
  return w < 0.82 ? back + (reach - back) * sm(w / 0.82) : reach + (fwd - reach) * sm((w - 0.82) / 0.18);
}
let mode = 'stand', galT = 0;
const _q = new THREE.Quaternion(), _X = new THREE.Vector3(1, 0, 0), _Y = new THREE.Vector3(0, 1, 0), _hv = new THREE.Vector3(), _pv = new THREE.Vector3();
function setRot(n, x, y = 0) { const b = bone(n); if (!b) return; b.quaternion.setFromAxisAngle(_X, x); if (y) b.quaternion.multiply(_q.setFromAxisAngle(_Y, y)); }
// ---- legs in the side plane (y, z): every joint turns about x, so a leg is a chain of 2D offsets ----
const HOOF = [-0.09, 0.03]; // from the coronet bone to the bottom of the hoof (y, z)
const rot2 = (y, z, a) => [y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)];
// where the bottom of the hoof is, given the top joint's place and the parent's angle, and the angle at each joint
function legFK(chain, top, base, angs) {
  let y = top[0], z = top[1], a = base;
  for (let i = 0; i < chain.length; i++) {
    a += angs[i];
    const nx = i + 1 < chain.length ? restPos[chain[i + 1]] : null, me = restPos[chain[i]];
    const off = nx ? [nx[1] - me[1], nx[2] - me[2]] : HOOF;
    const r = rot2(off[0], off[1], a); y += r[0]; z += r[1];
  }
  return [y, z, a];
}
// the leg on the ground: how far it is swung (a) and how much it gives (k: fetlock down, and the stifle and hock with it behind),
// found so the bottom of the hoof is where it must be; the hoof itself kept flat
const LEGS = {
  F: { chain: (S) => [`scap${S}`, `arm${S}`, `fore${S}`, `fcan${S}`, `fpas${S}`, `fhoof${S}`],
    angs: (a, k) => [0.25 * a, 0.75 * a, 0, 0, -k, 0] },
  H: { chain: (S) => [`thigh${S}`, `gask${S}`, `hcan${S}`, `hpas${S}`, `hhoof${S}`],
    angs: (a, k) => [a, 0.35 * k, -0.7 * k, -0.62 * k, 0] },
};
function solveLeg(L, chain, top, base, ty, tz, guess) {
  let a = guess[0], k = guess[1];
  const f = (a, k) => { const r = legFK(chain, top, base, L.angs(a, k)); return [r[0] - ty, r[1] - tz]; };
  for (let it = 0; it < 8; it++) {
    const e = f(a, k), h = 1e-3, ea = f(a + h, k), ek = f(a, k + h);
    const J = [[(ea[0] - e[0]) / h, (ek[0] - e[0]) / h], [(ea[1] - e[1]) / h, (ek[1] - e[1]) / h]], det = J[0][0] * J[1][1] - J[0][1] * J[1][0];
    if (Math.abs(det) < 1e-9) break;
    a -= (J[1][1] * e[0] - J[0][1] * e[1]) / det; k -= (-J[1][0] * e[0] + J[0][0] * e[1]) / det;
    k = Math.min(0.9, Math.max(0, k)); // (a leg can give, not stretch)
  }
  return [a, k];
}
const GUESS = {};
function gallopPose(t) {
  const c = (t / GAL.T) % 1, D = GAL.duty, two = Math.PI * 2;
  // the body rocks: nose down while the fore legs are down, up while the hind legs push; highest in the gathered moment
  const pitch = 0.05 * Math.sin(two * (c - 0.12)), bob = 0.03 * Math.cos(two * (c - 0.82)) - 0.012;
  const pelvisA = 0.07 * Math.sin(two * (c - 0.55)), chestA = -0.03 * Math.sin(two * (c - 0.3));
  setRot('root', pitch); bones[0].position.y = restRoot.y + bob;
  setRot('pelvis', pelvisA); setRot('chest', chestA);
  const nod = Math.sin(two * (c - 0.42));
  setRot('neck0', 0.1 * nod - 0.05); setRot('neck1', 0.06 * nod); setRot('neck2', 0.03 * nod); setRot('head', -0.12 * nod + 0.18);
  setRot('tail0', 0.55 + 0.05 * Math.sin(two * c)); setRot('tail1', 0.45 + 0.12 * Math.sin(two * c - 0.8), 0.06 * Math.sin(two * c - 0.4));
  setRot('tail2', 0.25 + 0.16 * Math.sin(two * c - 1.7)); setRot('tail3', 0.15 + 0.18 * Math.sin(two * c - 2.6)); setRot('tail4', 0.1 + 0.2 * Math.sin(two * c - 3.4));
  horse.updateMatrixWorld(true);
  const sweep = GAL.v * GAL.T * D; // how far the ground goes by while a hoof is down
  for (const leg of ['LF', 'RF', 'LH', 'RH']) {
    const phi = (((c - GAL.off[leg]) % 1) + 1) % 1, S = leg[0], kind = leg[1], L = LEGS[kind === 'F' ? 'F' : 'H'], chain = L.chain(S);
    // the top joint, in the horse's frame (y, z), and the angle it hangs from
    bone(chain[0]).getWorldPosition(_pv); horse.worldToLocal(_pv);
    const top = [_pv.y, _pv.z], base = pitch + (kind === 'F' ? chestA : pelvisA);
    const mid = top[1] + (kind === 'F' ? 0.11 : 0.08); // the hoof is down from in front of the top joint to behind it
    const zDown = mid + sweep / 2, zUp = mid - sweep / 2;
    const g = (GUESS[leg] ??= [0, 0.2]);
    const TD = solveLeg(L, chain, top, base, 0, zDown, g), LO = solveLeg(L, chain, top, base, 0, zUp, g);
    let angs;
    if (phi < D) { // down: on the ground, going back with it
      const u = phi / D, sol = solveLeg(L, chain, top, base, 0, zDown + (zUp - zDown) * u, g); GUESS[leg] = sol;
      angs = L.angs(sol[0], sol[1]);
    } else { // up: fold, swing forward, reach, and come down to where it lands
      const w = (phi - D) / (1 - D), up = L.angs(LO[0], LO[1]), dn = L.angs(TD[0], TD[1]);
      const reach = (kind === 'F' ? -0.2 : -0.14) * bell(w, 0.45, 0.8, 1.0);
      const a = LO[0] + (TD[0] - LO[0]) * sm((w - 0.05) / 0.85) + reach;
      const k = LO[1] + (TD[1] - LO[1]) * w;
      angs = L.angs(a, k);
      if (kind === 'F') { // elbow forward, knee folded tight, the hoof flipped up, then all opening out again
        angs[2] += -0.95 * bell(w, 0.08, 0.6, 0.97); angs[3] += 1.75 * bell(w, 0.0, 0.33, 0.85); angs[4] += 1.05 * bell(w, 0.0, 0.28, 0.8);
      } else { // stifle and hock folding together, the fetlock with them
        angs[1] += 0.72 * bell(w, 0.0, 0.28, 0.86); angs[2] += -1.45 * bell(w, 0.0, 0.28, 0.86); angs[3] += 1.05 * bell(w, 0.0, 0.22, 0.75);
      }
      void up; void dn;
    }
    // the hoof: flat while it is down; tipped with the swing while up
    let sum = base; for (let i = 0; i < angs.length - 1; i++) sum += angs[i];
    const flat = -sum, w = phi < D ? 0 : (phi - D) / (1 - D);
    angs[angs.length - 1] = phi < D ? flat : flat * (1 - bell(w, 0.0, 0.5, 1.0)) + 0.3 * bell(w, 0.0, 0.3, 0.8);
    chain.forEach((n, i) => setRot(n, angs[i]));
  }
}
let restRoot = null, lastT = performance.now();
const groundTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d');
  g.fillStyle = '#7a6a5a'; g.fillRect(0, 0, 256, 256); g.strokeStyle = 'rgba(30,20,10,0.35)'; g.lineWidth = 3;
  for (let i = 0; i <= 256; i += 64) { g.beginPath(); g.moveTo(0, i); g.lineTo(256, i); g.stroke(); g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 256); g.stroke(); }
  for (let i = 0; i < 400; i++) { g.fillStyle = `rgba(${40 + Math.random() * 60},${30 + Math.random() * 40},20,0.25)`; g.fillRect(Math.random() * 256, Math.random() * 256, 2, 2); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(30, 30); t.colorSpace = THREE.SRGBColorSpace; return t; })();
ground.material.map = groundTex; ground.material.needsUpdate = true;
function setMode(m) {
  mode = m; for (const b of document.querySelectorAll('#move button')) b.classList.toggle('on', b.dataset.v === m);
  if (m === 'stand' && horse) { bones.forEach((b, i) => b.quaternion.copy(rest[i])); bones[0].position.copy(restRoot); rootFix = 0; }
}
for (const b of document.querySelectorAll('#move button')) b.onclick = () => setMode(b.dataset.v);
renderer.setAnimationLoop((now) => {
  const dt = Math.min(0.05, (now - lastT) / 1000) * (window.__slow ?? 1); lastT = now;
  if (horse && !restRoot) restRoot = bones[0].position.clone();
  if (horse && mode === 'gallop') {
    galT += dt; gallopPose(galT);
    groundTex.offset.y -= (GAL.v * dt) / 2; // the ground goes by under it (a 2 m tile)
  }
  controls.update(); renderer.render(scene, camera);
});
load().catch((e) => { console.error(e); $('loading').textContent = '불러오지 못했어요'; });

// debug: views, light, a bone turned, skin weights of one bone shown
window.__horse = {
  view: (p, t) => { camera.position.set(...p); controls.target.set(...t); controls.update(); },
  setView, setLight,
  turn: (n, x, y, z) => { const b = bone(n); const i = bones.indexOf(b); b.quaternion.copy(rest[i]).multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(x, y, z))); },
  reset: () => bones.forEach((b, i) => b.quaternion.copy(rest[i])),
  hooves: () => { horse.updateMatrixWorld(true); return Object.fromEntries(['fhoofL', 'fhoofR', 'hhoofL', 'hhoofR'].map((n) => { const v = new THREE.Vector3(0, -0.09, 0.03); bone(n).localToWorld(v); return [n, [+v.y.toFixed(3), +v.z.toFixed(3)]]; })); },
  setMode, at: (t) => { galT = t; mode = 'gallop'; for (let i = 0; i < 3; i++) gallopPose(t); mode = 'frozen'; },
  bones: () => bones.map((b) => b.name),
  shadows: (on) => { sun.castShadow = on; horse.castShadow = on; horse.receiveShadow = on; horse.material.needsUpdate = true; },
  normals: (on) => { horse.material = on ? new THREE.MeshNormalMaterial() : horseMaterial(); },
  flat: (on) => { horse.material = on ? new THREE.MeshStandardMaterial({ color: 0x999999, roughness: 0.8 }) : horseMaterial(); },
};

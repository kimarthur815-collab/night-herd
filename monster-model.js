// Night Herd — the monsters in the game: loading a baked monster, its material and rig, and the jumpscare for a monster you
// walked past (② 멀리서 순식간에: no wind-up, it crosses the distance in an instant, thrashes its head wide, snaps its jaws
// shut and everything goes black, the roar still at full; back after a moment).
// The material, rig and timing are copied from the monster candidates page (monsters-src.js), which stays as it is.
import * as THREE from 'three';

// which monster each form is (괴물 후보 페이지와 같은 값)
export const MONSTERS = {
  m3: { roar: 'machine', skin: [0.3, 0.26, 0.22], wr: [0, 1, 0.3], anim: { breath: 1.0, breathHz: 1.5, jaw: 0.7, twitch: 1.2, neck: [0, 0], sway: 1 } },
  m4: { roar: 'crack', skin: [0.3, 0.27, 0.24], wr: [0.2, 1, 0.6], anim: { breath: 0.6, jaw: 0.45, twitch: 0.9, neck: [0, 0], sway: 0 } },
  m5: { roar: 'gargle', skin: [0.02, 0.02, 0.022], wr: [0, 1, 0], smoke: 1, eyeSelf: 2.2, eyeShine: 0.35, anim: { breath: 0.4, jaw: 0.4, twitch: 0.6, neck: [0, 0], sway: 1 } },
};

const NOISE = `
float hash13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vnoise3(vec3 p) { vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(hash13(i), hash13(i+vec3(1,0,0)), f.x), mix(hash13(i+vec3(0,1,0)), hash13(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(hash13(i+vec3(0,0,1)), hash13(i+vec3(1,0,1)), f.x), mix(hash13(i+vec3(0,1,1)), hash13(i+vec3(1,1,1)), f.x), f.y), f.z) * 2.0 - 1.0; }
float fbm3(vec3 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * vnoise3(p); p *= 2.03; a *= 0.5; } return s; }
vec3 bumpN(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection) {
  vec3 vSigmaX = dFdx(surf_pos.xyz), vSigmaY = dFdy(surf_pos.xyz), vN = surf_norm;
  vec3 R1 = cross(vSigmaY, vN), R2 = cross(vN, vSigmaX);
  float fDet = dot(vSigmaX, R1) * faceDirection;
  vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
  return normalize(abs(fDet) * surf_norm - vGrad);
}`;
const RIG_DECL = `
attribute vec2 aAtt; attribute vec4 aMat; attribute vec4 aExt; attribute vec4 aRig; attribute vec4 aLeg;
uniform float uTime;
uniform vec3 uHeadP, uHeadX, uHeadY, uHeadZ, uJawH, uHeadRot, uNeckP;
uniform float uJaw, uSplit, uBreath, uSway, uStride, uStrideAmt; uniform vec2 uNeck; uniform vec3 uLimbHip[4], uLimbKnee[4]; uniform float uLimbPh[4];
mat3 rx(float a) { float c = cos(a), s = sin(a); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }
mat3 aa(vec3 k, float t) { float c = cos(t), s = sin(t), C = 1.0 - c;
  return mat3(c + k.x*k.x*C, k.y*k.x*C + k.z*s, k.z*k.x*C - k.y*s,  k.x*k.y*C - k.z*s, c + k.y*k.y*C, k.z*k.y*C + k.x*s,  k.x*k.z*C + k.y*s, k.y*k.z*C - k.x*s, c + k.z*k.z*C); }`;
const RIG_MATS = `
  float side = sign(dot(position - uHeadP, uHeadX) + 1e-5);
  mat3 rJ = uSplit > 0.5 ? aa(uHeadY, uJaw * aRig.x * side) : aa(uHeadX, uJaw * aRig.x);
  mat3 rH = aa(uHeadY, uHeadRot.x * aRig.y) * aa(uHeadX, uHeadRot.y * aRig.y) * aa(uHeadZ, uHeadRot.z * aRig.y);
  mat3 rN = aa(vec3(1.0, 0.0, 0.0), uNeck.x * aRig.z) * aa(vec3(0.0, 0.0, 1.0), uNeck.y * aRig.z);`;
const RIG_POS = `
  transformed = uJawH + rJ * (transformed - uJawH);
  transformed = uHeadP + rH * (transformed - uHeadP);
  transformed = uNeckP + rN * (transformed - uNeckP);
  { float ph = position.x * 5.0 + position.z * 4.0;
    transformed += vec3(sin(uTime * 1.3 + position.y * 3.0 + ph), 0.0, cos(uTime * 1.07 + position.y * 2.5 + ph * 0.7)) * 0.035 * aRig.w * aRig.w * uSway; }
  transformed += normal * aExt.y * uBreath;`;

// walking: each leg (the shadow's arms) swings on its hip and folds at the knee, baked into the monster (aLeg: limb number,
// hip weight, knee weight); the diagonal pairs move together (left front with right hind)
const STRIDE = `
  if (uStrideAmt > 0.0 && aLeg.x > 0.01) {
    int li = int(floor(aLeg.x * 8.0 + 0.5)) - 1;
    float ph = uStride + uLimbPh[li];
    float swing = sin(ph) * uStrideAmt, lift = max(0.0, cos(ph)) * uStrideAmt * 1.4;
    vec3 hp = uLimbHip[li], kn = uLimbKnee[li];
    transformed = kn + rx(lift * aLeg.z) * (transformed - kn);
    transformed = hp + rx(-swing * aLeg.y) * (transformed - hp);
  }`;
function monsterMaterial(info, uTime) {
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, metalness: 0 });
  const own = {
    uTime, uIR: { value: 0 },
    uHeadP: { value: new THREE.Vector3() }, uHeadX: { value: new THREE.Vector3(1, 0, 0) }, uHeadY: { value: new THREE.Vector3(0, 1, 0) }, uHeadZ: { value: new THREE.Vector3(0, 0, 1) },
    uJawH: { value: new THREE.Vector3() }, uHeadRot: { value: new THREE.Vector3() }, uNeckP: { value: new THREE.Vector3() }, uNeck: { value: new THREE.Vector2() },
    uJaw: { value: 0 }, uSplit: { value: 0 }, uBreath: { value: 0 }, uSway: { value: 1 },
    uSkin: { value: new THREE.Color(...info.skin) }, uWr: { value: new THREE.Vector3(...info.wr).normalize() }, uSmoke: { value: info.smoke ?? 0 },
    uEyeGain: { value: 14 }, uEyeSelf: { value: info.eyeSelf ?? 0 }, uEyeShine: { value: info.eyeShine ?? 1 }, uLightP: { value: new THREE.Vector3() }, uAppear: { value: 1 },
    uStride: { value: 0 }, uStrideAmt: { value: 0 }, uLimbHip: { value: [0, 1, 2, 3].map(() => new THREE.Vector3()) }, uLimbKnee: { value: [0, 1, 2, 3].map(() => new THREE.Vector3()) }, uLimbPh: { value: [0, 0, 0, 0] },
  };
  m.userData.own = own;
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, own);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>\n${RIG_DECL}\nvarying vec3 vObj; varying vec4 vMat; varying vec4 vExt; varying vec2 vAtt; varying vec3 vWP;`)
      .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>\n${RIG_MATS}\nobjectNormal = rN * (rH * (rJ * objectNormal));`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>\nvObj = position; vMat = aMat; vExt = aExt; vAtt = aAtt;\n${RIG_POS}\n${STRIDE}`)
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uTime, uIR, uSmoke, uEyeGain, uEyeSelf, uEyeShine, uAppear; uniform vec3 uSkin, uWr, uLightP;
        varying vec3 vObj; varying vec4 vMat; varying vec4 vExt; varying vec2 vAtt; varying vec3 vWP;
        ${NOISE}`)
      .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
        if (uAppear < 1.0 && vnoise3(vObj * 7.0) * 0.5 + 0.5 + 0.25 * vnoise3(vObj * 23.0) > uAppear * 1.3) discard; // coming through, piece by piece
        if (uSmoke > 0.0) {
          float fc = abs(dot(normalize(vNormal), normalize(vViewPosition)));
          float n = fbm3(vObj * 7.0 + vec3(0.0, -uTime * 0.35, 0.0)) * 0.5 + 0.5;
          float edge = pow(1.0 - fc, 1.6) * (1.0 - vMat.w) * (1.0 - vExt.x);
          if (n < edge * 1.15 - 0.12) discard; }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        { vec3 p = vObj; float teeth = vMat.x, mouth = vMat.y, flesh = vMat.z, bone = vMat.w, eye = vExt.x, fur = vExt.z;
          float pat = fbm3(p * 3.1) * 0.5 + 0.5, mange = smoothstep(0.42, 0.62, fbm3(p * 5.3 + 7.0) * 0.5 + 0.5);
          float streak = vnoise3(p * vec3(90.0, 14.0, 90.0)) * 0.5 + 0.5;
          float blot = smoothstep(0.35, 0.75, fbm3(p * 1.7 + 3.0) * 0.5 + 0.5);
          vec3 skin = uSkin * (0.4 + 0.95 * pat) * (1.0 - 0.45 * blot);
          skin = mix(skin, skin * (0.55 + 0.6 * streak), fur);
          skin = mix(skin, vec3(0.42, 0.33, 0.3) * (0.7 + 0.5 * pat), mange * fur * 0.6 * step(0.05, uSkin.r));
          float fib = vnoise3(p * 140.0 + fbm3(p * 6.0) * 3.0) * 0.5 + 0.5;
          vec3 fl = mix(vec3(0.28, 0.045, 0.04), vec3(0.48, 0.16, 0.12), smoothstep(0.25, 0.85, fib));
          fl *= 0.6 + 0.5 * (fbm3(p * 11.0) * 0.5 + 0.5);
          vec3 th = vec3(0.72, 0.66, 0.5) * (0.65 + 0.35 * vAtt.x);
          vec3 bn = vec3(0.66, 0.62, 0.54) * (0.75 + 0.35 * pat) * (1.0 - 0.6 * smoothstep(0.6, 0.85, vnoise3(p * vec3(40.0, 6.0, 40.0)) * 0.5 + 0.5));
          vec3 c = skin;
          c = mix(c, fl, flesh); c = mix(c, bn, bone); c = mix(c, th, teeth);
          c = mix(c, vec3(0.06, 0.012, 0.012), mouth);
          c = mix(c, vec3(0.005), eye);
          c *= mix(1.0, smoothstep(0.0, 1.0, vAtt.x), 0.85);
          c *= 1.0 - 0.7 * smoothstep(0.52, 0.66, vAtt.y) * (1.0 - eye);
          c *= 1.0 - 0.45 * vExt.w * smoothstep(0.55, 0.95, abs(sin(dot(p, uWr) * 85.0 + fbm3(p * 5.0) * 5.0))) * (1.0 - flesh - bone - teeth);
          diffuseColor.rgb = c; }`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = mix(0.78, 0.38, vMat.z); roughnessFactor = mix(roughnessFactor, 0.3, vMat.y); roughnessFactor = mix(roughnessFactor, 0.45, vMat.x);
        roughnessFactor = mix(roughnessFactor, 0.7, vMat.w); roughnessFactor = mix(roughnessFactor, 0.12, vExt.x);`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        { vec3 p = vObj; float h = 0.0;
          float wr = abs(sin(dot(p, uWr) * 85.0 + fbm3(p * 5.0) * 5.0)); h += vExt.w * (1.0 - wr) * 1.4 * (1.0 - vMat.x - vMat.w);
          h += vExt.z * (vnoise3(p * vec3(150.0, 22.0, 150.0)) * 0.8 + vnoise3(p * 60.0) * 0.3);
          h += vMat.z * ((vnoise3(p * 140.0 + fbm3(p * 6.0) * 3.0) * 0.5 + 0.5) * 0.7 + vnoise3(p * 80.0) * 0.4);
          h += vMat.w * vnoise3(p * 45.0) * 0.6 + vnoise3(p * 95.0) * 0.25;
          normal = bumpN(-vViewPosition, normal, vec2(dFdx(h), dFdy(h)) * 0.0032, faceDirection); }`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        { float fc = clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
          float dl = length(vWP - uLightP);
          float shine = min(5.0, uEyeGain * pow(fc, 4.0) / pow(max(dl, 1.3), 1.5)) * uEyeShine;
          totalEmissiveRadiance += vExt.x * vec3(0.96, 1.0, 0.9) * (shine + uEyeSelf * (0.4 + 0.6 * fc)); }`);
  };
  m.customProgramCacheKey = () => 'game-monster-v4';
  return { mat: m, own };
}
function parse(j) {
  const raw = atob(j.data), u8 = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) u8[i] = raw.charCodeAt(i);
  const buf = u8.buffer, vc = j.vc, ic = j.ic; let o = 0, idx;
  if (j.i32) { idx = new Uint32Array(buf, o, ic); o += ic * 4; }
  const p16 = new Int16Array(buf, o, vc * 3); o += vc * 6;
  if (!j.i32) { idx = new Uint16Array(buf, o, ic); o += ic * 2; }
  const nrm = new Int8Array(buf, o, vc * 3); o += vc * 3;
  const att = new Uint8Array(buf, o, vc * 2); o += vc * 2;
  const mat = new Uint8Array(buf, o, vc * 4); o += vc * 4;
  const ext = new Uint8Array(buf, o, vc * 4); o += vc * 4;
  const rig = new Uint8Array(buf, o, vc * 4); o += vc * 4;
  const leg = j.leg ? new Uint8Array(buf, o, vc * 4) : new Uint8Array(vc * 4); // baked limbs (older bakes have none)
  const pos = new Float32Array(vc * 3); for (let i = 0; i < vc * 3; i++) pos[i] = p16[i] * j.ps;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(new Int8Array(nrm), 3, true));
  g.setAttribute('aAtt', new THREE.BufferAttribute(new Uint8Array(att), 2, true));
  g.setAttribute('aMat', new THREE.BufferAttribute(new Uint8Array(mat), 4, true));
  g.setAttribute('aExt', new THREE.BufferAttribute(new Uint8Array(ext), 4, true));
  g.setAttribute('aRig', new THREE.BufferAttribute(new Uint8Array(rig), 4, true));
  g.setAttribute('aLeg', new THREE.BufferAttribute(new Uint8Array(leg), 4, true));
  g.setIndex(new THREE.BufferAttribute(j.i32 ? new Uint32Array(idx) : new Uint16Array(idx), 1));
  g.computeBoundingSphere(); g.boundingSphere.radius += 0.6;
  return g;
}
// a monster, ready to put in the scene (hidden until it is needed)
export async function loadMonster(url, id, uTime) {
  const j = await (await fetch(url)).json(), meta = j.meta, info = MONSTERS[id];
  const { mat, own } = monsterMaterial(info, uTime);
  const mesh = new THREE.Mesh(parse(j), mat); mesh.frustumCulled = false;
  own.uHeadP.value.fromArray(meta.headPivot); own.uHeadX.value.fromArray(meta.headX); own.uHeadY.value.fromArray(meta.headY); own.uHeadZ.value.fromArray(meta.headZ);
  if (meta.split) { own.uSplit.value = 1; own.uJawH.value.fromArray(meta.headPivot).addScaledVector(own.uHeadZ.value, meta.split.hinge[2]); }
  else own.uJawH.value.fromArray(meta.jawHinge);
  own.uNeckP.value.fromArray(meta.neck ? meta.neck.base : [0, 1.5, -0.05]);
  (meta.limbs || []).slice(0, 4).forEach((L, i) => { own.uLimbHip.value[i].fromArray(L.hip); own.uLimbKnee.value[i].fromArray(L.knee); own.uLimbPh.value[i] = L.arm ? (L.side > 0 ? Math.PI : 0) : (L.side * L.fore > 0 ? Math.PI : 0); });
  const root = new THREE.Group(); root.add(mesh); root.visible = false;
  return { id, meta, info, mesh, root, own };
}

// ---------------- the jumpscare (괴물 후보 페이지의 ② 멀리서 순식간에와 같은 시간) ----------------
const ease = (u) => { u = Math.min(1, Math.max(0, u)); return u * u * (3 - 2 * u); };
const easeIn = (u) => { u = Math.min(1, Math.max(0, u)); return u * u * u; };
const easeOut = (u) => { u = Math.min(1, Math.max(0, u)); return 1 - Math.pow(1 - u, 3); };
const FAST = { travel: 0.11, d: 0.68 };
// 임시 (사용자: 점프스퀘어에서 입을 안 다묾): the jaws take this long to slam shut (s), stay shut this long before the black (s),
// and the head draws back this far while they shut, so the whole bite is in view (m)
const SNAP = { close: 0.13, hold: 0.06, pull: 0.12 };
const _fwd = new THREE.Vector3(), _tgt = new THREE.Vector3(), _fz = new THREE.Vector3(), _hy = new THREE.Vector3(), _to = new THREE.Vector3(), _qt = new THREE.Quaternion(),
  _p = new THREE.Vector3(), _q = new THREE.Vector3(), _h0 = new THREE.Vector3();
function faceTarget(M, camera, d, max) {
  const split = !!M.meta.split;
  camera.getWorldDirection(_fwd);
  _tgt.copy(camera.position).addScaledVector(_fwd, d + 0.75 * M.meta.headL - 0.28).addScaledVector(_cu.set(0, 1, 0).applyQuaternion(camera.quaternion), -0.1); // eyes a little above the middle of the screen
  const half = split ? 0 : 0.5 * (M.meta.jawOpen + max) - 0.1;
  // the mouth's middle looks straight at you and the head stands upright on the screen (no roll): the head's own frame
  // (mouth direction, its up, its right) is turned onto the camera's (toward you, the screen's up, the screen's right)
  _fz.fromArray(M.meta.headZ).multiplyScalar(Math.cos(half)).addScaledVector(_hy.fromArray(M.meta.headY), -Math.sin(half)).normalize();
  _fy.fromArray(M.meta.headY).multiplyScalar(Math.cos(half)).addScaledVector(_fx.fromArray(M.meta.headZ), Math.sin(half)); _fy.addScaledVector(_fz, -_fy.dot(_fz)).normalize();
  _fx.crossVectors(_fy, _fz);
  _qm.setFromRotationMatrix(_mb.makeBasis(_fx, _fy, _fz));
  _to.copy(camera.position).sub(_tgt).normalize(); _cu.set(0, 1, 0).applyQuaternion(camera.quaternion); _cu.addScaledVector(_to, -_cu.dot(_to)).normalize();
  _cr.crossVectors(_cu, _to);
  _qt.setFromRotationMatrix(_mb.makeBasis(_cr, _cu, _to)).multiply(_qm.invert());
}
const _fy = new THREE.Vector3(), _fx = new THREE.Vector3(), _cu = new THREE.Vector3(), _cr = new THREE.Vector3(), _qm = new THREE.Quaternion(), _mb = new THREE.Matrix4();
// start it from where the thing stood (base: ground point; qs: turned to face you)
export function startScare(M, base, qs, opts = {}) {
  M.sc = { t: 0, fired: {}, base: base.clone(), qs: qs.clone(), d: opts.d ?? FAST.d, leap: opts.leap ?? null, travel: opts.leap ? opts.leap.travel : FAST.travel, thr: { t: 0, goal: new THREE.Vector3(), cur: new THREE.Vector3(), pg: new THREE.Vector2(), pc: new THREE.Vector2() } };
  M.root.visible = true;
}
// one step; events: roar (it comes), cut (the jaws shut: black), back (light returns), done. Returns { fade, shake } or null when over
export function scareStep(M, camera, dt, on) {
  const s = M.sc; if (!s) return null;
  const o = M.own, split = !!M.meta.split;
  s.t += dt;
  const E = s.t, hit = s.travel, shutT = hit + 0.72, snapT = shutT + SNAP.close, cutT = snapT + SNAP.hold, back0 = cutT + 0.75, back1 = back0 + 0.8;
  const once = (k, f) => { if (!s.fired[k]) { s.fired[k] = 1; f(); } };
  once('roar', () => on.roar());
  if (E >= cutT) once('cut', () => { on.cut(); M.root.visible = false; });
  if (E >= back0) once('back', () => on.back());
  if (E >= back1) { M.sc = null; M.root.visible = false; on.done(); return null; }
  if (E >= cutT) return { fade: E < back0 ? 1 : 1 - ease((E - back0) / (back1 - back0)), shake: 0 };
  const H0 = _h0.fromArray(M.meta.headPivot), max = split ? 0.6 : 0.95;
  faceTarget(M, camera, s.d, max);
  const u = easeOut(E / s.travel), v = Math.min(1, E / s.travel);
  const start = _q.copy(H0).applyQuaternion(s.qs).add(s.base);
  const P = _p.copy(start).lerp(_tgt, u);
  M.root.quaternion.copy(s.qs).slerp(_qt, u);
  if (s.leap && v < 1) leapArc(M, P, v, s.leap);
  // thrashing: the head swings wide (the roll widest), a little slower than a shudder
  const T = s.thr, sh = 0.55, shutK = E >= shutT ? Math.min(1, ((E - shutT) / SNAP.close) ** 2) : 0;
  if (u >= 1) {
    T.t -= dt;
    if (T.t <= 0) { T.t = 0.045 + Math.random() * 0.03; T.goal.set((Math.random() - 0.5) * 0.6 * sh, (Math.random() - 0.5) * 0.6 * sh, (Math.random() - 0.5) * 1.6 * sh); T.pg.set((Math.random() - 0.5) * 0.12 * sh, (Math.random() - 0.5) * 0.1 * sh); }
    const kk = Math.min(1, dt * 32); T.cur.lerp(T.goal, kk); T.pc.lerp(T.pg, kk);
    if (shutK > 0) { T.cur.multiplyScalar(1 - shutK); T.pc.multiplyScalar(1 - shutK); T.goal.set(0, 0, 0); T.pg.set(0, 0); } // square on for the bite
    P.addScaledVector(_hy.set(1, 0, 0).applyQuaternion(camera.quaternion), T.pc.x).addScaledVector(camera.up, T.pc.y);
  }
  M.root.position.copy(P).sub(_q.copy(H0).applyQuaternion(M.root.quaternion));
  o.uHeadRot.value.copy(T.cur);
  let jaw = max * (u >= 1 ? 0.85 + 0.15 * Math.sin(E * 33) : u);
  if (E >= shutT) { const k = Math.min(1, ((E - shutT) / SNAP.close) ** 2); o.uHeadRot.value.multiplyScalar(1 - k); jaw = max - (max + M.meta.jawOpen * (split ? 0.95 : 0.9)) * k; M.root.position.addScaledVector(_fwd, SNAP.pull * k); } // shut where you can see it
  o.uJaw.value = jaw;
  // close up, the eyes must not wash out the face
  const dHead = camera.position.distanceTo(_p.copy(H0).applyQuaternion(M.root.quaternion).add(M.root.position)), dim = 0.12 + 0.88 * ease((dHead - 0.9) / 1.5);
  o.uEyeShine.value = (M.info.eyeShine ?? 1) * (0.012 + 0.988 * dim); o.uEyeSelf.value = (M.info.eyeSelf ?? 0) * (0.03 + 0.97 * dim);
  return { fade: 0, shake: u >= 1 ? 1.4 * sh + 0.3 : 0.6 };
}

// ---------------- alive in front of you (the gunfight): breathing, a working jaw, sudden jerks of the head ----------------
const rr = (a, b) => a + Math.random() * (b - a);
export function idleStep(M, dt, t) {
  const A = M.info.anim, o = M.own, s = (M.idle ??= { gapeT: 2, gape: 0, gapeV: 0, jerkT: 1, head: new THREE.Vector3(), goal: new THREE.Vector3() });
  const hz = A.breathHz ?? 0.32;
  o.uBreath.value = A.breath * 0.012 * Math.sin(t * Math.PI * 2 * hz);
  s.gapeT -= dt; if (s.gapeT < 0) { s.gape = 1; s.gapeT = rr(2, 4); s.hold = rr(0.6, 1.2); }
  if (s.gape > 0) { s.hold -= dt; if (s.hold < 0) s.gape = Math.max(0, s.gape - dt * 1.4); }
  s.gapeV += ((s.gape > 0 && s.hold > 0 ? 1 : s.gape) - s.gapeV) * Math.min(1, dt * 5);
  o.uJaw.value = (M.meta.split ? -0.1 : -0.12) + 0.08 * Math.sin(t * 0.9) + 0.012 * Math.sin(t * 37) + s.gapeV * A.jaw;
  s.jerkT -= dt; if (s.jerkT < 0) { s.jerkT = rr(0.8, 2.4) / A.twitch; s.goal.set(rr(-0.3, 0.3), rr(-0.18, 0.18), rr(-0.4, 0.4)).multiplyScalar(Math.min(1, A.twitch)); }
  s.head.lerp(s.goal, Math.min(1, dt * 22));
  const tr = 0.012 * A.twitch;
  o.uHeadRot.value.set(s.head.x + tr * Math.sin(t * 41), s.head.y + tr * Math.sin(t * 33 + 1), s.head.z + tr * Math.sin(t * 29 + 2));
  o.uNeck.value.set(0, 0); o.uSway.value = A.sway;
  o.uEyeShine.value = M.info.eyeShine ?? 1; o.uEyeSelf.value = M.info.eyeSelf ?? 0;
}
// ---------------- it reached you: you are eaten (괴물 후보 페이지의 잡아먹히는 장면과 같은 시간) ----------------
// still and quiet → it snaps round with the roar and lunges → the open mouth quivers right at your face → the real jaws slam
// shut and in that instant everything is black. Events: freeze, roar, black. Returns { fade, shake } (fade 1 = black)
const EAT = { snap: 0.45, lunge: 0.72, shut: 1.02, black: 1.11 };
// 사용자: 멈추지 않고 달려와 그대로 뛰어 덮침 — a beat to gather (s), in the air until (s), at your face until (s), black at (s) (임시)
const RUN = { snap: 0.1, lunge: 0.46, shut: 0.6, black: 0.69 };
export function startEat(M, opts = {}) { M.eat = { t: 0, fired: {}, p0: M.root.position.clone(), q0: M.root.quaternion.clone(), leap: opts.leap ?? null, T: opts.run ? RUN : EAT, run: !!opts.run, d: opts.d ?? 0.62 }; }
// a leap: up in an arc on the way (highest halfway), the head thrown up as it rises and brought down onto you
const _la = new THREE.Vector3(), _lq = new THREE.Quaternion(), _lu = new THREE.Vector3(0, 1, 0);
function leapArc(M, P, v, L) {
  P.y += L.h * 4 * v * (1 - v);
  _la.crossVectors(_to, _lu); if (_la.lengthSq() > 1e-6) M.root.quaternion.premultiply(_lq.setFromAxisAngle(_la.normalize(), L.tilt * Math.sin(Math.PI * v) * (1 - v)));
}
export function eatStep(M, camera, dt, on) {
  const s = M.eat; if (!s) return null;
  const o = M.own, split = !!M.meta.split, max = split ? 0.6 : 0.95;
  s.t += dt; const E = s.t;
  const once = (k, f) => { if (!s.fired[k]) { s.fired[k] = 1; f(); } };
  const T = s.T;
  if (!s.run) once('freeze', on.freeze); // (running at you, there is no still moment)
  if (E >= T.snap) once('roar', on.roar);
  if (E >= T.black) { once('black', on.black); return { fade: 1, shake: 0 }; }
  const H0 = _h0.fromArray(M.meta.headPivot);
  faceTarget(M, camera, s.d, max);
  let u = 0, turn = 0, push = 0, jaw = o.uJaw.value, shake = 0;
  let crouch = 0, leapV = -1;
  if (E < T.snap) { const k = ease(E / T.snap); jaw = jaw * (1 - k) + (split ? -0.18 : -0.2) * k; o.uHeadRot.value.multiplyScalar(1 - k); if (s.leap) crouch = s.leap.crouch * k; } // it gathers itself, low
  else if (E < T.lunge) { const k = (E - T.snap) / (T.lunge - T.snap); u = easeOut(k); turn = easeOut(Math.min(1, k * 1.6)); if (s.leap) { crouch = s.leap.crouch * (1 - Math.min(1, k * 4)); leapV = k; } jaw = -0.2 + (max + 0.2) * easeOut(k * 1.3); o.uHeadRot.value.set(0, 0.08 * Math.sin(E * 60) * (1 - k), 0.06 * Math.sin(E * 47)); shake = 0.5; }
  else if (E < T.shut) { u = 1; turn = 1; jaw = max + 0.04 * Math.sin(E * 50); o.uHeadRot.value.set(0.03 * Math.sin(E * 41), 0.03 * Math.sin(E * 37), 0.05 * Math.sin(E * 33)); shake = 0.5; }
  else { const k = easeIn((E - T.shut) / (T.black - T.shut)); u = 1; turn = 1; push = 0.04 * k; jaw = max - (max + M.meta.jawOpen * (split ? 0.95 : 0.9)) * k; o.uHeadRot.value.set(0, 0, 0); shake = 0.5; }
  const start = _q.copy(H0).applyQuaternion(s.q0).add(s.p0);
  camera.getWorldDirection(_fwd);
  const P = _p.copy(start).lerp(_tgt, u).addScaledVector(_fwd, -push); P.y -= crouch;
  M.root.quaternion.copy(s.q0).slerp(_qt, turn);
  if (leapV >= 0) leapArc(M, P, leapV, s.leap);
  M.root.position.copy(P).sub(_q.copy(H0).applyQuaternion(M.root.quaternion));
  o.uJaw.value = jaw;
  const dHead = camera.position.distanceTo(_p.copy(H0).applyQuaternion(M.root.quaternion).add(M.root.position)), dim = 0.12 + 0.88 * ease((dHead - 0.9) / 1.5);
  o.uEyeShine.value = (M.info.eyeShine ?? 1) * (0.012 + 0.988 * dim); o.uEyeSelf.value = (M.info.eyeSelf ?? 0) * (0.03 + 0.97 * dim);
  return { fade: 0, shake };
}

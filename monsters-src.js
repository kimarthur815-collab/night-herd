// Night Herd: the monster candidates. One baked mesh per monster, animated on the GPU
// (breathing, a jaw that gapes, a head that twitches, a neck that bends, hanging hide that sways),
// lit like the reference photos (an infrared trail camera) or like the game (the lantern).
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { makeMonsterSound, POUNCE_KINDS, BITE_KINDS } from './monster-sound.js';

const INFO = {
  m3: {
    chip: '③ 가죽이 흘러내린 것', title: '③ 가죽이 흘러내린 것', tag: '단서: 눈만 있고 몸이 안 보이는 것 · 첫날 밤부터 · 셋 중 가장 덜 무서움',
    pts: ['가죽을 벗어 등 뒤로 흘려 내린 몸이 낮게 엎드려 있어요. 빠르게 기어 와요.', '긴 주둥이가 아주 크게 벌어져요 (참고 사진 1).', '헐떡이듯 숨을 빠르게 쉬어요.'],
    skin: [0.3, 0.26, 0.22], wr: [0, 1, 0.3], anim: { breath: 1.0, breathHz: 1.5, jaw: 0.7, twitch: 1.2, neck: [0, 0], sway: 1 },
  },
  m4: {
    chip: '④ 머리가 갈라진 것', title: '④ 머리가 갈라진 것', tag: '단서: 눈이 셋인 소 · 첫날 밤부터',
    pts: ['얼굴이 가운데로 책처럼 갈라져요. 양쪽 안쪽에 이빨이 줄지어 서서 세로로 긴 입이 돼요.', '목구멍 안에서 세 번째 눈이 봐요.', '뿔과 깊게 주름진 가죽 (참고 사진 3).'],
    skin: [0.3, 0.27, 0.24], wr: [0.2, 1, 0.6], anim: { breath: 0.6, jaw: 0.45, twitch: 0.9, neck: [0, 0], sway: 0 },
  },
  m5: {
    chip: '⑤ 그림자', title: '⑤ 그림자', tag: '단서: 랜턴을 꺼도 빛나는 눈 · 후반 · 셋 중 가장 무서움',
    pts: ['3 m가 넘는 검은 형체가 땅에서 일어나요. 머리는 소 해골이고 눈구멍 깊은 곳에 작은 빛이 있어요.', '긴 팔 끝의 뼈 손가락으로 다가와요. 가장자리는 연기처럼 흩어져요.', '현상수배 괴물보다는 한 단계 아래로 두었어요.'],
    skin: [0.02, 0.02, 0.022], wr: [0, 1, 0], smoke: 1, eyeSelf: 2.2, eyeShine: 0.35, anim: { breath: 0.4, jaw: 0.4, twitch: 0.6, neck: [0, 0], sway: 1 },
  },
};
const ORDER = ['m3', 'm4', 'm5'];
const $ = (id) => document.getElementById(id);

// ---------------- renderer, scene ----------------
const stage = $('stage'), canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
const DPR = Math.min(window.devicePixelRatio || 1, 1.75);
renderer.setPixelRatio(DPR);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x030303);
scene.fog = new THREE.FogExp2(0x030303, 0.06);
const camera = new THREE.PerspectiveCamera(50, 1, 0.05, 80);

// lights: an infrared flash on the camera, or the lantern in the left hand; a little moon either way
const flash = new THREE.SpotLight(0xffffff, 60, 0, 0.75, 0.75, 2);
const lantern = new THREE.SpotLight(0xffa452, 22, 0, 1.15, 0.9, 2);
for (const l of [flash, lantern]) { l.castShadow = true; l.shadow.mapSize.set(1024, 1024); l.shadow.camera.near = 0.2; l.shadow.camera.far = 30; l.shadow.bias = -0.0004; l.shadow.normalBias = 0.02; scene.add(l, l.target); }
const moon = new THREE.HemisphereLight(0x8c9cc8, 0x0d0b09, 0.06);
scene.add(moon);

// ground: dry packed dirt with pebbles
const groundMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95 });
groundMat.onBeforeCompile = (sh) => {
  sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vGW;').replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvGW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
  sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>\nvarying vec3 vGW;\n${NOISE}`)
    .replace('#include <color_fragment>', `#include <color_fragment>
      { float n = fbm3(vec3(vGW.xz * 0.6, 1.0)) * 0.5 + 0.5, p = vnoise3(vec3(vGW.xz * 9.0, 2.0));
        vec3 c = mix(vec3(0.2, 0.16, 0.12), vec3(0.34, 0.28, 0.21), n) * (0.85 + 0.3 * p);
        c *= 0.75 + 0.5 * smoothstep(0.55, 0.8, vnoise3(vec3(vGW.xz * 3.0, 5.0)) * 0.5 + 0.5);
        diffuseColor.rgb = mix(c, vec3(dot(c, vec3(0.3, 0.59, 0.11)) * 1.5 + 0.06), uIRg); }`)
    .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
      { float h = vnoise3(vec3(vGW.xz * 9.0, 2.0)) * 0.6 + vnoise3(vec3(vGW.xz * 30.0, 3.0)) * 0.4;
        normal = bumpN(-vViewPosition, normal, vec2(dFdx(h), dFdy(h)) * 0.004, faceDirection); }`);
  sh.uniforms.uIRg = U.uIR;
  sh.fragmentShader = 'uniform float uIRg;\n' + sh.fragmentShader;
};
const ground = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), groundMat);
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);

// the herd behind: pairs of eyes catching the light, now and then blinking
const eyeTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,255,255,0.9)'); g.addColorStop(0.5, 'rgba(255,255,255,0.18)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
const herd = [];
{
  let s = 7;
  const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 16; i++) {
    const d = 7 + r() * 16, a = (r() - 0.5) * 1.5, x = Math.sin(a) * d, z = -Math.cos(a) * d + 2.5, y = 1.2 + r() * 0.3, look = (r() - 0.5) * 0.5;
    const pair = new THREE.Group(); pair.position.set(x, y, z); pair.rotation.y = look;
    for (const side of [-1, 1]) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: eyeTex, color: 0xdfffe8, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, transparent: true }));
      sp.position.x = side * 0.11; sp.scale.setScalar(0.07); pair.add(sp);
    }
    pair.userData = { blink: 2 + r() * 8, base: 0.6 + r() * 0.4 };
    scene.add(pair); herd.push(pair);
  }
}

// ---------------- shared GLSL ----------------
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
const U = { uTime: { value: 0 }, uIR: { value: 1 } };

const RIG_DECL = `
attribute vec2 aAtt; attribute vec4 aMat; attribute vec4 aExt; attribute vec4 aRig;
uniform float uTime;
uniform vec3 uHeadP, uHeadX, uHeadY, uHeadZ, uJawH, uHeadRot, uNeckP;
uniform float uJaw, uSplit, uBreath, uSway; uniform vec2 uNeck;
mat3 aa(vec3 k, float t) { float c = cos(t), s = sin(t), C = 1.0 - c;
  return mat3(c + k.x*k.x*C, k.y*k.x*C + k.z*s, k.z*k.x*C - k.y*s,  k.x*k.y*C - k.z*s, c + k.y*k.y*C, k.z*k.y*C + k.x*s,  k.x*k.z*C + k.y*s, k.y*k.z*C - k.x*s, c + k.z*k.z*C); }`;
// jaw (or the split halves), then the head on its pivot, then the neck bend; the same in the shadow pass
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

function monsterMaterial(info) {
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, metalness: 0 });
  const own = {
    uHeadP: { value: new THREE.Vector3() }, uHeadX: { value: new THREE.Vector3(1, 0, 0) }, uHeadY: { value: new THREE.Vector3(0, 1, 0) }, uHeadZ: { value: new THREE.Vector3(0, 0, 1) },
    uJawH: { value: new THREE.Vector3() }, uHeadRot: { value: new THREE.Vector3() }, uNeckP: { value: new THREE.Vector3() }, uNeck: { value: new THREE.Vector2() },
    uJaw: { value: 0 }, uSplit: { value: 0 }, uBreath: { value: 0 }, uSway: { value: 1 },
    uSkin: { value: new THREE.Color(...info.skin) }, uWr: { value: new THREE.Vector3(...info.wr).normalize() }, uSmoke: { value: info.smoke ?? 0 },
    uEyeGain: { value: 14 }, uEyeSelf: { value: info.eyeSelf ?? 0 }, uEyeShine: { value: info.eyeShine ?? 1 }, uLightP: { value: new THREE.Vector3() },
  };
  m.userData.own = own;
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, U, own);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>\n${RIG_DECL}\nvarying vec3 vObj; varying vec4 vMat; varying vec4 vExt; varying vec2 vAtt; varying vec3 vWP;`)
      .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>\n${RIG_MATS}\nobjectNormal = rN * (rH * (rJ * objectNormal));`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>\nvObj = position; vMat = aMat; vExt = aExt; vAtt = aAtt;\n${RIG_POS}`)
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uTime, uIR, uSmoke, uEyeGain, uEyeSelf, uEyeShine; uniform vec3 uSkin, uWr, uLightP;
        varying vec3 vObj; varying vec4 vMat; varying vec4 vExt; varying vec2 vAtt; varying vec3 vWP;
        ${NOISE}`)
      .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
        if (uSmoke > 0.0) { // ragged, smoky silhouette: holes eat in where the surface turns away
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
          skin = mix(skin, skin * (0.55 + 0.6 * streak), fur);                       // matted hair
          skin = mix(skin, vec3(0.42, 0.33, 0.3) * (0.7 + 0.5 * pat), mange * fur * 0.6 * step(0.05, uSkin.r)); // bald, scabbed patches
          float fib = vnoise3(p * 140.0 + fbm3(p * 6.0) * 3.0) * 0.5 + 0.5;
          vec3 fl = mix(vec3(0.28, 0.045, 0.04), vec3(0.48, 0.16, 0.12), smoothstep(0.25, 0.85, fib));
          fl *= 0.6 + 0.5 * (fbm3(p * 11.0) * 0.5 + 0.5);
          vec3 th = vec3(0.72, 0.66, 0.5) * (0.65 + 0.35 * vAtt.x);
          vec3 bn = vec3(0.66, 0.62, 0.54) * (0.75 + 0.35 * pat) * (1.0 - 0.6 * smoothstep(0.6, 0.85, vnoise3(p * vec3(40.0, 6.0, 40.0)) * 0.5 + 0.5));
          vec3 c = skin;
          c = mix(c, fl, flesh); c = mix(c, bn, bone); c = mix(c, th, teeth);
          c = mix(c, vec3(0.06, 0.012, 0.012), mouth);
          c = mix(c, vec3(0.005), eye);
          c *= mix(1.0, smoothstep(0.0, 1.0, vAtt.x), 0.85);                          // baked occlusion
          c *= 1.0 - 0.7 * smoothstep(0.52, 0.66, vAtt.y) * (1.0 - eye);             // grime in creases
          c *= 1.0 - 0.45 * vExt.w * smoothstep(0.55, 0.95, abs(sin(dot(p, uWr) * 85.0 + fbm3(p * 5.0) * 5.0))) * (1.0 - flesh - bone - teeth); // dark fold lines
          float ir = dot(c, vec3(0.3, 0.59, 0.11));
          c = mix(c, vec3(ir * 1.15 + 0.015 * (1.0 - mouth - eye)) * (uSmoke > 0.0 ? 0.25 : 1.0), uIR);
          diffuseColor.rgb = c; }`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = mix(0.78, 0.38, vMat.z); roughnessFactor = mix(roughnessFactor, 0.3, vMat.y); roughnessFactor = mix(roughnessFactor, 0.45, vMat.x);
        roughnessFactor = mix(roughnessFactor, 0.7, vMat.w); roughnessFactor = mix(roughnessFactor, 0.12, vExt.x);`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        { vec3 p = vObj; float h = 0.0;
          float wr = abs(sin(dot(p, uWr) * 85.0 + fbm3(p * 5.0) * 5.0)); h += vExt.w * (1.0 - wr) * 1.4 * (1.0 - vMat.x - vMat.w);   // folds
          h += vExt.z * (vnoise3(p * vec3(150.0, 22.0, 150.0)) * 0.8 + vnoise3(p * 60.0) * 0.3);                                    // hair
          h += vMat.z * ((vnoise3(p * 140.0 + fbm3(p * 6.0) * 3.0) * 0.5 + 0.5) * 0.7 + vnoise3(p * 80.0) * 0.4);                                                                        // raw muscle
          h += vMat.w * vnoise3(p * 45.0) * 0.6 + vnoise3(p * 95.0) * 0.25;
          normal = bumpN(-vViewPosition, normal, vec2(dFdx(h), dFdy(h)) * 0.0032, faceDirection); }`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        { float fc = clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
          float dl = length(vWP - uLightP);
          float shine = mix(min(5.0, uEyeGain * pow(fc, 4.0) / pow(max(dl, 1.3), 1.5)), 5.5 * pow(fc, 2.5), uIR) * uEyeShine; // the trail camera exposes for the eyes too
          totalEmissiveRadiance += vExt.x * vec3(0.96, 1.0, 0.9) * (shine + uEyeSelf * (0.4 + 0.6 * fc)); }`);
  };
  m.customProgramCacheKey = () => 'monster-v1';
  const depth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
  depth.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, U, own);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', `#include <common>\n${RIG_DECL}`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>\n${RIG_MATS}\n${RIG_POS}`);
  };
  depth.customProgramCacheKey = () => 'monster-depth-v1';
  return { mat: m, depth, own };
}

// ---------------- loading ----------------
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
  const rig = new Uint8Array(buf, o, vc * 4);
  const pos = new Float32Array(vc * 3); for (let i = 0; i < vc * 3; i++) pos[i] = p16[i] * j.ps;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(new Int8Array(nrm), 3, true));
  g.setAttribute('aAtt', new THREE.BufferAttribute(new Uint8Array(att), 2, true));
  g.setAttribute('aMat', new THREE.BufferAttribute(new Uint8Array(mat), 4, true));
  g.setAttribute('aExt', new THREE.BufferAttribute(new Uint8Array(ext), 4, true));
  g.setAttribute('aRig', new THREE.BufferAttribute(new Uint8Array(rig), 4, true));
  g.setIndex(new THREE.BufferAttribute(j.i32 ? new Uint32Array(idx) : new Uint16Array(idx), 1));
  g.computeBoundingSphere(); g.boundingSphere.radius += 0.6;
  return g;
}
const monsters = {};
async function loadMonster(id) {
  if (monsters[id]) return monsters[id];
  const j = await (await fetch(`data/${id}.json`)).json(), meta = j.meta, info = INFO[id];
  const { mat, depth, own } = monsterMaterial(info);
  const mesh = new THREE.Mesh(parse(j), mat);
  mesh.customDepthMaterial = depth; mesh.castShadow = mesh.receiveShadow = true; mesh.frustumCulled = false;
  own.uHeadP.value.fromArray(meta.headPivot); own.uHeadX.value.fromArray(meta.headX); own.uHeadY.value.fromArray(meta.headY); own.uHeadZ.value.fromArray(meta.headZ);
  if (meta.split) { own.uSplit.value = 1; own.uJawH.value.fromArray(meta.headPivot).addScaledVector(own.uHeadZ.value, meta.split.hinge[2]); }
  else own.uJawH.value.fromArray(meta.jawHinge);
  own.uNeckP.value.fromArray(meta.neck ? meta.neck.base : [0, 1.5, -0.05]);
  const root = new THREE.Group(); root.add(mesh);
  return (monsters[id] = { id, meta, info, mesh, root, own, st: newState() });
}

// ---------------- motion: breathing, a gaping jaw, twitches, and the pounce ----------------
function newState() { return { t: 0, gape: 0, gapeT: 3, jerkT: 1.5, head: new THREE.Vector3(), headGoal: new THREE.Vector3(), eat: -1, fired: {}, camK: 0, shake: 0, breathPh: 0 }; }
const rr = (a, b) => a + Math.random() * (b - a);
const _fz = new THREE.Vector3(), _qa = new THREE.Quaternion();
const _h0 = new THREE.Vector3(), _to = new THREE.Vector3(), _p = new THREE.Vector3(), _q = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0);
const snd = makeMonsterSound();
let pounceKind = 'growlRoar', biteKind = 'crunch';
const buzz = (p) => { try { navigator.vibrate && navigator.vibrate(p); } catch (e) { /* no vibration */ } };
// the pounce, in seconds from the tap: it goes still and quiet, snaps round with a roar and lunges,
// you are pulled into the open mouth, the jaws shut over the screen, the light through the teeth dies, black, and back
const EAT = { snap: 0.45, lunge: 0.7, engulf: 1.0, shut: 1.13, dark0: 1.35, dark1: 2.6, reset: 3.1, back0: 3.6, back1: 4.5 };
const ease = (u) => { u = Math.min(1, Math.max(0, u)); return u * u * (3 - 2 * u); };
const easeIn = (u) => { u = Math.min(1, Math.max(0, u)); return u * u * u; };
const easeOut = (u) => { u = Math.min(1, Math.max(0, u)); return 1 - Math.pow(1 - u, 3); };
function animate(M, dt) {
  const s = M.st, A = M.info.anim, o = M.own, split = !!M.meta.split;
  s.t += dt;
  const t = s.t, eating = s.eat >= 0, E = s.eat;
  const hz = A.breathHz ?? 0.32, ph = (t * hz) % 1;
  s.breathCross = ph < s.breathPh; s.breathPh = ph;
  o.uBreath.value = A.breath * 0.012 * Math.sin(t * Math.PI * 2 * hz) * (eating && E < EAT.snap ? 0.2 : 1);
  // the jaw: a slow working open and shut, a quiver, and now and then a long gape
  s.gapeT -= dt;
  if (s.gapeT < 0 && !eating) { s.gape = 1; s.gapeT = rr(3.5, 7); s.gapeHold = rr(0.8, 1.6); snd.gape(M.id); }
  if (s.gape > 0) { s.gapeHold -= dt; if (s.gapeHold < 0) s.gape = Math.max(0, s.gape - dt * 1.4); }
  s.gapeV = (s.gapeV ?? 0) + ((s.gape > 0 && s.gapeHold > 0 ? 1 : s.gape) - (s.gapeV ?? 0)) * Math.min(1, dt * 5);
  let jaw = (split ? -0.1 : -0.12) + 0.08 * Math.sin(t * 0.9) + 0.012 * Math.sin(t * 37) + s.gapeV * A.jaw;
  // the head: still for a moment, then a sudden unnatural jerk to a new angle, and a fine tremor
  s.jerkT -= dt;
  if (s.jerkT < 0) { s.jerkT = rr(1.2, 3.8) / A.twitch; s.headGoal.set(rr(-0.3, 0.3), rr(-0.18, 0.18), rr(-0.4, 0.4)).multiplyScalar(Math.min(1, A.twitch)); }
  s.head.lerp(s.headGoal, Math.min(1, dt * 22));
  const tr = 0.012 * A.twitch;
  o.uHeadRot.value.set(s.head.x + tr * Math.sin(t * 41), s.head.y + tr * Math.sin(t * 33 + 1), s.head.z + tr * Math.sin(t * 29 + 2));
  o.uNeck.value.set(A.neck[0] * Math.sin(t * 0.55), A.neck[1] * Math.sin(t * 0.4 + 1));
  o.uSway.value = A.sway;
  M.root.position.set(0, 0, 0); M.root.quaternion.identity();
  s.camK = 0; s.shake = Math.max(0, s.shake - dt * 2.2);
  let bite = 0, leak = 1, fade = 0;
  if (eating) {
    s.eat += dt;
    const once = (k, f) => { if (!s.fired[k] && E >= EAT[k]) { s.fired[k] = 1; f(); } };
    if (!s.fired.start) { s.fired.start = 1; snd.freeze(pounceKind); }
    once('snap', () => { snd.pounce(pounceKind); buzz(90); s.shake = 0.5; });
    once('engulf', () => { s.shake = Math.max(s.shake, 0.7); });
    once('shut', () => { snd.bite(biteKind); buzz([260, 120, 90]); s.shake = 1.2; });
    once('back0', () => snd.restore());
    const max = split ? 0.55 : 0.85;   // how far the jaw (or the split face) opens at the lunge
    const H0 = _h0.fromArray(M.meta.headPivot);
    const to = _to.copy(camera.position).sub(H0); const dist = to.length(); to.normalize();
    const reach = Math.max(0, dist - 0.85), yawTo = Math.atan2(to.x, to.z);
    let along = 0, turn = 0;
    if (E < EAT.snap) { // dead still, watching you, the mouth easing shut
      const u = ease(E / EAT.snap); jaw = jaw * (1 - u) + (split ? -0.18 : -0.2) * u;
      o.uHeadRot.value.multiplyScalar(1 - u); o.uHeadRot.value.y -= 0.12 * u; turn = 0.15 * u;
    } else if (E < EAT.lunge) { // snaps round and comes, mouth tearing open
      const u = (E - EAT.snap) / (EAT.lunge - EAT.snap), e = easeOut(u);
      turn = 0.15 + 0.85 * easeOut(u * 1.6); along = reach * e; jaw = -0.2 + (max + 0.2) * easeOut(u * 1.3);
      o.uHeadRot.value.set(0, 0.08 * Math.sin(E * 60) * (1 - u), 0.06 * Math.sin(E * 47));
    } else if (E < EAT.shut) { // you are in its mouth; it closes
      const u = (E - EAT.lunge) / (EAT.engulf - EAT.lunge);
      turn = 1; along = reach + 0.25 * ease(u);
      s.camK = easeIn(Math.min(1, u));
      jaw = max + 0.03 * Math.sin(E * 50);
      if (E > EAT.engulf) { const v = (E - EAT.engulf) / (EAT.shut - EAT.engulf); jaw = max - (max + M.meta.jawOpen * (split ? 0.95 : 0.9)) * easeIn(v); bite = easeIn(v); }
      o.uHeadRot.value.set(0, 0, 0.05 * Math.sin(E * 33));
    } else { // shut: the light through the teeth fades out, and the dark comes
      turn = 1; along = reach + 0.25; s.camK = 1; jaw = -M.meta.jawOpen * (split ? 0.95 : 0.9); bite = 1;
      leak = 1 - ease((E - EAT.shut) / (EAT.dark1 - EAT.shut - 0.3));
      fade = ease((E - EAT.dark0) / (EAT.dark1 - EAT.dark0));
      o.uHeadRot.value.set(0, 0, 0);
      if (E >= EAT.reset) { turn = 0; along = 0; s.camK = 0; bite = 0; jaw = -0.12; fade = 1 - ease((E - EAT.back0) / (EAT.back1 - EAT.back0)); }
      if (E >= EAT.back1) { s.eat = -1; s.fired = {}; fade = 0; }
    }
    // aim the middle of the open mouth at you (not the nose), so you look down its throat as it comes
    const half = split ? 0 : 0.5 * (M.meta.jawOpen + max) - 0.1;
    _fz.fromArray(M.meta.headZ).multiplyScalar(Math.cos(half)).addScaledVector(_hy.fromArray(M.meta.headY), -Math.sin(half)).normalize();
    _qa.setFromUnitVectors(_fz, to);
    M.root.quaternion.identity().slerp(_qa, turn);
    const P = _p.copy(H0).addScaledVector(to, along);
    M.root.position.copy(P).sub(_q.copy(H0).applyQuaternion(M.root.quaternion));
  }
  o.uJaw.value = jaw;
  const dim = (1 - s.camK) * (1 - s.camK);
  o.uEyeShine.value = (M.info.eyeShine ?? 1) * (0.012 + 0.988 * dim); o.uEyeSelf.value = (M.info.eyeSelf ?? 0) * (0.03 + 0.97 * dim);
  grade.uniforms.uBite.value = bite; grade.uniforms.uLeak.value = leak; grade.uniforms.uBiteH.value = split ? 1 : 0;
  $('fade').style.opacity = fade;
  snd.ambient(M.id, dt, { cross: s.breathCross && !eating });
}
// where the throat is, in the world, for the moment you are inside the mouth
const _m = new THREE.Vector3(), _a = new THREE.Vector3(), _hy = new THREE.Vector3(), _mat = new THREE.Matrix4(), _qm = new THREE.Quaternion();
function headToWorld(M, l, out) {
  const m = M.meta;
  out.fromArray(m.headPivot).addScaledVector(_hx.fromArray(m.headX), l[0]).addScaledVector(_hy2.fromArray(m.headY), l[1]).addScaledVector(_hz.fromArray(m.headZ), l[2]);
  return out.applyQuaternion(M.root.quaternion).add(M.root.position);
}
const _hx = new THREE.Vector3(), _hy2 = new THREE.Vector3(), _hz = new THREE.Vector3();
function mouthPose(M) {
  const m = M.meta, L = m.headL;
  let loc, aim;
  if (m.split) { loc = [0, -0.01, 0.42]; aim = [0, 0.005, 0.07]; } // between the halves, the third eye ahead
  else {
    const H = m.hingeLocal, th = m.jawOpen + M.own.uJaw.value, c = Math.cos(th), sn = Math.sin(th);
    const dy = -0.095 - H[1], dz = 0.5 * L - H[2], J = [0, H[1] + dy * c - dz * sn, H[2] + dy * sn + dz * c];
    const U = [0, -0.05, 0.5 * L], mid = [0, (U[1] + J[1]) / 2, (U[2] + J[2]) / 2];
    aim = [0, H[1] + 0.01, H[2] - 0.03];
    loc = [0, mid[1] + (mid[1] - aim[1]) * 0.25, mid[2] + (mid[2] - aim[2]) * 0.25];
  }
  headToWorld(M, loc, _m); headToWorld(M, aim, _a);
  _hy.fromArray(m.headY).applyQuaternion(M.root.quaternion);
  _mat.lookAt(_m, _a, _hy); _qm.setFromRotationMatrix(_mat);
  return { pos: _m, quat: _qm };
}

// ---------------- camera: two framings, drag to circle around ----------------
const view = { mode: 'full', yaw: 0, pitch: 0, zoom: 1, look: new THREE.Vector3(), base: new THREE.Vector3() };
function setView(v) {
  view.mode = v; view.yaw = 0; view.pitch = 0; view.zoom = 1;
  for (const b of document.querySelectorAll('#view button')) b.classList.toggle('on', b.dataset.v === v);
  if (cur) { const c = cur.meta.cams[v]; view.look.fromArray(c.look); view.base.fromArray(c.pos); }
}
function placeCamera() {
  const off = view.base.clone().sub(view.look), d = off.length() * view.zoom;
  const yaw0 = Math.atan2(off.x, off.z), pitch0 = Math.asin(off.y / off.length());
  const yaw = yaw0 + view.yaw, pitch = Math.max(-0.2, Math.min(0.9, pitch0 + view.pitch));
  camera.position.set(view.look.x + Math.sin(yaw) * Math.cos(pitch) * d, view.look.y + Math.sin(pitch) * d, view.look.z + Math.cos(yaw) * Math.cos(pitch) * d);
  camera.position.y = Math.max(0.25, camera.position.y);
  camera.lookAt(view.look);
  if (cur && cur.st.camK > 0) { const mp = mouthPose(cur); camera.position.lerp(mp.pos, cur.st.camK); camera.quaternion.slerp(mp.quat, cur.st.camK); }
  if (cur && cur.st.shake > 0) { const k = cur.st.shake * 0.02; camera.position.x += (Math.random() - 0.5) * k; camera.position.y += (Math.random() - 0.5) * k; camera.rotateZ((Math.random() - 0.5) * k * 2.5); }
}
const ptrs = new Map(); let pinch0 = 0, zoom0 = 1;
stage.addEventListener('pointerdown', (e) => { stage.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY }); if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch0 = Math.hypot(a.x - b.x, a.y - b.y); zoom0 = view.zoom; } });
stage.addEventListener('pointermove', (e) => {
  const p = ptrs.get(e.pointerId); if (!p) return;
  if (ptrs.size === 1) { view.yaw -= (e.clientX - p.x) * 0.008; view.pitch += (e.clientY - p.y) * 0.005; }
  p.x = e.clientX; p.y = e.clientY;
  if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; view.zoom = Math.max(0.35, Math.min(1.8, zoom0 * pinch0 / Math.max(1, Math.hypot(a.x - b.x, a.y - b.y)))); }
});
const up = (e) => ptrs.delete(e.pointerId);
stage.addEventListener('pointerup', up); stage.addEventListener('pointercancel', up);
stage.addEventListener('wheel', (e) => { e.preventDefault(); view.zoom = Math.max(0.35, Math.min(1.8, view.zoom * Math.exp(e.deltaY * 0.001))); }, { passive: false });

// ---------------- light modes ----------------
let lightMode = 'ir';
function setLight(mode) {
  lightMode = mode; U.uIR.value = mode === 'ir' ? 1 : 0;
  flash.visible = mode === 'ir'; lantern.visible = mode === 'lantern';
  moon.intensity = mode === 'ir' ? 0.015 : 0.09;
  scene.fog.density = mode === 'ir' ? 0.075 : 0.07;
  grade.uniforms.uIR.value = U.uIR.value;
  bloom.strength = mode === 'ir' ? 0.95 : 0.75;
  for (const b of document.querySelectorAll('#light button')) b.classList.toggle('on', b.dataset.v === mode);
  for (const p of herd) for (const s of p.children) s.material.color.set(mode === 'ir' ? 0xffffff : 0xe8ffd8);
}
const _hp = new THREE.Vector3();
function placeLights(t) {
  const fwd = new THREE.Vector3(); camera.getWorldDirection(fwd);
  const right = new THREE.Vector3().crossVectors(fwd, camera.up).normalize();
  // the trail camera sets its own exposure: the flash is as bright at the face as at the whole body
  let dSub = camera.position.distanceTo(view.look);
  if (cur) { _hp.fromArray(cur.meta.headPivot).applyQuaternion(cur.root.quaternion).add(cur.root.position); dSub = Math.max(0.5, Math.min(dSub, camera.position.distanceTo(_hp) - 0.3)); dSub += (0.08 - dSub) * cur.st.camK; }
  flash.intensity = 5.2 * dSub * dSub;
  flash.position.copy(camera.position).addScaledVector(camera.up, 0.08);
  flash.target.position.copy(camera.position).addScaledVector(fwd, 5);
  // the lantern held low in the left hand, its flame flickering
  lantern.position.copy(camera.position).addScaledVector(right, -0.32).addScaledVector(camera.up, -0.42).addScaledVector(fwd, 0.25);
  lantern.target.position.copy(camera.position).addScaledVector(fwd, 5).addScaledVector(camera.up, -0.6);
  const ck = cur ? cur.st.camK : 0;
  lantern.intensity = 22 * Math.min(1, Math.max(0.3 * (1 - ck) + 0.004 * ck, (dSub * dSub) / 10)) * (0.9 + 0.06 * Math.sin(t * 13) + 0.04 * Math.sin(t * 29 + 1));
  const lp = mode => (mode === 'ir' ? flash.position : lantern.position);
  if (cur) cur.own.uLightP.value.copy(lp(lightMode));
}

// ---------------- post: bloom on the eyes, then grain, vignette and the trail camera's grey ----------------
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.95, 0.55, 0.9);
composer.addPass(bloom);
composer.addPass(new OutputPass());
const grade = new ShaderPass({
  uniforms: { tDiffuse: { value: null }, uIR: { value: 1 }, uTime: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) }, uBite: { value: 0 }, uLeak: { value: 1 }, uBiteH: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uIR, uTime, uBite, uLeak, uBiteH; uniform vec2 uRes; varying vec2 vUv;
    float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    float h1(float x) { return fract(sin(x * 127.1) * 43758.5453); }
    // jaws closing over the screen from above and below (from the sides for the split head); teeth interlock,
    // leaving slits of light that die out
    vec3 biteOver(vec3 c) {
      vec2 q = uBiteH > 0.5 ? vec2(vUv.y, vUv.x) : vUv;
      float n = uBiteH > 0.5 ? 7.0 : 5.0, th = uBiteH > 0.5 ? 0.1 : 0.16, k = uBite;
      float tx = q.x * n + 0.3, tb = tx + 0.5, it = floor(tx), ib = floor(tb);
      float triT = 1.0 - abs(fract(tx) - 0.5) * 2.0, triB = 1.0 - abs(fract(tb) - 0.5) * 2.0;
      float hT = th * (0.55 + 0.9 * h1(it + 3.0)), hB = th * (0.55 + 0.9 * h1(ib + 9.0));
      triT = pow(triT, 0.8 + 0.8 * h1(it + 5.0)); triB = pow(triB, 0.8 + 0.8 * h1(ib + 7.0));
      float baseT = mix(1.0 + th * 1.5, 0.5 + th * 0.12, k), baseB = mix(-th * 1.5, 0.5 - th * 0.12, k);
      float topE = baseT - hT * pow(triT, 1.6), botE = baseB + hB * pow(triB, 1.6);
      float w = 0.003 + 0.012 * (1.0 - k);
      float inT = smoothstep(topE - w, topE + w, q.y), inB = 1.0 - smoothstep(botE - w, botE + w, q.y);
      float toothT = inT * (1.0 - smoothstep(baseT - 0.01, baseT + 0.01, q.y)), toothB = inB * smoothstep(baseB - 0.01, baseB + 0.01, q.y);
      float lit = 0.25 + 0.75 * uLeak;
      vec3 gum = mix(vec3(0.05, 0.012, 0.01), vec3(0.03), uIR);
      gum += mix(vec3(0.18, 0.05, 0.04), vec3(0.1), uIR) * (exp(-abs(q.y - baseT) * 40.0) * inT + exp(-abs(q.y - baseB) * 40.0) * inB) * lit * (1.0 - toothT - toothB);
      vec3 tooth = mix(vec3(0.62, 0.56, 0.44), vec3(0.58), uIR) * lit * (0.55 + 0.45 * (1.0 - abs(fract(uBiteH > 0.5 ? tx : tx) - 0.5) * 2.0));
      vec3 jawC = mix(gum, tooth, max(toothT, toothB));
      vec3 light = mix(vec3(0.55, 0.42, 0.3), vec3(0.45), uIR) * uLeak;
      vec3 gap = mix(c, light, smoothstep(0.8, 1.0, k));
      return mix(gap, jawC, max(inT, inB));
    }
    void main() {
      vec2 px = 1.0 / uRes;
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      vec3 b = (texture2D(tDiffuse, vUv + px * vec2(1.4, 0.4)).rgb + texture2D(tDiffuse, vUv - px * vec2(1.4, 0.4)).rgb + texture2D(tDiffuse, vUv + px * vec2(-0.4, 1.4)).rgb + texture2D(tDiffuse, vUv - px * vec2(-0.4, 1.4)).rgb) * 0.25;
      c = mix(c, b, 0.55 * uIR);
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(c, vec3(pow(l, 1.12)), uIR);
      if (uBite > 0.001) c = biteOver(c);
      vec2 q = (vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0);
      c *= mix(0.3, 1.0, smoothstep(1.1, 0.25, length(q)));
      float g = h(floor(vUv * uRes / 1.5) + fract(uTime * 7.13) * 91.7) - 0.5;
      c += g * mix(0.035, 0.085, uIR) * (0.55 + 0.6 * (1.0 - l));
      c += (h(vec2(floor(vUv.y * uRes.y / 2.0), floor(uTime * 24.0))) - 0.5) * 0.012 * uIR;
      gl_FragColor = vec4(max(c, 0.0), 1.0);
    }`,
});
composer.addPass(grade);

// ---------------- UI ----------------
let cur = null;
async function setMonster(id) {
  $('loading').hidden = false;
  for (const b of document.querySelectorAll('#mons button')) b.classList.toggle('on', b.dataset.v === id);
  const info = INFO[id];
  $('tag').textContent = info.tag; $('title').textContent = info.title;
  $('pts').innerHTML = info.pts.map((p) => `<li>${p}</li>`).join('');
  const M = await loadMonster(id);
  if (cur) { scene.remove(cur.root); cur.root.position.set(0, 0, 0); cur.root.quaternion.identity(); }
  grade.uniforms.uBite.value = 0; $('fade').style.opacity = 0; snd.restore();
  cur = M; scene.add(M.root); M.st = newState();
  setView(view.mode);
  $('loading').hidden = true;
}
$('mons').innerHTML = ORDER.map((id) => `<button class="chip" data-v="${id}">${INFO[id].chip}</button>`).join('');
$('mons').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) setMonster(b.dataset.v); });
$('light').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) setLight(b.dataset.v); });
$('view').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) setView(b.dataset.v); });
$('pounce').addEventListener('click', () => { snd.unlock(); if (!cur || cur.st.eat >= 0) return; cur.st.eat = 0; cur.st.fired = {}; });
$('gape').addEventListener('click', () => { snd.unlock(); if (cur && cur.st.eat < 0) { cur.st.gape = 1; cur.st.gapeHold = 1.6; cur.st.gapeT = rr(4, 7); snd.gape(cur.id); } });
$('sound').addEventListener('click', () => { snd.setEnabled(!snd.enabled); snd.unlock(); $('sound').textContent = snd.enabled ? '소리 켜짐' : '소리 꺼짐'; $('sound').classList.toggle('on', snd.enabled); });
$('pounceSel').innerHTML = Object.entries(POUNCE_KINDS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('');
$('biteSel').innerHTML = Object.entries(BITE_KINDS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('');
$('pounceSel').addEventListener('change', (e) => { pounceKind = e.target.value; if (!cur || cur.st.eat < 0) snd.preview(pounceKind); }); // pick one, hear it
$('biteSel').addEventListener('change', (e) => { biteKind = e.target.value; if (!cur || cur.st.eat < 0) snd.previewBite(biteKind); });
window.addEventListener('pointerdown', () => snd.unlock(), { capture: true });

function resize() {
  const w = stage.clientWidth, h = stage.clientHeight;
  renderer.setSize(w, h, false); composer.setSize(w, h);
  camera.aspect = w / h; camera.fov = w / h < 0.8 ? 58 : 46; camera.updateProjectionMatrix();
  grade.uniforms.uRes.value.set(w * DPR, h * DPR);
}
window.addEventListener('resize', resize);

let last = performance.now(), speed = 1;
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000) * speed; last = now;
  U.uTime.value += dt; grade.uniforms.uTime.value = U.uTime.value;
  if (cur) animate(cur, dt);
  placeCamera(); placeLights(U.uTime.value);
  for (const p of herd) { const u = p.userData; u.blink -= dt; const k = u.blink < 0 ? Math.max(0.05, Math.abs(u.blink + 0.07) / 0.07) : 1; if (u.blink < -0.14) u.blink = 2 + Math.random() * 8; for (const s of p.children) s.scale.set(0.07, 0.07 * Math.min(1, k), 1); }
  composer.render();
  requestAnimationFrame(frame);
}
resize(); setLight('ir');
setMonster(new URLSearchParams(location.search).get('m') || 'm3').then(() => requestAnimationFrame(frame));

// for tests: freeze the clock, jump the motion, pick a moment of the pounce
window.__mon = {
  setSpeed(s) { speed = s; }, get cur() { return cur; }, setMonster, setLight, setView,
  setPounce(k) { pounceKind = k; }, setBite(k) { biteKind = k; }, snd,
  pose(o) { if (!cur) return; Object.assign(cur.st, o.st || {}); if (o.yaw !== undefined) view.yaw = o.yaw; if (o.pitch !== undefined) view.pitch = o.pitch; if (o.zoom !== undefined) view.zoom = o.zoom; },
};

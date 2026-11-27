// Night Herd: the monster candidates. One baked mesh per monster, animated on the GPU
// (breathing, a jaw that gapes, a head that twitches, a neck that bends, hanging hide that sways),
// lit like the reference photos (an infrared trail camera) or like the game (the lantern).
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { makeMonsterSound, POUNCE_KINDS, SCARE_KINDS } from './monster-sound.js';

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


// ---------------- the row of cows, as in the game: side by side, facing you, the monster in among them ----------------
// The cows are the game's own (lighter copies, gen-cows-lite.mjs). Their eyes catch the light like the monster's.
const COW_SKIN = `
attribute vec4 aMat; attribute vec4 aExt4; attribute vec4 aRig;
uniform float uTime, uPhase, uNod, uTurn;
varying vec4 vCMat; varying float vCEye; varying vec3 vCExt; varying vec3 vCObj; varying vec3 vCWP;
mat3 cRotX(float a) { float c = cos(a), s = sin(a); return mat3(1.0,0.0,0.0, 0.0,c,s, 0.0,-s,c); }
mat3 cRotY(float a) { float c = cos(a), s = sin(a); return mat3(c,0.0,-s, 0.0,1.0,0.0, s,0.0,c); }`;
function cowMaterial(coat, face, phase) {
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85 });
  const own = { uBody: { value: new THREE.Color(coat, coat * 0.93, coat * 0.8) }, uFace: { value: new THREE.Color(face, face * 0.93, face * 0.8) }, uPhase: { value: phase }, uNod: { value: 0 }, uTurn: { value: 0 }, uLightP: lightP };
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, U, own);
    const pose = `mat3 rN = cRotY(uTurn * aRig.x) * cRotX(uNod * 0.6 * aRig.x); mat3 rH = cRotX(uNod * 0.5 * aRig.y);
      const vec3 N0 = vec3(0.0, 1.08, 0.58), H0 = vec3(0.0, 1.22, 1.03);`;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', `#include <common>\n${COW_SKIN}`)
      .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>\n${pose}\nobjectNormal = rN * (rH * objectNormal);`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vCMat = aMat; vCEye = aExt4.x; vCExt = aExt4.yzw; vCObj = position;
        { float br = sin(uTime * 1.3 + uPhase) * 0.5 + 0.5; float barrel = smoothstep(0.6, 0.85, position.y) * (1.0 - smoothstep(1.15, 1.32, position.y)) * (1.0 - smoothstep(0.5, 0.85, abs(position.z + 0.05)));
          transformed += normal * barrel * br * 0.007 * (1.0 - aRig.x); }
        transformed = H0 + rH * (transformed - H0); transformed = N0 + rN * (transformed - N0);`)
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvCWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
        uniform float uIR; uniform vec3 uBody, uFace, uLightP; varying vec4 vCMat; varying float vCEye; varying vec3 vCExt; varying vec3 vCObj; varying vec3 vCWP;\n${NOISE}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        { vec3 p = vCObj; float pn = vnoise3(p * 2.7) * 0.5 + 0.5, hc = vnoise3(p * vec3(32.0, 22.0, 32.0)) * 0.6 + vnoise3(p * vec3(70.0, 45.0, 70.0)) * 0.4;
          float fm = smoothstep(0.2, 0.8, vCExt.z + 0.25 * vnoise3(p * 14.0));
          vec3 c = mix(uBody, uFace, fm) * (0.74 + 0.4 * pn) * (1.0 + 0.16 * hc);
          c = mix(c, c * 0.45, vCExt.x * 0.8); c = mix(c, c * 0.5, vCExt.y * 0.8);
          float mud = smoothstep(0.1, 0.6, vnoise3(p * vec3(6.0, 11.0, 6.0)) * 0.5 + 0.5) * (1.0 - smoothstep(0.55, 0.85, p.y));
          c = mix(c, c * 0.5, mud * 0.55); c = mix(c, c * 0.3, vCMat.w * 0.85);
          c = mix(c, vec3(0.2, 0.16, 0.16), vCMat.y); c = mix(c, vec3(0.03, 0.028, 0.026), vCMat.z);
          c *= mix(1.0, vCMat.x, 0.55); c = mix(c, vec3(0.008), vCEye);
          c = mix(c, vec3(dot(c, vec3(0.3, 0.59, 0.11)) * 0.8 + 0.01), uIR);
          diffuseColor.rgb = c; }`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.35, vCMat.y); roughnessFactor = mix(roughnessFactor, 0.08, vCEye);`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        { float fc = clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), dl = length(vCWP - uLightP);
          totalEmissiveRadiance += vCEye * vec3(0.95, 1.0, 0.92) * mix(min(5.0, 14.0 * pow(fc, 4.0) / pow(max(dl, 1.3), 1.5)), 5.5 * pow(fc, 2.5), uIR); }`);
  };
  m.customProgramCacheKey = () => 'mon-page-cow-v1';
  m.userData.own = own;
  return m;
}
function parseCow(j, m) {
  const raw = atob(j.data), u8 = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) u8[i] = raw.charCodeAt(i);
  const buf = u8.buffer, vc = m.vc, ic = m.ic; let o = 0;
  const p16 = new Int16Array(buf, o, vc * 3); o += vc * 6; o += vc * 6; // positions, then head-local (unused here)
  const idx = new Uint16Array(buf, o, ic); o += ic * 2;
  const nrm = new Int8Array(buf, o, vc * 3); o += vc * 3;
  const mat = new Uint8Array(buf, o, vc * 4); o += vc * 4;
  const ext = new Uint8Array(buf, o, vc * 4); o += vc * 4;
  const rig = new Uint8Array(buf, o, vc * 4);
  const pos = new Float32Array(vc * 3); for (let i = 0; i < vc * 3; i++) pos[i] = p16[i] * m.ps;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(new Int8Array(nrm), 3, true));
  g.setAttribute('aMat', new THREE.BufferAttribute(new Uint8Array(mat), 4, true));
  g.setAttribute('aExt4', new THREE.BufferAttribute(new Uint8Array(ext), 4, true));
  g.setAttribute('aRig', new THREE.BufferAttribute(new Uint8Array(rig), 4, true));
  g.setIndex(new THREE.BufferAttribute(new Uint16Array(idx), 1));
  g.computeBoundingSphere();
  return g;
}
const lightP = { value: new THREE.Vector3() };
const row = new THREE.Group(); scene.add(row);
let cowGeos = null;
const loadCows = (async () => {
  const meta = await (await fetch('cows/cows.json')).json();
  cowGeos = await Promise.all(meta.map(async (m) => parseCow(await (await fetch(m.file)).json(), m)));
})();
// cows side by side, a little ragged, the gap in the middle as wide as the monster needs
function layoutRow(M) {
  row.clear();
  if (!cowGeos) return;
  const b = M.meta.bounds, half = Math.max(-b[0][0], b[1][0]) + 0.4;
  let seed = 11; const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const coats = [0.82, 0.72, 0.7, 0.85, 0.62, 0.78, 0.66, 0.8];
  for (let i = 0; i < 8; i++) {
    const side = i % 2 ? 1 : -1, k = Math.floor(i / 2), x = side * (half + 0.35 + k * 1.15 + (r() - 0.5) * 0.15);
    const mesh = new THREE.Mesh(cowGeos[i % cowGeos.length], cowMaterial(coats[i] * 0.55, Math.min(1, coats[i] * 0.55 + 0.25), r() * 6));
    mesh.position.set(x, 0, (r() - 0.5) * 0.5 - 0.1); mesh.rotation.y = (r() - 0.5) * 0.4; mesh.scale.setScalar(0.95 + r() * 0.1);
    mesh.castShadow = mesh.receiveShadow = true;
    mesh.userData.nod = { t: r() * 5, goal: 0, v: 0, turn: (r() - 0.5) * 0.3 };
    row.add(mesh);
  }
}
function animateRow(dt) {
  for (const c of row.children) {
    const n = c.userData.nod, own = c.material.userData.own;
    n.t -= dt; if (n.t < 0) { n.t = 2 + Math.random() * 5; n.goal = (Math.random() - 0.3) * 0.25; n.turnGoal = (Math.random() - 0.5) * 0.35; }
    n.v += (n.goal - n.v) * Math.min(1, dt * 1.5); n.turn += ((n.turnGoal ?? 0) - n.turn) * Math.min(1, dt * 1.2);
    own.uNod.value = n.v; own.uTurn.value = n.turn;
  }
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
  meta.cams.full = { pos: [0.35, 1.65, 5.0], look: [0, 0.9 + 0.22 * meta.height, 0] }; // as in the game: standing in front of the row
  return (monsters[id] = { id, meta, info, mesh, root, own, st: newState() });
}

// ---------------- motion: breathing, a gaping jaw, twitches, and the pounce ----------------
function newState() { return { t: 0, gape: 0, gapeT: 3, jerkT: 1.5, head: new THREE.Vector3(), headGoal: new THREE.Vector3(), eat: -1, scare: -1, fired: {}, shake: 0, breathPh: 0 }; }
const rr = (a, b) => a + Math.random() * (b - a);
const _fz = new THREE.Vector3(), _hy = new THREE.Vector3(), _qa = new THREE.Quaternion();
const _h0 = new THREE.Vector3(), _to = new THREE.Vector3(), _p = new THREE.Vector3(), _q = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0);
const snd = makeMonsterSound();
let pounceKind = 'growlRoar', scareKind = 'shake';
const biteKind = 'gulp'; // chosen: ③ 꿀꺽 삼킴
const buzz = (p) => { try { navigator.vibrate && navigator.vibrate(p); } catch (e) { /* no vibration */ } };
// the pounce, in seconds from the tap: it goes still and quiet, snaps round with a roar and lunges,
// its open mouth stops right in front of you, the jaws slam shut, and in that instant everything goes black; back after a while
const EAT = { snap: 0.45, lunge: 0.72, shut: 1.02, black: 1.11, reset: 3.0, back0: 3.4, back1: 4.3 };
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
  if (s.gapeT < 0 && !eating && s.scare < 0) { s.gape = 1; s.gapeT = rr(3.5, 7); s.gapeHold = rr(0.8, 1.6); snd.gape(M.id); }
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
  s.shake = Math.max(0, s.shake - dt * 2.2);
  let fade = 0;
  if (eating) {
    s.eat += dt;
    const once = (k, f) => { if (!s.fired[k] && E >= EAT[k]) { s.fired[k] = 1; f(); } };
    if (!s.fired.start) { s.fired.start = 1; snd.freeze(pounceKind); }
    once('snap', () => { snd.pounce(pounceKind); buzz(90); s.shake = 0.5; });
    once('black', () => { snd.bite(biteKind); buzz([260, 120, 90]); });
    once('back0', () => snd.restore());
    const max = split ? 0.6 : 0.95, H0 = _h0.fromArray(M.meta.headPivot);
    faceTarget(M, 0.62, max);
    let u = 0, turn = 0, push = 0;
    if (E < EAT.snap) { // dead still, watching you, the mouth easing shut
      const k = ease(E / EAT.snap); jaw = jaw * (1 - k) + (split ? -0.18 : -0.2) * k;
      o.uHeadRot.value.multiplyScalar(1 - k); o.uHeadRot.value.y -= 0.12 * k; turn = 0.12 * k;
    } else if (E < EAT.lunge) { // snaps round and comes, mouth tearing open
      const k = (E - EAT.snap) / (EAT.lunge - EAT.snap);
      u = easeOut(k); turn = easeOut(Math.min(1, k * 1.6)); jaw = -0.2 + (max + 0.2) * easeOut(k * 1.3);
      o.uHeadRot.value.set(0, 0.08 * Math.sin(E * 60) * (1 - k), 0.06 * Math.sin(E * 47));
    } else if (E < EAT.shut) { // the open mouth right at your face, quivering
      u = 1; turn = 1; jaw = max + 0.04 * Math.sin(E * 50);
      o.uHeadRot.value.set(0.03 * Math.sin(E * 41), 0.03 * Math.sin(E * 37), 0.05 * Math.sin(E * 33)); s.shake = Math.max(s.shake, 0.5);
    } else if (E < EAT.black) { // the jaws slam shut
      const k = easeIn((E - EAT.shut) / (EAT.black - EAT.shut));
      u = 1; turn = 1; push = 0.04 * k; jaw = max - (max + M.meta.jawOpen * (split ? 0.95 : 0.9)) * k; o.uHeadRot.value.set(0, 0, 0);
    } else { // black at once; the world comes back later
      u = 1; turn = 1; push = 0.04; jaw = -M.meta.jawOpen * (split ? 0.95 : 0.9); fade = 1;
      if (E >= EAT.reset) { u = 0; turn = 0; push = 0; jaw = -0.12; fade = 1 - ease((E - EAT.back0) / (EAT.back1 - EAT.back0)); }
      if (E >= EAT.back1) { s.eat = -1; s.fired = {}; fade = 0; }
    }
    const P = _p.copy(H0).lerp(_tgt, u).addScaledVector(_fwd, -push);
    M.root.quaternion.identity().slerp(_qt, turn);
    M.root.position.copy(P).sub(_q.copy(H0).applyQuaternion(M.root.quaternion));
  }
  if (s.scare >= 0) { const r = scareStep(M, dt); if (r) { jaw = r.jaw; fade = r.fade; } }
  o.uJaw.value = jaw;
  // close up, the eyes must not wash out the face
  const dHead = camera.position.distanceTo(_hp.fromArray(M.meta.headPivot).applyQuaternion(M.root.quaternion).add(M.root.position));
  const dim = 0.12 + 0.88 * ease((dHead - 0.9) / 1.5);
  o.uEyeShine.value = (M.info.eyeShine ?? 1) * (0.012 + 0.988 * dim); o.uEyeSelf.value = (M.info.eyeSelf ?? 0) * (0.03 + 0.97 * dim);
  $('fade').style.opacity = fade;
  snd.ambient(M.id, dt, { cross: s.breathCross && !eating && s.scare < 0 });
}
// ---------------- the jumpscare for a monster you missed: no wind-up, its face is just there ----------------
// ① the face snaps in out of the dark and thrashes, ② it crosses the whole distance in an instant,
// ③ it comes in from the edge of the screen. Then a hard cut to black, ears ringing, and back.
function faceTarget(M, d, max) {
  const split = !!M.meta.split;
  camera.getWorldDirection(_fwd); _rgt.crossVectors(_fwd, camera.up).normalize();
  // the face (not the skull's middle) stops a hand's breadth from you: long muzzles stop further out
  _tgt.copy(camera.position).addScaledVector(_fwd, d + 0.75 * M.meta.headL - 0.28).addScaledVector(camera.up, 0.03);
  const half = split ? 0 : 0.5 * (M.meta.jawOpen + max) - 0.1;
  _fz.fromArray(M.meta.headZ).multiplyScalar(Math.cos(half)).addScaledVector(_hy.fromArray(M.meta.headY), -Math.sin(half)).normalize();
  _qt.setFromUnitVectors(_fz, _to.copy(camera.position).sub(_tgt).normalize());
}
const SCARE = { shake: { appear: 0.12, travel: 0.0, d: 0.6 }, fast: { appear: 0.0, travel: 0.11, d: 0.68 }, side: { appear: 0.0, travel: 0.16, d: 0.64 } };
const _fwd = new THREE.Vector3(), _rgt = new THREE.Vector3(), _tgt = new THREE.Vector3(), _st = new THREE.Vector3(), _qt = new THREE.Quaternion(), _qs = new THREE.Quaternion();
function scareStep(M, dt) {
  const s = M.st, o = M.own, split = !!M.meta.split, k = s.scareKind, C = SCARE[k];
  s.scare += dt;
  const E = s.scare, hit = C.appear + C.travel, shutT = hit + 0.72, cutT = shutT + 0.08, back0 = cutT + 0.75, back1 = back0 + 0.8;
  const once = (key, f) => { if (!s.fired[key]) { s.fired[key] = 1; f(); } };
  if (E >= C.appear) once('roar', () => { snd.freeze('none'); snd.pounce(pounceKind); buzz(450); });
  if (E >= cutT) once('cut', () => { snd.snap(); snd.cut(); buzz(220); });
  if (E >= back0) once('back', () => snd.restore());
  if (E >= back1) { s.scare = -1; s.fired = {}; M.root.position.set(0, 0, 0); M.root.quaternion.identity(); return { jaw: -0.12, fade: 0 }; }
  if (E < C.appear) return { jaw: -0.12, fade: 1 };                   // ① a beat of darkness first
  if (E >= cutT) return { jaw: -0.12, fade: E < back0 ? 1 : 1 - ease((E - back0) / (back1 - back0)) }; // hard cut, then back
  const H0 = _h0.fromArray(M.meta.headPivot), max = split ? 0.6 : 0.95;
  faceTarget(M, C.d, max);
  let u = C.travel > 0 ? easeOut((E - C.appear) / C.travel) : 1;
  if (k === 'fast') { _st.copy(H0); _qs.identity(); }                  // from where it stood
  else if (k === 'side') { _st.copy(camera.position).addScaledVector(_fwd, 1.0).addScaledVector(_rgt, -1.7 * (s.scareSide || 1)).addScaledVector(camera.up, -0.35); _qs.copy(_qt).multiply(_qa.setFromAxisAngle(_fz, 0.7 * (s.scareSide || 1))); }
  else { _st.copy(_tgt); _qs.copy(_qt); }
  const P = _p.copy(_st).lerp(_tgt, u);
  M.root.quaternion.copy(_qs).slerp(_qt, u);
  // thrashing: the head whips about, the whole thing judders
  const sh = k === 'shake' ? 1 : 0.45, ph = E * 60;
  if (u >= 1) { P.x += (Math.random() - 0.5) * 0.05 * sh; P.y += (Math.random() - 0.5) * 0.05 * sh; }
  M.root.position.copy(P).sub(_q.copy(H0).applyQuaternion(M.root.quaternion));
  if (u >= 1) o.uHeadRot.value.set((Math.random() - 0.5) * 0.7 * sh, (Math.random() - 0.5) * 0.4 * sh, (Math.random() - 0.5) * 0.9 * sh);
  else o.uHeadRot.value.set(0, 0, 0);
  s.shake = u >= 1 ? 1.4 * sh + 0.3 : 0.6;
  if (E >= shutT) { const k = easeIn((E - shutT) / (cutT - shutT)); o.uHeadRot.value.multiplyScalar(1 - k); return { jaw: max - (max + M.meta.jawOpen * (split ? 0.95 : 0.9)) * k, fade: 0 }; } // snap shut
  return { jaw: max * (u >= 1 ? 0.85 + 0.15 * Math.sin(ph * 0.55) : u), fade: 0 };
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
  if (cur) { _hp.fromArray(cur.meta.headPivot).applyQuaternion(cur.root.quaternion).add(cur.root.position); dSub = Math.max(0.5, Math.min(dSub, camera.position.distanceTo(_hp) - 0.3)); }
  flash.intensity = 5.2 * dSub * dSub;
  flash.position.copy(camera.position).addScaledVector(camera.up, 0.08);
  flash.target.position.copy(camera.position).addScaledVector(fwd, 5);
  // the lantern held low in the left hand, its flame flickering
  lantern.position.copy(camera.position).addScaledVector(right, -0.32).addScaledVector(camera.up, -0.42).addScaledVector(fwd, 0.25);
  lantern.target.position.copy(camera.position).addScaledVector(fwd, 5).addScaledVector(camera.up, -0.6);
  lantern.intensity = 22 * Math.min(1, Math.max(0.3, (dSub * dSub) / 10)) * (0.9 + 0.06 * Math.sin(t * 13) + 0.04 * Math.sin(t * 29 + 1));
  const lp = mode => (mode === 'ir' ? flash.position : lantern.position);
  if (cur) cur.own.uLightP.value.copy(lp(lightMode));
  lightP.value.copy(lp(lightMode));
}

// ---------------- post: bloom on the eyes, then grain, vignette and the trail camera's grey ----------------
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.95, 0.55, 0.9);
composer.addPass(bloom);
composer.addPass(new OutputPass());
const grade = new ShaderPass({
  uniforms: { tDiffuse: { value: null }, uIR: { value: 1 }, uTime: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) } },
  vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uIR, uTime; uniform vec2 uRes; varying vec2 vUv;
    float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 px = 1.0 / uRes;
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      vec3 b = (texture2D(tDiffuse, vUv + px * vec2(1.4, 0.4)).rgb + texture2D(tDiffuse, vUv - px * vec2(1.4, 0.4)).rgb + texture2D(tDiffuse, vUv + px * vec2(-0.4, 1.4)).rgb + texture2D(tDiffuse, vUv - px * vec2(-0.4, 1.4)).rgb) * 0.25;
      c = mix(c, b, 0.55 * uIR);
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(c, vec3(pow(l, 1.12)), uIR);
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
  $('fade').style.opacity = 0; snd.restore();
  cur = M; scene.add(M.root); M.st = newState();
  await loadCows; layoutRow(M);
  setView(view.mode);
  $('loading').hidden = true;
}
$('mons').innerHTML = ORDER.map((id) => `<button class="chip" data-v="${id}">${INFO[id].chip}</button>`).join('');
$('mons').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) setMonster(b.dataset.v); });
$('light').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) setLight(b.dataset.v); });
$('view').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) setView(b.dataset.v); });
const busy = () => !cur || cur.st.eat >= 0 || cur.st.scare >= 0;
$('pounce').addEventListener('click', () => { snd.unlock(); if (busy()) return; cur.st.eat = 0; cur.st.fired = {}; });
$('scare').addEventListener('click', () => { snd.unlock(); if (busy()) return; cur.st.scare = 0; cur.st.fired = {}; cur.st.scareKind = scareKind; cur.st.scareSide = Math.random() < 0.5 ? 1 : -1; });
$('gape').addEventListener('click', () => { snd.unlock(); if (!busy()) { cur.st.gape = 1; cur.st.gapeHold = 1.6; cur.st.gapeT = rr(4, 7); snd.gape(cur.id); } });
$('sound').addEventListener('click', () => { snd.setEnabled(!snd.enabled); snd.unlock(); $('sound').textContent = snd.enabled ? '소리 켜짐' : '소리 꺼짐'; $('sound').classList.toggle('on', snd.enabled); });
$('pounceSel').innerHTML = Object.entries(POUNCE_KINDS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('');
$('scareSel').innerHTML = Object.entries(SCARE_KINDS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('');
$('pounceSel').addEventListener('change', (e) => { pounceKind = e.target.value; if (!cur || cur.st.eat < 0) snd.preview(pounceKind); }); // pick one, hear it
$('scareSel').addEventListener('change', (e) => { scareKind = e.target.value; });
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
  animateRow(dt);
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
  setPounce(k) { pounceKind = k; }, setScare(k) { scareKind = k; }, snd,
  pose(o) { if (!cur) return; Object.assign(cur.st, o.st || {}); if (o.yaw !== undefined) view.yaw = o.yaw; if (o.pitch !== undefined) view.pitch = o.pitch; if (o.zoom !== undefined) view.zoom = o.zoom; },
};

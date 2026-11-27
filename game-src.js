// Night Herd — the night at the herd. One source, two builds (WITH_COUNTING is set by esbuild --define):
//   WITH_COUNTING=true  → first slice "밤 한 번": count the herd by looking at each cow in the light of the lantern you hold
//   WITH_COUNTING=false → lantern slice: the held lantern on its own
//   WALK=true           → walk slice: a sunny desert day, the herd walks away from you when you come close
// The lantern: walk, raise it, let it go out (by hand, wind or empty oil), relight it only at the campfire.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { fbm } from './cow.js';

const DEBUG = location.hash === '#debug';
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

// ---------------- world layout (same night as the first slice) ----------------
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
const OIL_TIME = 150; // seconds of burn on a full fount
const RELIGHT_DIST = 1.7;
const EXPECTED_COUNT = 10; // the herd is supposed to be ten; it really has eleven
const NUM = ['하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉', '열', '열하나', '열둘', '열셋'];

// ---------------- renderer ----------------
const ui = {
  start: $('start'), startBtn: $('startBtn'), loadTxt: $('loadTxt'), sub: $('sub'), joy: $('joy'), knob: $('knob'),
  fps: $('fps'), hint: $('hint'), resume: $('resume'), prompt: $('prompt'), lampBtn: $('lampBtn'), raiseBtn: $('raiseBtn'),
  end: $('end'), again: $('again'), fsBtn: $('fsBtn'),
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
renderer.autoClear = false;
$('stage').appendChild(renderer.domElement);
const canvas = renderer.domElement;
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(new THREE.Color(0.0035, 0.004, 0.0055), 0.009);
const camera = new THREE.PerspectiveCamera(60, 16 / 9, 0.05, 1200);
camera.rotation.order = 'YXZ';

const U = { uLanternPos: { value: new THREE.Vector3() }, uEyeGain: { value: 200 }, uEyeSelf: { value: 0 }, uTime: { value: 0 } };
const NOISE_GLSL = /* glsl */ `
float hash13(vec3 p){ p = fract(p*0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vnoise3(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(hash13(i), hash13(i+vec3(1,0,0)), f.x), mix(hash13(i+vec3(0,1,0)), hash13(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(hash13(i+vec3(0,0,1)), hash13(i+vec3(1,0,1)), f.x), mix(hash13(i+vec3(0,1,1)), hash13(i+vec3(1,1,1)), f.x), f.y), f.z)*2.0-1.0; }
`;

// ---------------- cows ----------------
// the cow rig, shared by the visible mesh and its shadow: head, neck, tail and four walking legs
const COW_RIG_DECL = `
  attribute vec4 aRig; attribute vec4 aLeg;
  uniform vec4 uPose; uniform float uTail; uniform vec4 uGait;
  mat3 rotYP(float yaw, float pitchUp){ float cy = cos(yaw), sy = sin(yaw), ca = cos(-pitchUp), sa = sin(-pitchUp);
    return mat3(cy,0.0,-sy, 0.0,1.0,0.0, sy,0.0,cy) * mat3(1.0,0.0,0.0, 0.0,ca,sa, 0.0,-sa,ca); }
  mat3 rotZ(float a){ float c = cos(a), s = sin(a); return mat3(c,s,0.0, -s,c,0.0, 0.0,0.0,1.0); }
  mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1.0,0.0,0.0, 0.0,c,s, 0.0,-s,c); }`;
const COW_RIG_MATS = `
  const vec3 N0 = vec3(0.0, 1.08, 0.58); const vec3 H0 = vec3(0.0, 1.22, 1.03); const vec3 T0 = vec3(0.0, 1.2, -0.9);
  mat3 rH = rotYP(uPose.z * aRig.y, uPose.w * aRig.y);
  mat3 rN = rotYP(uPose.x * aRig.x, uPose.y * aRig.x);
  mat3 rT = rotZ(uTail * aRig.z);
  // legs: a four-beat walk (left hind, left fore, right hind, right fore); the knee or hock folds, then the whole leg swings
  mat3 rKnee = mat3(1.0), rHip = mat3(1.0); vec3 kneeP = vec3(0.0), hipP = vec3(0.0);
  float legId = floor(aLeg.x * 255.0 / 50.0 + 0.5);
  if (legId > 0.5 && uGait.y > 0.001) {
    bool front = legId < 2.5;
    float side = (legId == 1.0 || legId == 3.0) ? 1.0 : -1.0;
    float off = legId == 1.0 ? 0.75 : (legId == 2.0 ? 0.25 : (legId == 3.0 ? 0.5 : 0.0));
    float ps = fract(uGait.x + off);
    float A = front ? 0.3 : 0.28, a, k;
    if (ps < 0.62) { a = mix(A, -A, ps / 0.62); k = 0.0; }
    else { float sw = (ps - 0.62) / 0.38; a = mix(-A, A, sw*sw*(3.0-2.0*sw)); k = sin(3.14159 * sw) * (front ? 0.95 : 0.75); }
    a *= uGait.y; k *= uGait.y;
    hipP = front ? vec3(0.17*side, 0.95, 0.43) : vec3(0.2*side, 0.95, -0.46);
    kneeP = front ? vec3(0.16*side, 0.43, 0.488) : vec3(0.17*side, 0.5, -0.736);
    rKnee = rotX(k * aLeg.z);
    rHip = rotX(-a * aLeg.y);
  }`;
const COW_RIG_POS = `
  transformed = kneeP + rKnee * (transformed - kneeP);
  transformed = hipP + rHip * (transformed - hipP);
  transformed = T0 + rT * (transformed - T0);
  transformed = H0 + rH * (transformed - H0);
  transformed = N0 + rN * (transformed - N0);`;
// the shadow a cow casts has to move the same way the cow does
function cowDepthMaterial(own) {
  const m = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, own);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', `#include <common>\n${COW_RIG_DECL}`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>\n${COW_RIG_MATS}\n${COW_RIG_POS}`);
  };
  m.customProgramCacheKey = () => 'cow-depth-v1';
  return m;
}
function cowMaterial(coat, face, phase) {
  const m = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.82, metalness: 0, sheen: 0.4, sheenRoughness: 0.6, sheenColor: new THREE.Color(coat * 0.6, coat * 0.56, coat * 0.48) });
  const own = {
    uBody: { value: new THREE.Color(coat, coat * 0.93, coat * 0.8) }, uFace: { value: new THREE.Color(face, face * 0.93, face * 0.8) },
    uPhase: { value: phase }, uPose: { value: new THREE.Vector4() }, uTail: { value: 0 }, uGait: { value: new THREE.Vector4() },
  };
  m.userData.own = own;
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, U, own);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        attribute vec4 aMat; attribute vec4 aExt4; attribute vec3 aHead;
        uniform float uTime; uniform float uPhase;
        varying vec4 vMat; varying float vEye; varying vec3 vObj; varying vec3 vWP; varying vec3 vExt; varying vec3 vHead;
        ${COW_RIG_DECL}`)
      .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
        ${COW_RIG_MATS}
        objectNormal = rN * (rH * (rT * (rHip * (rKnee * objectNormal))));`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vMat = aMat; vEye = aExt4.x; vExt = aExt4.yzw; vObj = position; vHead = aHead;
        { float br = sin(uTime*1.3 + uPhase)*0.5 + 0.5;
          float barrel = smoothstep(0.6, 0.85, position.y) * (1.0 - smoothstep(1.15, 1.32, position.y)) * (1.0 - smoothstep(0.5, 0.85, abs(position.z + 0.05))) * (1.0 - aRig.x);
          transformed += normal * barrel * br * 0.007; }
        ${COW_RIG_POS}`)
      .replace('#include <fog_vertex>', '#include <fog_vertex>\n vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>\nuniform vec3 uLanternPos; uniform float uEyeGain; uniform float uEyeSelf; uniform vec3 uBody; uniform vec3 uFace; varying vec4 vMat; varying float vEye; varying vec3 vObj; varying vec3 vWP; varying vec3 vExt; varying vec3 vHead;\n${NOISE_GLSL}`)
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
          totalEmissiveRadiance += vEye * vec3(0.95,1.0,0.92) * (uEyeGain * pow(fc, 6.0) / pow(max(dl, 1.3), 1.5) + uEyeSelf * pow(fc, 4.0)); }`);
  };
  m.customProgramCacheKey = () => 'cow-rig-v3';
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
    const rig = new Uint8Array(buf, o, vc * 4); o += vc * 4;
    const leg = m.leg ? new Uint8Array(buf, o, vc * 4) : new Uint8Array(vc * 4); // older bakes have no leg weights
    const pos = new Float32Array(vc * 3), head = new Float32Array(vc * 3);
    for (let i = 0; i < vc * 3; i++) { pos[i] = pos16[i] * m.ps; head[i] = head16[i] * m.hs; }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(new Int8Array(nrm), 3, true));
    g.setAttribute('aMat', new THREE.BufferAttribute(new Uint8Array(mat), 4, true));
    g.setAttribute('aExt4', new THREE.BufferAttribute(new Uint8Array(ext), 4, true));
    g.setAttribute('aRig', new THREE.BufferAttribute(new Uint8Array(rig), 4, true));
    g.setAttribute('aLeg', new THREE.BufferAttribute(new Uint8Array(leg), 4, true));
    g.setAttribute('aHead', new THREE.BufferAttribute(head, 3));
    g.setIndex(new THREE.BufferAttribute(new Uint16Array(idx), 1));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0.8, 0), 2.2); // heads move: keep a generous bound
    onProgress(++done / meta.length);
    return g;
  }));
}


// ---------------- environment ----------------
// no invisible walls: the ground, grass, plants, sky and horizon travel with the player, so the desert never ends
const WORLD_FOLLOW = [];
const GRASS_U = { uGC: { value: new THREE.Vector2(0, -4) } };
const PLANT_PER = 120; // the cactus and brush field repeats every 120 m around you
const PLANT_U = { uPC: { value: new THREE.Vector2() } };
function followWorld(x, z) {
  for (const o of WORLD_FOLLOW) { o.position.x = x; o.position.z = z; }
  GRASS_U.uGC.value.set(x, z - 4); // grass window, biased toward the herd
  PLANT_U.uPC.value.set(x, z);
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
          // Sonoran desert floor: tan gravel, pale sandy washes, dark and light pebbles
          vec3 col = mix(vec3(0.15,0.125,0.095), vec3(0.21,0.175,0.13), smoothstep(0.35,0.7,a*0.6+b*0.4));
          float wash = smoothstep(0.6, 0.8, vnoise3(vec3(q.x*0.07, 0.0, q.z*0.22))*0.5+0.5);
          col = mix(col, vec3(0.26,0.225,0.17), wash*0.55);
          float peb = vnoise3(q*38.0)*0.5+0.5;
          col *= 0.86 + 0.26*smoothstep(0.5, 0.8, peb) - 0.2*smoothstep(0.72, 0.9, c3);
          float burnt = ${WALK ? '0.0' : '1.0'} * (1.0 - smoothstep(0.5, 1.2, length(vWP2.xz - vec2(${FIRE_POS.x.toFixed(2)}, ${FIRE_POS.z.toFixed(2)})))); // the campfire's scorch (no campfire by day)
          col = mix(col, vec3(0.03,0.025,0.02), burnt);
          col *= (0.7 + 0.45*c2) * (0.85 + 0.3*c3);
          diffuseColor.rgb = col; }`);
  };
  const mesh = new THREE.Mesh(g, m);
  WORLD_FOLLOW.push(mesh);
  groundMesh = mesh;
  return mesh;
}
let groundMesh = null;

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
  const m = new THREE.MeshStandardMaterial({ color: 0x8d7c55, roughness: 0.95, side: THREE.DoubleSide }); // dry desert bunchgrass
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
    if (Math.random() > Math.pow(clump, 2.2) * 2.2 - 0.12) continue; // tufts with bare ground between
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

// the horizon: two ranges of jagged southern-Arizona mountains, dark against the night haze
const RIDGE_U = { uHaze: { value: new THREE.Color() }, uLift: { value: 0 } };
function makeRidges() {
  const grp = new THREE.Group();
  const mat = new THREE.ShaderMaterial({
    fog: false, side: THREE.DoubleSide, uniforms: RIDGE_U,
    vertexShader: 'attribute float aT; varying float vT; void main(){ vT = aT; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: 'uniform vec3 uHaze; uniform float uLift; varying float vT; void main(){ gl_FragColor = vec4(uHaze * mix(vT, 1.0, uLift), 1.0); }',
  });
  const layer = (R, base, amp, seed, tBottom, tTop) => {
    const segs = 420, pos = [], tt = [], idx = [];
    for (let i = 0; i <= segs; i++) {
      const a = -Math.PI + (2 * Math.PI) * (i / segs), x = Math.sin(a) * R, z = -Math.cos(a) * R;
      const ridge = 1 - Math.abs(fbm(a * 5.0, seed, 0.7, 4)); // sharp crests
      const h = base + amp * ridge * ridge + 2.2 * fbm(a * 60.0, seed + 3.1, 1.3, 2);
      pos.push(x, -4, z, x, h, z); tt.push(tBottom, tTop);
      if (i < segs) { const b = 2 * i; idx.push(b, b + 2, b + 1, b + 1, b + 2, b + 3); }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('aT', new THREE.Float32BufferAttribute(tt, 1));
    g.setIndex(idx);
    return new THREE.Mesh(g, mat);
  };
  grp.add(layer(190, 8, 30, 4.2, 0.95, 0.55), layer(150, 3, 17, 9.7, 0.85, 0.12));
  WORLD_FOLLOW.push(grp);
  return grp;
}

// cactus and brush: instanced, each kept within half a tile of the player, sinking out of sight near the tile edge
function wrapPlantMaterial(mat, key) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uPC = PLANT_U.uPC;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform vec2 uPC;')
      .replace('#include <project_vertex>', `vec4 mvPosition = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
        { mat4 im = instanceMatrix; float per = ${PLANT_PER.toFixed(1)};
          im[3].xz += floor((uPC - im[3].xz) / per + 0.5) * per;
          vec2 off = abs(im[3].xz - uPC);
          mvPosition.xyz *= 1.0 - smoothstep(per * 0.36, per * 0.48, max(off.x, off.y));
          mvPosition = im * mvPosition; }
        #endif
        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;`);
    // only half fogged, so at night they stand as dark shapes against the haze instead of fading into pale ghosts
    sh.fragmentShader = sh.fragmentShader.replace('#include <fog_fragment>', `#ifdef USE_FOG
        float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor * 0.5);
        #endif`);
  };
  mat.customProgramCacheKey = () => key;
  return mat;
}
function saguaroGeometry(h, arms, seed) {
  const R0 = 0.2 + 0.025 * h, prof = [];
  for (let i = 0; i <= 10; i++) prof.push(new THREE.Vector2(R0 * (1 - 0.06 * (i / 10)), (h - R0) * (i / 10)));
  for (let i = 1; i <= 6; i++) { const a = (i / 6) * Math.PI / 2; prof.push(new THREE.Vector2(R0 * 0.94 * Math.cos(a) + 1e-3, h - R0 + R0 * 0.94 * Math.sin(a))); }
  const parts = [new THREE.LatheGeometry(prof, 36)];
  for (let k = 0; k < arms; k++) {
    const ang = seed * 2.1 + k * (2 * Math.PI / arms) + Math.sin(seed + k) * 0.6;
    const dx = Math.cos(ang), dz = Math.sin(ang);
    const ya = h * (0.38 + 0.18 * ((seed * 7 + k * 3) % 5) / 5), up = h * (0.22 + 0.12 * ((seed + k) % 3) / 3), out = 0.55 + 0.25 * ((k + seed) % 2);
    const Ra = R0 * 0.62;
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(dx * R0 * 0.3, ya, dz * R0 * 0.3), new THREE.Vector3(dx * out * 0.7, ya + 0.04, dz * out * 0.7),
      new THREE.Vector3(dx * out, ya + 0.35, dz * out), new THREE.Vector3(dx * out * 1.02, ya + up * 0.7, dz * out * 1.02), new THREE.Vector3(dx * out, ya + up, dz * out),
    ]);
    parts.push(new THREE.TubeGeometry(curve, 20, Ra, 12, false));
    const cap = new THREE.SphereGeometry(Ra, 12, 8); cap.translate(dx * out, ya + up, dz * out); parts.push(cap);
  }
  const g = mergeGeometries(parts);
  // ribs: ripple the surface around the vertical axis
  const P = g.attributes.position;
  for (let i = 0; i < P.count; i++) {
    const x = P.getX(i), z = P.getZ(i), r = Math.hypot(x, z);
    if (r < R0 * 1.05 && r > 1e-4) { const k = 1 + 0.07 * Math.cos(Math.atan2(z, x) * 12); P.setX(i, x * k); P.setZ(i, z * k); }
  }
  g.computeVertexNormals();
  return g;
}
function ocotilloGeometry(seed) {
  const parts = [];
  const n = 9 + (seed % 4);
  for (let i = 0; i < n; i++) {
    const len = 2.6 + 2.2 * ((Math.sin(seed * 13.7 + i * 4.1) + 1) / 2);
    const g = new THREE.CylinderGeometry(0.012, 0.035, len, 5, 3, false);
    g.translate(0, len / 2, 0);
    const lean = 0.18 + 0.4 * ((Math.sin(seed + i * 2.3) + 1) / 2), turn = (i / n) * Math.PI * 2 + seed;
    g.rotateZ(lean); g.rotateY(turn);
    parts.push(g);
  }
  return mergeGeometries(parts);
}
function shrubGeometry(seed) {
  const parts = [];
  for (let i = 0; i < 5; i++) {
    const r = 0.32 + 0.22 * ((Math.sin(seed * 3.3 + i * 1.7) + 1) / 2);
    const g = new THREE.IcosahedronGeometry(r, 1);
    g.scale(1, 0.75, 1);
    g.translate(Math.cos(i * 2.4 + seed) * 0.35, r * 0.6 + 0.05 * i, Math.sin(i * 2.4 + seed) * 0.35);
    parts.push(g);
  }
  return mergeGeometries(parts.map((p) => { p.deleteAttribute('uv'); return p; }));
}
const SAGUAROS = []; // base positions and trunk radii, so you can't walk through them
function makeDesertPlants() {
  const grp = new THREE.Group();
  const clear = (x, z) => x > -8 && x < 9 && z > -17 && z < 6; // the camp and the herd stay open
  const spot = () => { let x, z; do { x = (Math.random() - 0.5) * PLANT_PER; z = (Math.random() - 0.5) * PLANT_PER; } while (clear(x, z)); return [x, z]; };
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), S = new THREE.Vector3(), P = new THREE.Vector3(), Y = new THREE.Vector3(0, 1, 0);
  const cactusMat = wrapPlantMaterial(new THREE.MeshStandardMaterial({ color: new THREE.Color(0.15, 0.19, 0.12), roughness: 0.8 }), 'plant-cactus');
  [[7.5, 2, 1], [9.5, 3, 2], [4.5, 0, 3], [6.2, 1, 4]].forEach(([h, arms, seed], v) => {
    const mesh = new THREE.InstancedMesh(saguaroGeometry(h, arms, seed), cactusMat, 12);
    for (let i = 0; i < 12; i++) {
      const [x, z] = spot(), s = 0.8 + Math.random() * 0.4;
      M.compose(P.set(x, 0, z), Q.setFromAxisAngle(Y, Math.random() * Math.PI * 2), S.set(s, s, s));
      mesh.setMatrixAt(i, M);
      SAGUAROS.push({ x, z, r: (0.2 + 0.025 * h) * s + 0.05 });
    }
    mesh.frustumCulled = false; grp.add(mesh);
  });
  const stemMat = wrapPlantMaterial(new THREE.MeshStandardMaterial({ color: new THREE.Color(0.12, 0.1, 0.08), roughness: 0.9 }), 'plant-stem');
  [1, 2].forEach((seed) => {
    const mesh = new THREE.InstancedMesh(ocotilloGeometry(seed), stemMat, 8);
    for (let i = 0; i < 8; i++) { const [x, z] = spot(); M.compose(P.set(x, 0, z), Q.setFromAxisAngle(Y, Math.random() * 6.28), S.setScalar(0.8 + Math.random() * 0.4)); mesh.setMatrixAt(i, M); }
    mesh.frustumCulled = false; grp.add(mesh);
  });
  const brushMat = wrapPlantMaterial(new THREE.MeshStandardMaterial({ color: new THREE.Color(0.1, 0.11, 0.065), roughness: 1.0 }), 'plant-brush');
  [1, 2, 3].forEach((seed) => {
    const n = 90, mesh = new THREE.InstancedMesh(shrubGeometry(seed), brushMat, n);
    for (let i = 0; i < n; i++) { const [x, z] = spot(); M.compose(P.set(x, 0, z), Q.setFromAxisAngle(Y, Math.random() * 6.28), S.setScalar(0.6 + Math.random() * 0.9)); mesh.setMatrixAt(i, M); }
    mesh.frustumCulled = false; grp.add(mesh);
  });
  return grp;
}

// tumbleweeds: they rest, and roll past when a gust comes through
const WIND = new THREE.Vector3(1, 0, 0.35).normalize();
const tumbles = [];
function makeTumbleweeds(scene) {
  const parts = [];
  for (let i = 0; i < 52; i++) {
    const len = 0.16 + Math.random() * 0.3, g = new THREE.CylinderGeometry(0.005, 0.008, len, 4, 1, true);
    const dir = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir));
    const c = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize().multiplyScalar(0.05 + Math.random() * 0.17);
    g.translate(c.x, c.y, c.z);
    parts.push(g);
  }
  const geo = mergeGeometries(parts);
  const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(0.4, 0.33, 0.21), roughness: 1, side: THREE.DoubleSide });
  for (let i = 0; i < 4; i++) {
    const s = 0.8 + Math.random() * 0.5, mesh = new THREE.Mesh(geo, mat);
    mesh.scale.setScalar(s); scene.add(mesh);
    tumbles.push({ mesh, r: 0.28 * s, pos: new THREE.Vector3(), speed: 0, k: 0.8 + Math.random() * 0.4, side: Math.random() - 0.5, phase: Math.random() * 6 });
  }
}
function spawnTumble(t, initial) {
  const back = initial ? (Math.random() - 0.5) * 20 : 12 + Math.random() * 6, lat = (Math.random() - 0.5) * 24;
  t.pos.set(camera.position.x - WIND.x * back + WIND.z * lat, t.r, camera.position.z - WIND.z * back - WIND.x * lat);
  t.speed = 0;
}
const _tq = new THREE.Quaternion(), _tAxis = new THREE.Vector3(WIND.z, 0, -WIND.x);
function tumbleStep(dt, gust) {
  for (const t of tumbles) {
    const dx = t.pos.x - camera.position.x, dz = t.pos.z - camera.position.z;
    if (Math.hypot(dx, dz) > 28 || dx * WIND.x + dz * WIND.z > 20) spawnTumble(t, false);
    t.speed = damp(t.speed, (gust ? 3.0 : 0.12) * t.k, gust ? 1.4 : 0.5, dt);
    t.pos.x += (WIND.x + WIND.z * t.side * 0.2) * t.speed * dt;
    t.pos.z += (WIND.z - WIND.x * t.side * 0.2) * t.speed * dt;
    // it bounces off cows and the fire
    const bump = (cx, cz, r) => { const ex = t.pos.x - cx, ez = t.pos.z - cz, d = Math.hypot(ex, ez), m = r + t.r; if (d < m && d > 1e-4) { t.pos.x = cx + (ex / d) * m; t.pos.z = cz + (ez / d) * m; t.speed *= 0.6; } };
    for (const c of cows) for (const b of c.blockers) bump(b.x, b.z, b.r);
    bump(FIRE_POS.x, FIRE_POS.z, 0.7);
    t.phase += dt * t.speed * 2.4;
    t.mesh.position.set(t.pos.x, t.r + Math.abs(Math.sin(t.phase)) * 0.22 * Math.min(1, t.speed / 2.5), t.pos.z);
    t.mesh.quaternion.premultiply(_tq.setFromAxisAngle(_tAxis, (t.speed * dt) / t.r));
  }
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



// ---------------- post: painterly (Kuwahara) + grading ----------------
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
    tDiffuse: { value: null }, uRes: { value: new THREE.Vector2(960, 540) }, uCount: { value: 0 }, uExp: { value: 0.26 }, uDesat: { value: 0 },
    uSeed: { value: 1 }, uFade: { value: 0 },
  },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uCount, uExp, uDesat, uSeed, uFade; varying vec2 vUv;
    vec3 aces(vec3 x){ const float a=2.51,b=0.03,c=2.43,d=0.59,e=0.14; return clamp((x*(a*x+b))/(x*(c*x+d)+e),0.0,1.0); }
    float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
    // the counting look: the picture drops to a low, smeared resolution
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
      c *= uExp * mix(1.0, 0.81, k);
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      vec3 graded = c * vec3(1.03, 0.98, 0.92) + vec3(0.0, 0.0006, 0.0018) * (1.0 - smoothstep(0.0, 0.05, l));
      c = mix(graded, vec3(l) * vec3(1.0, 0.985, 0.96), k * 0.95);
      c = mix(c, vec3(l) * vec3(0.95, 0.98, 1.04), uDesat * (1.0 - k * 0.95));
      c = aces(c);
      c = mix(c, c*c*(3.0-2.0*c), 0.25 + 0.1*k);
      vec2 q = vUv - 0.5; q.x *= uRes.x / uRes.y;
      c *= mix(1.0, smoothstep(1.15, 0.25, length(q)), 0.35 + 0.2*k + 0.25*uDesat);
      c = pow(c, vec3(1.0/2.2));
      vec2 px = floor(vUv * mix(uRes, uRes*0.5, k));
      float n = hash12(px + uSeed) + hash12(px*1.37 + uSeed*3.1) - 1.0;
      float lum = dot(c, vec3(0.3333));
      c += n * max(mix(0.014, 0.06, k), mix(0.014, 0.05, uDesat)) * (0.45 + 0.9*(1.0 - lum));
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

class LanternSound extends Sound {
  init() {
    super.init();
    if (!this.ctx) return;
    const ctx = this.ctx;
    // quiet flame hiss right by your hand
    this.hiss = ctx.createGain(); this.hiss.gain.value = 0;
    const n = this.loopNoise(), f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 0.5;
    n.connect(f).connect(this.hiss).connect(this.master);
  }
  burst(type, freq, q, gain, dur, attack = 0.005) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, s = this.ctx.createBufferSource(), f = this.ctx.createBiquadFilter(), g = this.ctx.createGain();
    s.buffer = this.noise; f.type = type; f.frequency.value = freq; f.Q.value = q;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    s.connect(f).connect(g).connect(this.master); s.start(t, Math.random() * 1.5, dur + 0.1);
    return { f, t };
  }
  gust() {
    if (!this.ctx) return;
    const b = this.burst('bandpass', 420, 0.7, 0.16, 2.4, 0.7);
    if (b) { b.f.frequency.setValueAtTime(300, b.t); b.f.frequency.linearRampToValueAtTime(820, b.t + 1.2); b.f.frequency.linearRampToValueAtTime(380, b.t + 2.4); }
  }
  click() {
    this.burst('highpass', 3200, 0.7, 0.12, 0.03);
    if (!this.ctx) return;
    const t = this.ctx.currentTime, o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.frequency.value = 1100; g.gain.setValueAtTime(0.04, t); g.gain.exponentialRampToValueAtTime(0.0005, t + 0.04);
    o.connect(g).connect(this.master); o.start(t); o.stop(t + 0.05);
  }
  puff() { this.burst('lowpass', 500, 0.5, 0.18, 0.22, 0.01); }
  whoosh() {
    const b = this.burst('bandpass', 400, 0.9, 0.22, 0.7, 0.05);
    if (b) b.f.frequency.exponentialRampToValueAtTime(1800, b.t + 0.45);
  }
  creak(strength) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, o = this.ctx.createOscillator(), f = this.ctx.createBiquadFilter(), g = this.ctx.createGain();
    o.type = 'sawtooth'; const f0 = rand(1300, 1700);
    o.frequency.setValueAtTime(f0, t); o.frequency.linearRampToValueAtTime(f0 * rand(1.1, 1.3), t + 0.09);
    f.type = 'bandpass'; f.frequency.value = 2400; f.Q.value = 6;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.012 * strength, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0003, t + 0.12);
    o.connect(f).connect(g).connect(this.master); o.start(t); o.stop(t + 0.14);
  }
  sputter() { this.burst('highpass', rand(1500, 3000), 0.8, 0.05, 0.04); }
  setHiss(level) { if (this.hiss) this.hiss.gain.value = 0.006 * level; }
}
const sound = new LanternSound();

// ---------------- the hand and the lantern (drawn in their own camera space) ----------------
const vmScene = new THREE.Scene();
const vmCamera = new THREE.PerspectiveCamera(70, 16 / 9, 0.01, 10);
const VM_SCALE = 0.85;
const handPivot = new THREE.Group(); // origin = centre of the bail grip
handPivot.scale.setScalar(VM_SCALE);
vmScene.add(handPivot);
const lanternSwing = new THREE.Group(); // hangs from the grip, follows gravity
handPivot.add(lanternSwing);
const FLAME_LOCAL = new THREE.Vector3(0, -0.248, 0);
const LU = { uTime: { value: 0 }, uLevel: { value: 1 }, uBend: { value: 0 } };

function wornMetal(color, metal, rough) {
  const m = new THREE.MeshStandardMaterial({ color, metalness: metal, roughness: rough, fog: false });
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vLP;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvLP = position;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>\nvarying vec3 vLP;\n${NOISE_GLSL}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        { float n = vnoise3(vLP*90.0)*0.5+0.5; float n2 = vnoise3(vLP*21.0)*0.5+0.5;
          float wear = smoothstep(0.62, 0.8, n*0.6 + n2*0.5);
          diffuseColor.rgb = mix(diffuseColor.rgb * (0.8 + 0.35*n2), vec3(0.32,0.2,0.12), smoothstep(0.55, 0.9, n2)*0.35);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.55,0.52,0.48), wear*0.5); }`)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\n roughnessFactor = clamp(roughnessFactor + (vnoise3(vLP*60.0))*0.15, 0.05, 1.0);');
  };
  return m;
}
function lathe(points, mat, segs = 40) {
  const g = new THREE.LatheGeometry(points.map(([r, y]) => new THREE.Vector2(r, y)), segs);
  g.computeVertexNormals();
  return new THREE.Mesh(g, mat);
}
function tube(points, radius, mat, segs = 48, closed = false) {
  const c = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)), closed);
  return new THREE.Mesh(new THREE.TubeGeometry(c, segs, radius, 8, closed), mat);
}
let glassMat, flameMesh, glowMesh;
function makeLantern() {
  const paint = wornMetal(0x1d1b19, 0.55, 0.5);
  const brass = wornMetal(0xa88444, 1.0, 0.32);
  const wood = new THREE.MeshStandardMaterial({ color: 0x3a2616, roughness: 0.75, fog: false });
  glassMat = new THREE.MeshPhysicalMaterial({ color: 0xfff2dc, roughness: 0.06, metalness: 0, transparent: true, opacity: 0.2, depthWrite: false, side: THREE.DoubleSide, emissive: new THREE.Color(1.0, 0.55, 0.2), emissiveIntensity: 0, fog: false, clearcoat: 1, clearcoatRoughness: 0.05 });
  const L = lanternSwing;
  L.add(lathe([[0, -0.34], [0.066, -0.34], [0.071, -0.336], [0.074, -0.322], [0.072, -0.3], [0.064, -0.285], [0.04, -0.279], [0, -0.278]], paint)); // fount
  L.add(lathe([[0, -0.28], [0.03, -0.28], [0.031, -0.27], [0.028, -0.262], [0.012, -0.258], [0, -0.258]], brass, 28)); // burner
  const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.006, 16), brass);
  knob.rotation.z = Math.PI / 2; knob.position.set(0.04, -0.268, 0); L.add(knob);
  const knobStem = new THREE.Mesh(new THREE.CylinderGeometry(0.0025, 0.0025, 0.012, 8), brass);
  knobStem.rotation.z = Math.PI / 2; knobStem.position.set(0.033, -0.268, 0); L.add(knobStem);
  const globe = lathe([[0.032, -0.265], [0.05, -0.25], [0.058, -0.222], [0.056, -0.185], [0.046, -0.158], [0.036, -0.142]], glassMat, 40);
  globe.renderOrder = 2; L.add(globe);
  L.add(lathe([[0, -0.143], [0.045, -0.143], [0.047, -0.138], [0.045, -0.131], [0, -0.13]], paint, 32)); // globe plate
  L.add(lathe([[0, -0.132], [0.06, -0.132], [0.065, -0.122], [0.062, -0.104], [0.05, -0.088], [0.022, -0.08], [0.012, -0.076], [0, -0.075]], paint, 40)); // air chamber
  L.add(lathe([[0, -0.08], [0.012, -0.08], [0.013, -0.072], [0.008, -0.066], [0, -0.065]], paint, 20)); // cap
  for (const sx of [-1, 1]) L.add(tube([[sx * 0.066, -0.29], [sx * 0.077, -0.25], [sx * 0.078, -0.2], [sx * 0.072, -0.15], [sx * 0.064, -0.118]], 0.0075, paint, 32));
  for (let i = 0; i < 4; i++) {
    const a = Math.PI / 4 + (i * Math.PI) / 2, ca = Math.cos(a), sa = Math.sin(a);
    const prof = [[0.04, -0.262], [0.058, -0.248], [0.064, -0.222], [0.062, -0.185], [0.052, -0.158], [0.042, -0.146]];
    L.add(tube(prof.map(([r, y]) => [ca * r, y, sa * r]), 0.0016, paint, 24));
  }
  for (const [y, r] of [[-0.236, 0.0635], [-0.18, 0.0605]]) {
    const pts = []; for (let i = 0; i < 24; i++) { const a = (i / 24) * Math.PI * 2; pts.push([Math.cos(a) * r, y, Math.sin(a) * r]); }
    L.add(tube(pts, 0.0017, paint, 64, true));
  }
  const bail = []; for (let i = 0; i <= 24; i++) { const a = (i / 24) * Math.PI; bail.push([Math.cos(a) * 0.064, -0.112 + Math.sin(a) * 0.112, 0]); }
  L.add(tube(bail, 0.0024, paint, 48));
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.0105, 0.0105, 0.056, 14), wood);
  grip.rotation.z = Math.PI / 2; L.add(grip);
  // flame: three crossed quads with a flickering shader, plus a soft glow sprite inside the glass
  const flameMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: LU, fog: false,
    vertexShader: 'uniform float uBend; uniform float uTime; varying vec2 vUv; void main(){ vUv = uv; vec3 p = position; p.x += uBend * (uv.y*uv.y) * 0.012 + sin(uTime*13.0 + uv.y*6.0)*0.0012*uv.y; gl_Position = projectionMatrix*modelViewMatrix*vec4(p,1.0); }',
    fragmentShader: `uniform float uTime; uniform float uLevel; varying vec2 vUv; ${NOISE_GLSL}
      void main(){ vec2 p = vUv - vec2(0.5, 0.0);
        float h = 0.25 + 0.75*uLevel;
        float n = vnoise3(vec3(p.x*6.0, vUv.y*4.0 - uTime*3.0, uTime*0.7))*0.5+0.5;
        float w = (0.5 - abs(p.x)*2.0/max(0.15, 1.0 - vUv.y/h*0.9)) * 2.0;
        float body = smoothstep(0.0, 0.25, w) * smoothstep(h, h*0.55, vUv.y + n*0.12) * smoothstep(0.0, 0.08, vUv.y);
        vec3 col = mix(vec3(1.0,0.35,0.05), vec3(1.0,0.86,0.55), smoothstep(0.2, 0.9, body)) * body * 9.0 * uLevel;
        col += vec3(0.25,0.35,1.0) * smoothstep(0.12, 0.0, vUv.y) * smoothstep(0.0, 0.3, w) * 1.5 * uLevel;
        gl_FragColor = vec4(col, body); }`,
  });
  const fq = new THREE.PlaneGeometry(0.02, 0.05); fq.translate(0, 0.025, 0);
  flameMesh = new THREE.Group();
  for (let i = 0; i < 3; i++) { const q = new THREE.Mesh(fq, flameMat); q.rotation.y = (i / 3) * Math.PI; q.renderOrder = 3; flameMesh.add(q); }
  flameMesh.position.set(0, -0.258, 0);
  L.add(flameMesh);
  const gc = document.createElement('canvas'); gc.width = gc.height = 64;
  const g2d = gc.getContext('2d'), grd = g2d.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.2, 'rgba(255,255,255,0.5)'); grd.addColorStop(0.55, 'rgba(255,255,255,0.12)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g2d.fillStyle = grd; g2d.fillRect(0, 0, 64, 64);
  const glowMat = new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(gc), color: new THREE.Color(1.0, 0.55, 0.2), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.0, fog: false });
  glowMesh = new THREE.Sprite(glowMat); glowMesh.scale.set(0.1, 0.1, 1); glowMesh.position.copy(FLAME_LOCAL); glowMesh.renderOrder = 4;
  L.add(glowMesh);
}
function handMaterial() {
  // worn buckskin work glove
  const m = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.62, metalness: 0, sheen: 1, sheenRoughness: 0.5, sheenColor: new THREE.Color(0.26, 0.2, 0.14), fog: false });
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute vec2 aAtt; varying vec2 vAtt; varying vec3 vLP;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvAtt = aAtt; vLP = position;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>\nvarying vec2 vAtt; varying vec3 vLP;\n${NOISE_GLSL}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        { vec3 c = vec3(0.34, 0.23, 0.135);
          float g1 = vnoise3(vLP*420.0)*0.5+0.5, g2 = vnoise3(vLP*90.0)*0.5+0.5;
          c *= (0.8 + 0.3*g2) * (0.9 + 0.14*g1);
          float dirt = smoothstep(0.55, 0.85, vnoise3(vLP*48.0 + 3.1)*0.5+0.5);
          c = mix(c, c*vec3(0.55, 0.5, 0.46), dirt*0.6);
          c *= mix(1.0, vAtt.x, 0.85);
          diffuseColor.rgb = c; }`)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\n roughnessFactor = clamp(roughnessFactor + (vnoise3(vLP*140.0))*0.1, 0.4, 0.85);');
  };
  return m;
}
// the coat sleeve: a hemmed wool tube from the wrist, an elbow and an upper arm, driven by a two-bone arm
function woolMaterial() {
  const m = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.95, metalness: 0, sheen: 1, sheenRoughness: 0.7, sheenColor: new THREE.Color(0.075, 0.07, 0.068), side: THREE.DoubleSide, fog: false });
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', `#include <common>\nvarying vec3 vLP;\n${NOISE_GLSL}`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        { float ang = atan(position.z, position.x);
          float bunch = 1.0 + 1.3*exp(-max(position.y - 0.02, 0.0)*28.0); // cloth bunches up just behind the hem
          float fold = (0.0024*sin(position.y*85.0 + sin(position.y*21.0)*2.0 + ang*1.5) + 0.0016*vnoise3(position*38.0)) * bunch;
          transformed += normal * fold * smoothstep(0.012, 0.03, position.y); }
        vLP = position;`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>\nvarying vec3 vLP;\n${NOISE_GLSL}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        { vec3 c = vec3(0.05, 0.043, 0.038);
          c *= 0.8 + 0.4*(vnoise3(vLP*300.0)*0.5+0.5);
          c *= 0.7 + 0.3*smoothstep(-0.012, 0.004, vLP.y); // the inside of the hem
          diffuseColor.rgb = c; }`);
  };
  return m;
}
const ARM = {
  wristLocal: new THREE.Vector3(0.0208, 0.0162, 0.1410), // the wrist joint in glove space (metres)
  wristAxis: new THREE.Vector3(0.3384, -0.3644, 0.8676), // the direction the glove's wrist points
  shoulder: new THREE.Vector3(0.26, -0.3, 0.02), // camera space
  fore: 0.26 * VM_SCALE, upper: 0.29 * VM_SCALE,
  pole: new THREE.Vector3(0.75, -0.65, 0.1).normalize(),
};
const arm = { root: new THREE.Group(), W: new THREE.Vector3(), E: new THREE.Vector3(), f: new THREE.Vector3(), u: new THREE.Vector3() };
vmScene.add(arm.root);
function makeArm() {
  const wool = woolMaterial();
  const L = 0.26 + 0.03;
  const prof = [[0.0355, -0.0115], [0.041, -0.0135], [0.0448, -0.0095], [0.0462, -0.002], [0.0456, 0.008], [0.044, 0.015]];
  for (let y = 0.022; y <= L + 1e-6; y += 0.007) prof.push([0.0438 + 0.008 * (y / L), y]);
  const g = new THREE.LatheGeometry(prof.map(([r, y]) => new THREE.Vector2(r, y)), 36);
  g.scale(1.08, 1, 1);
  arm.fore = new THREE.Mesh(g, wool);
  arm.elbow = new THREE.Mesh(new THREE.SphereGeometry(0.051, 28, 18), wool);
  const upLen = 0.29 + 0.18;
  const ug = new THREE.CylinderGeometry(0.06, 0.052, upLen, 28, 24, true); ug.translate(0, upLen / 2, 0);
  arm.up = new THREE.Mesh(ug, wool);
  for (const o of [arm.fore, arm.elbow, arm.up]) { o.scale.setScalar(VM_SCALE); arm.root.add(o); }
}
const _ax = new THREE.Vector3(), _px = new THREE.Vector3(), _pz = new THREE.Vector3(), _hx = new THREE.Vector3(), _m4 = new THREE.Matrix4(), _q = new THREE.Quaternion(), _qi = new THREE.Quaternion();
function solveArm() {
  arm.W.copy(ARM.wristLocal); handPivot.localToWorld(arm.W);
  _ax.subVectors(ARM.shoulder, arm.W);
  let d = _ax.length(); _ax.divideScalar(d);
  const a = ARM.fore, b = ARM.upper;
  d = clamp(d, Math.abs(a - b) + 1e-3, a + b - 1e-3);
  const x = (a * a - b * b + d * d) / (2 * d), h = Math.sqrt(Math.max(0, a * a - x * x));
  _px.copy(ARM.pole).addScaledVector(_ax, -ARM.pole.dot(_ax)).normalize();
  arm.E.copy(arm.W).addScaledVector(_ax, x).addScaledVector(_px, h);
  arm.f.subVectors(arm.E, arm.W).normalize();
  arm.u.subVectors(ARM.shoulder, arm.E).normalize();
}
// bend the wrist part of the way toward the forearm so the glove always sits in the sleeve
const _up = new THREE.Vector3();
function alignWrist(k, upCam) {
  for (let it = 0; it < 2; it++) {
    solveArm();
    _hx.copy(ARM.wristAxis).transformDirection(handPivot.matrixWorld);
    _q.setFromUnitVectors(_hx, arm.f); _qi.identity().slerp(_q, k);
    handPivot.quaternion.premultiply(_qi);
    // a lantern only hangs straight if the bail lies level in the fingers: take the roll back out
    _hx.set(1, 0, 0).applyQuaternion(handPivot.quaternion);
    _px.copy(_hx).addScaledVector(upCam, -_hx.dot(upCam)).normalize();
    _q.setFromUnitVectors(_hx, _px);
    handPivot.quaternion.premultiply(_q);
    handPivot.updateMatrixWorld(true);
  }
  solveArm();
}
function placeArm() {
  // the sleeve frame: y along the forearm, x close to the glove's knuckle line
  _hx.set(1, 0, 0).transformDirection(handPivot.matrixWorld);
  _px.copy(_hx).addScaledVector(arm.f, -_hx.dot(arm.f)).normalize();
  _pz.crossVectors(_px, arm.f);
  _m4.makeBasis(_px, arm.f, _pz);
  arm.fore.quaternion.setFromRotationMatrix(_m4); arm.fore.position.copy(arm.W);
  arm.elbow.position.copy(arm.E);
  _hx.copy(_px).addScaledVector(arm.u, -_px.dot(arm.u)).normalize();
  _pz.crossVectors(_hx, arm.u);
  _m4.makeBasis(_hx, arm.u, _pz);
  arm.up.quaternion.setFromRotationMatrix(_m4); arm.up.position.copy(arm.E);
}
async function loadHand() {
  const j = await (await fetch('hand.json')).json();
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
  const mesh = new THREE.Mesh(g, handMaterial());
  handPivot.add(mesh);
}
// lights for the hand and lantern: the flame itself, the campfire (moved into camera space each frame), a faint sky
const vmFlame = new THREE.PointLight(new THREE.Color(1.0, 0.7, 0.38), 1.0, 1.5, 2);
const vmFire = new THREE.PointLight(new THREE.Color(1.0, 0.52, 0.2), 9, 0, 2);
vmScene.add(vmFlame, vmFire, new THREE.HemisphereLight(0x1a2030, 0x080604, 0.12));

// ---------------- scene assembly ----------------
const sky = makeSky();
const ridges = makeRidges();
scene.add(sky, makeGround(), makeGrass(20000), ridges, makeDesertPlants());
if (!WALK) scene.add(makeCampfire());
const LANTERN_I = 9.5;
const lanternLight = new THREE.PointLight(new THREE.Color(1.0, 0.82, 0.6), LANTERN_I, 40, 1.4);
const fireLight = new THREE.PointLight(new THREE.Color(1.0, 0.52, 0.2), 9, 7.5, 2); // a campfire only lights the camp; the herd stays in the dark
fireLight.position.copy(FIRE_POS).add(new THREE.Vector3(0, 0.5, 0));
const moon = new THREE.DirectionalLight(new THREE.Color(0.55, 0.62, 0.8), 0.05);
moon.position.set(-20, 25, -45);
const hemi = new THREE.HemisphereLight(0x0c1018, 0x040302, 0.05);
scene.add(moon, hemi);
if (!WALK) scene.add(lanternLight, fireLight);
makeTumbleweeds(scene);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const vmPass = new RenderPass(vmScene, vmCamera);
vmPass.clear = false; vmPass.clearDepth = true;
if (!WALK) composer.addPass(vmPass); // the hand and lantern
const kuwaPass = new ShaderPass(KuwaharaShader);
const bloom = new UnrealBloomPass(new THREE.Vector2(960, 540), 0.55, 0.3, 2.2);
const mist = new UnrealBloomPass(new THREE.Vector2(960, 540), 0.025, 1.0, 0.0);
const finalPass = new ShaderPass(FinalShader);
composer.addPass(kuwaPass); composer.addPass(bloom); composer.addPass(mist); composer.addPass(finalPass);

let target = 540;
function resize() {
  const w = innerWidth, h = innerHeight;
  const pr = Math.min(window.devicePixelRatio || 1, target / Math.min(w, h));
  renderer.setPixelRatio(pr); renderer.setSize(w, h);
  composer.setPixelRatio(pr); composer.setSize(w, h);
  const aspect = w / h;
  camera.aspect = aspect; vmCamera.aspect = aspect;
  camera.fov = aspect >= 1.3 ? 60 : Math.min(88, THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(40)) / aspect)));
  vmCamera.fov = aspect >= 1.3 ? 70 : Math.min(95, THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(46)) / aspect)));
  camera.updateProjectionMatrix(); vmCamera.updateProjectionMatrix();
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
  if (e.code === 'KeyF') { if (!WALK && !e.repeat) lampAction(); return; }
  if (e.code === 'Space') { if (!WALK) raiseKey = true; e.preventDefault(); return; }
  keys.add(e.code);
  if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
});
addEventListener('keyup', (e) => { keys.delete(e.code); if (e.code === 'Space') raiseKey = false; });
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
    for (const sg of SAGUAROS) {
      const pc = PLANT_U.uPC.value;
      push(sg.x + Math.round((pc.x - sg.x) / PLANT_PER) * PLANT_PER, sg.z + Math.round((pc.y - sg.z) / PLANT_PER) * PLANT_PER, sg.r);
    }
    for (const c of cows) {
      for (const b of c.blockers) push(b.x, b.z, b.r);
      push(c.headWorld.x, c.headWorld.z, 0.24 * c.s);
    }
  }
}


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
  } else if (c.alarm > 0.05) { // uneasy: head up; it looks where it's turning, otherwise keeps an eye on you
    const [y] = lookAngles(c, camera.position);
    const lead = c.turnLead || 0;
    ai.yaw = damp(ai.yaw, Math.abs(lead) > 0.15 ? lead : clamp(y, -0.6, 0.6), 3, dt); ai.pitch = damp(ai.pitch, -0.08, 3, dt);
    ai.t = Math.min(ai.t, 1.5);
  } else if ((c.stir || 0) > 0.15 || (c.speed || 0) > 0.25) { // going along with the herd: head up, looking where it walks
    ai.yaw = damp(ai.yaw, c.turnLead || 0, 3, dt); ai.pitch = damp(ai.pitch, (c.speed || 0) > 0.25 ? -0.2 : -0.06, 2.5, dt);
    ai.t = Math.min(ai.t, 1.5);
  } else {
    ai.t -= dt;
    if (ai.t <= 0) {
      if (Math.random() < 0.45) { ai.tYaw = rand(-0.35, 0.35); ai.tPitch = -1.05; ai.t = rand(4, 9); }
      else { ai.tYaw = rand(-0.8, 0.8); ai.tPitch = rand(-0.2, 0.12); ai.t = rand(2.5, 6); }
    }
    ai.yaw = damp(ai.yaw, ai.tYaw, 1.4, dt); ai.pitch = damp(ai.pitch, ai.tPitch, 1.1, dt);
  }
  const own = c.mesh.material.userData.own;
  const nod = (c.gait || 0) * 0.07 * Math.sin((c.gaitPhase || 0) * Math.PI * 4); // the head nods with each step
  own.uPose.value.set(ai.yaw * 0.45, ai.pitch * 0.4 + nod, ai.yaw * 0.55, ai.pitch * 0.6 + nod * 0.5);
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



// ---------------- lantern: state, oil, wind, relighting ----------------
const lamp = { on: true, level: 1, oil: 1, mode: 'on', t: 0, gustT: -1, gustTimer: rand(35, 70), sputter: 0 };
let raiseKey = false, raiseMouse = false, raiseTouch = false, raiseT = 0, raisedFor = 0;
let ended = false, nightT = 0, subTimer = 0;
function say(text, secs = 2.6) { ui.sub.textContent = text; ui.sub.classList.add('show'); subTimer = secs; }
function nearFire() { return Math.hypot(player.pos.x - FIRE_POS.x, player.pos.z - FIRE_POS.z) < RELIGHT_DIST; }
function goOut(cause) {
  if (lamp.mode === 'off' || lamp.mode === 'dying') return;
  lamp.mode = 'dying'; lamp.t = 0; lamp.cause = cause;
  if (cause !== 'hand') sound.puff();
}
function lampAction() {
  if (!started) return;
  if (lamp.mode === 'on') { lamp.mode = 'turning'; lamp.t = 0; sound.click(); return; }
  if (lamp.mode === 'off') {
    if (nearFire()) { lamp.mode = 'relight'; lamp.t = 0; }
    else say('모닥불에서만 다시 켤 수 있어요');
  }
}
function lampStep(dt) {
  lamp.t += dt;
  if (lamp.mode === 'on') {
    lamp.oil = Math.max(0, lamp.oil - dt / OIL_TIME);
    const oilF = lamp.oil > 0.2 ? 1 : 0.35 + 0.65 * (lamp.oil / 0.2);
    let lv = oilF;
    if (lamp.oil < 0.12 && Math.random() < dt * 3) { lamp.sputter = 1; sound.sputter(); }
    lamp.sputter = Math.max(0, lamp.sputter - dt * 5);
    lv *= 1 - 0.5 * lamp.sputter;
    if (lamp.gustT >= 0) lv *= 0.55 + 0.45 * Math.abs(Math.sin(lamp.gustT * 23.0) * Math.sin(lamp.gustT * 7.0));
    lamp.level = damp(lamp.level, lv, 18, dt);
    if (lamp.oil <= 0) goOut('oil');
  } else if (lamp.mode === 'turning') { // wick turned down by hand
    lamp.level = Math.max(0, 1 - lamp.t / 0.6);
    if (lamp.t >= 0.6) { lamp.mode = 'off'; lamp.level = 0; sound.puff(); }
  } else if (lamp.mode === 'dying') { // wind or empty fount: a few last flickers
    const d = lamp.cause === 'oil' ? 1.6 : 0.5;
    lamp.level = Math.max(0, (1 - lamp.t / d) * (Math.random() < 0.5 ? 1 : 0.3));
    if (lamp.t >= d) { lamp.mode = 'off'; lamp.level = 0; }
  } else if (lamp.mode === 'relight') { // lean into the fire, the wick catches, back up
    if (lamp.t >= 1.05 && lamp.t - dt < 1.05) { sound.whoosh(); lamp.oil = 1; }
    lamp.level = lamp.t < 1.05 ? 0 : Math.min(1, (lamp.t - 1.05) / 0.7);
    if (lamp.t >= 2.2) { lamp.mode = 'on'; lamp.level = 1; }
  }
  // wind gusts
  lamp.gustTimer -= dt;
  if (lamp.gustTimer <= 0 && lamp.gustT < 0) { lamp.gustT = 0; lamp.gustTimer = rand(45, 110); sound.gust(); }
  if (lamp.gustT >= 0) {
    lamp.gustT += dt;
    if (lamp.gustT > 2.3) { lamp.gustT = -1; if (lamp.mode === 'on' && Math.random() < 0.5) goOut('wind'); }
  }
  LU.uLevel.value = lamp.level;
  LU.uBend.value = damp(LU.uBend.value, lamp.gustT >= 0 ? Math.sin(lamp.gustT * 9.0) * 1.6 + 1.2 : 0, 8, dt);
}
function updateLampUI() {
  const off = lamp.mode === 'off';
  const canLight = off && nearFire();
  ui.prompt.textContent = canLight ? (TOUCH ? '모닥불에서 불 붙이기' : 'F  모닥불에서 불 붙이기') : '';
  ui.prompt.classList.toggle('show', canLight);
  const label = lamp.mode === 'on' ? '랜턴 끄기' : canLight ? '불 붙이기' : lamp.mode === 'relight' ? '불 붙이는 중' : '랜턴 꺼짐';
  const span = ui.lampBtn.querySelector('span');
  if (span.textContent !== label) span.textContent = label;
  ui.lampBtn.classList.toggle('dim', off && !canLight);
}
if (ui.lampBtn) ui.lampBtn.addEventListener('click', (e) => { e.stopPropagation(); lampAction(); });
const raiseDown = (e) => { e.preventDefault(); e.stopPropagation(); raiseTouch = true; };
const raiseUp = (e) => { e.stopPropagation(); raiseTouch = false; };
if (ui.raiseBtn) {
  ui.raiseBtn.addEventListener('pointerdown', raiseDown);
  ui.raiseBtn.addEventListener('pointerup', raiseUp); ui.raiseBtn.addEventListener('pointercancel', raiseUp); ui.raiseBtn.addEventListener('pointerleave', raiseUp);
}
document.addEventListener('mousedown', (e) => { if (e.button === 2 && started) raiseMouse = true; });
document.addEventListener('mouseup', (e) => { if (e.button === 2) raiseMouse = false; });
document.addEventListener('contextmenu', (e) => e.preventDefault());

// ---------------- counting and the ending (first slice only) ----------------
let countT = 0, count = 0, revealT = -1, revealStart = 0, countReadyAt = Infinity; // counting opens after the opening line
if (WITH_COUNTING) ui.again.addEventListener('click', () => location.reload());
const rayO = new THREE.Vector3(), rayD = new THREE.Vector3(), tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3(), aimTmp = new THREE.Vector3(), aimV = new THREE.Vector3();
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
// no ledger: a cow is counted once you have looked straight at it for a moment while the lantern's light reaches it;
// in the dark nothing can be counted, and the number counted so far is kept
const COUNT_LIGHT = 0.3;
function lanternLightAt(pt) {
  const d = pt.distanceTo(lanternLight.position);
  return lanternLight.intensity / Math.pow(Math.sqrt(d * d + 0.81), 1.4);
}
function countStep(dt) {
  if (revealT >= 0 || performance.now() < countReadyAt) return;
  rayO.copy(camera.position); rayD.copy(fwd);
  // one cow at a time: the uncounted, lit, unblocked cow nearest the middle of your view
  let best = null, bestAng = 0.15;
  if (lamp.level > 0.05) for (const c of cows) {
    if (c.counted) continue;
    for (const lp of c.aimPoints) {
      const pt = c.mesh.localToWorld(aimTmp.copy(lp));
      aimV.copy(pt).sub(rayO); const dist = aimV.length();
      if (dist > 18) continue;
      const ang = Math.acos(clamp(aimV.dot(rayD) / dist, -1, 1));
      if (ang < bestAng && lanternLightAt(pt) > COUNT_LIGHT && cowVisibleFrom(c, pt)) { best = c; bestAng = ang; }
    }
  }
  for (const c of cows) {
    if (c.counted) continue;
    c.lit = c === best ? c.lit + dt : Math.max(0, c.lit - dt * 2);
    if (c.lit > 0.8) {
      c.counted = true; count++;
      if (count < EXPECTED_COUNT) say(`${NUM[count - 1]}…`, 2.4);
      else if (count === EXPECTED_COUNT) say('열… 다 있네.', 2.8);
      else { say(`…${NUM[count - 1]}.`, 3.6); startReveal(); }
    }
  }
}
function startReveal() { revealT = 0; revealStart = performance.now(); }
function revealStep() {
  if (revealT < 0) return;
  const before = revealT; revealT = (performance.now() - revealStart) / 1000;
  if (before < 1.4 && revealT >= 1.4) { for (const c of cows) c.staring = true; sound.silenceCrickets(); }
  if (revealT > 8.5) finalPass.uniforms.uFade.value = clamp((revealT - 8.5) / 2.2, 0, 1);
  if (revealT > 10.8 && !ended) {
    ended = true; ui.end.classList.add('show');
    if (document.pointerLockElement) document.exitPointerLock();
  }
}

// ---------------- holding it: pose, sway, lag, tremor, pendulum ----------------
const REST = { p: new THREE.Vector3(0.2, -0.07, -0.37), r: new THREE.Euler(0.1, 0.55, 0.0) };
const RAISED = { p: new THREE.Vector3(0.19, 0.08, -0.43), r: new THREE.Euler(0.25, 0.4, 0.0) };
const LEAN = { p: new THREE.Vector3(0.02, -0.2, -0.5), r: new THREE.Euler(-0.2, 0.5, 0.25) };
const pend = { pivot: new THREE.Vector3(), bob: new THREE.Vector3(), prev: new THREE.Vector3(), init: false, lastRX: 0, lastRZ: 0, lastDVX: 0, lastDVZ: 0, peak: 0, lastCreak: 0 };
const PEND_L = 0.17;
// ---------------- the lantern never goes inside a cow ----------------
// cow bodies are the same circles the player collides with (barrel + head), up to about the height of the back
const _push = new THREE.Vector3(), _gw = new THREE.Vector3(), _lw = new THREE.Vector3(), _qa = new THREE.Quaternion();
const avoid = new THREE.Vector3();
function pushOut(P, out, cx, cz, m) {
  const dx = P.x + out.x - cx, dz = P.z + out.z - cz, d = Math.hypot(dx, dz);
  if (d < m && d > 1e-5) { out.x += (dx / d) * (m - d); out.z += (dz / d) * (m - d); }
}
function cowPush(P, rad, out) {
  for (const c of cows) {
    if (P.y < 1.55 * c.s) for (const b of c.blockers) pushOut(P, out, b.x, b.z, b.r + rad);
    if (P.y < 1.7 * c.s) pushOut(P, out, c.headWorld.x, c.headWorld.z, 0.26 * c.s + rad);
  }
}
function avoidCows(p, dt) {
  _gw.copy(p).applyQuaternion(camera.quaternion).add(camera.position); // the grip, in the world
  _lw.copy(_gw); _lw.y -= 0.17; // the lantern body hangs below it
  _push.set(0, 0, 0);
  for (let it = 0; it < 3; it++) { cowPush(_lw, 0.09, _push); cowPush(_gw, 0.05, _push); }
  // pull the hand back or aside by that much (smoothed so it doesn't jitter)
  _lw.set(_push.x, 0, _push.z).applyQuaternion(_qa.copy(camera.quaternion).invert());
  avoid.lerp(_lw, 1 - Math.exp(-14 * dt));
  p.add(avoid);
  if (p.z > -0.17) { p.y -= (p.z + 0.17) * 0.8; p.z = -0.17; }
}
let lagX = 0, lagY = 0, prevYaw = 0, prevPitch = 0;
const tmpE = new THREE.Euler(), tmpQ = new THREE.Quaternion(), tmpQ2 = new THREE.Quaternion(), qCam = new THREE.Quaternion();
const vA = new THREE.Vector3(), vB = new THREE.Vector3(), DOWN = new THREE.Vector3(0, -1, 0);
function holdStep(dt, time, speed, bobA) {
  const wantRaise = (raiseKey || raiseMouse || raiseTouch) && lamp.mode !== 'relight';
  raiseT = approach(raiseT, wantRaise ? 1 : 0, dt / 0.35);
  raisedFor = wantRaise ? raisedFor + dt : Math.max(0, raisedFor - dt * 2);
  const r = smooth(raiseT);
  const p = vA.copy(REST.p).lerp(RAISED.p, r);
  let rx = lerp(REST.r.x, RAISED.r.x, r), ry = lerp(REST.r.y, RAISED.r.y, r), rz = lerp(REST.r.z, RAISED.r.z, r);
  // relight: lean the lantern down into the fire
  if (lamp.mode === 'relight') {
    const k = lamp.t < 0.6 ? smooth(lamp.t / 0.6) : lamp.t < 1.6 ? 1 : smooth(Math.max(0, 1 - (lamp.t - 1.6) / 0.6));
    p.lerp(LEAN.p, k); rx = lerp(rx, LEAN.r.x, k); ry = lerp(ry, LEAN.r.y, k); rz = lerp(rz, LEAN.r.z, k);
  }
  // turning the wick knob down
  if (lamp.mode === 'turning') rz += Math.sin(Math.min(1, lamp.t / 0.6) * Math.PI) * 0.12;
  // the hand lags a little behind where you look
  const yawVel = (player.yaw - prevYaw) / Math.max(dt, 1e-3), pitchVel = (player.pitch - prevPitch) / Math.max(dt, 1e-3);
  prevYaw = player.yaw; prevPitch = player.pitch;
  lagX = damp(lagX, clamp(-yawVel * 0.035, -0.09, 0.09), 9, dt);
  lagY = damp(lagY, clamp(-pitchVel * 0.03, -0.07, 0.07), 9, dt);
  p.x -= lagX * 0.6; p.y += lagY * 0.6; rz -= lagX * 1.2; ry += lagX * 0.6;
  // walking
  p.x += Math.cos(player.stepPhase) * 0.009 * bobA; p.y += Math.abs(Math.sin(player.stepPhase)) * 0.012 * bobA - 0.006 * bobA;
  // tremor: a fast physiological shake plus a slow drift, growing while the arm is held up
  const tired = 1 + Math.min(2.2, raisedFor / 3.0);
  const tr = 0.0007 * tired, dr = 0.0018 * (0.6 + 0.4 * tired);
  p.x += Math.sin(time * 9.3) * Math.sin(time * 6.1 + 1.3) * tr + Math.sin(time * 0.37 + 2.1) * dr;
  p.y += Math.sin(time * 10.7 + 0.5) * Math.sin(time * 4.3) * tr + Math.sin(time * 0.29) * dr;
  rz += Math.sin(time * 8.1) * 0.003 * tired;
  avoidCows(p, dt);
  handPivot.position.copy(p);
  handPivot.rotation.set(rx, ry, rz);
  handPivot.updateMatrixWorld(true);
  if (arm.fore) { _up.set(0, 1, 0).applyQuaternion(tmpQ.copy(camera.quaternion).invert()); alignWrist(0.7, _up); placeArm(); }
  // pendulum, simulated in the world so walking and turning swing it naturally
  qCam.copy(camera.quaternion);
  pend.pivot.copy(handPivot.position).applyQuaternion(qCam).add(camera.position);
  if (!pend.init) { pend.bob.copy(pend.pivot).add(vB.set(0, -PEND_L, 0)); pend.prev.copy(pend.bob); pend.init = true; }
  const sub = Math.max(1, Math.ceil(dt / (1 / 120))), h = dt / sub;
  for (let i = 0; i < sub; i++) {
    const vx = (pend.bob.x - pend.prev.x) * (1 - 1.6 * h), vy = (pend.bob.y - pend.prev.y) * (1 - 1.6 * h), vz = (pend.bob.z - pend.prev.z) * (1 - 1.6 * h);
    pend.prev.copy(pend.bob);
    pend.bob.x += vx; pend.bob.y += vy - 9.8 * h * h; pend.bob.z += vz;
    vB.copy(pend.bob).sub(pend.pivot).setLength(PEND_L);
    pend.bob.copy(pend.pivot).add(vB);
    // it knocks against a cow instead of swinging through it
    _push.set(0, 0, 0); cowPush(pend.bob, 0.085, _push);
    if (_push.x || _push.z) { pend.bob.x += _push.x; pend.bob.z += _push.z; vB.copy(pend.bob).sub(pend.pivot).setLength(PEND_L); pend.bob.copy(pend.pivot).add(vB); }
  }
  // hanging direction in camera space -> lantern orientation (keep its twist following the hand yaw)
  vB.copy(pend.bob).sub(pend.pivot).normalize().applyQuaternion(tmpQ.copy(qCam).invert());
  const yl = vA.copy(vB).negate();
  _hx.set(1, 0, 0).applyQuaternion(handPivot.quaternion);
  _px.copy(_hx).addScaledVector(yl, -_hx.dot(yl)).normalize();
  _pz.crossVectors(_px, yl);
  _m4.makeBasis(_px, yl, _pz);
  tmpQ2.setFromRotationMatrix(_m4);
  lanternSwing.quaternion.copy(handPivot.quaternion).invert().multiply(tmpQ2);
  // a soft squeak from the bail when a big swing turns around (measured in the world, so looking up or down doesn't count)
  const rx2 = pend.bob.x - pend.pivot.x, rz2 = pend.bob.z - pend.pivot.z;
  const dvx = rx2 - pend.lastRX, dvz = rz2 - pend.lastRZ;
  pend.peak = Math.max(pend.peak * Math.exp(-dt * 1.5), Math.hypot(rx2, rz2) / PEND_L);
  if (dvx * pend.lastDVX + dvz * pend.lastDVZ < 0 && pend.peak > 0.16 && time - pend.lastCreak > 0.3) {
    if (Math.random() < 0.7) sound.creak(Math.min(1, pend.peak * 2.5));
    pend.lastCreak = time;
  }
  pend.lastRX = rx2; pend.lastRZ = rz2; pend.lastDVX = dvx; pend.lastDVZ = dvz;
}

// ---------------- moving yourself ----------------
function movePlayer(dt) {
  let ix = 0, iz = 0;
  if (keys.has('KeyD') || keys.has('ArrowRight')) ix += 1;
  if (keys.has('KeyA') || keys.has('ArrowLeft')) ix -= 1;
  if (keys.has('KeyW') || keys.has('ArrowUp')) iz += 1;
  if (keys.has('KeyS') || keys.has('ArrowDown')) iz -= 1;
  ix += joy.x; iz -= joy.y;
  const im = Math.hypot(ix, iz); if (im > 1) { ix /= im; iz /= im; }
  if (!WALK && lamp.mode === 'relight') { ix *= 0.2; iz *= 0.2; }
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
  camera.updateMatrixWorld(true);
  camera.getWorldDirection(fwd);
  return speed;
}

// ---------------- frame loop ----------------
const FRAME_MS = 1000 / 60;
let nextDue = 0, last = performance.now(), fpsAcc = 0, fpsN = 0, slow = 0, pendingResize = false;
const fwd = new THREE.Vector3(), tmpV = new THREE.Vector3(), flameCam = new THREE.Vector3(), fireCam = new THREE.Vector3();
const NIGHT = { fogC: new THREE.Color(0.062, 0.064, 0.073), fogD: 0.05, zen: new THREE.Color(0.0065, 0.007, 0.0088) };
const DAY = { fogC: new THREE.Color(0.0035, 0.004, 0.0055), fogD: 0.009, hor: new THREE.Color(0.028, 0.03, 0.038), zen: new THREE.Color(0.002, 0.0022, 0.003) };
function frame(now) {
  if (!document.hidden) requestAnimationFrame(frame);
  if (now < nextDue - 1) return;
  nextDue = Math.max(nextDue + FRAME_MS, now + FRAME_MS * 0.6);
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  const time = now / 1000;
  if (pendingResize) { pendingResize = false; resize(); }
  U.uTime.value = time; FIRE_U.uTime.value = time; LU.uTime.value = time;

  // walking
  const speed = movePlayer(dt);
  const bobA = clamp(speed / 1.5, 0, 1);

  // the lantern
  lampStep(dt);
  tumbleStep(dt, lamp.gustT >= 0);
  holdStep(dt, time, speed, bobA);
  lanternSwing.updateMatrixWorld(true);
  flameCam.copy(FLAME_LOCAL); lanternSwing.localToWorld(flameCam); // camera space (vm scene root = camera)
  const lv = lamp.level * (1 + 0.04 * Math.sin(time * 11.0) * Math.sin(time * 17.3 + 1.1) + 0.02 * Math.sin(time * 31.0));
  vmFlame.position.copy(flameCam); vmFlame.intensity = 1.0 * lv;
  lanternLight.position.copy(flameCam).applyQuaternion(camera.quaternion).add(camera.position);
  lanternLight.intensity = LANTERN_I * lv * (1 + 0.5 * smooth(raiseT)); // held up high, it reaches further
  U.uLanternPos.value.copy(lanternLight.position);
  glassMat.emissiveIntensity = 0.16 * lv;
  glowMesh.material.opacity = 0.5 * lv;
  flameMesh.visible = lamp.level > 0.01;
  flameMesh.scale.setScalar(0.6 + 0.4 * lamp.level);
  sound.setHiss(lamp.level);
  // the campfire, seen from the hand
  fireCam.copy(fireLight.position).sub(camera.position).applyQuaternion(tmpQ.copy(camera.quaternion).invert());
  vmFire.position.copy(fireCam);
  const fireI = 9 * (1 + 0.14 * Math.sin(time * 7.7) * Math.sin(time * 2.3 + 1.1) + 0.06 * Math.sin(time * 23.0));
  // your own body shades the arm from a fire that is behind you
  const behind = smooth(clamp((fireCam.z / Math.max(fireCam.length(), 1e-3) + 0.2) / 0.8, 0, 1));
  fireLight.intensity = fireI; vmFire.intensity = fireI * lerp(1, 0.22, behind);

  // darkness: when the lantern is out your eyes adapt; far cows turn into black silhouettes, eyes glowing
  nightT = approach(nightT, lamp.level < 0.05 ? 1 : 0, dt / (lamp.level < 0.05 ? 2.6 : 0.7));
  const n = smooth(nightT);
  const dFire = Math.hypot(camera.position.x - FIRE_POS.x, camera.position.z - FIRE_POS.z);
  const nightExp = lerp(0.42, 0.9, smooth(clamp((dFire - 2.5) / 4.5, 0, 1)));
  updateAdapt(dt);
  finalPass.uniforms.uExp.value = lerp(0.26, nightExp, n) * adapt;
  finalPass.uniforms.uDesat.value = n * 0.75 * smooth(clamp((nightExp - 0.42) / 0.48, 0, 1));
  scene.fog.color.copy(DAY.fogC).lerp(NIGHT.fogC, n);
  // the counting look grows as you count
  if (WITH_COUNTING) {
    // the further you count, the more the world drains to grey and low resolution
    countT = damp(countT, revealT >= 0 ? 1 : 0.9 * Math.min(1, count / EXPECTED_COUNT), 1.2, dt);
    finalPass.uniforms.uCount.value = countT; kuwaPass.uniforms.uCount.value = countT;
    mist.strength = 0.025 + 0.02 * countT;
  }
  scene.fog.density = lerp(DAY.fogD + 0.004 * countT, NIGHT.fogD, n);
  sky.material.uniforms.uHor.value.copy(DAY.hor).lerp(NIGHT.fogC, n);
  sky.material.uniforms.uZen.value.copy(DAY.zen).lerp(NIGHT.zen, n);
  RIDGE_U.uHaze.value.copy(scene.fog.color);
  moon.intensity = lerp(0.05, 0.24, n); hemi.intensity = lerp(0.05, 0.07, n);
  U.uEyeGain.value = 120 * lamp.level;
  U.uEyeSelf.value = 5.0 * Math.min(1, n * 2.2);
  finalPass.uniforms.uSeed.value = (now * 0.061) % 997;

  for (const c of cows) cowStep(c, dt, time);
  if (WITH_COUNTING) { countStep(dt); revealStep(); }
  sound.update(camera.position, fwd, cows, time);
  updateLampUI();
  if (subTimer > 0) { subTimer -= dt; if (subTimer <= 0) ui.sub.classList.remove('show'); }

  composer.render(dt);

  fpsAcc += dt; fpsN++;
  if (fpsAcc >= 1) {
    const fps = fpsN / fpsAcc;
    ui.fps.textContent = `fps ${Math.round(fps)} · ${finalPass.uniforms.uRes.value.x}×${finalPass.uniforms.uRes.value.y}`;
    slow = fps < 50 ? slow + 1 : 0;
    if (slow >= 3 && target > 360) { target -= 60; pendingResize = true; slow = 0; } // applied before the next render, so no blank frame
    fpsAcc = 0; fpsN = 0;
  }
}
document.addEventListener('visibilitychange', () => { if (!document.hidden) { last = performance.now(); nextDue = 0; requestAnimationFrame(WALK ? frameWalk : frame); sound.resume(); } });

// ---------------- the walk slice: a sunny day, and a herd that moves away when you come close ----------------
// temporary values to confirm: late-morning sun, flight zone 5 m, walking up to 1.3 m/s, gusts every 18-40 s
const FLIGHT_R = 5.0, WALK_MAX = 1.3, STRIDE = 1.45;
const DAYLOOK = {
  hor: new THREE.Color(0.6, 0.57, 0.5), zen: new THREE.Color(0.13, 0.23, 0.45),
  fog: new THREE.Color(0.55, 0.52, 0.46), fogD: 0.0055, haze: new THREE.Color(0.36, 0.37, 0.41), exp: 0.56,
};
let sun = null, windT = 12, gustLeft = 0;
function setupDay() {
  sun = new THREE.DirectionalLight(new THREE.Color(1.0, 0.93, 0.82), 6.0);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -18, right: 18, top: 18, bottom: -18, near: 1, far: 140 });
  sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.03;
  scene.add(sun, sun.target);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  groundMesh.receiveShadow = true;
  for (const t of tumbles) t.mesh.castShadow = true;
  hemi.color.setRGB(0.55, 0.65, 0.85); hemi.groundColor.setRGB(0.32, 0.26, 0.19); hemi.intensity = 0.75;
  moon.intensity = 0;
  scene.fog.color.copy(DAYLOOK.fog); scene.fog.density = DAYLOOK.fogD;
  sky.material.uniforms.uHor.value.copy(DAYLOOK.hor); sky.material.uniforms.uZen.value.copy(DAYLOOK.zen);
  RIDGE_U.uHaze.value.copy(DAYLOOK.haze); RIDGE_U.uLift.value = 0.55;
  U.uEyeGain.value = 0; U.uEyeSelf.value = 0;
  finalPass.uniforms.uExp.value = DAYLOOK.exp;
}
// a cow's footprint on the ground: a body capsule, and a neck-and-head capsule that swings with the head
function cowCaps(c) {
  const p = c.mesh.position, s = c.s, sh = Math.sin(c.heading), ch = Math.cos(c.heading);
  const k = c.caps || (c.caps = new Float64Array(10));
  k[0] = p.x - sh * 0.67 * s; k[1] = p.z - ch * 0.67 * s; k[2] = p.x + sh * 0.37 * s; k[3] = p.z + ch * 0.37 * s; k[4] = 0.33 * s;
  const yaw = c.ai.yaw, lx = Math.sin(yaw) * 0.62, lz = 0.58 + Math.cos(yaw) * 0.62;
  k[5] = p.x + sh * 0.62 * s; k[6] = p.z + ch * 0.62 * s;
  k[7] = p.x + (ch * lx + sh * lz) * s; k[8] = p.z + (-sh * lx + ch * lz) * s; k[9] = 0.2 * s;
  return k;
}
// closest points of two segments on the ground (Ericson); leaves the vector from the second to the first in colNx/colNz, its length in colD
let colNx = 0, colNz = 0, colD = 0;
function segClosest(p1x, p1z, q1x, q1z, p2x, p2z, q2x, q2z) {
  const d1x = q1x - p1x, d1z = q1z - p1z, d2x = q2x - p2x, d2z = q2z - p2z, rx = p1x - p2x, rz = p1z - p2z;
  const a = d1x * d1x + d1z * d1z, e = d2x * d2x + d2z * d2z, f = d2x * rx + d2z * rz;
  let s = 0, t = 0;
  if (a <= 1e-9 && e > 1e-9) t = clamp(f / e, 0, 1);
  else if (a > 1e-9) {
    const c = d1x * rx + d1z * rz;
    if (e <= 1e-9) s = clamp(-c / a, 0, 1);
    else {
      const b = d1x * d2x + d1z * d2z, den = a * e - b * b;
      s = den > 1e-9 ? clamp((b * f - c * e) / den, 0, 1) : 0;
      t = (b * s + f) / e;
      if (t < 0) { t = 0; s = clamp(-c / a, 0, 1); } else if (t > 1) { t = 1; s = clamp((b - c) / a, 0, 1); }
    }
  }
  colNx = p1x + d1x * s - (p2x + d2x * t); colNz = p1z + d1z * s - (p2z + d2z * t);
  colD = Math.hypot(colNx, colNz);
}
// the smallest gap between any two cows right now (negative = overlapping), for testing
function herdGap() {
  for (const c of cows) cowCaps(c);
  let g = 99;
  for (let i = 0; i < cows.length; i++) for (let j = i + 1; j < cows.length; j++) {
    const a = cows[i].caps, b = cows[j].caps;
    for (let u = 0; u < 10; u += 5) for (let v = 0; v < 10; v += 5) {
      segClosest(a[u], a[u + 1], a[u + 2], a[u + 3], b[v], b[v + 1], b[v + 2], b[v + 3]);
      g = Math.min(g, colD - a[u + 4] - b[v + 4]);
    }
  }
  return g;
}
// temporary values to confirm: a cow follows others walking within 8 m and copies 90% of their walking,
// unease spreads to cows within 9 m and fades about 3 s after you stop pushing, a cow more than 6 m from the herd hurries back
const ALIGN_R = 8.0, ALIGN_K = 0.9, STIR_R = 9.0;
function shiftCow(c, dx, dz) {
  c.mesh.position.x += dx; c.mesh.position.z += dz;
  const k = c.caps; k[0] += dx; k[1] += dz; k[2] += dx; k[3] += dz; k[5] += dx; k[6] += dz; k[7] += dx; k[8] += dz;
  c.shoveX += dx; c.shoveZ += dz;
}
// bodies can't pass through each other or through a saguaro: whatever overlaps is pushed apart
function separateCows() {
  const pc = PLANT_U.uPC.value;
  for (const c of cows) cowCaps(c);
  for (let it = 0; it < 4; it++) {
    let moved = false;
    for (let i = 0; i < cows.length; i++) {
      const A = cows[i], pa = A.mesh.position, ka = A.caps;
      for (let j = i + 1; j < cows.length; j++) {
        const B = cows[j], pb = B.mesh.position, kb = B.caps;
        if (Math.abs(pa.x - pb.x) > 4.5 || Math.abs(pa.z - pb.z) > 4.5) continue;
        for (let u = 0; u < 10; u += 5) for (let v = 0; v < 10; v += 5) {
          segClosest(ka[u], ka[u + 1], ka[u + 2], ka[u + 3], kb[v], kb[v + 1], kb[v + 2], kb[v + 3]);
          const m = ka[u + 4] + kb[v + 4];
          if (colD >= m) continue;
          let nx = colNx, nz = colNz, l = colD;
          if (l < 1e-5) { nx = pa.x - pb.x; nz = pa.z - pb.z; l = Math.hypot(nx, nz); if (l < 1e-5) { nx = 1; nz = 0; l = 1; } }
          nx /= l; nz /= l;
          const pen = m - colD + 0.002;
          // the one walking into the other gives way most; one standing still is only nudged
          const wa = (A.speed + 0.15) / (A.speed + B.speed + 0.3);
          shiftCow(A, nx * pen * wa, nz * pen * wa);
          shiftCow(B, -nx * pen * (1 - wa), -nz * pen * (1 - wa));
          moved = true;
        }
      }
    }
    for (const c of cows) {
      const k = c.caps, p = c.mesh.position;
      for (const sg of SAGUAROS) {
        const sx = sg.x + Math.round((pc.x - sg.x) / PLANT_PER) * PLANT_PER, sz = sg.z + Math.round((pc.y - sg.z) / PLANT_PER) * PLANT_PER;
        if (Math.abs(sx - p.x) > 3 || Math.abs(sz - p.z) > 3) continue;
        for (let u = 0; u < 10; u += 5) {
          segClosest(k[u], k[u + 1], k[u + 2], k[u + 3], sx, sz, sx, sz);
          const m = k[u + 4] + sg.r;
          if (colD >= m) continue;
          let nx = colNx, nz = colNz, l = colD;
          if (l < 1e-5) { nx = p.x - sx; nz = p.z - sz; l = Math.hypot(nx, nz) || 1; }
          shiftCow(c, (nx / l) * (m - colD + 0.002), (nz / l) * (m - colD + 0.002));
          moved = true;
        }
      }
    }
    if (!moved) break;
  }
}
function herdStep(dt) {
  let cx = 0, cz = 0;
  for (const c of cows) { cx += c.mesh.position.x; cz += c.mesh.position.z; cowCaps(c); }
  cx /= cows.length; cz /= cows.length;
  const pc = PLANT_U.uPC.value;
  // you: inside its flight zone, a cow wants to walk away from you, faster the closer you are
  for (const c of cows) {
    const p = c.mesh.position, dx = p.x - player.pos.x, dz = p.z - player.pos.z, d = Math.hypot(dx, dz);
    c.press = d < FLIGHT_R && d > 1e-3 ? (FLIGHT_R - d) / FLIGHT_R : 0;
    c.pdx = d > 1e-3 ? dx / d : 0; c.pdz = d > 1e-3 ? dz / d : 0;
  }
  // the herd moves as one: a cow near one that's on the move is stirred too, a little less, so it
  // goes along with the others; once you leave them be it fades over a few seconds
  for (const c of cows) {
    let t = clamp(c.press * 4, 0, 1);
    for (const o of cows) {
      if (o === c) continue;
      const e = Math.hypot(c.mesh.position.x - o.mesh.position.x, c.mesh.position.z - o.mesh.position.z);
      if (e < STIR_R) t = Math.max(t, o.stir * 0.9 * Math.min(1, (STIR_R - e) / (STIR_R - 3)));
    }
    c.stirGoal = t;
  }
  for (const c of cows) c.stir = c.stirGoal > c.stir ? Math.min(c.stirGoal, c.stir + dt * 2.0) : Math.max(c.stirGoal, c.stir - dt * 0.3);
  for (const c of cows) {
    const p = c.mesh.position, k = c.caps;
    let vx = 0, vz = 0;
    if (c.press > 0) { vx += c.pdx * c.press * 2.2; vz += c.pdz * c.press * 2.2; }
    c.alarm = Math.max(c.alarm - dt * 0.25, c.press); // stays uneasy for a few seconds
    // don't get left behind: the further out from the others, the more it hurries back
    const hx = cx - p.x, hz = cz - p.z, hd = Math.hypot(hx, hz);
    if (hd > 6) { const g = 0.9 * Math.min(1, (hd - 6) / 8); vx += (hx / hd) * g; vz += (hz / hd) * g; }
    let ax = 0, az = 0, aw = 0;
    for (const o of cows) {
      if (o === c) continue;
      const op = o.mesh.position, e = Math.hypot(p.x - op.x, p.z - op.z);
      // walk the way the others around it are walking
      if (e < ALIGN_R && o.speed > 0.08) { const w = 1 - e / ALIGN_R; ax += Math.sin(o.heading) * o.speed * w; az += Math.cos(o.heading) * o.speed * w; aw += w; }
      // keep a little space, measured body to body rather than centre to centre, so none walks its nose into another's tail
      if (e < 4.5) {
        const ko = o.caps;
        for (let u = 0; u < 10; u += 5) for (let v = 0; v < 10; v += 5) {
          segClosest(k[u], k[u + 1], k[u + 2], k[u + 3], ko[v], ko[v + 1], ko[v + 2], ko[v + 3]);
          const G = u + v === 0 ? 0.9 : 0.45, gap = colD - k[u + 4] - ko[v + 4];
          if (gap < G && colD > 1e-5) { const g = ((G - gap) / G) * 0.9; vx += (colNx / colD) * g; vz += (colNz / colD) * g; }
        }
      }
    }
    if (aw > 0) { const g = (ALIGN_K * c.stir * Math.min(1, aw / 0.6)) / aw; vx += ax * g; vz += az * g; }
    // cactus: walk around it
    for (const sg of SAGUAROS) {
      const sx = sg.x + Math.round((pc.x - sg.x) / PLANT_PER) * PLANT_PER, sz = sg.z + Math.round((pc.y - sg.z) / PLANT_PER) * PLANT_PER;
      const ex = p.x - sx, ez = p.z - sz, e = Math.hypot(ex, ez);
      if (e < 1.8 && e > 1e-3) { const g = ((1.8 - e) / 1.8) * 1.2; vx += (ex / e) * g; vz += (ez / e) * g; }
    }
    // smooth what it wants, so it doesn't twitch each time you move
    c.wx = damp(c.wx, vx, 2.5, dt); c.wz = damp(c.wz, vz, 2.5, dt);
    const want = Math.hypot(c.wx, c.wz);
    let dh = 0;
    if (want > 0.15) { dh = Math.atan2(c.wx, c.wz) - c.heading; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); }
    // a cow turns in an arc as it walks; standing, it only swings round slowly,
    // stepping its front end around its hindquarters, and its head leads the way
    const maxTurn = 0.3 + c.speed / 2.2; // rad/s: a turning circle of about 1.5 m at a brisk walk
    c.turnVel = damp(c.turnVel, want > 0.15 ? clamp(dh * 1.8, -maxTurn, maxTurn) : 0, 3.0, dt);
    const piv = 0.45 * c.s, sh0 = Math.sin(c.heading), ch0 = Math.cos(c.heading);
    const pvx = p.x - sh0 * piv, pvz = p.z - ch0 * piv; // the pivot, near the hips
    c.heading += c.turnVel * dt;
    const sh1 = Math.sin(c.heading), ch1 = Math.cos(c.heading);
    p.x = pvx + sh1 * piv; p.z = pvz + ch1 * piv;
    // it only walks off properly once it is facing roughly the right way
    const goal = want > 0.15 ? Math.min(WALK_MAX, want) * (0.2 + 0.8 * Math.max(0, Math.cos(dh))) : 0;
    c.speed = damp(c.speed, goal, 1.6, dt);
    p.x += sh1 * c.speed * dt; p.z += ch1 * c.speed * dt;
    c.turnLead = clamp(dh, -0.6, 0.6) * Math.min(1, want);
  }
  separateCows();
  for (const c of cows) {
    const p = c.mesh.position;
    c.mesh.rotation.y = c.heading;
    // the legs keep stepping while it turns or gets jostled, not only while it walks forward
    const shove = Math.min(0.8, Math.hypot(c.shoveX, c.shoveZ) / Math.max(dt, 1e-3)); c.shoveX = 0; c.shoveZ = 0;
    const stepRate = c.speed + Math.abs(c.turnVel) * 0.55 + shove;
    c.gait = damp(c.gait, clamp(stepRate / 0.9, 0, 1), 4, dt);
    c.gaitPhase += (stepRate * dt) / STRIDE;
    p.y = -0.012 * c.gait * (0.5 - 0.5 * Math.cos(c.gaitPhase * Math.PI * 4)); // the back dips twice a stride
    c.mesh.material.userData.own.uGait.value.set(c.gaitPhase, c.gait, 0, 0);
    c.mesh.updateMatrixWorld();
    // the circles you bump into move with the body
    const sh = Math.sin(c.heading), ch = Math.cos(c.heading);
    [0.55, 0.0, -0.6].forEach((lz, k) => { const z = lz * 0.92 * c.s; c.blockers[k].x = p.x + sh * z; c.blockers[k].z = p.z + ch * z; });
  }
}
function frameWalk(now) {
  if (!document.hidden) requestAnimationFrame(frameWalk);
  if (now < nextDue - 1) return;
  nextDue = Math.max(nextDue + FRAME_MS, now + FRAME_MS * 0.6);
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  const time = now / 1000;
  if (pendingResize) { pendingResize = false; resize(); }
  U.uTime.value = time;
  movePlayer(dt);
  sun.target.position.set(player.pos.x, 0, player.pos.z);
  sun.position.set(player.pos.x + 38, 46, player.pos.z + 30);
  windT -= dt;
  if (windT <= 0) { gustLeft = 2.3; windT = rand(18, 40); sound.gust(); }
  gustLeft -= dt;
  tumbleStep(dt, gustLeft > 0);
  herdStep(dt);
  for (const c of cows) cowStep(c, dt, time);
  sound.update(camera.position, fwd, cows, time);
  if (subTimer > 0) { subTimer -= dt; if (subTimer <= 0) ui.sub.classList.remove('show'); }
  finalPass.uniforms.uSeed.value = (now * 0.061) % 997;
  composer.render(dt);
  fpsAcc += dt; fpsN++;
  if (fpsAcc >= 1) {
    const fps = fpsN / fpsAcc;
    ui.fps.textContent = `fps ${Math.round(fps)} · ${finalPass.uniforms.uRes.value.x}×${finalPass.uniforms.uRes.value.y}`;
    slow = fps < 50 ? slow + 1 : 0;
    if (slow >= 3) {
      if (sun.castShadow) sun.castShadow = false; // first give up the shadows,
      else if (target > 360) { target -= 60; pendingResize = true; } // then resolution
      slow = 0;
    }
    fpsAcc = 0; fpsN = 0;
  }
}

// ---------------- boot ----------------
(async () => {
  try {
    if (!WALK) { makeLantern(); makeArm(); }
    let parts = 0;
    const total = WALK ? 3 : 4;
    const bump = () => { parts++; ui.loadTxt.textContent = `불러오는 중… ${Math.round((parts / total) * 100)}%`; };
    const [geos] = await Promise.all([loadVariants(bump), WALK ? Promise.resolve() : loadHand().then(bump)]);
    HERD.forEach((h, i) => {
      const toCamp = Math.atan2(0 - h.x, 0.5 - h.z);
      const mesh = new THREE.Mesh(geos[h.v], cowMaterial(h.coat, h.face ?? h.coat, i * 1.7));
      mesh.position.set(h.x, 0, h.z);
      mesh.rotation.y = toCamp + (h.off * Math.PI) / 180;
      mesh.scale.setScalar(h.s);
      scene.add(mesh);
      mesh.updateMatrixWorld(true);
      const blockers = [0.55, 0.0, -0.6].map((lz) => { const p = new THREE.Vector3(0, 0, lz * 0.92).applyMatrix4(mesh.matrixWorld); return { x: p.x, z: p.z, r: 0.37 * h.s }; });
      cows.push({
        mesh, s: h.s, phase: i * 1.7, blockers, counted: false, lit: 0, staring: false, headWorld: new THREE.Vector3(),
        aimPoints: [new THREE.Vector3(0, 1.0, 0.0), new THREE.Vector3(0, 1.0, 0.6), new THREE.Vector3(0, 1.0, -0.6), new THREE.Vector3(0, 1.15, 1.1)],
        heading: mesh.rotation.y, speed: 0, gait: 0, gaitPhase: Math.random(), alarm: 0, turnVel: 0, turnLead: 0, wx: 0, wz: 0,
        stir: 0, stirGoal: 0, press: 0, pdx: 0, pdz: 0, shoveX: 0, shoveZ: 0, caps: null,
        ai: { t: rand(0, 3), yaw: rand(-0.4, 0.4), pitch: rand(-0.9, 0.0), tYaw: 0, tPitch: -0.5, flick: 0 },
      });
    });
    if (WALK) {
      setupDay();
      for (const c of cows) { c.mesh.castShadow = true; c.mesh.receiveShadow = true; c.mesh.customDepthMaterial = cowDepthMaterial(c.mesh.material.userData.own); }
    }
    for (const t of tumbles) spawnTumble(t, true);
    renderer.compile(scene, camera);
    if (!WALK) renderer.compile(vmScene, vmCamera);
    ui.loadTxt.textContent = TOUCH ? '왼쪽을 밀어 걷고, 오른쪽을 끌어 둘러봐요'
      : WALK ? 'WASD 걷기 · 마우스 둘러보기'
      : WITH_COUNTING ? 'WASD 걷기 · 마우스 둘러보기 · F 랜턴 끄기와 불 붙이기 · 스페이스나 오른쪽 클릭으로 랜턴 들기'
      : 'WASD 걷기 · 마우스 둘러보기 · 스페이스/오른쪽 클릭 랜턴 들기 · F 끄기와 불 붙이기';
    ui.startBtn.disabled = false; ui.startBtn.textContent = '시작';
    window.__ready = true;
    last = performance.now();
    requestAnimationFrame(WALK ? frameWalk : frame);
  } catch (err) {
    console.error(err);
    ui.loadTxt.textContent = '불러오지 못했어요. 새로고침해 주세요.';
  }
})();
// ---------------- fullscreen ----------------
const FS_OK = !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);
const fsElement = () => document.fullscreenElement || document.webkitFullscreenElement;
function enterFullscreen() {
  if (!FS_OK || fsElement()) return;
  const el = document.documentElement;
  const lockLandscape = () => { try { if (TOUCH && screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(() => {}); } catch {} };
  try {
    const r = (el.requestFullscreen || el.webkitRequestFullscreen).call(el, { navigationUI: 'hide' });
    if (r && r.then) r.then(lockLandscape).catch(() => {}); else lockLandscape();
  } catch {}
}
function toggleFullscreen() {
  if (!fsElement()) { enterFullscreen(); return; }
  try { (document.exitFullscreen || document.webkitExitFullscreen).call(document); } catch {}
}
if (ui.fsBtn) {
  ui.fsBtn.hidden = !FS_OK;
  ui.fsBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleFullscreen(); });
  const syncFs = () => ui.fsBtn.setAttribute('aria-pressed', String(!!fsElement()));
  document.addEventListener('fullscreenchange', syncFs); document.addEventListener('webkitfullscreenchange', syncFs);
}

ui.startBtn.addEventListener('click', () => {
  if (started) return;
  started = true;
  ui.start.classList.add('gone');
  document.body.classList.add('playing');
  enterFullscreen();
  try { sound.init(); } catch (e) { console.warn('sound', e); }
  if (WALK && sound.ctx) { sound.silenceCrickets(); try { sound.fireP.disconnect(); } catch {} } // daytime: no crickets, no campfire
  tryLock();
  setTimeout(() => ui.hint.classList.add('gone'), 9000);
  if (WITH_COUNTING) { setTimeout(() => say('열 마리. 오늘도 다 있겠지.', 3.4), 1200); countReadyAt = performance.now() + 4800; }
});
ui.resume.addEventListener('click', () => tryLock());

if (DEBUG) {
  window.__dbg = {
    state: () => ({ mode: lamp.mode, level: lamp.level, oil: lamp.oil, nightT, raiseT, count, countT, revealT, ended, sub: ui.sub.textContent, pos: player.pos.toArray() }),
    countAll: () => { countReadyAt = 0; for (const c of cows) c.lit = 2; },
    setCount: (n) => { count = n; },
    herd: () => cows.map((c) => [+c.mesh.position.x.toFixed(2), +c.mesh.position.z.toFixed(2), +c.speed.toFixed(2), +c.gait.toFixed(2), +c.heading.toFixed(2)]),
    gap: () => herdGap(),
    herdRaw: () => cows.map((c) => [c.mesh.position.x, c.mesh.position.z, c.heading, c.stir, c.speed]),
    // run the day herd without drawing: hold a key for `secs` (or nothing), at a fixed 60 steps a second
    sim: (secs, code, yaw) => {
      if (yaw !== undefined) player.yaw = yaw;
      if (code) keys.add(code);
      const dt = 1 / 60, start = cows.map((c) => c.mesh.position.clone());
      let minGap = 99, t = 0, overlapSteps = 0;
      for (; t < secs; t += dt) {
        movePlayer(dt); herdStep(dt); for (const c of cows) cowStep(c, dt, t);
        const g = herdGap(); minGap = Math.min(minGap, g); if (g < -0.02) overlapSteps++;
      }
      if (code) keys.delete(code);
      const moved = cows.map((c, i) => +c.mesh.position.distanceTo(start[i]).toFixed(1));
      let cx = 0, cz = 0; for (const c of cows) { cx += c.mesh.position.x; cz += c.mesh.position.z; } cx /= cows.length; cz /= cows.length;
      const spread = Math.max(...cows.map((c) => Math.hypot(c.mesh.position.x - cx, c.mesh.position.z - cz)));
      return { minGap: +minGap.toFixed(3), overlapSteps, moved, centre: [+cx.toFixed(1), +cz.toFixed(1)], spread: +spread.toFixed(1),
        speeds: cows.map((c) => +c.speed.toFixed(2)), player: [+player.pos.x.toFixed(1), +player.pos.z.toFixed(1)] };
    },
    tumbles: () => tumbles.map((t) => [+t.pos.x.toFixed(1), +t.pos.z.toFixed(1), +t.speed.toFixed(2)]),
    lightAt: (i) => lanternLightAt(cows[i].mesh.localToWorld(new THREE.Vector3(0, 1, 0))),
    goto: (x, z, yaw, pitch) => { player.pos.set(x, 0, z); player.yaw = yaw; player.pitch = pitch ?? 0; },
    walk: (code, ms) => { keys.add(code); setTimeout(() => keys.delete(code), ms); },
    turn: (dy) => { player.yaw += dy; },
    raise: (on) => { raiseKey = on; },
    off: () => lampAction(),
    gust: () => { lamp.gustTimer = 0; },
    blow: () => goOut('wind'),
    oil: (v) => { lamp.oil = v; },
    relight: () => lampAction(),
    night: () => { nightT = 1; },
    arm: () => ({ W: arm.W.toArray(), E: arm.E.toArray(), f: arm.f.toArray(), u: arm.u.toArray(), hp: handPivot.position.toArray(), hq: handPivot.quaternion.toArray(), lq: lanternSwing.quaternion.toArray(), lp: lanternLight.position.toArray(), exp: finalPass.uniforms.uExp.value, adapt }),
  };
}

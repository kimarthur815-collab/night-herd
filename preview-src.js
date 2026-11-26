// Web preview: one night by the campfire. Drag to look around, toggle the lantern.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { HERD, CAMERA, LANTERN, FIRE, cowPose } from './herd.js';
import { fbm } from './cow.js';

const $ = (id) => document.getElementById(id);
const ui = { load: $('load'), loadTxt: $('loadTxt'), btn: $('lantern'), btnTxt: $('lanternTxt'), fps: $('fps'), hint: $('hint') };
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const lerp = (a, b, t) => a + (b - a) * t;
const approach = (v, goal, d) => (v < goal ? Math.min(goal, v + d) : Math.max(goal, v - d));
const smooth = (t) => t * t * (3 - 2 * t);

// ---------- look settings: lantern on vs. lantern off ----------
const ON = { exp: 0.21, fogC: new THREE.Color(0.0035, 0.004, 0.0055), fogD: 0.009, hor: new THREE.Color(0.028, 0.03, 0.038), zen: new THREE.Color(0.002, 0.0022, 0.003), fire: 14 };
const OFFS = { exp: 1.5, fogC: new THREE.Color(0.026, 0.027, 0.031), fogD: 0.06, hor: new THREE.Color(0.026, 0.027, 0.031), zen: new THREE.Color(0.003, 0.0032, 0.004), fire: 0.3 };
const SPOT_I = 40, EYE_GAIN = 200, EYE_SELF = 3.5;

// ---------- renderer ----------
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
const camera = new THREE.PerspectiveCamera(CAMERA.fov, 16 / 9, 0.05, 1200);
camera.position.set(...CAMERA.pos);
camera.rotation.order = 'YXZ';
const look0 = new THREE.Vector3(...CAMERA.target).sub(camera.position).normalize();
const baseYaw = Math.atan2(-look0.x, -look0.z), basePitch = Math.asin(look0.y);

// shared uniforms
const U = { uLanternPos: { value: new THREE.Vector3(...LANTERN.pos) }, uEyeGain: { value: EYE_GAIN }, uEyeSelf: { value: 0 }, uTime: { value: 0 } };

const NOISE_GLSL = /* glsl */ `
float hash13(vec3 p){ p = fract(p*0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vnoise3(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(hash13(i), hash13(i+vec3(1,0,0)), f.x), mix(hash13(i+vec3(0,1,0)), hash13(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(hash13(i+vec3(0,0,1)), hash13(i+vec3(1,0,1)), f.x), mix(hash13(i+vec3(0,1,1)), hash13(i+vec3(1,1,1)), f.x), f.y), f.z)*2.0-1.0; }
`;

function cowMaterial(coat, face, phase) {
  const m = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.82, metalness: 0, sheen: 0.4, sheenRoughness: 0.6, sheenColor: new THREE.Color(coat * 0.6, coat * 0.56, coat * 0.48) });
  const own = { uBody: { value: new THREE.Color(coat, coat * 0.93, coat * 0.8) }, uFace: { value: new THREE.Color(face, face * 0.93, face * 0.8) }, uPhase: { value: phase } };
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, U, own);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec4 aMat; attribute vec4 aExt4; attribute vec3 aHead; uniform float uTime; uniform float uPhase; varying vec4 vMat; varying float vEye; varying vec3 vObj; varying vec3 vWP; varying vec3 vExt; varying vec3 vHead;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vMat = aMat; vEye = aExt4.x; vExt = aExt4.yzw; vObj = position; vHead = aHead;
        { float br = sin(uTime*1.3 + uPhase)*0.5 + 0.5;
          float barrel = smoothstep(0.6, 0.85, position.y) * (1.0 - smoothstep(1.15, 1.32, position.y)) * (1.0 - smoothstep(0.5, 0.85, abs(position.z + 0.05)));
          transformed += objectNormal * barrel * br * 0.007; }`)
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
          totalEmissiveRadiance += vEye * vec3(0.95,1.0,0.92) * (uEyeGain * pow(fc, 6.0) / pow(dl, 1.5) + uEyeSelf * pow(fc, 4.0)); }`);
  };
  m.customProgramCacheKey = () => 'cow-v1';
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
    const buf = u8.buffer;
    const vc = m.vc, ic = m.ic;
    let o = 0;
    let idx;
    if (m.i32) { idx = new Uint32Array(buf, o, ic); o += ic * 4; }
    const pos16 = new Int16Array(buf, o, vc * 3); o += vc * 6;
    const head16 = new Int16Array(buf, o, vc * 3); o += vc * 6;
    if (!m.i32) { idx = new Uint16Array(buf, o, ic); o += ic * 2; }
    const nrm = new Int8Array(buf, o, vc * 3); o += vc * 3;
    const mat = new Uint8Array(buf, o, vc * 4); o += vc * 4;
    const ext = new Uint8Array(buf, o, vc * 4);
    const pos = new Float32Array(vc * 3), head = new Float32Array(vc * 3);
    for (let i = 0; i < vc * 3; i++) { pos[i] = pos16[i] * m.ps; head[i] = head16[i] * m.hs; }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(new Int8Array(nrm), 3, true));
    g.setAttribute('aMat', new THREE.BufferAttribute(new Uint8Array(mat), 4, true));
    g.setAttribute('aExt4', new THREE.BufferAttribute(new Uint8Array(ext), 4, true));
    g.setAttribute('aHead', new THREE.BufferAttribute(head, 3));
    g.setIndex(new THREE.BufferAttribute(m.i32 ? new Uint32Array(idx) : new Uint16Array(idx), 1));
    g.computeBoundingSphere();
    onProgress(++done / meta.length);
    return { geo: g, yaw: m.yaw };
  }));
}

function makeGround() {
  const g = new THREE.PlaneGeometry(400, 400, 120, 120);
  g.rotateX(-Math.PI / 2);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getZ(i);
    const amp = THREE.MathUtils.smoothstep(Math.hypot(x, z + 8), 22, 70) * 2.2;
    p.setY(i, amp * fbm(x * 0.03, 0.5, z * 0.03, 3));
  }
  g.computeVertexNormals();
  const m = new THREE.MeshStandardMaterial({ color: 0x332a1f, roughness: 1.0 });
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP2;').replace('#include <fog_vertex>', '#include <fog_vertex>\nvWP2 = (modelMatrix*vec4(transformed,1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>\nvarying vec3 vWP2;\n${NOISE_GLSL}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        { vec3 q = vec3(vWP2.x, 0.0, vWP2.z);
          float a = vnoise3(q*0.35)*0.5+0.5; float b = vnoise3(q*2.5)*0.5+0.5; float c2 = vnoise3(q*14.0)*0.5+0.5; float c3 = vnoise3(q*55.0)*0.5+0.5;
          vec3 col = mix(vec3(0.09,0.075,0.06), vec3(0.13,0.125,0.08), smoothstep(0.35,0.7,a*0.6+b*0.4));
          col *= (0.7 + 0.45*c2) * (0.85 + 0.3*c3);
          diffuseColor.rgb = col; }`);
  };
  return new THREE.Mesh(g, m);
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
    sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>', '#include <normal_fragment_begin>\n normal = normalize((viewMatrix * vec4(0.15, 1.0, 0.25, 0.0)).xyz);');
  };
  const mesh = new THREE.InstancedMesh(g, m, count);
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), v = new THREE.Vector3(), e = new THREE.Euler(), c = new THREE.Color();
  let n = 0, guard = 0;
  while (n < count && guard++ < count * 20) {
    const x = (Math.random() - 0.5) * 26, z = -1.8 - Math.random() * 22;
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
  const R = 170, segs = 300, a0 = -1.35, a1 = 1.35, pos = [], idx = [];
  for (let i = 0; i <= segs; i++) {
    const a = a0 + (a1 - a0) * (i / segs), x = Math.sin(a) * R, z = -Math.cos(a) * R;
    const hgt = Math.max(0.6, 4.5 + 7 * fbm(a * 9.0, 2.1, 0.7, 4) + 5 * Math.max(0, fbm(a * 40.0, 7.3, 1.1, 2)));
    pos.push(x, -2, z, x, hgt, z);
    if (i < segs) { const b = 2 * i; idx.push(b, b + 2, b + 1, b + 1, b + 2, b + 3); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  grp.add(new THREE.Mesh(g, mat));
  const spots = [[-31, -62, 9], [24, -70, 11], [55, -95, 10]];
  const blobs = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), mat, spots.length * 70);
  const trunks = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.15, 0.35, 1, 6), mat, spots.length);
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), S = new THREE.Vector3(), P = new THREE.Vector3(), E = new THREE.Euler();
  let k = 0;
  spots.forEach(([x, z, h], ti) => {
    M.compose(P.set(x, h * 0.27, z), Q.identity(), S.set(1, h * 0.55, 1)); trunks.setMatrixAt(ti, M);
    for (let i = 0; i < 70; i++) {
      const r = h * (0.04 + Math.random() * 0.07), ang = Math.random() * Math.PI * 2, rad = Math.sqrt(Math.random()) * h * 0.38;
      E.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
      M.compose(P.set(x + Math.cos(ang) * rad, h * (0.5 + Math.random() * 0.5) - rad * 0.3, z + Math.sin(ang) * rad * 0.6), Q.setFromEuler(E), S.set(r * (0.8 + Math.random() * 0.8), r * (0.5 + Math.random() * 0.5), r));
      blobs.setMatrixAt(k++, M);
    }
  });
  grp.add(blobs, trunks);
  return grp;
}

function makeSky() {
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { uHor: { value: ON.hor.clone() }, uZen: { value: ON.zen.clone() } },
    vertexShader: 'varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }',
    fragmentShader: `uniform vec3 uHor; uniform vec3 uZen; varying vec3 vDir; ${NOISE_GLSL}
      void main(){ float h = clamp(vDir.y, 0.0, 1.0); vec3 c = mix(uHor, uZen, pow(h, 0.45));
        c *= 0.85 + 0.3*(vnoise3(vDir*vec3(3.0,9.0,3.0))*0.5+0.5);
        gl_FragColor = vec4(c, 1.0); }`,
  });
  return new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), m);
}

const FinalShader = {
  uniforms: { tDiffuse: { value: null }, uExposure: { value: ON.exp }, uDesat: { value: 0.95 }, uGrain: { value: 0.06 }, uRes: { value: new THREE.Vector2(640, 360) }, uSeed: { value: 1 }, uVig: { value: 0.55 }, uContrast: { value: 0.35 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse; uniform float uExposure, uDesat, uGrain, uSeed, uVig, uContrast; uniform vec2 uRes; varying vec2 vUv;
    vec3 aces(vec3 x){ const float a=2.51,b=0.03,c=2.43,d=0.59,e=0.14; return clamp((x*(a*x+b))/(x*(c*x+d)+e),0.0,1.0); }
    float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
    void main(){
      vec2 tx = 0.7 / uRes;
      vec3 c = (texture2D(tDiffuse, vUv).rgb * 2.0 + texture2D(tDiffuse, vUv + vec2(tx.x, 0.0)).rgb + texture2D(tDiffuse, vUv - vec2(tx.x, 0.0)).rgb + texture2D(tDiffuse, vUv + vec2(0.0, tx.y)).rgb + texture2D(tDiffuse, vUv - vec2(0.0, tx.y)).rgb) / 6.0 * uExposure;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(c, vec3(l) * vec3(1.0, 0.985, 0.96), uDesat);
      c = aces(c);
      c = mix(c, c*c*(3.0-2.0*c), uContrast);
      vec2 q = vUv - 0.5; q.x *= uRes.x / uRes.y;
      c *= mix(1.0, smoothstep(1.15, 0.25, length(q)), uVig);
      c = pow(c, vec3(1.0/2.2));
      vec2 px = floor(vUv * uRes);
      float n = hash12(px + uSeed) + hash12(px*1.37 + uSeed*3.1) - 1.0;
      float lum = dot(c, vec3(0.3333));
      c += n * uGrain * (0.45 + 0.9*(1.0 - lum));
      gl_FragColor = vec4(max(c, 0.0), 1.0);
    }`,
};

// ---------- scene ----------
scene.fog = new THREE.FogExp2(ON.fogC.clone(), ON.fogD);
const sky = makeSky();
const trees = makeTrees();
scene.add(sky, makeGround(), makeGrass(40000), trees);
const spot = new THREE.SpotLight(new THREE.Color(1.0, 0.86, 0.68), SPOT_I, 0, 0.95, 1.0, 2);
scene.add(spot, spot.target);
const fire = new THREE.PointLight(new THREE.Color(1.0, 0.55, 0.22), ON.fire, 0, 2);
fire.position.set(...FIRE.pos);
const moon = new THREE.DirectionalLight(new THREE.Color(0.55, 0.62, 0.8), 0.04);
moon.position.set(-20, 25, -45);
scene.add(fire, moon, new THREE.HemisphereLight(0x0c1018, 0x040302, 0.04));

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(640, 360), 0.5, 0.25, 2.5);
const mist = new UnrealBloomPass(new THREE.Vector2(640, 360), 0.04, 1.0, 0.0);
const finalPass = new ShaderPass(FinalShader);
composer.addPass(bloom); composer.addPass(mist); composer.addPass(finalPass);

// ---------- sizing (always a low internal resolution: that is the look) ----------
let target = 360;
function resize() {
  const w = innerWidth, h = innerHeight;
  const pr = Math.min(1, target / Math.min(w, h));
  renderer.setPixelRatio(pr); renderer.setSize(w, h);
  composer.setPixelRatio(pr); composer.setSize(w, h);
  const aspect = w / h;
  camera.aspect = aspect;
  camera.fov = aspect >= 1.4 ? CAMERA.fov : Math.min(85, THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(36)) / aspect)));
  camera.updateProjectionMatrix();
  finalPass.uniforms.uRes.value.set(Math.round(w * pr), Math.round(h * pr));
  document.body.classList.toggle('portrait', aspect < 1);
}
addEventListener('resize', resize);
resize();

// ---------- look around ----------
let yaw = 0, pitch = 0, yawS = 0, pitchS = 0, dragging = false, lx = 0, ly = 0, hintShown = true;
const YAW_MAX = THREE.MathUtils.degToRad(75), PITCH_MIN = THREE.MathUtils.degToRad(-28), PITCH_MAX = THREE.MathUtils.degToRad(22);
const clampLook = () => { yaw = Math.max(-YAW_MAX, Math.min(YAW_MAX, yaw)); pitch = Math.max(PITCH_MIN, Math.min(PITCH_MAX, pitch)); };
const hideHint = () => { if (hintShown) { hintShown = false; ui.hint.classList.add('gone'); } };
canvas.addEventListener('pointerdown', (e) => { dragging = true; lx = e.clientX; ly = e.clientY; try { canvas.setPointerCapture(e.pointerId); } catch {} });
canvas.addEventListener('pointermove', (e) => {
  if (!dragging) return;
  const k = 0.0042 * (camera.fov / 50);
  yaw -= (e.clientX - lx) * k; pitch -= (e.clientY - ly) * k; lx = e.clientX; ly = e.clientY;
  clampLook(); hideHint();
});
const endDrag = () => { dragging = false; };
canvas.addEventListener('pointerup', endDrag); canvas.addEventListener('pointercancel', endDrag);
const keys = new Set();
addEventListener('keydown', (e) => {
  if (e.key === 'l' || e.key === 'L') { toggle(); return; }
  if (e.key.startsWith('Arrow')) { keys.add(e.key); e.preventDefault(); hideHint(); }
});
addEventListener('keyup', (e) => keys.delete(e.key));
setTimeout(hideHint, 7000);

// ---------- lantern ----------
let lanternOn = true, lightT = 0, envT = 0;
function toggle() {
  lanternOn = !lanternOn;
  ui.btnTxt.textContent = lanternOn ? '랜턴 끄기' : '랜턴 켜기';
  ui.btn.setAttribute('aria-pressed', String(!lanternOn));
}
ui.btn.addEventListener('click', toggle);

const lanternOffset = new THREE.Vector3(LANTERN.pos[0] - CAMERA.pos[0], LANTERN.pos[1] - CAMERA.pos[1], LANTERN.pos[2] - CAMERA.pos[2]);
const tmpV = new THREE.Vector3(), fwd = new THREE.Vector3();
let flickN = 0;

// ---------- frame loop ----------
let last = performance.now(), fpsAcc = 0, fpsN = 0, fpsT = 0, slow = 0;
// target 60 fps: on 90/120 Hz screens extra frames are skipped (saves battery and heat)
const FRAME_MS = 1000 / 60;
let nextDue = 0;
function frame(now) {
  if (!document.hidden) requestAnimationFrame(frame);
  if (now < nextDue - 1) return;
  nextDue = Math.max(nextDue + FRAME_MS, now + FRAME_MS * 0.6);
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  U.uTime.value = now / 1000;
  if (keys.has('ArrowLeft')) yaw += dt * 1.2; if (keys.has('ArrowRight')) yaw -= dt * 1.2;
  if (keys.has('ArrowUp')) pitch += dt * 0.9; if (keys.has('ArrowDown')) pitch -= dt * 0.9;
  clampLook();
  const sm = 1 - Math.exp(-dt * 14);
  yawS += (yaw - yawS) * sm; pitchS += (pitch - pitchS) * sm;
  camera.rotation.set(basePitch + pitchS, baseYaw + yawS, 0);

  // lantern held low in the right hand, pointing where you look
  const sway = Math.sin(now / 900) * 0.012;
  tmpV.copy(lanternOffset).applyAxisAngle(THREE.Object3D.DEFAULT_UP, yawS);
  spot.position.copy(camera.position).add(tmpV); spot.position.y += sway;
  camera.getWorldDirection(fwd);
  spot.target.position.copy(camera.position).addScaledVector(fwd, 8);
  U.uLanternPos.value.copy(spot.position);

  // on / off transition: the light dies fast, your eyes adapt slowly
  const goal = lanternOn ? 0 : 1;
  lightT = approach(lightT, goal, dt / (lanternOn ? 0.15 : 0.22));
  envT = approach(envT, goal, dt / (lanternOn ? 0.7 : 2.6));
  flickN += dt * 9;
  const flicker = 1 + 0.035 * Math.sin(flickN) * Math.sin(flickN * 2.3 + 1.7);
  const dying = !lanternOn && lightT < 1 && Math.random() < 0.4 ? 0.25 : 1;
  spot.intensity = SPOT_I * (1 - smooth(lightT)) * flicker * dying;
  const e = smooth(envT);
  const lt = smooth(lightT);
  // every light on the cows dies together with the lantern, so they go black at once;
  // only the eye's adaptation (exposure, mist, glowing eyes) catches up slowly afterwards
  fire.intensity = lerp(ON.fire, OFFS.fire, lt) * (1 + 0.12 * Math.sin(now / 130) * Math.sin(now / 370));
  const eAdapt = lanternOn ? e : smooth(Math.max(0, Math.min(1, (envT - 0.1) / 0.9)));
  finalPass.uniforms.uExposure.value = lerp(ON.exp, OFFS.exp, eAdapt);
  scene.fog.color.copy(ON.fogC).lerp(OFFS.fogC, e);
  scene.fog.density = lerp(ON.fogD, OFFS.fogD, e);
  sky.material.uniforms.uHor.value.copy(ON.hor).lerp(OFFS.hor, e);
  sky.material.uniforms.uZen.value.copy(ON.zen).lerp(OFFS.zen, e);
  trees.visible = e < 0.12;
  U.uEyeGain.value = EYE_GAIN * (1 - smooth(lightT));
  U.uEyeSelf.value = EYE_SELF * Math.min(1, e * 2.2);
  if (!reduced) finalPass.uniforms.uSeed.value = (now * 0.061) % 997;

  composer.render(dt);

  // frame rate readout + gentle automatic quality step-down
  fpsAcc += dt; fpsN++;
  if (fpsAcc >= 1) {
    const fps = fpsN / fpsAcc;
    ui.fps.textContent = `fps ${Math.round(fps)} · ${finalPass.uniforms.uRes.value.x}×${finalPass.uniforms.uRes.value.y}`;
    slow = fps < 45 ? slow + 1 : 0;
    if (slow >= 3 && target > 240) { target -= 40; resize(); slow = 0; }
    fpsAcc = 0; fpsN = 0;
  }
}
document.addEventListener('visibilitychange', () => { if (!document.hidden) { last = performance.now(); nextDue = 0; requestAnimationFrame(frame); } });

// ---------- load ----------
(async () => {
  try {
    const variants = await loadVariants((p) => { ui.loadTxt.textContent = `소를 불러오는 중… ${Math.round(p * 100)}%`; });
    HERD.forEach((c, i) => {
      const pose = cowPose(c);
      const need = pose.yaw1 + pose.yaw2;
      let best = variants[0];
      for (const v of variants) if (Math.abs(v.yaw - need) < Math.abs(best.yaw - need)) best = v;
      const mesh = new THREE.Mesh(best.geo, cowMaterial(c.coat, c.face ?? c.coat, i * 1.7));
      mesh.position.set(c.x, 0, c.z);
      mesh.rotation.y = pose.theta + (need - best.yaw);
      mesh.scale.setScalar(c.scale);
      scene.add(mesh);
    });
    ui.loadTxt.textContent = '어둠에 눈을 맞추는 중…';
    await new Promise((r) => setTimeout(r, 30));
    renderer.compile(scene, camera);
    composer.render(0.016);
    ui.load.classList.add('gone');
    window.__ready = true;
    last = performance.now();
    requestAnimationFrame(frame);
  } catch (err) {
    console.error(err);
    ui.loadTxt.textContent = '불러오지 못했어요. 새로고침해 주세요.';
  }
})();

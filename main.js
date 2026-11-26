import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { CAMERA, LANTERN, FIRE } from './herd.js';
import { fbm } from './cow.js';

const Q = new URLSearchParams(location.search);
const OFF_DEFAULT = () => Q.get('off') === '1';
const num = (k, d) => (Q.has(k) ? Number(Q.get(k)) : d);
const W = num('w', 1600), H = num('h', 900), RS = num('rs', 0.5);
const VIEW = Q.get('view') || 'herd';
const EXPO = num('exp', OFF_DEFAULT() ? 1.5 : 0.21), LI = num('li', 40), DESAT = num('desat', 0.95), GRAIN = num('grain', 0.06);
const BLOOM = num('bloom', 0.5), BLOOM_T = num('bt', 2.5), BLOOM_R = num('br', 0.25), MIST = num('mist', 0.04);
const EYE_GAIN = num('eye', OFF_DEFAULT() ? 0 : 200), BUMP = num('bump', 0.0), FOG = num('fog', 0.009), MOON = num('moon', 0.04);
const COW = num('cow', 0), SHADOW = num('shadow', 1), OFF = num('off', 0);
const log = (...a) => console.log('[look]', ...a);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(RS);
renderer.setSize(W, H);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(CAMERA.fov, W / H, 0.05, 1200);

const NOISE_GLSL = /* glsl */ `
float hash13(vec3 p){ p = fract(p*0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vnoise3(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(hash13(i), hash13(i+vec3(1,0,0)), f.x), mix(hash13(i+vec3(0,1,0)), hash13(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(hash13(i+vec3(0,0,1)), hash13(i+vec3(1,0,1)), f.x), mix(hash13(i+vec3(0,1,1)), hash13(i+vec3(1,1,1)), f.x), f.y), f.z)*2.0-1.0; }
`;
const PERTURB_GLSL = /* glsl */ `
vec3 perturbFur(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDir){
  vec3 vSigmaX = normalize(dFdx(surf_pos)); vec3 vSigmaY = normalize(dFdy(surf_pos));
  vec3 R1 = cross(vSigmaY, surf_norm); vec3 R2 = cross(surf_norm, vSigmaX);
  float fDet = dot(vSigmaX, R1) * faceDir;
  vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
  return normalize(abs(fDet) * surf_norm - vGrad);
}`;

const lanternPos = new THREE.Vector3(...(Q.has('lp') ? Q.get('lp').split(',').map(Number) : LANTERN.pos));

function cowMaterial(coat, faceCoat) {
  const col = new THREE.Color(1.0, 0.93, 0.8);
  const bodyC = new THREE.Color(coat, coat * 0.93, coat * 0.8), faceC = new THREE.Color(faceCoat, faceCoat * 0.93, faceCoat * 0.8);
  const m = new THREE.MeshPhysicalMaterial({ color: col, roughness: 0.82, metalness: 0, sheen: 0.4, sheenRoughness: 0.6, sheenColor: col.clone().multiplyScalar(0.6) });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uLanternPos = { value: lanternPos };
    sh.uniforms.uEyeGain = { value: EYE_GAIN }; sh.uniforms.uEyeSelf = { value: OFF_DEFAULT() ? num('eyeself', 3.5) : 0 };
    sh.uniforms.uBump = { value: BUMP }; sh.uniforms.uBody = { value: bodyC }; sh.uniforms.uFace = { value: faceC };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec4 aMat; attribute float aEye; attribute vec3 aExt; attribute vec3 aHead; varying vec4 vMat; varying float vEye; varying vec3 vObj; varying vec3 vWP; varying vec3 vExt; varying vec3 vHead;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\n vMat = aMat; vEye = aEye; vObj = position; vExt = aExt; vHead = aHead;')
      .replace('#include <fog_vertex>', '#include <fog_vertex>\n vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>\nuniform vec3 uLanternPos; uniform float uEyeGain; uniform float uEyeSelf; uniform float uBump; uniform vec3 uBody; uniform vec3 uFace; varying vec4 vMat; varying float vEye; varying vec3 vObj; varying vec3 vWP; varying vec3 vExt; varying vec3 vHead;\n${NOISE_GLSL}\n${PERTURB_GLSL}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        { float pn = vnoise3(vObj*2.7)*0.5+0.5; float pn2 = vnoise3(vObj*9.0);
          float fm = smoothstep(0.2, 0.8, vExt.z + 0.25*vnoise3(vObj*14.0));
          float hc = vnoise3(vObj*vec3(32.0,22.0,32.0))*0.6 + vnoise3(vObj*vec3(70.0,45.0,70.0))*0.4;
          vec3 c = mix(uBody, uFace, fm) * (0.74 + 0.4*pn) * (0.93 + 0.07*pn2) * (1.0 + 0.16*hc);
          c = mix(c, c*0.45, vExt.x*0.8);
          c = mix(c, c*0.5, vExt.y*0.8);
          { // facial hair tone: tear streaks, darker muzzle sides and chin, pale poll tuft
            float fx = abs(vHead.x), fs = vHead.y, ft = vHead.z, face = vExt.z;
            float tear = (1.0 - smoothstep(0.006, 0.02, abs(fx - 0.1 + (fs - 0.2)*0.12))) * smoothstep(0.18, 0.22, fs) * (1.0 - smoothstep(0.28, 0.36, fs)) * smoothstep(-0.02, -0.06, ft);
            tear *= 0.6 + 0.4*(vnoise3(vObj*vec3(40.0,8.0,40.0))*0.5+0.5);
            float muzS = smoothstep(0.36, 0.46, fs) * smoothstep(0.045, 0.08, fx) * (1.0 - vMat.y);
            float chin = smoothstep(-0.09, -0.12, ft) * smoothstep(0.3, 0.42, fs);
            float poll = (1.0 - smoothstep(-0.02, 0.06, fs)) * smoothstep(-0.03, 0.03, ft);
            c *= 1.0 - face * (0.55*tear + 0.25*muzS + 0.25*chin);
            c *= 1.0 + face * 0.12 * poll;
          }
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
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        { float h1 = vnoise3(vObj*vec3(160.0,160.0,40.0)); float h2 = vnoise3(vObj*vec3(50.0,50.0,16.0));
          float hh = (h1*0.6 + h2*0.4) * (1.0 - vEye) * (1.0 - vMat.y*0.7);
          vec2 dh = vec2(dFdx(hh), dFdy(hh)) * uBump;
          normal = perturbFur(-vViewPosition, normal, dh, faceDirection); }`)
      .replace('#include <lights_physical_fragment>', `#include <lights_physical_fragment>
        #ifdef USE_SHEEN
        material.sheenColor *= (1.0 - vMat.y) * (1.0 - vEye) * (1.0 - vMat.z);
        #endif`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        { float dl = length(vWP - uLanternPos); float fc = clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
          totalEmissiveRadiance += vEye * vec3(0.95,1.0,0.92) * (uEyeGain * pow(fc, 6.0) / pow(dl, 1.5) + uEyeSelf * pow(fc, 4.0)); }`);
  };
  return m;
}

async function loadCow(entry) {
  const buf = await (await fetch(entry.file + '?v=' + Date.now())).arrayBuffer();
  const vc = entry.vc, ic = entry.ic;
  let o = 0;
  const take = (n) => { const a = new Float32Array(buf, o, n); o += n * 4; return a; };
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(take(vc * 3), 3));
  g.setAttribute('normal', new THREE.BufferAttribute(take(vc * 3), 3));
  g.setAttribute('aMat', new THREE.BufferAttribute(take(vc * 4), 4));
  g.setAttribute('aEye', new THREE.BufferAttribute(take(vc), 1));
  g.computeBoundingSphere();
  g.setAttribute('aExt', new THREE.BufferAttribute(take(vc * 3), 3));
  g.setAttribute('aHead', new THREE.BufferAttribute(take(vc * 3), 3));
  g.setIndex(new THREE.BufferAttribute(new Uint32Array(buf, o, ic), 1));
  const mesh = new THREE.Mesh(g, cowMaterial(entry.coat, entry.face ?? entry.coat));
  mesh.castShadow = true; mesh.receiveShadow = true;
  return mesh;
}

function makeGround() {
  const g = new THREE.PlaneGeometry(400, 400, 220, 220);
  g.rotateX(-Math.PI / 2);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getZ(i);
    const dist = Math.hypot(x, z + 8);
    const amp = THREE.MathUtils.smoothstep(dist, 22, 70) * 2.2;
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
          vec3 dirt = vec3(0.09,0.075,0.06); vec3 grass = vec3(0.13,0.125,0.08);
          vec3 col = mix(dirt, grass, smoothstep(0.35,0.7,a*0.6+b*0.4));
          col *= (0.7 + 0.45*c2) * (0.85 + 0.3*c3);
          diffuseColor.rgb = col; }`);
  };
  const mesh = new THREE.Mesh(g, m);
  mesh.receiveShadow = true;
  return mesh;
}

function makeGrass(count) {
  const segs = 4, pos = [], nrm = [], idx = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs, w = 0.006 * (1 - t * 0.85), bend = 0.22 * t * t;
    pos.push(-w, t, bend, w, t, bend);
    nrm.push(0, 0.85, 0.5, 0, 0.85, 0.5);
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
    q.setFromEuler(e);
    s.set(1 + Math.random(), h, h);
    v.set(x, 0, z);
    M.compose(v, q, s);
    mesh.setMatrixAt(n, M);
    c.setScalar(0.55 + Math.random() * 0.6);
    mesh.setColorAt(n, c);
    n++;
  }
  mesh.count = n;
  mesh.receiveShadow = true;
  return mesh;
}

function makeTrees() {
  const grp = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: 0x000000, fog: false });
  // distant irregular tree line along the horizon
  const R = 170, segs = 400, a0 = -1.35, a1 = 1.35;
  const pos = [], idx = [];
  for (let i = 0; i <= segs; i++) {
    const a = a0 + (a1 - a0) * (i / segs);
    const x = Math.sin(a) * R, z = -Math.cos(a) * R;
    const hgt = Math.max(0.6, 4.5 + 7 * fbm(a * 9.0, 2.1, 0.7, 4) + 5 * Math.max(0, fbm(a * 40.0, 7.3, 1.1, 2)));
    pos.push(x, -2, z, x, hgt, z);
    if (i < segs) { const b = 2 * i; idx.push(b, b + 2, b + 1, b + 1, b + 2, b + 3); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  const line = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x000000, fog: false, side: THREE.DoubleSide })); line.name = 'treeline';
  grp.add(line);
  // a few nearer scraggly trees: many small irregular blobs
  const blob = new THREE.IcosahedronGeometry(1, 1);
  const trunk = new THREE.CylinderGeometry(0.15, 0.35, 1, 6);
  const spots = [[-31, -62, 9], [24, -70, 11], [55, -95, 10]];
  for (const [x, z, h] of spots) {
    const t = new THREE.Mesh(trunk, mat); t.scale.set(1, h * 0.55, 1); t.position.set(x, h * 0.27, z); grp.add(t);
    for (let i = 0; i < 70; i++) {
      const b = new THREE.Mesh(blob, mat);
      const r = h * (0.04 + Math.random() * 0.07);
      b.scale.set(r * (0.8 + Math.random() * 0.8), r * (0.5 + Math.random() * 0.5), r);
      const ang = Math.random() * Math.PI * 2, rad = Math.sqrt(Math.random()) * h * 0.38;
      b.position.set(x + Math.cos(ang) * rad, h * (0.5 + Math.random() * 0.5) - rad * 0.3, z + Math.sin(ang) * rad * 0.6);
      b.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
      grp.add(b);
    }
  }
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
  return new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), m);
}

const FinalShader = {
  uniforms: { tDiffuse: { value: null }, uExposure: { value: EXPO }, uDesat: { value: DESAT }, uGrain: { value: GRAIN }, uRes: { value: new THREE.Vector2(W * RS, H * RS) }, uSeed: { value: Math.random() * 100 }, uVig: { value: 0.55 }, uContrast: { value: num('con', 0.35) } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse; uniform float uExposure, uDesat, uGrain, uSeed, uVig, uContrast; uniform vec2 uRes; varying vec2 vUv;
    vec3 aces(vec3 x){ const float a=2.51,b=0.03,c=2.43,d=0.59,e=0.14; return clamp((x*(a*x+b))/(x*(c*x+d)+e),0.0,1.0); }
    float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
    void main(){
      vec2 tx = 0.7 / uRes; vec3 c = (texture2D(tDiffuse, vUv).rgb * 2.0 + texture2D(tDiffuse, vUv + vec2(tx.x, 0.0)).rgb + texture2D(tDiffuse, vUv - vec2(tx.x, 0.0)).rgb + texture2D(tDiffuse, vUv + vec2(0.0, tx.y)).rgb + texture2D(tDiffuse, vUv - vec2(0.0, tx.y)).rgb) / 6.0 * uExposure;
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

async function main() {
  const manifest = await (await fetch('cows/manifest.json?v=' + Date.now())).json();
  if (VIEW === 'herd') {
    camera.position.set(...CAMERA.pos);
    camera.lookAt(...CAMERA.target);
    const fogC = OFF ? new THREE.Color(0.026, 0.027, 0.031) : new THREE.Color(0.0035, 0.004, 0.0055);
    scene.fog = new THREE.FogExp2(fogC, OFF ? num('fog', 0.06) : FOG);
    const sky = makeSky(); if (OFF) { sky.material.uniforms.uHor.value.copy(fogC); sky.material.uniforms.uZen.value.setRGB(0.003, 0.0032, 0.004); } scene.add(sky);
    scene.add(makeGround());
    scene.add(makeGrass(num('grass', 160000)));
    const trees = makeTrees(); if (OFF) { trees.children.forEach((o) => { o.visible = o.name === 'treeline'; }); trees.getObjectByName('treeline').material.fog = true; } scene.add(trees);
    for (const e of manifest) {
      if (!e.vc) continue;
      const mesh = await loadCow(e);
      mesh.position.set(e.x, 0, e.z);
      mesh.rotation.y = e.theta;
      mesh.scale.setScalar(e.scale);
      scene.add(mesh);
    }
    const spot = new THREE.SpotLight(new THREE.Color(1.0, 0.86, 0.68), LI, 0, 0.95, 1.0, 2);
    spot.position.copy(lanternPos);
    spot.target.position.set(...LANTERN.target);
    spot.castShadow = SHADOW > 0;
    spot.shadow.mapSize.set(4096, 4096);
    spot.shadow.camera.near = 0.3; spot.shadow.camera.far = 60;
    spot.shadow.bias = -0.0008; spot.shadow.normalBias = 0.05; spot.shadow.radius = 5; spot.shadow.blurSamples = 16;
    if (!OFF) scene.add(spot, spot.target);
    const moon = new THREE.DirectionalLight(new THREE.Color(0.55, 0.62, 0.8), MOON);
    moon.position.set(-20, 25, -45);
    scene.add(moon);
    scene.add(new THREE.HemisphereLight(0x0c1018, 0x040302, 0.04));
    const fire = new THREE.PointLight(new THREE.Color(1.0, 0.55, 0.22), (OFF ? num('fire', 0.3) : num('fire', 14)), 0, 2);
    fire.position.set(...FIRE.pos);
    fire.castShadow = true; fire.shadow.mapSize.set(1024, 1024); fire.shadow.bias = -0.002; fire.shadow.normalBias = 0.05; fire.shadow.camera.near = 0.2; fire.shadow.camera.far = 40;
    scene.add(fire);
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(new THREE.Vector2(W * RS, H * RS), BLOOM, BLOOM_R, BLOOM_T));
    if (MIST > 0) composer.addPass(new UnrealBloomPass(new THREE.Vector2(W * RS, H * RS), MIST, 1.0, 0.0));
    composer.addPass(new ShaderPass(FinalShader));
    composer.render(); composer.render();
  } else {
    // inspection views of a single cow: neutral studio light, no post
    const e = manifest[COW];
    const mesh = await loadCow(e);
    scene.add(mesh);
    scene.background = new THREE.Color(0.18, 0.18, 0.2);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 1 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
    const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(3, 5, 4); key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048); Object.assign(key.shadow.camera, { left: -2, right: 2, top: 2, bottom: -2 }); key.shadow.normalBias = 0.02;
    scene.add(key);
    scene.add(new THREE.HemisphereLight(0xbfd0ff, 0x302820, 0.9));
    const rim = new THREE.DirectionalLight(0xffffff, 1.0); rim.position.set(-3, 3, -4); scene.add(rim);
    const views = { front: [0, 1.15, 3.2], side: [3.6, 1.0, 0.1], q34: [2.2, 1.3, 2.6], head: [0.55, 1.2, 1.95], rear: [-1.5, 1.2, -3.2], top: [0.01, 4.2, 0.2] };
    const look = { front: [0, 0.9, 0], side: [0, 0.75, 0.1], q34: [0, 0.8, 0.2], head: [0, 1.08, 1.15], rear: [0, 0.8, 0], top: [0, 0, 0.2] };
    camera.position.set(...views[VIEW]);
    camera.lookAt(...look[VIEW]);
    camera.fov = VIEW === 'head' ? 35 : 40; camera.updateProjectionMatrix();
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.render(scene, camera);
  }
  log('done');
  window.__done = true;
}
main().catch((e) => { console.error(e); window.__done = true; });

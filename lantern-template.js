// Night Herd — lantern slice: a kerosene lantern held in a gloved hand.
// Walk, raise it, let it go out (by hand, wind or empty oil), relight it only at the campfire.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
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

// ---------------- renderer ----------------
const ui = {
  start: $('start'), startBtn: $('startBtn'), loadTxt: $('loadTxt'), sub: $('sub'), joy: $('joy'), knob: $('knob'),
  fps: $('fps'), hint: $('hint'), resume: $('resume'), prompt: $('prompt'), lampBtn: $('lampBtn'), raiseBtn: $('raiseBtn'),
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

/*COW*/
/*ENV*/

// ---------------- post: painterly (Kuwahara) + grading ----------------
/*KUWA*/
const FinalShader = {
  uniforms: { tDiffuse: { value: null }, uRes: { value: new THREE.Vector2(960, 540) }, uExp: { value: 0.26 }, uDesat: { value: 0 }, uSeed: { value: 1 }, uFade: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uExp, uDesat, uSeed, uFade; varying vec2 vUv;
    vec3 aces(vec3 x){ const float a=2.51,b=0.03,c=2.43,d=0.59,e=0.14; return clamp((x*(a*x+b))/(x*(c*x+d)+e),0.0,1.0); }
    float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
    void main(){
      vec3 c = texture2D(tDiffuse, vUv).rgb * uExp;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      vec3 graded = c * vec3(1.03, 0.98, 0.92) + vec3(0.0, 0.0006, 0.0018) * (1.0 - smoothstep(0.0, 0.05, l));
      c = mix(graded, vec3(l) * vec3(0.95, 0.98, 1.04), uDesat);
      c = aces(c);
      c = mix(c, c*c*(3.0-2.0*c), 0.25);
      vec2 q = vUv - 0.5; q.x *= uRes.x / uRes.y;
      c *= mix(1.0, smoothstep(1.15, 0.25, length(q)), 0.35 + 0.25*uDesat);
      c = pow(c, vec3(1.0/2.2));
      vec2 px = floor(vUv * uRes);
      float n = hash12(px + uSeed) + hash12(px*1.37 + uSeed*3.1) - 1.0;
      float lum = dot(c, vec3(0.3333));
      c += n * mix(0.014, 0.05, uDesat) * (0.45 + 0.9*(1.0 - lum));
      c *= 1.0 - uFade;
      gl_FragColor = vec4(max(c, 0.0), 1.0);
    }`,
};

/*SOUND*/
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
const trees = makeTrees();
scene.add(sky, makeGround(), makeGrass(42000), trees, makeCampfire());
const LANTERN_I = 9.5;
const lanternLight = new THREE.PointLight(new THREE.Color(1.0, 0.82, 0.6), LANTERN_I, 40, 1.4);
const fireLight = new THREE.PointLight(new THREE.Color(1.0, 0.52, 0.2), 9, 7.5, 2); // a campfire only lights the camp; the herd stays in the dark
fireLight.position.copy(FIRE_POS).add(new THREE.Vector3(0, 0.5, 0));
const moon = new THREE.DirectionalLight(new THREE.Color(0.55, 0.62, 0.8), 0.05);
moon.position.set(-20, 25, -45);
scene.add(lanternLight, fireLight, moon, new THREE.HemisphereLight(0x0c1018, 0x040302, 0.05));

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const vmPass = new RenderPass(vmScene, vmCamera);
vmPass.clear = false; vmPass.clearDepth = true;
composer.addPass(vmPass);
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

/*PLAYER*/
/*IDLE*/
/*ADAPT*/

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
ui.lampBtn.addEventListener('click', (e) => { e.stopPropagation(); lampAction(); });
const raiseDown = (e) => { e.preventDefault(); e.stopPropagation(); raiseTouch = true; };
const raiseUp = (e) => { e.stopPropagation(); raiseTouch = false; };
ui.raiseBtn.addEventListener('pointerdown', raiseDown);
ui.raiseBtn.addEventListener('pointerup', raiseUp); ui.raiseBtn.addEventListener('pointercancel', raiseUp); ui.raiseBtn.addEventListener('pointerleave', raiseUp);
document.addEventListener('mousedown', (e) => { if (e.button === 2 && started) raiseMouse = true; });
document.addEventListener('mouseup', (e) => { if (e.button === 2) raiseMouse = false; });
document.addEventListener('contextmenu', (e) => e.preventDefault());

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

// ---------------- frame loop ----------------
const FRAME_MS = 1000 / 60;
let nextDue = 0, last = performance.now(), fpsAcc = 0, fpsN = 0, slow = 0, pendingResize = false;
const fwd = new THREE.Vector3(), tmpV = new THREE.Vector3(), flameCam = new THREE.Vector3(), fireCam = new THREE.Vector3();
const NIGHT = { fogC: new THREE.Color(0.036, 0.037, 0.042), fogD: 0.05, zen: new THREE.Color(0.0042, 0.0045, 0.0056) };
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
  let ix = 0, iz = 0;
  if (keys.has('KeyD') || keys.has('ArrowRight')) ix += 1;
  if (keys.has('KeyA') || keys.has('ArrowLeft')) ix -= 1;
  if (keys.has('KeyW') || keys.has('ArrowUp')) iz += 1;
  if (keys.has('KeyS') || keys.has('ArrowDown')) iz -= 1;
  ix += joy.x; iz -= joy.y;
  const im = Math.hypot(ix, iz); if (im > 1) { ix /= im; iz /= im; }
  if (lamp.mode === 'relight') { ix *= 0.2; iz *= 0.2; }
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

  // the lantern
  lampStep(dt);
  holdStep(dt, time, speed, bobA);
  lanternSwing.updateMatrixWorld(true);
  flameCam.copy(FLAME_LOCAL); lanternSwing.localToWorld(flameCam); // camera space (vm scene root = camera)
  const lv = lamp.level * (1 + 0.04 * Math.sin(time * 11.0) * Math.sin(time * 17.3 + 1.1) + 0.02 * Math.sin(time * 31.0));
  vmFlame.position.copy(flameCam); vmFlame.intensity = 1.0 * lv;
  lanternLight.position.copy(flameCam).applyQuaternion(camera.quaternion).add(camera.position);
  lanternLight.intensity = LANTERN_I * lv;
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
  scene.fog.density = lerp(DAY.fogD, NIGHT.fogD, n);
  sky.material.uniforms.uHor.value.copy(DAY.hor).lerp(NIGHT.fogC, n);
  sky.material.uniforms.uZen.value.copy(DAY.zen).lerp(NIGHT.zen, n);
  trees.visible = n < 0.12;
  U.uEyeGain.value = 120 * lamp.level;
  U.uEyeSelf.value = 5.0 * Math.min(1, n * 2.2);
  finalPass.uniforms.uSeed.value = (now * 0.061) % 997;

  for (const c of cows) cowStep(c, dt, time);
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
document.addEventListener('visibilitychange', () => { if (!document.hidden) { last = performance.now(); nextDue = 0; requestAnimationFrame(frame); sound.resume(); } });

// ---------------- boot ----------------
(async () => {
  try {
    makeLantern();
    makeArm();
    let parts = 0;
    const bump = () => { parts++; ui.loadTxt.textContent = `불러오는 중… ${Math.round((parts / 4) * 100)}%`; };
    const [geos] = await Promise.all([loadVariants(bump), loadHand().then(bump)]);
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
        mesh, s: h.s, phase: i * 1.7, blockers, staring: false, headWorld: new THREE.Vector3(),
        ai: { t: rand(0, 3), yaw: rand(-0.4, 0.4), pitch: rand(-0.9, 0.0), tYaw: 0, tPitch: -0.5, flick: 0 },
      });
    });
    renderer.compile(scene, camera);
    renderer.compile(vmScene, vmCamera);
    ui.loadTxt.textContent = TOUCH ? '왼쪽을 밀어 걷고, 오른쪽을 끌어 둘러봐요' : 'WASD 걷기 · 마우스 둘러보기 · 스페이스/오른쪽 클릭 랜턴 들기 · F 끄기와 불 붙이기';
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
    state: () => ({ mode: lamp.mode, level: lamp.level, oil: lamp.oil, nightT, raiseT, pos: player.pos.toArray() }),
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

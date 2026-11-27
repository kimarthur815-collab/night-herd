// Night Herd: the revolver candidates, side by side on a turntable.
// The gun turns under lighting that stays put, like a product turntable; buttons cock and fire it.
import * as THREE from 'three';
import { REVOLVERS, makeRevolverEnvironments, loadRevolver, cockRevolver, fireRevolver, updateRevolver, reloadRevolver } from './revolver-model.js';

const GUNS = {
  colt75: {
    tag: '게임에 쓸 총', chip: '① 콜트 기병용', title: '① 콜트 피스메이커 7½″ · 기병용',
    sub: '1873년 미군 제식 · .45 콜트 6연발 · 청색 총열과 실린더, 무지갯빛 표면경화 프레임 · 호두나무 통손잡이',
    pts: ['가장 유명한 서부 리볼버예요. 총열이 길어 1인칭에서 겨누는 맛이 좋아요.', '장전은 옆의 작은 덮개를 열고 한 발씩 (느리고 긴장돼요).', '총열이 길어서 화면을 조금 더 가려요.'],
  },
  colt475: {
    tag: '나중에 업그레이드: 공이치기와 겨누기가 빨라지고 화면을 덜 가려요. 대신 탄이 조금 더 퍼져요.', chip: '② 콜트 니켈', title: '② 콜트 피스메이커 4¾″ · 민수용 니켈',
    sub: '1879년 무렵부터 · .45 콜트 6연발 · 니켈 도금 · 상아 손잡이',
    pts: ['짧아서 화면을 덜 가리고, 랜턴 불빛에 은색으로 번쩍여요.', '장전은 ①과 같아요 (한 발씩).', '밝게 빛나서 어두운 분위기와는 덜 어울릴 수 있어요.'],
  },
  schofield: {
    tag: '후보', chip: '③ S&W 스코필드', title: '③ 스미스 & 웨슨 스코필드 7″',
    sub: '1875년 미군 채택 · .45 스코필드 6연발 · 청색, 표면경화 공이 · 호두나무 손잡이 · 끈 고리',
    pts: ['총을 아래로 꺾어 열면 탄피 6개가 한꺼번에 튀어나와요 (장전이 빨라요).', '뒤쪽 위의 걸쇠와 손잡이 밑 고리가 독특해요. 실린더는 콜트와 반대로 돌아요.', '콜트보다 덜 알려진 모양이에요.'],
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
const ENV = makeRevolverEnvironments(renderer);
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

const flashTex = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d'), gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(255,250,230,1)'); gr.addColorStop(0.18, 'rgba(255,200,110,0.85)'); gr.addColorStop(0.5, 'rgba(255,120,40,0.25)'); gr.addColorStop(1, 'rgba(255,90,20,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
})();

const turntable = new THREE.Group(); scene.add(turntable);
const guns = {};
async function loadGun(id) {
  if (guns[id]) return guns[id];
  const r = await loadRevolver(`data/${id}.json`);
  const center = new THREE.Group(), recoil = new THREE.Group();
  recoil.position.copy(r.grip); r.group.position.copy(r.grip).negate(); // the gun kicks up about the hand
  recoil.add(r.group); center.add(recoil);
  const mid = new THREE.Box3().setFromObject(center).getCenter(new THREE.Vector3()); // measured through the recoil pivot
  center.position.copy(mid).negate();
  const flash = new THREE.Sprite(new THREE.SpriteMaterial({ map: flashTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 }));
  flash.position.copy(r.muzzle); flash.position.z -= 0.025; flash.scale.setScalar(0.001); r.group.add(flash);
  return (guns[id] = { id, r, conf: GUNS[id], root: center, recoil, flash, kick: 0, flashT: 9 });
}
const cock = (g) => g && cockRevolver(g.r, snd);
const fire = (g) => g && fireRevolver(g.r, snd);
function step(g, dt) {
  updateRevolver(g.r, dt, { click: snd.click, shot: () => { g.kick = 1; g.flashT = 0; snd.bang(); updateAmmo(); }, dry: () => { snd.click(0.7, 1800); updateAmmo(); } });
  // recoil: the muzzle flips up and settles back
  g.kick = Math.max(0, g.kick - dt * 3.2);
  const k = g.kick, kk = k * k * (3 - 2 * k);
  g.recoil.rotation.x = 0.42 * kk; g.recoil.position.z = g.r.grip.z + 0.012 * kk;
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
  const n = cur.r.state.loaded.filter(Boolean).length;
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
$('reload').addEventListener('click', () => { if (cur && !cur.r.state.anim) { reloadRevolver(cur.r); snd.click(0.3, 1500); updateAmmo(); } });
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

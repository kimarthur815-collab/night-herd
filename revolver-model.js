// Night Herd: revolvers of the 1880s, baked from signed distance fields (revolver-sdf.js, gen-revolvers.mjs).
// One module for the game and the comparison page: the finishes, loading a baked gun, putting it together,
// and its action (cock, fire, the cylinder turning a sixth). Units are metres. The gun's own frame:
// x = its right side, y = up, +z = back toward the shooter, the muzzle points to -z, the bore axis is y = 0.
import * as THREE from 'three';

// what each gun is made of, how worn it is, which way its cylinder turns (Colt clockwise seen from behind, S&W the other way)
export const REVOLVERS = {
  colt75: { name: 'Colt Single Action Army 7½″ Cavalry', mats: { frame: 'case', barrel: 'blued', straps: 'blued', grip: 'walnut', screws: 'fireblue', cylinder: 'blued', hammer: 'case', trigger: 'case' }, wear: 0.75, turn: 1, hamMax: 0.82 },
  colt475: { name: 'Colt Single Action Army 4¾″ Civilian, nickel', mats: { frame: 'nickel', barrel: 'nickel', straps: 'nickel', grip: 'ivory', screws: 'nickel', cylinder: 'nickel', hammer: 'nickel', trigger: 'nickel' }, wear: 0.45, turn: 1, hamMax: 0.82 },
  schofield: { name: 'Smith & Wesson Model 3 Schofield 7″', mats: { frame: 'blued', barrel: 'blued', grip: 'walnut', screws: 'blued', ring: 'steel', cylinder: 'blued', hammer: 'case', trigger: 'case' }, wear: 0.75, turn: -1, hamMax: 0.78 },
};

// ---------------- lighting: polished metal needs something to reflect ----------------
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
// three environments to light a gun with: a dark studio with softboxes, the desert by day, night by a lantern held to the left
export function makeRevolverEnvironments(renderer) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = {
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
  pmrem.dispose();
  return env;
}

// ---------------- finishes ----------------
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
#elif KIND == 8 // brass cases, gone dull and brown with handling
  c = vec3(0.78, 0.56, 0.26) * (0.85 + 0.2*vn(P*600.0));
  c = mix(c, vec3(0.42, 0.28, 0.12), smoothstep(0.45, 0.75, fbm(P*300.0))*0.5);
  rough = 0.32 + 0.1*vn(P*900.0);
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
const KINDS = { blued: 0, case: 1, nickel: 2, walnut: 3, ivory: 4, fireblue: 5, lead: 6, steel: 7, brass: 8 };
const matCache = new Map();
export function revolverMaterial(kind, wear) {
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
export function parseBaked(j) {
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
export function splitBelow(g, yCut) {
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
// a cartridge, rim at z = 0 running forward to -z: a brass case (open at the mouth, so a fired one is hollow)
// and a round-nosed lead bullet. sc shortens it for a shorter cylinder (the .45 Schofield round)
const cartCache = new Map();
function cartridgeGeos(sc) {
  if (cartCache.has(sc)) return cartCache.get(sc);
  const lathe = (prof) => {
    const g = new THREE.LatheGeometry(prof.map(([r, d]) => new THREE.Vector2(r, d * sc)), 24);
    g.rotateX(-Math.PI / 2);
    return plainAtt(g);
  };
  const geos = {
    case: lathe([[0.0001, 0.0002], [0.0024, 0.0002], [0.0025, 0], [0.0064, 0], [0.0065, 0.0004], [0.0064, 0.0013], [0.0058, 0.0016], [0.0058, 0.031], [0.0054, 0.031], [0.0053, 0.0285], [0.0053, 0.004], [0.0001, 0.004]]),
    bullet: lathe([[0.0001, 0.026], [0.0057, 0.026], [0.0057, 0.0315], [0.0055, 0.0332], [0.0049, 0.0348], [0.0039, 0.0361], [0.0025, 0.037], [0.001, 0.0373], [0, 0.0374]]),
    caseLen: 0.031 * sc, tipLen: 0.0374 * sc,
  };
  cartCache.set(sc, geos);
  return geos;
}

// put a baked gun together: the cylinder, hammer and trigger each on a pivot, five lead bullets in the cylinder
export function buildRevolver(meta, geos, conf) {
  const group = new THREE.Group();
  const M = (k) => revolverMaterial(k, conf.wear);
  const add = (geo, k, parent = group) => { const m = new THREE.Mesh(geo, M(k)); parent.add(m); return m; };
  const cyl = new THREE.Group(), ham = new THREE.Group(), trg = new THREE.Group();
  let gate = null, rod = null;
  cyl.position.set(0, meta.cylY, 0);
  ham.position.set(0, meta.hammerPivot[1], meta.hammerPivot[0]);
  trg.position.set(0, meta.triggerPivot[1], meta.triggerPivot[0]);
  group.add(cyl, ham, trg);
  for (const n of meta.parts) {
    const geo = geos[n];
    if (n === 'cylinder') { geo.translate(0, -meta.cylY, 0); add(geo, conf.mats.cylinder, cyl); }
    else if (n === 'hammer') add(geo, conf.mats.hammer, ham);
    else if (n === 'trigger') add(geo, conf.mats.trigger, trg);
    else if (n === 'gate') { // the loading gate swings out on a hinge along its lower edge
      gate = new THREE.Group(); gate.position.set(meta.gatePivot[0], meta.gatePivot[1], 0); group.add(gate);
      geo.translate(-meta.gatePivot[0], -meta.gatePivot[1], 0); add(geo, conf.mats.frame, gate);
    } else if (n === 'ejector') { rod = new THREE.Group(); group.add(rod); add(geo, conf.mats.barrel, rod); }
    else if (n === 'screws' && conf.mats.ring) { const [s, r] = splitBelow(geo, -0.11); add(s, conf.mats.screws); add(r, conf.mats.ring); }
    else add(geo, conf.mats[n]);
  }
  // a cartridge in every chamber, its rim sunk in the recess at the back of the cylinder
  const cg = cartridgeGeos(Math.min(1, (-meta.chamberZ - 0.0031) / 0.0374)), carts = [], bullets = [];
  for (let k = 0; k < 6; k++) {
    const a = Math.PI / 2 + conf.turn * k * Math.PI / 3, c = new THREE.Group();
    c.userData.home = new THREE.Vector3(Math.cos(a) * meta.chamberR, Math.sin(a) * meta.chamberR, -0.0001);
    c.userData.out = new THREE.Vector3(Math.cos(a), Math.sin(a), 0); // straight out from the cylinder's axis
    c.position.copy(c.userData.home); cyl.add(c);
    c.userData.case = add(cg.case, 'brass', c); bullets.push(add(cg.bullet, 'lead', c));
    carts.push(c);
  }
  const r = { conf, meta, group, cylinder: cyl, hammer: ham, trigger: trg, gate, rod, carts, bullets, cart: cg, drops: [],
    muzzle: new THREE.Vector3(0, 0, meta.zMuz), grip: new THREE.Vector3(0, -0.08, 0.045), // where the hand holds it: recoil turns about here
    state: { top: 0, chambers: [], cocked: false, anim: null } };
  reloadRevolver(r, {}, { instant: true });
  return r;
}
// load a packed gun (one JSON: its id, meta and every part), from a URL or the parsed object
export async function loadRevolver(src) {
  const pack = typeof src === 'string' ? await (await fetch(src)).json() : src;
  const geos = {};
  for (const n of pack.meta.parts) geos[n] = parseBaked(pack.parts[n]);
  return buildRevolver(pack.meta, geos, REVOLVERS[pack.id]);
}

// ---------------- the action ----------------
// a single action: cock draws the hammer back and turns the cylinder a sixth; fire drops it on the chamber now on top.
// The hammer rests on the empty sixth, as it was carried. `on` gets the moments to make sounds and flashes for:
// on.click(gain, pitch), on.shot(), on.dry(); while reloading also on.slide() (a case pushed out), on.drop() (it lands),
// on.insert() (a round goes in).
const TRIG_BACK = 0.11;
const ease = (u) => u * u * (3 - 2 * u), sstep = (a, b, x) => ease(Math.min(1, Math.max(0, (x - a) / (b - a))));
export function poseRevolver(r, ham, trig, cylA) {
  r.hammer.rotation.x = r.conf.hamMax * ham;
  r.trigger.rotation.x = -TRIG_BACK * trig;
  r.cylinder.rotation.z = -r.conf.turn * cylA * Math.PI / 3;
}
// what each chamber holds shows in its cartridge: a fired one keeps its empty case
function showChambers(r) {
  r.carts.forEach((c, k) => {
    const h = r.state.chambers[k];
    c.visible = h !== 'empty'; r.bullets[k].visible = h === 'live';
    c.position.copy(c.userData.home); c.quaternion.identity();
  });
}
export const liveRounds = (r) => r.state.chambers.filter((h) => h === 'live').length;
// reload. A Colt goes one round at a time through the loading gate: half cock, open the gate, then a click of the
// cylinder at a time, the ejector pushing out each fired case and a fresh round going in, one chamber left empty
// for the hammer to rest on (load one, skip one, load four); close the gate, cock, and ease the hammer down.
// A gun without a gate (or opts.instant) is simply full again.
export function reloadRevolver(r, on = {}, opts = {}) {
  const s = r.state;
  if (s.anim) return false;
  if (!r.gate || opts.instant) {
    s.chambers = ['empty', 'live', 'live', 'live', 'live', 'live']; s.top = 0; s.cocked = false;
    for (const d of r.drops) d.obj.removeFromParent();
    r.drops.length = 0; showChambers(r); poseRevolver(r, 0, 1, 0);
    if (r.gate) r.gate.rotation.z = 0;
    return true;
  }
  const t0 = s.top, ch = s.chambers.slice(), E = (t0 + 1) % 6, steps = [{ k: 'half' }, { k: 'open' }];
  for (let i = 1; i <= 6; i++) {
    const c = (t0 + i - 1) % 6; // the chamber at the gate after i clicks
    steps.push({ k: 'turn' });
    if (ch[c] === 'spent' || (c === E && ch[c] !== 'empty')) { steps.push({ k: 'eject', c }); ch[c] = 'empty'; }
    if (c !== E && ch[c] === 'empty') { steps.push({ k: 'insert', c }); ch[c] = 'live'; }
  }
  steps.push({ k: 'close' }, { k: 'cock' }, { k: 'lower' });
  s.cocked = false;
  s.anim = { type: 'reload', steps, i: -1, t: 0 };
  return true;
}
const STEP_T = { half: 0.3, open: 0.3, turn: 0.22, eject: 0.6, insert: 0.5, close: 0.28, cock: 0.34, lower: 0.5 };
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _v = new THREE.Vector3(), _ax = new THREE.Vector3();
function dropCase(r, k, on) { // the case leaves the cylinder and falls, tumbling, out of the gun
  const c = r.carts[k], d = c.clone();
  c.updateMatrix(); _m.multiplyMatrices(r.cylinder.matrix, c.matrix);
  _m.decompose(d.position, d.quaternion, d.scale);
  r.group.add(d);
  const out = _v.copy(c.userData.out).applyQuaternion(r.cylinder.quaternion);
  r.drops.push({ obj: d, t: 0, v: new THREE.Vector3(out.x * 0.35, out.y * 0.35 + 0.15, 0.45), w: new THREE.Vector3(8 + Math.random() * 6, 3 - Math.random() * 6, 0) });
  c.visible = false; c.position.copy(c.userData.home);
  on.slide?.();
}
function stepDrops(r, dt, on) {
  if (!r.drops.length) return;
  r.group.updateWorldMatrix(true, false);
  r.group.matrixWorld.decompose(_v, _q, _ax);
  const g = new THREE.Vector3(0, -9.8 / _ax.y, 0).applyQuaternion(_q.invert()); // down, in the gun's own frame
  for (let i = r.drops.length - 1; i >= 0; i--) {
    const d = r.drops[i];
    d.t += dt; d.v.addScaledVector(g, dt); d.obj.position.addScaledVector(d.v, dt);
    d.obj.rotation.x += d.w.x * dt; d.obj.rotation.y += d.w.y * dt;
    if (!d.rang && d.t > 0.5) { d.rang = 1; on.drop?.(); }
    if (d.t > 1.4) { d.obj.removeFromParent(); r.drops.splice(i, 1); }
  }
}
// one frame of a reload; returns the pose
function stepReload(r, a, dt, on) {
  const s = r.state;
  let st = a.steps[a.i];
  if (a.i < 0 || a.t >= STEP_T[st.k]) { // the next step begins
    if (st?.k === 'eject') r.rod.position.z = 0;
    a.i++; a.t = 0; st = a.steps[a.i];
    if (!st) { s.anim = null; return [0, 1, s.top, 0]; }
    if (st.k === 'turn' || st.k === 'cock') { a.from = s.top; s.top = (s.top + 1) % 6; }
    if (st.k === 'insert') { s.chambers[st.c] = 'live'; const c = r.carts[st.c]; c.visible = true; r.bullets[st.c].visible = true; on.insert?.(); }
    if (st.k === 'open' || st.k === 'close' || st.k === 'half') on.click?.(0.3, st.k === 'half' ? 2600 : 1700);
  }
  a.t += dt;
  const u = Math.min(1, a.t / STEP_T[st.k]), e = ease(u);
  let ham = 0.3, trig = 0.5, gate = 1, cylA = s.top;
  switch (st.k) {
    case 'half': ham = 0.3 * e; trig = 1 - 0.5 * e; gate = 0; break;
    case 'open': gate = e; break;
    case 'turn': cylA = a.from + sstep(0, 0.8, u); if (!a.c && u > 0.8) { a.c = 1; on.click?.(0.18, 4200); } break;
    case 'eject': { // push the rod, the case slides out the back with it, then the rod springs home
      const push = u < 0.55 ? ease(u / 0.55) : 1 - ease((u - 0.55) / 0.45);
      r.rod.position.z = push * r.meta.rodTravel;
      const c = r.carts[st.c], front = c.userData.home.z - (s.chambers[st.c] === 'live' ? r.cart.tipLen : r.cart.caseLen);
      if (c.visible) c.position.z = c.userData.home.z + Math.max(0, r.meta.rodTip + push * r.meta.rodTravel - front);
      if (c.visible && u >= 0.55) { s.chambers[st.c] = 'empty'; dropCase(r, st.c, on); }
      break;
    }
    case 'insert': { // nose first into the chamber mouth, tilted out, then pushed home straight
      const c = r.carts[st.c], h = c.userData.home, L = r.cart.tipLen;
      const tilt = 0.35 * (1 - sstep(0.4, 1, u)), tip = new THREE.Vector3(h.x, h.y, 0);
      if (u < 0.4) tip.addScaledVector(c.userData.out, 0.022 * (1 - ease(u / 0.4))).z += 0.004 * (1 - ease(u / 0.4));
      else tip.z = -L * ease((u - 0.4) / 0.6) + 0.0;
      _ax.set(-c.userData.out.y, c.userData.out.x, 0);
      c.quaternion.setFromAxisAngle(_ax, tilt);
      c.position.copy(tip).add(_v.set(0, 0, L).applyQuaternion(c.quaternion));
      if (u >= 1) { c.position.copy(h); c.quaternion.identity(); }
      break;
    }
    case 'close': gate = 1 - e; break;
    case 'cock': gate = 0; ham = 0.3 + 0.7 * e; cylA = a.from + sstep(0.2, 0.85, u); trig = 0.5 * (1 - sstep(0.7, 1, u)); if (!a.c2 && u >= 1) { a.c2 = 1; on.click?.(0.6, 2900); } break;
    case 'lower': gate = 0; ham = 1 - ease(Math.max(0, (u - 0.15) / 0.85)); trig = u < 0.15 ? 1.45 * (u / 0.15) : 1.45 - 0.45 * sstep(0.85, 1, u); break;
  }
  if (r.gate) r.gate.rotation.z = -1.65 * gate;
  return [ham, trig, cylA];
}
export function cockRevolver(r, on = {}) {
  const s = r.state;
  if (s.anim || s.cocked) return false;
  s.anim = { type: 'cock', t: 0, from: s.top }; s.top = (s.top + 1) % 6;
  on.click?.(0.25, 2400);
  return true;
}
export function fireRevolver(r, on = {}) {
  const s = r.state;
  if (s.anim) return false;
  if (!s.cocked) return cockRevolver(r, on); // the hammer has to come back first
  s.anim = { type: 'fire', t: 0 };
  return true;
}
export function updateRevolver(r, dt, on = {}) {
  const s = r.state, a = s.anim;
  let ham = s.cocked ? 1 : 0, trig = s.cocked ? 0 : 1, cylA = s.top;
  stepDrops(r, dt, on);
  if (a && a.type === 'reload') { [ham, trig, cylA] = stepReload(r, a, dt, on); }
  else if (a) {
    a.t += dt;
    if (a.type === 'cock') {
      const u = Math.min(1, a.t / 0.34);
      ham = ease(u); cylA = a.from + sstep(0.25, 0.85, u); trig = 1 - sstep(0.75, 1, u);
      if (!a.c1 && u > 0.5) { a.c1 = 1; on.click?.(0.35, 3300); }
      if (u >= 1) { on.click?.(0.6, 2900); s.cocked = true; s.anim = null; }
    } else {
      const u = a.t;
      trig = Math.min(1.45, (u / 0.05) * 1.45);
      ham = u < 0.05 ? 1 : Math.max(0, 1 - (u - 0.05) / 0.03);
      if (!a.shot && u >= 0.08) {
        a.shot = 1; s.cocked = false;
        if (s.chambers[s.top] === 'live') { s.chambers[s.top] = 'spent'; r.bullets[s.top].visible = false; on.shot?.(); }
        else on.dry?.();
      }
      if (u > 0.08) trig = 1 + 0.45 * Math.max(0, 1 - (u - 0.08) / 0.2);
      if (u > 0.32) s.anim = null;
    }
  }
  poseRevolver(r, ham, trig, cylA);
}

// Run the reload through many starting states and check what it leaves behind and that each case comes out at the gate.
import * as THREE from 'three';
import { readFileSync } from 'node:fs';
import { buildRevolver, REVOLVERS, reloadRevolver, cockRevolver, fireRevolver, updateRevolver, liveRounds } from './revolver-model.js';
const meta = JSON.parse(readFileSync('revolvers/data/colt75.json', 'utf8')).meta;
const geos = {};
for (const n of meta.parts) { const g = new THREE.BoxGeometry(0.01, 0.01, 0.01); g.setAttribute('aAtt', new THREE.BufferAttribute(new Uint8Array(g.attributes.position.count * 2).fill(200), 2, true)); geos[n] = g; }
const r = buildRevolver(meta, geos, REVOLVERS.colt75);
const wrap = (a) => ((a % (2 * Math.PI)) + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
let fails = 0, maxT = 0;
const fail = (m) => { fails++; if (fails < 15) console.log('FAIL', m); };
function run(label) {
  const before = r.state.chambers.slice();
  const started = reloadRevolver(r, {});
  if (!started) return { started };
  let t = 0, lastStep = -2, ejected = 0, inserted = 0;
  while (r.state.anim && t < 30) {
    updateRevolver(r, 1 / 60, {}); t += 1 / 60;
    const a = r.state.anim;
    if (a && a.i !== lastStep) {
      lastStep = a.i; const st = a.steps[a.i];
      if (st && (st.k === 'eject' || st.k === 'insert')) {
        st.k === 'eject' ? ejected++ : inserted++;
        // the chamber being worked must sit at the gate (2 o'clock seen from behind)
        const ang = Math.PI / 2 + r.conf.turn * st.c * Math.PI / 3 + r.cylinder.rotation.z;
        if (Math.abs(wrap(ang - meta.gateAngle)) > 0.01) fail(`${label}: ${st.k} chamber ${st.c} at ${(ang * 180 / Math.PI).toFixed(0)} deg, not at the gate`);
        if (st.k === 'eject' && before[st.c] === 'live') fail(`${label}: ejected a live round`);
      }
    }
  }
  maxT = Math.max(maxT, t);
  const s = r.state, ch = s.chambers;
  if (s.anim) fail(`${label}: never finished`);
  if (ch[s.top] !== 'empty') fail(`${label}: hammer rests on ${ch[s.top]} (chamber ${s.top})`);
  if (liveRounds(r) !== 5) fail(`${label}: ${liveRounds(r)} live rounds after reloading`);
  if (ch.includes('spent')) fail(`${label}: a fired case left in`);
  if (s.cocked || Math.abs(r.hammer.rotation.x) > 1e-6 || Math.abs(r.gate.rotation.z) > 1e-6 || Math.abs(r.rod.position.z) > 1e-6) fail(`${label}: not back at rest (hammer ${r.hammer.rotation.x.toFixed(3)}, gate ${r.gate.rotation.z.toFixed(3)}, rod ${r.rod.position.z.toFixed(4)})`);
  r.carts.forEach((c, k) => { if (c.visible !== (ch[k] !== 'empty') || r.bullets[k].visible !== (ch[k] === 'live') || c.position.distanceTo(c.userData.home) > 1e-6) fail(`${label}: chamber ${k} shows wrong`); });
  return { started, t, ejected, inserted };
}
const shoot = (n) => { for (let i = 0; i < n; i++) { cockRevolver(r, {}); for (let k = 0; k < 60; k++) updateRevolver(r, 1 / 60, {}); fireRevolver(r, {}); for (let k = 0; k < 60; k++) updateRevolver(r, 1 / 60, {}); } };
// full already: nothing should happen
reloadRevolver(r, {}, { instant: true });
if (run('full').started) fail('full: reloading a full gun started');
for (let shots = 1; shots <= 7; shots++) {
  for (let rep = 0; rep < 6; rep++) {
    reloadRevolver(r, {}, { instant: true }); shoot(rep); run('warm-up'); // start from different turns of the cylinder
    shoot(shots);
    const res = run(`after ${shots} shots (rep ${rep})`);
    if (rep === 0) console.log(`${shots} shot(s): ${res.started ? `${res.t.toFixed(1)} s, ${res.ejected} out, ${res.inserted} in` : 'nothing to do'}`);
  }
}
// reloading while cocked
reloadRevolver(r, {}, { instant: true }); shoot(2); cockRevolver(r, {}); for (let k = 0; k < 60; k++) updateRevolver(r, 1 / 60, {});
run('while cocked');
console.log(fails ? `${fails} failures` : 'all checks passed', `, longest reload ${maxT.toFixed(1)} s`);

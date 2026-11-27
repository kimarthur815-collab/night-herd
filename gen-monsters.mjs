// Bake the monster candidates into compact meshes the viewer animates on the GPU.
// usage: node gen-monsters.mjs [step=0.0045] [outDir=monsters/data] [only=regex on id] [err=0.0012]
// Writes one file per monster: {id, meta, vc, ic, i32, ps, data} with position, normal, aAtt (ao, curvature),
// aMat (teeth, mouth, flesh, bone), aExt (eye, breath, fur, wrinkle) and aRig (jaw, head, neck, sway),
// and (leg: true) aLeg (limb number / 8, hip weight, knee weight, 0): the legs (the shadow's arms) swing on their hips and knees.
import { writeFileSync, mkdirSync } from 'node:fs';
import { meshSDF } from './mesher.js';
import { MONSTERS, tubeT } from './monsters-sdf.js';
import { MeshoptSimplifier } from 'meshoptimizer';
const step = Number(process.argv[2] || 0.0045), OUT = process.argv[3] || 'monsters/data', ONLY = process.argv[4] ? new RegExp(process.argv[4]) : null;
const ERR = Number(process.argv[5] || 0.0012);
mkdirSync(OUT, { recursive: true });
await MeshoptSimplifier.ready;
const q8 = (v) => Math.max(0, Math.min(255, Math.round(v * 255)));
for (const [id, make] of MONSTERS) {
  if (ONLY && !ONLY.test(id)) continue;
  const t0 = Date.now(), mon = make(), sdf = (x, y, z) => mon.sdf(x, y, z);
  const [lo, hi] = mon.bounds;
  const m = meshSDF(sdf, lo, hi, step, { aoScale: 0.06, margin: 0.003 });
  const nv = m.positions.length / 3, t1 = Date.now();
  const [ix] = MeshoptSimplifier.simplify(m.indices, m.positions, 3, 0, ERR / MeshoptSimplifier.getScale(m.positions, 3), []);
  const map = new Int32Array(nv).fill(-1), order = [], idx = new Uint32Array(ix.length);
  for (let i = 0; i < ix.length; i++) { let k = map[ix[i]]; if (k < 0) { k = map[ix[i]] = order.length; order.push(ix[i]); } idx[i] = k; }
  let ext = 0; for (const src of order) for (let c = 0; c < 3; c++) ext = Math.max(ext, Math.abs(m.positions[3 * src + c]));
  const vc = order.length, PS = 32767 / (ext + 0.001);
  // the bake box must hold the whole monster: a surface touching it is cut open
  const touch = new Set();
  for (const src of order) for (let c = 0; c < 3; c++) { const v = m.positions[3 * src + c]; if (v < lo[c] + step * 1.5) touch.add('-' + 'xyz'[c]); if (v > hi[c] - step * 1.5) touch.add('+' + 'xyz'[c]); }
  if (touch.size) console.warn(`${id}: surface touches the bake box at ${[...touch].join(' ')}`);
  const pos = new Int16Array(vc * 3), nrm = new Int8Array(vc * 3), att = new Uint8Array(vc * 2), mat = new Uint8Array(vc * 4), ex = new Uint8Array(vc * 4), rig = new Uint8Array(vc * 4), leg = new Uint8Array(vc * 4);
  // the limbs: legs (or the shadow's arms), each with what hangs off its end (the claws, the fingers)
  const tubes = mon.legs?.length ? mon.legs : (mon.arms || []), hipZ = tubes.reduce((a, f) => a + f.pts[0][2], 0) / (tubes.length || 1);
  const arc = (P) => { const acc = [0]; for (let i = 1; i < P.length; i++) acc.push(acc[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1], P[i][2] - P[i - 1][2])); return acc.map((v) => v / acc[acc.length - 1]); };
  const limbs = tubes.map((f) => ({ f, hip: f.pts[0], knee: f.pts[1], kneeT: arc(f.pts)[1], side: Math.sign(f.pts[0][0]), fore: mon.legs?.length ? (f.pts[0][2] > hipZ ? 1 : -1) : 1, end: f.pts[f.pts.length - 1] }));
  const hangs = [...(mon.claws || []), ...(mon.fingers || [])].map((f) => { let k = 0, b = 1e9; limbs.forEach((L, j) => { const d = Math.hypot(L.end[0] - f.pts[0][0], L.end[1] - f.pts[0][1], L.end[2] - f.pts[0][2]); if (d < b) { b = d; k = j; } }); return { f, k }; });
  const legAt = (x, y, z) => {
    let best = -1, bd = 0.025, t = 0;
    limbs.forEach((L, j) => { const d = L.f(x, y, z); if (d < bd) { bd = d; best = j; } });
    for (const h of hangs) { const d = h.f(x, y, z); if (d < bd) { bd = d; best = h.k; t = 1; } }
    if (best < 0) return [0, 0, 0, 0];
    const L = limbs[best]; if (t < 1) t = tubeT(L.f, x, y, z);
    const sstep = (a, b, v) => { const u = Math.max(0, Math.min(1, (v - a) / (b - a))); return u * u * (3 - 2 * u); };
    return [(best + 1) / 8, sstep(0.03, 0.25, t), sstep(L.kneeT - 0.03, L.kneeT + 0.1, t), 0];
  };
  // area-weighted face normals, used where the field's gradient is degenerate (sharp cuts in the hide)
  const fn = new Float32Array(vc * 3);
  for (let t = 0; t < idx.length; t += 3) {
    const [a, b, c] = [order[idx[t]], order[idx[t + 1]], order[idx[t + 2]]], P = m.positions;
    const ux = P[3 * b] - P[3 * a], uy = P[3 * b + 1] - P[3 * a + 1], uz = P[3 * b + 2] - P[3 * a + 2], vx = P[3 * c] - P[3 * a], vy = P[3 * c + 1] - P[3 * a + 1], vz = P[3 * c + 2] - P[3 * a + 2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    for (const k of [idx[t], idx[t + 1], idx[t + 2]]) { fn[3 * k] += nx; fn[3 * k + 1] += ny; fn[3 * k + 2] += nz; }
  }
  let fixed = 0;
  const h = 0.003;
  order.forEach((src, i) => {
    const x = m.positions[3 * src], y = m.positions[3 * src + 1], z = m.positions[3 * src + 2];
    const fl = Math.hypot(fn[3 * i], fn[3 * i + 1], fn[3 * i + 2]) || 1, gn = [m.normals[3 * src], m.normals[3 * src + 1], m.normals[3 * src + 2]], gl = Math.hypot(...gn);
    const agree = gl > 0.5 ? (gn[0] * fn[3 * i] + gn[1] * fn[3 * i + 1] + gn[2] * fn[3 * i + 2]) / (gl * fl) : -1;
    const N = agree > 0.3 ? gn.map((v) => v / gl) : [fn[3 * i] / fl, fn[3 * i + 1] / fl, fn[3 * i + 2] / fl];
    if (agree <= 0.3) fixed++;
    for (let c = 0; c < 3; c++) { pos[3 * i + c] = Math.round(m.positions[3 * src + c] * PS); nrm[3 * i + c] = Math.round(Math.max(-1, Math.min(1, N[c])) * 127); }
    att[2 * i] = q8(m.ao[src]);
    const f0 = sdf(x, y, z), lap = (sdf(x + h, y, z) + sdf(x - h, y, z) + sdf(x, y + h, z) + sdf(x, y - h, z) + sdf(x, y, z + h) + sdf(x, y, z - h) - 6 * f0) / (h * h);
    att[2 * i + 1] = q8(0.5 + lap * 0.004); // >0.5 creases and cavities, <0.5 ridges
    const a = mon.attrs(x, y, z);
    for (let c = 0; c < 4; c++) { mat[4 * i + c] = q8(a.mat[c]); ex[4 * i + c] = q8(a.ext[c]); rig[4 * i + c] = q8(a.rig[c]); }
    const lg = legAt(x, y, z); for (let c = 0; c < 4; c++) leg[4 * i + c] = q8(lg[c]);
  });
  const i32 = vc > 65535, I = i32 ? idx : Uint16Array.from(idx);
  const parts = i32 ? [I, pos, nrm, att, mat, ex, rig, leg] : [pos, I, nrm, att, mat, ex, rig, leg];
  const total = parts.reduce((s, a) => s + a.byteLength, 0), buf = Buffer.alloc(total);
  let o = 0; for (const a of parts) { Buffer.from(a.buffer, a.byteOffset, a.byteLength).copy(buf, o); o += a.byteLength; }
  const meta = { ...mon.meta(), limbs: limbs.map((L) => ({ hip: L.hip, knee: L.knee, side: L.side, fore: L.fore, arm: !mon.legs?.length })) };
  let nLeg = 0; for (let i = 0; i < vc; i++) if (leg[4 * i]) nLeg++;
  writeFileSync(`${OUT}/${id}.json`, JSON.stringify({ id, meta, vc, ic: idx.length, i32, ps: 1 / PS, leg: true, data: buf.toString('base64') }));
  console.log(`${id}: ${limbs.length} limbs, ${nLeg} limb vertices`);
  console.log(`${id} ${mon.name}: ${nv} -> ${vc} verts, ${idx.length / 3} tris, ${(total / 1024).toFixed(0)} KB, ${fixed} normals from faces, mesh ${((t1 - t0) / 1000).toFixed(1)} s, total ${((Date.now() - t0) / 1000).toFixed(1)} s`);
}

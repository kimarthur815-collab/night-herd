// Bake rest-pose cows with rig weights (head, neck, tail, legs).
// usage: node gen-slice.mjs [step=0.012] [outDir=slice/cows]
import { writeFileSync, mkdirSync } from 'node:fs';
import { Cow, meshCow } from './cow.js';
const OUT = process.argv[3] || 'slice/cows';
mkdirSync(OUT, { recursive: true });
const step = Number(process.argv[2] || 0.012);
const VARIANTS = [
  { earDroop: 0.27, bellyF: 1.0, widthF: 1.0, seed: 1 },
  { earDroop: 0.32, bellyF: 1.05, widthF: 1.03, seed: 4 },
  { earDroop: 0.24, bellyF: 1.02, widthF: 0.98, seed: 7 },
];
const meta = [];
VARIANTS.forEach((v, i) => {
  const t0 = Date.now();
  const cow = new Cow({ ...v });
  const m = meshCow(cow, { step });
  const vc = m.positions.length / 3, ic = m.indices.length;
  if (vc > 65535) throw new Error('too many verts ' + vc);
  const PS = 32767 / 2.0, HS = 32767 / 2.5;
  const pos = new Int16Array(vc * 3), head = new Int16Array(vc * 3), idx = new Uint16Array(ic);
  const nrm = new Int8Array(vc * 3), mat = new Uint8Array(vc * 4), ext = new Uint8Array(vc * 4), rig = new Uint8Array(vc * 4), leg = new Uint8Array(vc * 4);
  const q8 = (x) => Math.max(0, Math.min(255, Math.round(x * 255)));
  for (let k = 0; k < vc; k++) {
    const x = m.positions[3 * k], y = m.positions[3 * k + 1], z = m.positions[3 * k + 2];
    for (let c = 0; c < 3; c++) {
      pos[3 * k + c] = Math.round(m.positions[3 * k + c] * PS);
      head[3 * k + c] = Math.round(Math.max(-2.5, Math.min(2.5, m.hl[3 * k + c])) * HS);
      nrm[3 * k + c] = Math.round(Math.max(-1, Math.min(1, m.normals[3 * k + c])) * 127);
    }
    for (let c = 0; c < 4; c++) mat[4 * k + c] = q8(m.mat[4 * k + c]);
    ext[4 * k] = q8(m.eye[k]); ext[4 * k + 1] = q8(m.ext[3 * k]); ext[4 * k + 2] = q8(m.ext[3 * k + 1]); ext[4 * k + 3] = q8(m.ext[3 * k + 2]);
    const w = m.eye[k] > 0.5 ? [1, 1, 0] : cow.rigWeights(x, y, z);
    rig[4 * k] = q8(w[0]); rig[4 * k + 1] = q8(w[1]); rig[4 * k + 2] = q8(w[2]); rig[4 * k + 3] = 0;
    const lw = m.eye[k] > 0.5 ? [0, 0, 0] : cow.legWeights(x, y, z);
    leg[4 * k] = lw[0] * 50; leg[4 * k + 1] = q8(lw[1]); leg[4 * k + 2] = q8(lw[2]); leg[4 * k + 3] = 0;
  }
  idx.set(m.indices);
  const parts = [pos, head, idx, nrm, mat, ext, rig, leg];
  const total = parts.reduce((s, a) => s + a.byteLength, 0);
  const buf = Buffer.alloc(total);
  let o = 0;
  for (const a of parts) { Buffer.from(a.buffer, a.byteOffset, a.byteLength).copy(buf, o); o += a.byteLength; }
  writeFileSync(`${OUT}/cow${i}.json`, JSON.stringify({ data: buf.toString('base64') }));
  meta.push({ file: `cows/cow${i}.json`, vc, ic, ps: 1 / PS, hs: 1 / HS, leg: true });
  console.log(`variant ${i}: ${vc} verts, ${ic / 3} tris, ${(total / 1048576).toFixed(2)} MB, ${Date.now() - t0} ms`);
});
writeFileSync(`${OUT}/cows.json`, JSON.stringify(meta));

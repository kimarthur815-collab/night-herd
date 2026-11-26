// Bake light-weight cow variants for the web preview (quantized binary).
// Each variant differs in head yaw; every cow in the herd picks the closest one.
import { writeFileSync, mkdirSync } from 'node:fs';
import { Cow, meshCow } from './cow.js';

const OUT = 'preview/cows';
mkdirSync(OUT, { recursive: true });
const step = Number(process.argv[2] || 0.016);
export const VARIANTS = [
  { yaw: -1.05, earDroop: 0.26, bellyF: 1.02, widthF: 1.0, seed: 3 },
  { yaw: -0.52, earDroop: 0.31, bellyF: 1.05, widthF: 1.03, seed: 4 },
  { yaw: 0.0, earDroop: 0.27, bellyF: 1.0, widthF: 1.0, seed: 1 },
  { yaw: 0.52, earDroop: 0.33, bellyF: 1.04, widthF: 0.98, seed: 2 },
  { yaw: 1.05, earDroop: 0.25, bellyF: 1.02, widthF: 1.02, seed: 5 },
];
const pitch = 0.08;
const meta = [];
VARIANTS.forEach((v, i) => {
  const t0 = Date.now();
  const cow = new Cow({ widthF: v.widthF, bellyF: v.bellyF, earDroop: v.earDroop, seed: v.seed, yaw1: v.yaw * 0.45, yaw2: v.yaw * 0.55, pitch1: pitch * 0.35, pitch2: pitch * 0.65 });
  const m = meshCow(cow, { step });
  const vc = m.positions.length / 3, ic = m.indices.length;
  const i32 = vc > 65535;
  const PS = 32767 / 2.0; // positions in metres, range +-2 m
  const HS = 32767 / 2.5; // head-local coords, clamped to +-2.5
  const pos = new Int16Array(vc * 3), head = new Int16Array(vc * 3), idx = i32 ? new Uint32Array(ic) : new Uint16Array(ic);
  const nrm = new Int8Array(vc * 3), mat = new Uint8Array(vc * 4), ext = new Uint8Array(vc * 4);
  const q8 = (x) => Math.max(0, Math.min(255, Math.round(x * 255)));
  for (let k = 0; k < vc; k++) {
    for (let c = 0; c < 3; c++) {
      pos[3 * k + c] = Math.round(m.positions[3 * k + c] * PS);
      head[3 * k + c] = Math.round(Math.max(-2.5, Math.min(2.5, m.hl[3 * k + c])) * HS);
      nrm[3 * k + c] = Math.round(Math.max(-1, Math.min(1, m.normals[3 * k + c])) * 127);
    }
    for (let c = 0; c < 4; c++) mat[4 * k + c] = q8(m.mat[4 * k + c]);
    ext[4 * k] = q8(m.eye[k]); ext[4 * k + 1] = q8(m.ext[3 * k]); ext[4 * k + 2] = q8(m.ext[3 * k + 1]); ext[4 * k + 3] = q8(m.ext[3 * k + 2]);
  }
  idx.set(m.indices);
  const parts = i32 ? [idx, pos, head, nrm, mat, ext] : [pos, head, idx, nrm, mat, ext];
  const total = parts.reduce((s, a) => s + a.byteLength, 0);
  const buf = Buffer.alloc(total);
  let o = 0;
  for (const a of parts) { Buffer.from(a.buffer, a.byteOffset, a.byteLength).copy(buf, o); o += a.byteLength; }
  writeFileSync(`${OUT}/cow${i}.json`, JSON.stringify({ data: buf.toString('base64') }));
  meta.push({ file: `cows/cow${i}.json`, yaw: v.yaw, vc, ic, i32, ps: 1 / PS, hs: 1 / HS });
  console.log(`variant ${i}: ${vc} verts, ${ic / 3} tris, ${(total / 1048576).toFixed(2)} MB, ${Date.now() - t0} ms`);
});
writeFileSync(`${OUT}/cows.json`, JSON.stringify(meta));

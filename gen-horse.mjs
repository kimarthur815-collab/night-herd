// Bake the horse (horse.js) in its rest pose, with its skeleton, skin weights and colour regions.
// usage: node gen-horse.mjs [step=0.008] [out=horse/data/horse.json]
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { Horse, meshHorse } from './horse.js';
const step = Number(process.argv[2] || 0.008), OUT = process.argv[3] || 'horse/data/horse.json';
mkdirSync(dirname(OUT), { recursive: true });
const t0 = Date.now();
const h = new Horse();
const m = meshHorse(h, { step });
const vc = m.positions.length / 3, ic = m.indices.length;
console.log(`mesh ${vc} verts, ${ic / 3} tris, ${Date.now() - t0} ms`);
const PS = 32767 / 2.1;
const pos = new Int16Array(vc * 3), nrm = new Int8Array(vc * 3), mat = new Uint8Array(vc * 4), ext = new Uint8Array(vc * 4), si = new Uint8Array(vc * 4), sw = new Uint8Array(vc * 4);
const q8 = (x) => Math.max(0, Math.min(255, Math.round(x * 255)));
for (let k = 0; k < vc; k++) {
  const x = m.positions[3 * k], y = m.positions[3 * k + 1], z = m.positions[3 * k + 2];
  for (let c = 0; c < 3; c++) { pos[3 * k + c] = Math.round(m.positions[3 * k + c] * PS); nrm[3 * k + c] = Math.round(Math.max(-1, Math.min(1, m.normals[3 * k + c])) * 127); }
  const [points, hoof, muzzle, eye, hair, nostril, white] = h.regions(x, y, z);
  mat[4 * k] = q8(m.ao[k]); mat[4 * k + 1] = q8(points); mat[4 * k + 2] = q8(hoof); mat[4 * k + 3] = q8(muzzle);
  ext[4 * k] = q8(eye); ext[4 * k + 1] = q8(hair); ext[4 * k + 2] = q8(nostril); ext[4 * k + 3] = q8(white);
  const w = h.skin(x, y, z);
  // weights in bytes that add up to 255
  let left = 255;
  for (let c = 0; c < 4; c++) {
    const [bi, bw] = w[c] || [0, 0];
    const q = c === w.length - 1 ? left : Math.min(left, Math.round(bw * 255));
    si[4 * k + c] = bi; sw[4 * k + c] = c < w.length ? q : 0; left -= c < w.length ? q : 0;
  }
  if (k % 20000 === 0) process.stdout.write(`\r  weights ${k}/${vc}`);
}
console.log();
const parts = [pos, nrm, mat, ext, si, sw, m.indices];
const total = parts.reduce((s, a) => s + a.byteLength, 0), buf = Buffer.alloc(total);
let o = 0;
for (const a of parts) { Buffer.from(a.buffer, a.byteOffset, a.byteLength).copy(buf, o); o += a.byteLength; }
writeFileSync(OUT, JSON.stringify({ vc, ic, ps: 1 / PS, bones: h.bones, eye: { c: h.eyeC, r: h.eyeR }, data: buf.toString('base64') }));
console.log(`${OUT}: ${(total / 1048576).toFixed(2)} MB, ${Date.now() - t0} ms`);

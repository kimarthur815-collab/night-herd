// Bake the gloved hand mesh for the lantern slice.
import { writeFileSync, mkdirSync } from 'node:fs';
import { Hand } from './hand.js';
import { meshSDF } from './mesher.js';
const step = Number(process.argv[2] || 0.0016);
mkdirSync('lantern', { recursive: true });
const t0 = Date.now();
const hand = new Hand();
// glove only: the gauntlet cuff and the coat sleeve are separate meshes that follow the arm
const m = meshSDF((x, y, z) => hand.glove(x, y, z), [-0.076, -0.045, -0.04], [0.08, 0.08, 0.205], step, { aoScale: 0.016, margin: 0.004 });
const vc = m.positions.length / 3, ic = m.indices.length;
const PS = 32767 / 1.0;
const pos = new Int16Array(vc * 3), nrm = new Int8Array(vc * 3), att = new Uint8Array(vc * 2);
for (let i = 0; i < vc; i++) {
  for (let c = 0; c < 3; c++) { pos[3 * i + c] = Math.round(m.positions[3 * i + c] * PS); nrm[3 * i + c] = Math.round(Math.max(-1, Math.min(1, m.normals[3 * i + c])) * 127); }
  att[2 * i] = Math.round(Math.max(0, Math.min(1, m.ao[i])) * 255);
  att[2 * i + 1] = 0;
}
const i32 = vc > 65535;
const idx = i32 ? Uint32Array.from(m.indices) : Uint16Array.from(m.indices);
const parts = i32 ? [idx, pos, nrm, att] : [pos, idx, nrm, att];
const total = parts.reduce((s, a) => s + a.byteLength, 0), buf = Buffer.alloc(total);
let o = 0;
for (const a of parts) { Buffer.from(a.buffer, a.byteOffset, a.byteLength).copy(buf, o); o += a.byteLength; }
writeFileSync('lantern/hand.json', JSON.stringify({ vc, ic, i32, ps: 1 / PS, data: buf.toString('base64') }));
console.log(`hand: ${vc} verts, ${ic / 3} tris, ${(total / 1048576).toFixed(2)} MB, ${Date.now() - t0} ms`);

// Bake the right hand holding the revolver (glove, and the thumb on its own), same format as the lantern hand.
import { writeFileSync } from 'node:fs';
import { GunHand } from './gunhand.js';
import { meshSDF } from './mesher.js';
const step = Number(process.argv[2] || 0.0016);
const hand = new GunHand();
function save(file, sdf, bmin, bmax, origin) {
  const t0 = Date.now();
  const m = meshSDF(sdf, bmin, bmax, step, { aoScale: 0.016, margin: 0.004 });
  const vc = m.positions.length / 3, ic = m.indices.length, PS = 32767 / 1.0;
  const pos = new Int16Array(vc * 3), nrm = new Int8Array(vc * 3), att = new Uint8Array(vc * 2);
  for (let i = 0; i < vc; i++) {
    for (let c = 0; c < 3; c++) { pos[3 * i + c] = Math.round((m.positions[3 * i + c] - origin[c]) * PS); nrm[3 * i + c] = Math.round(Math.max(-1, Math.min(1, m.normals[3 * i + c])) * 127); }
    att[2 * i] = Math.round(Math.max(0, Math.min(1, m.ao[i])) * 255);
  }
  const i32 = vc > 65535, idx = i32 ? Uint32Array.from(m.indices) : Uint16Array.from(m.indices);
  const parts = i32 ? [idx, pos, nrm, att] : [pos, idx, nrm, att];
  const total = parts.reduce((s, a) => s + a.byteLength, 0), buf = Buffer.alloc(total);
  let o = 0;
  for (const a of parts) { Buffer.from(a.buffer, a.byteOffset, a.byteLength).copy(buf, o); o += a.byteLength; }
  writeFileSync(file, JSON.stringify({ vc, ic, i32, ps: 1 / PS, origin, data: buf.toString('base64') }));
  console.log(`${file}: ${vc} verts, ${ic / 3} tris, ${(total / 1048576).toFixed(2)} MB, ${Date.now() - t0} ms`);
}
save('night/gunhand.json', (x, y, z) => hand.glove(x, y, z), [-0.05, -0.16, -0.03], [0.075, -0.0, 0.16], [0, 0, 0]);
save('night/gunthumb.json', (x, y, z) => hand.thumb(x, y, z), [-0.05, -0.06, -0.06], [0.0, 0.01, 0.06], hand.thumbPivot);

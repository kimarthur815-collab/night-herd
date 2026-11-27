// Lighter copies of the baked game cows for pages that only show them standing (the monster page).
// Same packed format as gen-slice.mjs; triangles reduced with meshoptimizer, every vertex attribute carried over.
// usage: node gen-cows-lite.mjs [error=0.0025] [outDir=monsters/cows]
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { MeshoptSimplifier } from 'meshoptimizer';
const ERR = Number(process.argv[2] || 0.0025), OUT = process.argv[3] || 'monsters/cows';
mkdirSync(OUT, { recursive: true });
await MeshoptSimplifier.ready;
const meta = JSON.parse(readFileSync('lantern/cows/cows.json', 'utf8')), out = [];
for (const m of meta) {
  const buf = Buffer.from(JSON.parse(readFileSync('lantern/' + m.file, 'utf8')).data, 'base64');
  const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength), vc = m.vc, ic = m.ic;
  let o = 0; const take = (T, n, size) => { const a = new T(ab.slice(o, o + n * size)); o += n * size; return a; };
  const pos = take(Int16Array, vc * 3, 2), head = take(Int16Array, vc * 3, 2), idx = take(Uint16Array, ic, 2);
  const nrm = take(Int8Array, vc * 3, 1), mat = take(Uint8Array, vc * 4, 1), ext = take(Uint8Array, vc * 4, 1), rig = take(Uint8Array, vc * 4, 1), leg = take(Uint8Array, vc * 4, 1);
  const P = new Float32Array(vc * 3); for (let i = 0; i < vc * 3; i++) P[i] = pos[i] * m.ps;
  // keep the eyes whole: they shine, and a collapsed eye would show
  const [ix] = MeshoptSimplifier.simplify(Uint32Array.from(idx), P, 3, 0, ERR / MeshoptSimplifier.getScale(P, 3), []);
  const map = new Int32Array(vc).fill(-1), order = [], I = new Uint16Array(ix.length);
  for (let i = 0; i < ix.length; i++) { let k = map[ix[i]]; if (k < 0) { k = map[ix[i]] = order.length; order.push(ix[i]); } I[i] = k; }
  const n = order.length, pick = (src, T, w) => { const d = new T(n * w); order.forEach((s, i) => { for (let c = 0; c < w; c++) d[i * w + c] = src[s * w + c]; }); return d; };
  const parts = [pick(pos, Int16Array, 3), pick(head, Int16Array, 3), I, pick(nrm, Int8Array, 3), pick(mat, Uint8Array, 4), pick(ext, Uint8Array, 4), pick(rig, Uint8Array, 4), pick(leg, Uint8Array, 4)];
  const total = parts.reduce((s, a) => s + a.byteLength, 0), b = Buffer.alloc(total);
  let q = 0; for (const a of parts) { Buffer.from(a.buffer, a.byteOffset, a.byteLength).copy(b, q); q += a.byteLength; }
  const file = m.file.replace('cows/', '');
  writeFileSync(`${OUT}/${file}`, JSON.stringify({ data: b.toString('base64') }));
  out.push({ ...m, file: `cows/${file}`, vc: n, ic: I.length });
  console.log(`${file}: ${vc} -> ${n} verts, ${ic / 3} -> ${I.length / 3} tris, ${(total / 1024).toFixed(0)} KB`);
}
writeFileSync(`${OUT}/cows.json`, JSON.stringify(out));

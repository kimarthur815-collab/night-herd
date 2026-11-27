// Bakes the desert's sculpted pieces (saguaros, bones) from their distance fields into compact meshes with
// three levels of detail, plus the spine-bearing areoles of each saguaro.
// usage: node gen-plants.mjs [step=0.012] [outDir=plants/data] [only=name,name]
import { writeFileSync, mkdirSync } from 'node:fs';
import { meshSDF } from './mesher.js';
import { Saguaro, SAGUARO_VARIANTS, BONES, fbm } from './plants-sdf.js';
import { MeshoptSimplifier } from 'meshoptimizer';

const step = Number(process.argv[2] || 0.012);
const OUT = process.argv[3] || 'plants/data';
const ONLY = process.argv[4] ? process.argv[4].split(',') : null;
mkdirSync(OUT, { recursive: true });
await MeshoptSimplifier.ready;

const q8 = (x) => Math.max(0, Math.min(255, Math.round(x * 255)));
// keep only the vertices an index list uses, renumbered
function compact(indices, nv) {
  const map = new Int32Array(nv).fill(-1), order = [];
  const out = new Uint32Array(indices.length);
  for (let i = 0; i < indices.length; i++) {
    let m = map[indices[i]];
    if (m < 0) { m = map[indices[i]] = order.length; order.push(indices[i]); }
    out[i] = m;
  }
  return { idx: out, order };
}
// pack typed arrays end to end, each padded to 4 bytes
function pack(parts) {
  const sizes = parts.map((a) => (a.byteLength + 3) & ~3), total = sizes.reduce((s, b) => s + b, 0);
  const buf = Buffer.alloc(total);
  let o = 0;
  parts.forEach((a, i) => { Buffer.from(a.buffer, a.byteOffset, a.byteLength).copy(buf, o); o += sizes[i]; });
  return buf;
}

// one sculpted thing: mesh it, give each vertex its surface attributes, make the levels of detail
// attrs(x,y,z, k) -> [a0..a3, b0..b3, s] in 0..1 (s in metres)
function bake(name, sdf, aoSdf, bmin, bmax, attrs, lodErrors, extra, st = step) {
  const t0 = Date.now();
  const m = meshSDF(sdf, bmin, bmax, st, { aoSdf, aoScale: st < 0.006 ? 0.015 : 0.05 });
  const nv = m.positions.length / 3;
  const A = new Uint8Array(nv * 4), B = new Uint8Array(nv * 4), S = new Uint16Array(nv);
  for (let k = 0; k < nv; k++) {
    const r = attrs(m.positions[3 * k], m.positions[3 * k + 1], m.positions[3 * k + 2], m.ao[k]);
    for (let c = 0; c < 4; c++) { A[4 * k + c] = q8(r[c]); B[4 * k + c] = q8(r[4 + c]); }
    S[k] = Math.max(0, Math.min(65535, Math.round(r[8] * 1000)));
  }
  const scale = MeshoptSimplifier.getScale(m.positions, 3);
  let ext = 0; for (let i = 0; i < m.positions.length; i++) ext = Math.max(ext, Math.abs(m.positions[i]));
  const PS = 32767 / ext;
  const lods = [], parts = [];
  for (const err of lodErrors) {
    const [ix] = MeshoptSimplifier.simplify(m.indices, m.positions, 3, 0, err / scale, ['LockBorder']);
    const { idx, order } = compact(ix, nv);
    const vc = order.length, big = vc > 65535;
    const pos = new Int16Array(vc * 3), nrm = new Int8Array(vc * 3), a = new Uint8Array(vc * 4), b = new Uint8Array(vc * 4), s = new Uint16Array(vc);
    order.forEach((src, i) => {
      for (let c = 0; c < 3; c++) { pos[3 * i + c] = Math.round(m.positions[3 * src + c] * PS); nrm[3 * i + c] = Math.round(Math.max(-1, Math.min(1, m.normals[3 * src + c])) * 127); }
      for (let c = 0; c < 4; c++) { a[4 * i + c] = A[4 * src + c]; b[4 * i + c] = B[4 * src + c]; }
      s[i] = S[src];
    });
    const I = big ? idx : Uint16Array.from(idx);
    parts.push(pos, nrm, a, b, s, I);
    lods.push({ vc, ic: idx.length, big });
  }
  if (extra) parts.push(...extra.parts);
  const buf = pack(parts);
  writeFileSync(`${OUT}/${name}.json`, JSON.stringify({ ps: 1 / PS, lods, ...(extra ? extra.meta : {}), data: buf.toString('base64') }));
  console.log(`${name}: ${nv} verts dense -> ${lods.map((l) => `${l.ic / 3} tris`).join(' / ')}, ${(buf.length / 1048576).toFixed(2)} MB, ${Date.now() - t0} ms`);
  return { ext, PS };
}

// ---------------- saguaros ----------------
for (const v of SAGUARO_VARIANTS) {
  if (ONLY && !ONLY.includes(v.name)) continue;
  const sg = new Saguaro(v);
  const seed = v.seed;
  const attrs = (x, y, z, ao) => {
    const r = sg.attrs(x, y, z);
    const vary = fbm(x * 1.3 + seed, y * 0.35, z * 1.3, 3) * 0.5 + 0.5; // broad patches of yellower and bluer green
    return [r.crest, r.bark, r.scar, ao, r.dark, r.crown, vary, r.part < 0 ? 0 : (r.part + 1) / 8, r.s];
  };
  // areoles: position, outward normal, stem direction, crown flag
  const ar = sg.areoles();
  let ext = 0;
  for (const a of ar) ext = Math.max(ext, Math.abs(a[0]), Math.abs(a[1]), Math.abs(a[2]));
  const APS = 32767 / Math.max(ext, 1e-3);
  const ap = new Int16Array(ar.length * 3), an = new Int8Array(ar.length * 4), at = new Int8Array(ar.length * 4);
  ar.forEach((a, i) => {
    for (let c = 0; c < 3; c++) { ap[3 * i + c] = Math.round(a[c] * APS); an[4 * i + c] = Math.round(a[3 + c] * 127); at[4 * i + c] = Math.round(a[6 + c] * 127); }
    an[4 * i + 3] = a[9] ? 127 : 0;
  });
  bake(`saguaro-${v.name}`, (x, y, z) => sg.sdf(x, y, z), (x, y, z) => sg.sdf(x, y, z), sg.bmin, sg.bmax, attrs, [0.0025, 0.012, 0.04],
    { parts: [ap, an, at], meta: { areoles: ar.length, aps: 1 / APS, H: v.H, R0: v.R0 } });
}

// ---------------- bones ----------------
for (const bn of BONES) {
  if (ONLY && !ONLY.includes(bn.name)) continue;
  const attrs = (x, y, z, ao) => {
    const [tooth, porous] = bn.attrs ? bn.attrs(x, y, z) : [0, 0];
    const vary = fbm(x * 9 + 3, y * 9, z * 9, 3) * 0.5 + 0.5;
    return [tooth, porous, 0, ao, 0, 0, vary, 0, 0];
  };
  const bstep = Math.min(step, 0.0035);
  const save = step;
  // finer steps for small bones
  bake(`bone-${bn.name}`, bn.sdf, bn.sdf, bn.bmin, bn.bmax, attrs, [0.0006, 0.003, 0.01], null, bstep);
}

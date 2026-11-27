// Bake the revolver candidates part by part, in the same compact format as the gloves.
// usage: node gen-revolvers.mjs [step=0.00035] [outDir=revolvers/data] [only=regex on id/part]
// Writes one packed file per gun: {id, meta, parts: {name: {vc, ic, i32, ps, origin, data}}} (revolver-model.js loads it).
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { meshSDF } from './mesher.js';
import { coltSAA, schofield } from './revolver-sdf.js';
import { MeshoptSimplifier } from 'meshoptimizer';
const step = Number(process.argv[2] || 0.00035), OUT = process.argv[3] || 'revolvers/data', ONLY = process.argv[4] ? new RegExp(process.argv[4]) : null;
mkdirSync(OUT, { recursive: true });
await MeshoptSimplifier.ready;
const guns = { colt75: coltSAA(7.5), colt475: coltSAA(4.75), schofield: schofield() };
for (const [id, g] of Object.entries(guns)) {
  const file = `${OUT}/${id}.json`, packed = existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')).parts : {};
  const meta = {};
  meta[id] = { zMuz: g.zMuz, cylY: g.cylY, chamberR: g.chamberR, chamberZ: g.chamberZ, hammerPivot: g.hammerPivot, triggerPivot: g.triggerPivot, gatePivot: g.gatePivot, gateAngle: g.gateAngle, rodTip: g.rodTip, rodTravel: g.rodTravel, parts: [] };
  for (const [name, part] of Object.entries(g.parts)) {
    meta[id].parts.push(name);
    if (ONLY && !ONLY.test(`${id}/${name}`)) continue;
    const t0 = Date.now(), origin = part.origin || [0, 0, 0], st = part.step || step;
    // parts baked about an origin (cylinder axis, hammer and trigger pivots) are sampled in their own frame
    const sdf = part.sdf;
    const m = meshSDF(sdf, part.min, part.max, st, { aoScale: 0.004, margin: 0.0008 });
    const nv = m.positions.length / 3;
    if (!nv) { console.log(`${id}/${name}: empty!`); continue; }
    const [ix] = MeshoptSimplifier.simplify(m.indices, m.positions, 3, 0, 0.00004 / MeshoptSimplifier.getScale(m.positions, 3), ['LockBorder']);
    const map = new Int32Array(nv).fill(-1), order = [];
    const idx = new Uint32Array(ix.length);
    for (let i = 0; i < ix.length; i++) { let k = map[ix[i]]; if (k < 0) { k = map[ix[i]] = order.length; order.push(ix[i]); } idx[i] = k; }
    const vc = order.length, PS = 32767 / 0.3;
    const pos = new Int16Array(vc * 3), nrm = new Int8Array(vc * 3), att = new Uint8Array(vc * 2);
    order.forEach((src, i) => {
      for (let c = 0; c < 3; c++) { pos[3 * i + c] = Math.round(m.positions[3 * src + c] * PS); nrm[3 * i + c] = Math.round(Math.max(-1, Math.min(1, m.normals[3 * src + c])) * 127); }
      att[2 * i] = Math.round(Math.max(0, Math.min(1, m.ao[src])) * 255);
      // curvature (the Laplacian of the distance): sharp outside edges wear bright, inside corners keep grime
      const x = m.positions[3 * src], y = m.positions[3 * src + 1], z = m.positions[3 * src + 2], h = 0.0005, f0 = sdf(x, y, z);
      const lap = (sdf(x + h, y, z) + sdf(x - h, y, z) + sdf(x, y + h, z) + sdf(x, y - h, z) + sdf(x, y, z + h) + sdf(x, y, z - h) - 6 * f0) / (h * h);
      const k = Math.abs(lap) < 600 ? 0 : lap;
      att[2 * i + 1] = Math.round(Math.max(0, Math.min(1, 0.5 + k * 0.0003)) * 255);
    });
    const i32 = vc > 65535, I = i32 ? idx : Uint16Array.from(idx);
    const parts = i32 ? [I, pos, nrm, att] : [pos, I, nrm, att];
    const total = parts.reduce((s, a) => s + a.byteLength, 0), buf = Buffer.alloc(total);
    let o = 0; for (const a of parts) { Buffer.from(a.buffer, a.byteOffset, a.byteLength).copy(buf, o); o += a.byteLength; }
    packed[name] = { vc, ic: idx.length, i32, ps: 1 / PS, origin, data: buf.toString('base64') };
    console.log(`${id}/${name}: ${nv} -> ${vc} verts, ${idx.length / 3} tris, ${(total / 1024).toFixed(0)} KB, ${Date.now() - t0} ms`);
  }
  writeFileSync(file, JSON.stringify({ id, meta: meta[id], parts: packed }));
}


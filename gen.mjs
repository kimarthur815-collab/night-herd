// Bake cow meshes for the herd into binary files the page loads.
import { writeFileSync, mkdirSync } from 'node:fs';
import { Cow, meshCow } from './cow.js';
import { HERD, cowPose } from './herd.js';

const only = process.argv[2] ? process.argv[2].split(',').map(Number) : null;
const step = process.argv[3] ? Number(process.argv[3]) : 0.012;
mkdirSync('cows', { recursive: true });
const manifest = [];
HERD.forEach((c, i) => {
  const pose = cowPose(c);
  const entry = { i, file: `cows/cow${i}.bin`, x: c.x, z: c.z, scale: c.scale, coat: c.coat, face: c.face ?? c.coat, theta: pose.theta };
  if (only && !only.includes(i)) { manifest.push(entry); return; }
  const t0 = Date.now();
  const cow = new Cow({ ...c, ...pose });
  const m = meshCow(cow, { step });
  const vc = m.positions.length / 3, ic = m.indices.length;
  const buf = Buffer.alloc(vc * 4 * (3 + 3 + 4 + 1 + 3 + 3) + ic * 4);
  let o = 0;
  for (const arr of [m.positions, m.normals, m.mat, m.eye, m.ext, m.hl]) { Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength).copy(buf, o); o += arr.byteLength; }
  Buffer.from(m.indices.buffer, m.indices.byteOffset, m.indices.byteLength).copy(buf, o);
  writeFileSync(entry.file, buf);
  Object.assign(entry, { vc, ic });
  manifest.push(entry);
  console.log(`cow ${i}: ${vc} verts, ${ic / 3} tris, exact evals ${m.stats.exact}, ${Date.now() - t0} ms`);
});
// keep counts for cows that were not rebuilt this run
try {
  const old = JSON.parse((await import('node:fs')).readFileSync('cows/manifest.json', 'utf8'));
  for (const e of manifest) if (e.vc === undefined) { const p = old.find((q) => q.i === e.i); if (p) { e.vc = p.vc; e.ic = p.ic; } }
} catch {}
writeFileSync('cows/manifest.json', JSON.stringify(manifest, null, 1));

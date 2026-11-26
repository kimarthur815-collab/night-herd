// Generic SDF -> mesh (surface nets) with surface projection, gradient normals and SDF ambient occlusion.
// sdf(x, y, z) returns a signed distance (negative inside). Works in Node and the browser.
export function meshSDF(sdf, bmin, bmax, step, opt = {}) {
  const R = 4;
  const kx = Math.ceil((bmax[0] - bmin[0]) / (step * R)), ky = Math.ceil((bmax[1] - bmin[1]) / (step * R)), kz = Math.ceil((bmax[2] - bmin[2]) / (step * R));
  const nx = kx * R + 1, ny = ky * R + 1, nz = kz * R + 1, cx = kx + 1, cy = ky + 1, cs = step * R;
  const C = new Float32Array(cx * cy * (kz + 1));
  for (let k = 0; k <= kz; k++) for (let j = 0; j < cy; j++) for (let i = 0; i < cx; i++) C[i + cx * (j + cy * k)] = sdf(bmin[0] + i * cs, bmin[1] + j * cs, bmin[2] + k * cs);
  const thr = cs * Math.sqrt(3) * 1.1 + (opt.margin ?? 0.002);
  const near = new Uint8Array(kx * ky * kz);
  for (let k = 0; k < kz; k++) for (let j = 0; j < ky; j++) for (let i = 0; i < kx; i++) {
    let m = 1e9;
    for (let c = 0; c < 8; c++) { const v = Math.abs(C[(i + (c & 1)) + cx * ((j + ((c >> 1) & 1)) + cy * (k + (c >> 2)))]); if (v < m) m = v; }
    near[i + kx * (j + ky * k)] = m < thr ? 1 : 0;
  }
  const F = new Float32Array(nx * ny * nz);
  for (let z = 0; z < nz; z++) {
    const kc = Math.min(Math.floor(z / R), kz - 1), fz = z / R - kc;
    for (let y = 0; y < ny; y++) {
      const jc = Math.min(Math.floor(y / R), ky - 1), fy = y / R - jc;
      for (let x = 0; x < nx; x++) {
        const ic = Math.min(Math.floor(x / R), kx - 1), fx = x / R - ic;
        let isNear = near[ic + kx * (jc + ky * kc)];
        if (!isNear) {
          const ib = x % R === 0 && ic > 0 ? ic - 1 : ic, jb = y % R === 0 && jc > 0 ? jc - 1 : jc, kb = z % R === 0 && kc > 0 ? kc - 1 : kc;
          for (let a = ib; a <= ic && !isNear; a++) for (let b = jb; b <= jc && !isNear; b++) for (let c = kb; c <= kc && !isNear; c++) if (near[a + kx * (b + ky * c)]) isNear = 1;
        }
        const idx = x + nx * (y + ny * z);
        if (isNear) F[idx] = sdf(bmin[0] + x * step, bmin[1] + y * step, bmin[2] + z * step);
        else {
          const g = (a, b, c) => C[a + cx * (b + cy * c)];
          const c00 = g(ic, jc, kc) * (1 - fx) + g(ic + 1, jc, kc) * fx, c10 = g(ic, jc + 1, kc) * (1 - fx) + g(ic + 1, jc + 1, kc) * fx;
          const c01 = g(ic, jc, kc + 1) * (1 - fx) + g(ic + 1, jc, kc + 1) * fx, c11 = g(ic, jc + 1, kc + 1) * (1 - fx) + g(ic + 1, jc + 1, kc + 1) * fx;
          F[idx] = (c00 * (1 - fy) + c10 * fy) * (1 - fz) + (c01 * (1 - fy) + c11 * fy) * fz;
        }
      }
    }
  }
  const ncx = nx - 1, ncy = ny - 1, ncz = nz - 1;
  const cellV = new Int32Array(ncx * ncy * ncz).fill(-1);
  const P = [];
  const EDGES = [[0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]];
  const cv = new Float32Array(8);
  for (let z = 0; z < ncz; z++) for (let y = 0; y < ncy; y++) for (let x = 0; x < ncx; x++) {
    let mask = 0;
    for (let c = 0; c < 8; c++) { const v = F[(x + (c & 1)) + nx * ((y + ((c >> 1) & 1)) + ny * (z + (c >> 2)))]; cv[c] = v; if (v < 0) mask |= 1 << c; }
    if (mask === 0 || mask === 255) continue;
    let sx = 0, sy = 0, sz = 0, cnt = 0;
    for (const [a, b] of EDGES) {
      const va = cv[a], vb = cv[b];
      if ((va < 0) === (vb < 0)) continue;
      const t = va / (va - vb);
      sx += (a & 1) + ((b & 1) - (a & 1)) * t; sy += ((a >> 1) & 1) + (((b >> 1) & 1) - ((a >> 1) & 1)) * t; sz += (a >> 2) + ((b >> 2) - (a >> 2)) * t; cnt++;
    }
    cellV[x + ncx * (y + ncy * z)] = P.length / 3;
    P.push(bmin[0] + (x + sx / cnt) * step, bmin[1] + (y + sy / cnt) * step, bmin[2] + (z + sz / cnt) * step);
  }
  const I = [];
  const cell = (x, y, z) => cellV[x + ncx * (y + ncy * z)];
  const quad = (a, b, c, d, flip) => { if (a < 0 || b < 0 || c < 0 || d < 0) return; if (!flip) I.push(a, b, c, a, c, d); else I.push(a, c, b, a, d, c); };
  for (let z = 1; z < nz - 1; z++) for (let y = 1; y < ny - 1; y++) for (let x = 1; x < nx - 1; x++) {
    const in0 = F[x + nx * (y + ny * z)] < 0;
    if ((F[x + 1 + nx * (y + ny * z)] < 0) !== in0) quad(cell(x, y - 1, z - 1), cell(x, y, z - 1), cell(x, y, z), cell(x, y - 1, z), !in0);
    if ((F[x + nx * (y + 1 + ny * z)] < 0) !== in0) quad(cell(x - 1, y, z - 1), cell(x - 1, y, z), cell(x, y, z), cell(x, y, z - 1), !in0);
    if ((F[x + nx * (y + ny * (z + 1))] < 0) !== in0) quad(cell(x - 1, y - 1, z), cell(x, y - 1, z), cell(x, y, z), cell(x - 1, y, z), !in0);
  }
  const nv = P.length / 3;
  const pos = new Float32Array(nv * 3), nrm = new Float32Array(nv * 3), ao = new Float32Array(nv);
  const e = step * 0.25;
  const grad = (x, y, z) => [sdf(x + e, y, z) - sdf(x - e, y, z), sdf(x, y + e, z) - sdf(x, y - e, z), sdf(x, y, z + e) - sdf(x, y, z - e)];
  const aoSdf = opt.aoSdf || sdf;
  const aoScale = opt.aoScale ?? 0.03;
  for (let i = 0; i < nv; i++) {
    let x = P[3 * i], y = P[3 * i + 1], z = P[3 * i + 2];
    for (let it = 0; it < 2; it++) {
      const dd = sdf(x, y, z), g = grad(x, y, z);
      const gl2 = (g[0] * g[0] + g[1] * g[1] + g[2] * g[2]) / (4 * e * e);
      if (gl2 < 1e-10) break;
      const sc = dd / gl2 / (2 * e);
      let mx = g[0] * sc, my = g[1] * sc, mz = g[2] * sc;
      const ml = Math.hypot(mx, my, mz), lim = step * 0.6;
      if (ml > lim) { mx *= lim / ml; my *= lim / ml; mz *= lim / ml; }
      x -= mx; y -= my; z -= mz;
    }
    const g = grad(x, y, z), gl = Math.hypot(g[0], g[1], g[2]) || 1;
    const n0 = g[0] / gl, n1 = g[1] / gl, n2 = g[2] / gl;
    pos[3 * i] = x; pos[3 * i + 1] = y; pos[3 * i + 2] = z;
    nrm[3 * i] = n0; nrm[3 * i + 1] = n1; nrm[3 * i + 2] = n2;
    let occ = 0, sca = 1;
    for (let k = 1; k <= 5; k++) {
      const hh = aoScale * (0.08 + 0.92 * (k * k) / 25);
      occ += (hh - aoSdf(x + n0 * hh, y + n1 * hh, z + n2 * hh)) * sca;
      sca *= 0.75;
    }
    ao[i] = Math.max(0, Math.min(1, 1 - (2.2 / aoScale) * 0.03 * occ / 0.03));
  }
  let vol = 0;
  for (let t = 0; t < I.length; t += 3) {
    const a = 3 * I[t], b = 3 * I[t + 1], c = 3 * I[t + 2];
    vol += pos[a] * (pos[b + 1] * pos[c + 2] - pos[b + 2] * pos[c + 1]) - pos[a + 1] * (pos[b] * pos[c + 2] - pos[b + 2] * pos[c]) + pos[a + 2] * (pos[b] * pos[c + 1] - pos[b + 1] * pos[c]);
  }
  if (vol < 0) for (let t = 0; t < I.length; t += 3) { const tmp = I[t + 1]; I[t + 1] = I[t + 2]; I[t + 2] = tmp; }
  return { positions: pos, normals: nrm, ao, indices: Uint32Array.from(I) };
}

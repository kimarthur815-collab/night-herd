// Shape models for the desert, as signed distance functions (negative inside), baked offline into meshes.
// Saguaros: a ribbed trunk with arms grown out of it (smooth union, so each arm swells out of the trunk),
// woodpecker holes, a corky base, scars, a felted crown. Autumn: after the summer rains, so plump with shallow pleats.

// ---------------- noise ----------------
function hash(i, j, k) {
  let h = (Math.imul(i, 374761393) + Math.imul(j, 668265263) + Math.imul(k, 1274126177)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}
export function vnoise(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const fx = x - xi, fy = y - yi, fz = z - zi;
  const u = fx * fx * (3 - 2 * fx), v = fy * fy * (3 - 2 * fy), w = fz * fz * (3 - 2 * fz);
  const a = hash(xi, yi, zi), b = hash(xi + 1, yi, zi), c = hash(xi, yi + 1, zi), d = hash(xi + 1, yi + 1, zi);
  const e = hash(xi, yi, zi + 1), f = hash(xi + 1, yi, zi + 1), g = hash(xi, yi + 1, zi + 1), h = hash(xi + 1, yi + 1, zi + 1);
  const r = (a + (b - a) * u) * (1 - v) + (c + (d - c) * u) * v, s = (e + (f - e) * u) * (1 - v) + (g + (h - g) * u) * v;
  return (r + (s - r) * w) * 2 - 1;
}
export function fbm(x, y, z, oct = 3) {
  let s = 0, a = 0.5, f = 1;
  for (let i = 0; i < oct; i++) { s += a * vnoise(x * f, y * f, z * f); f *= 2.03; a *= 0.5; }
  return s;
}
export function rng(seed) { let s = seed >>> 0 || 1; return () => { s = (Math.imul(s ^ (s >>> 15), 2246822507) + 0x9e3779b9) >>> 0; s ^= s >>> 13; return (s >>> 0) / 4294967296; }; }
export const smin = (a, b, k) => { const h = Math.max(k - Math.abs(a - b), 0) / k; return Math.min(a, b) - h * h * k * 0.25; };
export const smax = (a, b, k) => -smin(-a, -b, k);
const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const TAU = Math.PI * 2;

// pleat profile: 0 on a crest (rounded), 1 at the bottom of a groove (a sharper V)
function pleat(u) { return Math.pow(1 - Math.sin(Math.PI * u), 1.3); }

// ---------------- a stem along a curve: closest point, frame, and the angle around it ----------------
class Stem {
  // pts: [[x,y,z],...] centre line; radius(s) gives the stem radius at arc length s
  constructor(pts, radius, ribs, seed) {
    this.ribs = ribs; this.seed = seed; this.radius = radius;
    const n = pts.length;
    this.p = pts; this.s = [0]; this.T = []; this.N = []; this.B = [];
    for (let i = 1; i < n; i++) this.s.push(this.s[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1], pts[i][2] - pts[i - 1][2]));
    this.len = this.s[n - 1];
    // per-segment tangents with a parallel-transported normal, so the ribs run straight along the stem
    let Nv = null;
    for (let i = 0; i < n - 1; i++) {
      const a = pts[i], b = pts[i + 1], l = this.s[i + 1] - this.s[i];
      const T = [(b[0] - a[0]) / l, (b[1] - a[1]) / l, (b[2] - a[2]) / l];
      if (!Nv) { // start with something perpendicular to the first tangent
        const up = Math.abs(T[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
        Nv = cross(up, T); norm(Nv);
      } else { const d = dot(Nv, T); Nv = [Nv[0] - d * T[0], Nv[1] - d * T[1], Nv[2] - d * T[2]]; norm(Nv); }
      const B = cross(T, Nv);
      this.T.push(T); this.N.push(Nv.slice()); this.B.push(B);
    }
    let mn = [1e9, 1e9, 1e9], mx = [-1e9, -1e9, -1e9];
    for (const q of pts) for (let c = 0; c < 3; c++) { mn[c] = Math.min(mn[c], q[c]); mx[c] = Math.max(mx[c], q[c]); }
    this.mn = mn; this.mx = mx;
  }
  segAt(s) { let i = 0; while (i < this.T.length - 1 && this.s[i + 1] < s) i++; return i; }
  // fills out: [dist to centre line, arc length, x in frame, y in frame, along (0 before the start, 1 past the end), seg]
  closest(x, y, z, out) {
    let best = 1e9, bs = 0, bi = 0, bt = 0;
    const P = this.p;
    for (let i = 0; i < P.length - 1; i++) {
      const a = P[i], T = this.T[i], l = this.s[i + 1] - this.s[i];
      const vx = x - a[0], vy = y - a[1], vz = z - a[2];
      let t = vx * T[0] + vy * T[1] + vz * T[2];
      t = t < 0 ? 0 : t > l ? l : t;
      const dx = vx - T[0] * t, dy = vy - T[1] * t, dz = vz - T[2] * t, d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < best) { best = d2; bi = i; bt = t; bs = this.s[i] + t; }
    }
    const a = P[bi], T = this.T[bi], N = this.N[bi], B = this.B[bi];
    const qx = x - a[0] - T[0] * bt, qy = y - a[1] - T[1] * bt, qz = z - a[2] - T[2] * bt;
    out[0] = Math.sqrt(best); out[1] = bs;
    out[2] = qx * N[0] + qy * N[1] + qz * N[2]; out[3] = qx * B[0] + qy * B[1] + qz * B[2];
    out[4] = bs <= 1e-6 ? 0 : bs >= this.len - 1e-6 ? 1 : 0.5; out[5] = bi;
    return out;
  }
  // signed distance with pleats; also fills info: [u (rib phase), s, fadeToTip]
  dist(x, y, z, info) {
    // far away: the box is a good enough lower bound
    const m = 0.6;
    const bx = Math.max(this.mn[0] - m - x, 0, x - this.mx[0] - m), by = Math.max(this.mn[1] - m - y, 0, y - this.mx[1] - m), bz = Math.max(this.mn[2] - m - z, 0, z - this.mx[2] - m);
    const box = Math.hypot(bx, by, bz);
    if (box > 0.05) { if (info) { info[0] = 0; info[1] = 0; info[2] = 0; } return box + 0.2; }
    const c = this.closest(x, y, z, _c);
    const s = c[1], R = this.radius(s);
    const ang = Math.atan2(c[3], c[2]) + 0.05 * Math.sin(s * 0.9 + this.seed); // ribs wander a little
    let u = (ang / TAU) * this.ribs; u -= Math.floor(u);
    const perp = Math.hypot(c[2], c[3]);
    // at the ends the ribs gather into the rounded tip
    const fade = c[4] === 1 ? clamp(perp / R, 0, 1) : 1;
    const depth = 0.1 * R * (0.85 + 0.3 * vnoise(s * 1.7 + this.seed * 3.1, Math.cos(ang) * 1.6, Math.sin(ang) * 1.6));
    if (info) { info[0] = u; info[1] = s; info[2] = fade; }
    return c[0] - R + depth * pleat(u) * fade;
  }
}
const _c = new Float64Array(6);
function cross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
function norm(a) { const l = Math.hypot(a[0], a[1], a[2]) || 1; a[0] /= l; a[1] /= l; a[2] /= l; return a; }
// centripetal-ish Catmull-Rom through control points, n samples
function spline(ctrl, n) {
  const out = [];
  const P = [ctrl[0].map((v, i) => 2 * v - ctrl[1][i]), ...ctrl, ctrl[ctrl.length - 1].map((v, i) => 2 * v - ctrl[ctrl.length - 2][i])];
  const segs = ctrl.length - 1;
  for (let k = 0; k <= n; k++) {
    const g = (k / n) * segs, i = Math.min(segs - 1, Math.floor(g)), t = g - i;
    const p0 = P[i], p1 = P[i + 1], p2 = P[i + 2], p3 = P[i + 3];
    const t2 = t * t, t3 = t2 * t;
    out.push([0, 1, 2].map((c) => 0.5 * (2 * p1[c] + (-p0[c] + p2[c]) * t + (2 * p0[c] - 5 * p1[c] + 4 * p2[c] - p3[c]) * t2 + (-p0[c] + 3 * p1[c] - 3 * p2[c] + p3[c]) * t3)));
  }
  return out;
}

// ---------------- saguaro ----------------
// P: { H, R0, ribs, armRibs, lean:[x,z], seed, bark, arms:[{ y, ang, path:[[out,up],...], ra }], holes:[{ y, ang }], waists:[{ y, c, w }] }
export class Saguaro {
  constructor(P) {
    this.P = P;
    const H = P.H, R0 = P.R0, seed = P.seed;
    const waists = P.waists || [];
    this.R = (y) => {
      let r = R0 * (1 + 0.09 * Math.exp(-Math.max(y, 0) / 0.3)) * (1 - 0.08 * clamp(y / H, 0, 1));
      for (const w of waists) r *= 1 - w.c * Math.exp(-(((y - w.y) / w.w) ** 2));
      return r * (1 + 0.02 * vnoise(y * 1.3, seed, 0.5));
    };
    // the trunk: a gently leaning centre line, rounded at the top
    // the trunk stops a radius short of its height so the rounded tip lands at H
    const top = H - this.R(H), tp2 = [];
    for (let i = 0; i <= 40; i++) { const y = -0.3 + (top + 0.3) * (i / 40); tp2.push(this.axisAt(y)); }
    this.trunk = new Stem(tp2, (s) => this.R(s - 0.3), P.ribs, seed);
    this.apex = [tp2[tp2.length - 1][0], H, tp2[tp2.length - 1][2]];
    // arms: out from the trunk, bending up; the path is given in (out, up) metres from where it leaves the trunk
    this.arms = P.arms.map((a, k) => {
      const base = this.axisAt(a.y), dx = Math.cos(a.ang), dz = Math.sin(a.ang);
      const side = [-dz, 0, dx];
      const ctrl = [[base[0], a.y, base[2]], ...a.path.map(([o, u], j) => {
        const wob = 0.04 * Math.sin(j * 1.9 + seed + k);
        const r = this.R(a.y) * 0.4 + o;
        return [base[0] + dx * r + side[0] * wob, a.y + u, base[2] + dz * r + side[2] * wob];
      })];
      const pts = spline(ctrl, 36);
      const ra = a.ra * R0;
      const stem = new Stem(pts, (s) => {
        const neck = 1 - 0.16 * Math.exp(-(((s - (this.R(a.y) + 0.1)) / 0.09) ** 2)); // arms narrow just outside the trunk
        return ra * neck * (1 + 0.025 * vnoise(s * 2.1, seed + k * 7, 1.5));
      }, a.ribs || P.armRibs, seed + 11 * (k + 1));
      stem.tip = pts[pts.length - 1];
      return stem;
    });
    this.holes = (P.holes || []).map((h) => {
      const b = this.axisAt(h.y), r = this.R(h.y), dx = Math.cos(h.ang), dz = Math.sin(h.ang);
      return { a: [b[0] + dx * (r + 0.06), h.y, b[2] + dz * (r + 0.06)], b: [b[0] + dx * (r - 0.13), h.y - 0.03, b[2] + dz * (r - 0.13)], r: 0.03 };
    });
    // bounds for meshing
    let mn = [-R0 * 1.3, -0.04, -R0 * 1.3], mx = [R0 * 1.3, H + 0.05, R0 * 1.3];
    for (const s of [this.trunk, ...this.arms]) for (let c = 0; c < 3; c++) { mn[c] = Math.min(mn[c], s.mn[c] - R0 * 1.1); mx[c] = Math.max(mx[c], s.mx[c] + R0 * 1.1); }
    mn[1] = -0.04; mx[1] = Math.max(mx[1], H + 0.06);
    this.bmin = mn; this.bmax = mx;
    this.info = new Float64Array(3);
  }
  axisAt(y) { const t = Math.max(0, y) / this.P.H; return [this.P.lean[0] * t * t * this.P.H + 0.03 * Math.sin(y * 0.8 + this.P.seed), y, this.P.lean[1] * t * t * this.P.H + 0.03 * Math.cos(y * 0.7 + this.P.seed)]; }
  holeDist(x, y, z) {
    let d = 1e9;
    for (const h of this.holes) {
      const ax = h.b[0] - h.a[0], ay = h.b[1] - h.a[1], az = h.b[2] - h.a[2], l2 = ax * ax + ay * ay + az * az;
      const t = clamp(((x - h.a[0]) * ax + (y - h.a[1]) * ay + (z - h.a[2]) * az) / l2, 0, 1);
      d = Math.min(d, Math.hypot(x - h.a[0] - ax * t, y - h.a[1] - ay * t, z - h.a[2] - az * t) - h.r);
    }
    return d;
  }
  // the raw field (not a true distance near the pleats; scaled down where used)
  field(x, y, z) {
    let d = this.trunk.dist(x, y, z, null);
    for (const a of this.arms) d = smin(d, a.dist(x, y, z, null), 0.09);
    if (this.holes.length) d = smax(d, -this.holeDist(x, y, z), 0.015);
    return d;
  }
  sdf(x, y, z) { return this.field(x, y, z) * 0.62; }
  // surface attributes at a point on (or near) the skin
  attrs(x, y, z) {
    const ti = new Float64Array(3), ai = new Float64Array(3);
    let best = this.trunk.dist(x, y, z, ti), part = -1, u = ti[0], s = ti[1] - 0.3;
    this.arms.forEach((a, k) => { const d = a.dist(x, y, z, ai); if (d < best - 0.004) { best = d; part = k; u = ai[0]; s = this.P.arms[k].y + ai[1]; } });
    const seed = this.P.seed;
    const crest = Math.sin(Math.PI * u);
    const th = Math.atan2(z - this.axisAt(y)[2], x - this.axisAt(y)[0]);
    // corky grey-brown bark creeps up from the base with age, unevenly
    const barkH = this.P.bark * (0.75 + 0.5 * (fbm(Math.cos(th) * 1.4, Math.sin(th) * 1.4, seed * 0.37, 3) * 0.5 + 0.5));
    let bark = part < 0 ? sstep(barkH + 0.25, barkH - 0.2, y) : 0;
    bark = Math.max(bark, part < 0 ? 0.35 * sstep(0.35, 0.0, y) : 0);
    // old wounds: brown and black patches here and there, more of them low down
    const sc = fbm(x * 2.2 + seed, y * 0.9, z * 2.2, 3) + 0.12 * (1 - clamp(y / this.P.H, 0, 1));
    let scar = sstep(0.36, 0.5, sc) * 0.9;
    const hd = this.holes.length ? this.holeDist(x, y, z) : 1;
    const dark = sstep(0.012, -0.004, hd);
    scar = Math.max(scar, sstep(0.045, 0.012, hd)); // a callus ring round each hole
    // felted crown at the top and at each arm tip
    const tips = [this.apex, ...this.arms.map((a) => [a.tip[0], a.tip[1] + a.radius(a.len) * 0.9, a.tip[2]])];
    let crown = 0;
    for (const t of tips) crown = Math.max(crown, sstep(0.24, 0.04, Math.hypot(x - t[0], y - t[1], z - t[2])));
    return { part, u, s, crest, bark, scar, dark, crown };
  }
  // areoles: felt pads with spines, every few centimetres along each crest
  areoles(step = 0.028) {
    const out = [], rnd = rng(this.P.seed * 977 + 13);
    const stems = [{ stem: this.trunk, off: -0.3, from: 0.04 }, ...this.arms.map((a, k) => ({ stem: a, off: this.P.arms[k].y, from: this.R(this.P.arms[k].y) + 0.05 }))];
    const g = [0, 0, 0], e = 0.002;
    stems.forEach(({ stem, from }, si) => {
      for (let k = 0; k < stem.ribs; k++) {
        for (let s = from + rnd() * step; s < stem.len + stem.radius(stem.len) * 0.8; s += step * (0.85 + 0.3 * rnd())) {
          // the crest of rib k at arc length s: walk in from outside along the frame direction
          const i = stem.segAt(Math.min(s, stem.len));
          const sc = Math.min(s, stem.len), a = stem.p[i], T = stem.T[i], N = stem.N[i], B = stem.B[i], t = sc - stem.s[i];
          const cx = a[0] + T[0] * t, cy = a[1] + T[1] * t, cz = a[2] + T[2] * t;
          let ang = ((k + 0.5) / stem.ribs) * TAU - 0.05 * Math.sin(sc * 0.9 + stem.seed);
          let dirx = N[0] * Math.cos(ang) + B[0] * Math.sin(ang), diry = N[1] * Math.cos(ang) + B[1] * Math.sin(ang), dirz = N[2] * Math.cos(ang) + B[2] * Math.sin(ang);
          if (s > stem.len) { // over the rounded tip: tilt toward the tangent
            const f = Math.min(1, (s - stem.len) / (stem.radius(stem.len) * 0.9));
            const tx = T[0], ty = T[1], tz = T[2];
            dirx = dirx * (1 - f) + tx * f; diry = diry * (1 - f) + ty * f; dirz = dirz * (1 - f) + tz * f;
            const l = Math.hypot(dirx, diry, dirz); dirx /= l; diry /= l; dirz /= l;
          }
          let lo = 0, hi = stem.radius(sc) * 1.6;
          if (this.field(cx + dirx * hi, cy + diry * hi, cz + dirz * hi) < 0) continue;
          for (let it = 0; it < 30; it++) { const mid = (lo + hi) / 2; if (this.field(cx + dirx * mid, cy + diry * mid, cz + dirz * mid) < 0) lo = mid; else hi = mid; }
          const px = cx + dirx * hi, py = cy + diry * hi, pz = cz + dirz * hi;
          if (py < 0.03) continue;
          // only where this stem is the skin (not swallowed by an arm's swelling or a hole)
          if (Math.abs(stem.dist(px, py, pz, null)) > 0.012) continue;
          if (this.holes.length && this.holeDist(px, py, pz) < 0.05) continue;
          g[0] = this.field(px + e, py, pz) - this.field(px - e, py, pz); g[1] = this.field(px, py + e, pz) - this.field(px, py - e, pz); g[2] = this.field(px, py, pz + e) - this.field(px, py, pz - e);
          norm(g);
          const crown = s > stem.len - 0.12 ? 1 : 0;
          out.push([px, py, pz, g[0], g[1], g[2], T[0], T[1], T[2], crown]);
        }
      }
    });
    return out;
  }
}

// the five saguaros of the desert
export const SAGUARO_VARIANTS = [
  { name: 'classic', H: 7.8, R0: 0.27, ribs: 20, armRibs: 15, lean: [0.02, -0.015], seed: 3, bark: 0.95,
    arms: [{ y: 3.1, ang: 0.4, path: [[0.3, 0.04], [0.6, 0.2], [0.78, 0.55], [0.82, 1.1], [0.8, 1.8], [0.79, 2.3]], ra: 0.78 },
           { y: 3.7, ang: 3.5, path: [[0.32, 0.02], [0.62, 0.16], [0.82, 0.5], [0.86, 1.1], [0.85, 1.6], [0.86, 1.95]], ra: 0.74 }],
    holes: [{ y: 5.6, ang: 1.9 }], waists: [{ y: 5.0, c: 0.04, w: 0.35 }] },
  { name: 'old', H: 10.4, R0: 0.33, ribs: 22, armRibs: 16, lean: [-0.015, 0.02], seed: 8, bark: 1.7,
    arms: [{ y: 3.5, ang: 0.2, path: [[0.34, 0.05], [0.7, 0.24], [0.92, 0.65], [0.96, 1.4], [0.94, 2.2], [0.95, 2.8]], ra: 0.8 },
           { y: 4.1, ang: 1.9, path: [[0.3, 0.03], [0.56, 0.2], [0.72, 0.55], [0.75, 1.2], [0.74, 1.8], [0.75, 2.25]], ra: 0.76 },
           { y: 4.7, ang: 3.4, path: [[0.36, 0.02], [0.75, 0.2], [1.0, 0.6], [1.06, 1.4], [1.04, 2.2], [1.05, 2.9]], ra: 0.78 },
           { y: 5.3, ang: 4.7, path: [[0.28, 0.05], [0.52, 0.2], [0.66, 0.5], [0.68, 1.1], [0.69, 1.8]], ra: 0.72 },
           { y: 6.9, ang: 5.8, path: [[0.25, 0.04], [0.45, 0.17], [0.56, 0.45], [0.57, 1.0]], ra: 0.66 }],
    holes: [{ y: 7.6, ang: 0.9 }, { y: 6.2, ang: 4.0 }, { y: 8.8, ang: 2.6 }], waists: [{ y: 6.0, c: 0.05, w: 0.4 }, { y: 8.4, c: 0.04, w: 0.3 }] },
  { name: 'spear', H: 4.3, R0: 0.22, ribs: 18, armRibs: 14, lean: [0.03, 0.01], seed: 5, bark: 0.3, arms: [], holes: [], waists: [] },
  { name: 'onearm', H: 6.4, R0: 0.25, ribs: 19, armRibs: 14, lean: [-0.02, -0.02], seed: 12, bark: 0.7,
    arms: [{ y: 2.8, ang: 1.2, path: [[0.3, 0.04], [0.58, 0.2], [0.74, 0.5], [0.77, 1.0], [0.76, 1.5], [0.77, 1.8]], ra: 0.76 }],
    holes: [{ y: 4.9, ang: 4.2 }], waists: [] },
  { name: 'droop', H: 8.6, R0: 0.29, ribs: 21, armRibs: 15, lean: [0.025, 0.02], seed: 17, bark: 1.15,
    arms: [{ y: 4.2, ang: 0.6, path: [[0.3, 0.05], [0.6, 0.22], [0.78, 0.6], [0.8, 1.3], [0.82, 2.05]], ra: 0.76 },
           // an arm that sagged under its own weight after a hard frost, hung down, then turned up again
           { y: 4.9, ang: 2.9, path: [[0.32, -0.02], [0.6, -0.2], [0.78, -0.6], [0.86, -1.1], [0.84, -1.5], [0.92, -1.75], [1.05, -1.6], [1.12, -1.25], [1.14, -0.85]], ra: 0.7 },
           { y: 5.6, ang: 4.6, path: [[0.28, 0.04], [0.52, 0.2], [0.64, 0.5], [0.66, 1.0], [0.67, 1.45]], ra: 0.7 }],
    holes: [{ y: 6.7, ang: 5.4 }, { y: 3.5, ang: 2.0 }], waists: [{ y: 6.3, c: 0.045, w: 0.3 }] },
];

// ---------------- bleached cow bones (the herd's kind: hornless) ----------------
const L3 = (x, y, z) => Math.sqrt(x * x + y * y + z * z);
function sdEll(px, py, pz, cx, cy, cz, rx, ry, rz) {
  const x = (px - cx) / rx, y = (py - cy) / ry, z = (pz - cz) / rz, k0 = L3(x, y, z), k1 = L3(x / rx, y / ry, z / rz);
  return k1 > 1e-9 ? (k0 * (k0 - 1)) / k1 : -Math.min(rx, ry, rz);
}
// a capsule whose radius goes from ra to rb
function sdCap(px, py, pz, ax, ay, az, bx, by, bz, ra, rb = ra) {
  const vx = bx - ax, vy = by - ay, vz = bz - az, wx = px - ax, wy = py - ay, wz = pz - az;
  const t = clamp((wx * vx + wy * vy + wz * vz) / (vx * vx + vy * vy + vz * vz), 0, 1);
  return L3(wx - vx * t, wy - vy * t, wz - vz * t) - (ra + (rb - ra) * t);
}
function sdBox(px, py, pz, cx, cy, cz, hx, hy, hz, r) {
  const qx = Math.abs(px - cx) - hx, qy = Math.abs(py - cy) - hy, qz = Math.abs(pz - cz) - hz;
  return L3(Math.max(qx, 0), Math.max(qy, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, qy, qz), 0) - r;
}
function sdTorus(px, py, pz, cx, cy, cz, nx, ny, nz, R, r) {
  const dx = px - cx, dy = py - cy, dz = pz - cz, h = dx * nx + dy * ny + dz * nz;
  const q = L3(dx - nx * h, dy - ny * h, dz - nz * h) - R;
  return Math.sqrt(q * q + h * h) - r;
}
const nrm3 = (x, y, z) => { const l = L3(x, y, z); return [x / l, y / l, z / l]; };
const ORB = nrm3(0.86, 0.12, 0.5);
// the skull's body as a loft of rounded-box sections along its length (back z = -0.215, muzzle tip z = 0.25):
// half-width, top, bottom and squareness at each station, from a polled cow's proportions
const SK_Z = [-0.215, -0.19, -0.15, -0.1, -0.05, 0.0, 0.05, 0.1, 0.15, 0.2, 0.25];
const SK_W = [0.064, 0.077, 0.08, 0.074, 0.086, 0.094, 0.074, 0.061, 0.05, 0.041, 0.036];
const SK_T = [0.1, 0.124, 0.128, 0.128, 0.126, 0.118, 0.104, 0.09, 0.075, 0.06, 0.046];
const SK_B = [-0.02, -0.034, -0.044, -0.05, -0.058, -0.062, -0.058, -0.052, -0.044, -0.034, -0.024];
const SK_N = [3.0, 3.2, 3.2, 3.0, 2.8, 2.6, 2.4, 2.3, 2.2, 2.2, 2.2];
function skTable(T, z) {
  if (z <= SK_Z[0]) return T[0];
  for (let i = 0; i < SK_Z.length - 1; i++) if (z <= SK_Z[i + 1]) { const t = (z - SK_Z[i]) / (SK_Z[i + 1] - SK_Z[i]), u = t * t * (3 - 2 * t); return T[i] + (T[i + 1] - T[i]) * u; }
  return T[T.length - 1];
}
// skull, as found: nose toward +z, top up. About 46 cm long, 20 cm across the eyes, no horns
export function skullSDF(x, y, z) {
  const ax = Math.abs(x);
  const W = skTable(SK_W, z), Yt = skTable(SK_T, z), Yb = skTable(SK_B, z), n = skTable(SK_N, z), H = (Yt - Yb) / 2, yc = (Yt + Yb) / 2;
  const u = ax / W, v = Math.abs(y - yc) / H, r = Math.pow(Math.pow(u, n) + Math.pow(v, n), 1 / n);
  let d = (r - 1) * Math.min(W, H) * 0.9;
  d = smax(d, Math.max(-(z + 0.215), z - 0.252), 0.012);                                            // flat back, blunt muzzle
  d = smax(d, -sdEll(ax, y, z, 0.098, 0.062, -0.1, 0.03, 0.042, 0.062), 0.02);                      // temples: the waist behind the eyes
  d = smin(d, sdCap(ax, y, z, 0.086, 0.016, -0.02, 0.074, 0.012, -0.115, 0.0095, 0.008), 0.012);     // cheek arches across the temples
  d = smin(d, sdTorus(ax, y, z, 0.09, 0.052, 0.006, ORB[0], ORB[1], ORB[2], 0.031, 0.0075), 0.022);  // eye-socket rims
  d = smax(d, -sdEll(ax, y, z, 0.1, 0.052, 0.012, 0.027, 0.027, 0.024), 0.008);                     // the sockets
  d = smin(d, sdEll(ax, y, z, 0.072, -0.006, 0.062, 0.014, 0.012, 0.022), 0.012);                   // facial knobs above the first molars
  d = smin(d, sdCap(x, y, z, -0.052, 0.12, -0.198, 0.052, 0.12, -0.198, 0.011), 0.025);              // the poll's crest
  d = smax(d, -sdEll(x, y, z, 0, 0.13, -0.02, 0.05, 0.012, 0.09), 0.02);                             // forehead slightly dished
  d = smin(d, sdCap(ax, y, z, 0.014, 0.112, 0.02, 0.012, 0.062, 0.2, 0.008, 0.006), 0.018);           // nasal bones
  d = smax(d, -sdEll(x, y, z, 0, 0.034, 0.238, 0.028, 0.028, 0.075), 0.01);                         // the nose opening
  d = smin(d, sdCap(ax, y, z, 0.026, -0.016, 0.14, 0.013, -0.02, 0.258, 0.0085, 0.007), 0.01);       // the thin bones of the muzzle
  d = smax(d, -sdEll(x, y, z, 0, -0.07, 0.04, 0.034, 0.014, 0.1), 0.01);                            // vault of the palate
  // cheek teeth, six a side, set into the jaw and worn flat
  let teeth = 1e9;
  for (let k = 0; k < 6; k++) { const tz = -0.045 + k * 0.026; teeth = Math.min(teeth, sdBox(ax, y, z, 0.048, skTable(SK_B, tz) + 0.002, tz, 0.01, 0.009, 0.011, 0.003)); }
  d = smin(d, teeth, 0.006);
  d = smin(d, sdEll(ax, y, z, 0.028, 0.0, -0.219, 0.016, 0.022, 0.014), 0.008);                     // condyles
  d = smax(d, -sdCap(x, y, z, 0, 0.004, -0.26, 0, 0.004, -0.17, 0.02), 0.006);                      // foramen magnum
  return d + 0.0012 * vnoise(x * 90, y * 90, z * 90);
}
export function skullAttrs(x, y, z) {
  const ax = Math.abs(x);
  let tooth = 0;
  for (let k = 0; k < 6; k++) { const tz = -0.045 + k * 0.026; tooth = Math.max(tooth, sstep(0.004, 0.0, sdBox(ax, y, z, 0.048, skTable(SK_B, tz) + 0.002, tz, 0.01, 0.009, 0.011, 0.003)) * sstep(skTable(SK_B, tz) + 0.003, skTable(SK_B, tz) - 0.003, y)); }
  const porous = sstep(0.16, 0.24, z) * 0.8 + 0.6 * sstep(0.02, -0.01, sdEll(ax, y, z, 0.1, 0.052, 0.012, 0.034, 0.034, 0.03));
  return [tooth, Math.min(1, porous)];
}
// one half of the lower jaw, the flat of it in the x = 0 plane: teeth along the top, the ramus rising at the back
export function jawSDF(x, y, z) {
  // in the (z, y) plane: a body tapering toward the incisors, a ramus, the angle, the condyle and coronoid
  let d2 = sdCap(0, y, z, 0, 0.0, -0.06, 0, 0.012, 0.25, 0.03, 0.013);
  d2 = smin(d2, sdCap(0, y, z, 0, 0.0, -0.075, 0, 0.17, -0.105, 0.03, 0.017), 0.03);
  d2 = smin(d2, sdEll(0, y, z, 0, -0.005, -0.085, 1, 0.05, 0.045), 0.02);
  d2 = smin(d2, sdEll(0, y, z, 0, 0.18, -0.115, 1, 0.014, 0.022), 0.01);
  d2 = smin(d2, sdCap(0, y, z, 0, 0.12, -0.08, 0, 0.19, -0.055, 0.009, 0.006), 0.012);
  const thick = 0.011 + 0.006 * sstep(0.1, -0.06, z);
  let d = smax(d2, Math.abs(x) - thick, 0.006);
  let teeth = 1e9;
  for (let k = 0; k < 6; k++) teeth = Math.min(teeth, sdBox(x, y, z, 0, 0.034, -0.035 + k * 0.025, 0.009, 0.014, 0.01, 0.003));
  for (let k = 0; k < 4; k++) teeth = Math.min(teeth, sdCap(x, y, z, 0, 0.02, 0.245 + k * 0.004, 0, 0.03, 0.27 + k * 0.01, 0.004));
  d = smin(d, teeth, 0.005);
  return d + 0.0012 * vnoise(x * 100, y * 100, z * 100);
}
export function jawAttrs(x, y, z) {
  let tooth = 0;
  for (let k = 0; k < 6; k++) tooth = Math.max(tooth, sstep(0.006, 0.0, sdBox(x, y, z, 0, 0.034, -0.035 + k * 0.025, 0.009, 0.014, 0.01, 0.003)));
  tooth = Math.max(tooth, sstep(0.03, 0.04, y) * sstep(0.235, 0.25, z));
  return [tooth, sstep(0.18, 0.26, z)];
}
// a vertebra: the round body along z, the arch, a tall spine (thoracic) or long flat wings (lumbar)
export function vertebraSDF(x, y, z, lumbar) {
  let d = sdCap(x, y, z, 0, 0, -0.026, 0, 0, 0.026, 0.03);
  d = smax(d, Math.abs(z) - 0.03, 0.006);
  d = smin(d, sdTorus(x, y, z, 0, 0.048, 0, 0, 0, 1, 0.024, 0.011), 0.012);
  if (lumbar) {
    d = smin(d, sdBox(x, y, z, 0, 0.012, 0, 0.09, 0.006, 0.016, 0.004), 0.012);
    d = smin(d, sdBox(x, y, z, 0, 0.1, -0.005, 0.006, 0.035, 0.022, 0.004), 0.01);
  } else {
    d = smin(d, sdBox(x, y, z, 0, 0.14, -0.03, 0.006, 0.09, 0.016, 0.004), 0.01);
    d = smin(d, sdCap(Math.abs(x), y, z, 0.03, 0.05, 0, 0.055, 0.055, -0.01, 0.009), 0.01);
  }
  d = smax(d, -sdCap(x, y, z, 0, 0.048, -0.06, 0, 0.048, 0.06, 0.014), 0.004); // the spinal canal
  return d + 0.0012 * vnoise(x * 100, y * 100, z * 100);
}
// a thigh bone: ball on one end, two knuckles on the other
export function femurSDF(x, y, z) {
  let d = sdCap(x, y, z, 0, 0, -0.15, 0.006, 0, 0.15, 0.019, 0.022);
  d = smin(d, sdEll(x, y, z, -0.012, 0.012, -0.18, 0.03, 0.03, 0.03), 0.02);
  d = smin(d, sdEll(x, y, z, 0.035, 0.0, -0.165, 0.022, 0.028, 0.03), 0.02);
  d = smin(d, sdEll(x, y, z, 0.018, -0.006, 0.185, 0.024, 0.026, 0.026), 0.02);
  d = smin(d, sdEll(x, y, z, -0.018, -0.006, 0.185, 0.022, 0.026, 0.026), 0.02);
  return d + 0.0012 * vnoise(x * 100, y * 100, z * 100);
}
// the hip: two blades of the ilium, the socket, the ring of the pubis and ischium with its two holes
export function pelvisSDF(x, y, z) {
  const ax = Math.abs(x);
  let d = sdEll(ax, y, z, 0.11, 0.03, 0.12, 0.075, 0.016, 0.11);                                  // ilium wing, flat
  d = smin(d, sdCap(ax, y, z, 0.075, 0.03, 0.06, 0.06, 0.0, -0.05, 0.02), 0.03);                   // shaft to the socket
  d = smin(d, sdTorus(ax, y, z, 0.07, -0.005, -0.06, 0.95, 0.0, 0.3, 0.024, 0.012), 0.015);        // the hip socket
  d = smin(d, sdTorus(ax, y, z, 0.045, -0.02, -0.15, 0, 1, 0, 0.04, 0.012), 0.015);                // pubis and ischium ring
  d = smin(d, sdCap(ax, y, z, 0.07, -0.01, -0.21, 0.09, 0.0, -0.24, 0.018), 0.015);                // seat bones
  d = smin(d, sdCap(x, y, z, -0.03, 0.03, 0.08, 0.03, 0.03, 0.08, 0.022), 0.02);                   // sacrum bridge
  return d + 0.0012 * vnoise(x * 100, y * 100, z * 100);
}
// a shoulder blade: a broad flat triangle with a ridge down it and a shallow cup at the narrow end
export function scapulaSDF(x, y, z) {
  const t = clamp((z + 0.13) / 0.3, 0, 1), w = 0.022 + 0.09 * t;
  let d = Math.max(Math.abs(x) - w, Math.abs(y) - 0.006, -0.13 - z, z - 0.17) - 0.003;
  d = smin(d, sdBox(x, y, z, 0, 0.014, 0.03, 0.005, 0.012, 0.13, 0.003), 0.008);
  d = smin(d, sdEll(x, y, z, 0, 0.0, -0.14, 0.026, 0.016, 0.022), 0.012);
  d = smax(d, -sdEll(x, y, z, 0, 0.0, -0.162, 0.018, 0.011, 0.012), 0.004);
  return d + 0.0012 * vnoise(x * 100, y * 100, z * 100);
}
export const BONES = [
  { name: 'skull', sdf: skullSDF, attrs: skullAttrs, bmin: [-0.14, -0.1, -0.24], bmax: [0.14, 0.16, 0.32] },
  { name: 'jaw', sdf: jawSDF, attrs: jawAttrs, bmin: [-0.03, -0.06, -0.15], bmax: [0.03, 0.22, 0.31] },
  { name: 'vert-t', sdf: (x, y, z) => vertebraSDF(x, y, z, false), bmin: [-0.08, -0.04, -0.06], bmax: [0.08, 0.25, 0.05] },
  { name: 'vert-l', sdf: (x, y, z) => vertebraSDF(x, y, z, true), bmin: [-0.11, -0.04, -0.05], bmax: [0.11, 0.15, 0.05] },
  { name: 'femur', sdf: femurSDF, bmin: [-0.06, -0.05, -0.22], bmax: [0.07, 0.05, 0.22] },
  { name: 'pelvis', sdf: pelvisSDF, bmin: [-0.2, -0.06, -0.28], bmax: [0.2, 0.07, 0.25] },
  { name: 'scapula', sdf: scapulaSDF, bmin: [-0.13, -0.04, -0.18], bmax: [0.13, 0.04, 0.19] },
];

// monsters-sdf.js — the five monster candidates, sculpted as signed distance fields (baked offline by gen-monsters.mjs).
// Units are metres. +z faces the player, +y is up, the ground is y = 0.
// Each monster also says, per surface point, what it is made of (teeth, mouth, raw flesh, bone, eye, hide)
// and how it moves (jaw, head, neck bend, hanging sway), so the viewer can animate one baked mesh.

const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
export const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const smin = (a, b, k) => { const h = Math.max(k - Math.abs(a - b), 0) / k; return Math.min(a, b) - h * h * k * 0.25; };
const smax = (a, b, k) => { const h = Math.max(k - Math.abs(a - b), 0) / k; return Math.max(a, b) + h * h * k * 0.25; };
const len3 = (x, y, z) => Math.sqrt(x * x + y * y + z * z);
const sph = (x, y, z, r) => len3(x, y, z) - r;
function ell(x, y, z, rx, ry, rz) {
  const ax = x / rx, ay = y / ry, az = z / rz, k0 = Math.sqrt(ax * ax + ay * ay + az * az);
  const bx = ax / rx, by = ay / ry, bz = az / rz, k1 = Math.sqrt(bx * bx + by * by + bz * bz);
  return k1 < 1e-12 ? -Math.min(rx, ry, rz) : (k0 * (k0 - 1)) / k1;
}

// ---------- noise ----------
function hash(i, j, k) {
  let h = Math.imul(i, 374761393) ^ Math.imul(j, 668265263) ^ Math.imul(k, 1440662683);
  h = Math.imul(h ^ (h >>> 13), 1274126177); h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
}
function vnoise(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), xf = x - xi, yf = y - yi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
  const a = hash(xi, yi, zi), b = hash(xi + 1, yi, zi), c = hash(xi, yi + 1, zi), d = hash(xi + 1, yi + 1, zi);
  const e = hash(xi, yi, zi + 1), f = hash(xi + 1, yi, zi + 1), g = hash(xi, yi + 1, zi + 1), h = hash(xi + 1, yi + 1, zi + 1);
  const x1 = a + (b - a) * u, x2 = c + (d - c) * u, x3 = e + (f - e) * u, x4 = g + (h - g) * u;
  const y1 = x1 + (x2 - x1) * v, y2 = x3 + (x4 - x3) * v;
  return (y1 + (y2 - y1) * w) * 2 - 1;
}
export function fbm(x, y, z, oct = 3) { let s = 0, a = 0.5, f = 1; for (let i = 0; i < oct; i++) { s += a * vnoise(x * f, y * f, z * f); f *= 2.03; a *= 0.5; } return s; }
const rnd = (i, s = 0) => hash(i + 11, s * 7 + 3, 977);

// ---------- primitives ----------
function roundCone(a, b, r1, r2) {
  const bax = b[0] - a[0], bay = b[1] - a[1], baz = b[2] - a[2];
  const l2 = bax * bax + bay * bay + baz * baz, rr = r1 - r2, a2 = l2 - rr * rr, il2 = 1 / l2, srr = Math.sign(rr);
  return (px, py, pz) => {
    const pax = px - a[0], pay = py - a[1], paz = pz - a[2], y = pax * bax + pay * bay + paz * baz, z = y - l2;
    const qx = pax * l2 - bax * y, qy = pay * l2 - bay * y, qz = paz * l2 - baz * y;
    const x2 = qx * qx + qy * qy + qz * qz, y2 = y * y * l2, z2 = z * z * l2, k = srr * rr * rr * x2;
    if (Math.sign(z) * a2 * z2 > k) return Math.sqrt(x2 + z2) * il2 - r2;
    if (Math.sign(y) * a2 * y2 < k) return Math.sqrt(x2 + y2) * il2 - r1;
    return (Math.sqrt(x2 * a2 * il2) + y * rr) * il2 - r1;
  };
}
// nearest point parameter on a segment (for weights along limbs, necks and strands)
function segT(px, py, pz, a, b) {
  const bx = b[0] - a[0], by = b[1] - a[1], bz = b[2] - a[2];
  return clamp(((px - a[0]) * bx + (py - a[1]) * by + (pz - a[2]) * bz) / (bx * bx + by * by + bz * bz), 0, 1);
}
function aabb(pts, rads) {
  const lo = [1e9, 1e9, 1e9], hi = [-1e9, -1e9, -1e9];
  pts.forEach((p, i) => { for (let c = 0; c < 3; c++) { lo[c] = Math.min(lo[c], p[c] - rads[i]); hi[c] = Math.max(hi[c], p[c] + rads[i]); } });
  return [lo, hi];
}
const boxDist = (x, y, z, lo, hi) => len3(Math.max(lo[0] - x, 0, x - hi[0]), Math.max(lo[1] - y, 0, y - hi[1]), Math.max(lo[2] - z, 0, z - hi[2]));
// a tapered tube through points; far away it answers with the distance to its box (a lower bound), which is enough there
function tube(pts, rads, k = 0, M = 0.1) {
  const segs = [];
  for (let i = 0; i + 1 < pts.length; i++) segs.push(roundCone(pts[i], pts[i + 1], rads[i], rads[i + 1]));
  const [lo, hi] = aabb(pts, rads);
  const f = (x, y, z) => {
    const bd = boxDist(x, y, z, lo, hi);
    if (bd > M) return bd;
    let d = 1e9;
    for (const s of segs) { const v = s(x, y, z); d = k ? smin(d, v, k) : Math.min(d, v); }
    return d;
  };
  f.pts = pts; f.rads = rads; f.lo = lo; f.hi = hi;
  return f;
}
// where along a tube a point sits (0 at the first point, 1 at the last), by the nearest segment
function tubeT(f, x, y, z) {
  const P = f.pts, n = P.length - 1; let best = 1e9, bt = 0, L = 0, acc = [0];
  for (let i = 0; i < n; i++) acc.push((L += Math.hypot(P[i + 1][0] - P[i][0], P[i + 1][1] - P[i][1], P[i + 1][2] - P[i][2])));
  for (let i = 0; i < n; i++) {
    const t = segT(x, y, z, P[i], P[i + 1]);
    const qx = P[i][0] + (P[i + 1][0] - P[i][0]) * t, qy = P[i][1] + (P[i + 1][1] - P[i][1]) * t, qz = P[i][2] + (P[i + 1][2] - P[i][2]) * t;
    const d = len3(x - qx, y - qy, z - qz) - (f.rads[i] + (f.rads[i + 1] - f.rads[i]) * t);
    if (d < best) { best = d; bt = (acc[i] + (acc[i + 1] - acc[i]) * t) / L; }
  }
  return bt;
}
// Catmull-Rom through control points, n samples per span
function curve(pts, rads, n = 4) {
  const P = [], R = [];
  for (let i = 0; i + 1 < pts.length; i++) {
    const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
    for (let s = 0; s < n; s++) {
      const t = s / n, t2 = t * t, t3 = t2 * t;
      P.push([0, 1, 2].map((c) => 0.5 * (2 * p1[c] + (-p0[c] + p2[c]) * t + (2 * p0[c] - 5 * p1[c] + 4 * p2[c] - p3[c]) * t2 + (-p0[c] + 3 * p1[c] - 3 * p2[c] + p3[c]) * t3)));
      R.push(rads[i] + (rads[i + 1] - rads[i]) * t);
    }
  }
  P.push(pts[pts.length - 1].slice()); R.push(rads[rads.length - 1]);
  return [P, R];
}
// a local frame: roll about z, then pitch (positive tips +z down), then yaw (positive turns +z toward +x)
function frame(o, yaw = 0, pitch = 0, roll = 0) {
  const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch), cr = Math.cos(roll), sr = Math.sin(roll);
  const rot = ([x, y, z]) => { [x, y] = [x * cr - y * sr, x * sr + y * cr]; [y, z] = [y * cp - z * sp, y * sp + z * cp]; [x, z] = [x * cy + z * sy, -x * sy + z * cy]; return [x, y, z]; };
  const X = rot([1, 0, 0]), Y = rot([0, 1, 0]), Z = rot([0, 0, 1]);
  return {
    o, X, Y, Z,
    toLocal(x, y, z, out) { const dx = x - o[0], dy = y - o[1], dz = z - o[2]; out[0] = dx * X[0] + dy * X[1] + dz * X[2]; out[1] = dx * Y[0] + dy * Y[1] + dz * Y[2]; out[2] = dx * Z[0] + dy * Z[1] + dz * Z[2]; return out; },
    toWorld([a, b, c]) { return [o[0] + a * X[0] + b * Y[0] + c * Z[0], o[1] + a * X[1] + b * Y[1] + c * Z[1], o[2] + a * X[2] + b * Y[2] + c * Z[2]]; },
    dir([a, b, c]) { return [a * X[0] + b * Y[0] + c * Z[0], a * X[1] + b * Y[1] + c * Z[1], a * X[2] + b * Y[2] + c * Z[2]]; },
  };
}
// a flattened capsule (ears, flaps): the axis a->b, squashed along n by s
function flatCap(a, b, r1, r2, n, s) {
  const f = roundCone(a, b, r1, r2), ln = Math.hypot(...n), nx = n[0] / ln, ny = n[1] / ln, nz = n[2] / ln;
  return (x, y, z) => { const k = ((x - a[0]) * nx + (y - a[1]) * ny + (z - a[2]) * nz) * (s - 1); return f(x + nx * k, y + ny * k, z + nz * k) / s; };
}

// ---------- the head ----------
// Head-local: origin in the cranium, +z along the muzzle, +y up. The jaw hangs from a hinge and is baked open.
class Head {
  constructor(o = {}) {
    const L = (this.L = o.L ?? 0.38), W = (this.W = o.W ?? 1);
    this.open = o.open ?? 0.5; this.co = Math.cos(this.open); this.so = Math.sin(this.open);
    this.H = [0, -0.058, -0.035];
    this.eyes = o.eyes ?? [[0.068 * W, 0.045, 0.125, 0.024], [-0.068 * W, 0.045, 0.125, 0.024]];
    this.sock = o.sock ?? 1.7; // socket radius over eye radius
    this.skull = !!o.skull; this.knobs = !!o.knobs; this.gaunt = o.gaunt ?? 1; this.seed = o.seed ?? 1;
    this.snout = roundCone([0, 0.0, 0.07], [0, -0.03, L], 0.072, 0.048);
    this.ridge = roundCone([0, 0.055, 0.07], [0, 0.015, L - 0.05], 0.03, 0.022);
    this.cav = roundCone([0, -0.072, 0.03], [0, -0.08, L - 0.022], 0.042, 0.022);
    this.zyg = roundCone([0.086 * W, -0.012, 0.0], [0.068 * W, -0.03, 0.16], 0.02, 0.014);
    this.ramus = roundCone([0.062 * W, -0.066, -0.01], [0.034 * W, -0.1, L - 0.03], 0.028, 0.02);
    this.trough = roundCone([0, -0.07, 0.02], [0, -0.076, L - 0.05], 0.03, 0.017);
    this.ears = (o.ears ?? []).map((e) => flatCap(e.a, e.b, e.r1, e.r2, e.n, e.s ?? 3));
    this.horns = (o.horns ?? []).map((h) => tube(...curve(h.pts, h.rads, 4), 0, 0.12));
    this.eyeSock = this.eyes.map(([x, y, z, r]) => {
      const c = [0, 0.03, -0.02], d = [x - c[0], y - c[1], z - c[2]], l = Math.hypot(...d);
      const deep = o.sockDeep ?? 0.55;
      return [x + (d[0] / l) * r * deep, y + (d[1] / l) * r * deep, z + (d[2] / l) * r * deep, r * this.sock];
    });
    // teeth: upper along the rim where the palate breaks through the muzzle, lower along the jaw
    this.tu = []; this.tl = [];
    const nT = o.teeth ?? 8, tl = o.toothLen ?? 1;
    for (let side = -1; side <= 1; side += 2) for (let i = 0; i < nT; i++) {
      const f = (i + 0.5) / nT, z = 0.08 + f * (L - 0.1), u = (z - 0.07) / (L - 0.07), uc = (z - 0.03) / (L - 0.022 - 0.03);
      const ya = -0.03 * u, rs = 0.072 + (0.048 - 0.072) * u, yc = -0.072 - 0.008 * uc, rc = 0.042 + (0.022 - 0.042) * uc;
      const yr = (rs * rs - rc * rc) / (2 * (yc - ya)) + (ya + yc) / 2, xr = Math.sqrt(Math.max(1e-6, rc * rc - (yr - yc) * (yr - yc)));
      const r = rnd(i * 2 + (side > 0 ? 0 : 50), this.seed), fang = Math.abs(i - Math.round(nT * 0.72)) < 1 ? 1.7 : 1;
      const len = (0.022 + 0.03 * r) * fang * tl, b = [side * (xr * W + 0.003), yr + 0.008, z];
      this.tu.push(roundCone(b, [b[0] - side * len * 0.18, b[1] - len, b[2] + len * 0.12 * (r - 0.3)], 0.0075 + 0.004 * r * fang, 0.0012));
      const rz = 0.02 + f * (L - 0.07), rl = rnd(i * 2 + 1 + (side > 0 ? 0 : 50), this.seed), fl = Math.abs(i - Math.round(nT * 0.8)) < 1 ? 1.5 : 1;
      const tt = rz / (L - 0.03 + 0.01), yt = -0.066 + (-0.1 + 0.066) * tt + 0.027 - 0.006 * tt, xt = (0.062 + (0.034 - 0.062) * tt) * W;
      const len2 = (0.018 + 0.026 * rl) * fl * tl, c = [side * xt * 0.9, yt - 0.004, rz];
      this.tl.push(roundCone(c, [c[0] - side * len2 * 0.15, c[1] + len2, c[2] + len2 * 0.1], 0.0065 + 0.003 * rl * fl, 0.0011));
    }
    this.R = (o.radius ?? 0.5) + L; // bounding radius for early outs
    this._q = [0, 0, 0];
  }
  upper(x, y, z) {
    const W = this.W, xs = x / W, ax = Math.abs(x);
    let d = ell(x, y - 0.035, z + 0.01, 0.1 * W, 0.092, 0.115);
    d = smin(d, ell(x, y - 0.04, z - 0.09, 0.085 * W, 0.06, 0.09), 0.04);
    d = smin(d, this.snout(xs, y, z) * Math.min(1, W), 0.05);
    d = smin(d, this.ridge(xs, y, z) * Math.min(1, W), 0.03);
    d = smin(d, this.zyg(ax, y, z), 0.02);
    for (const [ex, ey, ez] of this.eyes) d = smin(d, ell(x - ex, y - ey - 0.03, z - ez + 0.004, 0.044, 0.022, 0.036), 0.026);
    if (this.knobs) for (const [ex, ey, ez, er] of this.eyes) d = smin(d, sph(x - ex, y - ey + 0.004, z - ez + 0.01, er * 1.85), 0.04);
    if (this.gaunt > 0) d = smax(d, -sph(ax - 0.098 * W, y + 0.038, z - 0.18, 0.042 * this.gaunt), 0.03); // hollow cheeks
    for (const [sx, sy, sz, sr] of this.eyeSock) d = smax(d, -sph(x - sx, y - sy, z - sz, sr), 0.012);
    d = smax(d, -sph(ax - 0.024 * W, y + 0.015, z - this.L + 0.004, this.skull ? 0.03 : 0.014), 0.008); // nostrils
    if (this.skull) d = smax(d, -ell(x, y - 0.012, z - this.L * 0.62, 0.03 * W, 0.022, this.L * 0.2), 0.01); // nasal opening
    return smax(d, -this.cav(xs, y, z), 0.012);
  }
  mouthVol(x, y, z) { return Math.min(this.cav(x / this.W, y, z), 1e9); }
  jaw(x, y, z) { // jaw-local (closed) coordinates
    const W = this.W, ax = Math.abs(x);
    let d = this.ramus(ax, y, z);
    d = smin(d, ell(x, y + 0.1, z - this.L + 0.04, 0.038 * W, 0.026, 0.03), 0.03);
    d = smin(d, ell(x, y + 0.108, z - this.L * 0.5, 0.042 * W, 0.014, this.L * 0.45), 0.02);
    return smax(d, -this.trough(x / W, y, z), 0.01);
  }
  // fills G.hd (skull/skin), G.jw (jaw), G.tu/G.tl (teeth), G.ey (eyes), G.hn (horn), G.mo (mouth cavity); returns the head distance
  eval(x, y, z, G) {
    const dy = y - this.H[1], dz = z - this.H[2], c = this.co, s = this.so;
    const qy = this.H[1] + dy * c + dz * s, qz = this.H[2] - dy * s + dz * c; // jaw-local
    let dU = this.upper(x, y, z);
    for (const e of this.ears) dU = smin(dU, e(x, y, z), 0.02);
    const dJ = this.jaw(x, qy, qz);
    let tu = 1e9, tl = 1e9, ey = 1e9, hn = 1e9;
    if (len3(x, y + 0.08, z - this.L * 0.55) < this.L * 0.7 + 0.1) {
      for (const t of this.tu) tu = Math.min(tu, t(x, y, z));
      for (const t of this.tl) tl = Math.min(tl, t(x, qy, qz));
    }
    for (const [ex, ey0, ez, er] of this.eyes) ey = Math.min(ey, sph(x - ex, y - ey0, z - ez, er));
    for (const h of this.horns) hn = Math.min(hn, h(x, y, z));
    G.hd = dU; G.jw = dJ; G.tu = tu; G.tl = tl; G.ey = ey; G.hn = hn;
    let so = 1e9; for (const [sx, sy, sz, sr] of this.eyeSock) so = Math.min(so, sph(x - sx, y - sy, z - sz, sr));
    if (this.skull) so = Math.min(so, ell(x, y - 0.012, z - this.L * 0.62, 0.03 * this.W, 0.022, this.L * 0.2));
    G.mo = Math.min(this.mouthVol(x, y, z), this.trough(x / this.W, qy, qz) + 0.004, so + 0.008);
    let d = smin(dU, dJ, 0.03);
    d = smin(d, Math.min(tu, tl), 0.004);
    d = Math.min(d, ey);
    return smin(d, hn, 0.015);
  }
  jawW(G) { return sstep(-0.012, 0.012, Math.min(G.hd, G.tu, G.hn) - Math.min(G.jw, G.tl)); }
}

// ---------- shared monster plumbing ----------
const MATS = ['teeth', 'mouth', 'flesh', 'bone'];
class Monster {
  constructor() { this.G = {}; this._l = [0, 0, 0]; }
  headDist(x, y, z, G) {
    const l = this.hf.toLocal(x, y, z, this._l);
    const r = len3(l[0], l[1], l[2]);
    if (r > this.head.R) { G.hd = G.jw = G.tu = G.tl = G.ey = G.hn = G.mo = r - this.head.R + 0.3; return r - this.head.R + 0.3; }
    return this.head.eval(l[0], l[1], l[2], G);
  }
  sdf(x, y, z) { return this.eval(x, y, z, this.G); }
  // per-vertex attributes for the viewer: material [teeth, mouth, flesh, bone], ext [eye, breath, fur, wrinkle], rig [jaw, head, neck, sway]
  attrs(x, y, z) {
    const G = this.G; this.eval(x, y, z, G);
    const l = this.hf.toLocal(x, y, z, [0, 0, 0]);
    const headSkin = this.boneHead ? 1e9 : Math.min(G.hd, G.jw);
    const groups = { skin: Math.min(G.bd ?? 1e9, headSkin, G.hr ?? 1e9, G.hi ?? 1e9), teeth: Math.min(G.tu, G.tl), eye: G.ey, bone: Math.min(G.hn, G.bn ?? 1e9), flesh: G.fl ?? 1e9 };
    const m = Math.min(...Object.values(groups)), w = {};
    for (const k in groups) w[k] = sstep(0.004, 0.0, groups[k] - m);
    const tot = Object.values(w).reduce((a, b) => a + b, 0) || 1;
    for (const k in w) w[k] /= tot;
    const ex = this.extra(x, y, z, G, l, w);
    const mouth = sstep(0.016, 0.0, G.mo) * (1 - w.teeth - w.eye) * (ex.noMouth ? 0 : 1);
    const flesh = clamp(w.flesh + (ex.flesh ?? 0) * w.skin, 0, 1), bone = clamp(w.bone + (ex.bone ?? 0) * w.skin, 0, 1);
    const pr = (l[0] * this.neckDir[0] + l[1] * this.neckDir[1] + l[2] * this.neckDir[2]);
    const headW = (1 - sstep(-0.02, 0.12, pr)) * (1 - sstep(this.head.R * 0.8, this.head.R, len3(...l)));
    const jawW = this.jawWeight ? this.jawWeight(x, y, z, G, l) : this.head.jawW(G) * headW;
    return {
      mat: [w.teeth, mouth, flesh, bone],
      ext: [w.eye, ex.breath ?? 0, (ex.fur ?? 0) * (1 - w.teeth - w.eye - bone - flesh * 0.7), ex.wrinkle ?? 0],
      rig: [jawW, headW, ex.neck ?? 0, ex.sway ?? 0],
    };
  }
  meta() {
    const h = this.hf, hinge = h.toWorld(this.head.H);
    return {
      name: this.name, bounds: this.bounds, height: this.height,
      headPivot: h.o, headX: h.X, headY: h.Y, headZ: h.Z, jawHinge: hinge, jawOpen: this.head.open,
      split: this.split ?? null, neck: this.neckMeta ?? null, cams: this.cams, eyes: this.head.eyes.map((e) => h.toWorld(e)),
    };
  }
}
// ribs: shallow grooves between ribs along an axis coordinate, masked to the flanks
const ribs = (u, spacing, depth) => 0.75 * depth * (Math.pow(Math.abs(Math.cos((Math.PI * u) / spacing)), 4) - 0.35);

// =====================================================================================
// ① A — stands up. A cow risen onto its hind legs: tall, hunched, long arms with split-hoof fingers,
// the head tipped over on its side, shaggy hide hanging in strands (the second reference photo).
export class Stander extends Monster {
  constructor() {
    super();
    this.name = 'stander'; this.height = 2.55;
    this.head = new Head({
      L: 0.38, W: 1.05, open: 0.55, seed: 3, teeth: 8, toothLen: 1.1, gaunt: 1.2,
      eyes: [[0.066, 0.04, 0.13, 0.027], [-0.072, 0.085, 0.11, 0.025]], sock: 1.6,
      ears: [-1, 1].map((s) => ({ a: [s * 0.1, 0.05, -0.04], b: [s * 0.2, -0.16, -0.06], r1: 0.022, r2: 0.036, n: [s * 0.3, 0, 1], s: 3.2 })),
      horns: [-1, 1].map((s) => ({ pts: [[s * 0.085, 0.085, -0.02], [s * 0.13, 0.12, -0.01], [s * 0.15, 0.15, 0.03]], rads: [0.026, 0.018, 0.006] })),
    });
    this.hf = frame([0, 2.22, 0.38], 0.12, 0.42, 0.38);
    this.neckDir = [0, -0.2, -0.98];
    const nEnd = this.hf.toWorld([0, -0.03, -0.1]);
    this.torso = tube(...curve([[0, 1.06, -0.04], [0, 1.36, -0.08], [0, 1.66, -0.03], [0, 1.94, 0.05], [0, 2.12, 0.14]], [0.17, 0.125, 0.2, 0.215, 0.16], 3), 0.08);
    this.neck = tube(...curve([[0, 2.08, 0.1], [0, 2.2, 0.22], nEnd], [0.12, 0.09, 0.075], 4), 0.05);
    this.legs = [-1, 1].map((s) => tube([[s * 0.15, 1.04, -0.03], [s * 0.17, 0.7, 0.13], [s * 0.15, 0.42, -0.15], [s * 0.14, 0.08, -0.04]], [0.1, 0.066, 0.04, 0.03], 0.03));
    this.arms = [-1, 1].map((s) => tube([[s * 0.24, 2.04, 0.1], [s * 0.37, 1.5, 0.02], [s * 0.31, 0.96, 0.17]], [0.07, 0.045, 0.03], 0.03));
    this.fingers = [];
    for (const s of [-1, 1]) for (let i = 0; i < 3; i++) {
      const dx = (i - 1) * 0.035, dz = (i - 1) * 0.03, w = [s * 0.31, 0.96, 0.17];
      this.fingers.push(tube([w, [s * (0.31 + dx * 1.1) + s * 0.01, 0.8, 0.22 + dz], [s * (0.31 + dx * 1.5) + s * 0.02, 0.64, 0.25 + dz * 1.2], [s * (0.3 + dx * 1.7) + s * 0.01, 0.52, 0.2 + dz * 1.3], [s * (0.29 + dx * 1.7), 0.47, 0.13 + dz * 1.3]], [0.02, 0.015, 0.011, 0.007, 0.002], 0.012));
    }
    // shaggy hide in long matted strands from the shoulders down to the knees, hiding most of the body
    this.hair = [];
    for (let i = 0; i < 110; i++) {
      const y = 1.25 + 0.95 * Math.pow(rnd(i, 1), 0.7), phi = Math.PI * 2 * rnd(i, 2);
      const u = clamp((y - 1.06) / 1.06, 0, 1), cz = -0.04 + 0.16 * u * u, r0 = y > 1.9 ? 0.2 + 0.06 * Math.sin(Math.PI * clamp((y - 1.9) / 0.3, 0, 1)) : 0.14 + 0.07 * Math.sin(Math.PI * clamp((y - 1.3) / 0.65, 0, 1));
      const nx = Math.cos(phi), nz = Math.sin(phi), a = [r0 * nx * 0.95, y, cz + r0 * nz * 0.8];
      const L = 0.35 + 0.6 * rnd(i, 3) * sstep(1.3, 2.0, y), wob = (rnd(i, 4) - 0.5) * 0.1, out = 0.05 + 0.05 * rnd(i, 5);
      this.hair.push(tube([a, [a[0] + nx * out, y - 0.12, a[2] + nz * out], [a[0] + nx * out * 1.3 + wob, y - L * 0.6, a[2] + nz * out * 1.2], [a[0] + nx * out + wob * 1.6, y - L, a[2] + nz * out + wob]], [0.028, 0.022, 0.012, 0.003], 0.01, 0.06));
    }
    this.hairBox = [[-0.55, 0.5, -0.45], [0.55, 2.35, 0.55]];
    this.bounds = [[-0.62, -0.03, -0.5], [0.62, 2.7, 1.0]];
    this.cams = { full: { pos: [0.45, 1.65, 3.7], look: [0, 1.38, 0.05] }, face: { pos: [0.1, 1.98, 1.5], look: [0, 2.12, 0.5] } };
  }
  eval(x, y, z, G) {
    const ax = Math.abs(x);
    let d = this.torso(x, y, z);
    const ru = y - 1.66;
    d += ribs(ru, 0.07, 0.014) * sstep(0.25, 0.9, ax / 0.2) * (1 - sstep(0.22, 0.32, Math.abs(ru)));
    d = smin(d, sph(ax - 0.17, y - 1.15, z + 0.02, 0.055), 0.05);
    d = smin(d, ell(ax - 0.14, y - 1.98, z + 0.08, 0.085, 0.12, 0.04), 0.04);
    d = smin(d, sph(ax - 0.235, y - 2.03, z - 0.1, 0.075), 0.05);
    if (z < -0.05) for (let k = 0; k < 12; k++) { const yy = 1.15 + k * 0.075, u = clamp((yy - 1.06) / 1.06, 0, 1); d = smin(d, sph(x, y - yy, z + 0.16 - 0.16 * u * u + 0.03 * Math.sin(k * 1.3), 0.025), 0.02); }
    d = smin(d, this.neck(x, y, z), 0.05);
    for (const l of this.legs) d = smin(d, l(x, y, z), 0.06);
    d = smin(d, ell(ax - 0.14, y - 0.04, z - 0.02, 0.045, 0.04, 0.065), 0.025);
    for (const a of this.arms) d = smin(d, a(x, y, z), 0.05);
    for (const f of this.fingers) d = smin(d, f(x, y, z), 0.015);
    d += 0.004 * fbm(x * 18, y * 18, z * 18, 2);
    G.bd = d;
    let hr = 1e9;
    if (boxDist(x, y, z, ...this.hairBox) < 0.05) for (const h of this.hair) hr = Math.min(hr, h(x, y, z));
    G.hr = hr;
    const dh = this.headDist(x, y, z, G);
    return Math.min(smin(d, dh, 0.04), smin(hr, d, 0.012));
  }
  extra(x, y, z, G) {
    const inHair = G.hr < G.bd ? 1 : 0;
    let sway = 0;
    if (inHair) { let best = 1e9; for (const h of this.hair) { const v = h(x, y, z); if (v < best) { best = v; sway = tubeT(h, x, y, z); } } }
    return {
      fur: inHair ? 1 : 0.5 * sstep(0.9, 1.4, y) + 0.3,
      breath: sstep(0.2, 0.0, this.torso(x, y, z)) * sstep(1.4, 1.6, y) * (1 - sstep(2.0, 2.15, y)) * (1 - inHair),
      wrinkle: 0.12 + 0.75 * sstep(1.95, 2.15, y),
      sway: sway * inHair, neck: sstep(1.4, 2.1, y) * (1 - inHair * 0.5),
    };
  }
}

// =====================================================================================
// ② D — the neck stretches. A starved cow whose neck has pulled out two metres long and hangs the
// too-wide head right in front of you; the skin has torn along the stretch.
export class Longneck extends Monster {
  constructor() {
    super();
    this.name = 'longneck'; this.height = 2.5;
    const W = 1.45;
    this.head = new Head({
      L: 0.42, W, open: 0.55, seed: 9, teeth: 9, toothLen: 1.05, gaunt: 1.2,
      eyes: [[0.175, 0.03, 0.06, 0.03], [-0.175, 0.03, 0.06, 0.03]], sock: 1.55, sockDeep: 0.3, knobs: true,
      ears: [-1, 1].map((s) => ({ a: [s * 0.16, 0.06, -0.05], b: [s * 0.24, 0.0, -0.13], r1: 0.018, r2: 0.03, n: [s * 0.5, 0.2, 0.8], s: 3 })),
    });
    this.hf = frame([0, 1.64, 1.5], 0.06, 0.22, -0.26);
    this.neckDir = [0, 0.55, -0.83];
    const [P, R] = curve([[0, 1.28, -0.32], [0, 1.92, -0.16], [0, 2.4, 0.22], [0, 2.55, 0.72], [0, 2.4, 1.15], [0, 2.0, 1.36], this.hf.toWorld([0, 0.07, -0.1])], [0.13, 0.085, 0.066, 0.06, 0.058, 0.058, 0.06], 5);
    this.neck = tube(P, R, 0.03);
    this.neckP = P; this.neckR = R;
    this.legs = [];
    for (const s of [-1, 1]) {
      this.legs.push(tube([[s * 0.15, 1.02, -0.36], [s * 0.15, 0.52, -0.33], [s * 0.15, 0.1, -0.3]], [0.075, 0.045, 0.032], 0.03));
      this.legs.push(tube([[s * 0.17, 1.12, -1.3], [s * 0.19, 0.78, -1.14], [s * 0.16, 0.5, -1.46], [s * 0.15, 0.1, -1.38]], [0.11, 0.065, 0.04, 0.03], 0.04));
    }
    this.tail = tube([[0, 1.3, -1.48], [0, 0.95, -1.6], [0, 0.55, -1.6]], [0.025, 0.014, 0.008], 0.01);
    this.bounds = [[-0.5, -0.03, -1.75], [0.5, 2.75, 2.25]];
    this.neckMeta = { base: [0, 1.3, -0.32], axis: [1, 0, 0] };
    this.cams = { full: { pos: [1.9, 1.65, 4.0], look: [0, 1.45, 0.2] }, face: { pos: [0.1, 1.6, 2.6], look: [0, 1.62, 1.55] } };
  }
  eval(x, y, z, G) {
    const ax = Math.abs(x);
    let tor = ell(x, y - 1.12, z + 0.85, 0.23, 0.27, 0.62);
    tor += ribs(z + 0.7, 0.085, 0.014) * sstep(0.35, 0.9, Math.abs(x) / 0.23) * sstep(-1.15, -0.95, z) * (1 - sstep(-0.45, -0.3, z));
    let d = smax(tor, -ell(x, y - 0.8, z + 0.8, 0.32, 0.13, 0.42), 0.1);
    d = smin(d, ell(x, y - 1.2, z + 1.3, 0.2, 0.18, 0.18), 0.1);
    d = smin(d, sph(ax - 0.19, y - 1.32, z + 1.32, 0.065), 0.05);
    d = smin(d, ell(x, y - 1.2, z + 0.36, 0.2, 0.25, 0.2), 0.12);
    d = smin(d, ell(ax - 0.16, y - 1.36, z + 0.4, 0.06, 0.1, 0.09), 0.05);
    if (y > 1.25) for (let k = 0; k < 14; k++) { const zz = -1.38 + k * 0.075; d = smin(d, sph(x, y - 1.385 - 0.015 * Math.sin(k * 1.3), z - zz, 0.026), 0.022); }
    for (const l of this.legs) d = smin(d, l(x, y, z), 0.07);
    for (const s of [-1, 1]) { d = smin(d, ell(x - s * 0.15, y - 0.045, z + 0.26, 0.042, 0.045, 0.06), 0.02); d = smin(d, ell(x - s * 0.15, y - 0.045, z + 1.34, 0.042, 0.045, 0.06), 0.02); }
    d = smin(d, this.tail(x, y, z), 0.03);
    d += 0.004 * fbm(x * 16, y * 16, z * 16, 2);
    // the neck, with vertebrae along its top and tears where the skin split
    let nk = this.neck(x, y, z);
    if (nk < 0.12) {
      let best = 1e9, bi = 0;
      for (let i = 0; i < this.neckP.length; i += 2) { const p = this.neckP[i], v = len3(x - p[0], y - p[1], z - p[2]); if (v < best) { best = v; bi = i; } }
      const p = this.neckP[bi], q = this.neckP[Math.min(bi + 1, this.neckP.length - 1)], tz = q[2] - p[2], ty = q[1] - p[1], tl = Math.hypot(ty, tz) || 1;
      const upY = tz / tl, upZ = -ty / tl, r = this.neckR[bi];
      nk = smin(nk, sph(x, y - p[1] - upY * r * 0.9, z - p[2] - upZ * r * 0.9, 0.028), 0.018);
      if (bi % 4 === 0) nk = smin(nk, sph(x, y - p[1], z - p[2], r * 1.18), 0.03); // knotted vertebrae
      const tear = sstep(0.18, 0.4, fbm(x * 30, y * 6, z * 6, 2)) * sstep(0.15, 0.3, bi / this.neckP.length) * (1 - sstep(0.85, 0.95, bi / this.neckP.length));
      nk += tear * 0.006;
      G.tear = tear;
    } else G.tear = 0;
    G.bd = smin(d, nk, 0.08);
    const dh = this.headDist(x, y, z, G);
    return smin(G.bd, dh, 0.05);
  }
  extra(x, y, z, G, l) {
    const onNeck = this.neck(x, y, z) < Math.min(G.hd, 0.03) + 0.004 && y > 1.3 ? 1 : 0;
    const t = tubeT(this.neck, x, y, z);
    const nw = onNeck ? sstep(0.05, 1.0, t) : (G.hd < G.bd ? 1 : 0);
    return {
      fur: 0.5 * (1 - onNeck * 0.6), flesh: G.tear * onNeck,
      breath: sstep(0.15, 0.0, ell(x, y - 1.12, z + 0.85, 0.23, 0.27, 0.62)),
      wrinkle: onNeck ? 0.55 : (G.hd < G.bd ? 0.4 : 0.1), neck: nw, sway: 0,
    };
  }
}

// =====================================================================================
// ③ C — the hide slides off. Low and long like the first reference photo: a raw, skinned body crawling on
// splayed limbs, the cow's hide hanging off its back in torn sheets, a long muzzle opened very wide.
export class Flayed extends Monster {
  constructor() {
    super();
    this.name = 'flayed'; this.height = 1.15;
    this.head = new Head({
      L: 0.5, W: 0.95, open: 0.78, seed: 5, teeth: 11, toothLen: 1.35, gaunt: 1.2,
      eyes: [[0.062, 0.05, 0.13, 0.03], [-0.062, 0.05, 0.13, 0.03]], sock: 1.55,
      ears: [-1, 1].map((s) => ({ a: [s * 0.08, 0.07, -0.04], b: [s * 0.19, 0.0, -0.16], r1: 0.02, r2: 0.034, n: [s * 0.4, 0.6, 0.6], s: 3.5 })),
    });
    this.hf = frame([0, 0.92, 0.8], 0.0, -0.3, 0.1);
    this.neckDir = [0, -0.1, -0.99];
    this.neck = tube(...curve([[0, 1.0, 0.18], [0, 0.98, 0.46], this.hf.toWorld([0, -0.02, -0.1])], [0.13, 0.1, 0.075], 4), 0.04);
    this.spine = roundCone([0, 0.82, -0.8], [0, 0.98, 0.1], 0.19, 0.21);
    this.legs = []; this.claws = [];
    for (const s of [-1, 1]) {
      this.legs.push(tube([[s * 0.19, 0.95, 0.2], [s * 0.43, 0.72, 0.3], [s * 0.39, 0.2, 0.55]], [0.08, 0.05, 0.035], 0.04));
      this.legs.push(tube([[s * 0.17, 0.86, -0.75], [s * 0.31, 0.55, -0.45], [s * 0.26, 0.4, -1.0], [s * 0.24, 0.06, -0.86]], [0.1, 0.065, 0.04, 0.032], 0.04));
      for (let i = 0; i < 3; i++) {
        const a = (i - 1) * 0.35 + s * 0.2, w = [s * 0.39, 0.2, 0.55];
        this.claws.push(tube([w, [w[0] + Math.sin(a) * 0.1, 0.1, w[2] + Math.cos(a) * 0.1], [w[0] + Math.sin(a) * 0.19, 0.035, w[2] + Math.cos(a) * 0.19], [w[0] + Math.sin(a) * 0.25, 0.01, w[2] + Math.cos(a) * 0.22]], [0.022, 0.016, 0.01, 0.003], 0.012));
      }
    }
    // the slipped hide: a thin sheet over the back half, hanging down the flanks in tatters
    this.hideAxis = (z) => { const u = clamp((z + 0.85) / 0.95, 0, 1); return [0.86 + 0.13 * u, 0.22 + 0.02 * u]; };
    this.bounds = [[-0.72, -0.03, -1.25], [0.72, 1.3, 1.5]];
    this.cams = { full: { pos: [1.5, 1.45, 3.2], look: [0, 0.7, 0.1] }, face: { pos: [0.12, 0.86, 1.95], look: [0, 0.86, 0.85] } };
  }
  hideD(x, y, z) {
    if (z > 0.3 || z < -1.25) return 1;
    const [ya, r0] = this.hideAxis(z), r = r0 + 0.03, ax = Math.abs(x);
    const edgeZ = -0.12 + 0.2 * fbm(y * 5 + 3, x * 3, 1.3, 2) + 0.08 * Math.sin(y * 9);
    const yb = 0.16 + 0.22 * (fbm(z * 4.5, ax * 2, 7.1, 3) * 0.5 + 0.5) + 0.05 * Math.sin(z * 21);
    let top = Math.abs(len3(x, Math.max(0, y - ya), 0) - r) - 0.009; // half tube over the back
    const sag = 0.03 * sstep(ya, yb, y);
    const flap = Math.max(Math.abs(ax - r - sag) - 0.009, ya - y > 0 ? 0 : y - ya);
    let d = y >= ya ? top : flap;
    d = Math.max(d, yb - y, z - edgeZ, -1.08 - z + 0.12 * fbm(y * 4, x, 2.2, 2));
    const hole = fbm(x * 7 + 1, y * 7, z * 7, 2) - 0.3;
    return Math.max(d, hole * 0.05);
  }
  eval(x, y, z, G) {
    const ax = Math.abs(x);
    let d = this.spine(x, y, z);
    let rc = ell(x, y - 0.9, z + 0.1, 0.22, 0.24, 0.38);
    rc += ribs(z + 0.1, 0.07, 0.016) * sstep(0.35, 0.9, ax / 0.22) * (1 - sstep(0.25, 0.32, Math.abs(z + 0.1)));
    d = smin(d, rc, 0.08);
    d = smax(d, -ell(x, y - 0.6, z + 0.35, 0.3, 0.1, 0.35), 0.08);
    d = smin(d, sph(ax - 0.17, y - 0.9, z + 0.78, 0.06), 0.05);
    d = smin(d, ell(ax - 0.15, y - 1.03, z - 0.12, 0.08, 0.06, 0.12), 0.05);
    if (y > 0.9) for (let k = 0; k < 13; k++) { const zz = -0.85 + k * 0.08; d = smin(d, sph(x, y - this.hideAxis(zz)[0] - 0.205, z - zz, 0.024), 0.02); }
    d = smin(d, this.neck(x, y, z), 0.06);
    for (const l of this.legs) d = smin(d, l(x, y, z), 0.06);
    for (const c of this.claws) d = smin(d, c(x, y, z), 0.014);
    for (const s of [-1, 1]) d = smin(d, ell(x - s * 0.24, y - 0.04, z + 0.84, 0.042, 0.04, 0.06), 0.02);
    // the skinned body: lumpy muscle under no skin
    d += 0.005 * fbm(x * 11, y * 11, z * 11, 2) * sstep(-0.3, 0.1, z);
    G.bd = d; G.fl = 1e9;
    const hi = this.hideD(x, y, z);
    G.hi = hi;
    const dh = this.headDist(x, y, z, G);
    return Math.min(smin(d, dh, 0.05), hi);
  }
  extra(x, y, z, G) {
    const onHide = G.hi < Math.min(G.bd, G.hd) + 0.002 ? 1 : 0;
    const raw = onHide ? 0 : (G.hd < G.bd ? 0.55 + 0.45 * sstep(0.1, 0.3, fbm(x * 9, y * 9, z * 9, 2)) : sstep(-1.0, -0.6, z) * 0.15 + 0.85);
    const [ya] = this.hideAxis(z);
    return {
      flesh: onHide ? 0 : raw, fur: onHide ? 0.85 : 0.15 * (1 - raw),
      breath: onHide ? 0 : sstep(0.15, 0.0, ell(x, y - 0.9, z + 0.1, 0.22, 0.24, 0.38)),
      wrinkle: onHide ? 0.3 : 0.05, neck: 0, sway: onHide ? sstep(ya, 0.15, y) : 0,
    };
  }
}

// =====================================================================================
// ④ B — the head splits. A hunched horned cow whose face opens down the middle like a book: rows of fangs along
// both inner edges make one tall mouth, and the third eye looks out of the throat (the third reference photo).
export class Split extends Monster {
  constructor() {
    super();
    this.name = 'split'; this.height = 1.85; this.split = { angle: 0.72, hinge: [0, 0.0, -0.09] };
    this.head = new Head({
      L: 0.4, W: 1.12, open: 0.32, seed: 7, teeth: 8, toothLen: 1.1, gaunt: 0.8,
      eyes: [[0.085, 0.045, 0.115, 0.025], [-0.085, 0.045, 0.115, 0.025]], sock: 1.65,
      ears: [-1, 1].map((s) => ({ a: [s * 0.11, 0.06, -0.04], b: [s * 0.22, -0.04, -0.08], r1: 0.02, r2: 0.034, n: [s * 0.3, 0.1, 1], s: 3 })),
      horns: [-1, 1].map((s) => ({ pts: [[s * 0.09, 0.09, -0.02], [s * 0.17, 0.13, -0.02], [s * 0.25, 0.2, 0.03], [s * 0.27, 0.29, 0.09]], rads: [0.03, 0.024, 0.015, 0.004] })),
    });
    this.hf = frame([0, 1.3, 0.55], 0, 0.12, 0.05);
    this.neckDir = [0, -0.25, -0.97];
    this.neck = tube(...curve([[0, 1.3, -0.3], [0, 1.28, 0.08], this.hf.toWorld([0, -0.03, -0.1])], [0.2, 0.15, 0.1], 4), 0.06);
    this.legs = [];
    for (const s of [-1, 1]) {
      this.legs.push(tube([[s * 0.18, 1.0, -0.3], [s * 0.24, 0.52, -0.2], [s * 0.26, 0.1, -0.12]], [0.085, 0.052, 0.036], 0.04));
      this.legs.push(tube([[s * 0.18, 1.12, -1.28], [s * 0.2, 0.76, -1.12], [s * 0.18, 0.48, -1.42], [s * 0.17, 0.1, -1.34]], [0.11, 0.066, 0.042, 0.032], 0.04));
    }
    // the split: each half turns out about a vertical hinge at the back of the skull; teeth line the cut edges
    const a = this.split.angle;
    this.ca = Math.cos(a); this.sa = Math.sin(a);
    this.edge = [];
    const hd = this.head, tmp = {};
    for (let i = 0; i < 19; i++) {
      const ang = -2.1 + (i / 18) * 2.8, dy = Math.sin(ang), dz = Math.cos(ang);
      let t = 0.02;
      for (let k = 0; k < 80; k++) { const v = hd.eval(0.004, -0.02 + dy * t, 0.14 + dz * t, tmp); if (v > 0) break; t += 0.004; }
      t -= 0.016;
      const p = [0.006, -0.02 + dy * t, 0.14 + dz * t], r = rnd(i, 21), L = (0.04 + 0.05 * r) * (i % 3 === 1 ? 1.45 : 1);
      this.edge.push(roundCone(p, [p[0] - L, p[1] + dy * L * 0.15, p[2] + dz * L * 0.2], 0.008 + 0.004 * r, 0.0012));
    }
    this.core = roundCone([0, -0.03, -0.14], [0, 0.0, 0.03], 0.085, 0.06);
    this.eye3 = [0, 0.005, 0.075, 0.042];
    this.strands = [[0.02, 0.16], [-0.06, 0.2], [0.07, 0.12], [-0.12, 0.08]].map(([yy, zz], i) => {
      const s = this.sa * (zz + 0.09) + 0.004; return tube([[-s - 0.01, yy, zz], [0, yy - 0.03 - 0.02 * i, zz - 0.01], [s + 0.01, yy, zz]], [0.006, 0.003, 0.006], 0.004, 0.05);
    });
    this.head.R = 0.8;
    this.bounds = [[-0.62, -0.03, -1.6], [0.62, 1.9, 1.2]];
    this.cams = { full: { pos: [1.6, 1.62, 3.4], look: [0, 1.15, 0] }, face: { pos: [0.05, 1.45, 1.6], look: [0, 1.32, 0.55] } };
  }
  half(x, y, z, G) { // head-local, x >= 0 side opened out
    const h = this.split.hinge, dx = x - h[0], dz = z - h[2];
    const qx = h[0] + dx * this.ca - dz * this.sa, qz = h[2] + dx * this.sa + dz * this.ca;
    let d = this.head.eval(qx, y, qz, G);
    const cut = 0.003 - qx;
    G.cut = cut;
    d = smax(d, cut, 0.004);
    let te = 1e9; for (const e of this.edge) te = Math.min(te, e(qx, y, qz));
    G.tu = Math.min(G.tu, te);
    G.hd = smax(G.hd, cut, 0.004); G.jw = smax(G.jw, cut, 0.004);
    return Math.min(d, te);
  }
  headLocal(l0, l1, l2, G) {
    let d = this.half(Math.abs(l0), l1, l2, G);
    const c = this.core(l0, l1, l2), e3 = sph(l0 - this.eye3[0], l1 - this.eye3[1], l2 - this.eye3[2], this.eye3[3]);
    let st = 1e9; for (const s of this.strands) st = Math.min(st, s(l0, l1, l2));
    G.fl = Math.min(c, st, Math.abs(G.cut) < 0.006 && G.hd < 0.01 ? G.hd : 1e9);
    G.ey = Math.min(G.ey, e3);
    d = smin(d, c, 0.03); d = Math.min(d, e3); d = smin(d, st, 0.01);
    return d;
  }
  eval(x, y, z, G) {
    const ax = Math.abs(x);
    let tor = ell(x, y - 1.12, z + 0.8, 0.26, 0.3, 0.6);
    tor += ribs(z + 0.7, 0.085, 0.012) * sstep(0.35, 0.9, ax / 0.26) * sstep(-1.1, -0.9, z) * (1 - sstep(-0.45, -0.3, z));
    let d = smax(tor, -ell(x, y - 0.78, z + 0.8, 0.34, 0.14, 0.42), 0.1);
    d = smin(d, ell(x, y - 1.32, z + 0.3, 0.24, 0.24, 0.24), 0.14);
    d = smin(d, ell(x, y - 1.2, z + 1.28, 0.21, 0.19, 0.19), 0.1);
    d = smin(d, sph(ax - 0.2, y - 1.32, z + 1.3, 0.065), 0.05);
    if (y > 1.25) for (let k = 0; k < 13; k++) { const zz = -1.36 + k * 0.08; d = smin(d, sph(x, y - 1.41 - 0.06 * sstep(-0.6, -0.2, zz), z - zz, 0.027), 0.022); }
    for (const l of this.legs) d = smin(d, l(x, y, z), 0.07);
    for (const s of [-1, 1]) { d = smin(d, ell(x - s * 0.26, y - 0.045, z + 0.08, 0.044, 0.045, 0.062), 0.02); d = smin(d, ell(x - s * 0.17, y - 0.045, z + 1.3, 0.044, 0.045, 0.062), 0.02); }
    let nk = this.neck(x, y, z);
    if (nk < 0.08) nk += 0.006 * Math.sin(len3(x * 0.6, y, z) * 0 + (z * 1 + y * 0.4) * 70 + fbm(x * 9, y * 9, z * 9, 2) * 6); // deep folds
    d = smin(d, nk, 0.1);
    d += 0.004 * fbm(x * 16, y * 16, z * 16, 2);
    G.bd = d;
    const l = this.hf.toLocal(x, y, z, this._l), r = len3(l[0], l[1], l[2]);
    let dh;
    if (r > this.head.R) { G.hd = G.jw = G.tu = G.tl = G.ey = G.hn = G.mo = G.fl = dh = r - this.head.R + 0.3; G.cut = 1; }
    else dh = this.headLocal(l[0], l[1], l[2], G);
    return smin(d, dh, 0.05);
  }
  jawWeight(x, y, z, G, l) { // the halves: |side| weight, the viewer signs it by side
    const r = len3(...l);
    return sstep(0.002, 0.05, Math.abs(l[0])) * (1 - sstep(0.02, 0.09, -l[2] - 0.05)) * (1 - sstep(this.head.R * 0.7, this.head.R, r)) * (G.fl < Math.min(G.hd, G.jw) - 0.002 && Math.abs(l[0]) < 0.06 ? 0.5 : 1);
  }
  extra(x, y, z, G, l) {
    const onHead = Math.min(G.hd, G.jw) <= G.bd ? 1 : 0;
    const cutFace = onHead && Math.abs(G.cut) < 0.006 ? 1 : 0;
    return {
      flesh: cutFace, fur: onHead ? 0.25 : 0.5, noMouth: 0,
      breath: sstep(0.15, 0.0, ell(x, y - 1.12, z + 0.8, 0.26, 0.3, 0.6)),
      wrinkle: onHead ? 1 : 0.15 + 0.75 * sstep(-0.45, 0.1, z), neck: 0, sway: 0,
    };
  }
}

// =====================================================================================
// ⑤ E — the shadow rises. Three metres of black, ragged shape pooled on the ground, long arms reaching
// with bone fingers, and a cow skull for a head with small lights deep in the sockets.
export class Shadow extends Monster {
  constructor() {
    super();
    this.name = 'shadow'; this.height = 3.15; this.boneHead = true;
    this.head = new Head({
      L: 0.46, W: 1.22, open: 0.72, seed: 13, teeth: 10, toothLen: 1.5, skull: true, gaunt: 1.5,
      eyes: [[0.092, 0.045, 0.1, 0.014], [-0.092, 0.045, 0.1, 0.014]], sock: 4.0, sockDeep: -0.9, radius: 0.62,
      horns: [-1, 1].map((s) => ({ pts: [[s * 0.09, 0.08, -0.03], [s * 0.2, 0.12, -0.06], [s * 0.31, 0.2, 0.0], [s * 0.34, 0.31, 0.11], [s * 0.28, 0.38, 0.21]], rads: [0.048, 0.04, 0.03, 0.017, 0.004] })),
    });
    this.hf = frame([0, 2.92, 0.42], 0.0, 0.62, 0.12);
    this.neckDir = [0, -0.2, -0.98];
    this.neck = tube(...curve([[0, 2.5, 0.0], [0, 2.75, 0.14], this.hf.toWorld([0, -0.03, -0.1])], [0.12, 0.07, 0.05], 4), 0.04);
    this.body = tube(...curve([[0, -0.05, -0.15], [0, 0.6, -0.1], [0, 1.4, -0.05], [0, 2.1, 0.0], [0, 2.48, 0.04]], [0.62, 0.45, 0.33, 0.25, 0.2], 4), 0.1);
    this.arms = []; this.fingers = [];
    for (const s of [-1, 1]) {
      this.arms.push(tube([[s * 0.32, 2.48, 0.04], [s * 0.64, 1.95, 0.22], [s * 0.5, 1.56, 0.72]], [0.07, 0.045, 0.03], 0.04));
      for (let i = 0; i < 4; i++) {
        const w = [s * 0.5, 1.56, 0.72], sp = (i - 1.5) * 0.06, L = 0.36 + 0.08 * (1 - Math.abs(i - 1.5) / 1.5);
        this.fingers.push(tube([w, [w[0] + s * sp * 0.6 - s * 0.03, w[1] - 0.06, w[2] + L * 0.45], [w[0] + s * sp - s * 0.05, w[1] - 0.16, w[2] + L * 0.85], [w[0] + s * sp * 1.1 - s * 0.06, w[1] - 0.3, w[2] + L * 0.95]], [0.017, 0.012, 0.008, 0.002], 0.008, 0.06));
      }
    }
    this.tatters = [];
    for (let i = 0; i < 16; i++) {
      const s = i % 2 ? 1 : -1, t = rnd(i, 31), a = [s * (0.36 + 0.24 * t), 2.42 - 0.5 * t, 0.06 + 0.18 * t], L = 0.4 + 0.6 * rnd(i, 32);
      this.tatters.push(tube([a, [a[0] + s * 0.02, a[1] - L * 0.5, a[2] - 0.02], [a[0] + s * 0.04 * rnd(i, 33), a[1] - L, a[2] - 0.05]], [0.03, 0.018, 0.004], 0.01, 0.06));
    }
    this.bounds = [[-0.95, -0.05, -0.95], [0.95, 3.45, 1.4]];
    this.cams = { full: { pos: [1.0, 1.65, 4.6], look: [0, 1.75, 0] }, face: { pos: [0.1, 2.35, 1.95], look: [0, 2.85, 0.45] } };
  }
  eval(x, y, z, G) {
    const ax = Math.abs(x);
    let d = this.body(x, y, z);
    d = smin(d, ell(x, y - 2.47, z - 0.04, 0.4, 0.15, 0.2), 0.12);
    d = smin(d, this.neck(x, y, z), 0.05);
    for (const a of this.arms) d = smin(d, a(x, y, z), 0.06);
    // ragged: big slow noise, vertical tears and tendrils at the hem
    const hem = sstep(0.9, 0.0, y);
    const ang = Math.atan2(z + 0.1, x);
    d += (0.05 + 0.06 * hem) * fbm(x * 3.2, y * 1.6, z * 3.2, 3) + 0.012 * fbm(x * 14, y * 5, z * 14, 2);
    d += 0.16 * hem * Math.max(0, Math.sin(ang * 9 + fbm(x * 2, y * 2, z * 2, 2) * 4) - 0.2); // torn into hanging tongues at the hem
    d = Math.max(d, -y - 0.02);
    G.bd = d;
    let fg = 1e9; for (const f of this.fingers) fg = Math.min(fg, f(x, y, z));
    let ta = 1e9; if (y > 1.0 && y < 2.6) for (const t of this.tatters) ta = Math.min(ta, t(x, y, z));
    G.bn = fg; G.hr = ta;
    const dh = this.headDist(x, y, z, G);
    G.bn = Math.min(fg, G.hd, G.jw); // the whole head is bare bone
    return Math.min(smin(d, dh, 0.04), smin(fg, d, 0.03), smin(ta, d, 0.02));
  }
  extra(x, y, z, G) {
    const onTat = G.hr < Math.min(G.bd, G.bn) ? 1 : 0;
    let sway = 0;
    if (onTat) { let b = 1e9; for (const t of this.tatters) { const v = t(x, y, z); if (v < b) { b = v; sway = tubeT(t, x, y, z); } } }
    return { fur: 0, breath: sstep(0.25, 0.0, this.body(x, y, z)) * sstep(1.2, 2.0, y), wrinkle: 0.2, neck: 0, sway: onTat ? sway : 0.25 * sstep(0.8, 0.0, y), noMouth: 0 };
  }
}

export const MONSTERS = [
  ['m1', () => new Stander()],
  ['m2', () => new Longneck()],
  ['m3', () => new Flayed()],
  ['m4', () => new Split()],
  ['m5', () => new Shadow()],
];
export { MATS };

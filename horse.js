// horse.js — the horse (사용자 2026-11-28: 말 먼저 고퀄리티 3D로). Built like the cows: a signed distance field, meshed with
// surface nets, baked offline (gen-horse.mjs) with a real skeleton (every joint of the legs, the spine, neck, head and tail)
// and per-vertex skin weights, so it can gallop as a three.js SkinnedMesh.
// Horse-local frame: +z forward (head), +y up, ground at y = 0, metres. A cow pony of the 1880s: about 15 hands (1.5 m at
// the withers), compact and deep-bodied (임시: build, size and the bay coat are Claude's first try, all here to change).

const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
function smin(a, b, k) { const h = Math.max(k - Math.abs(a - b), 0) / k; return Math.min(a, b) - h * h * k * 0.25; }
function smax(a, b, k) { const h = Math.max(k - Math.abs(a - b), 0) / k; return Math.max(a, b) + h * h * k * 0.25; }
function ell(x, y, z, rx, ry, rz) {
  const ax = x / rx, ay = y / ry, az = z / rz;
  const k0 = Math.sqrt(ax * ax + ay * ay + az * az);
  const bx = ax / rx, by = ay / ry, bz = az / rz;
  const k1 = Math.sqrt(bx * bx + by * by + bz * bz);
  return k1 < 1e-12 ? -Math.min(rx, ry, rz) : (k0 * (k0 - 1)) / k1;
}
function sph(x, y, z, r) { return Math.sqrt(x * x + y * y + z * z) - r; }
function rbox(x, y, z, bx, by, bz, r) {
  const qx = Math.abs(x) - bx + r, qy = Math.abs(y) - by + r, qz = Math.abs(z) - bz + r;
  const mx = Math.max(qx, 0), my = Math.max(qy, 0), mz = Math.max(qz, 0);
  return Math.sqrt(mx * mx + my * my + mz * mz) + Math.min(Math.max(qx, Math.max(qy, qz)), 0) - r;
}
function roundCone(a, b, r1, r2) {
  const bax = b[0] - a[0], bay = b[1] - a[1], baz = b[2] - a[2];
  const l2 = bax * bax + bay * bay + baz * baz, rr = r1 - r2, a2 = l2 - rr * rr, il2 = 1 / l2;
  const srr = Math.sign(rr);
  return (px, py, pz) => {
    const pax = px - a[0], pay = py - a[1], paz = pz - a[2];
    const y = pax * bax + pay * bay + paz * baz;
    const z = y - l2;
    const qx = pax * l2 - bax * y, qy = pay * l2 - bay * y, qz = paz * l2 - baz * y;
    const x2 = qx * qx + qy * qy + qz * qz;
    const y2 = y * y * l2, z2 = z * z * l2;
    const k = srr * rr * rr * x2;
    if (Math.sign(z) * a2 * z2 > k) return Math.sqrt(x2 + z2) * il2 - r2;
    if (Math.sign(y) * a2 * y2 < k) return Math.sqrt(x2 + y2) * il2 - r1;
    return (Math.sqrt(x2 * a2 * il2) + y * rr) * il2 - r1;
  };
}
// an ellipsoid turned about x: its own z axis points up by ang (radians) from the horizontal, in the y-z plane
function ellPitch(dx, dy, dz, rx, ry, rz, ang) {
  const c = Math.cos(ang), s = Math.sin(ang);
  return ell(dx, dy * c - dz * s, dy * s + dz * c, rx, ry, rz);
}
const norm = (v) => { const l = Math.hypot(v[0], v[1], v[2]); return [v[0] / l, v[1] / l, v[2] / l]; };
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
// distance from p to the segment a-b, and how far along it (0..1)
function segDist(px, py, pz, a, b) {
  const bx = b[0] - a[0], by = b[1] - a[1], bz = b[2] - a[2], l2 = bx * bx + by * by + bz * bz;
  const t = clamp(((px - a[0]) * bx + (py - a[1]) * by + (pz - a[2]) * bz) / l2, 0, 1);
  return [Math.hypot(px - a[0] - bx * t, py - a[1] - by * t, pz - a[2] - bz * t), t];
}

// ---------- value noise ----------
function hash(i, j, k) {
  let h = Math.imul(i, 374761393) ^ Math.imul(j, 668265263) ^ Math.imul(k, 1440662683);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
}
function vnoise(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const xf = x - xi, yf = y - yi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
  const a = hash(xi, yi, zi), b = hash(xi + 1, yi, zi), c = hash(xi, yi + 1, zi), d = hash(xi + 1, yi + 1, zi);
  const e = hash(xi, yi, zi + 1), f = hash(xi + 1, yi, zi + 1), g = hash(xi, yi + 1, zi + 1), h = hash(xi + 1, yi + 1, zi + 1);
  const x1 = a + (b - a) * u, x2 = c + (d - c) * u, x3 = e + (f - e) * u, x4 = g + (h - g) * u;
  const y1 = x1 + (x2 - x1) * v, y2 = x3 + (x4 - x3) * v;
  return (y1 + (y2 - y1) * w) * 2 - 1;
}
function fbm(x, y, z, oct = 3) {
  let s = 0, a = 0.5, f = 1;
  for (let i = 0; i < oct; i++) { s += a * vnoise(x * f, y * f, z * f); f *= 2.03; a *= 0.5; }
  return s;
}

// ---------- lofts: a smooth surface through cross-sections set at stations along an axis ----------
// (사용자 2026-11-28: 최대한 고퀄로 — the silhouette goes exactly where the tables say, from real horse proportions)
class Loft {
  constructor(stations, keys) { this.s = stations; this.k = keys; this.lo = stations[0].t; this.hi = stations[stations.length - 1].t; }
  at(t, out) {
    const S = this.s, n = S.length;
    let i = 0; while (i < n - 2 && t > S[i + 1].t) i++;
    const b = S[i], c = S[i + 1], a = S[Math.max(0, i - 1)], d = S[Math.min(n - 1, i + 2)];
    const h = c.t - b.t, u = clamp((t - b.t) / h, 0, 1), u2 = u * u, u3 = u2 * u;
    for (const k of this.k) {
      const m1 = ((c[k] - a[k]) / ((c.t - a.t) || 1)) * h, m2 = ((d[k] - b[k]) / ((d.t - b.t) || 1)) * h; // Catmull-Rom tangents, uneven spacing
      out[k] = (2 * u3 - 3 * u2 + 1) * b[k] + (u3 - 2 * u2 + u) * m1 + (-2 * u3 + 3 * u2) * c[k] + (u3 - u2) * m2;
    }
    return out;
  }
}
const lerp2 = (a, b, t) => a + (b - a) * t;
const tab = (keys, rows) => rows.map((r) => Object.fromEntries(['t', ...keys].map((k, i) => [k, r[i]])));
function ell2(x, y, rx, ry) { const ax = x / rx, ay = y / ry, k0 = Math.hypot(ax, ay), k1 = Math.hypot(ax / rx, ay / ry); return k1 < 1e-12 ? -Math.min(rx, ry) : (k0 * (k0 - 1)) / k1; }

// ---------- the skeleton (rest pose, horse-local metres) ----------
// [name, parent, position]. Legs: R/L, F(ront)/H(ind). Front: scapula top -> shoulder joint -> elbow -> knee -> fetlock -> coronet.
// Hind: hip joint -> stifle -> hock -> fetlock -> coronet. The tail is a chain down the dock and hair.
export function horseBones() {
  const B = [
    ['root', -1, [0, 1.12, 0.0]],
    ['chest', 'root', [0, 1.2, 0.3]],
    ['pelvis', 'root', [0, 1.3, -0.32]],
    ['neck0', 'chest', [0, 1.3, 0.56]],
    ['neck1', 'neck0', [0, 1.52, 0.8]],
    ['neck2', 'neck1', [0, 1.7, 1.0]],
    ['head', 'neck2', [0, 1.86, 1.12]],
    ['tail0', 'pelvis', [0, 1.43, -0.72]],
    ['tail1', 'tail0', [0, 1.3, -0.83]],
    ['tail2', 'tail1', [0, 1.08, -0.9]],
    ['tail3', 'tail2', [0, 0.84, -0.92]],
    ['tail4', 'tail3', [0, 0.62, -0.92]],
  ];
  for (const [s, sg] of [['R', 1], ['L', -1]]) {
    const x = (v) => sg * v;
    B.push([`scap${s}`, 'chest', [x(0.1), 1.42, 0.38]], [`arm${s}`, `scap${s}`, [x(0.15), 1.1, 0.66]], [`fore${s}`, `arm${s}`, [x(0.165), 0.9, 0.45]],
      [`fcan${s}`, `fore${s}`, [x(0.15), 0.49, 0.485]], [`fpas${s}`, `fcan${s}`, [x(0.15), 0.185, 0.474]], [`fhoof${s}`, `fpas${s}`, [x(0.15), 0.095, 0.518]]);
    B.push([`thigh${s}`, 'pelvis', [x(0.16), 1.17, -0.47]], [`gask${s}`, `thigh${s}`, [x(0.2), 0.93, -0.27]], [`hcan${s}`, `gask${s}`, [x(0.146), 0.57, -0.632]],
      [`hpas${s}`, `hcan${s}`, [x(0.145), 0.19, -0.638]], [`hhoof${s}`, `hpas${s}`, [x(0.145), 0.1, -0.598]]);
  }
  return B.map(([name, parent, pos]) => ({ name, parent: parent === -1 ? -1 : B.findIndex((b) => b[0] === parent), pos }));
}
const bez = (a, b, c, u) => (1 - u) * (1 - u) * a + 2 * (1 - u) * u * b + u * u * c;

// a lock of hair: tapered capsules through a few points, flattened across `n` about its own line (so it lies flat), with a quick bound
class Lock {
  constructor(pts, radii, n, flat) {
    this.n = n; this.f = flat; this.o = pts[0];
    const sq = (p) => { const k = ((p[0] - this.o[0]) * n[0] + (p[1] - this.o[1]) * n[1] + (p[2] - this.o[2]) * n[2]) * (flat - 1); return [p[0] + n[0] * k, p[1] + n[1] * k, p[2] + n[2] * k]; };
    const q = pts.map(sq);
    this.segs = []; for (let i = 0; i < q.length - 1; i++) this.segs.push(roundCone(q[i], q[i + 1], radii[i] * flat, radii[i + 1] * flat));
    this.c = [0, 1, 2].map((k) => pts.reduce((a, p) => a + p[k], 0) / pts.length);
    this.R = Math.max(...pts.map((p) => Math.hypot(p[0] - this.c[0], p[1] - this.c[1], p[2] - this.c[2]))) + Math.max(...radii) + 0.02;
  }
  d(px, py, pz) {
    const bx = px - this.c[0], by = py - this.c[1], bz = pz - this.c[2], bd = Math.sqrt(bx * bx + by * by + bz * bz) - this.R;
    if (bd > 0.03) return bd;
    const n = this.n, o = this.o, k = ((px - o[0]) * n[0] + (py - o[1]) * n[1] + (pz - o[2]) * n[2]) * (this.f - 1);
    const qx = px + n[0] * k, qy = py + n[1] * k, qz = pz + n[2] * k;
    let d = 1e9; for (const sg of this.segs) d = smin(d, sg(qx, qy, qz), 0.006);
    return d / this.f;
  }
}

export class Horse {
  constructor(o = {}) {
    this.seed = o.seed ?? 3;
    // ---- head frame: poll P, face axis d (poll -> muzzle), n (front of the face), lateral x; hk: head size ----
    this.P = [0, 1.86, 1.12];
    this.d = norm([0, -0.8, 0.6]);
    this.n = [0, this.d[2], -this.d[1]];
    this.hk = 1.06;
    this.eyeC = [0.095, 0.205, -0.006]; // head-local (x, s, t), before hk
    this.eyeR = 0.028;
    // ---- the trunk, chest to buttock (t = z): topline, underline, half-width, and how high the widest place is (0 bottom .. 1 top) ----
    this.torso = new Loft(tab(['top', 'bot', 'hw', 'f'], [
      [-0.8, 1.355, 1.01, 0.125, 0.55],
      [-0.73, 1.425, 0.975, 0.175, 0.55],
      [-0.62, 1.468, 0.955, 0.21, 0.55],
      [-0.5, 1.492, 0.945, 0.228, 0.55],
      [-0.38, 1.5, 0.935, 0.237, 0.52],
      [-0.26, 1.487, 0.918, 0.243, 0.5],
      [-0.14, 1.471, 0.882, 0.252, 0.48],
      [-0.02, 1.462, 0.848, 0.262, 0.46],
      [0.1, 1.46, 0.82, 0.264, 0.44],
      [0.22, 1.47, 0.802, 0.254, 0.42],
      [0.32, 1.505, 0.797, 0.235, 0.4],
      [0.42, 1.5, 0.81, 0.214, 0.4],
      [0.52, 1.45, 0.838, 0.197, 0.42],
      [0.6, 1.37, 0.868, 0.184, 0.44],
      [0.67, 1.28, 0.9, 0.164, 0.45],
      [0.72, 1.205, 0.93, 0.134, 0.46],
    ]), ['top', 'bot', 'hw', 'f']);
    // the ends: an ellipsoid at each, a little bigger than the section where the loft stops so it covers the cut (behind: the buttocks; in front: the breast)
    this.trunkEnds = [[this.torso.lo, 0.035, 0.085], [this.torso.hi, -0.035, 0.09]].map(([t, back, rz]) => {
      const p = this.torso.at(t, {}), cw = p.bot + p.f * (p.top - p.bot), k = 1 / Math.sqrt(1 - (back / rz) ** 2) * 1.01;
      return { c: [0, cw, t + back], r: [p.hw * k, (p.top - cw) * k, (cw - p.bot) * k, rz] };
    });
    // ---- legs as lofts down their length (t = height): centre x and z, half-width (x) and half-depth (z); right side, mirrored ----
    this.frontL = new Loft(tab(['x', 'z', 'hw', 'hd'], [
      [0.075, 0.15, 0.528, 0.048, 0.052],
      [0.095, 0.15, 0.518, 0.046, 0.05],
      [0.115, 0.15, 0.503, 0.039, 0.042],
      [0.14, 0.15, 0.486, 0.038, 0.044],
      [0.17, 0.15, 0.476, 0.044, 0.054],
      [0.2, 0.15, 0.474, 0.044, 0.056],
      [0.245, 0.15, 0.476, 0.037, 0.049],
      [0.32, 0.15, 0.478, 0.035, 0.047],
      [0.41, 0.15, 0.48, 0.036, 0.048],
      [0.455, 0.15, 0.483, 0.043, 0.05],
      [0.49, 0.15, 0.486, 0.052, 0.058],
      [0.525, 0.15, 0.485, 0.049, 0.055],
      [0.58, 0.152, 0.483, 0.048, 0.056],
      [0.65, 0.156, 0.48, 0.055, 0.066],
      [0.73, 0.16, 0.477, 0.063, 0.08],
      [0.81, 0.163, 0.473, 0.072, 0.096],
      [0.89, 0.164, 0.468, 0.084, 0.118],
      [0.97, 0.158, 0.478, 0.095, 0.135],
      [1.06, 0.15, 0.5, 0.1, 0.15],
      [1.14, 0.13, 0.51, 0.085, 0.13], // (on up into the body, getting smaller, so it ends inside it)
      [1.22, 0.1, 0.51, 0.05, 0.08],
    ]), ['x', 'z', 'hw', 'hd']);
    this.hindL = new Loft(tab(['x', 'z', 'hw', 'hd'], [
      [0.075, 0.145, -0.588, 0.047, 0.051],
      [0.1, 0.145, -0.597, 0.045, 0.049],
      [0.13, 0.145, -0.613, 0.038, 0.043],
      [0.16, 0.145, -0.629, 0.041, 0.05],
      [0.19, 0.145, -0.638, 0.045, 0.057],
      [0.22, 0.145, -0.64, 0.04, 0.054],
      [0.29, 0.145, -0.641, 0.037, 0.052],
      [0.39, 0.145, -0.642, 0.037, 0.052],
      [0.48, 0.145, -0.642, 0.042, 0.055],
      [0.53, 0.146, -0.64, 0.05, 0.066],
      [0.57, 0.147, -0.632, 0.056, 0.078],
      [0.615, 0.149, -0.6175, 0.058, 0.0925], // (behind: the hamstrings run almost straight from the point of the buttock down to the hock)
      [0.67, 0.152, -0.5945, 0.064, 0.1055],
      [0.74, 0.155, -0.566, 0.075, 0.134],
      [0.81, 0.153, -0.5425, 0.088, 0.1775],
      [0.88, 0.148, -0.525, 0.11, 0.235],
      [0.95, 0.135, -0.5075, 0.14, 0.2825],
      [1.03, 0.118, -0.5125, 0.16, 0.3025],
      [1.12, 0.1, -0.52, 0.16, 0.31],
      [1.21, 0.085, -0.52, 0.135, 0.27], // (on up into the body, getting smaller, so it ends inside it)
      [1.3, 0.06, -0.52, 0.08, 0.17],
    ]), ['x', 'z', 'hw', 'hd']);
    this._a = {}; this._b = {};
    // ---- neck: lofted between the crest (withers to poll) and the underside (breast to throatlatch) ----
    this.crestZ = [0.33, 0.7, 1.1]; this.crestY = [1.515, 1.82, 1.905];
    this.underZ = [0.74, 1.0, 1.17]; this.underY = [1.02, 1.32, 1.665];
    this.neckSegs = [];
    const NN = 14;
    for (let i = 0; i <= NN; i++) {
      const u = i / NN, cz = bez(...this.crestZ, u), cy = bez(...this.crestY, u), uz = bez(...this.underZ, u), uy = bez(...this.underY, u);
      const mz = (cz + uz) / 2, my = (cy + uy) / 2, vz = cz - uz, vy = cy - uy, L = Math.hypot(vz, vy);
      const w = 0.19 - 0.117 * u + 0.012 * Math.sin(Math.PI * u); // half-width: thick at the base, thin at the throatlatch
      this.neckSegs.push({ m: [0, my, mz], v: [0, vy / L, vz / L], a: [0, -vz / L, vy / L], rx: w, ry: L / 2 + 0.008, rz: 0.1 });
    }
    // ---- body details ----
    this.scapula = roundCone([0.13, 1.38, 0.38], [0.165, 1.12, 0.62], 0.07, 0.075);
    this.brachio = roundCone([0.075, 1.56, 1.1], [0.14, 1.13, 0.66], 0.042, 0.06); // the long muscle down the lower neck to the point of the shoulder
    this.thighGroove = roundCone([0.262, 1.3, -0.6], [0.222, 0.86, -0.565], 0.011, 0.009);
    this.jugular = roundCone([0.098, 1.56, 1.06], [0.185, 1.2, 0.74], 0.01, 0.012);
    this.achilles = roundCone([0.147, 0.8, -0.655], [0.147, 0.61, -0.705], 0.026, 0.022);
    // ---- tail: the dock ----
    this.dock = roundCone([0, 1.43, -0.72], [0, 1.24, -0.862], 0.052, 0.036);
    this.tailCore = roundCone([0, 1.2, -0.875], [0, 0.78, -0.925], 0.045, 0.055);
    // ---- the head's own parts (head-local x, s, t) ----
    this.face = roundCone([0, 0.21, -0.02], [0, 0.47, -0.024], 0.08, 0.056);
    this.under = roundCone([0, 0.3, -0.13], [0, 0.5, -0.08], 0.045, 0.036);
    this.crest2 = roundCone([0.08, 0.255, -0.045], [0.066, 0.375, -0.064], 0.012, 0.009);
    this.ears = [-1, 1].map((sg) => {
      const base = [sg * 0.048, -0.012, 0.02];
      const u = norm([sg * 0.2, -0.95, 0.22]); // up, a little out and forward
      const w = norm([sg * 0.45, 0.0, 1.0]); // the open side faces forward and out
      const wu = dot(w, u); const w2 = norm([w[0] - wu * u[0], w[1] - wu * u[1], w[2] - wu * u[2]]);
      const v = [u[1] * w2[2] - u[2] * w2[1], u[2] * w2[0] - u[0] * w2[2], u[0] * w2[1] - u[1] * w2[0]];
      return { c: [base[0] + u[0] * 0.085, base[1] + u[1] * 0.085, base[2] + u[2] * 0.085], u, v, w: w2, sg };
    });
    this.bones = horseBones();
    this.makeHair();
  }

  headLocal(px, py, pz) {
    const rx = px - this.P[0], ry = py - this.P[1], rz = pz - this.P[2], k = this.hk;
    return [rx / k, (ry * this.d[1] + rz * this.d[2]) / k, (ry * this.n[1] + rz * this.n[2]) / k];
  }
  headToWorld(x, s, t) {
    const P = this.P, d = this.d, n = this.n, k = this.hk;
    return [P[0] + x * k, P[1] + (s * d[1] + t * n[1]) * k, P[2] + (s * d[2] + t * n[2]) * k];
  }

  // ---------- the hair: locks laid on the skin ----------
  makeHair() {
    let seed = 1234567;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    // where the skin is, going out sideways from x = 0 at a given height and length (the neck alone)
    const surfX = (y, z) => { if (this.neck(0, y, z) >= 0) return 0; let x = 0; while (x < 0.4 && this.neck(x, y, z) < 0) x += 0.003; return x; };
    const crest = (u) => [bez(...this.crestY, u), bez(...this.crestZ, u)];
    this.mane = [];
    const topY = (z) => { // the top of the neck at x = 0: from inside it (found going down from above), up to where it ends
      let y = 2.1; while (y > 1.0 && this.neck(0, y, z) >= 0) y -= 0.004;
      while (y < 2.1 && this.neck(0, y, z) < 0) y += 0.001; return y; };
    const NM = 42, FR = [0, 0.12, 0.3, 0.55, 0.8, 1];
    for (let layer = 0; layer < 2; layer++) for (let i = 0; i < NM - layer * 10; i++) {
      const u = 0.02 + (0.96 * (i + 0.5 + (layer ? 0.5 : 0) + (rnd() - 0.5) * 0.6)) / NM;
      if (u > 0.985 || u < 0.015) continue;
      const cz = bez(...this.crestZ, u), ty = topY(cz);
      const L = (0.19 - 0.07 * u + 0.11 * (rnd() - 0.45) * (rnd() < 0.3 ? 1.6 : 1)) * (layer ? 0.7 : 1); // ragged: now and then a long lock
      const back = -0.015 - 0.025 * rnd(); // the locks fall a little back toward the withers
      const pts = FR.map((f) => { const y = ty - 0.012 - f * L, z = cz + back * f * f; return [f === 0 ? 0.004 : surfX(y, z) + 0.011 - 0.003 * layer + 0.004 * f, y, z]; });
      this.mane.push(new Lock(pts, [0.014, 0.015, 0.014, 0.011, 0.007, 0.002].map((r) => r * (layer ? 0.85 : 1)), [1, 0, 0], 2.6));
    }
    this.maneRidge = [];
    for (let k = 0; k < 6; k++) {
      const u0 = 0.015 + (0.97 * k) / 6, u1 = 0.015 + (0.97 * (k + 1)) / 6, z0 = bez(...this.crestZ, u0), z1 = bez(...this.crestZ, u1);
      this.maneRidge.push(roundCone([0.004, topY(z0) - 0.01, z0], [0.004, topY(z1) - 0.01, z1], 0.013, 0.013));
    }
    // forelock: a few locks from between the ears down over the forehead
    this.fore = [];
    for (let i = 0; i < 7; i++) {
      const x0 = (i / 6 - 0.5) * 0.06, sgn = Math.sign(x0) || 1;
      const a = this.headToWorld(x0, -0.02, 0.06), b = this.headToWorld(x0 * 1.2, 0.06, 0.07), c = this.headToWorld(x0 * 1.5 + sgn * 0.006 * rnd(), 0.155 + 0.035 * rnd(), 0.058);
      this.fore.push(new Lock([a, b, c], [0.012, 0.011, 0.003], this.n, 1.8));
    }
    // tail: locks from all round the dock, falling with a little bow back, fanning out toward the ends
    this.tailLocks = [];
    for (let i = 0; i < 46; i++) {
      const u = 0.12 + 0.88 * rnd(), ang = rnd() * Math.PI * 2;
      const dy = 1.43 + (1.24 - 1.43) * u, dz = -0.72 + (-0.862 + 0.72) * u;
      const a = [Math.cos(ang) * 0.032, dy + Math.sin(ang) * 0.022, dz - 0.012 + Math.sin(ang) * 0.012];
      const spread = (rnd() - 0.5) * 0.15, back = 0.03 + 0.06 * rnd(), tipY = 0.48 + 0.16 * rnd();
      const b = [a[0] * 0.8 + spread * 0.25, dy - 0.12, dz - back - 0.05];
      const c = [spread * 0.65, (dy + tipY) / 2 - 0.05, -0.91 - back * 0.6];
      const e = [spread + (rnd() - 0.5) * 0.02, tipY, -0.905 - 0.04 * rnd() + spread * 0.15];
      this.tailLocks.push(new Lock([a, b, c, e], [0.02, 0.022, 0.02, 0.005], [1, 0, 0], 1.3));
    }
  }
  hairMane(px, py, pz) {
    if (pz < 0.28 || pz > 1.2 || py < 1.2 || px < -0.06 || px > 0.32) return 1;
    let m = 1; for (const r of this.maneRidge) m = Math.min(m, r(px, py, pz));
    for (const l of this.mane) m = smin(m, l.d(px, py, pz), 0.004);
    return m;
  }
  hairFore(px, py, pz) {
    if (Math.abs(px) > 0.12 || pz < 0.95 || pz > 1.45 || py < 1.6) return 1;
    let m = 1;
    for (const l of this.fore) m = smin(m, l.d(px, py, pz), 0.005);
    return m;
  }
  hairTail(px, py, pz) {
    if (pz > -0.66 || Math.abs(px) > 0.2 || py < 0.42) return 1;
    let t = smin(this.dock(px, py, pz), this.tailCore(px * 1.3, py, pz) / 1.3, 0.04);
    for (const l of this.tailLocks) t = smin(t, l.d(px, py, pz), 0.006);
    return t;
  }

  headSDF(x, s, t) {
    const ax = Math.abs(x);
    let h = ell(x, s - 0.055, t + 0.005, 0.07, 0.085, 0.075); // poll and cranium
    h = smin(h, rbox(x, s - 0.165, t + 0.0, 0.088, 0.1, 0.048, 0.04), 0.05); // broad flat forehead between the eyes
    h = smin(h, ell(ax - 0.054, s - 0.25, t + 0.118, 0.05, 0.135, 0.12), 0.06); // the big flat round jowls
    const tw = 1 + 0.28 * sstep(0.25, 0.47, s); // the face narrows below the eyes
    h = smin(h, this.face(x * tw, s, t), 0.05);
    h = smin(h, this.under(x * 1.1, s, t), 0.05);
    h = smax(h, -ell(x, s - 0.47, t + 0.135, 0.08, 0.05, 0.03), 0.03); // the chin groove under the jaw
    h = smin(h, ell(x, s - 0.53, t + 0.04, 0.065, 0.077, 0.078), 0.045); // muzzle
    h = smin(h, ell(x, s - 0.592, t + 0.05, 0.054, 0.038, 0.052), 0.03); // upper lip
    h = smin(h, ell(x, s - 0.562, t + 0.122, 0.04, 0.048, 0.034), 0.03); // lower lip and chin
    h = smin(h, ell(ax - 0.088, s - 0.178, t + 0.026, 0.03, 0.03, 0.034), 0.03); // brow over the eye
    h = smin(h, this.crest2(ax, s, t), 0.025); // facial crest (cheekbone ridge)
    for (const e of this.ears) { // leaves that taper to a point, cupped open to the front, tips turned a little in
      const qx = x - e.c[0], qy = s - e.c[1], qz = t - e.c[2];
      const lu = qx * e.u[0] + qy * e.u[1] + qz * e.u[2], lw = qx * e.w[0] + qy * e.w[1] + qz * e.w[2];
      const lv = qx * e.v[0] + qy * e.v[1] + qz * e.v[2] + e.sg * 0.9 * Math.max(0, lu) * Math.max(0, lu);
      const tp = 1 - 0.85 * sstep(-0.05, 0.1, lu);
      let ear = ell(lu, lv / tp, lw / Math.max(0.35, tp), 0.1, 0.04, 0.028) * Math.min(1, tp);
      ear = smax(ear, -ell(lu - 0.016, lv / tp, (lw - 0.016) / Math.max(0.35, tp), 0.083, 0.028, 0.02) * Math.min(1, tp), 0.006); // the hollow
      h = smin(h, ear, 0.022);
    }
    const E = this.eyeC;
    h = smax(h, -sph(ax - E[0], s - E[1], t - E[2], this.eyeR * 1.12), 0.012); // eye sockets
    h = smin(h, ell(ax - E[0] + 0.003, s - E[1], t - E[2], this.eyeR * 0.95, this.eyeR, this.eyeR * 1.12), 0.004); // the eye, almond
    h = smin(h, ell(ax - E[0] + 0.009, s - E[1] + 0.017, t - E[2], 0.013, 0.011, 0.036), 0.012); // upper lid
    h = smin(h, ell(ax - E[0] + 0.01, s - E[1] - 0.02, t - E[2], 0.011, 0.008, 0.03), 0.01); // lower lid
    const nx = ax - 0.043, ns = s - 0.543, nt = t - 0.002; // nostrils: long commas curling back at the top, the rims flared
    h = smin(h, ell(nx + 0.005, ns, nt, 0.022, 0.048, 0.034), 0.02);
    const curl = 0.016 * sstep(0.0, -0.035, ns);
    h = smax(h, -ell(nx + curl * 0.3, ns + 0.006, nt + 0.004 + 0.014 * Math.max(0, ns) - curl, 0.013, 0.036, 0.02), 0.006);
    h = smax(h, -ell(x, s - 0.584, t + 0.09, 0.058, 0.028, 0.005), 0.005); // the line of the mouth
    return h;
  }

  // a hoof: a slanted frustum, the toe higher than the heel, flat underneath (hx, hz: from the hoof's centre on the ground)
  hoof(hx, py, hz) {
    const y = clamp(py, 0, 0.11), zc = hz + 0.66 * y, rx = 0.057 - 0.075 * y, rz = 0.064 - 0.07 * y;
    const d = (Math.hypot(hx / rx, zc / rz) - 1) * Math.min(rx, rz);
    return Math.max(d, py - (0.07 + 0.028 * clamp(zc / rz, -1, 1)));
  }
  limb(L, lx, py, pz, o) {
    const t = clamp(py, L.lo, L.hi), p = L.at(t, o), q = L.at(Math.min(t + 0.015, L.hi), this._b);
    let d = ell2(lx - p.x, pz - p.z, p.hw, p.hd);
    const s = Math.max(Math.abs(q.x - p.x), Math.abs(q.z - p.z) + Math.abs(q.hd - p.hd), Math.abs(q.hw - p.hw)) / 0.015;
    d /= Math.sqrt(1 + s * s);
    const out = py > L.hi ? py - L.hi : py < L.lo ? L.lo - py : 0;
    return out > 0 ? (d > 0 ? Math.hypot(d, out) : out) : d;
  }
  frontLeg(lx, py, pz) {
    let l = this.limb(this.frontL, lx, py, pz, this._a);
    l = smin(l, sph(lx - 0.168, py - 0.875, pz - 0.405, 0.044), 0.05); // point of the elbow
    l = smin(l, ell(lx - 0.168, py - 1.0, pz - 0.43, 0.075, 0.12, 0.11), 0.06); // triceps above the elbow
    l = smin(l, ell(lx - 0.165, py - 0.79, pz - 0.512, 0.052, 0.11, 0.045), 0.04); // forearm muscle, in front
    l = smin(l, sph(lx - 0.118, py - 0.61, pz - 0.47, 0.016), 0.02); // chestnut, inside above the knee
    l = smin(l, sph(lx - 0.15, py - 0.505, pz - 0.432, 0.024), 0.02); // the bone at the back of the knee
    l = smax(l, -ell(Math.abs(lx - 0.15) - 0.036, py - 0.33, pz - 0.462, 0.006, 0.1, 0.006), 0.008); // the groove between bone and tendon
    l = smin(l, sph(lx - 0.15, py - 0.16, pz - 0.425, 0.016), 0.015); // ergot
    l = smin(l, ell(lx - 0.15, py - 0.094, pz - 0.522, 0.047, 0.012, 0.05), 0.02); // coronet band
    return smin(l, this.hoof(lx - 0.15, py, pz - 0.548), 0.008);
  }
  hindLeg(lx, py, pz) {
    let l = this.limb(this.hindL, lx, py, pz, this._a);
    l = smin(l, ell(lx - 0.18, py - 0.93, pz + 0.26, 0.05, 0.065, 0.05), 0.1); // stifle, rounding the front of the thigh
    l = smin(l, ell(lx - 0.168, py - 0.78, pz + 0.5, 0.058, 0.1, 0.065), 0.04); // gaskin muscle
    l = smin(l, this.achilles(lx, py, pz), 0.025);
    l = smin(l, ell(lx - 0.147, py - 0.61, pz + 0.705, 0.02, 0.035, 0.024), 0.035); // point of the hock
    l = smin(l, sph(lx - 0.116, py - 0.485, pz + 0.628, 0.014), 0.015); // chestnut, inside below the hock
    l = smax(l, -ell(Math.abs(lx - 0.145) - 0.035, py - 0.34, pz + 0.66, 0.006, 0.1, 0.006), 0.008); // groove between bone and tendon
    l = smin(l, sph(lx - 0.145, py - 0.165, pz + 0.686, 0.016), 0.015); // ergot
    l = smin(l, ell(lx - 0.145, py - 0.094, pz + 0.592, 0.046, 0.012, 0.049), 0.02); // coronet band
    return smin(l, this.hoof(lx - 0.145, py, pz + 0.568), 0.008);
  }
  // the trunk: the loft between its first and last sections, each end rounded by an ellipsoid that takes over from the section there
  trunk(px, py, pz) {
    const L = this.torso, t = clamp(pz, L.lo, L.hi), p = L.at(t, this._a), q = L.at(clamp(t + 0.01, L.lo, L.hi), this._b);
    const cw = p.bot + p.f * (p.top - p.bot), dy = py - cw;
    let d = ell2(px, dy, p.hw, lerp2(cw - p.bot, p.top - cw, sstep(-0.09, 0.09, dy)));
    const sl = Math.max(Math.abs(q.top - p.top), Math.abs(q.bot - p.bot), Math.abs(q.hw - p.hw)) / 0.01;
    d /= Math.sqrt(1 + Math.min(sl, 1.5) ** 2);
    d = Math.max(d, L.lo - pz, pz - L.hi); // cut flat at the ends ...
    for (const c of this.trunkEnds) d = smin(d, ell(px, py - c.c[1], pz - c.c[2], c.r[0], lerp2(c.r[2], c.r[1], sstep(-0.09, 0.09, py - c.c[1])), c.r[3]), 0.06); // ... and rounded there
    return d;
  }
  neck(px, py, pz) {
    let nk = 1e9;
    for (const g of this.neckSegs) {
      const dy = py - g.m[1], dz = pz - g.m[2];
      nk = smin(nk, ell(px, dy * g.v[1] + dz * g.v[2], dy * g.a[1] + dz * g.a[2], g.rx, g.ry, g.rz), 0.08);
    }
    return nk;
  }

  eval(px, py, pz) {
    const ax = Math.abs(px);
    // ---- body: the trunk, then the muscles over it ----
    let b = this.trunk(px, py, pz);
    b = smin(b, this.scapula(ax, py, pz), 0.08); // shoulder
    b = smin(b, ell(ax - 0.135, py - 1.12, pz - 0.665, 0.062, 0.075, 0.065), 0.07); // point of the shoulder
    b = smin(b, ell(ax - 0.075, py - 0.95, pz - 0.655, 0.068, 0.11, 0.07), 0.06); // pectoral muscles
    b = smin(b, ell(px, py - 1.03, pz - 0.7, 0.16, 0.17, 0.11), 0.1); // the breast, rounding up into the underside of the neck
    if (pz > -0.08 && pz < 0.4 && py > 0.9 && py < 1.32 && ax > 0.18) // faint ribs behind the girth, fading out up the side and toward the flank
      b += 0.0016 * Math.sin(pz * 44 + py * 9) * sstep(-0.08, 0.05, pz) * sstep(0.4, 0.22, pz) * sstep(0.9, 1.0, py) * sstep(1.32, 1.2, py);
    b = smin(b, ell(ax - 0.085, py - 1.22, pz + 0.79, 0.06, 0.09, 0.05), 0.07); // points of the buttock
    b = smin(b, ell(px, py - 1.43, pz + 0.7, 0.048, 0.045, 0.06), 0.06); // tail head
    // ---- legs ----
    const fl = this.frontLeg(ax, py, pz), hl = this.hindLeg(ax, py, pz);
    let d = smin(b, fl, 0.05); d = smin(d, hl, 0.07);
    // ---- neck and head ----
    let nk = this.neck(px, py, pz);
    nk = smin(nk, this.brachio(ax, py, pz), 0.07);
    d = smin(d, nk, 0.11);
    const [hx, hs, ht] = this.headLocal(px, py, pz);
    const hd = this.headSDF(hx, hs, ht) * this.hk;
    d = smin(d, hd, 0.035);
    // ---- hair ----
    const mn = this.hairMane(px, py, pz), fk = this.hairFore(px, py, pz), tl = this.hairTail(px, py, pz);
    d = smin(d, mn, 0.006); d = smin(d, fk, 0.005); d = smin(d, tl, 0.02);
    this._g = { b, fl, hl, nk, hd, mn, fk, tl, hs, ht, hx };
    // ---- fine detail on the skin (not the hair) ----
    if (!this._nod && d > -0.02 && d < 0.02 && Math.min(mn, fk, tl) > 0.006) {
      d += 0.0008 * fbm(px * 48 + this.seed, py * 48, pz * 48, 2) + 0.0025 * fbm(px * 3.3, py * 3.3 + this.seed * 2.1, pz * 3.3, 2);
    }
    return Math.max(d, -py);
  }
  evalBase(px, py, pz) { this._nod = true; const v = this.eval(px, py, pz); this._nod = false; return v; }

  // ---- per-vertex skin weights: up to four bones ----
  skin(px, py, pz) {
    this.evalBase(px, py, pz);
    const g = this._g, B = this.bones, idx = (n) => B.findIndex((b) => b.name === n);
    const side = px >= 0 ? 'R' : 'L', W = new Map();
    const add = (n, w) => { if (w > 1e-4) W.set(n, (W.get(n) || 0) + w); };
    const P = (n) => B[idx(n)].pos;
    const chain = (names, total, tipEnd) => {
      const pts = names.map(P); if (tipEnd) pts.push(tipEnd);
      const ws = [];
      for (let i = 0; i < names.length - (tipEnd ? 0 : 1); i++) { const [dd] = segDist(px, py, pz, pts[i], pts[i + 1]); ws.push(1 / Math.pow(dd + 0.015, 6)); }
      const s = ws.reduce((a, b) => a + b, 0);
      ws.forEach((w, i) => add(names[i], (total * w) / s));
    };
    const wFront = sstep(-0.03, 0.05, g.b - g.fl) * (pz > 0 ? 1 : 0) * sstep(0.04, 0.09, Math.abs(px));
    const wHind = sstep(-0.03, 0.05, g.b - g.hl) * (pz < 0 ? 1 : 0) * sstep(0.04, 0.09, Math.abs(px));
    const wHead = sstep(-0.02, 0.04, g.nk - Math.min(g.hd, g.fk)) * (g.hs > -0.06 ? 1 : 0);
    const wTail = sstep(-0.01, 0.03, g.b - g.tl) * (pz < -0.6 ? 1 : 0);
    const wNeck = (1 - wHead) * sstep(-0.04, 0.06, g.b - Math.min(g.nk, g.mn)) * (pz > 0.36 ? 1 : 0);
    const fL = Math.min(1, wFront), hL = Math.min(1, wHind);
    if (fL > 0) chain([`arm${side}`, `fore${side}`, `fcan${side}`, `fpas${side}`, `fhoof${side}`], fL, [P(`fhoof${side}`)[0], 0, P(`fhoof${side}`)[2] + 0.03]);
    if (hL > 0) chain([`thigh${side}`, `gask${side}`, `hcan${side}`, `hpas${side}`, `hhoof${side}`], hL, [P(`hhoof${side}`)[0], 0, P(`hhoof${side}`)[2] + 0.03]);
    let rest = 1 - fL - hL;
    if (rest > 0 && wTail > 0) { const k = Math.min(rest, wTail); chain(['tail0', 'tail1', 'tail2', 'tail3', 'tail4'], k, [0, 0.45, -0.92]); rest -= k; }
    if (rest > 0 && wHead > 0) { const k = Math.min(rest, wHead); add('head', k); rest -= k; }
    if (rest > 0 && wNeck > 0) { const k = Math.min(rest, wNeck); chain(['neck0', 'neck1', 'neck2', 'head'], k); rest -= k; }
    if (rest > 0) { // the body: shoulder blade over the front leg, chest, the middle, pelvis
      const sc = sstep(0.06, 0.13, Math.abs(px)) * sstep(0.95, 1.12, py) * sstep(0.25, 0.4, pz) * (1 - sstep(1.38, 1.47, py)) * 0.6;
      add(`scap${side}`, rest * sc); rest *= 1 - sc;
      const f = sstep(0.0, 0.35, pz), h = sstep(0.0, -0.35, pz);
      add('chest', rest * f); add('pelvis', rest * h); add('root', rest * (1 - f - h));
    }
    const top = [...W.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4);
    const s = top.reduce((a, [, w]) => a + w, 0) || 1;
    return top.map(([n, w]) => [idx(n), w / s]);
  }

  // ---- per-vertex colour regions ----
  // [points (black: lower legs, mane, tail, ear rims), hoof, muzzle, eye, hair, nostril, white (blaze and socks)]
  regions(px, py, pz) {
    this.evalBase(px, py, pz);
    const g = this._g, skin = Math.min(g.b, g.nk, g.hd, g.fl, g.hl);
    const hair = Math.min(g.mn, g.fk, g.tl) < skin + 0.002 ? 1 : 0;
    const legF = g.fl < g.b - 0.01 ? 1 - sstep(0.46, 0.6, py + 0.03 * fbm(px * 20, py * 8, pz * 20, 1)) : 0;
    const legH = g.hl < g.b - 0.01 ? 1 - sstep(0.52, 0.66, py + 0.03 * fbm(px * 20, py * 8, pz * 20, 1)) : 0;
    const hoof = py < 0.11 ? sstep(0.098, 0.084, py) : 0;
    const { hx, hs, ht } = g, ax = Math.abs(hx);
    const muzzle = g.hd < 0.02 ? sstep(0.45, 0.53, hs) : 0;
    const E = this.eyeC;
    const eye = ell(ax - E[0] + 0.003, hs - E[1], ht - E[2], this.eyeR * 0.95, this.eyeR, this.eyeR * 1.12) < 0.0025 && g.hd < 0.01 ? 1 : 0;
    const nostril = g.hd < 0.02 ? 1 - sstep(0.008, 0.016, ell(ax - 0.042, hs - 0.539, ht - 0.004, 0.012, 0.033, 0.019) + 0.012) : 0;
    let earRim = 0;
    for (const e of this.ears) {
      const qx = hx - e.c[0], qy = hs - e.c[1], qz = ht - e.c[2], lu = qx * e.u[0] + qy * e.u[1] + qz * e.u[2];
      if (Math.hypot(qx, qy, qz) < 0.14) earRim = Math.max(earRim, sstep(0.045, 0.1, lu));
    }
    // white: a blaze from the forehead to between the nostrils (on the front of the face), and socks over the fetlocks
    const bw = 0.028 + 0.012 * sstep(0.12, 0.02, hs) + 0.004 * sstep(0.42, 0.55, hs) + 0.005 * fbm(hs * 30, 1, 2, 1);
    const blaze = g.hd < 0.02 && hs > 0.05 && hs < 0.6 && ht > -0.01 ? 1 - sstep(bw - 0.004, bw + 0.004, ax) : 0;
    const sockTop = 0.215 + 0.025 * fbm(px * 25, 1.7, pz * 25, 1);
    const sock = (g.fl < g.b - 0.01 || g.hl < g.b - 0.01) && py > 0.07 ? 1 - sstep(sockTop - 0.01, sockTop + 0.01, py) : 0;
    const white = Math.max(blaze, sock) * (1 - hair) * (1 - nostril);
    const points = Math.max(hair, Math.max(legF, legH) * (1 - white), earRim);
    return [points, hoof, muzzle * (1 - blaze * 0.6), eye, hair, nostril, white];
  }
}

// ---------- mesher (surface nets on a fine grid, evaluated exactly only near the surface) ----------
export function meshHorse(h, opt = {}) {
  const fs = opt.step ?? 0.008, R = 4;
  const bmin = opt.bmin ?? [-0.5, -0.012, -1.06], bmax = opt.bmax ?? [0.5, 2.02, 1.56];
  const kx = Math.ceil((bmax[0] - bmin[0]) / (fs * R)), ky = Math.ceil((bmax[1] - bmin[1]) / (fs * R)), kz = Math.ceil((bmax[2] - bmin[2]) / (fs * R));
  const nx = kx * R + 1, ny = ky * R + 1, nz = kz * R + 1, cx = kx + 1, cy = ky + 1, cz = kz + 1, cs = fs * R;
  const C = new Float32Array(cx * cy * cz);
  for (let k = 0; k < cz; k++) for (let j = 0; j < cy; j++) for (let i = 0; i < cx; i++) C[i + cx * (j + cy * k)] = h.eval(bmin[0] + i * cs, bmin[1] + j * cs, bmin[2] + k * cs);
  const thr = cs * Math.sqrt(3) * 1.05 + 0.03, near = new Uint8Array(kx * ky * kz);
  for (let k = 0; k < kz; k++) for (let j = 0; j < ky; j++) for (let i = 0; i < kx; i++) {
    let m = 1e9;
    for (let c = 0; c < 8; c++) m = Math.min(m, Math.abs(C[(i + (c & 1)) + cx * ((j + ((c >> 1) & 1)) + cy * (k + (c >> 2)))]));
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
          const ib = (x % R === 0 && ic > 0) ? ic - 1 : ic, jb = (y % R === 0 && jc > 0) ? jc - 1 : jc, kb = (z % R === 0 && kc > 0) ? kc - 1 : kc;
          for (let a = ib; a <= ic && !isNear; a++) for (let b = jb; b <= jc && !isNear; b++) for (let c = kb; c <= kc && !isNear; c++) if (near[a + kx * (b + ky * c)]) isNear = 1;
        }
        const id = x + nx * (y + ny * z);
        if (isNear) F[id] = h.eval(bmin[0] + x * fs, bmin[1] + y * fs, bmin[2] + z * fs);
        else {
          const g = (a, b, c) => C[a + cx * (b + cy * c)];
          const c00 = g(ic, jc, kc) * (1 - fx) + g(ic + 1, jc, kc) * fx, c10 = g(ic, jc + 1, kc) * (1 - fx) + g(ic + 1, jc + 1, kc) * fx;
          const c01 = g(ic, jc, kc + 1) * (1 - fx) + g(ic + 1, jc, kc + 1) * fx, c11 = g(ic, jc + 1, kc + 1) * (1 - fx) + g(ic + 1, jc + 1, kc + 1) * fx;
          F[id] = (c00 * (1 - fy) + c10 * fy) * (1 - fz) + (c01 * (1 - fy) + c11 * fy) * fz;
        }
      }
    }
  }
  const ncx = nx - 1, ncy = ny - 1, ncz = nz - 1, cellV = new Int32Array(ncx * ncy * ncz).fill(-1), P = [];
  const EDGES = [[0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]], cv = new Float32Array(8);
  for (let z = 0; z < ncz; z++) for (let y = 0; y < ncy; y++) for (let x = 0; x < ncx; x++) {
    let mask = 0;
    for (let c = 0; c < 8; c++) { const v = F[(x + (c & 1)) + nx * ((y + ((c >> 1) & 1)) + ny * (z + (c >> 2)))]; cv[c] = v; if (v < 0) mask |= 1 << c; }
    if (mask === 0 || mask === 255) continue;
    let sx = 0, sy = 0, sz = 0, cnt = 0;
    for (const [a, b] of EDGES) {
      const va = cv[a], vb = cv[b]; if ((va < 0) === (vb < 0)) continue;
      const tt = va / (va - vb);
      sx += (a & 1) + ((b & 1) - (a & 1)) * tt; sy += ((a >> 1) & 1) + (((b >> 1) & 1) - ((a >> 1) & 1)) * tt; sz += (a >> 2) + ((b >> 2) - (a >> 2)) * tt; cnt++;
    }
    cellV[x + ncx * (y + ncy * z)] = P.length / 3;
    P.push(bmin[0] + (x + sx / cnt) * fs, bmin[1] + (y + sy / cnt) * fs, bmin[2] + (z + sz / cnt) * fs);
  }
  const I = [], cell = (x, y, z) => cellV[x + ncx * (y + ncy * z)];
  const quad = (a, b, c, d, flip) => { if (a < 0 || b < 0 || c < 0 || d < 0) return; if (!flip) I.push(a, b, c, a, c, d); else I.push(a, c, b, a, d, c); };
  for (let z = 1; z < nz - 1; z++) for (let y = 1; y < ny - 1; y++) for (let x = 1; x < nx - 1; x++) {
    const in0 = F[x + nx * (y + ny * z)] < 0;
    if ((F[x + 1 + nx * (y + ny * z)] < 0) !== in0 && x < ncx) quad(cell(x, y - 1, z - 1), cell(x, y, z - 1), cell(x, y, z), cell(x, y - 1, z), !in0);
    if ((F[x + nx * (y + 1 + ny * z)] < 0) !== in0 && y < ncy) quad(cell(x - 1, y, z - 1), cell(x - 1, y, z), cell(x, y, z), cell(x, y, z - 1), !in0);
    if ((F[x + nx * (y + ny * (z + 1))] < 0) !== in0 && z < ncz) quad(cell(x - 1, y - 1, z), cell(x, y - 1, z), cell(x, y, z), cell(x - 1, y, z), !in0);
  }
  const nv = P.length / 3, pos = new Float32Array(nv * 3), nrm = new Float32Array(nv * 3), ao = new Float32Array(nv);
  const e = 0.0012;
  const grad = (x, y, z) => [h.eval(x + e, y, z) - h.eval(x - e, y, z), h.eval(x, y + e, z) - h.eval(x, y - e, z), h.eval(x, y, z + e) - h.eval(x, y, z - e)];
  for (let i = 0; i < nv; i++) {
    let x = P[3 * i], y = P[3 * i + 1], z = P[3 * i + 2];
    for (let it = 0; it < 2; it++) {
      const dd = h.eval(x, y, z), g = grad(x, y, z), gl2 = (g[0] * g[0] + g[1] * g[1] + g[2] * g[2]) / (4 * e * e);
      if (gl2 < 1e-8) break;
      const sc = dd / gl2 / (2 * e), mx = g[0] * sc, my = g[1] * sc, mz = g[2] * sc, ml = Math.hypot(mx, my, mz), lim = fs * 0.6, f = ml > lim ? lim / ml : 1;
      x -= mx * f; y -= my * f; z -= mz * f;
    }
    const g = grad(x, y, z), gl = Math.hypot(g[0], g[1], g[2]) || 1, n0 = g[0] / gl, n1 = g[1] / gl, n2 = g[2] / gl;
    pos[3 * i] = x; pos[3 * i + 1] = y; pos[3 * i + 2] = z; nrm[3 * i] = n0; nrm[3 * i + 1] = n1; nrm[3 * i + 2] = n2;
    let occ = 0, sca = 1;
    for (let k = 1; k <= 5; k++) { const hh = 0.01 + 0.03 * k * k / 5; occ += (hh - Math.min(h.evalBase(x + n0 * hh, y + n1 * hh, z + n2 * hh), y + n1 * hh + 0.002)) * sca; sca *= 0.75; }
    ao[i] = clamp(1 - 2.0 * occ, 0, 1);
  }
  let vol = 0;
  for (let t = 0; t < I.length; t += 3) {
    const a = 3 * I[t], b = 3 * I[t + 1], c = 3 * I[t + 2];
    vol += pos[a] * (pos[b + 1] * pos[c + 2] - pos[b + 2] * pos[c + 1]) - pos[a + 1] * (pos[b] * pos[c + 2] - pos[b + 2] * pos[c]) + pos[a + 2] * (pos[b] * pos[c + 1] - pos[b + 1] * pos[c]);
  }
  if (vol < 0) for (let t = 0; t < I.length; t += 3) { const tmp = I[t + 1]; I[t + 1] = I[t + 2]; I[t + 2] = tmp; }
  return { positions: pos, normals: nrm, ao, indices: new Uint32Array(I), stats: { grid: [nx, ny, nz], verts: nv, tris: I.length / 3 } };
}

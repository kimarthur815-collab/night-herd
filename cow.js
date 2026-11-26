// cow.js — procedural cow built from a signed distance field, meshed with surface nets.
// Runs in Node (offline baking) and in the browser.

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
const norm = (v) => { const l = Math.hypot(v[0], v[1], v[2]); return [v[0] / l, v[1] / l, v[2] / l]; };
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

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
export function fbm(x, y, z, oct = 3) {
  let s = 0, a = 0.5, f = 1;
  for (let i = 0; i < oct; i++) { s += a * vnoise(x * f, y * f, z * f); f *= 2.03; a *= 0.5; }
  return s;
}

// ---------- the cow ----------
// Cow-local frame: +z forward (head), +y up, ground at y = 0. Units: metres.
export class Cow {
  constructor(o = {}) {
    this.wf = o.widthF ?? 1;
    this.bf = o.bellyF ?? 1;
    this.earDroop = o.earDroop ?? 0.25;
    this.seed = o.seed ?? 0;
    const y1 = o.yaw1 ?? 0, p1 = o.pitch1 ?? 0, y2 = o.yaw2 ?? 0, p2 = o.pitch2 ?? 0;
    this.c1y = Math.cos(y1); this.s1y = Math.sin(y1); this.c1p = Math.cos(p1); this.s1p = Math.sin(p1);
    this.c2y = Math.cos(y2); this.s2y = Math.sin(y2); this.c2p = Math.cos(p2); this.s2p = Math.sin(p2);
    this.N0 = [0, 1.08, 0.58]; // neck pivot
    this.H0 = [0, 1.22, 1.03]; // head pivot (atlas)
    // head frame: poll P, face axis d (poll -> nose), face normal n (forehead front)
    this.P = [0, 1.34, 1.04];
    this.hx = 1.2; this.hs = 1.06; this.ht = 1.16; // head width / length / depth scale
    this.d = norm([0, -0.8, 0.6]);
    this.n = [0, this.d[2], -this.d[1]];

    this.topline = roundCone([0, 1.24, 0.45], [0, 1.25, -0.88], 0.11, 0.1);
    // right-side legs (evaluated with |x|)
    this.legSegs = [
      roundCone([0.17, 0.8, 0.47], [0.16, 0.44, 0.52], 0.1, 0.062), // forearm
      roundCone([0.16, 0.42, 0.525], [0.16, 0.13, 0.54], 0.05, 0.046), // front cannon
      roundCone([0.16, 0.12, 0.545], [0.16, 0.05, 0.575], 0.048, 0.05), // front pastern
      roundCone([0.2, 0.8, -0.52], [0.17, 0.5, -0.8], 0.115, 0.06), // gaskin
      roundCone([0.165, 0.48, -0.78], [0.16, 0.13, -0.72], 0.05, 0.045), // hind cannon
      roundCone([0.16, 0.12, -0.715], [0.16, 0.05, -0.69], 0.048, 0.05), // hind pastern
    ];
    this.joints = [
      [0.16, 0.43, 0.53, 0.064], [0.16, 0.125, 0.545, 0.056], // knee, front fetlock
      [0.17, 0.5, -0.83, 0.05], [0.17, 0.5, -0.79, 0.062], [0.16, 0.125, -0.715, 0.056], // hock point, hock, hind fetlock
    ];
    this.hooves = [];
    for (const zf of [0.575, -0.69]) for (const o2 of [-0.023, 0.023]) this.hooves.push([0.16 + o2 * 1.1, 0.032, zf + 0.035, 0.033, 0.05, 0.07]);
    this.tail = roundCone([0, 1.2, -0.98], [0, 0.6, -1.04], 0.026, 0.013);
    // neck group (rest coords)
    this.neck = roundCone([0, 1.08, 0.55], [0, 1.2, 1.03], 0.24, 0.14);
    this.poll = roundCone([-0.085, 0.0, -0.035], [0.085, 0.0, -0.035], 0.048, 0.048);
    this.dewC = [0, 0.86, 0.83]; this.dewU = norm([0, 0.707, 0.707]); this.dewV = norm([0, -0.707, 0.707]);
    // head group, in head-local coords (x, s, t)
    this.face = roundCone([0, 0.15, -0.045], [0, 0.44, -0.03], 0.1, 0.068);
    this.jaw = roundCone([0, 0.17, -0.165], [0, 0.45, -0.095], 0.058, 0.042);
    this.ears = [-1, 1].map((sg) => {
      const base = [sg * 0.092, 0.03, -0.07];
      const u = norm([sg, this.earDroop, -0.12]);
      const wf = [0, 0.63, 0.78];
      const dp = dot(wf, u);
      const w = norm([wf[0] - dp * u[0], wf[1] - dp * u[1], wf[2] - dp * u[2]]);
      const v = cross(w, u);
      const c = [base[0] + u[0] * 0.112, base[1] + u[1] * 0.112, base[2] + u[2] * 0.112];
      return { c, u, v, w };
    });
    this.eyes = [-1, 1].map((sg) => [sg * 0.114 * this.hx, 0.17 * this.hs, -0.006 * this.ht]);
    this.eyeR = 0.027;
  }

  // inverse pose transforms --------------------------------------------------
  toNeck(px, py, pz, out) {
    const N = this.N0; const x = px - N[0], y = py - N[1], z = pz - N[2];
    const x1 = x * this.c1y - z * this.s1y, z1 = x * this.s1y + z * this.c1y;
    out[0] = x1 + N[0]; out[1] = y * this.c1p - z1 * this.s1p + N[1]; out[2] = y * this.s1p + z1 * this.c1p + N[2];
  }
  toHead(qx, qy, qz, out) {
    const H = this.H0; const x = qx - H[0], y = qy - H[1], z = qz - H[2];
    const x1 = x * this.c2y - z * this.s2y, z1 = x * this.s2y + z * this.c2y;
    out[0] = x1 + H[0]; out[1] = y * this.c2p - z1 * this.s2p + H[1]; out[2] = y * this.s2p + z1 * this.c2p + H[2];
  }
  fwdRot(v, cy, sy, cp, sp) {
    const x = v[0], y = v[1] * cp + v[2] * sp, z = -v[1] * sp + v[2] * cp;
    return [x * cy + z * sy, y, -x * sy + z * cy];
  }
  headRestToPosed(p) {
    const H = this.H0, N = this.N0;
    let r = this.fwdRot([p[0] - H[0], p[1] - H[1], p[2] - H[2]], this.c2y, this.s2y, this.c2p, this.s2p);
    const p1 = [r[0] + H[0], r[1] + H[1], r[2] + H[2]];
    r = this.fwdRot([p1[0] - N[0], p1[1] - N[1], p1[2] - N[2]], this.c1y, this.s1y, this.c1p, this.s1p);
    return [r[0] + N[0], r[1] + N[1], r[2] + N[2]];
  }
  headDirToPosed(v) {
    return this.fwdRot(this.fwdRot(v, this.c2y, this.s2y, this.c2p, this.s2p), this.c1y, this.s1y, this.c1p, this.s1p);
  }
  headLocalToRest(x, s, t) {
    const P = this.P, d = this.d, n = this.n;
    return [P[0] + x, P[1] + s * d[1] + t * n[1], P[2] + s * d[2] + t * n[2]];
  }

  headSDF(x, s, t) {
    const ax = Math.abs(x);
    let h = rbox(x, s - 0.12, t + 0.03, 0.112, 0.13, 0.075, 0.045); // broad flat forehead
    h = smin(h, this.poll(x, s, t), 0.04); // bony poll ridge
    const tw = 1 + 0.12 * sstep(0.12, 0.45, s); // face narrows below the eyes
    h = smin(h, rbox(x * tw, s - 0.33, t + 0.03, 0.1, 0.2, 0.072, 0.05), 0.05); // face
    h = smin(h, rbox(x, s - 0.5, t + 0.035, 0.09, 0.058, 0.072, 0.056), 0.04); // broad muzzle
    h = smin(h, ell(ax - 0.066, s - 0.23, t + 0.155, 0.06, 0.13, 0.12), 0.05); // cheeks / jowls
    h = smin(h, this.jaw(x, s, t), 0.04); // lower jaw
    h = smin(h, ell(ax - 0.098, s - 0.155, t - 0.03, 0.034, 0.03, 0.03), 0.035); // brow
    for (const e of this.ears) {
      const qx = x - e.c[0], qy = s - e.c[1], qz = t - e.c[2];
      const lu = qx * e.u[0] + qy * e.u[1] + qz * e.u[2];
      const lv = qx * e.v[0] + qy * e.v[1] + qz * e.v[2];
      const lw = qx * e.w[0] + qy * e.w[1] + qz * e.w[2];
      const tp = 1 - 0.42 * sstep(-0.06, 0.15, lu);
      let ear = ell(lu, lv / tp, lw, 0.128, 0.058, 0.022) * Math.min(1, tp);
      ear = smax(ear, -ell(lu - 0.01, lv / tp, lw - 0.012, 0.106, 0.043, 0.013) * Math.min(1, tp), 0.006);
      h = smin(h, ear, 0.025);
    }
    h = smax(h, -sph(ax - 0.114, s - 0.17, t + 0.006, 0.0255), 0.008); // eye sockets
    h = smax(h, -ell(ax - 0.046, s - 0.556, t - 0.0, 0.016, 0.024, 0.019), 0.008); // nostrils
    h = smax(h, -ell(x, s - 0.53, t + 0.1, 0.075, 0.035, 0.006), 0.006); // mouth line
    return h;
  }

  evalBase(px, py, pz) { this._nod = true; const v = this.eval(px, py, pz); this._nod = false; return v; }

  eval(px, py, pzIn) {
    let pz = pzIn;
    // body
    const bx = px / this.wf, ax = Math.abs(bx);
    const pzo = pz; pz = pz / 0.92;
    let b = ell(bx, py - 1.0, pz - 0.48, 0.27, 0.35, 0.4); // chest
    b = smin(b, ell(bx, py - 0.97 + (this.bf - 1) * 0.06, pz + 0.05, 0.34, 0.38 * this.bf, 0.62), 0.14); // barrel
    b = smin(b, ell(bx, py - 1.04, pz + 0.62, 0.29, 0.32, 0.36), 0.12); // hindquarters
    b = smin(b, this.topline(bx, py, pz), 0.1);
    b = smin(b, ell(bx, py - 1.24, pz - 0.42, 0.12, 0.09, 0.22), 0.08); // withers
    b = smin(b, ell(bx, py - 0.74, pz - 0.7, 0.15, 0.11, 0.16), 0.1); // brisket
    b = smin(b, ell(ax - 0.19, py - 1.0, pz - 0.52, 0.1, 0.26, 0.16), 0.08); // shoulders
    b = smin(b, ell(ax - 0.17, py - 0.92, pz + 0.66, 0.13, 0.28, 0.2), 0.08); // thighs
    b = smin(b, sph(ax - 0.23, py - 1.21, pz + 0.52, 0.062), 0.14); // hooks
    b = smin(b, sph(ax - 0.095, py - 1.17, pz + 0.96, 0.055), 0.06); // pins
    b = smin(b, sph(bx, py - 1.23, pz + 0.93, 0.07), 0.06); // tailhead
    // legs (mirrored)
    const lx = Math.abs(px);
    let l = 1e9;
    for (const f of this.legSegs) l = smin(l, f(lx, py, pz), 0.035);
    for (const j of this.joints) l = smin(l, sph(lx - j[0], py - j[1], pz - j[2], j[3]), 0.02);
    for (const h of this.hooves) l = smin(l, ell(lx - h[0], py - h[1], pz - h[2], h[3], h[4], h[5]), 0.012);
    let d = smin(b, l, 0.07);
    this._gB = smin(d, ell(px, py - 0.64, pz + 0.58, 0.13, 0.08, 0.15), 0.12);
    this._gT = Math.min(this.tail(px, py, pz), ell(px, py - 0.52, pz + 1.045, 0.04, 0.11, 0.04));
    d = smin(d, this.tail(px, py, pz), 0.04);
    d = smin(d, ell(px, py - 0.52, pz + 1.045, 0.04, 0.11, 0.04), 0.03); // tail switch
    d = smin(d, ell(px, py - 0.64, pz + 0.58, 0.13, 0.08, 0.15), 0.12); // udder
    pz = pzo;
    // neck group
    const q = this._q || (this._q = [0, 0, 0]);
    this.toNeck(px, py, pz, q);
    let nk = this.neck(q[0] / 0.8, q[1], q[2]) * 0.8;
    const dx = q[0] - this.dewC[0], dy = q[1] - this.dewC[1], dz = q[2] - this.dewC[2];
    const du = dy * this.dewU[1] + dz * this.dewU[2], dv = dy * this.dewV[1] + dz * this.dewV[2];
    nk = smin(nk, ell(dx, du, dv, 0.045, 0.22, 0.12), 0.05); // dewlap
    this._gN = nk;
    d = smin(d, nk, 0.12);
    // head group
    const r = this._r || (this._r = [0, 0, 0]);
    this.toHead(q[0], q[1], q[2], r);
    const rx = r[0] - this.P[0], ry = r[1] - this.P[1], rz = r[2] - this.P[2];
    const s = ry * this.d[1] + rz * this.d[2], t = ry * this.n[1] + rz * this.n[2], x = rx;
    const hd = this.headSDF(x / this.hx, s / this.hs, t / this.ht) * this.hs;
    this._gH = hd;
    d = smin(d, hd, 0.08);
    // fine surface detail
    if (!this._nod && d > -0.025 && d < 0.025) {
      let disp = 0.0025 * fbm(px * 22 + this.seed * 7.1, py * 22, pz * 22, 2) + 0.007 * fbm(px * 2.7, py * 2.7 + this.seed * 3.3, pz * 2.7, 2);
      if (hd < 0.03 && s > -0.1 && s < 0.34 && t > -0.03) {
        const m = sstep(-0.02, 0.04, t) * sstep(-0.1, -0.02, s) * (1 - sstep(0.2, 0.34, s));
        disp += m * 0.006 * fbm(x * 45, s * 45, t * 45 + this.seed, 2); // forehead curls
      }
      d += disp;
    }
    return Math.max(d, -py);
  }

  // skinning weights for the head/neck/tail rig, valid for a cow baked in rest pose
  rigWeights(px, py, pz) {
    this.evalBase(px, py, pz);
    const dB = this._gB, dT = this._gT, dN = this._gN, dH = this._gH;
    const wHead = sstep(-0.02, 0.035, Math.min(dN, dB) - dH);
    const ax = 0, ay = 0.12, az = 0.48, l2 = ax * ax + ay * ay + az * az;
    const tN = clamp(((py - 1.08) * ay + (pz - 0.55) * az) / l2, 0, 1);
    const wNeckRaw = sstep(-0.05, 0.08, dB - Math.min(dN, dH));
    const wNeck = Math.max(wHead, wNeckRaw * sstep(0.0, 0.75, tN));
    const wTail = sstep(-0.01, 0.025, Math.min(dB, dN) - dT) * clamp((1.22 - py) / 0.62, 0, 1);
    return [wNeck, wHead, wTail];
  }

  // per-vertex material weights: [noseW, hoofW, dirtW, innerEar, eyeRing, faceMask]
  classify(px, py, pz) {
    const q = [0, 0, 0], r = [0, 0, 0];
    this.toNeck(px, py, pz, q); this.toHead(q[0], q[1], q[2], r);
    const rx = r[0] - this.P[0], ry = r[1] - this.P[1], rz = r[2] - this.P[2];
    const s = (ry * this.d[1] + rz * this.d[2]) / this.hs, t = (ry * this.n[1] + rz * this.n[2]) / this.ht, x = rx / this.hx;
    const muz = rbox(x, s - 0.5, t + 0.035, 0.09, 0.058, 0.072, 0.056);
    const nose = muz < 0.025 ? sstep(0.505, 0.53, s) * (1 - sstep(0.07, 0.092, Math.abs(x))) * sstep(-0.095, -0.07, t) : 0;
    const hoof = sstep(0.085, 0.06, py);
    const dirt = sstep(0.5, 0.12, py) * (py < 0.6 ? 1 : 0);
    let inner = 0;
    for (const e of this.ears) {
      const qx = x - e.c[0], qy = s - e.c[1], qz = t - e.c[2];
      const lu = qx * e.u[0] + qy * e.u[1] + qz * e.u[2];
      const lv = qx * e.v[0] + qy * e.v[1] + qz * e.v[2];
      const lw = qx * e.w[0] + qy * e.w[1] + qz * e.w[2];
      const tp = 1 - 0.42 * sstep(-0.06, 0.15, lu);
      const ear = ell(lu, lv / tp, lw, 0.128, 0.058, 0.022) * Math.min(1, tp);
      if (ear < 0.012) inner = Math.max(inner, sstep(-0.012, 0.0, lw) * sstep(-0.07, -0.01, lu) * (1 - sstep(0.03, 0.055, Math.abs(lv))));
    }
    let ring = 0;
    for (const ec of this.eyes) {
      const dx = x * this.hx - ec[0], ds = s * this.hs - ec[1], dt = t * this.ht - ec[2];
      ring = Math.max(ring, 1 - sstep(0.035, 0.07, Math.sqrt(dx * dx + ds * ds + dt * dt)));
    }
    const hd = this.headSDF(x, s, t) * this.hs;
    const face = 1 - sstep(0.0, 0.05, hd);
    return [nose, hoof, dirt, inner, ring, face, x, s, t];
  }
}

// ---------- mesher ----------
export function meshCow(cow, opt = {}) {
  const fs = opt.step ?? 0.012;
  const R = 4; // coarse ratio
  const bmin = opt.bmin ?? [-0.98, -0.012, -1.14];
  const bmax = opt.bmax ?? [0.98, 1.62, 1.62];
  const kx = Math.ceil((bmax[0] - bmin[0]) / (fs * R)), ky = Math.ceil((bmax[1] - bmin[1]) / (fs * R)), kz = Math.ceil((bmax[2] - bmin[2]) / (fs * R));
  const nx = kx * R + 1, ny = ky * R + 1, nz = kz * R + 1;
  const cx = kx + 1, cy = ky + 1, cz = kz + 1;
  const C = new Float32Array(cx * cy * cz);
  const cs = fs * R;
  for (let k = 0; k < cz; k++) for (let j = 0; j < cy; j++) for (let i = 0; i < cx; i++)
    C[i + cx * (j + cy * k)] = cow.eval(bmin[0] + i * cs, bmin[1] + j * cs, bmin[2] + k * cs);
  const F = new Float32Array(nx * ny * nz);
  const thr = cs * Math.sqrt(3) * 1.05 + 0.035;
  const near = new Uint8Array(kx * ky * kz);
  for (let k = 0; k < kz; k++) for (let j = 0; j < ky; j++) for (let i = 0; i < kx; i++) {
    let m = 1e9;
    for (let c = 0; c < 8; c++) {
      const v = Math.abs(C[(i + (c & 1)) + cx * ((j + ((c >> 1) & 1)) + cy * (k + (c >> 2)))]);
      if (v < m) m = v;
    }
    near[i + kx * (j + ky * k)] = m < thr ? 1 : 0;
  }
  let exact = 0;
  for (let z = 0; z < nz; z++) {
    const kc = Math.min(Math.floor(z / R), kz - 1), fz = z / R - kc;
    for (let y = 0; y < ny; y++) {
      const jc = Math.min(Math.floor(y / R), ky - 1), fy = y / R - jc;
      for (let x = 0; x < nx; x++) {
        const ic = Math.min(Math.floor(x / R), kx - 1), fx = x / R - ic;
        // a fine point is "near" if any coarse cell touching it is near
        let isNear = near[ic + kx * (jc + ky * kc)];
        if (!isNear) {
          const ib = (x % R === 0 && ic > 0) ? ic - 1 : ic, jb = (y % R === 0 && jc > 0) ? jc - 1 : jc, kb = (z % R === 0 && kc > 0) ? kc - 1 : kc;
          if (ib !== ic || jb !== jc || kb !== kc) {
            for (let a = ib; a <= ic && !isNear; a++) for (let b = jb; b <= jc && !isNear; b++) for (let c = kb; c <= kc && !isNear; c++) if (near[a + kx * (b + ky * c)]) isNear = 1;
          }
        }
        const idx = x + nx * (y + ny * z);
        if (isNear) { F[idx] = cow.eval(bmin[0] + x * fs, bmin[1] + y * fs, bmin[2] + z * fs); exact++; }
        else {
          const g = (a, b, c) => C[a + cx * (b + cy * c)];
          const c00 = g(ic, jc, kc) * (1 - fx) + g(ic + 1, jc, kc) * fx, c10 = g(ic, jc + 1, kc) * (1 - fx) + g(ic + 1, jc + 1, kc) * fx;
          const c01 = g(ic, jc, kc + 1) * (1 - fx) + g(ic + 1, jc, kc + 1) * fx, c11 = g(ic, jc + 1, kc + 1) * (1 - fx) + g(ic + 1, jc + 1, kc + 1) * fx;
          F[idx] = (c00 * (1 - fy) + c10 * fy) * (1 - fz) + (c01 * (1 - fy) + c11 * fy) * fz;
        }
      }
    }
  }
  // surface nets: one vertex per sign-changing cell
  const ncx = nx - 1, ncy = ny - 1, ncz = nz - 1;
  const cellV = new Int32Array(ncx * ncy * ncz).fill(-1);
  const P = [];
  const EDGES = [[0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]];
  const cv = new Float32Array(8);
  for (let z = 0; z < ncz; z++) for (let y = 0; y < ncy; y++) for (let x = 0; x < ncx; x++) {
    let mask = 0;
    for (let c = 0; c < 8; c++) {
      const v = F[(x + (c & 1)) + nx * ((y + ((c >> 1) & 1)) + ny * (z + (c >> 2)))];
      cv[c] = v; if (v < 0) mask |= 1 << c;
    }
    if (mask === 0 || mask === 255) continue;
    let sx = 0, sy = 0, sz = 0, cnt = 0;
    for (const [a, b] of EDGES) {
      const va = cv[a], vb = cv[b];
      if ((va < 0) === (vb < 0)) continue;
      const tt = va / (va - vb);
      sx += (a & 1) + ((b & 1) - (a & 1)) * tt;
      sy += ((a >> 1) & 1) + (((b >> 1) & 1) - ((a >> 1) & 1)) * tt;
      sz += (a >> 2) + ((b >> 2) - (a >> 2)) * tt;
      cnt++;
    }
    cellV[x + ncx * (y + ncy * z)] = P.length / 3;
    P.push(bmin[0] + (x + sx / cnt) * fs, bmin[1] + (y + sy / cnt) * fs, bmin[2] + (z + sz / cnt) * fs);
  }
  const I = [];
  const cell = (x, y, z) => cellV[x + ncx * (y + ncy * z)];
  const quad = (a, b, c, d, flip) => {
    if (a < 0 || b < 0 || c < 0 || d < 0) return;
    if (!flip) I.push(a, b, c, a, c, d); else I.push(a, c, b, a, d, c);
  };
  for (let z = 1; z < nz - 1; z++) for (let y = 1; y < ny - 1; y++) for (let x = 1; x < nx - 1; x++) {
    const v0 = F[x + nx * (y + ny * z)];
    const in0 = v0 < 0;
    if (x < nx - 1 && (F[x + 1 + nx * (y + ny * z)] < 0) !== in0 && x < ncx)
      quad(cell(x, y - 1, z - 1), cell(x, y, z - 1), cell(x, y, z), cell(x, y - 1, z), !in0);
    if (y < ny - 1 && (F[x + nx * (y + 1 + ny * z)] < 0) !== in0 && y < ncy)
      quad(cell(x - 1, y, z - 1), cell(x - 1, y, z), cell(x, y, z), cell(x, y, z - 1), !in0);
    if (z < nz - 1 && (F[x + nx * (y + ny * (z + 1))] < 0) !== in0 && z < ncz)
      quad(cell(x - 1, y - 1, z), cell(x, y - 1, z), cell(x, y, z), cell(x - 1, y, z), !in0);
  }
  // refine onto surface, normals from gradient
  const nv = P.length / 3;
  const pos = new Float32Array(nv * 3), nrm = new Float32Array(nv * 3), mat = new Float32Array(nv * 4), eye = new Float32Array(nv), ext = new Float32Array(nv * 3), hl = new Float32Array(nv * 3);
  const e = 0.0015;
  const grad = (x, y, z) => [
    cow.eval(x + e, y, z) - cow.eval(x - e, y, z),
    cow.eval(x, y + e, z) - cow.eval(x, y - e, z),
    cow.eval(x, y, z + e) - cow.eval(x, y, z - e),
  ];
  const sdfAO = (x, y, z) => Math.min(cow.evalBase(x, y, z), y + 0.002);
  for (let i = 0; i < nv; i++) {
    let x = P[3 * i], y = P[3 * i + 1], z = P[3 * i + 2];
    for (let it = 0; it < 2; it++) {
      const dd = cow.eval(x, y, z);
      const g = grad(x, y, z); const gl2 = (g[0] * g[0] + g[1] * g[1] + g[2] * g[2]) / (4 * e * e);
      if (gl2 < 1e-8) break;
      const sc = dd / gl2 / (2 * e);
      const mx = g[0] * sc, my = g[1] * sc, mz = g[2] * sc;
      const ml = Math.hypot(mx, my, mz);
      const lim = fs * 0.6;
      const f = ml > lim ? lim / ml : 1;
      x -= mx * f; y -= my * f; z -= mz * f;
    }
    const g = grad(x, y, z); const gl = Math.hypot(g[0], g[1], g[2]) || 1;
    const n0 = g[0] / gl, n1 = g[1] / gl, n2 = g[2] / gl;
    pos[3 * i] = x; pos[3 * i + 1] = y; pos[3 * i + 2] = z;
    nrm[3 * i] = n0; nrm[3 * i + 1] = n1; nrm[3 * i + 2] = n2;
    // ambient occlusion from the SDF (incl. ground)
    let occ = 0, sca = 1;
    for (let k = 1; k <= 5; k++) {
      const hh = 0.012 + 0.028 * k * k / 5;
      occ += (hh - sdfAO(x + n0 * hh, y + n1 * hh, z + n2 * hh)) * sca;
      sca *= 0.75;
    }
    const ao = clamp(1 - 2.2 * occ, 0, 1);
    const [nose, hoof, dirt, inner, ring, face, hx_, hs_, ht_] = cow.classify(x, y, z);
    hl[3 * i] = hx_; hl[3 * i + 1] = hs_; hl[3 * i + 2] = ht_;
    mat[4 * i] = ao; mat[4 * i + 1] = nose; mat[4 * i + 2] = hoof; mat[4 * i + 3] = dirt;
    ext[3 * i] = inner; ext[3 * i + 1] = ring; ext[3 * i + 2] = face;
  }
  // orientation check via signed volume
  let vol = 0;
  for (let t = 0; t < I.length; t += 3) {
    const a = 3 * I[t], b = 3 * I[t + 1], c = 3 * I[t + 2];
    vol += pos[a] * (pos[b + 1] * pos[c + 2] - pos[b + 2] * pos[c + 1]) - pos[a + 1] * (pos[b] * pos[c + 2] - pos[b + 2] * pos[c]) + pos[a + 2] * (pos[b] * pos[c + 1] - pos[b + 1] * pos[c]);
  }
  if (vol < 0) for (let t = 0; t < I.length; t += 3) { const tmp = I[t + 1]; I[t + 1] = I[t + 2]; I[t + 2] = tmp; }

  // eyeballs (separate high-res spheres, flagged)
  const EP = [], EN = [], EI = [];
  const seg = 24, rings = 16;
  for (const ec of cow.eyes) {
    const base = EP.length / 3;
    const cRest = cow.headLocalToRest(ec[0], ec[1], ec[2]);
    for (let r = 0; r <= rings; r++) {
      const th = (r / rings) * Math.PI;
      for (let sg = 0; sg <= seg; sg++) {
        const ph = (sg / seg) * Math.PI * 2;
        const u = [Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph)];
        const pr = cow.headRestToPosed([cRest[0] + u[0] * cow.eyeR, cRest[1] + u[1] * cow.eyeR, cRest[2] + u[2] * cow.eyeR]);
        const nr = cow.headDirToPosed(u);
        EP.push(...pr); EN.push(...nr);
      }
    }
    for (let r = 0; r < rings; r++) for (let sg = 0; sg < seg; sg++) {
      const a = base + r * (seg + 1) + sg, b = a + seg + 1;
      EI.push(a, a + 1, b, a + 1, b + 1, b);
    }
  }
  // check eye winding against normals
  {
    const ti = ((rings / 2) * seg) * 6; // a triangle on the equator ring
    const a = EI[ti] * 3, b = EI[ti + 1] * 3, c = EI[ti + 2] * 3;
    const ux = EP[b] - EP[a], uy = EP[b + 1] - EP[a + 1], uz = EP[b + 2] - EP[a + 2];
    const vx = EP[c] - EP[a], vy = EP[c + 1] - EP[a + 1], vz = EP[c + 2] - EP[a + 2];
    const fn = [uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx];
    if (fn[0] * EN[a] + fn[1] * EN[a + 1] + fn[2] * EN[a + 2] < 0) for (let t = 0; t < EI.length; t += 3) { const tmp = EI[t + 1]; EI[t + 1] = EI[t + 2]; EI[t + 2] = tmp; }
  }
  const tv = nv + EP.length / 3;
  const POS = new Float32Array(tv * 3), NRM = new Float32Array(tv * 3), MAT = new Float32Array(tv * 4), EYE = new Float32Array(tv), EXT = new Float32Array(tv * 3), HL = new Float32Array(tv * 3);
  POS.set(pos); NRM.set(nrm); MAT.set(mat); EYE.set(eye); EXT.set(ext); HL.set(hl);
  POS.set(EP, nv * 3); NRM.set(EN, nv * 3);
  for (let i = nv; i < tv; i++) { MAT[4 * i] = 1; EYE[i] = 1; EXT[3 * i + 2] = 1; }
  const IDX = new Uint32Array(I.length + EI.length);
  IDX.set(I); for (let i = 0; i < EI.length; i++) IDX[I.length + i] = EI[i] + nv;
  return { positions: POS, normals: NRM, mat: MAT, eye: EYE, ext: EXT, hl: HL, indices: IDX, stats: { grid: [nx, ny, nz], exact, verts: tv, tris: IDX.length / 3 } };
}

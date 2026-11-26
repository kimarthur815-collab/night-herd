// Right hand in a leather gauntlet glove, gripping a lantern bail (signed distance field).
// Frame: origin = centre of the bail grip, grip axis = x, up = y, forward (away from you) = -z.
const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
function smin(a, b, k) { const h = Math.max(k - Math.abs(a - b), 0) / k; return Math.min(a, b) - h * h * k * 0.25; }
function ell(x, y, z, rx, ry, rz) {
  const ax = x / rx, ay = y / ry, az = z / rz, k0 = Math.sqrt(ax * ax + ay * ay + az * az);
  const bx = ax / rx, by = ay / ry, bz = az / rz, k1 = Math.sqrt(bx * bx + by * by + bz * bz);
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
  const l2 = bax * bax + bay * bay + baz * baz, rr = r1 - r2, a2 = l2 - rr * rr, il2 = 1 / l2, srr = Math.sign(rr);
  return (px, py, pz) => {
    const pax = px - a[0], pay = py - a[1], paz = pz - a[2];
    const y = pax * bax + pay * bay + paz * baz, z = y - l2;
    const qx = pax * l2 - bax * y, qy = pay * l2 - bay * y, qz = paz * l2 - baz * y;
    const x2 = qx * qx + qy * qy + qz * qz, y2 = y * y * l2, z2 = z * z * l2, k = srr * rr * rr * x2;
    if (Math.sign(z) * a2 * z2 > k) return Math.sqrt(x2 + z2) * il2 - r2;
    if (Math.sign(y) * a2 * y2 < k) return Math.sqrt(x2 + y2) * il2 - r1;
    return (Math.sqrt(x2 * a2 * il2) + y * rr) * il2 - r1;
  };
}
const deg = (d) => (d * Math.PI) / 180;
const onGrip = (x, R, th) => [x, R * Math.cos(deg(th)), -R * Math.sin(deg(th))];

export class Hand {
  constructor() {
    // hook grip: the bail rests in the fingers, the knuckles sit above and behind it
    const F = [
      { x: -0.029, r: 0.0098, mcp: [0.034, 0.02], R: [0.0215, 0.021, 0.0205], th: [38, 112, 178] },
      { x: -0.0095, r: 0.0103, mcp: [0.036, 0.022], R: [0.0215, 0.021, 0.0205], th: [36, 115, 184] },
      { x: 0.0098, r: 0.0099, mcp: [0.035, 0.021], R: [0.0215, 0.021, 0.0205], th: [38, 113, 180] },
      { x: 0.0285, r: 0.0087, mcp: [0.031, 0.016], R: [0.021, 0.0205, 0.02], th: [44, 112, 170] },
    ];
    this.fingers = F.map((f) => {
      const m = [f.x, f.mcp[0], f.mcp[1]], p = onGrip(f.x, f.R[0], f.th[0]), d = onGrip(f.x, f.R[1], f.th[1]), t = onGrip(f.x, f.R[2], f.th[2]);
      return { segs: [roundCone(m, p, f.r, f.r * 0.96), roundCone(p, d, f.r * 0.96, f.r * 0.9), roundCone(d, t, f.r * 0.9, f.r * 0.8)], knuckle: [f.x, f.mcp[0] + 0.004, f.mcp[1] + 0.002, f.r * 1.06], joints: [p, d] };
    });
    // the thumb lies along the side of the index finger
    this.thumbBase = [-0.04, 0.021, 0.071];
    this.thumb = [
      roundCone([-0.042, 0.022, 0.066], [-0.048, 0.02, 0.04], 0.013, 0.0115),
      roundCone([-0.048, 0.02, 0.04], [-0.044, 0.02, 0.016], 0.0115, 0.0105),
      roundCone([-0.044, 0.02, 0.016], [-0.036, 0.022, 0.0], 0.0105, 0.0092),
    ];
    this.W1 = [0.004, 0.033, 0.101];
    // the forearm runs back toward the shoulder: to the right, down and toward you
    const dF = [0.3, -0.42, 1.0], l = Math.hypot(...dF);
    this.dF = dF.map((v) => v / l);
    const at = (t) => [this.W1[0] + this.dF[0] * t, this.W1[1] + this.dF[1] * t, this.W1[2] + this.dF[2] * t];
    this.wrist = roundCone(this.W1, at(0.066), 0.0245, 0.026);
    this.cuff = roundCone(at(0.045), at(0.15), 0.036, 0.055);
    this.sleeve = roundCone(at(0.12), at(0.34), 0.047, 0.056);
    this.stitches = [-0.013, 0.0, 0.013].map((x) => roundCone([x, 0.05, 0.093], [x * 1.4, 0.048, 0.033], 0.0012, 0.0011));
  }
  glove(x, y, z) {
    let d = rbox(x, y - 0.03, z - 0.058, 0.042, 0.0135, 0.04, 0.012); // palm
    d = smin(d, ell(x, y - 0.037, z - 0.061, 0.045, 0.012, 0.045), 0.008); // back of the hand
    for (const f of this.fingers) {
      let fd = f.segs[0](x, y, z);
      fd = smin(fd, f.segs[1](x, y, z), 0.004);
      fd = smin(fd, f.segs[2](x, y, z), 0.004);
      for (const j of f.joints) fd = smin(fd, sph(x - j[0], y - j[1], z - j[2], 0.0096), 0.003); // knotted leather at the joints
      d = smin(d, fd, 0.0025);
      const k = f.knuckle;
      d = smin(d, sph(x - k[0], y - k[1], z - k[2], k[3]), 0.006);
    }
    const tb = this.thumbBase;
    let td = sph(x - tb[0], y - tb[1], z - tb[2], 0.017);
    for (const s of this.thumb) td = smin(td, s(x, y, z), 0.005);
    d = smin(d, td, 0.01);
    d = smin(d, this.wrist(x / 1.3, y, z), 0.014);
    for (const s of this.stitches) d = smin(d, s(x, y, z), 0.0015);
    return d;
  }
  parts(x, y, z) {
    const g = this.glove(x, y, z);
    const c = this.cuff(x / 1.12, y, z);
    // wool folds on the sleeve
    const px = x - this.W1[0], py = y - this.W1[1], pz = z - this.W1[2];
    const along = px * this.dF[0] + py * this.dF[1] + pz * this.dF[2];
    const fold = 0.0022 * Math.sin(along * 95 + Math.sin(along * 23) * 2.0 + Math.atan2(py, px) * 1.5);
    const s = this.sleeve(x, y, z) + fold;
    return [g, c, s];
  }
  eval(x, y, z) {
    const [g, c, s] = this.parts(x, y, z);
    return smin(smin(g, c, 0.008), s, 0.004);
  }
  part(x, y, z) {
    const [g, c, s] = this.parts(x, y, z);
    if (s < c && s < g) return 2;
    if (c < g) return 1;
    return 0;
  }
}

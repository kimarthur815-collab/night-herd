// Right hand in the same leather glove, wrapped round the grip of a Colt Single Action Army (signed distance field).
// Frame: the revolver's own: x = its right side, y = up, +z = back toward you (the muzzle points to -z),
// bore axis at y = 0. The thumb is a separate piece, so it can reach up and pull the hammer back.
const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
function smin(a, b, k) { const h = Math.max(k - Math.abs(a - b), 0) / k; return Math.min(a, b) - h * h * k * 0.25; }
function sph(x, y, z, c, r) { return Math.hypot(x - c[0], y - c[1], z - c[2]) - r; }
function cone(a, b, r1, r2) { // capsule with a radius going from r1 to r2
  const vx = b[0] - a[0], vy = b[1] - a[1], vz = b[2] - a[2], l2 = vx * vx + vy * vy + vz * vz;
  return (x, y, z) => {
    const wx = x - a[0], wy = y - a[1], wz = z - a[2], t = clamp((wx * vx + wy * vy + wz * vz) / l2, 0, 1);
    return Math.hypot(wx - vx * t, wy - vy * t, wz - vz * t) - (r1 + (r2 - r1) * t);
  };
}
// the grip's own frame: A runs down the grip, F points out of its front strap, R to the gun's right
const A = [0, -0.944, 0.33], F = [0, -0.33, -0.944], R = [1, 0, 0], G0 = [0, -0.075, 0.046];
export const gp = (r, h, f) => [G0[0] + R[0] * r + A[0] * h + F[0] * f, G0[1] + R[1] * r + A[1] * h + F[1] * f, G0[2] + R[2] * r + A[2] * h + F[2] * f];
const deg = (d) => (d * Math.PI) / 180;
// a point on a finger's path round the grip: angle from the right side toward the front, at height h
const wrap = (h, ang, extra = 0) => { const a = deg(ang), er = 0.0158 + extra, ef = 0.0205 + extra; return gp(er * Math.cos(a), h, ef * Math.sin(a)); };

export class GunHand {
  constructor() {
    // middle, ring and little fingers wrap the front strap; knuckles on the right side
    const fr = [0.0099, 0.0094, 0.0084];
    this.fingers = [-0.021, -0.0005, 0.019].map((h, i) => {
      const r = fr[i], e = r * 0.98;
      const m = wrap(h, -40, 0.019), p = wrap(h, 48, e), d = wrap(h, 112 - i * 4, e), t = wrap(h, 166 - i * 8, e * 0.95);
      return { segs: [cone(m, p, r, r * 0.96), cone(p, d, r * 0.96, r * 0.9), cone(d, t, r * 0.9, r * 0.8)], joints: [p, d], knuckle: [...wrap(h, -46, 0.025), r * 1.08] };
    });
    // the index finger leaves the grip and curls round the trigger
    const ri = 0.0096;
    const im = gp(0.0215, -0.044, -0.006), ip = gp(0.013, -0.046, 0.034), id = gp(-0.002, -0.041, 0.043), it = gp(-0.004, -0.032, 0.031);
    this.index = { segs: [cone(im, ip, ri, ri * 0.96), cone(ip, id, ri * 0.96, ri * 0.9), cone(id, it, ri * 0.9, ri * 0.8)], joints: [ip, id], knuckle: [...gp(0.026, -0.047, -0.01), ri * 1.08] };
    // palm on the right side and the back strap, the web of the hand high up behind the hammer
    this.palm = [cone(gp(0.021, -0.04, -0.012), gp(0.022, 0.03, -0.012), 0.017, 0.019), cone(gp(0.012, -0.046, -0.026), gp(0.014, 0.028, -0.028), 0.014, 0.016)];
    this.heel = cone(gp(0.004, 0.025, -0.03), gp(0.02, 0.035, -0.022), 0.015, 0.017);
    this.web = cone(gp(0.012, -0.052, -0.024), gp(-0.008, -0.056, -0.03), 0.011, 0.01);
    // wrist: the forearm runs back, down and out to the right
    const dF = [0.26, -0.36, 1.0], l = Math.hypot(...dF);
    this.dF = dF.map((v) => v / l);
    this.W1 = gp(0.017, 0.03, -0.04);
    const at = (t) => [this.W1[0] + this.dF[0] * t, this.W1[1] + this.dF[1] * t, this.W1[2] + this.dF[2] * t];
    this.wrist = cone(this.W1, at(0.07), 0.026, 0.028);
    // thumb: from the ball of the thumb behind the grip, forward along the left side of the frame
    this.thumbPivot = gp(-0.006, -0.03, -0.035);
    const t0 = gp(-0.017, -0.05, -0.02), t1 = gp(-0.026, -0.062, 0.008), t2 = gp(-0.025, -0.068, 0.034), t3 = gp(-0.019, -0.07, 0.05);
    this.thumbBall = cone(this.thumbPivot, t0, 0.017, 0.015);
    this.thumbSegs = [cone(t0, t1, 0.0135, 0.0122), cone(t1, t2, 0.0122, 0.011), cone(t2, t3, 0.011, 0.0095)];
    this.thumbJoints = [t1, t2];
  }
  // everything but the thumb
  glove(x, y, z) {
    let d = smin(this.palm[0](x, y, z), this.palm[1](x, y, z), 0.012);
    d = smin(d, this.heel(x, y, z), 0.01);
    d = smin(d, this.web(x, y, z), 0.008);
    for (const f of [...this.fingers, this.index]) {
      let fd = smin(smin(f.segs[0](x, y, z), f.segs[1](x, y, z), 0.004), f.segs[2](x, y, z), 0.004);
      for (const j of f.joints) fd = smin(fd, sph(x, y, z, j, 0.0094), 0.003); // knotted leather at the joints
      d = smin(d, fd, 0.0028);
      d = smin(d, sph(x, y, z, f.knuckle, f.knuckle[3]), 0.006);
    }
    d = smin(d, this.thumbBall(x, y, z), 0.012); // the ball of the thumb stays with the hand
    d = smin(d, this.wrist(x, y, z), 0.014);
    return d;
  }
  thumb(x, y, z) {
    let d = this.thumbSegs[0](x, y, z);
    for (const s of this.thumbSegs.slice(1)) d = smin(d, s(x, y, z), 0.004);
    for (const j of this.thumbJoints) d = smin(d, sph(x, y, z, j, 0.012), 0.003);
    return d;
  }
}

// Revolvers of the 1880s, sculpted as signed distance fields and baked part by part (each part one material,
// the cylinder, hammer and trigger on their own so they can move).
// Frame: x = the gun's right, y = up, +z = back toward the shooter; the muzzle points to -z; bore axis y = 0.
const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const smin = (a, b, k) => { const h = Math.max(k - Math.abs(a - b), 0) / k; return Math.min(a, b) - h * h * k * 0.25; };
const smax = (a, b, k) => -smin(-a, -b, k);

// exact signed distance to a polygon in the (z, y) plane
function poly(P) {
  const n = P.length;
  return (z, y) => {
    let d = Infinity, s = 1;
    for (let i = 0, j = n - 1; i < n; j = i, i++) {
      const ex = P[j][0] - P[i][0], ey = P[j][1] - P[i][1], wx = z - P[i][0], wy = y - P[i][1];
      const t = clamp((wx * ex + wy * ey) / (ex * ex + ey * ey), 0, 1), bx = wx - ex * t, by = wy - ey * t;
      d = Math.min(d, bx * bx + by * by);
      const c1 = y >= P[i][1], c2 = y < P[j][1], c3 = ex * wy > ey * wx;
      if ((c1 && c2 && c3) || (!c1 && !c2 && !c3)) s = -s;
    }
    return s * Math.sqrt(d);
  };
}
// round the corners of a polygon with quadratic arcs
function rounded(pts, r, n = 4) {
  const out = [];
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i], a = pts[(i - 1 + pts.length) % pts.length], b = pts[(i + 1) % pts.length];
    const da = Math.hypot(a[0] - p[0], a[1] - p[1]), db = Math.hypot(b[0] - p[0], b[1] - p[1]), k = Math.min(r, da * 0.45, db * 0.45);
    const p0 = [p[0] + ((a[0] - p[0]) / da) * k, p[1] + ((a[1] - p[1]) / da) * k], p1 = [p[0] + ((b[0] - p[0]) / db) * k, p[1] + ((b[1] - p[1]) / db) * k];
    for (let j = 0; j <= n; j++) { const t = j / n, u = 1 - t; out.push([u * u * p0[0] + 2 * u * t * p[0] + t * t * p1[0], u * u * p0[1] + 2 * u * t * p[1] + t * t * p1[1]]); }
  }
  return out;
}
// a flat profile given thickness 2w along x, every edge rounded by r
function slab(d2, x, w, r) {
  const a = d2 + r, b = Math.abs(x) - w + r;
  return Math.min(Math.max(a, b), 0) + Math.hypot(Math.max(a, 0), Math.max(b, 0)) - r;
}
// a round bar along z from z0 to z1 at (cx, cy), radius r, ends rounded by e
function barZ(x, y, z, cx, cy, z0, z1, r, e) {
  const a = Math.hypot(x - cx, y - cy) - r + e, b = Math.abs(z - (z0 + z1) / 2) - (z1 - z0) / 2 + e;
  return Math.min(Math.max(a, b), 0) + Math.hypot(Math.max(a, 0), Math.max(b, 0)) - e;
}
function box(x, y, z, cx, cy, cz, hx, hy, hz, r) {
  const qx = Math.abs(x - cx) - hx + r, qy = Math.abs(y - cy) - hy + r, qz = Math.abs(z - cz) - hz + r;
  return Math.hypot(Math.max(qx, 0), Math.max(qy, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, qy, qz), 0) - r;
}
// a Catmull-Rom curve through the points, n steps per span
function smooth(pts, n = 4) {
  const out = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
    for (let k = 0; k < n; k++) {
      const t = k / n, t2 = t * t, t3 = t2 * t;
      out.push(p1.map((_, c) => 0.5 * (2 * p1[c] + (p2[c] - p0[c]) * t + (2 * p0[c] - 5 * p1[c] + 4 * p2[c] - p3[c]) * t2 + (3 * p1[c] - p0[c] - 3 * p2[c] + p3[c]) * t3)));
    }
  }
  out.push(pts[pts.length - 1]);
  return out;
}
// a tube swept along a smooth curve through [x, y, z] points; sx widens it sideways (flat bands)
function sweep(pts0, r, sx = 1) {
  const pts = smooth(pts0);
  return (x, y, z) => {
    const X = x / sx;
    let d = Infinity;
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], vx = (b[0] - a[0]) / sx, vy = b[1] - a[1], vz = b[2] - a[2];
      const wx = X - a[0] / sx, wy = y - a[1], wz = z - a[2], l2 = vx * vx + vy * vy + vz * vz;
      const t = clamp((wx * vx + wy * vy + wz * vz) / l2, 0, 1);
      d = Math.min(d, Math.hypot(wx - vx * t, wy - vy * t, wz - vz * t));
    }
    return (d - r) * Math.min(1, sx);
  };
}
const zy = (pts, x = 0) => pts.map(([z, y]) => [x, y, z]);
const torusZ = (x, y, z, cx, cy, cz, R, r) => Math.hypot(Math.hypot(x - cx, y - cy) - R, z - cz) - r; // ring axis along z
const torusXa = (x, y, z, cx, cy, cz, R, r) => Math.hypot(Math.hypot(y - cy, z - cz) - R, x - cx) - r; // ring axis along x
// a screw head on a side of the frame: a low dome with its slot
function screw(x, y, z, side, cz, cy, xs, r) {
  const px = (x - xs) * side, rr = Math.hypot(y - cy, z - cz); // px: outward from the surface
  let d = Math.max(rr - r, Math.abs(px + 0.002) - 0.0024);
  d = smin(d, Math.hypot(rr, px + 0.0016) - r * 1.05, 0.0004); // a low dome
  return Math.max(d, -Math.max(Math.abs(z - cz + (y - cy) * 0.4) - 0.00035, -(px - 0.0002))); // and its slot
}

// ---------------- Colt Single Action Army ----------------
export function coltSAA(barrelInches) {
  const L = barrelInches * 0.0254, zCyl = -0.0406, zMuz = zCyl - L, CY = -0.0135, R = 0.0211, CR = 0.0135;
  const frame2 = poly(rounded([[-0.0565, -0.0345], [-0.0565, 0.0105], [-0.0515, 0.0148], [0.0035, 0.0148], [0.0105, 0.0124], [0.0185, 0.0082], [0.0262, 0.0042],
    [0.0335, 0.0002], [0.0408, -0.0062], [0.046, -0.0135], [0.04, -0.021], [0.03, -0.0305], [0.0175, -0.0438], [-0.0035, -0.0442], [-0.042, -0.0442], [-0.052, -0.0405]], 0.0022));
  const hammerRoom = (x, y, z) => -box(x, y, z, 0, 0.009, 0.033, 0.0049, 0.0215, 0.025, 0.0006); // the cocked hammer swings back into the hump
  const window2 = poly(rounded([[-0.0414, -0.0354], [0.0012, -0.0354], [0.0012, 0.0091], [-0.0414, 0.0091]], 0.0025));
  const gy = CY + CR * 0.5, gate2 = poly(rounded([[0.0004, gy - 0.0074], [0.0088, gy - 0.0074], [0.0096, gy + 0.0062], [0.0004, gy + 0.0072]], 0.0022));
  const frame = (x, y, z) => {
    const w = 0.0125 - 0.0058 * sstep(0.0045, 0.0105, y); // the top strap is narrower than the sides
    let d = slab(Math.max(frame2(z, y), -window2(z, y)), x, w, 0.0012);
    d = Math.max(d, -box(x, y, z, 0, 0.0, 0.0188, 0.0049, 0.024, 0.0148, 0.0006), hammerRoom(x, y, z)); // the hammer's slot
    d = Math.max(d, -box(x, y, z, 0, 0.0175, 0.0012, 0.0011, 0.0045, 0.0042, 0.0003)); // rear sight groove
    d = Math.max(d, -barZ(x, y, z, 0, CY, -0.062, -0.05, 0.0031, 0.0003)); // base pin hole
    // the recoil shield swells round behind the cylinder to cover the cartridge heads
    d = smin(d, barZ(x, y, z, 0, CY, 0.0006, 0.0088, 0.0206, 0.0034), 0.004);
    d = Math.max(d, -box(x, y, z, 0, 0.0, 0.0188, 0.0049, 0.024, 0.0148, 0.0006), hammerRoom(x, y, z));
    d = Math.max(d, -Math.max(Math.abs(gate2(z, y)) - 0.00016, 0.011 - x)); // the loading gate's seam
    d = Math.max(d, -box(x, y, z, 0.021, gy - 0.0068, 0.0046, 0.006, 0.0007, 0.0012, 0.0004)); // and the notch for a thumbnail
    return d;
  };
  // barrel: a little thicker at the frame, the bore dark at the muzzle; ejector housing on the right; front sight; base pin
  const ez1 = zMuz + (barrelInches > 6 ? 0.036 : 0.022);
  const barrel = (x, y, z) => {
    const t = clamp((z - zMuz) / (-0.056 - zMuz), 0, 1), r = 0.0087 + 0.0007 * t;
    let d = barZ(x, y, z, 0, 0, zMuz, -0.05, r, 0.0011);
    if (z < zMuz + 0.04) d = Math.max(d, -(Math.hypot(x, y) - 0.0057));
    const fs = Math.hypot(z - (zMuz + 0.0088), y - 0.0055) - 0.0062; // half-moon front sight
    d = Math.min(d, slab(Math.max(fs, 0.0082 - y), x, 0.0012, 0.0004));
    const hx = CR * 0.866, hy = CY + CR * 0.5; // in line with the chamber at the gate
    d = smin(d, barZ(x, y, z, hx, hy, ez1, -0.0555, 0.0047, 0.0016), 0.003);
    d = Math.max(d, -box(x, y, z, hx + 0.0047, hy, (ez1 - 0.0555) / 2 + 0.006, 0.0012, 0.0011, (-0.0555 - ez1) / 2 - 0.014, 0.0004)); // the rod's slot
    d = Math.min(d, barZ(x, y, z, hx, hy, ez1 - 0.0075, ez1 + 0.0015, 0.0041, 0.0012)); // ejector head
    d = Math.min(d, barZ(x, y, z, 0, CY, -0.0632, -0.054, 0.0031, 0.0007)); // base pin head
    return d;
  };
  // grip frame: back strap curving up over the hump behind the hammer, front strap, and the trigger guard
  const hump = sweep(zy([[0.0262, 0.0042], [0.0335, 0.0002], [0.0408, -0.0062], [0.047, -0.0148]]), 0.0043, 2.1);
  const BACK = [[0.047, -0.0148], [0.0525, -0.025], [0.0575, -0.0365], [0.0605, -0.049], [0.0645, -0.062], [0.0685, -0.075], [0.0745, -0.088], [0.082, -0.099], [0.0895, -0.1065], [0.095, -0.1105]];
  const FRONT = [[0.0172, -0.0455], [0.0186, -0.0505], [0.0215, -0.0605], [0.0255, -0.072], [0.0305, -0.084], [0.0362, -0.0955], [0.0425, -0.1055], [0.0475, -0.1112]];
  const back = sweep(zy(BACK), 0.0043, 1.38), front = sweep(zy(FRONT), 0.0038, 1.3);
  const guard = sweep(zy([[-0.0042, -0.0446], [-0.0104, -0.0512], [-0.0114, -0.0598], [-0.0064, -0.0667], [0.0036, -0.0697], [0.0126, -0.0672], [0.0176, -0.0602], [0.0186, -0.0505]]), 0.0026, 1.85);
  const straps = (x, y, z) => Math.max(smin(smin(smin(hump(x, y, z), back(x, y, z), 0.004), front(x, y, z), 0.002), guard(x, y, z), 0.0025), hammerRoom(x, y, z));
  // one-piece grip, the "plough handle", fuller at the bottom
  const grip2 = poly(rounded([[0.0165, -0.0395], ...FRONT.slice(1), [0.058, -0.1145], [0.07, -0.1158], [0.082, -0.115], [0.091, -0.1128], ...BACK.slice(1).reverse(),
    [0.049, -0.011], [0.041, -0.0175], [0.031, -0.0275]], 0.004));
  const grip = (x, y, z) => slab(grip2(z, y), x, 0.0122 + 0.0045 * sstep(-0.035, -0.1, y), 0.0074);
  // screws: hammer, bolt and trigger screws on the left, the base pin latch at the front left, the ejector housing screw
  const screws = (x, y, z) => Math.min(
    screw(x, y, z, -1, 0.0135, -0.0115, -0.0125, 0.0027), screw(x, y, z, -1, -0.001, -0.0368, -0.0125, 0.0025), screw(x, y, z, -1, 0.0087, -0.0379, -0.0125, 0.0024),
    screw(x, y, z, -1, -0.0505, -0.0128, -0.0125, 0.0022), screw(x, y, z, 1, -0.08, CY + CR * 0.5, CR * 0.866 + 0.0047, 0.0016));
  // the cylinder (its own origin on its axis): six chambers, six flutes, the bolt notches, chamfered ends
  const cylinder = (x, y, z) => {
    let d = barZ(x, y, z, 0, 0, zCyl, 0.0, R, 0.0012);
    for (let k = 0; k < 6; k++) {
      const a = Math.PI / 2 + (k + 0.5) * (Math.PI / 3);
      d = smax(d, -barZ(x, y, z, Math.cos(a) * 0.0225, Math.sin(a) * 0.0225, -0.0318, -0.0082, 0.0042, 0.0042), 0.0006);
      const c = Math.PI / 2 + k * (Math.PI / 3);
      d = Math.max(d, -barZ(x, y, z, Math.cos(c) * CR, Math.sin(c) * CR, zCyl - 0.002, zCyl + 0.016, 0.0061, 0.0003));
      // bolt stop notch with its lead-in, behind each chamber
      const lx = Math.cos(c), ly = Math.sin(c), radial = x * lx + y * ly, tang = -x * ly + y * lx;
      d = Math.max(d, -Math.max(Math.abs(tang) - 0.0013, radial - (R + 0.001), (R - 0.0011) - radial, Math.abs(z + 0.0058) - 0.0018));
    }
    d = Math.max(d, -barZ(x, y, z, 0, 0, zCyl - 0.002, zCyl + 0.012, 0.0031, 0.0003)); // base pin hole
    return d;
  };
  // hammer (origin at its pivot): the face with the firing pin, a high spur, chequered on top
  const hp = [0.0135, -0.0115];
  const ham2 = poly(rounded([[0.0045, -0.0035], [0.0055, 0.0055], [0.01, 0.0118], [0.017, 0.016], [0.025, 0.0215], [0.032, 0.0255], [0.0378, 0.0264], [0.041, 0.024],
    [0.0404, 0.0194], [0.036, 0.0148], [0.028, 0.0084], [0.022, 0.001], [0.0195, -0.013], [0.0145, -0.0205], [0.0085, -0.0185], [0.006, -0.01]], 0.0016));
  const hammer = (x, y, z) => {
    const Y = y + hp[1], Z = z + hp[0];
    const spur = sstep(0.024, 0.03, Z);
    let d = slab(ham2(Z, Y), x, 0.0045 + 0.001 * spur, 0.0009);
    d = Math.min(d, barZ(x, Y, Z, 0, 0.0005, 0.0018, 0.0052, 0.0011, 0.0004)); // firing pin
    if (spur > 0.5 && Y > 0.0175) d += 0.00022 * Math.max(Math.abs(Math.sin((Z + x) * 2600)), Math.abs(Math.sin((Z - x) * 2600))); // chequering
    return d;
  };
  // trigger (origin at its pivot): a slim curved blade
  const tp = [0.0087, -0.0379];
  const trigBlade = sweep(zy([[0.0048, -0.0425], [0.0047, -0.0495], [0.0064, -0.0552], [0.0092, -0.0594]]), 0.0025, 1.05);
  const trigger = (x, y, z) => smin(trigBlade(x, y + tp[1], z + tp[0]), box(x, y + tp[1], z + tp[0], 0, -0.0405, 0.0062, 0.0024, 0.0035, 0.0032, 0.001), 0.002);
  return {
    name: `colt${barrelInches}`, zMuz, cylY: CY, chamberR: CR, chamberZ: zCyl, hammerPivot: hp, triggerPivot: tp,
    parts: {
      frame: { sdf: frame, min: [-0.0255, -0.047, -0.06], max: [0.0255, 0.018, 0.05] },
      barrel: { sdf: barrel, min: [-0.012, -0.0175, zMuz - 0.002], max: [0.0185, 0.016, -0.048] },
      straps: { sdf: straps, min: [-0.0105, -0.12, -0.016], max: [0.0105, 0.011, 0.103] },
      grip: { sdf: grip, min: [-0.019, -0.12, 0.012], max: [0.019, -0.006, 0.1] },
      screws: { sdf: screws, min: [-0.0145, -0.042, -0.085], max: [0.0185, -0.003, 0.019], step: 0.00022 },
      cylinder: { sdf: (x, y, z) => cylinder(x, y - CY, z), min: [-0.023, CY - 0.023, zCyl - 0.002], max: [0.023, CY + 0.023, 0.002], origin: [0, CY, 0] },
      hammer: { sdf: hammer, min: [-0.007, -0.012, -0.012], max: [0.007, 0.04, 0.03], origin: [0, 0, 0], pivot: hp },
      trigger: { sdf: trigger, min: [-0.004, -0.025, -0.008], max: [0.004, 0.0, 0.004], origin: [0, 0, 0], pivot: tp },
    },
  };
}

// ---------------- Smith & Wesson Model 3 Schofield ----------------
export function schofield() {
  const L = 7 * 0.0254, zCyl = -0.0363, zMuz = -0.0378 - L, CY = -0.0128, R = 0.0203, CR = 0.0127;
  // the frame is a cradle under and behind the cylinder: the top strap belongs to the barrel, which tips down to load
  const frame2 = poly(rounded([[-0.0378, -0.0345], [-0.0455, -0.0325], [-0.0505, -0.0375], [-0.0475, -0.0435], [-0.0045, -0.0435], [0.0175, -0.0455],
    [0.0215, -0.06], [0.0285, -0.076], [0.037, -0.091], [0.046, -0.1035], [0.055, -0.1115], [0.064, -0.1155], [0.075, -0.1165], [0.086, -0.1145], [0.094, -0.1085],
    [0.0955, -0.1015], [0.0925, -0.0915], [0.0865, -0.077], [0.079, -0.061], [0.0715, -0.046], [0.064, -0.032], [0.056, -0.019], [0.047, -0.0075], [0.039, 0.0012],
    [0.03, 0.0075], [0.021, 0.0105], [0.0105, 0.0105], [0.0045, 0.0105], [0.0008, 0.0075], [0.0008, -0.0345]], 0.0018));
  const latch = sweep([[-0.0046, 0.0102, 0.0088], [-0.0046, 0.0168, 0.0094], [-0.0028, 0.0181, 0.0096], [0.0028, 0.0181, 0.0096], [0.0046, 0.0168, 0.0094], [0.0046, 0.0102, 0.0088]], 0.0013);
  const guard = sweep(zy([[-0.0035, -0.0435], [-0.0095, -0.0505], [-0.0097, -0.0605], [-0.0035, -0.0678], [0.007, -0.0698], [0.0155, -0.0648], [0.0185, -0.0548], [0.0186, -0.047]]), 0.0027, 1.7);
  const frame = (x, y, z) => {
    const w = 0.0122 - 0.0046 * sstep(-0.044, -0.051, y); // the grip frame is narrow; the walnut panels sit on it
    let d = slab(frame2(z, y), x, w, 0.0012);
    d = Math.max(d, -box(x, y, z, 0, 0.0, 0.0175, 0.0049, 0.022, 0.0135, 0.0006), -box(x, y, z, 0, 0.009, 0.032, 0.0049, 0.0215, 0.026, 0.0006)); // hammer slot, and room for it cocked
    d = smin(d, box(x, y, z, 0, 0.011, 0.008, 0.0058, 0.0016, 0.0042, 0.0008), 0.001); // the latch block
    d = Math.min(d, latch(x, y, z)); // the stirrup you pull back to open it
    d = smin(d, guard(x, y, z), 0.0022);
    d = smin(d, barZ(x, y, z, 0, CY, 0.0005, 0.0078, 0.0198, 0.003), 0.0035); // recoil shield
    d = Math.max(d, -box(x, y, z, 0, 0.0, 0.0175, 0.0049, 0.022, 0.0135, 0.0006), -box(x, y, z, 0, 0.009, 0.032, 0.0049, 0.0215, 0.026, 0.0006));
    // the lanyard swivel under the butt
    d = Math.min(d, Math.max(Math.abs(x) - 0.0016, Math.hypot(z - 0.075, y + 0.1188) - 0.0034), torusXa(x, y, z, 0, -0.1215, 0.075, 0.0031, 0.0011));
    return d;
  };
  const barrel = (x, y, z) => {
    const t = clamp((z - zMuz) / (-0.0378 - zMuz), 0, 1), r = 0.0082 + 0.0005 * t;
    let d = barZ(x, y, z, 0, 0, zMuz, -0.036, r, 0.001);
    if (z < zMuz + 0.04) d = Math.max(d, -(Math.hypot(x, y) - 0.0057));
    d = smin(d, box(x, y, z, 0, 0.0086, (zMuz - 0.0378) / 2, 0.0029, 0.0031, (-0.0378 - zMuz) / 2 - 0.0012, 0.0008), 0.0015); // the rib
    d = smin(d, box(x, y, z, 0, 0.0107, -0.0177, 0.0066, 0.0029, 0.0219, 0.0012), 0.0016); // top strap over the cylinder
    d = Math.max(d, -box(x, y, z, 0, 0.0145, 0.0025, 0.001, 0.003, 0.0022, 0.0003)); // rear sight notch
    const lug2 = poly(rounded([[-0.0378, 0.0095], [-0.0378, -0.033], [-0.045, -0.034], [-0.0505, -0.0305], [-0.0525, -0.012], [-0.05, 0.004], [-0.044, 0.0095]], 0.002));
    d = smin(d, slab(lug2(z, y), x, 0.0106, 0.0012), 0.0014);
    d = Math.min(d, Math.max(Math.hypot(y + 0.0365, z + 0.0475) - 0.0046, Math.abs(x) - 0.0104)); // hinge knuckle
    d = smin(d, barZ(x, y, z, 0, -0.0119, -0.132, -0.048, 0.0056, 0.0024), 0.0045); // ejector housing under the barrel
    const fs = Math.hypot(z - (zMuz + 0.0085), y - 0.0105) - 0.0058;
    d = Math.min(d, slab(Math.max(fs, 0.0112 - y), x, 0.0011, 0.0004)); // front sight
    return d;
  };
  const grip2 = poly(rounded([[0.0205, -0.0495], [0.0238, -0.061], [0.0305, -0.0765], [0.0385, -0.0905], [0.047, -0.1015], [0.0555, -0.1085], [0.0645, -0.1125], [0.075, -0.1135],
    [0.0845, -0.1115], [0.0912, -0.1065], [0.0928, -0.1005], [0.09, -0.091], [0.0842, -0.0775], [0.077, -0.0625], [0.0695, -0.048], [0.062, -0.035], [0.055, -0.0265],
    [0.045, -0.0285], [0.034, -0.0355], [0.025, -0.0425]], 0.0035));
  const grip = (x, y, z) => slab(grip2(z, y), x, 0.0153, 0.006);
  const screws = (x, y, z) => Math.min(
    screw(x, y, z, -1, -0.0475, -0.0365, -0.0104, 0.0026), screw(x, y, z, -1, 0.0, -0.031, -0.0122, 0.0022), screw(x, y, z, -1, 0.0145, -0.0365, -0.0122, 0.0022),
    screw(x, y, z, -1, 0.0285, -0.0195, -0.0122, 0.0022), screw(x, y, z, -1, 0.06, -0.072, -0.0153, 0.0034),
    torusZ(x, y, z, 0, -0.132, 0.075, 0.0105, 0.0016)); // the lanyard ring
  const cylinder = (x, y, z) => {
    let d = barZ(x, y, z, 0, 0, zCyl, 0.0, R, 0.0011);
    for (let k = 0; k < 6; k++) {
      const a = Math.PI / 2 + (k + 0.5) * (Math.PI / 3);
      d = smax(d, -barZ(x, y, z, Math.cos(a) * 0.0218, Math.sin(a) * 0.0218, -0.0272, -0.0085, 0.004, 0.004), 0.0006);
      const c = Math.PI / 2 + k * (Math.PI / 3);
      d = Math.max(d, -barZ(x, y, z, Math.cos(c) * CR, Math.sin(c) * CR, zCyl - 0.002, zCyl + 0.016, 0.006, 0.0003));
      const lx = Math.cos(c), ly = Math.sin(c), radial = x * lx + y * ly, tang = -x * ly + y * lx;
      d = Math.max(d, -Math.max(Math.abs(tang) - 0.0012, radial - (R + 0.001), (R - 0.001) - radial, Math.abs(z + 0.0052) - 0.0016));
    }
    return Math.max(d, -barZ(x, y, z, 0, 0, zCyl - 0.002, zCyl + 0.01, 0.003, 0.0003));
  };
  const hp = [0.0135, -0.011];
  const ham2 = poly(rounded([[0.004, -0.004], [0.005, 0.006], [0.0095, 0.0115], [0.016, 0.0155], [0.0235, 0.0205], [0.032, 0.0248], [0.0392, 0.0258], [0.0428, 0.0234],
    [0.042, 0.0192], [0.0362, 0.0154], [0.0275, 0.0098], [0.0215, 0.0025], [0.02, -0.012], [0.0145, -0.0195], [0.0085, -0.018], [0.0055, -0.01]], 0.0016));
  const hammer = (x, y, z) => {
    const Y = y + hp[1], Z = z + hp[0], spur = sstep(0.026, 0.033, Z);
    let d = slab(ham2(Z, Y), x, 0.0044 + 0.0012 * spur, 0.0009);
    d = Math.min(d, barZ(x, Y, Z, 0, 0.0005, 0.0016, 0.0048, 0.0011, 0.0004));
    if (spur > 0.5 && Y > 0.018) d += 0.00022 * Math.max(Math.abs(Math.sin((Z + x) * 2600)), Math.abs(Math.sin((Z - x) * 2600)));
    return d;
  };
  const tp = [0.0085, -0.0375];
  const trigBlade = sweep(zy([[0.0047, -0.0425], [0.0046, -0.0495], [0.006, -0.0555], [0.0086, -0.0596]]), 0.0025, 1.05);
  const trigger = (x, y, z) => smin(trigBlade(x, y + tp[1], z + tp[0]), box(x, y + tp[1], z + tp[0], 0, -0.0405, 0.006, 0.0024, 0.0035, 0.0032, 0.001), 0.002);
  return {
    name: 'schofield', zMuz, cylY: CY, chamberR: CR, chamberZ: zCyl, hammerPivot: hp, triggerPivot: tp,
    parts: {
      frame: { sdf: frame, min: [-0.0245, -0.128, -0.054], max: [0.0245, 0.021, 0.1] },
      barrel: { sdf: barrel, min: [-0.0125, -0.043, zMuz - 0.002], max: [0.0125, 0.016, 0.0055] },
      grip: { sdf: grip, min: [-0.019, -0.118, 0.016], max: [0.019, -0.02, 0.097] },
      screws: { sdf: screws, min: [-0.019, -0.146, -0.051], max: [0.0125, -0.015, 0.09], step: 0.00022 },
      cylinder: { sdf: (x, y, z) => cylinder(x, y - CY, z), min: [-0.022, CY - 0.022, zCyl - 0.002], max: [0.022, CY + 0.022, 0.002], origin: [0, CY, 0] },
      hammer: { sdf: hammer, min: [-0.007, -0.011, -0.012], max: [0.007, 0.04, 0.031], origin: [0, 0, 0], pivot: hp },
      trigger: { sdf: trigger, min: [-0.004, -0.025, -0.008], max: [0.004, 0.0, 0.004], origin: [0, 0, 0], pivot: tp },
    },
  };
}

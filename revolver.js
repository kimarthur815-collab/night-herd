// A Colt Single Action Army, 5½-inch barrel, as a cowboy would carry it in the 1880s: blued barrel and cylinder,
// a case-hardened frame gone grey with wear, a one-piece walnut grip. Five rounds, the hammer down on the empty sixth.
// Frame: x = the gun's right, y = up, +z = back toward you; the muzzle points to -z; the bore axis is y = 0.
import * as THREE from 'three';

const NOISE = /* glsl */ `
float rHash(vec3 p){ p = fract(p*0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float rNoise(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(rHash(i), rHash(i+vec3(1,0,0)), f.x), mix(rHash(i+vec3(0,1,0)), rHash(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(rHash(i+vec3(0,0,1)), rHash(i+vec3(1,0,1)), f.x), mix(rHash(i+vec3(0,1,1)), rHash(i+vec3(1,1,1)), f.x), f.y), f.z)*2.0-1.0; }`;
function withLocal(m, colorCode, roughCode = '') {
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vLP;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvLP = position;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>\nvarying vec3 vLP;\n${NOISE}`)
      .replace('#include <color_fragment>', `#include <color_fragment>\n{ ${colorCode} }`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>\n{ ${roughCode} }`);
  };
  return m;
}
// blued steel, rubbed to bare grey steel on the edges and high spots
function blued() {
  return withLocal(new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.62, roughness: 0.4, fog: false }), `
    float n = rNoise(vLP * 240.0) * 0.5 + 0.5, n2 = rNoise(vLP * 60.0) * 0.5 + 0.5;
    float wear = smoothstep(0.66, 0.86, n * 0.45 + n2 * 0.65);
    diffuseColor.rgb = mix(vec3(0.075, 0.085, 0.11) * (0.85 + 0.3 * n2), vec3(0.45, 0.45, 0.46), wear * 0.75);`,
    'roughnessFactor = clamp(roughnessFactor + rNoise(vLP * 180.0) * 0.08, 0.15, 0.7);');
}
// case-hardened frame: faded mottles of blue, plum and straw over grey
function caseColored() {
  return withLocal(new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.6, roughness: 0.42, fog: false }), `
    float a = rNoise(vLP * 70.0) * 0.5 + 0.5, b = rNoise(vLP * 140.0 + 7.0) * 0.5 + 0.5, c = rNoise(vLP * 30.0 + 3.0) * 0.5 + 0.5;
    vec3 col = vec3(0.17, 0.17, 0.185);
    col = mix(col, vec3(0.12, 0.15, 0.26), smoothstep(0.55, 0.75, a) * 0.8);
    col = mix(col, vec3(0.24, 0.14, 0.18), smoothstep(0.6, 0.8, b) * 0.6);
    col = mix(col, vec3(0.36, 0.3, 0.18), smoothstep(0.62, 0.82, c) * 0.5);
    diffuseColor.rgb = col * (0.85 + 0.25 * (rNoise(vLP * 400.0) * 0.5 + 0.5));`);
}
// oiled walnut, the grain running down the grip, dark with handling
function walnut() {
  return withLocal(new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 0, roughness: 0.48, clearcoat: 0.25, clearcoatRoughness: 0.5, fog: false }), `
    float across = dot(vLP, vec3(0.6, 0.33, 0.944));
    float w = rNoise(vLP * vec3(60.0, 22.0, 22.0)) + 0.5 * rNoise(vLP * 140.0);
    float grain = pow(sin(across * 1700.0 + w * 9.0) * 0.5 + 0.5, 3.0);   // thin dark lines in lighter wood
    vec3 col = mix(vec3(0.2, 0.1, 0.045), vec3(0.09, 0.042, 0.02), grain * 0.55 + 0.25 * (rNoise(vLP * 25.0) * 0.5 + 0.5));
    col *= 0.85 + 0.2 * (rNoise(vLP * 300.0) * 0.5 + 0.5);
    diffuseColor.rgb = col;`);
}
// a flat profile in the (z, y) plane, given thickness along x and rounded edges
function slab(pts, width, bevel, holes = []) {
  const s = new THREE.Shape(pts.map(([z, y]) => new THREE.Vector2(z, y)));
  for (const h of holes) s.holes.push(new THREE.Path(h.map(([z, y]) => new THREE.Vector2(z, y))));
  const depth = Math.max(0.0005, width - 2 * bevel);
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel * 0.9, bevelSegments: 3, curveSegments: 10 });
  g.rotateY(-Math.PI / 2); g.translate(depth / 2, 0, 0);
  g.computeVertexNormals();
  return g;
}
function rounded(pts, r, n = 3) { // round off the corners of a polygon
  const out = [];
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i], a = pts[(i - 1 + pts.length) % pts.length], b = pts[(i + 1) % pts.length];
    const da = Math.hypot(a[0] - p[0], a[1] - p[1]), db = Math.hypot(b[0] - p[0], b[1] - p[1]), k = Math.min(r, da / 2, db / 2);
    const p0 = [p[0] + ((a[0] - p[0]) / da) * k, p[1] + ((a[1] - p[1]) / da) * k], p1 = [p[0] + ((b[0] - p[0]) / db) * k, p[1] + ((b[1] - p[1]) / db) * k];
    for (let j = 0; j <= n; j++) { const t = j / n, u = 1 - t; out.push([u * u * p0[0] + 2 * u * t * p[0] + t * t * p1[0], u * u * p0[1] + 2 * u * t * p[1] + t * t * p1[1]]); }
  }
  return out;
}
const along = (g) => { g.rotateX(Math.PI / 2); return g; }; // cylinders and lathes point along z

export const CYL_AXIS_Y = -0.0135, CHAMBER_R = 0.0135, MUZZLE_Z = -0.1962;
export function makeRevolver() {
  const M = { blue: blued(), frame: caseColored(), wood: walnut(),
    lead: new THREE.MeshStandardMaterial({ color: 0x5c5c62, metalness: 0.35, roughness: 0.55, fog: false }),
    black: new THREE.MeshBasicMaterial({ color: 0x020202, fog: false }),
    steel: new THREE.MeshStandardMaterial({ color: 0x6d6e72, metalness: 0.9, roughness: 0.38, fog: false }) };
  const gun = new THREE.Group();
  const add = (geo, mat, parent = gun) => { const m = new THREE.Mesh(geo, mat); parent.add(m); return m; };
  // frame, with a window the cylinder sits in
  const frameOutline = rounded([[-0.054, -0.036], [-0.054, 0.011], [-0.047, 0.0165], [0.004, 0.0165], [0.012, 0.0132], [0.021, 0.004], [0.031, -0.012],
    [0.04, -0.03], [0.046, -0.043], [0.031, -0.048], [0.018, -0.047], [-0.004, -0.046], [-0.04, -0.046], [-0.05, -0.043]], 0.004);
  const window_ = rounded([[-0.0405, -0.0355], [0.0035, -0.0355], [0.0035, 0.0085], [-0.0405, 0.0085]], 0.002).reverse();
  add(slab(frameOutline, 0.0245, 0.0018, [window_]), M.frame);
  // the grip: walnut, the "plough handle" that flares at the heel; a blued back strap behind it
  add(slab(rounded([[0.018, -0.047], [0.021, -0.07], [0.027, -0.1], [0.033, -0.122], [0.041, -0.131], [0.058, -0.134], [0.072, -0.128], [0.074, -0.117],
    [0.064, -0.09], [0.054, -0.062], [0.047, -0.044], [0.034, -0.045]], 0.005), 0.031, 0.0065), M.wood);
  const bs = new THREE.CatmullRomCurve3([[0.024, 0.002], [0.034, -0.014], [0.043, -0.034], [0.051, -0.058], [0.061, -0.088], [0.071, -0.116], [0.068, -0.131]].map(([z, y]) => new THREE.Vector3(0, y, z)));
  const bsg = new THREE.TubeGeometry(bs, 40, 0.0042, 8, false); bsg.scale(1.6, 1, 1);
  add(bsg, M.blue);
  // trigger guard and trigger
  const tg = new THREE.CatmullRomCurve3([[-0.006, -0.046], [-0.013, -0.055], [-0.008, -0.067], [0.006, -0.07], [0.016, -0.063], [0.02, -0.05]].map(([z, y]) => new THREE.Vector3(0, y, z)));
  add(new THREE.TubeGeometry(tg, 40, 0.0027, 8, false), M.blue);
  const trigPivot = new THREE.Group(); trigPivot.position.set(0, -0.045, 0.004); gun.add(trigPivot);
  const trig = add(slab(rounded([[0.001, -0.045], [0.007, -0.045], [0.011, -0.055], [0.012, -0.062], [0.0085, -0.0635], [0.0065, -0.056], [0.002, -0.048]], 0.0012), 0.0045, 0.0008), M.frame, trigPivot);
  trig.position.set(0, 0.045, -0.004);
  // hammer, pivoting just behind the cylinder; its chequered spur sticks up behind the frame
  const hamPivot = new THREE.Group(); hamPivot.position.set(0, -0.012, 0.013); gun.add(hamPivot);
  const ham = add(slab(rounded([[0.008, -0.016], [0.016, -0.018], [0.02, -0.006], [0.021, 0.008], [0.028, 0.02], [0.036, 0.0265], [0.0405, 0.0245], [0.0375, 0.019],
    [0.026, 0.0125], [0.016, 0.0165], [0.008, 0.0125], [0.0058, 0.0]], 0.0018), 0.0085, 0.0012), M.frame, hamPivot);
  ham.position.set(0, 0.012, -0.013);
  // barrel: a lathe from the muzzle back, the bore going dark inside
  const bl = new THREE.LatheGeometry([[0.0057, 0.035], [0.0057, 0.0], [0.0073, 0.0], [0.0083, 0.0012], [0.0083, 0.1425]].map(([r, l]) => new THREE.Vector2(r, l)), 40);
  along(bl); bl.translate(0, 0, MUZZLE_Z); // lathe y (0 at the muzzle) runs back along +z
  add(bl, M.blue);
  add(new THREE.BoxGeometry(0.0022, 0.0058, 0.011).translate(0, 0.0083 + 0.0026, MUZZLE_Z + 0.008), M.blue); // front sight
  // ejector rod housing along the right of the barrel, its rod and button
  add(along(new THREE.CylinderGeometry(0.0046, 0.0046, 0.078, 20)).translate(0.0068, -0.0102, -0.098), M.blue);
  add(along(new THREE.CylinderGeometry(0.0038, 0.0034, 0.006, 16)).translate(0.0068, -0.0102, -0.14), M.steel);
  add(along(new THREE.CylinderGeometry(0.0028, 0.0028, 0.009, 14)).translate(0, CYL_AXIS_Y, -0.058), M.steel); // base pin head
  // loading gate and screws on the right side
  add(slab(rounded([[0.0015, -0.026], [0.011, -0.026], [0.011, -0.006], [0.0015, -0.006]], 0.003), 0.0024, 0.0006).translate(0.0128, 0, 0), M.frame);
  for (const [z, y] of [[0.011, -0.031], [-0.009, -0.041], [-0.049, -0.006], [0.03, -0.03]]) {
    const s = new THREE.CylinderGeometry(0.0021, 0.0021, 0.0012, 14); s.rotateZ(Math.PI / 2); s.translate(0.0128, y, z);
    add(s, M.steel);
  }
  // the cylinder: six chambers, flutes between them, edges chamfered; it turns a sixth at every cocking
  const cyl = new THREE.Group(); cyl.position.set(0, CYL_AXIS_Y, 0); gun.add(cyl);
  const N = 96, ZS = [0.0015, 0.0005, -0.0015, -0.006, -0.01, -0.015, -0.02, -0.025, -0.03, -0.034, -0.0365, -0.0375, -0.0385], R0 = 0.0205;
  const pos = [], idx = [];
  const radius = (th, z) => {
    let r = R0;
    const ends = Math.min(z - -0.0385, 0.0015 - z);
    if (ends < 0.002) r -= 0.0016 * (1 - ends / 0.002) ** 2; // chamfered edges
    const fz = Math.min(1, Math.max(0, (Math.min(z + 0.031, -0.006 - z)) / 0.003)); // flutes stop short of both ends
    for (let k = 0; k < 6; k++) {
      let d = th - (Math.PI / 2 + (k + 0.5) * (Math.PI / 3)); d = Math.atan2(Math.sin(d), Math.cos(d));
      const w = 0.3; if (Math.abs(d) < w) r -= 0.0034 * Math.cos((d / w) * (Math.PI / 2)) ** 1.5 * fz;
    }
    return r;
  };
  for (const z of ZS) for (let i = 0; i < N; i++) { const th = (i / N) * Math.PI * 2, r = radius(th, z); pos.push(Math.cos(th) * r, Math.sin(th) * r, z); }
  for (let j = 0; j < ZS.length - 1; j++) for (let i = 0; i < N; i++) { const a = j * N + i, b = j * N + ((i + 1) % N), c = a + N, d = b + N; idx.push(a, c, b, b, c, d); } // faces outward
  const cg = new THREE.BufferGeometry(); cg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); cg.setIndex(idx); cg.computeVertexNormals();
  add(cg, M.blue, cyl);
  const face = new THREE.CircleGeometry(R0 - 0.0016, 48); face.rotateY(Math.PI); face.translate(0, 0, -0.0385); add(face, M.blue, cyl);
  const back = new THREE.CircleGeometry(R0 - 0.0016, 48); back.translate(0, 0, 0.0015); add(back, M.blue, cyl);
  const bullets = [];
  for (let k = 0; k < 6; k++) {
    const a = Math.PI / 2 + k * (Math.PI / 3), cx = Math.cos(a) * CHAMBER_R, cy = Math.sin(a) * CHAMBER_R;
    const mouth = new THREE.CircleGeometry(0.0058, 24); mouth.rotateY(Math.PI); mouth.translate(cx, cy, -0.0387); add(mouth, M.black, cyl);
    const b = new THREE.SphereGeometry(0.0055, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2); b.rotateX(-Math.PI / 2); b.scale(1, 1, 0.55); b.translate(cx, cy, -0.0375);
    bullets.push(add(b, M.lead, cyl));
  }
  const muzzleBore = new THREE.CircleGeometry(0.0057, 20); muzzleBore.rotateY(Math.PI); muzzleBore.translate(0, 0, MUZZLE_Z + 0.03); add(muzzleBore, M.black);
  return { group: gun, hamPivot, trigPivot, cyl, bullets, materials: M };
}

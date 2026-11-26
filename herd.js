// Herd layout for the look-dev shot. Camera sits by the campfire; cows face it.
export const CAMERA = { pos: [0, 1.25, 0], target: [0, 0.98, -8], fov: 50 };
export const FIRE = { pos: [-2.6, 0.4, 0.3] };
export const LANTERN = { pos: [0.5, 0.7, 0.0], target: [0, 0.9, -8] };

// x, z: ground position; yawOff: body turn away from camera (deg); coat: albedo 0..1
export const HERD = [
  { x: -1.25, z: -3.9, yawOff: 8, scale: 1.0, coat: 0.82, widthF: 1.0, bellyF: 1.0, earDroop: 0.25, seed: 1 },
  { x: 0.75, z: -2.8, yawOff: -18, scale: 0.97, coat: 0.72, widthF: 0.96, bellyF: 1.05, earDroop: 0.32, seed: 2 },
  { x: 3.1, z: -5.4, yawOff: 75, scale: 1.03, coat: 0.7, widthF: 1.04, bellyF: 1.0, earDroop: 0.2, seed: 3 },
  { x: -3.4, z: -6.9, yawOff: -25, scale: 1.02, coat: 0.85, widthF: 1.05, bellyF: 1.08, earDroop: 0.3, seed: 4 },
  { x: -0.15, z: -6.2, yawOff: 5, scale: 0.95, coat: 0.62, widthF: 0.98, bellyF: 0.98, earDroop: 0.28, seed: 5 },
  { x: 1.9, z: -8.6, yawOff: -40, scale: 1.0, coat: 0.8, widthF: 1.0, bellyF: 1.04, earDroop: 0.22, seed: 6 },
  { x: 4.6, z: -9.4, yawOff: 30, scale: 0.98, coat: 0.22, face: 0.85, widthF: 1.0, bellyF: 1.0, earDroop: 0.3, seed: 7 },
  { x: -2.1, z: -10.2, yawOff: 12, scale: 1.0, coat: 0.75, widthF: 1.02, bellyF: 1.02, earDroop: 0.35, seed: 8 },
  { x: 0.7, z: -11.6, yawOff: -10, scale: 1.05, coat: 0.83, widthF: 1.03, bellyF: 1.0, earDroop: 0.26, seed: 9 },
  { x: -4.2, z: -9.0, yawOff: 35, scale: 0.97, coat: 0.18, face: 0.85, widthF: 0.98, bellyF: 1.0, earDroop: 0.3, seed: 10 },
  { x: 3.0, z: -13.0, yawOff: -20, scale: 1.0, coat: 0.78, widthF: 1.0, bellyF: 1.06, earDroop: 0.27, seed: 11 },
  { x: -1.2, z: -14.5, yawOff: 15, scale: 0.98, coat: 0.7, widthF: 1.0, bellyF: 1.0, earDroop: 0.3, seed: 12 },
  { x: 5.8, z: -14.0, yawOff: -60, scale: 1.0, coat: 0.8, widthF: 1.0, bellyF: 1.0, earDroop: 0.25, seed: 13 },
];

// Body yaw + head yaw/pitch so every cow stares at the camera.
export function cowPose(c) {
  const C = CAMERA.pos;
  const theta = Math.atan2(C[0] - c.x, C[2] - c.z) + (c.yawOff * Math.PI) / 180;
  const dx = (C[0] - c.x) / c.scale, dy = C[1] / c.scale, dz = (C[2] - c.z) / c.scale;
  const cs = Math.cos(-theta), sn = Math.sin(-theta);
  const lx = dx * cs + dz * sn, lz = -dx * sn + dz * cs;
  const hz = 0.98, hy = 1.16;
  let yaw = Math.atan2(lx, lz - hz);
  yaw = Math.max(-1.25, Math.min(1.25, yaw));
  let pitch = Math.atan2(dy - hy, Math.hypot(lx, lz - hz));
  pitch = Math.max(-0.4, Math.min(0.45, pitch)) + (c.pitchOff || 0);
  return { theta, yaw1: yaw * 0.45, yaw2: yaw * 0.55, pitch1: pitch * 0.35, pitch2: pitch * 0.65 };
}

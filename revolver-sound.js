// Night Herd: the revolver's sounds, synthesized (no recordings). Shared by the game and the revolver page.
// makeRevolverSound(getContext, getDestination): getContext() returns the AudioContext to play on (or null while
// there is none yet), getDestination(ctx) the node to play into. Shots: SHOT_KINDS; case drops: DROP_KINDS.
export const SHOT_KINDS = ['now', 'powder', 'canyon', 'ring', 'powderCrack', 'powderCrack2', 'powderTang', 'ref', 'powderRef'];
export const DROP_KINDS = ['dirt', 'rock', 'both'];
// what the game uses: ⑨ (black powder, crack and tang over a held roar, no echo); ⑥ in wide open places; brass ringing on rock
export const GAME_SHOT = 'powderRef', GAME_SHOT_WIDE = 'powderCrack2', GAME_DROP = 'rock';

export function makeRevolverSound(getContext, getDestination = (a) => a.destination) {
  let ac = null, out = null, nb = null, irs = {};
  const ctx = () => {
    const a = getContext();
    if (!a) return null;
    if (a !== ac) { // a new context: its own noise, echoes and limiter
      ac = a; nb = noise(a); irs = {};
      out = a.createDynamicsCompressor(); out.threshold.value = -8; out.ratio.value = 6; out.connect(getDestination(a));
    }
    if (a.state === 'suspended' && a.resume) a.resume();
    return a;
  };
  const noise = (a) => { const b = a.createBuffer(1, a.sampleRate * 3, a.sampleRate), d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; return b; };
  // the reference's shape: a bright crack, then a dense roar that holds about half a second, shimmering, and rolls away
  // fade: when given, the roar dies away in one smooth fall over that many seconds, its shimmer and hiss settling with it
  const roar = (a, t, level, hold, bright, fade) => {
    const src = a.createBufferSource(); src.buffer = nb;
    const hp = a.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 90;
    const lp = a.createBiquadFilter(); lp.type = 'lowpass';
    lp.frequency.setValueAtTime(bright, t); lp.frequency.exponentialRampToValueAtTime(1800, t + hold * 0.6); lp.frequency.exponentialRampToValueAtTime(fade ? 650 : 1000, t + hold + (fade || 0.9));
    const bp = a.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 850; bp.Q.value = 0.6; // the weight of it sits in the middle
    const bg = a.createGain(); bg.gain.value = 1.7;
    const g = a.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(level, t + 0.006); g.gain.linearRampToValueAtTime(level * 0.85, t + hold);
    g.gain.exponentialRampToValueAtTime(level * 0.3, t + hold + 0.08);
    if (fade) g.gain.exponentialRampToValueAtTime(level * 0.003, t + hold + fade);
    else { g.gain.exponentialRampToValueAtTime(level * 0.12, t + hold + 0.45); g.gain.exponentialRampToValueAtTime(level * 0.01, t + hold + 0.9); }
    hp.connect(bp).connect(bg).connect(g);
    const wob = a.createGain(); wob.gain.value = 1; // the shimmer: the roar's loudness wanders a few dB
    const mod = a.createBufferSource(); mod.buffer = nb; const ml = a.createBiquadFilter(); ml.type = 'lowpass'; ml.frequency.value = 30; const md = a.createGain(); md.gain.setValueAtTime(2.2, t); if (fade) md.gain.linearRampToValueAtTime(0.3, t + hold + fade * 0.6);
    mod.connect(ml).connect(md).connect(wob.gain);
    src.connect(hp).connect(lp).connect(g).connect(wob).connect(out);
    src.start(t, Math.random() * 0.5); src.stop(t + hold + 1); mod.start(t, Math.random()); mod.stop(t + hold + 1);
  };
  const burst = (a, t, f, type, q, gain, dur, dest) => {
    const s = a.createBufferSource(); s.buffer = nb;
    const fl = a.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q;
    const g = a.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0005, t + dur);
    s.connect(fl).connect(g).connect(dest || out); s.start(t, Math.random()); s.stop(t + dur + 0.02);
  };
  const thump = (a, t, f0, f1, gain, dur, dest) => {
    const o = a.createOscillator(), g = a.createGain();
    o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur * 0.8);
    g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g).connect(dest || out); o.start(t); o.stop(t + dur + 0.02);
  };
  const ping = (a, t, f, gain, dur) => { const o = a.createOscillator(), g = a.createGain(); o.frequency.value = f; g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0005, t + dur); o.connect(g).connect(out); o.start(t); o.stop(t + dur + 0.02); };
  const shaper = (a, k) => { const w = a.createWaveShaper(), n = 1024, c = new Float32Array(n); for (let i = 0; i < n; i++) { const x = (i * 2) / n - 1; c[i] = Math.tanh(k * x) / Math.tanh(k); } w.curve = c; return w; };
  // the open desert answers back: a soft rumble, and echoes off far rock, each later one weaker
  const ir = (a, kind) => {
    if (irs[kind]) return irs[kind];
    const long = kind === 'canyon', dry = kind === 'dry', dur = long ? 3.4 : dry ? 0.9 : 1.6, n = Math.floor(a.sampleRate * dur), b = a.createBuffer(2, n, a.sampleRate);
    const echoes = long ? [[0.33, 0.55], [0.81, 0.38], [1.27, 0.26], [1.93, 0.16], [2.6, 0.09]] : dry ? [] : [[0.31, 0.3], [0.72, 0.14]];
    for (let ch = 0; ch < 2; ch++) {
      const d = b.getChannelData(ch);
      for (let i = 0; i < n; i++) { const t = i / a.sampleRate; d[i] = (Math.random() * 2 - 1) * 0.05 * Math.exp(-t / (long ? 0.9 : dry ? 0.22 : 0.4)) * Math.min(1, t / 0.05); }
      for (const [t0, g] of echoes) {
        const s0 = Math.floor((t0 + ch * 0.013 + Math.random() * 0.01) * a.sampleRate), w = Math.floor(0.07 * a.sampleRate);
        for (let i = 0; i < w && s0 + i < n; i++) d[s0 + i] += (Math.random() * 2 - 1) * g * Math.exp(-i / (w * 0.3));
      }
    }
    return (irs[kind] = b);
  };
  const tail = (a, kind, lpHz, wet) => {
    const cv = a.createConvolver(); cv.buffer = ir(a, kind);
    const lp = a.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = lpHz;
    const g = a.createGain(); g.gain.value = wet; cv.connect(lp).connect(g).connect(out); return cv;
  };
  // the sharp "pak" of ①: a bright, instant burst, kept clear of ②'s overdrive so it stays crisp
  const crack = (a, t, k, room = 'short') => {
    const bus = a.createGain(); bus.connect(out); bus.connect(tail(a, room, 1600, 0.5));
    burst(a, t, 2600, 'bandpass', 0.8, 0.9 * k, 0.1 + 0.05 * (k - 1), bus);
    burst(a, t, 5200, 'highpass', 0.7, 0.55 * k, 0.05, bus);
    burst(a, t, 2800, 'lowpass', 0.7, 0.35 * k, 0.3, bus);
  };
  // the ringing "tang" of the report: narrow bands of noise that ring for a moment
  const tang = (a, t, k) => {
    const bus = a.createGain(); bus.connect(out); bus.connect(tail(a, 'dry', 2200, 0.4));
    burst(a, t, 1250, 'bandpass', 7, 2.2 * k, 0.22, bus);
    burst(a, t, 2050, 'bandpass', 6, 1.3 * k, 0.15, bus);
    burst(a, t, 3300, 'bandpass', 5, 0.7 * k, 0.09, bus);
  };
  // a fired case landing: on the packed dirt by the fire (a dull tap and a second, softer one), or on rock (brass rings)
  const tink = (a, t, g) => { for (const [f, d, k] of [[5200, 0.12, 1], [8900, 0.07, 0.6], [12400, 0.05, 0.4]]) ping(a, t, f * (0.98 + Math.random() * 0.04), g * k, d); burst(a, t, 6000, 'highpass', 0.7, g * 0.8, 0.008); };
  const tap = (a, t, g) => { burst(a, t, 650, 'lowpass', 0.7, g, 0.035); burst(a, t, 2000, 'bandpass', 2, g * 0.35, 0.01); };
  const DROPS = {
    dirt(a, t) { tap(a, t, 0.22); tap(a, t + 0.085, 0.09); burst(a, t + 0.1, 3000, 'bandpass', 1, 0.025, 0.12); }, // ① and a little sand
    rock(a, t) { tink(a, t, 0.06); tink(a, t + 0.11, 0.03); tink(a, t + 0.19, 0.012); }, // ②
    both(a, t) { tap(a, t, 0.18); tink(a, t, 0.022); tap(a, t + 0.09, 0.07); tink(a, t + 0.09, 0.008); }, // ③
  };
  const SHOTS = {
    now(a, t) { // ① the first one: a filtered burst with a delay-line echo
      const echo = a.createDelay(1); echo.delayTime.value = 0.31;
      const fb = a.createGain(); fb.gain.value = 0.32; const lp = a.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900;
      const wet = a.createGain(); wet.gain.value = 0.5;
      echo.connect(lp).connect(fb).connect(echo); lp.connect(wet).connect(out);
      const bus = a.createGain(); bus.connect(out); bus.connect(echo);
      burst(a, t, 2800, 'lowpass', 0.7, 1.0, 0.45, bus); burst(a, t, 6000, 'highpass', 0.7, 0.5, 0.06, bus); thump(a, t, 95, 38, 0.9, 0.3, bus);
    },
    powder(a, t, room = 'short') { // ② black powder: a deep, pushing boom, a little overdriven, and a short echo
      const bus = a.createGain(), sh = shaper(a, 2.5); bus.connect(sh).connect(out); sh.connect(tail(a, room, 900, 0.9));
      burst(a, t, 9000, 'highpass', 0.7, 0.7, 0.012, bus); burst(a, t, 1800, 'lowpass', 0.7, 1.0, 0.25, bus);
      burst(a, t, 350, 'lowpass', 0.8, 1.0, 0.7, bus); thump(a, t, 80, 30, 1.0, 0.5, bus);
    },
    canyon(a, t) { // ③ a sharp crack, then the desert sends it back from the hills for three seconds
      const bus = a.createGain(); bus.connect(out); bus.connect(tail(a, 'canyon', 1400, 1.5));
      burst(a, t, 6000, 'highpass', 0.7, 0.9, 0.02, bus); burst(a, t, 3000, 'lowpass', 0.7, 0.9, 0.18, bus); thump(a, t, 110, 45, 0.7, 0.25, bus);
    },
    powderCrack(a, t) { SHOTS.powder(a, t, 'dry'); crack(a, t, 1, 'dry'); tang(a, t, 1); }, // ⑤ ② with ①'s crack, no echo, a little "tang"
    powderTang(a, t) { SHOTS.powder(a, t, 'dry'); crack(a, t, 1, 'dry'); tang(a, t, 1.8); }, // ⑦ the same with more "tang"
    powderCrack2(a, t) { SHOTS.powder(a, t); crack(a, t, 1.5); }, // ⑥ the same, the crack louder and a hair longer
    ref(a, t) { // ⑧ after the reference clip: the crack bright up to 10 kHz, the roar held, the low end light
      burst(a, t, 6000, 'bandpass', 0.9, 2.6, 0.045); burst(a, t, 2500, 'bandpass', 0.7, 1.0, 0.08); burst(a, t, 600, 'lowpass', 0.7, 0.7, 0.07);
      roar(a, t, 0.45, 0.6, 5000); thump(a, t, 90, 40, 0.22, 0.3);
    },
    powderRef(a, t) { // ⑨ ⑤ moved toward the reference: less boom, a shorter held roar under the crack and the tang
      const bus = a.createGain(), sh = shaper(a, 2.5); bus.connect(sh).connect(out); sh.connect(tail(a, 'dry', 900, 0.7));
      burst(a, t, 1800, 'lowpass', 0.7, 0.8, 0.25, bus); burst(a, t, 350, 'lowpass', 0.8, 0.4, 0.45, bus); thump(a, t, 80, 32, 0.35, 0.4, bus);
      crack(a, t, 1.2, 'dry'); tang(a, t, 1); roar(a, t, 0.32, 0.45, 5000, 0.8);
    },
    ring(a, t) { // ④ the shot, then the ears ring and everything goes muffled
      const bus = a.createGain(), lp = a.createBiquadFilter(); lp.type = 'lowpass';
      lp.frequency.setValueAtTime(12000, t); lp.frequency.exponentialRampToValueAtTime(650, t + 0.12);
      bus.connect(lp).connect(out); lp.connect(tail(a, 'short', 600, 0.7));
      burst(a, t, 9000, 'highpass', 0.7, 0.8, 0.012, bus); burst(a, t, 2000, 'lowpass', 0.7, 1.0, 0.3, bus); thump(a, t, 85, 32, 1.0, 0.45, bus);
      for (const [f, gmax] of [[5100, 0.05], [5163, 0.035]]) {
        const o = a.createOscillator(), g = a.createGain(); o.frequency.value = f;
        g.gain.setValueAtTime(0, t + 0.08); g.gain.linearRampToValueAtTime(gmax, t + 0.3); g.gain.exponentialRampToValueAtTime(0.0005, t + 3.6);
        o.connect(g).connect(out); o.start(t + 0.08); o.stop(t + 3.7);
      }
    },
  };
  return {
    click(gain, f) { const a = ctx(); if (!a) return; const t = a.currentTime; burst(a, t, f, 'bandpass', 6, gain, 0.025); burst(a, t + 0.004, f * 0.55, 'bandpass', 3, gain * 0.5, 0.05); },
    bang(kind = GAME_SHOT) { const a = ctx(); if (a) SHOTS[kind](a, a.currentTime); },
    slide() { const a = ctx(); if (a) burst(a, a.currentTime, 2500, 'bandpass', 2, 0.12, 0.12); }, // the rod pushing a case out
    drop(kind = GAME_DROP) { const a = ctx(); if (a) DROPS[kind](a, a.currentTime); },
    insert() { const a = ctx(); if (a) burst(a, a.currentTime, 1200, 'bandpass', 3, 0.25, 0.05); },
    async render(kind, sec = 2.5) { // for measuring: one shot rendered offline, mono 48 kHz
      const save = [ac, out, nb, irs], o = new OfflineAudioContext(1, Math.floor(48000 * sec), 48000);
      ac = o; nb = noise(o); irs = {};
      out = o.createDynamicsCompressor(); out.threshold.value = -8; out.ratio.value = 6; out.connect(o.destination);
      SHOTS[kind](o, 0.05);
      const b = await o.startRendering();
      [ac, out, nb, irs] = save;
      return Array.from(b.getChannelData(0));
    },
  };
}

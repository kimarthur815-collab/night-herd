// monster-sound.js — the monsters' sounds, synthesized with Web Audio (no recordings).
// I can't hear these: every sound here is a candidate for the ear to judge.
// Breathing and growls run while a monster is on screen; the pounce, the bite and the dark are one-shots.
export const POUNCE_KINDS = { shriek: '① 날카로운 비명', shriekRoar: '② 비명 + 낮은 포효', gaspShriek: '③ 숨 들이켜고 비명' };
export const BITE_KINDS = { crunch: '① 콱 깨묾', chew: '② 우두둑 씹기', gulp: '③ 꿀꺽 삼킴' };

export function makeMonsterSound() {
  let a = null, out, bus, muffle, verbIn, noiseBuf, loop = null, enabled = true;
  const timers = { a: 0, b: 0, c: 0 };
  function ctx() {
    if (a) return a;
    try { a = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; }
    out = a.createGain(); out.gain.value = 0.9;
    muffle = a.createBiquadFilter(); muffle.type = 'lowpass'; muffle.frequency.value = 18000; muffle.Q.value = 0.7;
    const comp = a.createDynamicsCompressor(); comp.threshold.value = -12; comp.ratio.value = 5; comp.attack.value = 0.003; comp.release.value = 0.2;
    out.connect(muffle).connect(comp).connect(a.destination);
    bus = a.createGain(); bus.connect(out);                         // ambience: ducked during the pounce
    verbIn = a.createConvolver(); verbIn.buffer = impulse(a, 1.8, 2.6);
    const vg = a.createGain(); vg.gain.value = 0.3; verbIn.connect(vg).connect(out);
    noiseBuf = a.createBuffer(1, a.sampleRate * 2, a.sampleRate);
    const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return a;
  }
  function impulse(c, sec, decay) {
    const n = Math.floor(c.sampleRate * sec), b = c.createBuffer(2, n, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) { const d = b.getChannelData(ch); for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, decay); }
    return b;
  }
  // ---------- building blocks ----------
  function env(g, t, att, dur, peak, rel = dur - att) {
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + att);
    g.gain.exponentialRampToValueAtTime(0.0001, t + att + Math.max(0.01, rel));
  }
  function noise(t, dur, o) { // filtered noise with a sweeping filter
    const s = a.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
    const f = a.createBiquadFilter(); f.type = o.type || 'bandpass'; f.Q.value = o.q ?? 1;
    f.frequency.setValueAtTime(o.f0, t); if (o.f1) f.frequency.exponentialRampToValueAtTime(o.f1, t + dur);
    const g = a.createGain(); env(g, t, o.att ?? 0.01, dur, o.gain);
    s.connect(f).connect(g); g.connect(o.dest || out);
    if (o.verb) g.connect(verbIn);
    s.start(t, Math.random() * 1.5); s.stop(t + dur + 0.05);
    return g;
  }
  function tone(t, dur, o) {
    const s = a.createOscillator(); s.type = o.type || 'sine';
    s.frequency.setValueAtTime(o.f0, t); if (o.f1) s.frequency.exponentialRampToValueAtTime(o.f1, t + dur);
    const g = a.createGain(); env(g, t, o.att ?? 0.01, dur, o.gain);
    let n = s;
    if (o.lp) { const f = a.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = o.lp; n = n.connect(f); }
    if (o.bp) { const f = a.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = o.bp; f.Q.value = o.bq ?? 3; n = n.connect(f); }
    if (o.am) { const l = a.createOscillator(), lg = a.createGain(), m = a.createGain(); l.frequency.value = o.am; lg.gain.value = 0.5; m.gain.value = 0.5; l.connect(lg).connect(m.gain); n = n.connect(m); l.start(t); l.stop(t + dur + 0.05); }
    if (o.vib) { const l = a.createOscillator(), lg = a.createGain(); l.frequency.value = o.vib; lg.gain.value = o.vibAmt ?? o.f0 * 0.03; l.connect(lg).connect(s.frequency); l.start(t); l.stop(t + dur + 0.05); }
    n.connect(g); g.connect(o.dest || out); if (o.verb) g.connect(verbIn);
    s.start(t); s.stop(t + dur + 0.05);
    return g;
  }
  function crush(amount) { const w = a.createWaveShaper(), n = 1024, c = new Float32Array(n); for (let i = 0; i < n; i++) { const x = (i / n) * 2 - 1; c[i] = Math.tanh(x * amount); } w.curve = c; return w; }
  function clicks(t, count, span, o) { for (let i = 0; i < count; i++) noise(t + Math.random() * span, o.len ?? 0.006, { type: 'bandpass', f0: o.f * (0.7 + Math.random() * 0.6), q: o.q ?? 4, gain: o.gain * (0.5 + Math.random() * 0.5), att: 0.0008, dest: o.dest }); }

  // ---------- breathing and growls, per monster ----------
  function stopLoop() { if (loop) { const l = loop; loop = null; const t = a.currentTime; l.g.gain.setTargetAtTime(0.0001, t, 0.15); setTimeout(() => l.nodes.forEach((n) => { try { n.stop(); } catch (e) { /* stopped */ } }), 900); } }
  function startLoop(id) {
    stopLoop();
    const t = a.currentTime, g = a.createGain(); g.gain.value = 0.0001; g.gain.setTargetAtTime(1, t, 0.4); g.connect(bus);
    const nodes = [];
    if (id === 'm4') { // a low growl under everything
      const o = a.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 47;
      const f = a.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 230; f.Q.value = 2;
      const am = a.createOscillator(), ag = a.createGain(), m = a.createGain(); am.frequency.value = 6.5; ag.gain.value = 0.35; m.gain.value = 0.065; am.connect(ag).connect(m.gain);
      o.connect(f).connect(m).connect(g); o.start(); am.start(); nodes.push(o, am);
    }
    if (id === 'm5') { // a drone felt more than heard, and a rumble of wind in it
      for (const hz of [36, 38.6, 54.5]) { const o = a.createOscillator(); o.frequency.value = hz; const og = a.createGain(); og.gain.value = hz > 50 ? 0.03 : 0.07; o.connect(og).connect(g); o.start(); nodes.push(o); }
      const s = a.createBufferSource(); s.buffer = noiseBuf; s.loop = true; const f = a.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 140; const sg = a.createGain(); sg.gain.value = 0.12;
      s.connect(f).connect(sg).connect(g); s.start(); nodes.push(s);
    }
    loop = { id, g, nodes };
    timers.a = 0; timers.b = 1.5 + Math.random() * 2; timers.c = 0;
  }
  // called every frame with the monster on screen and its breathing phase (0..1)
  function ambient(id, dt, breath) {
    if (!enabled || !a || a.state !== 'running') return;
    if (!loop || loop.id !== id) startLoop(id);
    const t = a.currentTime + 0.02, dest = loop.g;
    timers.b -= dt;
    if (id === 'm3') { // fast wet panting, a gurgle now and then
      if (breath.cross) { noise(t, 0.2, { f0: 1150, f1: 800, q: 0.9, gain: 0.07, att: 0.03, dest }); noise(t + 0.3, 0.16, { f0: 1700, f1: 2100, q: 1.2, gain: 0.035, att: 0.05, dest }); }
      if (timers.b < 0) { timers.b = 4 + Math.random() * 3; noise(t, 0.7, { type: 'lowpass', f0: 420, f1: 260, q: 6, gain: 0.1, att: 0.06, dest }); tone(t, 0.7, { type: 'sawtooth', f0: 70, f1: 52, gain: 0.06, lp: 300, am: 19, dest }); }
    }
    if (id === 'm4') { // teeth chattering in bursts, a slow wet breath
      if (timers.b < 0) { timers.b = 3 + Math.random() * 3.5; clicks(t, 10 + Math.floor(Math.random() * 6), 0.55, { f: 2600, gain: 0.12, dest }); }
      if (breath.cross) noise(t, 0.9, { type: 'lowpass', f0: 500, f1: 300, q: 1, gain: 0.05, att: 0.3, dest });
    }
    if (id === 'm5') { // something like whispering, swelling and gone
      if (timers.b < 0) { timers.b = 5 + Math.random() * 4; noise(t, 2.2, { f0: 2400, f1: 3100, q: 5, gain: 0.04, att: 0.9, dest }); noise(t + 0.4, 1.6, { f0: 1300, f1: 900, q: 7, gain: 0.025, att: 0.6, dest }); }
      if (breath.cross) noise(t, 2.4, { type: 'lowpass', f0: 240, f1: 110, q: 0.7, gain: 0.08, att: 0.9, dest });
    }
  }
  function gape(id) {
    if (!ready()) return;
    const t = a.currentTime + 0.01;
    noise(t, 0.012, { type: 'highpass', f0: 3800, q: 0.7, gain: 0.12, att: 0.001 }); // the wet unsticking
    if (id === 'm5') { for (let i = 0; i < 14; i++) noise(t + 0.05 + i * (0.03 + i * 0.004), 0.012, { f0: 1300, q: 6, gain: 0.08, att: 0.001 }); } // bone creak
    else tone(t + 0.04, 1.3, { type: 'sawtooth', f0: id === 'm3' ? 95 : 78, f1: 52, gain: 0.16, bp: 620, bq: 3, vib: 7, att: 0.15 });
    noise(t + 0.04, 1.1, { type: 'lowpass', f0: 600, f1: 250, q: 1, gain: 0.06, att: 0.2 });
  }

  // ---------- the pounce: a shriek ----------
  function shriek(t) {
    const sh = crush(3); sh.connect(out); sh.connect(verbIn);
    noise(t, 0.95, { f0: 1500, f1: 3800, q: 2, gain: 0.55, att: 0.015, dest: sh });
    tone(t, 0.9, { type: 'sawtooth', f0: 950, f1: 260, gain: 0.28, att: 0.01, dest: sh });
    tone(t + 0.02, 0.85, { type: 'square', f0: 1400, f1: 480, gain: 0.12, att: 0.01, dest: sh });
    noise(t, 0.7, { type: 'lowpass', f0: 900, f1: 90, q: 1, gain: 0.45, att: 0.005 });
  }
  function roar(t) {
    tone(t, 1.3, { type: 'sawtooth', f0: 96, f1: 46, gain: 0.5, lp: 700, am: 23, att: 0.03, verb: true });
    noise(t, 1.2, { type: 'lowpass', f0: 600, f1: 180, q: 1, gain: 0.35, att: 0.03, verb: true });
  }
  function freeze(kind) { // everything goes quiet before it comes
    if (!ready()) return;
    const t = a.currentTime;
    bus.gain.cancelScheduledValues(t); bus.gain.setTargetAtTime(0.0001, t, 0.05);
    if (kind === 'gaspShriek') noise(t + 0.05, 0.34, { f0: 420, f1: 1500, q: 1.5, gain: 0.16, att: 0.25 });
  }
  function pounce(kind) {
    if (!ready()) return;
    const t = a.currentTime + 0.005;
    shriek(t);
    if (kind === 'shriekRoar') roar(t + 0.05);
    noise(t, 0.35, { type: 'lowpass', f0: 200, f1: 60, q: 0.8, gain: 0.5, att: 0.01 }); // the rush of air
  }
  // ---------- the bite, then the dark ----------
  function crunch(t, big = 1) {
    tone(t, 0.2, { f0: 150, f1: 38, gain: 0.9 * big, att: 0.003 });
    noise(t, 0.06, { type: 'highpass', f0: 1800, q: 0.7, gain: 0.55 * big, att: 0.001 });
    clicks(t, 8, 0.14, { f: 4200, q: 3, gain: 0.45 * big, len: 0.004 });
  }
  function bite(kind) {
    if (!ready()) return;
    const t = a.currentTime + 0.005;
    crunch(t);
    // the world goes muffled and far away, as if heard from inside
    muffle.frequency.cancelScheduledValues(t); muffle.frequency.setValueAtTime(18000, t + 0.06); muffle.frequency.exponentialRampToValueAtTime(340, t + 0.4);
    if (kind === 'chew') for (let i = 1; i <= 3; i++) { const u = t + 0.45 * i; noise(u, 0.22, { type: 'lowpass', f0: 800, f1: 400, q: 1, gain: 0.3, att: 0.01 }); clicks(u, 4, 0.1, { f: 3000, gain: 0.3, len: 0.004 }); noise(u + 0.1, 0.25, { f0: 650, f1: 220, q: 2, gain: 0.18, att: 0.02 }); }
    if (kind === 'gulp') { tone(t + 0.55, 0.38, { f0: 270, f1: 70, gain: 0.45, att: 0.02 }); noise(t + 0.55, 0.5, { type: 'lowpass', f0: 380, f1: 150, q: 2, gain: 0.22, att: 0.03 }); tone(t + 0.95, 0.6, { type: 'sawtooth', f0: 60, f1: 45, gain: 0.12, lp: 250, am: 15 }); }
    // the heart slows in the dark and stops
    [0.9, 1.9, 3.2].forEach((dt, i) => { const g = 0.5 - i * 0.14; tone(t + dt, 0.13, { f0: 62, f1: 42, gain: g, att: 0.005 }); tone(t + dt + 0.17, 0.15, { f0: 56, f1: 38, gain: g * 0.7, att: 0.005 }); });
  }
  function restore() { // light comes back; sound with it
    if (!a) return;
    const t = a.currentTime;
    muffle.frequency.cancelScheduledValues(t); muffle.frequency.setValueAtTime(Math.max(300, muffle.frequency.value), t); muffle.frequency.exponentialRampToValueAtTime(18000, t + 0.9);
    bus.gain.cancelScheduledValues(t); bus.gain.setTargetAtTime(1, t, 0.4);
  }
  function ready() { return enabled && ctx() && a.state === 'running'; }
  return {
    unlock() { if (!enabled) return; const c = ctx(); if (c && c.state !== 'running') c.resume(); },
    setEnabled(on) { enabled = on; if (!a) return; if (on) { a.resume(); } else { stopLoop(); a.suspend(); } },
    get enabled() { return enabled; },
    ambient, gape, freeze, pounce, bite, restore, stop: () => a && stopLoop(),
  };
}

// monster-sound.js — the monsters' sounds, synthesized with Web Audio (no recordings).
// I can't hear these: every sound here is a candidate for the ear to judge.
// Breathing and growls run while a monster is on screen; the pounce, the bite and the dark are one-shots.
export const POUNCE_KINDS = { growlRoar: '① 그르렁 → 날카로운 포효', machine: '② 기계음 섞인 포효', crack: '③ 갈라지는 포효', gargle: '④ 끓는 목 고음 포효' };
export const BITE_KINDS = { crunch: '① 콱 깨묾', chew: '② 우두둑 씹기', gulp: '③ 꿀꺽 삼킴' }; // ③ chosen
export const SCARE_KINDS = { shake: '① 얼굴이 확 튀어나와 마구 흔들림', fast: '② 멀리서 순식간에', side: '③ 화면 옆에서 갑자기' };

export function makeMonsterSound(opt = {}) {
  let a = opt.context || null, out, bus, muffle, verbIn, noiseBuf, loop = null, enabled = true;
  const timers = { a: 0, b: 0, c: 0 };
  function ctx() {
    if (a && out) return a;
    if (!a) { try { a = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; } }
    out = a.createGain(); out.gain.value = 0.9;
    muffle = a.createBiquadFilter(); muffle.type = 'lowpass'; muffle.frequency.value = 18000; muffle.Q.value = 0.7;
    const comp = a.createDynamicsCompressor(); comp.threshold.value = -12; comp.ratio.value = 5; comp.attack.value = 0.003; comp.release.value = 0.2;
    // a soft ceiling after the compressor: bone clicks are too quick for it, and must not clip
    const lim = a.createWaveShaper(), n = 2048, cv = new Float32Array(n);
    for (let i = 0; i < n; i++) { const x = (i / (n - 1)) * 2 - 1, ax = Math.abs(x); cv[i] = Math.sign(x) * (ax < 0.7 ? ax : 0.7 + 0.28 * Math.tanh((ax - 0.7) / 0.28)); }
    lim.curve = cv; const pad = a.createGain(); pad.gain.value = 0.92;
    out.connect(muffle).connect(comp).connect(pad).connect(lim).connect(a.destination);
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

  // ---------- the pounce: a monster's roar, not a human scream ----------
  // A throat: detuned saws and a sub under a pitch contour, roughened by a fast flutter (the "그르렁" rattle),
  // driven hard into a waveshaper, then shaped by vowel-like resonances (the "우르렁" of an open throat).
  function voice(t, o) {
    const dur = o.dur, end = t + dur;
    const pre = a.createGain(); pre.gain.value = 1;
    const curve = o.f; // [[seconds, Hz], ...]
    const freqAt = (osc, mul) => { osc.frequency.setValueAtTime(curve[0][1] * mul, t); for (const [ct, hz] of curve.slice(1)) osc.frequency.exponentialRampToValueAtTime(hz * mul, t + ct); };
    const oscs = [];
    for (const [mul, type, g] of [[1, 'sawtooth', 0.5], [1.012, 'sawtooth', 0.4], [0.5, o.subType || 'sawtooth', o.sub ?? 0.45], [1.497, 'square', o.fifth ?? 0]]) {
      if (!g) continue;
      const s = a.createOscillator(); s.type = type; freqAt(s, mul);
      const sg = a.createGain(); sg.gain.value = g; s.connect(sg).connect(pre); oscs.push(s);
    }
    // jitter: the pitch wobbles unevenly, like air tearing through a throat
    const jit = a.createOscillator(); jit.type = 'sawtooth'; jit.frequency.value = o.jitRate ?? 11;
    const jg = a.createGain(); jg.gain.value = curve[0][1] * (o.jit ?? 0.06); jit.connect(jg);
    for (const s of oscs) jg.connect(s.frequency);
    oscs.push(jit);
    // the rattle: fast amplitude flutter
    const rat = a.createGain(); rat.gain.value = 1 - (o.rattle ?? 0.5) / 2;
    const rl = a.createOscillator(); rl.type = 'square'; rl.frequency.setValueAtTime(o.rattleHz ?? 28, t);
    if (o.rattleHz1) rl.frequency.linearRampToValueAtTime(o.rattleHz1, end);
    const rlg = a.createGain(); rlg.gain.value = (o.rattle ?? 0.5) / 2; rl.connect(rlg).connect(rat.gain); oscs.push(rl);
    // breath and spit in the throat
    const ns = a.createBufferSource(); ns.buffer = noiseBuf; ns.loop = true;
    const nf = a.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = o.breathHz ?? 1100; nf.Q.value = 0.6;
    const ng = a.createGain(); ng.gain.value = o.breath ?? 0.5; ns.connect(nf).connect(ng).connect(pre);
    pre.connect(rat);
    const drive = crush(o.drive ?? 6); rat.connect(drive);
    // open-throat resonances, plus the chest
    const sum = a.createGain(); sum.gain.value = 1;
    for (const [hz, q, g] of o.formants || [[520, 4, 1], [950, 5, 0.8], [2300, 6, 0.35]]) {
      const f = a.createBiquadFilter(); f.type = 'bandpass'; f.frequency.setValueAtTime(hz, t);
      if (o.formantSweep) f.frequency.exponentialRampToValueAtTime(hz * o.formantSweep, end);
      f.Q.value = q; const fg = a.createGain(); fg.gain.value = g; drive.connect(f).connect(fg).connect(sum);
    }
    const chest = a.createBiquadFilter(); chest.type = 'lowpass'; chest.frequency.value = o.chestHz ?? 260; const cg = a.createGain(); cg.gain.value = o.chest ?? 0.9;
    drive.connect(chest).connect(cg).connect(sum);
    const top = a.createBiquadFilter(); top.type = 'lowpass'; top.frequency.value = o.top ?? 5200;
    let tail = sum.connect(top);
    if (o.hp) { const hp = a.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = o.hp; hp.Q.value = 0.7; tail = tail.connect(hp); }
    const g = a.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(o.gain, t + (o.att ?? 0.03));
    if (o.swell) g.gain.exponentialRampToValueAtTime(o.gain * o.swell, t + dur * 0.35);
    g.gain.setValueAtTime(o.gain * (o.swell ?? 1), t + dur * 0.55); g.gain.exponentialRampToValueAtTime(0.0001, end);
    tail.connect(g); g.connect(out); g.connect(verbIn);
    for (const s of oscs) { s.start(t); s.stop(end + 0.05); }
    ns.start(t, Math.random()); ns.stop(end + 0.05);
    return g;
  }
  // a low growl rising under the quiet before it comes (the "그르렁")
  function growl(t, dur, gain) {
    voice(t, { dur, f: [[0, 120], [dur, 140]], gain, rattle: 0.85, rattleHz: 22, rattleHz1: 30, drive: 4, breath: 0.45, breathHz: 1800, formants: [[800, 4, 0.8], [1600, 5, 0.6]], chest: 0.4, chestHz: 320, top: 4500, hp: 200, att: dur * 0.8, jit: 0.04 });
  }
  // animatronic: a metal clank as the jaw slams open, a buzzing electric edge, a rattle like loose parts
  function machine(t) {
    for (const [hz, g, d] of [[410, 0.35, 0.5], [1132, 0.22, 0.35], [2214, 0.16, 0.25], [3660, 0.1, 0.18]]) tone(t, d, { f0: hz, gain: g, att: 0.002 });
    noise(t, 0.05, { type: 'highpass', f0: 2500, q: 0.7, gain: 0.5, att: 0.001 });
    const bz = a.createOscillator(); bz.type = 'square'; bz.frequency.setValueAtTime(300, t); bz.frequency.exponentialRampToValueAtTime(220, t + 1.1);
    const ring = a.createGain(); ring.gain.value = 0; const rm = a.createOscillator(); rm.frequency.value = 730; rm.connect(ring.gain);
    const bf = a.createBiquadFilter(); bf.type = 'bandpass'; bf.frequency.value = 2700; bf.Q.value = 1.2;
    const bg = a.createGain(); env(bg, t, 0.02, 1.25, 0.22); const sh = crush(5);
    bz.connect(ring).connect(sh).connect(bf).connect(bg).connect(out);
    bz.start(t); rm.start(t); bz.stop(t + 1.3); rm.stop(t + 1.3);
    // loose parts rattling: noise pulses through a short metal comb
    const dl = a.createDelay(0.01); dl.delayTime.value = 0.0031; const fb = a.createGain(); fb.gain.value = 0.82; dl.connect(fb).connect(dl);
    const cg = a.createGain(); cg.gain.value = 0.5; dl.connect(cg).connect(out);
    for (let i = 0; i < 16; i++) noise(t + 0.05 + i * 0.055 + Math.random() * 0.02, 0.012, { type: 'highpass', f0: 1500, q: 0.7, gain: 0.25 * (1 - i / 18), att: 0.001, dest: dl });
  }
  function freeze(kind) { // everything goes quiet before it comes; for ① a growl rises in the quiet
    if (!ready()) return;
    const t = a.currentTime;
    bus.gain.cancelScheduledValues(t); bus.gain.setTargetAtTime(0.0001, t, 0.05);
    if (kind === 'growlRoar') growl(t + 0.02, 0.5, 0.22);
  }
  function pounce(kind) {
    if (!ready()) return;
    const t = a.currentTime + 0.005;
    // tuned against the reference clip: most of the energy at 1-6 kHz, little below 400 Hz
    const bright = { breathHz: 2900, chest: 0.12, chestHz: 300, top: 7800, hp: 620 };
    tone(t, 0.16, { f0: 95, f1: 48, gain: 0.35, att: 0.003 }); // a thump of weight behind it
    if (kind === 'growlRoar') voice(t, { ...bright, dur: 1.1, f: [[0, 205], [0.1, 280], [0.45, 215], [1.1, 150]], gain: 0.7, rattle: 0.5, rattleHz: 33, rattleHz1: 24, drive: 9, breath: 0.85, formants: [[1250, 3, 1], [2550, 4, 1], [3750, 5, 0.65]], formantSweep: 0.85, att: 0.02 });
    if (kind === 'machine') { voice(t + 0.02, { ...bright, dur: 1.05, f: [[0, 245], [0.08, 330], [1.05, 175]], gain: 0.7, rattle: 0.7, rattleHz: 42, drive: 12, breath: 0.7, breathHz: 3300, fifth: 0.25, formants: [[1500, 3, 1], [2900, 4, 1], [4300, 6, 0.6]], hp: 680, att: 0.012 }); machine(t); }
    if (kind === 'crack') voice(t, { ...bright, dur: 1.1, f: [[0, 210], [0.07, 340], [0.2, 235], [0.42, 310], [0.6, 220], [1.1, 160]], gain: 0.7, rattle: 0.6, rattleHz: 27, rattleHz1: 14, drive: 10, breath: 0.8, jit: 0.16, jitRate: 9, formants: [[1150, 3, 1], [2350, 4, 0.95], [3550, 5, 0.65]], att: 0.015 });
    if (kind === 'gargle') voice(t, { ...bright, dur: 1.2, f: [[0, 190], [0.18, 262], [1.2, 135]], gain: 0.75, rattle: 0.95, rattleHz: 20, rattleHz1: 36, drive: 9, breath: 1.0, breathHz: 3000, jit: 0.12, jitRate: 7, formants: [[1050, 3, 1], [2250, 4, 1], [3450, 5, 0.7]], formantSweep: 1.1, hp: 580, att: 0.025 });
    noise(t, 0.25, { f0: 1800, f1: 600, q: 0.8, gain: 0.3, att: 0.006 }); // the rush of air as it comes
  }
  function cut() {
    if (!ready()) return;
    const t = a.currentTime + 0.005;
    muffle.frequency.cancelScheduledValues(t); muffle.frequency.setValueAtTime(900, t); muffle.frequency.exponentialRampToValueAtTime(500, t + 1.2);
    // the ringing goes around the muffle, straight out
    const o = a.createOscillator(); o.frequency.value = 3400; const g = a.createGain(); env(g, t, 0.01, 1.8, 0.06);
    o.connect(g).connect(a.destination); o.start(t); o.stop(t + 1.9);
    tone(t + 0.35, 0.13, { f0: 62, f1: 42, gain: 0.45, att: 0.005 }); tone(t + 0.52, 0.15, { f0: 56, f1: 38, gain: 0.32, att: 0.005 });
  }
  function preview(kind) { if (ready()) { freeze(kind); setTimeout(() => { pounce(kind); setTimeout(restore, 1800); }, kind === 'growlRoar' ? 520 : 60); } }
  function previewBite(kind) { if (ready()) { bite(kind); setTimeout(restore, 2600); } }
  // ---------- the bite, then the dark ----------
  // one crack: a hard click and the short ring of bone around it
  function crack(t, g, f) {
    noise(t, 0.003, { type: 'highpass', f0: 1200, q: 0.7, gain: g, att: 0.0004 });
    noise(t, 0.03 + Math.random() * 0.03, { f0: f, f1: f * 0.8, q: 10, gain: g * 2.2, att: 0.0005 });
    noise(t, 0.012, { f0: f * 0.45, q: 3, gain: g * 0.9, att: 0.0005 });
  }
  // 우-드-득: three breaks, each a cluster of cracks, closer together and harder each time,
  // over a bed of splintering, wet flesh giving, and the thud of the jaw
  function crunch(t, big = 1) {
    noise(t, 0.008, { f0: 4300, q: 3, gain: 0.7 * big, att: 0.0005 });                       // teeth meeting
    tone(t, 0.16, { f0: 120, f1: 48, gain: 0.8 * big, att: 0.002 });                          // the jaw's thud
    const breaks = [[0.02, 3, 0.05, 0.45], [0.13, 5, 0.06, 0.7], [0.25, 8, 0.075, 1.0]];
    for (const [dt, n, span, g] of breaks) {
      for (let i = 0; i < n; i++) { const u = (i / n) ** 1.5; crack(t + dt + u * span + Math.random() * 0.006, g * big * (0.5 + 0.5 * Math.random()) * 1.15, 900 + Math.random() * 3200); }
      tone(t + dt, 0.07, { f0: 95, f1: 55, gain: 0.35 * g * big, att: 0.002 });             // each break thumps in the skull
    }
    for (let i = 0; i < 45; i++) noise(t + 0.02 + Math.random() * 0.4, 0.0015, { type: 'highpass', f0: 2600, q: 0.7, gain: (0.14 + 0.2 * Math.random()) * big, att: 0.0003 }); // splinters
    for (let i = 0; i < 6; i++) noise(t + 0.03 + i * 0.06 + Math.random() * 0.03, 0.09, { f0: 380 + Math.random() * 500, f1: 240, q: 2.5, gain: 0.26 * big, att: 0.01 }); // wet give
  }
  function bite(kind) {
    if (!ready()) return;
    const t = a.currentTime + 0.005;
    crunch(t);
    // the crunch is heard clear; then the world goes muffled and far away, as if heard from inside
    muffle.frequency.cancelScheduledValues(t); muffle.frequency.setValueAtTime(18000, t + 0.42);
    muffle.frequency.exponentialRampToValueAtTime(1400, t + 0.9); muffle.frequency.exponentialRampToValueAtTime(320, t + 2.4);
    if (kind === 'chew') for (let i = 1; i <= 3; i++) { const u = t + 0.5 * i; crunch(u, 0.65 - i * 0.08); noise(u + 0.12, 0.28, { f0: 600, f1: 220, q: 2, gain: 0.2, att: 0.02 }); }
    if (kind === 'gulp') { tone(t + 0.6, 0.38, { f0: 300, f1: 75, gain: 0.45, att: 0.02 }); noise(t + 0.6, 0.5, { type: 'lowpass', f0: 420, f1: 160, q: 2, gain: 0.25, att: 0.03 }); tone(t + 1.0, 0.6, { type: 'sawtooth', f0: 66, f1: 48, gain: 0.12, lp: 260, am: 15 }); }
    // the heart slows in the dark and stops
    [1.0, 2.0, 3.2].forEach((dt, i) => { const g = 0.5 - i * 0.14; tone(t + dt, 0.13, { f0: 62, f1: 42, gain: g, att: 0.005 }); tone(t + dt + 0.17, 0.15, { f0: 56, f1: 38, gain: g * 0.7, att: 0.005 }); });
  }
  function restore() { // light comes back; sound with it
    if (!a) return;
    const t = a.currentTime;
    muffle.frequency.cancelScheduledValues(t); muffle.frequency.setValueAtTime(Math.max(300, muffle.frequency.value), t); muffle.frequency.exponentialRampToValueAtTime(18000, t + 0.9);
    bus.gain.cancelScheduledValues(t); bus.gain.setTargetAtTime(1, t, 0.4);
  }
  function ready() { return enabled && ctx() && (opt.context || a.state === 'running'); }
  return {
    unlock() { if (!enabled) return; const c = ctx(); if (c && c.state !== 'running') c.resume(); },
    setEnabled(on) { enabled = on; if (!a) return; if (on) { a.resume(); } else { stopLoop(); a.suspend(); } },
    get enabled() { return enabled; },
    ambient, gape, freeze, pounce, bite, restore, preview, previewBite, cut, stop: () => a && stopLoop(),
  };
}

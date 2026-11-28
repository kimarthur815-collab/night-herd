# Cow moo candidates and moo-that-twists-into-the-monster candidates for Night Herd (all synthesized, no recordings).
# Run from the repo: python3 gen-moo.py (numpy, scipy, ffmpeg) -> .tmp/moo/*.mp3
import numpy as np, subprocess, os, wave
from scipy.signal import butter, sosfilt, fftconvolve
SR = 44100
OUT = '.tmp/moo'; os.makedirs(OUT, exist_ok=True)

def lp(x, f, o=2): return sosfilt(butter(o, f, 'low', fs=SR, output='sos'), x)
def hp(x, f, o=2): return sosfilt(butter(o, f, 'high', fs=SR, output='sos'), x)
def bp(x, lo, hi, o=2): return sosfilt(butter(o, [lo, hi], 'band', fs=SR, output='sos'), x)
def curve(pts, n):  # piecewise-linear over time: [(t, v), ...]
    t = np.arange(n) / SR; ts, vs = zip(*pts); return np.interp(t, ts, vs)
def smooth(x, sec=0.03):
    k = max(1, int(sec * SR)); return np.convolve(x, np.ones(k) / k, 'same')

def voice(dur, f0, F, amp, seed=0, jitter=0.012, breath=0.08, sub=None, growl=None, tilt=1.2, nh=60):
    """additive voice: harmonics of f0(t) shaped by formants F(t) = [(freq, bw, gain) arrays]; sub: amount of f0/2
    (the voice breaking into a lower, rougher pitch); growl: (rate, depth) amplitude flutter"""
    r = np.random.default_rng(seed); n = int(dur * SR)
    jit = 1 + jitter * smooth(r.standard_normal(n), 0.02) * 3
    f = f0 * jit; ph = 2 * np.pi * np.cumsum(f) / SR
    def env(fr):
        e = np.zeros(n)
        for Fc, B, g in F: e += g / (1 + ((fr - Fc) / (B / 2)) ** 2)
        return e
    y = np.zeros(n)
    for k in range(1, nh + 1):
        fk = f * k; on = fk < 7000
        if not on.any(): break
        y += np.sin(k * ph + r.random() * 6) * env(fk) * k ** -tilt * on
    if sub is not None:  # period doubling: odd half-harmonics come in
        for k in range(1, nh, 2):
            fk = f * k / 2; on = fk < 5000
            y += np.sin(k * ph / 2 + r.random() * 6) * env(fk) * (k / 2) ** -tilt * on * sub * 0.8
    nz = r.standard_normal(n); br = np.zeros(n)
    for Fc, B, g in F: br += bp(nz, max(60, np.mean(Fc) - np.mean(B)), min(9000, np.mean(Fc) + np.mean(B))) * np.mean(g)
    y = y + br * breath * 4
    if growl is not None:
        rate, depth = growl; gph = 2 * np.pi * np.cumsum(rate * (1 + 0.15 * smooth(r.standard_normal(n), 0.05))) / SR
        y *= 1 - depth * (0.5 + 0.5 * np.sin(gph)) ** 2
    return y * amp

def moo_formants(n, open_at, open_to=0.75, close=None, scale=1.0):
    """'mmm' (closed, nasal, dull) opening to 'OOO/aw' and closing again at the end"""
    pts = [(0, 0), (open_at, 0), (open_at + 0.25, 1)]
    if close: pts += [(close[0], 1), (close[1], 0.2)]
    o = curve(pts + [(99, pts[-1][1])], n) * open_to
    F1 = (250 + 380 * o) * scale; F2 = (900 + 250 * o) * scale; F3 = (2400 + 200 * o) * scale
    return [(F1, 120 + 80 * o, 1.0), (F2, 160 + 60 * o, 0.25 + 0.45 * o), (F3, 300, 0.05 + 0.12 * o), (250 * scale, 80, 0.5 * (1 - o))]

def ad(n, a, r, sus=1.0):
    e = np.ones(n) * sus; na, nr = int(a * SR), int(r * SR); e[:na] = np.linspace(0, sus, na) ** 1.5; e[n - nr:] *= np.linspace(1, 0, nr) ** 1.3; return e

def reverb(x, sec=1.6, wet=0.25, seed=1, dark=3500):
    r = np.random.default_rng(seed); m = int(sec * SR)
    ir = r.standard_normal((m, 2)) * np.exp(-np.arange(m) / (sec / 6.9 * SR))[:, None]
    ir = np.stack([lp(ir[:, 0], dark), lp(ir[:, 1], dark)], 1)
    w = np.stack([fftconvolve(x, ir[:, c])[:len(x)] for c in range(2)], 1); w /= np.max(np.abs(w)) + 1e-9
    d = np.stack([x, x], 1) / (np.max(np.abs(x)) + 1e-9); return d * (1 - wet) + w * wet

def save(name, x, lufs=-18):
    if x.ndim == 1: x = np.stack([x, x], 1)
    x = np.concatenate([x, np.zeros((int(0.4 * SR), 2))]); x = x / (np.max(np.abs(x)) + 1e-9) * 0.9
    p = f'{OUT}/{name}.wav'
    with wave.open(p, 'wb') as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes((x * 32767).astype('<i2').tobytes())
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', p, '-af', f'loudnorm=I={lufs}:TP=-1.5', '-ar', '44100', '-b:a', '160k', p[:-4] + '.mp3']); os.remove(p)

# ---------------- real cows ----------------
def moo(dur, f0pts, open_at, close, seed, amp=1.0, scale=1.0, jitter=0.012, breath=0.08):
    n = int(dur * SR); f0 = curve(f0pts, n)
    y = voice(dur, f0, moo_formants(n, open_at, close=close, scale=scale), 1.0, seed, jitter, breath)
    return y * ad(n, 0.12, 0.35) * amp

M1 = moo(1.3, [(0, 95), (0.3, 118), (0.9, 112), (1.3, 88)], 0.18, (0.85, 1.2), 1)
save('M1_짧고낮은음메', reverb(M1, 1.2, 0.18))
M2 = moo(2.6, [(0, 100), (0.4, 135), (1.6, 128), (2.2, 110), (2.6, 85)], 0.3, (2.0, 2.5), 2, breath=0.1)
save('M2_길게음메', reverb(M2, 1.4, 0.2))
n = int(2.2 * SR); a = moo(0.7, [(0, 105), (0.35, 125), (0.7, 100)], 0.1, (0.45, 0.65), 3); b = moo(1.4, [(0, 110), (0.3, 150), (1.0, 140), (1.4, 95)], 0.12, (1.0, 1.35), 4)
M3 = np.zeros(n); M3[:len(a)] += a * 0.7; i = int(0.8 * SR); M3[i:i + len(b)] += b
save('M3_음_메에_두번', reverb(M3, 1.3, 0.2))
M4 = moo(2.2, [(0, 92), (0.4, 120), (1.5, 115), (2.2, 86)], 0.25, (1.6, 2.1), 5, scale=0.95)
M4 = lp(M4, 1800); save('M4_멀리서음메', reverb(M4, 2.6, 0.5, 2, 2200), lufs=-24)

# ---------------- the moo that twists into the monster (2.5 s: as long as the change, the roar follows) ----------------
D = 2.5; n = int(D * SR); t = np.arange(n) / SR
def k_after(t0, t1): return np.clip((t - t0) / (t1 - t0), 0, 1)

# T1: it sinks: the moo goes down past any cow, the voice breaks into a rough lower pitch, the throat grows
k = k_after(0.7, 2.2) ** 1.6
f0 = curve([(0, 105), (0.35, 130), (0.7, 124)], n) * (1 - 0.68 * k)
F = moo_formants(n, 0.15, scale=1.0); F = [(Fc * (1 - 0.45 * k), B, g) for Fc, B, g in F]
T1 = voice(D, f0, F, 1, 11, jitter=0.012 + 0.05 * k, breath=0.08, sub=k, growl=None) * ad(n, 0.1, 0.25)
T1 *= 1 - 0.6 * k * (0.5 + 0.5 * np.sin(2 * np.pi * np.cumsum(28 + 20 * k) / SR)) ** 2  # a flutter in the throat
save('T1_낮게가라앉으며일그러짐', reverb(np.tanh(T1 / np.max(np.abs(T1)) * (1 + 3 * k)), 1.4, 0.22))

# T2: it skips: the moo catches and repeats like a broken record, each repeat lower, then a wet gargle
base = moo(0.9, [(0, 108), (0.3, 132), (0.9, 126)], 0.12, None, 12)
T2 = np.zeros(n); T2[:len(base)] += base * ad(len(base), 0.08, 0.02)
g0 = base[int(0.45 * SR):int(0.6 * SR)]; at = 0.9; rate = 1.0; i = 0
while at < 2.0:
    gr = np.interp(np.arange(0, len(g0), rate), np.arange(len(g0)), g0) * np.hanning(len(np.arange(0, len(g0), rate))) ** 0.3
    j = int(at * SR); T2[j:j + len(gr)] += gr[:max(0, n - j)] * (0.9 + 0.3 * i / 10)
    at += len(gr) / SR * (0.85 - 0.04 * i); rate *= 0.93; i += 1
r = np.random.default_rng(13); gur = bp(r.standard_normal(n), 150, 900) * (0.5 + 0.5 * np.sign(np.sin(2 * np.pi * np.cumsum(18 + 14 * r.random(n)) / SR))) * k_after(1.6, 2.1)
T2 += gur * 0.25 * np.max(np.abs(base)) / (np.max(np.abs(gur)) + 1e-9) * 1.6
save('T2_끊겨되풀이되다꾸르륵', reverb(T2, 1.2, 0.2))

# T3: it splits: one moo becomes two voices, one sliding up thin, one sliding down thick, grinding against each other
k = k_after(0.8, 2.3) ** 1.3
f0a = curve([(0, 104), (0.35, 128), (0.8, 122)], n)
A = voice(D, f0a * (1 + 0.9 * k), [(Fc * (1 + 0.5 * k), B, g) for Fc, B, g in moo_formants(n, 0.15)], 1, 21, jitter=0.012 + 0.03 * k)
B = voice(D, f0a * (1 - 0.55 * k), [(Fc * (1 - 0.35 * k), B, g) for Fc, B, g in moo_formants(n, 0.15)], 1, 22, jitter=0.012 + 0.04 * k, sub=k * 0.8)
T3 = (A * (1 - 0.3 * k) + B * np.minimum(1, k * 3) * 0.9) * ad(n, 0.1, 0.25)
save('T3_두목소리로찢어짐', reverb(np.tanh(T3 / np.max(np.abs(T3)) * (1 + 2 * k)), 1.4, 0.25))

# T4: strangled: the moo is choked off mid-breath, bones crack, and a low wet growl comes up out of it
k = k_after(0.75, 1.0)
f0 = curve([(0, 106), (0.35, 130), (0.75, 126), (1.0, 150), (1.1, 60), (2.5, 52)], n)
choke = 1 - 0.85 * k_after(0.75, 0.95) + 0.85 * k_after(1.25, 2.0)
F = [(Fc * (1 - 0.4 * k_after(1.1, 2.2)), Bw, g) for Fc, Bw, g in moo_formants(n, 0.15)]
T4 = voice(D, f0, F, 1, 31, jitter=0.012 + 0.06 * k_after(1.1, 2), breath=0.08 + 0.2 * k_after(1.1, 2), sub=k_after(1.2, 2.2), growl=(34, 0.7 * k_after(1.2, 2.0))) * choke * ad(n, 0.1, 0.3)
cr = np.zeros(n); r = np.random.default_rng(32)
for c0 in [0.82, 0.9, 0.97, 1.08, 1.13]:  # three-part crack: 우-드-득
    j = int(c0 * SR); m = int(0.03 * SR); cr[j:j + m] += bp(r.standard_normal(m), 900, 5000) * np.exp(-np.arange(m) / (0.004 * SR))
T4 = T4 / np.max(np.abs(T4)) + cr * 1.4
save('T4_목졸리듯끊기고뼈소리_으르렁', reverb(T4, 1.3, 0.2))
print(sorted(os.listdir(OUT)))

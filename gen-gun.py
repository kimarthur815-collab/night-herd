# New gunshot candidates for Night Herd (사용자: 총소리 아예 새로) — all synthesized here; a chosen one goes into sounds/
# Run from the repo: python3 gen-gun.py (numpy, scipy, ffmpeg) -> .tmp/gun2/*.mp3
import numpy as np, subprocess, os
from scipy.signal import butter, sosfilt, fftconvolve
SR = 44100
OUT = '.tmp/gun2'; os.makedirs(OUT, exist_ok=True)
rng = np.random.default_rng(5)

def lp(x, f, o=2): return sosfilt(butter(o, f, 'low', fs=SR, output='sos'), x)
def hp(x, f, o=2): return sosfilt(butter(o, f, 'high', fs=SR, output='sos'), x)
def bp(x, lo, hi, o=2): return sosfilt(butter(o, [lo, hi], 'band', fs=SR, output='sos'), x)
def T(sec): return np.arange(int(sec * SR)) / SR
def at(n, sig, t0):
    y = np.zeros(n); i = int(t0 * SR); m = min(len(sig), n - i); y[i:i + m] += sig[:m]; return y
def noise(sec, seed=0): return np.random.default_rng(seed).standard_normal(int(sec * SR))
def ex(sec, tau): return np.exp(-T(sec) / tau)

def crack(sec=0.03, bright=12000, seed=1):  # the supersonic snap and the muzzle blast's first edge: an N-wave and a hiss
    n = int(sec * SR); t = T(sec)
    nw = np.zeros(n); w = int(0.0009 * SR); nw[:w] = np.linspace(1, -1, w)
    return nw * 1.0 + lp(noise(sec, seed), bright, 4) * np.exp(-t / 0.004) * 0.8
def blast(sec, tau, lo, hi, seed=2, sweep=None):  # the gas: a burst of noise, darkening as it dies
    t = T(sec); x = noise(sec, seed) * np.exp(-t / tau)
    y = bp(x, lo, hi, 2)
    if sweep:  # (from, to) lowpass, crossfaded in two stages
        a, b = lp(y, sweep[0], 2), lp(y, sweep[1], 2); k = np.clip(t / (tau * 3), 0, 1); y = a * (1 - k) + b * k
    return y
def thump(sec=0.4, f0=80, f1=30, tau=0.09):  # the low push in the chest
    t = T(sec); f = f1 + (f0 - f1) * np.exp(-t / 0.05); return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / tau)
def click(seed=3):  # the hammer falling, a hair before the shot
    s = bp(noise(0.012, seed), 2500, 7000) * ex(0.012, 0.0015); return s
def room(x, sec, wet, dark, seed=4, pre=0.0):  # an outdoor tail: diffuse, darkening
    r = np.random.default_rng(seed); m = int(sec * SR); t = np.arange(m) / SR
    ir = r.standard_normal(m) * np.exp(-t / (sec / 6.9)); ir = lp(ir, dark, 2); ir[: int(pre * SR)] = 0
    w = fftconvolve(x, ir)[:len(x)]; return x + w / (np.max(np.abs(w)) + 1e-9) * np.max(np.abs(x)) * wet
def echoes(x, taps):  # discrete reflections off hills and trees: (delay, gain, lowpass)
    y = x.copy()
    for d, g, f in taps: y += at(len(x), lp(x, f, 2) * g, d)[:len(x)]
    return y
def ring(sec, f=3600, tau=1.2):  # the ears ringing
    t = T(sec); return np.sin(2 * np.pi * f * t) * (1 - np.exp(-t / 0.15)) * np.exp(-t / tau) * (1 + 0.15 * np.sin(2 * np.pi * 4 * t))
def metal(sec=0.6, seed=6):  # the steel answering: a few inharmonic partials
    t = T(sec); r = np.random.default_rng(seed)
    return sum(np.sin(2 * np.pi * f * t + r.random() * 6) * np.exp(-t / d) * g for f, d, g in [(2210, 0.18, 1), (3470, 0.12, 0.7), (4890, 0.08, 0.5), (6120, 0.05, 0.35), (1530, 0.22, 0.4)])

def finish(name, x, drive=1.5):
    x = x / (np.max(np.abs(x)) + 1e-9); w = int(0.1 * SR)
    loud = lambda y: 10 * np.log10(np.convolve(y ** 2, np.ones(w) / w, 'valid').max())
    while True:  # all about as loud (the loudest tenth of a second near -8 dB), through a gentle ceiling like the game's
        y = np.tanh(x * drive) / np.tanh(drive) * 0.95
        if loud(y) >= -8.5 or drive > 8: break
        drive *= 1.15
    x = y
    nz = np.nonzero(np.abs(x) > 2e-4)[0]; x = x[: nz[-1] + int(0.05 * SR)]
    x = np.concatenate([np.zeros(int(0.03 * SR)), x])
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'f32le', '-ar', str(SR), '-ac', '1', '-i', 'pipe:', '-b:a', '192k', f'{OUT}/{name}.mp3'], input=x.astype('<f4').tobytes())
    w = int(0.1 * SR); e = np.convolve(x ** 2, np.ones(w) / w, 'valid'); print(name, 'len', round(len(x) / SR, 2), 'loudest 0.1 s', round(10 * np.log10(e.max()), 1), 'dB', 'drive', round(drive, 2))

D = 3.5; n = int(D * SR)

# N1: heavy black powder — a big low boom and a long smoky roar, the crack dull
x = at(n, click(), 0) * 0.15 + at(n, crack(bright=6000), 0.012) * 0.7 + at(n, blast(0.9, 0.11, 60, 5000, 2, (5000, 700)), 0.012) * 1.6 + at(n, thump(0.6, 70, 28, 0.14), 0.012) * 1.4
x = room(x, 2.2, 0.35, 1500)
finish('N1_묵직한흑색화약_쿠웅', x)

# N2: short and sharp — a hard "탕!", almost nothing after
x = at(n, click(), 0) * 0.2 + at(n, crack(0.025, 14000, 11), 0.012) * 1.2 + at(n, blast(0.25, 0.025, 300, 9000, 12, (9000, 2500)), 0.012) * 1.0 + at(n, thump(0.2, 110, 50, 0.03), 0.012) * 0.6
x = room(x, 0.5, 0.15, 4000, 13)
finish('N2_짧고날카로운_탕', x, 2.0)

# N3: across the open field — "타앙", then the night rolls it away off the hills like far thunder
x = at(n, crack(0.03, 10000, 21), 0.0) * 1.0 + at(n, blast(0.5, 0.05, 150, 7000, 22, (7000, 1500)), 0) * 1.2 + at(n, thump(0.4, 90, 35, 0.07), 0) * 0.9
x = echoes(x, [(0.31, 0.32, 2500), (0.62, 0.22, 1800), (0.95, 0.2, 1400), (1.4, 0.14, 1000), (1.9, 0.1, 800), (2.5, 0.06, 600)])
x = room(x, 3.0, 0.4, 900, 23, pre=0.05)
finish('N3_들판에퍼지는_타앙_우르르', x)

# N4: right by your ear — the blast hits, then the world goes dull and the ears ring
dry = at(n, crack(0.03, 13000, 31), 0) * 1.2 + at(n, blast(0.4, 0.04, 120, 9000, 32, (9000, 2000)), 0) * 1.3 + at(n, thump(0.35, 100, 40, 0.06), 0) * 1.0
t = np.arange(n) / SR; k = np.clip((t - 0.06) / 0.1, 0, 1)
x = dry * (1 - k) + lp(room(dry, 1.6, 0.4, 2000, 33), 500, 2) * k * 0.9 + at(n, ring(3.0, 3700, 1.1), 0.05) * 0.07
finish('N4_귀때리고_이명', x)

# N5: the revolver's steel — the shot with the frame and cylinder ringing "팅" under it
x = at(n, click(41), 0) * 0.25 + at(n, crack(0.03, 11000, 42), 0.012) * 1.0 + at(n, blast(0.4, 0.045, 150, 8000, 43, (8000, 1800)), 0.012) * 1.1 + at(n, thump(0.35, 95, 40, 0.06), 0.012) * 0.8 + at(n, metal(0.7, 44), 0.014) * 0.22
x = room(x, 1.4, 0.25, 2200, 45)
finish('N5_쇠가울리는_탕팅', x)

# N6: big like a film — a sub drop, a split-second double blast, and a slap off a near wall of trees
x = at(n, crack(0.03, 12000, 51), 0) * 1.0 + at(n, blast(0.5, 0.06, 80, 8000, 52, (8000, 1200)), 0) * 1.4 + at(n, blast(0.3, 0.03, 300, 6000, 53), 0.018) * 0.6 + at(n, thump(0.8, 120, 25, 0.18), 0) * 1.6
x = echoes(x, [(0.12, 0.35, 3000), (0.24, 0.15, 2000)])
x = room(x, 1.8, 0.3, 1300, 54)
finish('N6_영화처럼_크게_쾅', x, 2.2)

# ---------------- after the user's reference (a pistol shot sound effect, 사용자: 이것처럼 좀 더 '탕') ----------------
# what it is: a sudden edge with a 1–2.5 kHz crackle for the first 50 ms, then a dense body held for about 0.15 s, its weight
# in 100–1000 Hz with a ringing "탕" near 330 Hz and a low push near 75 Hz, then a dark tail (under ~900 Hz) for 1.5 s
OUT = '.tmp/gun3'; os.makedirs(OUT, exist_ok=True)
def held(sec, hold, tau, lo, hi, seed):  # the body: noise held flat for a moment, then dying
    t = T(sec); e = np.where(t < hold, 1.0, np.exp(-(t - hold) / tau)); return bp(noise(sec, seed), lo, hi, 2) * e * (1 - np.exp(-t / 0.002))
def tone(sec, f, tau, drop=0.06, seed=0):  # a ringing pitch that sags a little
    t = T(sec); ff = f * (1 - drop * (1 - np.exp(-t / 0.15))); return np.sin(2 * np.pi * np.cumsum(ff) / SR) * np.exp(-t / tau)
def edge(seed):  # the first 50 ms: a crackle in 1–2.5 kHz on a hard edge
    return at(int(0.06 * SR), crack(0.02, 9000, seed), 0) * 0.8 + bp(noise(0.06, seed + 1), 900, 2600, 2) * ex(0.06, 0.018) * 1.2
def tail(x, sec, f, seed): return room(x, sec, 0.45, f, seed, pre=0.02)

# S1: as close to the reference as it can be made
def s1_dry():
    return (at(n, edge(61), 0) * 1.6 + at(n, held(0.9, 0.13, 0.12, 110, 1300, 62), 0) * 1.3 + at(n, held(0.6, 0.05, 0.05, 1000, 6000, 65), 0) * 0.25
            + at(n, tone(1.2, 334, 0.16, 0.05), 0) * 0.35 + at(n, tone(1.0, 168, 0.12, 0.05), 0) * 0.2 + at(n, thump(0.6, 95, 72, 0.13), 0) * 0.25)
x = tail(lp(s1_dry(), 10000, 2), 1.6, 1700, 63)
finish('S1_참고소리처럼_탕', x)
# S2: more "탕": the ring stronger and a touch higher, the edge brighter, the tail shorter
x = (at(n, edge(71), 0) * 2.0 + at(n, held(0.7, 0.09, 0.08, 120, 1500, 72), 0) * 1.1 + at(n, held(0.5, 0.04, 0.04, 1200, 7000, 75), 0) * 0.35
     + at(n, tone(1.0, 360, 0.2, 0.07), 0) * 0.6 + at(n, tone(0.8, 720, 0.09, 0.07), 0) * 0.15 + at(n, thump(0.5, 95, 70, 0.11), 0) * 0.25)
x = tail(lp(x, 11000, 2), 1.1, 1900, 73)
finish('S2_더탕하게_울림세게', x)
# S3: S1 out in the night field: the hills send it back
x = echoes(lp(s1_dry(), 10000, 2), [(0.34, 0.28, 1800), (0.72, 0.18, 1300), (1.2, 0.12, 900), (1.8, 0.07, 700)])
x = tail(x, 2.2, 1500, 64)
finish('S3_참고소리처럼+들판메아리', x)

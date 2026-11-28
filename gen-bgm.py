# BGM candidates for Night Herd (all synthesized here, original material)
import numpy as np, subprocess, os
from scipy.signal import butter, sosfilt, fftconvolve
SR = 44100
rng = np.random.default_rng(7)
OUT = '.tmp/bgm'  # run from the repo: python3 gen-bgm.py (numpy, scipy, ffmpeg). The game files in sounds/ are A2, A3 and game_chase, loudness-matched to -18 LUFS (ffmpeg loudnorm); os.makedirs(OUT, exist_ok=True)

def t_(sec): return np.arange(int(sec * SR)) / SR
def lp(x, f, o=2): return sosfilt(butter(o, f, 'low', fs=SR, output='sos'), x)
def hp(x, f, o=2): return sosfilt(butter(o, f, 'high', fs=SR, output='sos'), x)
def bp(x, lo, hi, o=2): return sosfilt(butter(o, [lo, hi], 'band', fs=SR, output='sos'), x)
def saw(f, t, ph=0): return 2 * ((f * t + ph) % 1) - 1
def env_ad(n, a, d):
    e = np.ones(n); na = int(a * SR); e[:na] = np.linspace(0, 1, na)
    e[na:] = np.exp(-np.arange(n - na) / (d * SR)); return e
def reverb(x, sec=3.0, wet=0.35, seed=1):
    r = np.random.default_rng(seed); n = int(sec * SR)
    ir = r.standard_normal((n, 2)) * np.exp(-np.arange(n) / (sec / 6.9 * SR))[:, None]
    ir[:, 0] = lp(ir[:, 0], 6000); ir[:, 1] = lp(ir[:, 1], 6000)
    if x.ndim == 1: x = np.stack([x, x], 1)
    w = np.stack([fftconvolve(x[:, c], ir[:, c])[:len(x)] for c in range(2)], 1)
    w /= np.max(np.abs(w)) + 1e-9; d = x / (np.max(np.abs(x)) + 1e-9)
    return d * (1 - wet) + w * wet
def fade(x, a=1.5, b=2.5):
    n = len(x); e = np.ones(n); e[:int(a * SR)] = np.linspace(0, 1, int(a * SR)); e[-int(b * SR):] = np.linspace(1, 0, int(b * SR))
    return x * (e[:, None] if x.ndim > 1 else e)
def save(name, x, peak=0.7):
    if x.ndim == 1: x = np.stack([x, x], 1)
    x = x / (np.max(np.abs(x)) + 1e-9) * peak
    p = f'{OUT}/{name}.wav'; import wave
    with wave.open(p, 'wb') as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes((x * 32767).astype('<i2').tobytes())
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', p, '-b:a', '192k', p[:-4] + '.mp3']); os.remove(p)
def pan(x, p):  # p -1..1
    return np.stack([x * np.sqrt((1 - p) / 2), x * np.sqrt((1 + p) / 2)], 1)

# ---------------- A. low drones (40 s) ----------------
D = 40; t = t_(D)
# A1: deep hum, detuned low saws through a slowly breathing filter
x = sum(saw(f, t, rng.random()) for f in [41.2, 41.5, 61.7, 82.1])
cut = 140 + 110 * (0.5 + 0.5 * np.sin(2 * np.pi * t / 13))
# the slow swell: mix two fixed lowpasses
lo, hi = lp(x, 120, 4), lp(x, 320, 4); k = (cut - 140) / 220
y = lo * (1 - k) + hi * k
st = np.stack([y * (1 + 0.15 * np.sin(2 * np.pi * t / 7)), y * (1 + 0.15 * np.sin(2 * np.pi * t / 7 + 2))], 1)
save('A1_낮은웅웅', fade(reverb(st, 4, 0.3)))

# A2: dissonant cluster (a semitone apart) beating slowly, with a far metal groan now and then
x = sum(np.sin(2 * np.pi * f * t + 3 * np.sin(2 * np.pi * 0.07 * t * (i + 1))) * a for i, (f, a) in enumerate([(55, 1), (58.3, 0.8), (110.2, 0.35), (116.5, 0.3), (164.8, 0.12)]))
x *= 0.75 + 0.25 * np.sin(2 * np.pi * t / 9)
g = np.zeros_like(x)
for t0 in [9, 23, 34]:
    n = int(3.5 * SR); tt = np.arange(n) / SR; f = 210 * (1 - 0.25 * tt / 3.5)
    s = sum(np.sin(2 * np.pi * np.cumsum(f * m) / SR) / m for m in [1, 2.76, 5.4]) * np.sin(np.pi * tt / 3.5) ** 2
    i0 = int(t0 * SR); g[i0:i0 + n] += bp(s, 150, 1500) * 0.35
save('A2_불협화음울림', fade(reverb(pan(x, -0.1) + pan(g, 0.6), 5, 0.4)))

# A3: breathing low noise (like air in a huge throat), slow uneven swells
nz = rng.standard_normal(len(t))
b1, b2 = bp(nz, 60, 180, 2), bp(nz, 180, 420, 2)
sw = (0.5 + 0.5 * np.sin(2 * np.pi * t / 6.3)) ** 2 * 0.7 + 0.3
sw2 = (0.5 + 0.5 * np.sin(2 * np.pi * t / 6.3 - 0.8)) ** 3
x = b1 * sw * 2.5 + b2 * sw2 * 1.2 + np.sin(2 * np.pi * 36.7 * t) * 0.25
save('A3_숨쉬는바람드론', fade(reverb(np.stack([x, np.roll(x, 900)], 1), 3, 0.3)))

# ---------------- B. sparse outdoor, minor (48 s) ----------------
def pluck(f, dur, bright=0.5, seed=0):  # Karplus-Strong string
    r = np.random.default_rng(seed); n = int(dur * SR); N = int(SR / f)
    buf = lp(r.uniform(-1, 1, N), 1500 + 5000 * bright); out = np.zeros(n)
    for i in range(n):
        out[i] = buf[i % N]; buf[i % N] = 0.497 * (buf[i % N] + buf[(i + 1) % N])
    return out
def nf(name):
    names = {'C': 0, 'D': 2, 'E': 4, 'F': 5, 'G': 7, 'A': 9, 'B': 11}
    n = names[name[0]] + (1 if '#' in name else 0); o = int(name[-1]); return 440 * 2 ** ((n - 9) / 12 + (o - 4))
def place(track, sig, at, p=0):
    i = int(at * SR); s = pan(sig, p); n = min(len(s), len(track) - i)
    if n > 0: track[i:i + n] += s[:n]

D = 48; T = np.zeros((int(D * SR), 2))
# B1: lone guitar, A minor, a few notes then long silence (only the strings ring)
seq = [(0, 'A2', .6), (0.05, 'E3', .4), (1.4, 'C4', .3), (2.8, 'B3', .3), (4.6, 'A3', .3),
       (9, 'F2', .6), (9.05, 'C3', .4), (10.4, 'A3', .3), (11.8, 'G3', .3), (13.6, 'E3', .3),
       (18, 'D3', .5), (19.4, 'F3', .3), (20.8, 'E3', .3), (22.6, 'C3', .3),
       (27, 'E2', .6), (27.05, 'B2', .4), (28.4, 'G#3', .3), (30.2, 'B3', .25), (32.5, 'A3', .3),
       (38, 'A2', .5), (38.05, 'E3', .35), (39.6, 'C4', .22)]
for i, (at, n, a) in enumerate(seq): place(T, pluck(nf(n), 6, 0.35, i) * a, at, -0.2 + 0.1 * (i % 3))
amb = bp(rng.standard_normal(len(T)), 200, 900) * 0.01 * (1 + 0.5 * np.sin(2 * np.pi * t_(D) / 11))
T += pan(amb, 0)
save('B1_외로운기타', fade(reverb(T, 3.5, 0.45), 0.2, 4))

# B2: distant harmonica-like reed, long breaths, guitar drone underneath
def reed(f, dur, seed=0):
    tt = t_(dur); r = np.random.default_rng(seed)
    vib = 1 + 0.006 * np.sin(2 * np.pi * 5.2 * tt) * np.clip(tt / 0.8, 0, 1)
    ph = np.cumsum(f * vib) / SR
    s = np.sign(np.sin(2 * np.pi * ph)) * 0.6 + saw(1, ph) * 0.4
    s = bp(s, 400, 3200) + bp(s, 900, 1300) * 1.5 + lp(r.standard_normal(len(tt)), 3000) * 0.04
    e = np.minimum(1, tt / 0.35) * np.minimum(1, (dur - tt) / 0.8); return s * e
T = np.zeros((int(D * SR), 2))
for at, n, dur in [(2, 'E4', 3.2), (6, 'D4', 1.6), (7.8, 'C4', 3.5), (14, 'A3', 4.5),
                   (22, 'E4', 2.4), (24.6, 'G4', 1.4), (26.2, 'E4', 1.4), (27.8, 'D4', 4), (35, 'A3', 5.5)]:
    place(T, reed(nf(n), dur) * 0.22, at, 0.35)
for i, at in enumerate([0, 14, 28, 42]): place(T, pluck(nf('A2'), 8, 0.2, 50 + i) * 0.45, at, -0.3); place(T, pluck(nf('E3'), 8, 0.2, 60 + i) * 0.25, at + 0.04, -0.3)
save('B2_먼하모니카', fade(reverb(T, 4.5, 0.55, 3), 0.2, 4))

# ---------------- C. only while it comes at you (16 s, gets faster) ----------------
def drum(dur, f0=55, seed=0):
    tt = t_(dur); f = f0 * (1 + 1.5 * np.exp(-tt * 30)); s = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 9)
    return s + lp(np.random.default_rng(seed).standard_normal(len(tt)), 800) * np.exp(-tt * 40) * 0.3
D = 16
# C1: a heartbeat-like double drum that speeds up, a rising dissonant string-ish tone
T = np.zeros((int(D * SR), 2)); at, i = 0.0, 0
while at < D - 0.5:
    bpm = 70 + 110 * (at / D) ** 1.4; place(T, drum(0.5, 50, i), at, 0); place(T, drum(0.5, 46, i + 99) * 0.6, at + 60 / bpm * 0.28, 0)
    at += 60 / bpm; i += 1
tt = t_(D); f = 110 * 2 ** (tt / D * 7 / 12)
s = sum(saw(1, np.cumsum(f * m) / SR + rng.random()) for m in [1, 1.0595, 1.003]) / 3
s = bp(s, 150, 2500) * (tt / D) ** 1.5 * 0.4 * (1 + 0.3 * np.sin(2 * np.pi * 6 * tt))
T += np.stack([s, np.roll(s, 300)], 1)
save('C1_빨라지는북', fade(reverb(T, 2, 0.2), 0.05, 1.0))

# C2: low staccato strings (ostinato, minor), stabs on top, tighter and tighter
T = np.zeros((int(D * SR), 2)); pat = ['A1', 'A1', 'C2', 'A1', 'A1', 'D#2', 'A1', 'E2']
def bow(f, dur, seed):
    tt = t_(dur); s = sum(saw(f * m, tt, np.random.default_rng(seed + j).random()) for j, m in enumerate([1, 1.004, 0.996]))
    return bp(s, 60, 1800) * np.minimum(1, tt / 0.01) * np.exp(-tt / (dur * 0.5))
at, i = 0.0, 0
while at < D - 0.3:
    bpm = 120 + 80 * (at / D); step = 60 / bpm / 2
    place(T, bow(nf(pat[i % 8]), step * 0.9, i) * 0.3, at, -0.2)
    if i % 16 == 15 and at > 4: place(T, bow(nf('A#3'), 0.4, 500 + i) * 0.2 + bow(nf('E4'), 0.4, 900 + i) * 0.15, at, 0.3)
    at += step; i += 1
save('C2_스타카토현악', fade(reverb(T, 2.2, 0.25), 0.05, 1.0))

# C2 for the game (사용자: 찌르는 높은 음이 빨리 나오게): the stabs from the first bar; 24 s — it speeds up for 16 s,
# then holds at the top speed (the game loops 16..24 s if the fight lasts longer)
RAMP, D2 = 16, 24
T = np.zeros((int((D2 + 2.5) * SR), 2)); at, i = 0.0, 0
while at < D2:
    bpm = 120 + 80 * min(1, at / RAMP); step = 60 / bpm / 2
    place(T, bow(nf(pat[i % 8]), step * 0.9, i) * 0.3, at, -0.2)
    if i % 16 == 3: place(T, bow(nf('A#3'), 0.4, 500 + i) * 0.2 + bow(nf('E4'), 0.4, 900 + i) * 0.15, at, 0.3)
    at += step; i += 1
W = reverb(T, 2.2, 0.25); L = int(D2 * SR)
save('game_chase', W[:L])

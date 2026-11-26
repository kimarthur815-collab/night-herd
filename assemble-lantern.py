# Assemble lantern-src.js from lantern-template.js plus the shared parts of the first slice.
src = open('slice-src.js').read()
def block(a, b):
    i = src.index(a); j = src.index(b, i); return src[i:j]
cow = block("const U = {", "// ---------------- environment ----------------")
env = block("// ---------------- environment ----------------", "// ---------------- post: painterly")
kuwa = block("const KuwaharaShader = {", "const FinalShader = {")
snd = block("// ---------------- sound (all procedural) ----------------", "const sound = new Sound();")
player = block("// ---------------- player ----------------", "// ---------------- ledger, counting, ending ----------------")
idle = block("// ---------------- cows: idle life + stare ----------------", "// ---------------- eye adaptation")
adapt = block("// ---------------- eye adaptation", "// ---------------- frame loop ----------------")
def sub(text, old, new):
    assert old in text, old[:70]
    return text.replace(old, new)
cow = sub(cow, "const U = { uLanternPos: { value: new THREE.Vector3() }, uEyeGain: { value: 200 }, uTime: { value: 0 } };", "const U = { uLanternPos: { value: new THREE.Vector3() }, uEyeGain: { value: 200 }, uEyeSelf: { value: 0 }, uTime: { value: 0 } };")
cow = sub(cow, "uniform vec3 uLanternPos; uniform float uEyeGain; uniform vec3 uBody;", "uniform vec3 uLanternPos; uniform float uEyeGain; uniform float uEyeSelf; uniform vec3 uBody;")
cow = sub(cow, "totalEmissiveRadiance += vEye * vec3(0.95,1.0,0.92) * uEyeGain * pow(fc, 6.0) / pow(max(dl, 1.3), 1.5); }", "totalEmissiveRadiance += vEye * vec3(0.95,1.0,0.92) * (uEyeGain * pow(fc, 6.0) / pow(max(dl, 1.3), 1.5) + uEyeSelf * pow(fc, 4.0)); }")
cow = sub(cow, "m.customProgramCacheKey = () => 'cow-rig-v1';", "m.customProgramCacheKey = () => 'cow-rig-v2';")
player = sub(player, "  if (e.code === 'KeyE') { toggleLedger(); return; }", "  if (e.code === 'KeyF') { if (!e.repeat) lampAction(); return; }\n  if (e.code === 'Space') { raiseKey = true; e.preventDefault(); return; }")
player = sub(player, "addEventListener('keyup', (e) => keys.delete(e.code));", "addEventListener('keyup', (e) => { keys.delete(e.code); if (e.code === 'Space') raiseKey = false; });")
t = open('lantern-template.js').read()
for k, v in [('/*COW*/', cow), ('/*ENV*/', env), ('/*KUWA*/', kuwa), ('/*SOUND*/', snd), ('/*PLAYER*/', player), ('/*IDLE*/', idle), ('/*ADAPT*/', adapt)]:
    assert k in t, k
    t = t.replace(k, v)
open('lantern-src.js', 'w').write(t)
print('assembled', len(t))

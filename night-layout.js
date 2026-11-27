// Night Herd — the night scene (밤 장면): every place and size in metres, in this one file.
// "임시" marks a value Claude picked that the user has not decided yet. Change them here.
// World axes as in game-src.js: you look along -z, +x is to your right, y is up. The campfire is at (-1.6, 0, 1.5).

export const NL = {
  told: 11, // the number the cowboy says before the night (기획서 임시 대사 "열한 마리"); the herd really has one more
  standZ: 1.0, // 임시: where you stand at every place (자리), 1 m in front of the camp
  // 임시: the places you stand, left to right, a few steps apart (further from the fire each time), and the cows in front
  // of each: rows = how many in the front row, then in each row up the rise behind it (fewer further back, three at most).
  // The front rows join into one ragged line across. 6 + 3 + 3 = 12 = told + 1
  stations: [
    { x: 0, rows: [3, 2, 1] },
    { x: 4, rows: [2, 1] },
    { x: 8, rows: [2, 1] },
  ],
  front: {
    z: -3.6, // 임시: the front row stands about 4.6 m in front of you
    gap: [0.95, 1.5], // 임시: side-by-side spacing of the front row (centre to centre), uneven
    jitterZ: 0.7, // 임시: some a little forward, some back
    turn: 0.45, // 임시: how far a cow may be turned away from facing you (radians, either way)
  },
  // the rows behind stand up the rise (괴물 후보 페이지와 같은 거리): metres behind the front row
  rowBack: [2.6, 4.0, 5.4],
  rowGap: 1.35, // spacing in the rows behind (괴물 후보 페이지와 같음)
  rowJitter: [0.35, 0.3], // x, z
  // the rise behind the herd (괴물 후보 페이지의 언덕과 같은 모양): starts gently just behind the front row,
  // steeper from the second row; rows behind stand about 0.3, 0.8 and 1.3 m higher
  hill: { start: 1.4, top: 2.4, width: 140, depth: 30, edge: 18 },
  lean: 0.5, // 임시: a cow on the rise leans with only half the slope (the legs take the rest), so its head stays up and shows over the row in front
  coat: [0.06, 0.16], // 임시: dark cows (this renderer shows them lighter than the monster page does, so the numbers are lower); the back rows darker still
  backDark: 0.8,
  scale: [0.95, 1.05],
  look: { pitch: -0.03 }, // 임시: on a phone the view at each place looks straight at the herd (no looking around); PC looks with the mouse
  walk: { speed: 1.4, turn: 0.6 }, // 임시: walking to the next place: m/s, and how far you turn toward where you walk (radians)
  hint: { idle: 12, misses: 3 }, // 임시: say the how-to line again after this many seconds doing nothing, or this many taps on nothing
  matches: 1, // 성냥: 랜턴이 꺼지면 한 번 다시 켤 수 있다 (사용자). 채우는 곳은 마을 상점 (아직 없음)
  // 임시: phone gestures: a swipe counts after this share of the screen's short side, and when it goes this many times more one
  // way than the other; a tap that misses every cow takes the nearest one within this share of the short side
  swipe: { far: 0.08, ratio: 1.2, reach: 0.07 },
  // the one too many: a thing that is not a cow, standing among them in one of the places above (anywhere, front row or up the rise)
  monster: {
    clues: [1, 2, 4, 7], // 기획서: 첫날 밤은 ①②④⑦ 중 하나 (이 단계에서는 한 밤에 하나를 골라요). 시험용: 주소 끝에 ?clue=4
    high: 0.3, // 임시 ① 눈이 너무 높음: 소 눈 자리보다 이만큼 위 (m)
    wide: 0.25, // 임시 ② 눈 사이가 넓음: 가운데에서 한쪽 눈까지 (보통 소는 약 0.12 m)
    eye: 0.12, // 보통 소의 가운데에서 한쪽 눈까지 (소 모델과 같음)
    third: 0.07, // 임시 ⑦ 눈이 셋: 세 번째 눈은 두 눈 가운데에서 이만큼 위
    glint: 0.07, // 임시: 괴물 눈빛 하나의 크기 (m)
    anyRow: false, // 임시: 첫날 밤은 쉬우니 괴물은 첫 줄에만 선다 (뒤 줄은 앞 소에 가려 단서가 안 보일 때가 많아요)
  },
  saySecs: 1.6, // 임시: how long a counted number stays on screen ("일곱…")
  endWait: 3.5, // 임시: seconds after the last place is counted before the night fades out (stage 1 ends there)
  lines: { // the cowboy's lines; the brackets are the how-to
    open: '열한 마리. 더도 말고 덜도 말고.', // 기획서 임시 대사
    count: '하나씩 세자 (소를 톡)', // 기획서 예시
    countPC: '하나씩 세자 (소를 보고 클릭)', // 임시
    next: '다음 줄로 가자 (화면을 옆으로 넘기기)', // 임시
    nextPC: '다음 줄로 가자 (D나 →)', // 임시
    match: '성냥을 켜자 (왼쪽을 위로 쓸기)', // 임시: the first time the lantern goes out
    matchPC: '성냥을 켜자 (F)', // 임시
    noMatch: '성냥이 없다.', // 임시
  },
  clear: { x0: -9, x1: 22, z0: -40 }, // no saguaros or brush in the camp, the herd and the near side of the rise
  seed: 41, // the herd stands the same way every time
};

// height of the rise at (x, z)
export function hillH(x, z) {
  const H = NL.hill, d = Math.max(0, NL.front.z - z - H.start);
  const r = d < 1 ? 0.2 * d * d : 0.2 + 0.4 * (d - 1);
  const mid = (NL.stations[0].x + NL.stations[NL.stations.length - 1].x) / 2;
  const side = Math.abs(x - mid), half = H.width / 2;
  const fade = side < half - H.edge ? 1 : Math.max(0, (half - side) / H.edge); // it falls away at the far ends
  return H.top * Math.tanh((r * (1 + 0.15 * Math.sin(x * 0.23 + 1.0) + 0.1 * Math.sin(x * 0.61 + 2.0))) / H.top) * fade * fade * (3 - 2 * fade) - 0.03;
}

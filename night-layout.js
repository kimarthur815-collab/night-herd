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
  // cock: on the right half, a swipe counts as down (or up) if it goes at least this many times as far down as sideways (a thumb comes down in an arc)
  swipe: { far: 0.08, ratio: 1.2, reach: 0.07, cock: 0.75, still: 10 },
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
  volume: 0.5, // 게임 소리 전체(바람, 벌레, 모닥불, 소, 발소리, 총, 심장)를 절반으로: 괴물 소리는 그대로라 포효가 상대적으로 2배 (사용자)
  hp: 3, // 체력 칸 수 (사용자)
  // 임시: 총격전 (기획서의 Claude 임시안: 멈칫멈칫 다가오고, 멈춘 틈이 쏠 기회, 맞으면 밀려남, 코앞에 오면 덮침)
  fight: {
    shots: 2, // 첫날 밤 괴물이 죽는 데 필요한 발 수
    twistSound: { files: ['../sounds/twist-1.mp3', '../sounds/twist-2.mp3'], gain: 3 }, // 사용자: 총 맞으면 소 울음이 괴물로 일그러짐 — U1·U4 무작위. gain: 크기 (뒤따르는 작은 포효와 비슷한 크기가 되게 맞춤, 임시)
    shotRoar: 0.5, // 사용자: 총 맞고 변한 뒤 내는 포효는 게임 소리처럼 작게 — 덮칠 때 포효의 몇 배 (게임 전체 소리를 줄인 것과 같은 0.5, 임시)
    morph: 2.5, // 사용자: 맞으면 서서히 괴물 모습으로 — 소가 조각조각 떨어져 나가고 괴물이 드러나는 시간 (초, 임시)
    walk: 2.0, stride: 0.7, accel: 0.6, // 사용자: 더 빠르게 — 달려오는 속도 (m/s, 원래 1.2), 한 걸음 길이 (m), 다 빨라지기까지 (초) (임시)
    // 사용자: 더 역동적으로 걷게 (임시 값): 다리가 엉덩이에서 흔들리는 각도 (rad, 무릎은 그 1.4배까지 접힘), 걸음마다 튀어 나가는 정도 (0~1), 좌우로 비틀거리는 폭 (m),
    // 가까워질수록 빨라지는 배수 (코앞에서), 휘청거리는 간격 (초)과 길이 (초), 머리를 홱 꺾는 세기, 다가오며 입을 벌리는 정도
    // 사용자: 부자연스러워 다시 설계 — 몸은 달리는 쪽을 보고 머리는 나를 노림, 옆으로 미끄러지지 않고 길이 휘어짐, 앞으로 숙이고 달림 (임시 값)
    gait: { legs: 0.6, surge: 0.25, weave: 0.6, rush: 1.3, stumble: [2.5, 4.5], stumbleTime: 0.18, whip: 0.35, gape: 0.35, lean: 0.28 },
    stagger: 0.5, // 맞고 밀려난 뒤 멈칫하는 시간 (초, 임시)
    crawl: 1.4, // ③ 가죽이 흘러내린 것은 이만큼 더 빨리, 낮게 기어 옴
    shadowLight: 0.3, // ⑤ 그림자는 랜턴 밝기가 이보다 약할 때만 움직임
    push: 1.0, // 맞으면 밀려나는 거리 (m)
    reach: 1.3, // 이만큼 가까이 오면 덮침 (m)
    die: 1.0, // 죽어서 땅으로 꺼지는 시간 (초)
    // 사용자: 낮은 괴물은 뛰어올라 덮침 — 어느 괴물, 가장 높이 뜨는 높이 (m), 머리를 쳐드는 각도 (rad), 점프스퀘어에서 날아오는 시간 (초, 원래 0.11), 잡아먹힐 때 웅크리는 깊이 (m) (임시)
    leap: { forms: ['m3', 'm4'], h: 0.4, tilt: 0.5, travel: 0.35, crouch: 0.15, from: 3.0, tallFrom: 1.8 }, // 사용자: 더 뒤에서 점프 — 이 거리에서 뛰어오름 (m, 그림자는 tallFrom에서 덮침)
    twist: 1.1, hang: 0.2, // 사용자: 목 꺾인 컨셉 — 머리가 옆으로 꺾인 각도 (rad, 약 63°, 왼쪽·오른쪽은 무작위), 아래로 처진 정도 (rad) (임시)
    face: 0.4, // 사용자: 덮쳤을 때 얼굴 더 가까이 — 잡아먹힐 때 얼굴이 멈추는 거리 (m, 원래 0.62, 임시)
    scatter: [2, 3.5], scatterSpeed: 1.6, back: 2.5, // 다른 소들이 흩어지는 거리 (m), 걷는 속도 (m/s), 싸움이 끝나고 다시 줄 서러 오기까지 (초)
    wake: 2.5, // 먹힌 뒤 암전에서 아침 화면까지 (초)
  },
  // 임시: 폰에서 총을 꾹 누르는 곳(화면 오른쪽 아래, 비율)과 누르고 있는 시간(초), 쏜 곳을 총이 가리키고 있는 시간(초)
  gun: { area: [0.62, 0.5], hold: 0.8, point: 0.9, loud: 5 }, // loud: 사용자: 총소리를 포효처럼 크게 — 포효와 같은 길(한계 처리)로 보내는 배수 (5면 0.1초 크기가 포효와 같음, 임시)
  // 임시: 괴물을 두고 다음 자리로 가면: 걷기 시작하고 이만큼 뒤에 덮친다 (초). 모습: 단서 ④는 ③ 가죽, ⑦은 ④ 머리 갈라짐, ①②는 셋 중 아무거나 (기획서)
  scare: {
    forms: { 1: ['m3', 'm4', 'm5'], 2: ['m3', 'm4', 'm5'], 4: ['m3'], 7: ['m4'] },
    wait: [2, 6], // 사용자: 다음 자리에 도착해 세는 중에 갑자기 — 도착하고 이 사이 아무 때 (초, 임시)
    lastWait: [0.8, 1.6], // 임시: 마지막 자리에서 괴물을 두고 넘기면 이만큼 뒤 (그 뒤 밤이 끝남)
    hush: 1.0, // 사용자: 직전 정적 — 덮치기 이만큼 전에 벌레, 바람, 숨소리가 뚝 끊김 (초, 임시)
    travel: 0.25, // 사용자: 서서히, 그러다 빠르게 — 뛰지 않는 괴물이 얼굴까지 오는 시간 (초, 원래 0.11, 임시; 뛰는 괴물은 fight.leap.travel)
    d: 0.32, // 사용자: 얼굴 더 가까이 — 얼굴이 멈추는 거리 (괴물 페이지는 0.68, 0.45에서 더 가까이, 임시)
    light: 7, // 사용자: 얼굴 밝게 — 얼굴 앞에서 비추는 랜턴 빛의 세기 (임시)
    recoil: { pitch: 0.14, back: 0.16, time: 0.35 }, // 사용자: 몸이 움찔 뒤로 — 고개가 젖혀지는 각도 (rad), 뒤로 물러나는 거리 (m), 돌아오는 시간 (초) (임시)
    shake: 1.7, // 화면 흔들림 배수 (임시)
    sting: 'boom', // 사용자: 쾅 하는 충격음 — 후보 ① boom ② slam ③ stab (임시로 ①)
    buzz: [600, 70, 450, 60, 320, 50, 220],
    fake: { chance: 0.35, quiet: [1.2, 2.5] }, // 사용자: 가끔은 정적만 — 새 자리에 도착할 때 이 확률로, 같은 때에 소리만 뚝 끊겼다가 돌아옴 (확률, 끊기는 시간 초, 임시) // 사용자: 진동 더 세게 — 켜고 끄는 밀리초 (임시, 원래 450 한 번)
  },
  // 임시: 다쳤을 때의 신호 (체력 칸이 줄수록 셈): 심장 박동 (분당), 그 크기, 시야 가장자리 어둡기, 손 떨림 배수
  hurt: { bpm: [0, 112, 80], heart: [0, 0.5, 0.3], edge: [0, 0.75, 0.4], shake: [1, 3, 2] }, // [체력 0칸 전, 1칸, 2칸] — 3칸이면 없음
  music: { // 사용자: BGM — 밤에는 A2·A3가 무작위로 이어진다 (긴장 음악 C2는 사용자가 뺌)
    drones: ['../sounds/bgm-drone-a2.mp3', '../sounds/bgm-drone-a3.mp3'],
    drone: 0.3, // 드론 크기 (게임 소리 안에서, 임시)
    overlap: 2.5, // 드론이 다음 곡과 겹치는 시간 (초, 곡 끝의 페이드 길이, 임시)
  },
  moo: { // 사용자: 소 울음은 M3(입 다물고 낮게 음~) — 가끔 아무 소나 한 마리가 운다 (괴물 소도 똑같이 울어서 소리로는 모름)
    file: '../sounds/moo.mp3',
    every: [7, 18], // 다음 울음까지 (초, 임시)
    rate: [0.9, 1.1], // 소마다 조금씩 다른 높이 (재생 속도, 임시)
    gain: 0.8, // 크기 (게임 소리 안에서, 소 자리에서 들림, 임시)
  },
  letterbox: 0.09, // 사용자: 레터박스 — 위아래 검은 띠의 높이 (화면 높이의 비율, 임시). 덮칠 때는 괴물만 띠 위로 나옴
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
    cock: '…쏴야 한다 (오른쪽을 아래로 쓸어 공이치기)', // 임시: 센 수가 말한 수를 넘었을 때, 처음 한 번
    cockPC: '…쏴야 한다 (오른쪽 클릭으로 공이치기)', // 임시
    fire: '(쏠 곳을 톡, 위로 쓸면 공이치기를 내려요)', // 임시: 처음 공이치기를 젖혔을 때
    firePC: '(클릭하면 쏴요, 오른쪽 클릭은 공이치기를 내려요)', // 임시
    reload: '빈 칸이다 (총을 꾹 눌러 장전)', // 임시: 처음 빈 칸을 당겼을 때
    reloadPC: '빈 칸이다 (R로 장전)', // 임시
    morningTitle: '다음 날 아침', // 임시: 먹힌 뒤
    morning: '꿈이었나… (아침 장면은 아직 없어요)', // 임시
    deadTitle: '끝', // 임시: 체력이 다 닳았을 때
    dead: '피가 다 닳았어요', // 임시
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

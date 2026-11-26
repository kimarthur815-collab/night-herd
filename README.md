# Night Herd

서부 개척시대를 배경으로 한 1인칭 3D 심리 공포 게임이에요. 소떼를 몰고 가는 카우보이가 밤마다 소를 세는데, 셀 때마다 한 마리가 남아요.

![야간 소떼 룩 개발 이미지](docs/cow_herd_v1.jpg)

- 플랫폼: PC(Steam), 모바일, 웹
- 기술: 웹 기술(Three.js), 목표 60fps
- 그림체: 쿠와하라 필터. 소를 세는 동안에는 화면이 서서히 저해상도와 안개 번짐으로 바뀌어요.

## 버티컬 슬라이스

| 폴더 | 내용 |
|---|---|
| `slice/` | 첫 번째 슬라이스 "밤 한 번". 모닥불 옆에서 장부를 펴고 랜턴으로 비추며 소를 세면 열 마리여야 할 소가 열한 마리예요. |
| `lantern/` | 두 번째 슬라이스 "랜턴". 장갑 낀 손에 랜턴을 들고 걷고, 들어 올리고, 끄고, 모닥불에서 다시 켜요. 바람이 불거나 기름이 떨어지면 저절로 꺼져요. |

### 조작

- PC: WASD로 걷고 마우스로 둘러봐요. 첫 슬라이스는 E로 장부를 펴요. 랜턴 슬라이스는 F로 끄거나 다시 켜고, 스페이스나 오른쪽 클릭을 누르고 있으면 랜턴을 들어 올려요.
- 폰: 왼쪽 가상 조이스틱으로 걷고 오른쪽을 드래그해서 둘러봐요. 나머지는 화면 버튼으로 해요.

## 플레이하기

온라인: https://kimarthur815-collab.github.io/night-herd/

첫 화면에서 슬라이스를 골라요. 폰은 가로로 돌리면 더 넓게 보여요.

## 직접 실행하기

빌드된 페이지가 저장소에 들어 있어서 바로 실행할 수 있어요. 파일을 불러와야 하니 로컬 서버로 열어야 해요.

```sh
npm install
npm run serve
```

그다음 브라우저에서 `http://localhost:8000/slice/` 또는 `http://localhost:8000/lantern/`을 열어요.

## 코드 구조

| 파일 | 역할 |
|---|---|
| `cow.js` | 소 모델. 거리 함수(SDF)로 만들고 서피스 넷으로 메시를 뽑아요. |
| `hand.js`, `mesher.js` | 장갑 낀 손 모델과 범용 SDF 메시 생성기 |
| `gen-slice.mjs` | 소 세 종류를 구워서 `slice/cows/`에 저장해요. |
| `gen-hand.mjs` | 손을 구워서 `lantern/hand.json`에 저장해요. |
| `slice-src.js` | 첫 슬라이스 전체 코드 (환경, 소, 쿠와하라, 소리, 이동, 세기, 엔딩) |
| `lantern-template.js`, `assemble-lantern.py` | 랜턴 슬라이스 코드. 첫 슬라이스의 공통 부분을 끼워 넣어 `lantern-src.js`를 만들어요. |
| `index.html` | 첫 화면. 두 슬라이스로 가는 링크 |
| `gen.mjs`, `main.js`, `herd.js`, `lookdev.html` | 초기 룩 개발용 정지 화면 (`npm install` 후 로컬에서만 동작) |
| `gen-preview.mjs`, `preview-src.js` | 초기 미리보기 페이지 |

## 다시 빌드하기

```sh
npm run bake:cows    # 소 메시 굽기 (몇 분 걸림)
npm run bake:hand    # 손 메시 굽기
npm run build        # 두 슬라이스의 JS 번들 만들기
```

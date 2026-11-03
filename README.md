# class-arena (가칭 「성문 대전」)

학생이 문제를 맞히면 병사가 출전해 상대 성을 무너뜨리는 교실 대전 게임입니다.
- **1단계** `game/play.html`: 연습 대전(컴퓨터 신병·기사·장군)과 **둘이서 대전**(태블릿 하나, 학생마다 다른 주제 가능). 롤처럼 대각선 지도에 3갈래 길(길마다 탑 한쪽 1개). 계산 문제(곱셈구구·덧셈과 뺄셈·곱셈과 나눗셈·혼합 계산)를 풀어 골드를 벌고, 병사 4종(순환 상성)·금광·성 대포로 컴퓨터(신병·기사·장군)와 겨룸. 화질 자동·직접 고르기.
- 그래픽 비교판(11-03): A안 실시간 3D로 결정. 비교 페이지는 기록용으로 남겨 둠.

같은 무료 3D 모형을 두 가지 방법으로 그려 비교합니다.

| | 방식 | 처음 받는 양 |
|---|---|---|
| `game/a.html` A안 | 실시간 3D (three.js) | 약 10MB |
| `game/b.html` B안 | 블렌더에서 구운 2D 그림 (PixiJS) | 약 4.4MB |

`game/index.html`은 두 안을 고르는 첫 화면입니다.

## 폴더

| 위치 | 내용 |
|---|---|
| `game/` | 배포되는 게임 파일 전부 (빌드 없이 그대로 열림) |
| `game/js/sim.js` | 전투 규칙(정답 → 출전, 이동, 공격, 성 체력). A·B가 함께 씀. 카메라 약속(`CAM`)도 여기 |
| `game/js/hud.js`, `game/css/hud.css` | 성 체력·정답 수·소식·승리 띠 |
| `game/js/b_main.js` | B안 그리기 |
| `game/src/play/` | **게임** 원본(`config.js` 숫자 모음, `lanes.js` 3갈래 길, `battle.js` 전투 규칙, `ai.js` 컴퓨터, `questions.js` 문제(숫자·객관식·OX), `seat.js` 조작판 한 자리, `view3d.js` 3D, `quality.js` 화질, `sound.js` 효과음, `main.js` 화면 흐름) → `npm run build:play` 로 `game/js/play_bundle.js` |
| `game/src/a_main.js` | A안 그리기 원본 → `npm run build:a` 로 `game/js/a_bundle.js` 생성 |
| `game/assets/` | B안 그림(`*.webp`)과 그림 위치표 `data.js`(자동 생성) |
| `game/models/*.js` | A안 모형(.glb를 base64로 바꾼 것, 자동 생성) |
| `tools/` | 블렌더로 전장 짓기·굽기·내보내기 |
| `tests/` | 화면 찍기, 한 판 끝까지 돌리기, 승률 재기 |
| `assets_mod/` | 풀색을 바꾼 KayKit 팔레트 그림 |

## 다시 만들기 (클라우드 세션 기준)

```bash
bash tools/get_assets.sh                    # KayKit 자료, 블렌더(bpy), npm 받기
./venv/bin/python tools/build_world.py preview   # 전장 미리보기(30초)
./venv/bin/python tools/build_world.py bake      # 배경·성·폐허 굽기(약 7분)
for u in knight mage skel_warrior skel_mage; do ./venv/bin/python tools/bake_units.py $u; done  # 병사 굽기(약 25분)
python3 tools/pack_units.py                 # 프레임 모으기 → game/assets/*.webp, data.js
./venv/bin/python tools/export_glb.py       # 병사 모형 → game/models/*.glb (전장은 비교판용 한 갈래)
./venv/bin/python tools/build_map.py preview  # 3갈래 지도 미리보기
./venv/bin/python tools/build_map.py glb diag # 3갈래 지도(diag 또는 wide) → game/models/field_<지도>.raw.glb + game/src/play/map_<지도>.json
node tools/compress_glb.mjs game/models/field_diag.raw.glb game/models/field_diag.glb   # 같은 모형 한 번만 저장(인스턴싱)·양자화
node tools/compress_glb.mjs <병사>.glb game/models/<병사>.glb   # 병사도 양자화·동작 키프레임 정리
python3 tools/make_model_js.py              # .glb → .js
./venv/bin/python tools/bake_portraits.py    # 출전 버튼 얼굴 그림
npm run build                               # A안 + 연습 대전 묶기
node tests/balance_play.mjs 200             # 학생 흉내 대 컴퓨터 3단계 승률·판 길이
npm run serve                               # 배포 페이지와 같은 보안 규칙으로 http://127.0.0.1:8130
```

- 카메라 각도(32°)·1m당 픽셀(90)·바라보는 점은 `tools/scene_common.py`와 `game/js/sim.js`의 `CAM`이 **같아야** 합니다. 한쪽만 바꾸면 병사가 배경과 어긋납니다.
- 그림을 굽는 데 쓰는 블렌더 출력은 `tools/pack_units.py`가 끝까지 돌아야 `data.js`가 새로 써집니다(중간에 끊으면 옛 위치표가 남음).

## 그림 자료

KayKit Character Pack: Adventurers / Skeletons, KayKit Medieval Hexagon Pack — Kay Lousberg (www.kaylousberg.com), CC0.

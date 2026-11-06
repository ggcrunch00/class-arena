// 게임 숫자들을 한곳에 모아 둠. 균형을 바꿀 땐 여기만 고치면 됨.

// 카메라 약속: 블렌더(tools/scene_common.py)와 같은 각도
export const ELEV = 32 * Math.PI / 180;
export const UNIT_SCALE = 1.35;
export const LANE = { spawn: 3.2, halfWidth: 0.85 }; // 본성에서 몇 m 앞에서 나오는지, 길 폭(병사가 퍼지는 정도)

export const MATCH = {
  time: 360,          // 한 판 6분
  overtime: 60,       // 마지막 1분 총력전(골드 2배)
  maxUnits: 15,       // 한쪽에 동시에 있을 수 있는 병사 수(세 길 합쳐서)
};

// 골드 규칙
export const GOLD = {
  base: { number: 12, tiles: 12, choice: 8, ox: 5 },  // 문제 종류별(찍기 어려울수록 많이). 2지선다 객관식은 ox 값(gk)
  diffMult: [1, 2, 4],                      // 쉬움·보통·어려움(11-04: 풀이 시간 차이를 메우게 크게. 난이도는 게임이 정함)
  streakFrom: 3, streakBonus: 0.2,          // 3연속부터 +20%
  wrongLock: 3, skipLock: 2,                // 틀리면 3초, 넘기면 2초 쉼
  start: 60,                                // 시작 골드
};

// 금광: 레벨마다 문제당 수입 +25%
export const MINE = { maxLevel: 4, cost: [0, 120, 180, 250], bonus: 0.25 };

// 건물: 길마다 탑 하나씩(한쪽), 본성 하나. 가까이 온 적을 쏨. 본성은 체력 30% 아래면 더 빨리 쏨(최후의 저항)
export const TOWER = { hp: 900, radius: 1.2, range: 6.0, every: 1.6, dmg: 14, height: 4.2 };
export const BASE = { hp: 1800, radius: 2.0, range: 6.5, every: 1.6, dmg: 14, height: 6.2, lastStand: 0.3, lastStandMult: 1.6 };

// 성 대포: 연속 정답 5번이면 충전
export const CANNON = { charge: 5, damage: 150, radius: 3.4 };

// 병사 4종. 순환 상성: 방패병 → 돌격병 → 궁수 → 마법사 → 방패병 (화살표 쪽에게 강함)
export const ROLES = ["shield", "rusher", "archer", "mage"];
export const ROLE_INFO = {
  shield: { name: "방패병", cost: 60, cooldown: 2.5, hp: 260, dmg: 14, range: 1.4, speed: 1.45, hitAt: 0.42, beats: "rusher" },
  rusher: { name: "돌격병", cost: 70, cooldown: 3.5, hp: 150, dmg: 30, range: 1.5, speed: 2.5, hitAt: 0.45, beats: "archer" },
  archer: { name: "궁수", cost: 60, cooldown: 3.0, hp: 90, dmg: 16, range: 6.5, speed: 1.55, hitAt: 0.5, beats: "mage", shot: "arrow" },
  mage: { name: "마법사", cost: 90, cooldown: 5.0, hp: 100, dmg: 18, range: 5.5, speed: 1.45, hitAt: 0.45, beats: "shield", shot: "orb", splash: 1.8 },
};
export const COUNTER_MULT = 1.6;
// 캠페인 보스 병사(골드로 뽑지 않고 이야기 장면에서 나옴): 해골 전사 모형을 크게, 잿빛으로
export const SPECIAL = {
  giant: { name: "안개 거인", model: "skel_warrior", scale: 1.75, tint: 0x9a90c0, hp: 1100, dmg: 42, range: 1.7, speed: 0.95, hitAt: 0.42, beats: null },
};

// 영웅(11-05): 기사단 넷 가운데 한 명이 지휘관으로 함께해요(둘이서 하기 빼고).
// 맞힌 문제마다 깨침돌 기운이 한 칸씩 차고(틀려도 줄지 않음), 다 차면 기술을 한 번 써요.
//   guard: 정해진 시간 동안 우리 병사가 받는 피해를 cut배로, 쓰는 순간 체력 heal만큼 회복
//   volley: 고른 길 맨 앞 적에게 화살비 n번(한 번에 화살 4개, 화살마다 dmg, 둘레 splash)
//   rally: 정해진 시간 동안 우리 병사 빠르기·공격 배율
//   blast: 고른 길 맨 앞 적 무리에 큰 깨침돌 빛(병사 dmg, 둘레 splash, 그 길 탑·본성에 struct)
export const HEROES = {
  haram: { model: "knight", name: "하람", title: "기사단장", face: "haram", skill: "방패 함성", need: 6, kind: "guard", time: 8, cut: 0.5, heal: 0.3,
    desc: "8초 동안 우리 병사가 받는 피해가 절반, 바로 체력도 조금 회복", line: "방패를 들어요! 한 걸음도 물러서지 마요!" },
  saebyeok: { model: "rogue", name: "새벽", title: "정찰병", face: "saebyeok", skill: "화살비", need: 6, kind: "volley", n: 3, dmg: 24, splash: 1.5,
    desc: "고른 길 맨 앞의 적에게 화살비가 세 번 쏟아져요", line: "저기예요! 화살비, 쏴요!",
    join: "다음 전투부터 저도 지휘관 곁에 설게요. 기사단 막사에서 저를 고르면 화살비를 보여 드릴게요!" },
  uru: { model: "barbarian", name: "우루", title: "돌격대장", face: "uru", skill: "돌격 함성", need: 6, kind: "rally", time: 8, speed: 1.4, dmg: 1.3,
    desc: "8초 동안 우리 병사가 더 빠르고(+40%) 더 세게(+30%) 싸워요", line: "으랏차! 다 같이 앞으로!",
    join: "다음엔 저를 데려가요! 기사단 막사에서 고르면 돌격 함성으로 모두 힘이 펄펄 나게 해 줄게요." },
  sol: { model: "mage", name: "솔", title: "궁정 마법사", face: "sol", skill: "깨침돌 폭발", need: 7, kind: "blast", dmg: 150, splash: 3.4, struct: 150,
    desc: "고른 길 맨 앞 적 무리에 큰 빛이 터져요(탑에도 피해)", line: "깨침돌아, 모은 빛을 보여 줘!",
    join: "깨침돌의 빛을 한데 모으는 법을 알아냈어요. 기사단 막사에서 저와 함께하면 깨침돌 폭발을 쓸 수 있어요." },
};
export const HERO_ORDER = ["haram", "saebyeok", "uru", "sol"];
// 이 스테이지를 깨면 그 영웅과 함께할 수 있음(null: 처음부터)
export const HERO_OPEN = { haram: null, saebyeok: "1-1", uru: "1-2", sol: "2-2" };

// 훈련소(11-05): 원정에서 모은 별로 기사단을 단련. 원정과 혼자 연습(컴퓨터와 대전)에만 쓰고, 둘이서·오늘의 도전에는 안 씀
export const TRAIN = {
  armor: { name: "단단한 갑옷", desc: "병사 체력", unit: "+6%", max: 3, cost: [2, 3, 4], hp: 0.06 },
  blade: { name: "날 선 무기", desc: "병사 공격", unit: "+6%", max: 3, cost: [2, 3, 4], dmg: 0.06 },
  purse: { name: "넉넉한 군자금", desc: "시작 골드", unit: "+20", max: 3, cost: [1, 2, 3], gold: 20 },
  stone: { name: "깨침돌 연마", desc: "영웅 기술에 필요한 정답", unit: "−1", max: 2, cost: [3, 5], skill: 1 },
};
export const TRAIN_ORDER = ["armor", "blade", "purse", "stone"];

// 진영별 모형(파일 이름 = game/models/*.js)
export const SIDES = {
  [-1]: { name: "기사단", models: { shield: "knight", rusher: "barbarian", archer: "rogue", mage: "mage" }, color: 0x9fd8ff },
  [1]: { name: "해골 군단", models: { shield: "skel_warrior", rusher: "skel_minion", archer: "skel_rogue", mage: "skel_mage" }, color: 0xc8ff7a },
};

// 컴퓨터 상대 3단계
export const AI_LEVELS = {
  recruit: { name: "신병", answerEvery: 6.6, accuracy: 0.8, diff: 0, counter: 0.15, mineTo: 1, cannonAt: 4 },
  knight: { name: "기사", answerEvery: 5.8, accuracy: 0.84, diff: 1, counter: 0.5, mineTo: 2, cannonAt: 3 },
  general: { name: "장군", answerEvery: 4.7, accuracy: 0.88, diff: 1, counter: 0.85, mineTo: 3, cannonAt: 2 },
  // 대장군(11-05): 문제를 아주 빨리 푸는 학생용. 해골도 어려운 문제(골드 ×4)를 풀고 거의 늘 상성을 노림
  warlord: { name: "대장군", answerEvery: 5.0, accuracy: 0.9, diff: 2, counter: 0.95, mineTo: 3, cannonAt: 2 },
};

// 화질 단계(설정 메뉴에서 고르거나 자동)
export const QUALITY = {
  high: { name: "높음", pixelRatio: 2, shadow: 2048, blob: false, fx: 1, clouds: true, cap: 0, aa: true },
  mid: { name: "보통", pixelRatio: 1, shadow: 1024, blob: false, fx: 0.7, clouds: true, cap: 0, aa: true },
  low: { name: "낮음", pixelRatio: 0.75, shadow: 0, blob: true, fx: 0.4, clouds: false, cap: 0, aa: false },
  lowest: { name: "아주 낮음", pixelRatio: 0.6, shadow: 0, blob: true, fx: 0.2, clouds: false, cap: 30, aa: false },
};
export const QUALITY_ORDER = ["high", "mid", "low", "lowest"];

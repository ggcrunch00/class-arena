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
  base: { number: 12, choice: 8, ox: 5 },  // 문제 종류별(찍기 어려울수록 많이)
  diffMult: [1, 1.5, 2],                    // 쉬움·보통·어려움
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

// 진영별 모형(파일 이름 = game/models/*.js)
export const SIDES = {
  [-1]: { name: "기사단", models: { shield: "knight", rusher: "barbarian", archer: "rogue", mage: "mage" }, color: 0x9fd8ff },
  [1]: { name: "해골 군단", models: { shield: "skel_warrior", rusher: "skel_minion", archer: "skel_rogue", mage: "skel_mage" }, color: 0xc8ff7a },
};

// 컴퓨터 상대 3단계
export const AI_LEVELS = {
  recruit: { name: "신병", answerEvery: 4.8, accuracy: 0.8, diff: 0, counter: 0.15, mineTo: 1, cannonAt: 4 },
  knight: { name: "기사", answerEvery: 4.0, accuracy: 0.84, diff: 1, counter: 0.5, mineTo: 2, cannonAt: 3 },
  general: { name: "장군", answerEvery: 4.0, accuracy: 0.88, diff: 1, counter: 0.85, mineTo: 3, cannonAt: 2 },
};

// 화질 단계(설정 메뉴에서 고르거나 자동)
export const QUALITY = {
  high: { name: "높음", pixelRatio: 2, shadow: 2048, blob: false, fx: 1, clouds: true, cap: 0, aa: true },
  mid: { name: "보통", pixelRatio: 1, shadow: 1024, blob: false, fx: 0.7, clouds: true, cap: 0, aa: true },
  low: { name: "낮음", pixelRatio: 0.75, shadow: 0, blob: true, fx: 0.4, clouds: false, cap: 0, aa: false },
  lowest: { name: "아주 낮음", pixelRatio: 0.6, shadow: 0, blob: true, fx: 0.2, clouds: false, cap: 30, aa: false },
};
export const QUALITY_ORDER = ["high", "mid", "low", "lowest"];

// 원정(캠페인): 세계관·인물·장·스테이지 자료와 진행 저장.
// 이야기 글은 학생이 보는 글이라 해요체. 인물 관계는 단순하게(기사단 넷 + 장마다 해골 대장 하나 + 안개 군주).
// 스테이지 규칙은 stage.js(StageRunner)가 읽고, 화면은 main.js가 그림. node로도 읽을 수 있음(tests/campaign_balance.mjs).

import { TRAIN, HERO_OPEN } from "./config.js";

export const WORLD = {
  name: "아라 군도",
  intro: [
    { who: "narr", text: "푸른 바다 위 다섯 섬, 아라 군도. 이곳 사람들은 성문마다 ‘깨침돌’을 세워 두었어요." },
    { who: "narr", text: "문제를 풀어 깨달음을 얻으면 깨침돌이 반짝이며 골드를 내놓아요. 그 골드로 마법진을 열어 병사를 불러오지요." },
    { who: "narr", text: "어느 날 북쪽 바다에서 잿빛 안개가 몰려왔어요. 안개에 닿은 것은 하나둘 기억을 잃어요." },
    { who: "narr", text: "안개 속에서 걸어 나온 해골 군단은 기억을 잃고 길을 헤매는 옛 병사들이에요. 무너뜨리면 안개가 걷히고, 그들은 흙으로 돌아가 편히 쉬어요." },
    { who: "haram", text: "견습 지휘관, 잘 왔어요. 안개를 걷어 낼 사람이 필요해요. 바닷가 초소부터 함께 지켜 봐요!" },
  ],
};

// 말하는 인물: 얼굴 그림(assets/portraits/*.webp)과 이름. side: 1이면 해골 군단 쪽(말풍선 색이 붉음)
export const CHARS = {
  narr: { name: "", img: null },
  // meet: 도감에 들어오는 때(기사단은 그 스테이지가 열리면, 해골 쪽은 그 스테이지를 깨면), lore: 도감 글
  haram: { name: "하람 기사단장", img: "knight", note: "기사단을 이끄는 든든한 단장", meet: "1-1",
    lore: "기사단을 이끄는 단장이에요. 말수는 적지만 어려운 순간에는 가장 먼저 앞에 서요." },
  sol: { name: "궁정 마법사 솔", img: "mage", note: "깨침돌을 연구하는 마법사", meet: "1-1",
    lore: "깨침돌을 연구하는 궁정 마법사예요. 문제 하나가 풀릴 때마다 돌이 내는 빛을 공책에 적어요." },
  saebyeok: { name: "정찰병 새벽", img: "rogue", note: "눈이 밝은 궁수", meet: "1-1",
    lore: "눈이 밝은 정찰병이에요. 멀리서 다가오는 해골 무리를 누구보다 먼저 알아채요." },
  uru: { name: "돌격대장 우루", img: "barbarian", note: "힘이 세고 웃음이 많은 돌격병", meet: "1-2",
    lore: "힘이 세고 웃음이 많은 돌격대장이에요. 도끼보다 큰 목소리로 기사단의 기운을 북돋워요." },
  deolkeok: { name: "해골 대장 덜컥", img: "skel_minion", side: 1, meet: "1-4",
    lore: "바닷가 초소를 지키던 병사였어요. 안개 속에서 모든 걸 잊고 '덜컥' 소리만 기억했어요." },
  sallang: { name: "해골 척후대장 살랑", img: "skel_rogue", side: 1, meet: "2-4",
    lore: "숲을 지키던 정찰병이었어요. 남의 버릇을 읽는 눈은 기억을 잃어도 그대로였어요." },
  hoesaek: { name: "해골 주술사 회색깃", img: "skel_mage", side: 1, meet: "3-4",
    lore: "아이들에게 글을 가르치던 선생님이었어요. 주문처럼 외던 말은 사실 옛 수업 내용이었어요." },
  cheolgol: { name: "해골 장군 철골", img: "skel_warrior", side: 1, meet: "5-4",
    lore: "산길 요새의 문지기였어요. 골드를 쌓아 두기만 하는 사람을 보면 참지 못해요." },
  geurimja: { name: "안개 그림자", img: "geurimja", side: 1, meet: "8-4",
    lore: "모로가 잊으려 했던 마음이 안개로 남은 모습이에요. 남을 보고 그대로 따라 하지만, 스스로 무언가를 깨치지는 못해요." },
  chulleong: { name: "해골 뱃사공 출렁", img: "skel_minion", side: 1, meet: "4-4",
    lore: "늪에서 아이들을 학교 섬으로 건네주던 뱃사공이었어요. 안개 속에서 손님을 어디로 건네줘야 하는지 잊고 노만 저었어요." },
  seori: { name: "해골 파수꾼 서리", img: "skel_warrior", side: 1, meet: "6-4",
    lore: "서리 고개 망루를 지키던 파수꾼이었어요. 지켜야 할 마을은 잊었지만, 아무도 지나가지 못하게 하는 일만은 잊지 않았어요." },
  moro: { name: "안개 군주 모로", img: "moro", side: 1, meet: "7-4",
    lore: "옛 왕립 도서관의 사서예요. 슬픈 이야기를 잊게 하려다 안개를 불렀지만, 이제 다시 기억하는 법을 배우고 있어요." },
};

const LANE_WORD = { top: "윗길", mid: "가운뎃길", bot: "아랫길" };
const ROLE_WORD = { shield: "방패병", rusher: "돌격병", archer: "궁수", mage: "마법사" };
// 보스 말풍선({lane}·{role}·{counter}는 게임이 채움). 읽은 것을 숨기지 않고 알려 줘서 학생이 전략을 바꿀 실마리가 됨
// 받침에 맞는 조사: {lane}(으)로, {counter}을/를, {counter}이/가 처럼 자리 뒤 조사를 고침
function josa(word, j) {
  const c = word.charCodeAt(word.length - 1) - 0xac00, jong = c >= 0 && c < 11172 ? c % 28 : 0;
  if (j === "으로" || j === "로") return word + (jong === 0 || jong === 8 ? "로" : "으로");
  const pair = { 을: ["을", "를"], 를: ["을", "를"], 이: ["이", "가"], 가: ["이", "가"], 은: ["은", "는"], 는: ["은", "는"] }[j];
  return pair ? word + (jong ? pair[0] : pair[1]) : word + j;
}
export function bossLine(lines, type, info, laneLabel) {
  const t = lines && lines[type];
  if (!t) return null;
  const val = { lane: (laneLabel && laneLabel[info.lane]) || LANE_WORD[info.lane] || "", role: ROLE_WORD[info.role] || "", counter: ROLE_WORD[info.counter] || "" };
  return t.replace(/\{(lane|role|counter)\}(으로|로|을|를|이|가|은|는)?/g, (_, k, j) => (j ? josa(val[k], j) : val[k]));
}

const ALL = ["shield", "rusher", "archer", "mage"];

// AI 기본값(스테이지에서 덮어씀): answerEvery 몇 초마다 한 문제, accuracy 정답률, diff 문제 난이도(골드 배율), counter 영리함 0~1
const ai = (o) => ({ answerEvery: 7, accuracy: 0.8, diff: 0, counter: 0.2, mineTo: 1, cannonAt: 4, ...o });

export const CHAPTERS = [
  {
    id: 1, name: "바닷가 초소", art: "ch1", map: "shore", pos: [45, 85],
    prologue: [{ who: "narr", text: "아라 군도 남쪽 끝, 바닷가 초소는 배가 드나드는 첫 관문이에요. 이곳 깨침돌은 군도에서 가장 오래되었어요." }],
    teach: "문제를 풀어 골드를 벌고, 병사를 불러요",
    stages: [
      {
        id: "1-1", name: "첫 불빛", map: "shore", unlock: "방패병·궁수와 함께 출발!",
        goal: "해골 군단의 본성을 무너뜨려요",
        rules: { roles: ["shield", "archer"], mine: false, cannon: false },
        battle: { time: 300, baseHp: { 1: 0.55 }, towerHp: { 1: 0.7 }, gold: { [-1]: 80 } },
        ai: ai({ answerEvery: 10, accuracy: 0.75, counter: 0, roles: ["rusher", "shield"], cannon: false }),
        intro: [
          { who: "haram", text: "새벽 안개가 몰려와요. 저 끝 해골 본성에서 해골 병사들이 걸어오고 있어요." },
          { who: "sol", text: "아래 문제를 맞히면 깨침돌이 골드를 내놓아요. 골드가 모이면 병사 카드를 눌러 불러요." },
          { who: "saebyeok", text: "도끼를 든 해골이 달려와요! 방패병이 막고, 궁수가 뒤에서 쏘면 돼요." },
        ],
        script: [
          { at: 25, talk: ["sol", "방패병은 달려드는 돌격병에게 강해요. 카드 아래 ‘▶ 돌격병에 강함’을 보세요."] },
          { at: 55, talk: ["haram", "문제를 맞힐 때마다 오른쪽 위 제 얼굴 단추에 빛이 차요. 다 차면 눌러서 방패 함성을 써요!"] },
          { at: 90, talk: ["haram", "적 탑을 무너뜨려야 본성에 닿을 수 있어요. 조금만 더!"] },
        ],
        win: [
          { who: "haram", text: "해냈어요! 첫 불빛이 바닷가를 밝혔어요." },
          { who: "saebyeok", text: "그런데 안개 속에 더 큰 해골이 보였어요. 투구에 깃털을 꽂고 있던데요?" },
        ],
        hint: "골드가 모이면 바로바로 병사를 보내요. 돌격병(도끼 해골)은 방패병으로 막아요.",
      },
      {
        id: "1-2", art: "s12", name: "밤의 경보", map: "shore",
        goal: "해골 병사 8명을 무찔러요",
        rules: { roles: ["shield", "archer"], mine: false, cannon: false },
        battle: { time: 240, objective: { type: "kills", n: 8 }, gold: { [-1]: 110 }, baseHp: { [-1]: 1.4 }, towerHp: { [-1]: 1.3 } },
        ai: ai({ answerEvery: 14, accuracy: 0.75, counter: 0, roles: ["rusher", "shield"], cannon: false }),
        trickle: { every: 26, from: 45, roles: ["rusher", "shield"] },
        intro: [
          { who: "saebyeok", text: "초소 아래 어촌에서 종이 울려요! 해골들이 그물 창고 쪽으로 몰려가고 있어요." },
          { who: "uru", text: "어이, 기사단! 마을 대장장이 우루예요. 도끼는 있는데 같이 싸울 사람이 없었거든요." },
          { who: "haram", text: "고마워요, 우루. 이번엔 본성까지 갈 필요 없어요. 몰려오는 해골 열을 막아 내요." },
        ],
        script: [
          { at: 40, wave: { roles: ["rusher", "rusher"], lane: "auto" }, talk: ["saebyeok", "도끼 해골 둘! 방패병을 앞에 세워요."] },
          { at: 120, wave: { roles: ["shield", "rusher"], lane: "auto" }, talk: ["uru", "하하, 이 정도면 몸풀기예요!"] },
        ],
        win: [
          { who: "uru", text: "그물 창고가 무사해요! 지휘관, 저도 기사단에 끼워 줄래요?" },
          { who: "haram", text: "환영해요, 돌격대장 우루. 곧 돌격병도 함께 부르게 될 거예요." },
        ],
        hint: "본성을 노리지 않아도 돼요. 탑 앞에서 오는 해골을 차례로 막아요.",
      },
      {
        id: "1-3", name: "언덕 위 봉화대", map: "shore",
        goal: "봉화대의 해골 본성을 무너뜨려요",
        rules: { roles: ["shield", "archer"], mine: false, cannon: false },
        battle: { time: 300, baseHp: { 1: 0.6 }, towerHp: { 1: 0.8 }, gold: { [-1]: 90 } },
        ai: ai({ answerEvery: 10, accuracy: 0.75, counter: 0.05, roles: ["archer", "shield", "rusher"], cannon: false }),
        intro: [
          { who: "sol", text: "초소 깨침돌 빛이 자꾸 흐려져요. 언덕 너머 옛 봉화대에 해골들이 진을 쳤기 때문이에요." },
          { who: "saebyeok", text: "활 든 해골이 많아요. 멀리서 쏘니까 우리 궁수도 넉넉히 데려가요." },
          { who: "haram", text: "봉화대 본성을 무너뜨리면 깨침돌 빛이 돌아올 거예요." },
        ],
        script: [
          { at: 60, wave: { roles: ["archer", "archer"], lane: "auto" }, talk: ["saebyeok", "궁수 해골 둘! 방패병이 화살을 받아 주면 우리 궁수가 쏠 틈이 생겨요."] },
          { at: 180, talk: ["sol", "빛이 돌아오고 있어요! 문제를 맞힐 때마다 깨침돌이 더 밝아져요."] },
        ],
        win: [
          { who: "sol", text: "깨침돌이 다시 환해졌어요. 그런데 봉화대 바닥에 커다란 발자국이 찍혀 있어요." },
          { who: "haram", text: "깃털 투구를 쓴 그 해골 대장이군요. 초소를 노리고 있어요. 준비해요." },
        ],
        hint: "궁수 해골은 방패병으로 막고, 우리 궁수로 뒤에서 쏴요.",
      },
      {
        id: "1-4", name: "해골 대장 덜컥", map: "shore", boss: "deolkeok",
        goal: "덜컥 대장의 본성을 무너뜨려요",
        rules: { roles: ["shield", "archer"], mine: false, cannon: false },
        battle: { time: 330, baseHp: { 1: 0.62 }, towerHp: { 1: 0.85 }, gold: { [-1]: 100 } },
        ai: ai({ answerEvery: 10.5, accuracy: 0.75, counter: 0.1, roles: ["rusher", "shield", "archer"], cannon: false }),
        intro: [
          { who: "deolkeok", text: "덜컥덜컥! 여기가 어디더라… 아무튼 이 초소는 내가 차지할 거예요!" },
          { who: "uru", text: "하하, 뼈만 남은 대장이네요. 지휘관, 문제를 척척 풀어 주면 제가 앞장설게요!" },
          { who: "sol", text: "덜컥은 때때로 해골 무리를 한꺼번에 보내요. 골드를 조금 남겨 두면 막기 쉬워요." },
        ],
        script: [
          { at: 90, wave: { roles: ["rusher", "rusher"], lane: "auto" }, talk: ["deolkeok", "덜컥! 다 같이 돌격이에요!"] },
          { at: 190, wave: { roles: ["rusher", "shield"], lane: "auto" }, talk: ["deolkeok", "이번엔 방패도 왔어요! 덜컥덜컥!"] },
          { at: 270, wave: { roles: ["rusher", "rusher", "rusher"], lane: "auto" }, talk: ["saebyeok", "마지막 무리예요! 방패병으로 막아요!"] },
        ],
        win: [
          { who: "deolkeok", text: "덜컥… 머리가 맑아지네요. 나는… 바닷가를 지키던 병사였어요." },
          { who: "haram", text: "안개가 걷히니 기억이 돌아오는군요. 편히 쉬어요." },
          { who: "sol", text: "안개는 북쪽 숲으로 이어져 있어요. 다음은 두 갈래 숲길이에요." },
        ],
        hint: "무리가 오기 전에 병사를 몇 명 미리 세워 두면 막기 쉬워요.",
      },
    ],
  },
  {
    id: 2, name: "두 갈래 숲길", art: "ch2", map: "twin", pos: [21, 66],
    prologue: [{ who: "narr", text: "초소 북쪽에는 호수를 품은 숲이 있어요. 길은 호수를 사이에 두고 둘로 갈라져요." }, { who: "narr", text: "옛 숲지기들은 두 길을 번갈아 걸으며 숲을 살폈대요. 한 길만 걷는 사람은 다른 길의 소식을 놓치니까요." }],
    teach: "길을 골라 보내요. 돌격병이 합류해요",
    stages: [
      {
        id: "2-1", name: "갈림길", map: "twin", unlock: "돌격병 합류! 이제 길을 골라 보내요",
        goal: "적 탑 2개를 무너뜨려요",
        rules: { roles: ["shield", "rusher", "archer"], mine: false, cannon: false },
        battle: { time: 330, objective: { type: "towers", n: 2 }, gold: { [-1]: 80 } },
        ai: ai({ answerEvery: 7.8, accuracy: 0.78, counter: 0.25, roles: ["shield", "archer", "rusher"], cannon: false }),
        intro: [
          { who: "uru", text: "드디어 제 차례예요! 돌격병은 빨라서 궁수를 덮치는 데 최고예요." },
          { who: "saebyeok", text: "숲길이 호수를 끼고 둘로 갈라져요. ‘보낼 길’ 단추로 윗숲길과 아랫숲길을 골라요." },
          { who: "haram", text: "이번에는 해골 탑 두 개만 무너뜨리면 돼요. 한쪽이 막히면 다른 길을 노려요." },
        ],
        script: [
          { at: 40, talk: ["saebyeok", "해골 궁수(활 든 해골)가 보이면 돌격병을 보내요!"] },
          { at: 150, talk: ["haram", "적이 몰린 길은 피하고, 빈 길로 돌아가는 것도 작전이에요."] },
        ],
        win: [
          { who: "uru", text: "두 탑 모두 쿵! 숲이 조용해졌어요." },
          { who: "saebyeok", text: "쉿, 나무 위에서 누가 우리를 지켜보고 있었어요. 아주 날렵한 해골이었어요." },
        ],
        hint: "한 길에 적이 몰려 있으면 다른 길 탑을 노려요.",
      },
      {
        id: "2-2", art: "s22", name: "숲지기의 오두막", map: "twin",
        goal: "해골 병사 12명을 무찔러요",
        rules: { roles: ["shield", "rusher", "archer"], mine: false, cannon: false },
        battle: { time: 270, objective: { type: "kills", n: 12 }, gold: { [-1]: 120 }, baseHp: { [-1]: 1.3 }, towerHp: { [-1]: 1.3 } },
        ai: ai({ answerEvery: 11, accuracy: 0.78, counter: 0.25, roles: ["shield", "archer", "rusher"], cannon: false }),
        trickle: { every: 24, from: 40, roles: ["archer", "rusher", "shield"] },
        intro: [
          { who: "saebyeok", text: "숲지기 오두막 근처에서 해골들이 같은 길만 빙빙 돌아요. 길을 잃은 것 같아요." },
          { who: "sol", text: "안개가 기억을 가져가면 몸에 밴 버릇만 남는대요. 한 번 무너뜨려 주면 편히 쉴 수 있어요." },
          { who: "haram", text: "두 길에서 번갈아 와요. 한쪽만 보지 말고 양쪽을 살펴요." },
        ],
        script: [
          { at: 50, wave: { roles: ["rusher", "archer"], lane: "auto" }, talk: ["saebyeok", "이번엔 다른 길이에요! 보낼 길을 바꿔요."] },
          { at: 140, wave: { roles: ["shield", "shield", "rusher"], lane: "auto" } },
          { at: 210, wave: { roles: ["archer", "archer", "rusher"], lane: "auto" }, talk: ["uru", "궁수 해골은 돌격병이 맡을게요!"] },
        ],
        win: [
          { who: "saebyeok", text: "오두막 처마 밑에 낡은 숲 지도가 있어요. 호수 가운데에 동그라미가 그려져 있네요." },
          { who: "sol", text: "거기서 안개가 짙게 피어오른다고 적혀 있어요. 호수로 가 봐요." },
        ],
        hint: "적이 온 길로 같은 만큼 보내요. 궁수 해골은 돌격병이 빨리 잡아요.",
      },
      {
        id: "2-3", name: "안개 낀 호수", map: "twin",
        goal: "3분 20초 동안 본성을 지켜요",
        rules: { roles: ["shield", "rusher", "archer"], mine: false, cannon: false },
        battle: { time: 200, objective: { type: "survive" }, gold: { [-1]: 140, [1]: 80 }, baseHp: { [-1]: 1.15 } },
        ai: ai({ answerEvery: 7.6, accuracy: 0.78, counter: 0.3, roles: ["shield", "archer", "rusher"], cannon: false }),
        intro: [
          { who: "sol", text: "호수의 안개가 숲까지 번지고 있어요. 제가 깨침돌로 안개를 걷어 낼 동안 시간을 벌어 줘요." },
          { who: "haram", text: "3분 20초만 본성을 지키면 돼요. 무리하게 밀지 말고 지켜요." },
          { who: "uru", text: "지키는 것도 싸움이죠! 성문을 꽉 닫아 둘게요." },
        ],
        script: [
          { at: 45, wave: { roles: ["rusher", "rusher", "shield"], lane: "auto" }, talk: ["saebyeok", "안개 속에서 무리가 나와요!"] },
          { at: 110, talk: ["sol", "절반 걷혔어요! 조금만 더 버텨요!"] },
          { at: 150, wave: { roles: ["rusher", "archer", "archer", "shield"], lane: "auto" } },
        ],
        win: [
          { who: "sol", text: "안개가 걷히고 호수가 다시 반짝여요." },
          { who: "saebyeok", text: "그런데 나무 위에서 웃음소리가 들려요. 우리를 계속 따라온 그 날렵한 해골이에요." },
        ],
        hint: "버티기 판이에요. 탑 근처에서 막으면 탑도 함께 싸워 줘요.",
      },
      {
        id: "2-4", name: "척후대장 살랑", map: "twin", boss: "sallang",
        goal: "살랑의 본성을 무너뜨려요",
        rules: { roles: ["shield", "rusher", "archer"], mine: false, cannon: false },
        battle: { time: 360, baseHp: { 1: 0.9 } },
        ai: ai({ answerEvery: 7.0, accuracy: 0.8, counter: 0.4, roles: ["shield", "archer", "rusher"], habits: ["lane"], cannon: false }),
        lines: { lane: "{lane}로만 오네요? 그쪽은 막고, 저는 반대쪽으로 살랑살랑 돌아갈게요!" },
        intro: [
          { who: "sallang", text: "살랑살랑~ 저는 다 보고 있어요. 지휘관이 어느 길로 보내는지요!" },
          { who: "sol", text: "살랑은 한 길만 쓰는 버릇을 금방 알아채요. 무엇을 읽었는지 말해 주니 잘 들어 봐요." },
          { who: "haram", text: "읽혔다 싶으면 길을 바꿔요. 두 길을 고르게 쓰면 살랑도 어쩔 줄 몰라 할 거예요." },
        ],
        script: [
          { at: 200, wave: { roles: ["rusher", "archer", "rusher"], lane: "auto" }, talk: ["sallang", "깜짝 공격이에요~"] },
        ],
        win: [
          { who: "sallang", text: "어라… 내가 왜 숨어 다녔더라. 맞아요, 나는 숲을 지키던 정찰병이었어요." },
          { who: "saebyeok", text: "같은 정찰병이었군요. 이제 편히 쉬어요." },
          { who: "sol", text: "안개를 부르는 힘이 강 건너에서 느껴져요. 다리를 건너야 해요." },
        ],
        hint: "살랑이 길을 읽으면, 막힌 길 대신 다른 길로 보내요.",
      },
    ],
  },
  {
    id: 3, name: "강 건너 다리", art: "ch3", map: "bridge", pos: [73, 60],
    prologue: [{ who: "narr", text: "숲을 지나면 세 줄기 강이 흐르는 들판이 나와요. 강 위에는 돌다리 셋이 놓여 있어요." }, { who: "narr", text: "들판 마을 사람들은 다리 앞 깨침돌에서 글과 셈을 배웠어요. 다리가 막히면 배움도 멈춰요." }],
    teach: "마법사가 합류해 상성 고리가 완성돼요",
    stages: [
      {
        id: "3-1", name: "다리를 지켜라", map: "bridge", unlock: "마법사 합류! 상성 고리 완성",
        goal: "4분 동안 본성을 지켜요",
        rules: { roles: ALL, mine: false, cannon: false },
        battle: { time: 240, objective: { type: "survive" }, gold: { [-1]: 140, [1]: 80 }, baseHp: { [-1]: 1.2 } },
        ai: ai({ answerEvery: 7.0, accuracy: 0.8, counter: 0.3, roles: ALL, cannon: false }),
        intro: [
          { who: "sol", text: "드디어 저도 싸울게요. 마법사는 방패병에게 강하고, 한 번에 여러 해골을 맞혀요." },
          { who: "haram", text: "방패병 → 돌격병 → 궁수 → 마법사 → 방패병. 화살표 쪽에게 강한 상성 고리를 기억해요." },
          { who: "saebyeok", text: "다리 셋으로 해골이 한꺼번에 건너와요! 이번엔 본성을 4분 동안 지키면 이겨요." },
        ],
        script: [
          { at: 60, wave: { roles: ["shield", "shield"], lane: "auto" }, talk: ["saebyeok", "방패 해골 무리예요! 마법사로 녹여요!"] },
          { at: 130, wave: { roles: ["archer", "archer"], lane: "auto" }, talk: ["uru", "궁수 해골이에요. 돌격병, 가자!"] },
          { at: 190, wave: { roles: ["mage", "mage"], lane: "auto" }, talk: ["sol", "해골 마법사는 궁수가 잘 잡아요!"] },
        ],
        win: [
          { who: "haram", text: "다리를 지켜 냈어요! 상성을 정말 잘 썼어요." },
          { who: "sol", text: "강 건너편에서 차가운 주문 소리가 들려요. 해골 주술사가 있는 것 같아요." },
        ],
        hint: "오는 해골을 보고 상성으로 맞서요. 방패 해골에는 마법사, 궁수 해골에는 돌격병!",
      },
      {
        id: "3-2", name: "끊어진 다리", map: "bridge",
        goal: "적 탑 2개를 무너뜨려요",
        rules: { roles: ALL, mine: false, cannon: false },
        battle: { time: 330, objective: { type: "towers", n: 2 } },
        ai: ai({ answerEvery: 7, accuracy: 0.8, counter: 0.35, roles: ALL, cannon: false }),
        intro: [
          { who: "saebyeok", text: "가운데 다리가 반쯤 무너졌어요. 강 건너에 해골 탑이 세 곳 서 있어요." },
          { who: "sol", text: "마법사는 여럿이 모인 곳에 강해요. 해골이 뭉쳐 오면 마법사를 보내요." },
          { who: "haram", text: "탑 두 개만 무너뜨리면 다리를 고칠 시간을 벌 수 있어요." },
        ],
        script: [
          { at: 70, wave: { roles: ["shield", "shield", "shield"], lane: "auto" }, talk: ["sol", "방패 해골이 뭉쳤어요! 마법사를 보낼 때예요."] },
          { at: 200, talk: ["uru", "탑 하나 남았어요! 밀어붙여요!"] },
        ],
        win: [
          { who: "uru", text: "다리 고칠 나무를 날라 왔어요! 들판 마을 사람들이 손을 보태 줬어요." },
          { who: "sol", text: "마을 깨침돌 앞에서 아이들이 글자 공부를 다시 시작했대요." },
        ],
        hint: "방패 해골이 모이면 마법사, 마법사 해골은 궁수로 잡아요.",
      },
      {
        id: "3-3", art: "s33", name: "들판 마을 장날", map: "bridge",
        goal: "해골 병사 15명을 무찔러요",
        rules: { roles: ALL, mine: false, cannon: false },
        battle: { time: 300, objective: { type: "kills", n: 15 }, gold: { [-1]: 120 }, baseHp: { [-1]: 1.3 }, towerHp: { [-1]: 1.3 } },
        ai: ai({ answerEvery: 9.5, accuracy: 0.8, counter: 0.4, roles: ALL, cannon: false }),
        trickle: { every: 22, from: 35, roles: ["mage", "rusher", "shield", "archer"] },
        intro: [
          { who: "haram", text: "들판 마을에 장이 서는 날이에요. 해골들이 마을로 들어오기 전에 막아요." },
          { who: "saebyeok", text: "회색 깃털을 단 해골 마법사가 멀리서 지켜보고 있어요." },
          { who: "sol", text: "회색깃이라고 불리는 주술사예요. 오늘은 부하들만 보낸 것 같아요." },
        ],
        script: [
          { at: 60, wave: { roles: ["mage", "mage"], lane: "auto" }, talk: ["sol", "해골 마법사들이 주문을 외워요! 궁수로 먼저 잡아요."] },
          { at: 150, wave: { roles: ["rusher", "rusher", "shield"], lane: "auto" } },
          { at: 230, talk: ["haram", "거의 다 왔어요. 마지막 무리까지!"] },
        ],
        win: [
          { who: "haram", text: "장터가 무사해요. 마을 사람들이 고맙다며 빵을 싸 줬어요." },
          { who: "saebyeok", text: "회색깃이 큰 다리 쪽으로 물러갔어요. 다음엔 직접 나올 거예요." },
        ],
        hint: "마법사 해골은 뭉친 병사에게 강해요. 궁수로 멀리서 잡아요.",
      },
      {
        id: "3-4", name: "주술사 회색깃", map: "bridge", boss: "hoesaek",
        goal: "회색깃의 본성을 무너뜨려요",
        rules: { roles: ALL, mine: false, cannon: false },
        battle: { time: 360 },
        ai: ai({ answerEvery: 6.4, accuracy: 0.82, counter: 0.45, roles: ALL, habits: ["role"], cannon: false }),
        lines: { role: "{role}만 잔뜩 보내네요? 그럼 저는 {counter}을 불러올게요. 후후." },
        intro: [
          { who: "hoesaek", text: "후후, 다리를 건너왔군요. 하지만 같은 병사만 고집하는 지휘관은 이길 수 없어요." },
          { who: "sol", text: "회색깃은 우리가 가장 많이 보내는 병사의 천적을 불러요. 골고루 섞어 보내요." },
        ],
        script: [
          { at: 150, wave: { roles: ["mage", "shield", "archer"], lane: "auto" }, talk: ["hoesaek", "안개야, 병사들을 깨워라!"] },
        ],
        win: [
          { who: "hoesaek", text: "주문이… 생각나지 않아요. 아, 나는 아이들에게 글을 가르치던 선생이었어요." },
          { who: "sol", text: "기억을 되찾았군요. 그 지식은 사라지지 않아요." },
          { who: "haram", text: "안개의 길은 북쪽 늪으로 이어져요. 늪을 건너야 산 위 요새에 닿을 수 있어요." },
        ],
        hint: "한 종류만 보내면 천적이 와요. 상성 고리를 돌며 섞어 보내요.",
      },
    ],
  },
  {
    id: 4, name: "물안개 늪", art: "swamp", map: "swamp", pos: [84, 34],
    // 늪: 푸른빛 도는 흐린 빛 + 낮게 깔린 물안개
    mood: { sun: [0.86, 0.96, 0.84], sunI: 2.8, hemiSky: [0.62, 0.8, 0.68], hemiI: 1.2, bg: "#16241c", fog: "#87a08c", fogNear: 100, fogFar: 185 },
    prologue: [
      { who: "narr", text: "들판 북쪽, 산으로 가는 길 앞에는 넓은 늪이 있어요. 갈대 사이로 물안개가 늘 낮게 깔려요." },
      { who: "narr", text: "늪을 건너던 나룻배는 오래전에 끊겼어요. 지금은 해골 뱃사공이 안개 속에서 노를 젓는대요." },
    ],
    teach: "길을 자주 바꾸는 상대를 읽어요",
    stages: [
      {
        id: "4-1", name: "갈대숲 입구", map: "swamp",
        goal: "해골 군단의 본성을 무너뜨려요",
        rules: { roles: ALL, mine: false, cannon: false },
        battle: { time: 330, baseHp: { 1: 0.9 } },
        ai: ai({ answerEvery: 6.7, accuracy: 0.81, counter: 0.42, roles: ALL, cannon: false }),
        intro: [
          { who: "saebyeok", text: "갈대가 키보다 커서 길이 잘 안 보여요. 해골이 어느 길로 오는지 잘 살펴요." },
          { who: "haram", text: "전장의 화살표를 봐요. 우리 병사가 가는 길이에요. 길을 바꾸고 싶으면 길을 직접 눌러도 돼요." },
          { who: "uru", text: "늪 물은 차갑지만 제 도끼는 뜨거워요!" },
        ],
        script: [
          { at: 90, wave: { roles: ["rusher", "archer", "mage"], lane: "auto" }, talk: ["saebyeok", "갈대 사이로 무리가 나와요!"] },
          { at: 200, wave: { roles: ["shield", "mage", "mage"], lane: "auto" } },
        ],
        win: [
          { who: "saebyeok", text: "갈대숲을 빠져나왔어요. 저 멀리 물 위로 등불 하나가 떠다녀요." },
          { who: "sol", text: "뱃사공의 등불이에요. 늪을 건너려면 그를 만나야 해요." },
        ],
        hint: "무리가 온 길을 보고, 그 길로 천적 병사를 보내요.",
      },
      {
        id: "4-2", name: "물안개 속에서", map: "swamp",
        goal: "3분 30초 동안 본성을 지켜요",
        rules: { roles: ALL, mine: false, cannon: false },
        battle: { time: 210, objective: { type: "survive" }, gold: { [-1]: 150, [1]: 90 }, baseHp: { [-1]: 1.3 } },
        ai: ai({ answerEvery: 7.0, accuracy: 0.81, counter: 0.45, roles: ALL, cannon: false }),
        intro: [
          { who: "sol", text: "물안개가 너무 짙어서 깨침돌 빛이 약해졌어요. 3분 30초만 버텨 주면 빛을 다시 모을게요." },
          { who: "haram", text: "안 보일 땐 서두르지 말고 탑 가까이에서 막아요." },
          { who: "saebyeok", text: "쉿… 들려요. 노 젓는 소리예요." },
        ],
        script: [
          { at: 40, wave: { roles: ["rusher", "rusher", "archer"], lane: "auto" } },
          { at: 100, wave: { roles: ["mage", "shield", "shield"], lane: "auto" }, talk: ["saebyeok", "안개 속에서 방패 해골이 줄지어 와요!"] },
          { at: 160, wave: { roles: ["rusher", "archer", "mage", "shield"], lane: "auto" }, talk: ["sol", "빛이 거의 다 모였어요!"] },
        ],
        win: [
          { who: "sol", text: "빛이 돌아왔어요! 물안개가 조금씩 물러나요." },
          { who: "uru", text: "안개 속에 나룻배가 보여요. 배 위에 키 큰 해골이 노를 들고 서 있어요." },
        ],
        hint: "버티기 판이에요. 무리가 오면 탑 근처에서 여러 병사로 함께 막아요.",
      },
      {
        id: "4-3", art: "s43", name: "버려진 나루터", map: "swamp",
        goal: "해골 병사 12명을 무찔러요",
        rules: { roles: ALL, mine: false, cannon: false },
        battle: { time: 300, objective: { type: "kills", n: 12 }, gold: { [-1]: 120 }, baseHp: { [-1]: 1.3 }, towerHp: { [-1]: 1.3 } },
        ai: ai({ answerEvery: 10, accuracy: 0.82, counter: 0.45, roles: ALL, cannon: false }),
        trickle: { every: 22, from: 35, roles: ["rusher", "archer", "mage", "shield"] },
        voice: "chulleong",
        lines: { lane: "{lane}… 손님들이 그 길로만 오네요? 거기에 배를 대 둘게요." },
        intro: [
          { who: "saebyeok", text: "나루터에 해골들이 줄지어 서 있어요. 배를 기다리는 것 같아요." },
          { who: "sol", text: "옛날 늪을 건너던 사람들이에요. 기다리다가 안개에 기억을 잃었나 봐요." },
          { who: "haram", text: "모두 무너뜨려 편히 쉬게 해 줘요." },
        ],
        script: [
          { at: 70, wave: { roles: ["shield", "shield", "rusher"], lane: "auto" } },
          { at: 160, wave: { roles: ["mage", "archer", "archer"], lane: "auto" }, talk: ["chulleong", "출렁출렁… 손님들, 줄을 서요. 배가 곧 와요."] },
        ],
        win: [
          { who: "haram", text: "나루터가 조용해졌어요." },
          { who: "chulleong", text: "출렁출렁… 손님이 왜 이렇게 줄었지? 내 배에 태울 사람들을 어디로 보냈어요!" },
        ],
        hint: "무찌르기 판이에요. 상성을 노리면 더 빨리 무찌를 수 있어요.",
      },
      {
        id: "4-4", name: "해골 뱃사공 출렁", map: "swamp", boss: "chulleong",
        goal: "출렁의 본성을 무너뜨려요",
        rules: { roles: ALL, mine: false, cannon: false },
        battle: { time: 360, baseHp: { 1: 0.95 } },
        ai: ai({ answerEvery: 6.2, accuracy: 0.83, counter: 0.5, roles: ALL, cannon: false, habits: ["lane", "role", "hoard"] }),
        lines: {
          lane: "{lane}… 손님이 그 길로만 오네요? 거기에 배를 대고 막아 둘게요.",
          role: "{role}만 태우는군요. 그럼 나는 {counter}을 태워 보내요.",
          hoard: "골드를 잔뜩 실었네요? 무거운 배는 느려요. {lane}로 노를 저어라!",
        },
        intro: [
          { who: "chulleong", text: "나는 늪의 뱃사공 출렁이에요. 손님을 건네주는 게 내 일인데… 어디로 건네주는지는 잊었어요." },
          { who: "uru", text: "그럼 우리가 길을 알려 줄게요! 산 쪽으로요!" },
          { who: "haram", text: "출렁은 우리가 한 길로만 보내면 그 길에 배를 대고 막아요. 길을 자주 바꿔요." },
        ],
        script: [
          { at: 100, wave: { roles: ["rusher", "rusher", "mage"], lane: "auto" }, talk: ["chulleong", "출렁! 손님들 내려요!"] },
          { at: 220, wave: { roles: ["shield", "shield", "archer"], lane: "auto" } },
          { at: 320, wave: { roles: ["rusher", "mage", "mage"], lane: "auto" }, talk: ["chulleong", "마지막 배예요… 왜 아무도 건너가지 않죠?"] },
        ],
        win: [
          { who: "chulleong", text: "아… 생각났어요. 나는 아이들을 학교 섬으로 건네주던 뱃사공이었어요." },
          { who: "chulleong", text: "고마워요. 이제 노를 내려놓을게요. 산길 요새로 가는 물길은 저쪽이에요." },
          { who: "sol", text: "산 위 요새에 해골 장군이 있다는 소문이 있어요. 조심해서 가요." },
        ],
        hint: "같은 길만 보내면 출렁이 막아요. 길과 병사를 골고루 바꿔요.",
      },
    ],
  },
  {
    id: 5, name: "산길 요새", art: "ch4", map: "pass", pos: [51, 27],
    prologue: [{ who: "narr", text: "들판 북쪽, 눈 덮인 산 사이로 요새가 서 있어요. 요새 아래에는 군도의 금광이 있어요." }, { who: "narr", text: "요새로 가는 길은 짧은 지름길과 굽은 산길로 나뉘어요. 빠른 길이 늘 좋은 길은 아니에요." }],
    teach: "금광과 성 대포로 작전을 세워요",
    stages: [
      {
        id: "5-1", name: "금광을 지켜라", map: "pass", unlock: "금광 강화와 성 대포가 열렸어요",
        goal: "해골 군단의 본성을 무너뜨려요",
        rules: { roles: ALL },
        battle: { time: 360, towerHp: { 1: 1.1 } },
        ai: ai({ answerEvery: 6.2, accuracy: 0.82, counter: 0.5, mineTo: 2, roles: ALL }),
        intro: [
          { who: "uru", text: "산길이 꼬불꼬불해요! 가운데 지름길은 짧지만, 해골도 거기로 많이 와요." },
          { who: "haram", text: "이제 금광과 성 대포를 써요. 금광을 강화하면 문제마다 골드를 더 받아요." },
          { who: "sol", text: "문제를 5번 연속 맞히면 성 대포가 충전돼요. 해골이 몰렸을 때 쏘면 좋아요." },
        ],
        script: [
          { at: 30, talk: ["haram", "금광은 일찍 강화할수록 이득이에요. 대신 그동안 막을 병사도 남겨요."] },
          { at: 180, wave: { roles: ["rusher", "rusher", "shield", "mage"], lane: "mid" }, talk: ["saebyeok", "지름길로 무리가 내려와요! 대포를 준비해요!"] },
        ],
        win: [
          { who: "uru", text: "요새 앞까지 왔어요! 장군을 만나려면 광산길부터 올라가야 해요." },
          { who: "saebyeok", text: "장군은 우리가 골드를 모으는 걸 싫어한대요. 모아 두면 바로 쳐들어온대요." },
        ],
        hint: "금광은 적이 없을 때 강화하고, 해골이 몰리면 성 대포를 쏴요.",
      },
      {
        id: "5-2", name: "가파른 광산길", map: "pass",
        goal: "해골 군단의 본성을 무너뜨려요",
        rules: { roles: ALL },
        battle: { time: 360, towerHp: { 1: 1.05 }, gold: { [-1]: 60 } },
        ai: ai({ answerEvery: 6.1, accuracy: 0.82, counter: 0.5, mineTo: 2, cannonAt: 3, roles: ALL }),
        intro: [
          { who: "uru", text: "산길이 가팔라요. 숨이 차네요!" },
          { who: "sol", text: "요새 아래 광산에서 골드가 나와요. 금광을 키우면 문제 하나로 받는 골드가 늘어요." },
          { who: "haram", text: "처음엔 금광을 키우고, 모은 골드로 힘 있게 밀어 봐요." },
        ],
        script: [
          { at: 30, talk: ["sol", "적이 조용할 때가 금광을 키울 때예요."] },
          { at: 150, wave: { roles: ["rusher", "rusher", "mage"], lane: "auto" }, talk: ["saebyeok", "광산 위에서 무리가 내려와요!"] },
          { at: 260, wave: { roles: ["shield", "archer", "mage"], lane: "auto" } },
        ],
        win: [
          { who: "uru", text: "와, 골드가 쏟아져요!" },
          { who: "haram", text: "철골 장군은 골드를 쌓아 두기만 하는 걸 싫어한대요. 모은 골드는 제때 써요." },
        ],
        hint: "금광은 적이 조용할 때 키우고, 모은 골드는 쌓아 두지 말고 써요.",
      },
      {
        id: "5-3", art: "s53", name: "대장간 되찾기", map: "pass",
        goal: "해골 병사 14명을 무찔러요",
        rules: { roles: ALL },
        battle: { time: 300, objective: { type: "kills", n: 14 }, gold: { [-1]: 130 }, baseHp: { [-1]: 1.3 }, towerHp: { [-1]: 1.3 } },
        ai: ai({ answerEvery: 9.5, accuracy: 0.83, counter: 0.5, mineTo: 2, cannonAt: 3, roles: ALL }),
        trickle: { every: 22, from: 30, roles: ["rusher", "shield", "archer", "mage"] },
        intro: [
          { who: "uru", text: "여기가 산 마을 대장간이에요! 해골들이 차지하고 있어요." },
          { who: "haram", text: "성 대포를 쓸 때예요. 다섯 문제를 연달아 맞히면 대포가 차요." },
          { who: "saebyeok", text: "해골이 뭉쳐 올 때 쏘면 한 번에 여럿을 무너뜨려요." },
        ],
        script: [
          { at: 50, wave: { roles: ["shield", "shield", "shield"], lane: "auto" }, talk: ["saebyeok", "한데 뭉쳤어요! 대포를 쏠 때예요!"] },
          { at: 150, wave: { roles: ["rusher", "rusher", "archer"], lane: "auto" } },
          { at: 230, wave: { roles: ["mage", "mage", "shield"], lane: "auto" }, talk: ["uru", "마지막 무리예요! 대장간 불을 지켜요!"] },
        ],
        win: [
          { who: "uru", text: "대장간 불을 다시 지폈어요! 우리 병사 방패를 손봐 둘게요." },
          { who: "saebyeok", text: "요새 성벽 위에 쇠 갑옷을 입은 커다란 해골이 서 있어요." },
        ],
        hint: "해골이 뭉쳐 오면 성 대포! 대포를 채우려면 연달아 맞혀요.",
      },
      {
        id: "5-4", name: "해골 장군 철골", map: "pass", boss: "cheolgol",
        goal: "철골 장군의 본성을 무너뜨려요",
        rules: { roles: ALL },
        battle: { time: 360, baseHp: { 1: 1.1 }, towerHp: { 1: 1.15 } },
        ai: ai({ answerEvery: 5.8, accuracy: 0.84, counter: 0.55, mineTo: 2, cannonAt: 3, roles: ALL, habits: ["hoard", "cannon", "lane"] }),
        lines: {
          hoard: "골드를 쌓아 두기만 하네요? 그럼 지금 {lane}로 밀고 들어가요!",
          cannon: "대포를 쏘는군요. 그럼 병사를 흩어서 보낼게요!",
          lane: "{lane}만 지키면 다른 길이 비어요. 철컥!",
        },
        intro: [
          { who: "cheolgol", text: "철컥. 여기는 내 요새예요. 느긋하게 골드를 모으는 지휘관은 한 번에 무너뜨려요." },
          { who: "haram", text: "철골은 우리가 골드를 쌓아 두면 바로 쳐들어와요. 모은 골드는 제때 써요." },
          { who: "sol", text: "대포를 쏘면 병사를 흩어 보내고, 한 길만 쓰면 다른 길을 노린대요. 말을 잘 들어 봐요." },
        ],
        script: [
          { at: 220, giant: "auto", talk: ["cheolgol", "안개 거인아, 나와라! 철컥!"] },
        ],
        win: [
          { who: "cheolgol", text: "철컥… 나는 이 요새의 문지기였어요. 안개가… 모든 걸 잊게 했어요." },
          { who: "haram", text: "요새 너머 서리 고개만 넘으면 안개 성채예요. 안개 군주 모로가 거기 있어요." },
          { who: "sol", text: "모로… 옛 왕립 도서관의 사서 이름과 같아요. 설마…" },
        ],
        hint: "골드를 250 넘게 쌓지 말고 바로바로 써요. 거인은 여러 병사로 함께 막아요.",
      },
    ],
  },
  {
    id: 6, name: "서리 고개", art: "frost", map: "frost", pos: [88, 14],
    // 눈 덮인 고개: 차고 밝은 빛 + 흰 눈안개
    mood: { sun: [0.92, 0.96, 1.05], sunI: 3.0, hemiSky: [0.86, 0.9, 1.0], hemiI: 1.45, bg: "#1c2733", fog: "#cdd8e4", fogNear: 105, fogFar: 190 },
    prologue: [
      { who: "narr", text: "요새를 넘으면 안개 성채로 가는 마지막 고개가 나와요. 한여름에도 서리가 내리는 곳이에요." },
      { who: "narr", text: "고개 꼭대기에는 옛 파수꾼의 망루가 있어요. 지금은 해골 파수꾼이 아무도 지나가지 못하게 지켜요." },
    ],
    teach: "안개 거인을 처음 만나요. 여럿이 함께 막아요",
    stages: [
      {
        id: "6-1", name: "얼어붙은 길", map: "frost",
        goal: "해골 군단의 본성을 무너뜨려요",
        rules: { roles: ALL },
        battle: { time: 360, towerHp: { 1: 1.1 } },
        ai: ai({ answerEvery: 5.9, accuracy: 0.84, counter: 0.55, mineTo: 2, cannonAt: 3, roles: ALL }),
        intro: [
          { who: "saebyeok", text: "길이 꽁꽁 얼었어요. 미끄러우니 서두르지 마요." },
          { who: "uru", text: "추워서 도끼가 손에 붙을 것 같아요!" },
          { who: "haram", text: "세 갈래 길이 모두 열려 있어요. 지금까지 배운 걸 모두 써요." },
        ],
        script: [
          { at: 120, wave: { roles: ["shield", "shield", "mage"], lane: "auto" }, talk: ["saebyeok", "눈밭 위로 방패 해골들이 내려와요!"] },
          { at: 250, wave: { roles: ["rusher", "rusher", "archer"], lane: "auto" } },
        ],
        win: [
          { who: "sol", text: "고개 중턱에 다다랐어요. 위에서 쿵, 쿵 하는 소리가 나요." },
          { who: "haram", text: "무언가 커다란 게 오고 있어요. 단단히 준비해요." },
        ],
        hint: "세 길을 골고루 살펴요. 금광은 조용할 때, 대포는 뭉쳤을 때!",
      },
      {
        id: "6-2", name: "눈보라", map: "frost",
        goal: "4분 동안 본성을 지켜요",
        rules: { roles: ALL },
        battle: { time: 240, objective: { type: "survive" }, gold: { [-1]: 160, [1]: 100 }, baseHp: { [-1]: 1.2 } },
        ai: ai({ answerEvery: 6.0, accuracy: 0.84, counter: 0.55, mineTo: 2, cannonAt: 3, roles: ALL }),
        intro: [
          { who: "sol", text: "눈보라가 몰아쳐요. 제가 깨침돌로 바람을 막을 동안 버텨 줘요." },
          { who: "haram", text: "4분이에요. 탑을 지키면서 버텨요." },
          { who: "uru", text: "눈보라쯤이야! 다들 제 뒤로 붙어요!" },
        ],
        script: [
          { at: 50, wave: { roles: ["rusher", "rusher", "shield"], lane: "auto" } },
          { at: 130, giant: "auto", talk: ["saebyeok", "커다란 해골이에요! 혼자 막지 말고 여럿이 함께 막아요!"] },
          { at: 190, wave: { roles: ["mage", "archer", "archer"], lane: "auto" } },
        ],
        win: [
          { who: "uru", text: "저 커다란 녀석, 안개가 뭉쳐 생긴 거래요." },
          { who: "sol", text: "안개 거인이에요. 성채에 가까워질수록 더 자주 나올 거예요." },
        ],
        hint: "거인은 체력이 아주 많아요. 탑 근처에서 여러 병사로 함께 막고, 대포를 아껴 둬요.",
      },
      {
        id: "6-3", art: "s63", name: "얼음 동굴", map: "frost",
        goal: "해골 병사 20명을 무찔러요",
        rules: { roles: ALL },
        battle: { time: 300, objective: { type: "kills", n: 20 }, gold: { [-1]: 140 }, baseHp: { [-1]: 1.35 }, towerHp: { [-1]: 1.3 } },
        ai: ai({ answerEvery: 8.2, accuracy: 0.84, counter: 0.55, mineTo: 2, cannonAt: 3, roles: ALL }),
        trickle: { every: 21, from: 30, roles: ["rusher", "shield", "archer", "mage"] },
        voice: "seori",
        lines: { cannon: "대포 소리가 동굴을 울리네요. 흩어져요!" },
        intro: [
          { who: "saebyeok", text: "고개를 질러가는 얼음 동굴이에요. 해골들이 동굴 안에 잔뜩 있어요." },
          { who: "sol", text: "동굴 벽에 옛 파수꾼들의 이름이 새겨져 있어요. 이 해골들도 파수꾼이었나 봐요." },
          { who: "haram", text: "동굴을 빠져나가려면 길을 막은 해골을 모두 무찔러야 해요." },
        ],
        script: [
          { at: 60, wave: { roles: ["shield", "shield", "rusher"], lane: "auto" } },
          { at: 150, talk: ["saebyeok", "동굴 깊은 곳에서 해골들이 계속 나와요! 대포를 아껴 둬요!"] },
          { at: 230, wave: { roles: ["mage", "mage", "archer"], lane: "auto" } },
        ],
        win: [
          { who: "haram", text: "동굴을 빠져나왔어요. 망루가 코앞이에요." },
          { who: "seori", text: "멈춰요. 누구도 이 고개를 지나갈 수 없어요. 그게 나의 일이니까요." },
        ],
        hint: "해골이 끊이지 않고 와요. 상성을 노리고, 뭉치면 대포로 한꺼번에!",
      },
      {
        id: "6-4", name: "해골 파수꾼 서리", map: "frost", boss: "seori",
        goal: "서리의 본성을 무너뜨려요",
        rules: { roles: ALL },
        battle: { time: 390, baseHp: { 1: 1.1 }, towerHp: { 1: 1.15 } },
        ai: ai({ answerEvery: 5.6, accuracy: 0.85, counter: 0.6, mineTo: 3, cannonAt: 3, roles: ALL, habits: ["lane", "role", "cannon", "hoard"] }),
        lines: {
          lane: "{lane}로만 오는군요. 망루에서 다 보여요. 그 길을 얼려 둘게요.",
          role: "{role}… 그것만 믿는군요. {counter}로 막겠어요.",
          cannon: "대포라… 흩어져서 지키겠어요.",
          hoard: "골드를 쌓아 두면 그만큼 늦어져요. {lane}로 내려가라!",
        },
        intro: [
          { who: "seori", text: "나는 이 고개의 파수꾼, 서리예요. 무엇을 지켜야 했는지는 잊었지만, 지키는 일만은 잊지 않았어요." },
          { who: "haram", text: "서리는 우리가 쓰는 수를 보고 막아요. 병사와 길을 골고루 섞어요." },
          { who: "sol", text: "거인도 보낼 거예요. 대포는 거인이 탑에 닿기 전에 아껴 둬요." },
        ],
        script: [
          { at: 110, giant: "auto", talk: ["seori", "눈 거인아, 고개를 막아라."] },
          { at: 230, wave: { roles: ["shield", "shield", "mage", "mage"], lane: "auto" } },
          { at: 310, giant: "auto", talk: ["seori", "왜 돌아가지 않나요? 여기서 멈추는 게 안전해요."] },
        ],
        win: [
          { who: "seori", text: "…지키려던 건 고개 아래 마을 아이들이었어요. 이제 기억나요." },
          { who: "seori", text: "안개 성채는 바로 저 바다 건너예요. 모로를 만나거든 너무 미워하지 말아 줘요." },
          { who: "sol", text: "가요. 마지막 성채로." },
        ],
        hint: "서리는 버릇을 읽어요. 거인은 여럿이 막고, 길과 병사를 자주 바꿔요.",
      },
    ],
  },
  {
    id: 7, name: "안개 성채", art: "ch5", map: "citadel", pos: [16, 20],
    prologue: [{ who: "narr", text: "모든 안개가 시작된 곳, 북쪽 바다 위의 성채예요." }, { who: "narr", text: "본래는 군도의 이야기를 모아 둔 왕립 도서관이었어요. 지금은 짙은 안개에 잠겨 책장 넘기는 소리도 들리지 않아요." }],
    teach: "배운 것을 모두 걸고 마지막 싸움에 나서요",
    stages: [
      {
        id: "7-1", name: "안개 속으로", map: "citadel",
        goal: "적 탑 3개를 모두 무너뜨려요",
        rules: { roles: ALL },
        battle: { time: 360, objective: { type: "towers", n: 3 }, towerHp: { 1: 1.1 } },
        ai: ai({ answerEvery: 5.8, accuracy: 0.84, counter: 0.6, mineTo: 2, cannonAt: 3, roles: ALL }),
        intro: [
          { who: "saebyeok", text: "안개가 너무 짙어요. 성벽 앞에 탑이 셋 있어요." },
          { who: "haram", text: "탑 셋을 모두 무너뜨리면 성문이 열려요. 지금까지 배운 걸 모두 써요." },
        ],
        script: [
          { at: 120, giant: "auto", talk: ["moro", "누구든 안개 속에서는 잊게 돼요. 거인아, 막아라."] },
          { at: 260, giant: "auto", talk: ["saebyeok", "거인이 또 와요! 여럿이 함께 막아요!"] },
        ],
        win: [
          { who: "uru", text: "탑이 다 무너졌어요! 성문이 열려요!" },
          { who: "moro", text: "여기까지 오다니… 왜 그렇게 기억하려고 애쓰나요? 잊으면 아프지도 않은데요." },
        ],
        hint: "거인은 체력이 아주 많아요. 탑 근처에서 여러 병사로 함께 막아요.",
      },
      {
        id: "7-2", art: "s72", name: "도서관 서고", map: "citadel",
        goal: "적 탑 2개를 무너뜨려요",
        rules: { roles: ALL },
        battle: { time: 360, objective: { type: "towers", n: 2 }, towerHp: { 1: 1.1 } },
        ai: ai({ answerEvery: 5.7, accuracy: 0.84, counter: 0.6, mineTo: 2, cannonAt: 3, roles: ALL }),
        intro: [
          { who: "sol", text: "여기는 왕립 도서관이었던 곳이에요. 책장마다 안개가 스며 있어요." },
          { who: "saebyeok", text: "책장 사이로 해골 사서들이 오가요." },
          { who: "haram", text: "탑 두 개를 무너뜨리면 서고 문이 열려요." },
        ],
        script: [
          { at: 100, wave: { roles: ["mage", "mage", "shield"], lane: "auto" }, talk: ["sol", "해골 사서들이 주문책을 펼쳐요!"] },
          { at: 170, giant: "auto", talk: ["saebyeok", "책장 뒤에서 거인이 나와요!"] },
        ],
        win: [
          { who: "sol", text: "이 책… 모로가 쓴 일지예요. '슬픈 이야기를 모두 지우면 아무도 울지 않겠지'라고 적혀 있어요." },
          { who: "haram", text: "모로도 처음엔 누군가를 지키고 싶었던 거군요." },
        ],
        hint: "탑 둘만 무너뜨리면 돼요. 막힌 길은 두고 열린 길을 노려요.",
      },
      {
        id: "7-3", name: "기억의 계단", map: "citadel",
        goal: "4분 동안 본성을 지켜요",
        rules: { roles: ALL },
        battle: { time: 240, objective: { type: "survive" }, gold: { [-1]: 170, [1]: 110 }, baseHp: { [-1]: 1.35 } },
        ai: ai({ answerEvery: 6.0, accuracy: 0.84, counter: 0.6, mineTo: 2, cannonAt: 3, roles: ALL }),
        intro: [
          { who: "saebyeok", text: "성채 꼭대기로 가는 긴 계단이에요. 위에서 해골과 거인이 쏟아져 내려와요." },
          { who: "haram", text: "4분만 버티면 솔이 계단의 안개를 걷어 낼 거예요." },
          { who: "sol", text: "계단마다 잊힌 기억이 잠들어 있어요. 조금만 힘을 빌려 줘요." },
        ],
        script: [
          { at: 60, giant: "auto", talk: ["moro", "기억은 무거워요. 내려놓고 돌아가요."] },
          { at: 140, wave: { roles: ["rusher", "rusher", "mage", "archer"], lane: "auto" } },
          { at: 180, giant: "auto", talk: ["saebyeok", "거인이 또 와요! 함께 막아요!"] },
        ],
        win: [
          { who: "uru", text: "계단 끝에 문이 보여요!" },
          { who: "moro", text: "…여기까지 왔군요. 들어오세요. 마지막으로 이야기해요." },
        ],
        hint: "거인이 둘 와요. 대포를 아껴 두었다가 거인이 탑에 닿을 때 쏴요.",
      },
      {
        id: "7-4", name: "안개 군주 모로", map: "citadel", boss: "moro", final: true,
        goal: "모로의 본성을 무너뜨려요",
        rules: { roles: ALL },
        battle: { time: 420, baseHp: { 1: 1.25 }, towerHp: { 1: 1.15 } },
        ai: ai({ answerEvery: 5.4, accuracy: 0.85, counter: 0.65, mineTo: 3, cannonAt: 3, roles: ALL, habits: ["lane", "role", "hoard", "cannon"] }),
        lines: {
          lane: "{lane}… 그 길만 기억하는군요. 그 길은 안개로 덮을게요.",
          role: "{role}에만 기대는군요. {counter}이 그 기억을 지울 거예요.",
          hoard: "모아 둔 골드도 안개 속에선 잊히기 마련이에요. {lane}로 가라!",
          cannon: "대포 소리… 흩어져라, 내 병사들아.",
        },
        intro: [
          { who: "moro", text: "나는 도서관에서 수많은 이야기를 지켰어요. 슬픈 이야기도요. 그래서 모두 잊게 하고 싶었어요." },
          { who: "sol", text: "모로, 잊으면 슬픔도 사라지지만 배운 것도 사라져요. 지휘관이 문제를 풀 때마다 빛나는 걸 봐요." },
          { who: "haram", text: "모로는 지금까지의 대장들이 쓰던 수를 모두 써요. 길도, 병사도 골고루, 골드는 제때!" },
        ],
        script: [
          { at: 90, giant: "auto", talk: ["moro", "안개 거인아, 기억을 덮어라."] },
          { at: 200, giant: "auto" },
          { at: 310, giant: "auto", talk: ["moro", "왜… 왜 포기하지 않나요?"] },
        ],
        win: [
          { who: "moro", text: "빛이… 따뜻하네요. 잊고 싶던 이야기 속에도 소중한 게 있었군요." },
          { who: "moro", text: "안개를 거둘게요. 해골이 된 병사들도 이제 편히 쉬게 할게요." },
          { who: "sol", text: "모로, 도서관으로 돌아와요. 이번엔 함께 기억해요." },
          { who: "haram", text: "지휘관, 고마워요. 문제를 하나씩 풀어 낸 그 빛이 아라 군도를 구했어요!" },
        ],
        hint: "버릇을 읽히면 바로 바꿔요. 길·병사를 골고루, 골드는 쌓지 말고 제때!",
      },
    ],
  },
  {
    id: 8, name: "잊힌 등대섬", art: "ch6", map: "isle", pos: [14, 89], after: true,
    // 해 질 녘 빛(지도 분위기를 덮어씀)
    mood: { sun: [1.0, 0.58, 0.4], sunI: 2.7, hemiSky: [0.6, 0.52, 0.88], hemiI: 1.0, bg: "#1e1830" },
    prologue: [
      { who: "narr", text: "안개가 걷히고 몇 달이 지났어요. 그런데 서쪽 바다 끝 등대섬에서만은 여전히 잿빛 안개가 피어올라요." },
      { who: "narr", text: "등대는 깨침돌을 군도에 처음 들여온 사람들이 세운 곳이에요. 불이 꺼진 지 아주 오래되었지요." },
      { who: "moro", text: "저 안개는 제가 부른 게 아니에요. 제가 잊으려던 마음이 그림자가 되어 남았어요. 그 그림자는 보는 대로 따라 해요." },
    ],
    teach: "영웅과 함께, 배운 모든 것을 시험해요",
    stages: [
      {
        id: "8-1", name: "꺼진 등대", map: "isle",
        goal: "4분 동안 본성을 지켜 등대 불씨를 살려요",
        rules: { roles: ALL },
        battle: { time: 240, objective: { type: "survive" }, gold: { [-1]: 160, [1]: 90 }, baseHp: { [-1]: 1.2 } },
        ai: ai({ answerEvery: 6.0, accuracy: 0.84, counter: 0.55, mineTo: 2, cannonAt: 3, roles: ALL }),
        intro: [
          { who: "saebyeok", text: "등대 아래에 해골 무리가 몰려 있어요. 그런데 대장이 보이지 않아요." },
          { who: "sol", text: "꺼진 등대에 불씨를 다시 지피려면 시간이 필요해요. 4분만 본성을 지켜 줘요." },
          { who: "haram", text: "이번엔 영웅의 힘도 함께해요. 기술은 무리나 거인이 몰려올 때 아껴 써요." },
        ],
        script: [
          { at: 50, wave: { roles: ["rusher", "rusher", "shield"], lane: "auto" }, talk: ["saebyeok", "무리가 몰려와요! 영웅 기술을 쓸 때예요!"] },
          { at: 110, giant: "auto", talk: ["moro", "그림자가 거인을 빚어 보냈어요. 힘을 모아 막아요!"] },
          { at: 165, wave: { roles: ["mage", "archer", "archer"], lane: "auto" } },
          { at: 200, giant: "auto", talk: ["sol", "불씨가 거의 살아났어요! 조금만 더 버텨요!"] },
        ],
        win: [
          { who: "sol", text: "등대에 불이 붙었어요! 빛이 안개를 조금씩 밀어내요." },
          { who: "saebyeok", text: "저기, 안개 속에 누가 서 있어요. 망토를 두른 모습이… 꼭 우리 지휘관 같아요." },
          { who: "moro", text: "안개 그림자예요. 지휘관이 싸우는 모습을 지켜보며 그대로 흉내 내는 법을 배웠어요." },
        ],
        hint: "버티기 판이에요. 탑 근처에 병사를 세워 두고, 영웅 기술은 무리나 거인이 올 때 써요.",
      },
      {
        id: "8-2", name: "등대지기의 일지", map: "isle",
        goal: "해골 병사 18명을 무찔러요",
        rules: { roles: ALL },
        battle: { time: 300, objective: { type: "kills", n: 18 }, gold: { [-1]: 140 }, baseHp: { [-1]: 1.35 }, towerHp: { [-1]: 1.3 } },
        ai: ai({ answerEvery: 8, accuracy: 0.85, counter: 0.6, mineTo: 2, cannonAt: 3, roles: ALL }),
        trickle: { every: 21, from: 30, roles: ["rusher", "shield", "archer", "mage"] },
        intro: [
          { who: "sol", text: "등대지기 방에서 낡은 일지를 찾았어요. 첫 깨침돌을 이 섬에 처음 세웠다고 적혀 있어요." },
          { who: "moro", text: "그림자는 일지 속 이야기도 흉내 내려 해요. 일지를 지켜 줘요." },
          { who: "saebyeok", text: "해골들이 일지를 노리고 몰려와요!" },
        ],
        script: [
          { at: 70, wave: { roles: ["shield", "rusher", "rusher"], lane: "auto" } },
          { at: 160, talk: ["moro", "그림자가 해골들을 더 불러요. 일지를 끝까지 지켜 줘요."] },
          { at: 230, wave: { roles: ["mage", "mage", "archer"], lane: "auto" } },
        ],
        win: [
          { who: "sol", text: "일지 마지막 장에 이렇게 적혀 있어요. '빛은 따라 할 수 없다. 스스로 켜야 한다.'" },
          { who: "haram", text: "그림자를 이기는 방법이 여기 있었네요." },
        ],
        hint: "무찌르기 판이에요. 상성으로 빨리 무찌르고, 뭉치면 대포!",
      },
      {
        id: "8-3", art: "s83", name: "거울 바다", map: "isle",
        goal: "해골 군단의 본성을 무너뜨려요",
        rules: { roles: ALL },
        battle: { time: 390, baseHp: { 1: 1.15 }, towerHp: { 1: 1.1 } },
        ai: ai({ answerEvery: 5.6, accuracy: 0.85, counter: 0.6, mineTo: 2, cannonAt: 3, roles: ALL, habits: ["mirror"], mirror: 0.25 }),
        voice: "geurimja",
        lines: { mirror: "{role}을 보냈군요. 거울처럼 나는 {counter}로 받을게요." },
        intro: [
          { who: "saebyeok", text: "바다가 거울처럼 잔잔해요. 물 위에 우리 모습이 비쳐요." },
          { who: "moro", text: "그림자가 거울 바다에서 지휘관의 수를 익히고 있어요. 같은 수만 쓰면 금방 따라 해요." },
          { who: "haram", text: "이번 판은 연습이라 생각해요. 병사와 길을 계속 바꿔 봐요." },
        ],
        script: [
          { at: 120, wave: { roles: ["rusher", "archer", "mage"], lane: "auto" }, talk: ["geurimja", "당신이 보낸 병사, 잘 봤어요."] },
          { at: 260, giant: "auto" },
        ],
        win: [
          { who: "geurimja", text: "…당신은 계속 달라지는군요. 그럼 나도 더 열심히 따라 할게요." },
          { who: "moro", text: "그림자가 등대 꼭대기로 갔어요. 이제 끝을 내요." },
        ],
        hint: "상대가 내 병사를 보고 천적을 보내요. 같은 병사를 연달아 보내지 말아요.",
      },
      {
        id: "8-4", name: "안개 그림자", map: "isle", boss: "geurimja", epilogue: true,
        goal: "안개 그림자의 본성을 무너뜨려요",
        rules: { roles: ALL },
        battle: { time: 420, baseHp: { 1: 1.3 }, towerHp: { 1: 1.2 } },
        ai: ai({ answerEvery: 5.3, accuracy: 0.86, counter: 0.65, mineTo: 3, cannonAt: 3, roles: ALL, habits: ["lane", "role", "hoard", "cannon", "skill", "mirror"], mirror: 0.4 }),
        lines: {
          lane: "{lane}… 또 그 길이군요. 이번엔 내가 먼저 막아 둘게요.",
          role: "{role}만 고르는군요. 나는 {counter}로 맞설게요.",
          hoard: "골드를 쌓아 두는 버릇, 나도 배웠어요. {lane}로 한꺼번에 가요!",
          cannon: "대포 소리를 들었어요. 모두 흩어져요!",
          skill: "영웅의 힘이군요. 나도 흉내 내고 싶은데… 우선 흩어져요!",
          mirror: "{role}을 보냈군요. 그럼 나는 {counter}로 받을게요.",
        },
        intro: [
          { who: "geurimja", text: "지휘관, 당신이 하는 대로 나도 할게요. 보낸 길도, 고른 병사도 다 보고 있었어요." },
          { who: "haram", text: "따라 하는 상대에게는 같은 수가 오래 통하지 않아요. 계속 바꿔 가며 싸워요." },
          { who: "sol", text: "그림자는 따라 할 수는 있어도 문제를 풀어 깨칠 수는 없어요. 그게 우리 힘이에요." },
        ],
        script: [
          { at: 90, giant: "auto", talk: ["geurimja", "거인도 따라 빚을 수 있어요."] },
          { at: 200, giant: "auto" },
          { at: 320, giant: "auto", talk: ["geurimja", "왜 자꾸 달라지나요? 따라 할 수가 없어요…"] },
        ],
        win: [
          { who: "geurimja", text: "따라 할수록 더 모르겠어요. 당신은 매번 새로 생각하는군요." },
          { who: "moro", text: "그림자야, 이제 함께 돌아가자. 잊지 않고 기억하는 법은 내가 알려 줄게." },
          { who: "haram", text: "지휘관, 등대가 다시 빛나요. 이 빛이면 어떤 안개가 와도 길을 잃지 않을 거예요." },
        ],
        hint: "같은 길, 같은 병사만 보내면 그림자가 바로 따라 막아요. 자주 바꾸고, 영웅 기술은 무리가 모였을 때!",
      },
    ],
  },
];

export const ENDING = [
  { who: "narr", text: "잿빛 안개가 걷히고, 아라 군도에 다시 아침이 왔어요." },
  { who: "narr", text: "깨침돌은 오늘도 반짝여요. 누군가 문제 하나를 풀어 낼 때마다요." },
  { who: "narr", text: "안개 성채까지 원정을 마쳤어요! 이제 자유 대전에서 원정 지도를 모두 쓸 수 있어요." },
  { who: "narr", text: "그런데 서쪽 바다 끝, 등대섬에만은 아직 잿빛 안개가 남아 있어요…" },
];
// 6장(등대섬)을 마친 뒤 맺음 이야기
export const EPILOGUE = [
  { who: "narr", text: "등대의 빛이 군도의 밤바다를 비춰요. 배들이 다시 서쪽 바다를 오가요." },
  { who: "narr", text: "깨침돌은 남을 따라 하는 사람보다, 스스로 생각해 낸 사람에게 가장 밝게 빛나요." },
  { who: "narr", text: "모든 원정을 마쳤어요! 도전 모드와 별 3개, 기사단 막사의 훈련도 모두 채워 보세요." },
];

// 도감 물건(open: 이 스테이지가 열리면 도감에 들어옴, icon: 화면이 그리는 작은 그림 이름)
export const ITEMS = [
  { key: "stone", name: "깨침돌", icon: "gem", open: "1-1",
    text: "성문마다 세워 둔 신비한 돌이에요. 누군가 문제를 풀어 깨달음을 얻으면 반짝이며 골드를 내놓아요. 스스로 생각해 낸 답일수록 더 밝게 빛나요." },
  { key: "circle", name: "출전 마법진", icon: "rune", open: "1-1",
    text: "골드를 바치면 병사를 불러오는 둥근 무늬예요. 기사단 병사들은 이 마법진을 지나 전장에 나가요." },
  { key: "fog", name: "잿빛 안개", icon: "cloud", open: "1-1",
    text: "닿은 것의 기억을 흐리게 하는 안개예요. 안개 속 해골들은 자신이 누구였는지 잊고 길을 헤매요." },
  { key: "ring", name: "상성 고리", icon: "ring", open: "3-1",
    text: "방패병은 돌격병을, 돌격병은 궁수를, 궁수는 마법사를, 마법사는 방패병을 이겨요. 한 가지 병사만으로는 이길 수 없다는 기사단의 오랜 가르침이에요." },
  { key: "mine", name: "금광", icon: "pick", open: "5-1",
    text: "산길 요새 아래의 금광이에요. 골드를 들여 키우면 문제 하나를 풀 때마다 더 많은 골드가 나와요. 키우는 동안에는 병사를 덜 부르게 되니 때를 잘 골라요." },
  { key: "cannon", name: "성 대포", icon: "ball", open: "5-1",
    text: "본성 꼭대기의 큰 대포예요. 다섯 문제를 연달아 맞히면 깨침돌의 힘이 모여 한 번 쏠 수 있어요." },
  { key: "giant", name: "안개 거인", icon: "skull", open: "6-2",
    text: "안개가 뭉쳐 생긴 커다란 해골이에요. 느리지만 아주 튼튼해서 여러 병사가 함께 막아야 해요." },
  { key: "flame", name: "등대 불씨", icon: "flame", open: "8-1",
    text: "깨침돌을 처음 들여온 사람들이 남긴 불씨예요. 등대에 다시 불이 켜지면 밤바다에서도 길을 잃지 않아요." },
];

export const STAGES = CHAPTERS.flatMap((c) => c.stages.map((s) => ({ ...s, chapter: c })));
export const stageById = (id) => STAGES.find((s) => s.id === id);

// ---------- 진행 저장(이 기기에만, localStorage) ----------
const KEY = "classArena.campaign";
export function loadProgress() {
  try { const p = migrate(JSON.parse(localStorage.getItem(KEY) || "{}")); return { stars: p.stars || {}, hstars: p.hstars || {}, loss: p.loss || {}, seenIntro: !!p.seenIntro, done: !!p.done, hard: !!p.hard, hero: p.hero || "haram", train: p.train || {}, seenCh: p.seenCh || {}, done2: !!p.done2 }; }
  catch { return { stars: {}, hstars: {}, loss: {}, seenIntro: false, done: false, hard: false, hero: "haram", train: {}, seenCh: {} }; }
}
// 11-06: 원정이 6장 12스테이지 → 8장 32스테이지로 늘며 스테이지 번호가 바뀜. 예전 기기의 별·진 횟수를 새 번호로 옮김
const OLD_TO_NEW = { "1-2": "1-4", "2-2": "2-4", "3-2": "3-4", "4-1": "5-1", "4-2": "5-4", "5-1": "7-1", "5-2": "7-4", "6-1": "8-1", "6-2": "8-4" };
const OLD_CH = { 4: 5, 5: 7, 6: 8 };
export function migrate(p) {
  if (!p || p.v >= 2) return p || {};
  const move = (o, map) => { const n = {}; for (const [k, v] of Object.entries(o || {})) n[map[k] || k] = v; return n; };
  return { ...p, stars: move(p.stars, OLD_TO_NEW), hstars: move(p.hstars, OLD_TO_NEW), loss: move(p.loss, OLD_TO_NEW), seenCh: move(p.seenCh, OLD_CH), v: 2 };
}
export function saveProgress(p) { try { localStorage.setItem(KEY, JSON.stringify({ ...p, v: 2 })); } catch { /* 저장 못 해도 게임은 계속 */ } }
// 앞 스테이지를 깼으면 열림(첫 스테이지는 처음부터)
export function isOpen(p, id) {
  const i = STAGES.findIndex((s) => s.id === id);
  // 이미 별을 받은 스테이지는 늘 열림(11-06 원정이 늘어난 뒤 예전 진행이 새 장 뒤에 갇히지 않게)
  return i <= 0 || (p.stars[id] || 0) > 0 || (p.stars[STAGES[i - 1].id] || 0) > 0;
}
export function chapterStars(p, ch) { return ch.stages.reduce((a, s) => a + (p.stars[s.id] || 0), 0); }
export function chapterCleared(p, n) { const ch = CHAPTERS[n - 1]; return !!ch && ch.stages.every((s) => (p.stars[s.id] || 0) > 0); }

// ---------- 영웅·훈련소 ----------
// 별 주머니: 원정 별 + 도전 모드 별 − 훈련에 쓴 별
export function starsTotal(p) { return [p.stars, p.hstars].reduce((a, o) => a + Object.values(o || {}).reduce((x, y) => x + y, 0), 0); }
export function starsSpent(p) { return Object.entries(p.train || {}).reduce((a, [k, lv]) => a + (TRAIN[k] ? TRAIN[k].cost.slice(0, lv).reduce((x, y) => x + y, 0) : 0), 0); }
export function heroOpen(p, k) { const at = HERO_OPEN[k]; return at === null || (at !== undefined && (p.stars[at] || 0) > 0); }
export function heroOf(p) { return heroOpen(p, p.hero) ? p.hero : "haram"; }

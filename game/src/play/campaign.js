// 원정(캠페인): 세계관·인물·장·스테이지 자료와 진행 저장.
// 이야기 글은 학생이 보는 글이라 해요체. 인물 관계는 단순하게(기사단 넷 + 장마다 해골 대장 하나 + 안개 군주).
// 스테이지 규칙은 stage.js(StageRunner)가 읽고, 화면은 main.js가 그림. node로도 읽을 수 있음(tests/campaign_balance.mjs).

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
  haram: { name: "하람 기사단장", img: "knight", note: "기사단을 이끄는 든든한 단장" },
  sol: { name: "궁정 마법사 솔", img: "mage", note: "깨침돌을 연구하는 마법사" },
  saebyeok: { name: "정찰병 새벽", img: "rogue", note: "눈이 밝은 궁수" },
  uru: { name: "돌격대장 우루", img: "barbarian", note: "힘이 세고 웃음이 많은 돌격병" },
  deolkeok: { name: "해골 대장 덜컥", img: "skel_minion", side: 1 },
  sallang: { name: "해골 척후대장 살랑", img: "skel_rogue", side: 1 },
  hoesaek: { name: "해골 주술사 회색깃", img: "skel_mage", side: 1 },
  cheolgol: { name: "해골 장군 철골", img: "skel_warrior", side: 1 },
  moro: { name: "안개 군주 모로", img: "moro", side: 1 },
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
    id: 1, name: "바닷가 초소", art: "ch1", map: "shore", pos: [43, 77],
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
          { at: 90, talk: ["haram", "적 탑을 무너뜨려야 본성에 닿을 수 있어요. 조금만 더!"] },
        ],
        win: [
          { who: "haram", text: "해냈어요! 첫 불빛이 바닷가를 밝혔어요." },
          { who: "saebyeok", text: "그런데 안개 속에 더 큰 해골이 보였어요. 투구에 깃털을 꽂고 있던데요?" },
        ],
        hint: "골드가 모이면 바로바로 병사를 보내요. 돌격병(도끼 해골)은 방패병으로 막아요.",
      },
      {
        id: "1-2", name: "해골 대장 덜컥", map: "shore", boss: "deolkeok",
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
    id: 2, name: "두 갈래 숲길", art: "ch2", map: "twin", pos: [29, 47],
    teach: "길을 골라 보내요 · 돌격병 합류",
    stages: [
      {
        id: "2-1", name: "갈림길", map: "twin", unlock: "새 병사: 돌격병 합류! · 길을 골라 보내요",
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
        id: "2-2", name: "척후대장 살랑", map: "twin", boss: "sallang",
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
    id: 3, name: "강 건너 다리", art: "ch3", map: "bridge", pos: [70, 55],
    teach: "상성 고리 완성 · 마법사 합류",
    stages: [
      {
        id: "3-1", name: "다리를 지켜라", map: "bridge", unlock: "새 병사: 마법사 합류! · 상성 고리 완성",
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
        id: "3-2", name: "주술사 회색깃", map: "bridge", boss: "hoesaek",
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
          { who: "haram", text: "안개의 길은 산 위 요새로 이어져요. 저기는 해골 장군이 지키고 있대요." },
        ],
        hint: "한 종류만 보내면 천적이 와요. 상성 고리를 돌며 섞어 보내요.",
      },
    ],
  },
  {
    id: 4, name: "산길 요새", art: "ch4", map: "pass", pos: [67, 22],
    teach: "금광·성 대포로 작전 세우기",
    stages: [
      {
        id: "4-1", name: "금광을 지켜라", map: "pass", unlock: "새 기능: 금광 강화 · 성 대포",
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
          { who: "uru", text: "요새 앞까지 왔어요! 이제 장군만 남았어요." },
          { who: "saebyeok", text: "장군은 우리가 골드를 모으는 걸 싫어한대요. 모아 두면 바로 쳐들어온대요." },
        ],
        hint: "금광은 적이 없을 때 강화하고, 해골이 몰리면 성 대포를 쏴요.",
      },
      {
        id: "4-2", name: "해골 장군 철골", map: "pass", boss: "cheolgol",
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
          { who: "haram", text: "이제 안개 성채만 남았어요. 안개 군주 모로가 거기 있어요." },
          { who: "sol", text: "모로… 옛 왕립 도서관의 사서 이름과 같아요. 설마…" },
        ],
        hint: "골드를 250 넘게 쌓지 말고 바로바로 써요. 거인은 여러 병사로 함께 막아요.",
      },
    ],
  },
  {
    id: 5, name: "안개 성채", art: "ch5", map: "citadel", pos: [31, 9],
    teach: "모든 것을 걸고 마지막 싸움",
    stages: [
      {
        id: "5-1", name: "안개 속으로", map: "citadel",
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
        id: "5-2", name: "안개 군주 모로", map: "citadel", boss: "moro", final: true,
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
];

export const ENDING = [
  { who: "narr", text: "잿빛 안개가 걷히고, 아라 군도에 다시 아침이 왔어요." },
  { who: "narr", text: "깨침돌은 오늘도 반짝여요. 누군가 문제 하나를 풀어 낼 때마다요." },
  { who: "narr", text: "원정 완료! 이제 자유 대전에서 원정 지도를 모두 쓸 수 있어요. 별 3개와 도전 모드에도 도전해 보세요." },
];

export const STAGES = CHAPTERS.flatMap((c) => c.stages.map((s) => ({ ...s, chapter: c })));
export const stageById = (id) => STAGES.find((s) => s.id === id);

// ---------- 진행 저장(이 기기에만, localStorage) ----------
const KEY = "classArena.campaign";
export function loadProgress() {
  try { const p = JSON.parse(localStorage.getItem(KEY) || "{}"); return { stars: p.stars || {}, hstars: p.hstars || {}, loss: p.loss || {}, seenIntro: !!p.seenIntro, done: !!p.done, hard: !!p.hard }; }
  catch { return { stars: {}, hstars: {}, loss: {}, seenIntro: false, done: false, hard: false }; }
}
export function saveProgress(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch { /* 저장 못 해도 게임은 계속 */ } }
// 앞 스테이지를 깼으면 열림(첫 스테이지는 처음부터)
export function isOpen(p, id) {
  const i = STAGES.findIndex((s) => s.id === id);
  return i <= 0 || (p.stars[STAGES[i - 1].id] || 0) > 0;
}
export function chapterStars(p, ch) { return ch.stages.reduce((a, s) => a + (p.stars[s.id] || 0), 0); }
export function chapterCleared(p, n) { const ch = CHAPTERS[n - 1]; return !!ch && ch.stages.every((s) => (p.stars[s.id] || 0) > 0); }

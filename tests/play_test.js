// 연습 대전 자동 점검: 시작 화면 → 전투(정답·출전) → 결과 화면. 사용: node tests/play_test.js <outdir> [w] [h]
const { chromium } = require('playwright');
(async () => {
  const [out, w = '1024', h = '768'] = process.argv.slice(2);
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: +w, height: +h } });
  const logs = [];
  page.on('console', (m) => { if (['error', 'warning'].includes(m.type())) logs.push(m.type() + ': ' + m.text()); });
  page.on('pageerror', (e) => logs.push('PAGEERROR: ' + e.message));
  page.on('requestfailed', (r) => logs.push('REQFAIL: ' + r.url()));
  await page.goto('http://127.0.0.1:8130/' + (process.env.PAGE || 'play.html'));
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: out + '/p1_start.png' });
  await page.click('.mcard[data-m="cpu"]', { force: true }); await page.waitForTimeout(300); await page.click('#startBtn', { force: true });
  await page.waitForFunction(() => window.__arena.battle && window.__arena.mode === 'play', null, { timeout: 120000 });
  // 전투: 정답을 내고 병사를 뽑으면서 30초(게임 시간) 진행
  const info = await page.evaluate(async () => {
    const A = window.__arena, roles = ['shield', 'archer', 'rusher', 'mage'], lanes = ['top', 'mid', 'bot'];
    let k = 0;
    for (let i = 0; i < 300; i++) {
      if (i % 3 === 0) A.answerRight();
      if (i % 9 === 0) { A.deploy(roles[k % 4], lanes[k % 3]); k++; }
      A.battle.update(0.1); A.view.update(0.1, A.battle);
      await new Promise((r) => setTimeout(r, 5));
    }
    const b = A.battle;
    return { t: b.time.toFixed(1), units: b.units.length, gold: b.sides[-1].gold, hp: [b.sides[-1].base.hp, b.sides[1].base.hp], towers: b.structs.filter((t) => t.kind === 'tower').map((t) => t.side + t.lane + ':' + t.hp).join(' ') };
  });
  console.log('BATTLE', JSON.stringify(info));
  await page.waitForTimeout(3000);
  await page.screenshot({ path: out + '/p2_battle.png' });
  // 틀린 답 한 번 → 잠금 화면
  await page.evaluate(() => window.__arena.answerWrong());
  await page.waitForTimeout(400);
  await page.screenshot({ path: out + '/p3_wrong.png' });
  // 끝내기: 상대 성 체력을 거의 0으로
  await page.evaluate(() => { const b = window.__arena.battle; b.damageStruct(b.sides[1].base, 99999); });
  await page.waitForFunction(() => window.__arena.mode === 'result', null, { timeout: 120000 });
  await page.waitForTimeout(800);
  await page.screenshot({ path: out + '/p4_result.png' });
  console.log(logs.slice(0, 20).join('\n'));
  await browser.close();
})();

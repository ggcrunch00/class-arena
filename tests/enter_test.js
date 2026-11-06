// 회귀 점검: 병사 카드를 누른 뒤 키보드로 답을 쓰고 Enter를 눌러도 병사가 또 나오지 않아야 함(크롬북 후기 11-04)
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 1366, height: 650 } });
  await page.goto('http://127.0.0.1:8130/play.html#diag');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.evaluate(() => window.__arena.start('gugu', 'recruit', 'input', 'cpu'));
  await page.waitForTimeout(800);
  await page.evaluate(() => { window.__arena.battle.sides[-1].gold = 500; });
  await page.click('.seat .card >> nth=0');            // 방패병 한 번 출전
  await page.evaluate(() => { const S = window.__arena.battle.sides[-1]; for (const k in S.cooldown) S.cooldown[k] = 0; });
  const before = await page.evaluate(() => window.__arena.battle.sides[-1].stats.deployed);
  for (let i = 0; i < 4; i++) {                       // 키보드로 4문제 풀기
    const a = await page.evaluate(() => String(window.__arena.seats[0].q.answer));
    await page.keyboard.type(a); await page.keyboard.press('Enter');
    await page.evaluate(() => { const S = window.__arena.battle.sides[-1]; for (const k in S.cooldown) S.cooldown[k] = 0; });
    await page.waitForTimeout(150);
  }
  const after = await page.evaluate(() => ({ dep: window.__arena.battle.sides[-1].stats.deployed, right: window.__arena.battle.sides[-1].stats.right }));
  console.log('출전 수', before, '→', after.dep, '| 맞힌 문제', after.right, after.dep === before && after.right === 4 ? '통과' : '실패');
  await browser.close();
  process.exit(after.dep === before && after.right === 4 ? 0 : 1);
})();

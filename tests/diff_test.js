// 난이도 A안 점검: 학생이 직접 내릴 수 없고, 올리기는 됨. 2번 틀리면 자동으로 내려감. 골드 ×1·×2·×4
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 1366, height: 650 } });
  await page.goto('http://127.0.0.1:8130/play.html#wide');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.evaluate(() => window.__arena.start('gugu', 'recruit', 'input', 'cpu'));
  await page.waitForTimeout(800);
  const diff = () => page.evaluate(() => window.__arena.seats[0].diff);
  const gold = async () => { const g0 = await page.evaluate(() => window.__arena.battle.sides[-1].stats.goldEarned); await page.evaluate(() => window.__arena.answerRight()); return (await page.evaluate(() => window.__arena.battle.sides[-1].stats.goldEarned)) - g0; };
  const r = {};
  r.easyGold = await gold();
  await page.click('.seg button[data-d="2"]'); r.afterUp = await diff();
  r.hardGold = await gold();
  await page.click('.seg button[data-d="0"]'); r.afterDownClick = await diff();
  for (let i = 0; i < 2; i++) { await page.evaluate(() => { window.__arena.answerWrong(); const s = window.__arena.seats[0]; s.lock.t = 0.001; }); await page.waitForFunction(() => !window.__arena.seats[0].lock); }
  r.afterTwoWrong = await diff();
  const ok = r.easyGold === 12 && r.afterUp === 2 && r.hardGold === 48 && r.afterDownClick === 2 && r.afterTwoWrong === 1;
  console.log(JSON.stringify(r), ok ? '통과' : '실패');
  await browser.close(); process.exit(ok ? 0 : 1);
})();

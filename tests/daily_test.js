// 오늘의 도전 점검: 전투 준비 화면 → 시작 → 첫 문제 두 번 비교
const { chromium } = require('playwright');
(async () => {
  const out = process.argv[2];
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const qs = [];
  for (let k = 0; k < 2; k++) {
    const page = await browser.newPage({ viewport: { width: 1024, height: 768 } });
    page.on('pageerror', (e) => console.log('PAGEERROR: ' + e.message));
    await page.goto('http://127.0.0.1:8130/play.html#wide');
    await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
    await page.click('#prepBtn'); await page.click('#modes [data-m="daily"]');
    if (k === 0) await page.screenshot({ path: out + '/daily_prep.png' });
    await page.click('#startBtn');
    await page.waitForTimeout(900);
    if (k === 0) await page.screenshot({ path: out + '/daily_play.png' });
    qs.push(await page.evaluate(() => window.__arena.q.text));
    await page.close();
  }
  console.log('first questions', qs, 'same:', qs[0] === qs[1]);
  await browser.close();
})();

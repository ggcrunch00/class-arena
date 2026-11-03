// 처음 안내 말풍선 점검
const { chromium } = require('playwright');
(async () => {
  const out = process.argv[2];
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 1024, height: 768 } });
  page.on('pageerror', (e) => console.log('PAGEERROR: ' + e.message));
  await page.goto('http://127.0.0.1:8130/play.html#wide');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.evaluate(() => window.__arena.start('gugu', 'recruit', 'input', 'cpu'));
  await page.waitForTimeout(800);
  await page.screenshot({ path: out + '/t1.png', clip: { x: 0, y: 440, width: 1024, height: 328 } });
  await page.evaluate(() => { window.__arena.answerRight(); });
  await page.waitForTimeout(800);
  await page.screenshot({ path: out + '/t2.png', clip: { x: 0, y: 440, width: 1024, height: 328 } });
  await page.evaluate(() => window.__arena.deploy('shield', 'mid'));
  await page.waitForTimeout(500);
  console.log('tips visible after deploy:', await page.evaluate(() => [...document.querySelectorAll('.tip')].filter((t) => !t.hidden).length),
    'saved:', await page.evaluate(() => localStorage.getItem('classArena.tips')));
  await browser.close();
})();

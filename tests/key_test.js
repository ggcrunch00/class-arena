// 키보드로 보기 고르기 점검
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 1024, height: 768 } });
  page.on('pageerror', (e) => console.log('PAGEERROR: ' + e.message));
  await page.goto('http://127.0.0.1:8130/play.html#diag');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.evaluate(() => window.__arena.start('gugu', 'recruit', 'pick'));
  await page.waitForTimeout(500);
  const before = await page.evaluate(() => ({ q: window.__arena.q.text, type: window.__arena.q.type, st: { ...window.__arena.battle.sides[-1].stats }, mode: window.__arena.mode, active: document.activeElement.tagName }));
  await page.mouse.click(500, 300);
  await page.keyboard.press('1');
  await page.waitForTimeout(300);
  const after = await page.evaluate(() => ({ st: { ...window.__arena.battle.sides[-1].stats }, lock: !document.querySelector('#lock').hidden }));
  console.log(JSON.stringify(before), JSON.stringify(after));
  await browser.close();
})();

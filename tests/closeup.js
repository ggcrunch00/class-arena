// 병사 8종이 싸우는 모습을 크게 찍기(무기·동작 확인). 사용: node tests/closeup.js <out.png>
const { chromium } = require('playwright');
(async () => {
  const out = process.argv[2];
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 1024, height: 768 }, deviceScaleFactor: 1 });
  page.on('pageerror', (e) => console.log('PAGEERROR: ' + e.message));
  await page.goto('http://127.0.0.1:8130/play.html#diag');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.evaluate(() => window.__arena.start('gugu', 'recruit', 'input', 'duo'));
  await page.evaluate(async () => {
    const A = window.__arena, b = A.battle, roles = ['shield', 'rusher', 'archer', 'mage'];
    b.sides[-1].gold = b.sides[1].gold = 5000;
    for (let k = 0; k < 4; k++) { A.deploy(roles[k], 'mid', 0); A.deploy(roles[k], 'mid', 1); b.sides[-1].cooldown[roles[k]] = 0; b.sides[1].cooldown[roles[k]] = 0; }
    for (let i = 0; i < 70; i++) { b.update(0.1); A.view.update(0.1, b); await new Promise((r) => setTimeout(r, 4)); }
  });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: out, clip: { x: 260, y: 150, width: 520, height: 230 }, timeout: 120000 });
  await browser.close();
})();

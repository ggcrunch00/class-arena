// 한 판을 끝까지 돌려 성이 무너지는 장면을 찍는다. 사용: node tests/round.js <page> <out.png>
const { chromium } = require('playwright');
(async () => {
  const [pg, out] = process.argv.slice(2);
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  const logs = [];
  page.on('pageerror', (e) => logs.push('PAGEERROR: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text()); });
  await page.goto('http://127.0.0.1:8130/' + pg);
  await page.waitForFunction(() => window.__lane, null, { timeout: 90000 });
  const r = await page.evaluate(() => {
    const s = window.__lane.sim; let t = 0;
    while (s.state === 'play' && t < 400) {
      s.update(1 / 30); t += 1 / 30;
      s.events = s.events.filter((e) => e.type === 'launch' || e.type === 'answer' || e.type === 'castleDown' || e.type === 'castleHit');
    }
    return { t: t.toFixed(1), winner: s.winner, hp: [s.castles[-1].hp, s.castles[1].hp], score: s.score };
  });
  console.log(JSON.stringify(r));
  await page.waitForTimeout(5000);
  console.log(logs.join('\n'));
  await page.screenshot({ path: out, timeout: 120000 });
  await browser.close();
})();

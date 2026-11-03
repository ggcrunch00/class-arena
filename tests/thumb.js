// 첫 화면용 미리보기 그림: 전투를 20초 앞으로 돌린 뒤 찍는다.
// 사용: node tests/thumb.js <page> <out.png> [w] [h] [ffSec]
const { chromium } = require('playwright');
(async () => {
  const [pg, out, w = '1280', h = '720', ff = '22'] = process.argv.slice(2);
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1 });
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.type() + ': ' + m.text()); });
  page.on('pageerror', (e) => logs.push('PAGEERROR: ' + e.message));
  page.on('requestfailed', (r) => logs.push('REQFAIL: ' + r.url()));
  await page.goto('http://127.0.0.1:8130/' + pg);
  await page.waitForFunction(() => window.__lane, null, { timeout: 90000 });
  await page.evaluate((ff) => {
    const s = window.__lane.sim;
    for (let i = 0; i < ff * 30; i++) {
      s.update(1 / 30);
      if (s.state !== 'play') { break; }
      s.events = s.events.filter((e) => e.type === 'launch' || e.type === 'answer');
    }
    for (const side of [-1, 1]) window.HUD.castle(side, s.castles[side].hp / s.castles[side].max);
  }, +ff);
  await page.waitForTimeout(6000);
  const info = await page.evaluate(() => ({ units: window.__lane.sim.units.length, hp: [window.__lane.sim.castles[-1].hp, window.__lane.sim.castles[1].hp], fps: document.querySelector('#fps').textContent }));
  console.log(JSON.stringify(info));
  console.log(logs.slice(0, 15).join('\n'));
  await page.screenshot({ path: out, timeout: 120000 });
  await browser.close();
})();

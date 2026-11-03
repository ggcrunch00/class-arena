// 사용: node tests/shot.js <page> <out.png> <waitSec> [w] [h]
const { chromium } = require('playwright');
(async () => {
  const [page_, out, wait = '12', w = '1280', h = '720'] = process.argv.slice(2);
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1 });
  const logs = [];
  page.on('console', (m) => logs.push(m.type() + ': ' + m.text()));
  page.on('pageerror', (e) => logs.push('PAGEERROR: ' + e.message));
  page.on('requestfailed', (r) => logs.push('REQFAIL: ' + r.url() + ' ' + r.failure().errorText));
  await page.goto('http://127.0.0.1:8130/' + page_);
  await page.waitForTimeout(+wait * 1000);
  const info = await page.evaluate(() => {
    const L = window.__lane; if (!L) return 'no __lane';
    return { units: L.sim.units.length, castles: [L.sim.castles[-1].hp, L.sim.castles[1].hp], t: L.sim.time.toFixed(1), fps: document.querySelector('#fps').textContent };
  });
  console.log(JSON.stringify(info));
  console.log(logs.filter(l => !l.includes('GPU stall') && !l.includes('WebGL')).slice(0, 20).join('\n'));
  await page.screenshot({ path: out, timeout: 120000 });
  await browser.close();
})();

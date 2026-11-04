// 낱말 문제(사자성어·맞춤법) 화면 찍기 + 넘침 검사.
// 사용: node tests/word_shot.js <outdir> <w> <h> <cpu|duo> <topic> <format> [n=4]
// 문제 꼴(글자 타일·객관식·긴 보기·OX)마다 한 장씩, 칸을 넘친 곳이 있으면 px로 알려 줌.
const { chromium } = require('playwright');
(async () => {
  const [out, w, h, mode = 'cpu', topic = 'saja', fmt = 'mix', n = '4'] = process.argv.slice(2);
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: +w, height: +h } });
  page.on('pageerror', (e) => console.log('PAGEERROR: ' + e.message));
  await page.goto('http://127.0.0.1:8130/play.html#wide');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.evaluate(([t, f, m]) => { localStorage.setItem('classArena.topic2', t); window.__arena.start(t, 'recruit', f, m); }, [topic, fmt, mode]);
  await page.waitForTimeout(1200);
  const seen = new Set();
  let shots = 0, bad = 0;
  for (let i = 0; i < 60 && shots < +n; i++) {
    const info = await page.evaluate(() => {
      const s = window.__arena.seats[0], q = s.q;
      const kind = q.type + (q.long ? '-long' : '');
      const el = s.el, over = [];
      const chk = (sel) => el.querySelectorAll(sel).forEach((e) => {
        const dx = e.scrollWidth - e.clientWidth, dy = e.scrollHeight - e.clientHeight;
        if (dx > 1 || dy > 2) over.push(`${sel} ${dx}x${dy} "${(e.textContent || '').slice(0, 20)}"`);
      });
      chk('.quiz'); chk('.qtext'); chk('.choices button'); chk('.tiles button');
      const qt = el.querySelector('.qt'); // 두 줄 넘게 잘렸는지
      if (qt.scrollHeight - qt.clientHeight > 2) over.push(`.qt 잘림 "${qt.textContent}"`);
      return { kind, text: q.text, over };
    });
    if (!seen.has(info.kind)) {
      seen.add(info.kind);
      await page.screenshot({ path: `${out}/${mode}_${topic}_${fmt}_${w}_${info.kind}.png` });
      shots++;
      console.log(info.kind, '|', info.text, info.over.length ? ' 넘침: ' + info.over.join(' / ') : ' OK');
    }
    if (info.over.length) { bad++; console.log('  넘침:', info.kind, info.text, info.over.join(' / ')); }
    await page.evaluate(() => window.__arena.seats.forEach((s) => s.next()));
    await page.waitForTimeout(80);
  }
  console.log('넘친 문제 수', bad);
  await browser.close();
})();

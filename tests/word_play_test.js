// 낱말 문제를 실제 화면 단추로 풀어 보기: 글자 타일·객관식·OX를 누르고, 일부는 일부러 틀리고,
// 판을 끝낸 뒤 결과 화면의 "틀린 문제 다시 풀기"까지 눌러 본다.
// 사용: node tests/word_play_test.js <saja|spell> <input|mix|pick> [cpu|duo]
const { chromium } = require('playwright');
(async () => {
  const [topic = 'saja', fmt = 'mix', mode = 'cpu'] = process.argv.slice(2);
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('http://127.0.0.1:8130/play.html#diag');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.evaluate(([t, f, m]) => window.__arena.start(t, 'recruit', f, m), [topic, fmt, mode]);
  await page.waitForTimeout(800);
  const seat = '.seat:first-child';
  const kinds = {};
  let right = 0, wrong = 0;
  for (let n = 0; n < 24; n++) {
    // 점검 환경은 게임 시간이 아주 느려서, 틀린 뒤 쉬는 시간은 건너뜀
    await page.evaluate(() => { const s = window.__arena.seats[0]; if (s.lock) s.lock.t = 0.001; });
    await page.waitForFunction(() => !window.__arena.seats[0].lock, null, { timeout: 30000 });
    const q = await page.evaluate(() => { const q = window.__arena.seats[0].q; return { type: q.type, answer: q.answer, tiles: q.tiles, options: q.options }; });
    kinds[q.type] = (kinds[q.type] || 0) + 1;
    const beWrong = n % 5 === 4;
    if (q.type === 'tiles') {
      const want = [...q.answer.replace(/\s/g, '')], used = new Set();
      if (beWrong) want.reverse(); // 거꾸로 = 틀림(같은 글자 둘이면 맞을 수도 있음)
      for (const c of want) {
        const i = q.tiles.findIndex((t, j) => t === c && !used.has(j)); used.add(i);
        await page.click(`${seat} .tiles .tile[data-i="${i}"]`);
      }
    } else {
      const opts = q.type === 'ox' ? ['O', 'X'] : q.options;
      const v = beWrong ? opts.find((o) => o !== q.answer) : q.answer;
      await page.click(`${seat} .choices button[data-v="${v.replace(/"/g, '\\"')}"]`);
    }
    beWrong ? wrong++ : right++;
    if (n === 3) await page.evaluate(() => window.__arena.deploy('shield', 'top'));
  }
  const st = await page.evaluate(() => { const S = window.__arena.battle.sides[-1]; return { ...S.stats, gold: S.gold }; });
  console.log('문제 꼴', JSON.stringify(kinds), '| 기록', JSON.stringify(st));
  // 판 끝내고 결과 화면 확인
  await page.evaluate(() => window.__arena.battle.finish(-1, 'base'));
  await page.waitForSelector('#resultScreen:not([hidden])', { timeout: 240000 });
  const rev = await page.$$eval('#resBody .rev', (rows) => rows.map((r) => r.textContent.slice(0, 40)));
  console.log('다시 풀기 줄', rev.length, rev.slice(0, 3));
  // 첫 줄 바른 답 누르기
  const fixed = await page.evaluate(() => {
    const s = window.__arena.seats[0], x = s.wrongs[0]; if (!x) return 'none';
    const row = document.querySelector('#resBody .rev');
    if (x.q.type === 'tiles') { // 글자 타일 문제는 복습에서도 타일을 차례로 눌러 조립(11-07)
      const btns = [...row.querySelectorAll('.rtiles button')], used = new Set();
      for (const ch of [...String(x.q.answer).replace(/\s/g, '')]) { const i = btns.findIndex((b, j) => !used.has(j) && b.textContent === ch); if (i < 0) return 'no-tile'; used.add(i); btns[i].click(); }
      return row.classList.contains('done') ? 'done' : 'not-done';
    }
    const btn = [...row.querySelectorAll('button')].find((b) => b.textContent === String(x.q.answer));
    if (!btn) return 'no-button'; btn.click(); return row.classList.contains('done') ? 'done' : 'not-done';
  });
  console.log('다시 풀기 바른 답 →', fixed, '| 기록 글:', (await page.textContent('#shareText')).split('\n')[1]);
  await page.screenshot({ path: process.env.SHOT || '/tmp/word_result.png' });
  console.log(errors.length ? 'PAGE ERRORS: ' + errors.join(' | ') : '페이지 오류 없음');
  await browser.close();
  process.exit(errors.length || fixed !== 'done' ? 1 : 0);
})();

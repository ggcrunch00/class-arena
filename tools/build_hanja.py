# 글감 시트의 한자 줄 → game/src/play/bank/hanja.json (대표 훈음: 첫 훈 + 첫 음). 사용: python3 -I tools/build_hanja.py 글감.json game/src/play/bank/hanja.json
import json, re, sys
R = json.load(open(sys.argv[1]))
out, seen = [], set()
for r in R:
    if r['종류'] != '한자': continue
    c = (r['핵심어'] or '').strip()
    m = re.match(r'^(\S+) / (.+)$', (r['음·급수'] or '').strip())
    if len(c) != 1 or not m or c in seen: continue
    hun = re.split(r'\s*/\s*', (r['설명'] or '').strip())[0].strip()
    eum = m.group(1).split('·')[0]
    lv = m.group(2).split('·')[0].strip()
    if not hun or not eum or len(hun) > 7 or not re.fullmatch(r'[가-힣 ]+', hun) or not re.fullmatch(r'[가-힣]', eum): print('skip', c, hun, eum, file=sys.stderr); continue
    seen.add(c)
    x = [t.strip() for t in (r['헷갈리는말'] or '').split(',') if len(t.strip()) == 1]
    out.append({'c': c, 'h': f'{hun} {eum}', 'lv': lv, 'x': x})
print(len(out), file=sys.stderr)
from collections import Counter; print(Counter(i['lv'] for i in out), file=sys.stderr)
# 같은 훈음 묶음(서로 오답 보기로 쓰지 않음)
cnt = Counter(i['h'] for i in out)
for i in out:
    i['x'] = [t for t in i['x'] if t in seen and t != i['c']]
    if cnt[i['h']] > 1: i['same'] = i['h']
json.dump({'name': '한자', 'hint': '한자 급수 8~4급 훈음', 'kind': '단계형',
  'note': 'c 한자, h 대표 훈음(첫 뜻 + 첫 소리), lv 급수, x 모양이 헷갈리는 한자, same 훈음이 같은 묶음. 한자와 훈음은 사실 자료(교사 수집 학습지·암기표에서 모음), 문제 꼴은 게임이 만듦.',
  'items': out}, open(sys.argv[2], 'w'), ensure_ascii=False, indent=0)

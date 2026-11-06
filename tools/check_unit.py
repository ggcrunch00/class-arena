# 사회 빈칸 은행 한 파일 검사: python3 check_unit.py 파일.json
import json, re, sys
B = json.load(open(sys.argv[1])); E = []; W = []
for k in ["name", "hint", "kind", "grades", "units", "note", "items"]:
    if k not in B: E.append(f"머리 {k} 없음")
if B.get("kind") != "교과형": E.append("kind는 교과형")
g0, g1 = B["grades"]
JOSA = re.compile(r"＿\s?(은|는|이|가|을|를|과|와|으로|로|이에요|예요|이다|이며|이고|이나|나|아|야|이랑|랑)(?=[\s.,!?]|$)")
seen = set(); cnt = {0: 0, 1: 0, 2: 0}
for i, it in enumerate(B["items"], 1):
    at = f"{i}번({it.get('r')})"
    for k in ["r", "x", "s", "why", "g", "d"]:
        if k not in it: E.append(f"{at} {k} 없음")
    s, r, x = it["s"], it["r"], it["x"]
    if s.count("＿") != 1: E.append(f"{at} 빈칸 ＿ 이 1개가 아님")
    if JOSA.search(s): E.append(f"{at} 빈칸 바로 뒤에 받침 따라 바뀌는 조사: {JOSA.search(s).group(0)}")
    full = s.replace("＿", r)
    if not re.search(r"요[.?!]?$", full) or re.search(r"(습니다|합니다|입니다|[^요]다)[.!?]?$", full): E.append(f"{at} 문장이 해요체로 안 끝남")
    if len(s) + 1 > 46: E.append(f"{at} 문장 {len(s)+1}글자(46 넘음)")
    if not isinstance(x, list) or not 1 <= len(x) <= 3: E.append(f"{at} x는 1~3개")
    if r in x or any(a.replace(" ", "") == r.replace(" ", "") for a in x): E.append(f"{at} x에 정답과 같은 말")
    if len(set(x)) != len(x): E.append(f"{at} x 겹침")
    if not re.search(r"요\.$", it["why"]): E.append(f"{at} why는 '요.'로 끝나는 해요체 한 문장")
    for w in [r, *x]:
        if len(w) > 6: W.append(f"{at} 보기 「{w}」 {len(w)}글자(6 넘으면 글씨가 작아짐)")
    if it["d"] not in (0, 1, 2): E.append(f"{at} d는 0~2")
    else: cnt[it["d"]] += 1
    if not g0 <= it["g"] <= g1: E.append(f"{at} g 범위 밖")
    if r + s in seen: E.append(f"{at} 같은 문제 두 번")
    seen.add(r + s)
for d, c in cnt.items():
    if c < 13: E.append(f"난이도 {d} 문제 {c}개(13개 넘게)")
print(f"문항 {len(B['items'])}개, 난이도별 {cnt}")
print("오류", len(E)); [print(" ✖", e) for e in E]
print("알림", len(W)); [print(" △", w) for w in W[:20]]

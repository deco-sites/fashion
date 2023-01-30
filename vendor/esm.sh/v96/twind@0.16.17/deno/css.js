/* esm.sh - esbuild bundle(twind@0.16.17/css) deno production */
import {
  apply as A,
  directive as y,
  hash as S,
} from "/v96/twind@0.16.17/deno/twind.js";
export * from "/v96/twind@0.16.17/deno/twind.js";
var l = (r, e) => !!~r.indexOf(e),
  h = (r, e = "-") => r.join(e),
  $ = (r) => r.replace(/[A-Z]/g, "-$&").toLowerCase(),
  n = (r, e) => {
    for (; typeof r == "function";) r = r(e);
    return r;
  },
  w = (r, e) => !l("@:&", r[0]) && (l("rg", (typeof e)[5]) || Array.isArray(e)),
  d = (r, e, a) =>
    e
      ? Object.keys(e).reduce((i, s) => {
        let f = n(e[s], a);
        return w(s, f)
          ? i[$(s)] = f
          : i[s] = s[0] == "@" && l("figa", s[1])
            ? (i[s] || []).concat(f)
            : d(i[s] || {}, f, a),
          i;
      }, r)
      : r,
  M = typeof CSS < "u" && CSS.escape ||
    ((r) =>
      r.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(
        /^\d/,
        "\\3$& ",
      )),
  b = (r) => (Array.isArray(r) || (r = [r]),
    "@media " +
    h(
      r.map(
        (e) => (typeof e == "string" && (e = { min: e }),
          e.raw || h(
            Object.keys(e).map((a) => `(${a}-width:${e[a]})`),
            " and ",
          )),
      ),
      ",",
    )),
  j = (r, e) => {
    let a = (i, s) => Array.isArray(s) ? s.reduce(a, i) : d(i, n(s, e), e);
    return r.reduce(a, {});
  },
  g = /\s*(?:([\w-%@]+)\s*:?\s*([^{;]+?)\s*(?:;|$|})|([^;}{]*?)\s*{)|(})/gi,
  C = /\/\*[\s\S]*?\*\/|\s+|\n/gm,
  u = (r, e) => r.reduceRight((a, i) => ({ [i]: a }), e),
  o = (r, e, a) => {
    a && r.push(u(e, a));
  },
  O = (r, e, a) => {
    let i = r[0], s = [];
    for (let f = 0; f < e.length;) {
      let t = n(e[f], a);
      t && typeof t == "object"
        ? (s.push(i, t), i = r[++f])
        : i += (t || "") + r[++f];
    }
    return s.push(i), s;
  },
  F = (r, e) => {
    let a = [], i = [], s, f;
    for (let t = 0; t < r.length; t++) {
      let c = r[t];
      if (typeof c == "string") {
        for (; f = g.exec(c.replace(C, " "));) {
          if (!!f[0]) {
            if (f[4] && (s = o(i, a, s), a.pop()), f[3]) {
              s = o(i, a, s), a.push(f[3]);
            } else if (!f[4]) {
              s || (s = {});
              let p = f[2] && /\S/.test(f[2]) ? f[2] : r[++t];
              p && (f[1] == "@apply" ? d(s, n(A(p), e), e) : s[f[1]] = p);
            }
          }
        }
      } else s = o(i, a, s), i.push(u(a, c));
    }
    return o(i, a, s), i;
  },
  v = (r, e) =>
    j(
      Array.isArray(r[0]) && Array.isArray(r[0].raw)
        ? F(O(r[0], r.slice(1), e), e)
        : r,
      e,
    ),
  N = (...r) => y(v, r),
  R = (r, e) => {
    let a = v(r, e), i = S(JSON.stringify(a));
    return e.tw(() => ({ [`@keyframes ${i}`]: a })), i;
  },
  m = (...r) => y(R, r),
  B = (r, e) =>
    e === void 0 ? (...a) => B(r, m(...a)) : N({
      ...r && typeof r == "object" ? r : { animation: r },
      animationName: typeof e == "function" ? e : m(e),
    }),
  J = ({ size: r, rules: e }, a) => {
    let i = b(a.theme("screens", r));
    return e === void 0
      ? i
      : { [i]: typeof e == "function" ? n(e, a) : v([e], a) };
  },
  P = (r, e) => y(J, { size: r, rules: e });
export { B as animation, m as keyframes, N as css, P as screen };

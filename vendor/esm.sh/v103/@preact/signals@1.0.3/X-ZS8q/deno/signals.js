/* esm.sh - esbuild bundle(@preact/signals@1.0.3) deno production */
import { Component as W, createElement as C, options as m } from "preact";
import { useMemo as p, useRef as E } from "preact/hooks";
import { computed as y, Signal as g, signal as b } from "@preact/signals-core";
import {
  batch as D,
  computed as F,
  effect as G,
  Signal as B,
  signal as H,
} from "@preact/signals-core";
var c = new WeakSet(), v = new WeakSet(), h = new WeakSet();
function u(e, t) {
  m[e] = t.bind(null, m[e] || (() => {}));
}
var f, k, d, s = new WeakMap();
function _(e) {
  d && d(!0, !0), k = e, d = e && e._();
}
function S(e) {
  let t = b(void 0);
  return t._c = !0, t._u = e, t;
}
function x(e) {
  let t = s.get(e);
  if (t) t.__.length = 0;
  else {
    let r = [];
    t = S(() => {
      let n = e.__e;
      for (let o = 0; o < r.length; o++) {
        let { t: i, i: l } = r[o], a = l._v;
        if (!n) return;
        i in n ? n[i] = a : a ? n.setAttribute(i, a) : n.removeAttribute(i);
      }
    }),
      t.__ = r,
      s.set(e, t);
  }
  return t;
}
function w(e, t, r) {
  typeof e != "object" || e == null ||
    (Array.isArray(e)
      ? e.forEach(w)
      : e instanceof g && (r[t] = C(A, { data: e })));
}
function A({ data: e }) {
  let t = M(e);
  t.value = e;
  let r = p(() => {
    let n = this.__v;
    for (; n = n.__;) {
      if (n.__c) {
        h.add(n.__c);
        break;
      }
    }
    return k._u = () => {
      this.base.data = r._v;
    },
      y(() => {
        let o = t.value.value;
        return o === 0 ? 0 : o === !0 ? "" : o || "";
      });
  }, []);
  return r.value;
}
function M(e) {
  return p(() => b(e), []);
}
function R(e) {
  let t = E(e);
  return t.current = e, h.add(f), p(() => y(() => t.current()), []);
}
A.displayName = "_st",
  u("__b", (e, t) => {
    if (typeof t.type == "string") {
      let r, n = t.props;
      for (let o in n) {
        let i = n[o];
        if (o === "children") w(i, "children", n);
        else if (i instanceof g) {
          r || (r = x(t)), r.__.push({ t: o, i });
          let l = r._u;
          if (i._u) {
            let a = i._u;
            i._u = () => {
              l(), a();
            };
          } else i._u = l;
          n[o] = i.peek();
        }
      }
      _(r);
    }
    e(t);
  }),
  u("__r", (e, t) => {
    let r, n = t.__c;
    n && (c.delete(n),
      r = s.get(n),
      r === void 0 && (r = S(() => {
        c.add(n), n.setState({});
      }),
        s.set(n, r))),
      f = n,
      _(r),
      e(t);
  }),
  u("__e", (e, t, r, n) => {
    _(), f = void 0, e(t, r, n);
  }),
  u("diffed", (e, t) => {
    _(), f = void 0, e(t);
  }),
  u("unmount", (e, t) => {
    let r = t.__c || t, n = s.get(r);
    if (n) {
      s.delete(r);
      let o = n._d;
      o && (o.forEach((i) => i._s.delete(n)), o.clear());
    }
    e(t);
  }),
  u("__h", (e, t, r, n) => {
    n < 3 && v.add(t), e(t, r, n);
  }),
  W.prototype.shouldComponentUpdate = function (e, t) {
    var r;
    let n = s.get(this);
    if (
      !(n && ((r = n._d) == null ? void 0 : r.size) !== 0 || h.has(this)) ||
      c.has(this) || v.has(this)
    ) return !0;
    for (let o in t) return !0;
    for (let o in e) if (o !== "__source" && e[o] !== this.props[o]) return !0;
    for (let o in this.props) if (!(o in e)) return !0;
    return !1;
  };
export {
  B as Signal,
  D as batch,
  F as computed,
  G as effect,
  H as signal,
  M as useSignal,
  R as useComputed,
};

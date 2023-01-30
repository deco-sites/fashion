/* esm.sh - esbuild bundle(@preact/signals-core@1.0.1) deno production */
var a,
  s,
  r = null,
  _ = new Set(),
  o = 0,
  u = !1,
  h = new Set(),
  c = class {
    constructor(t) {
      this._s = new Set(),
        this._d = new Set(),
        this._p = 0,
        this._v = void 0,
        this._r = !1,
        this._q = !1,
        this._c = !1,
        this.t = !1,
        this._v = t;
    }
    toString() {
      return "" + this.value;
    }
    peek() {
      return s._c && this._d.size === 0 && l(this), this._v;
    }
    get value() {
      return s._c && this._d.size === 0 && (l(this), s === a) ||
        (this._s.add(s),
          s._d.add(this),
          h.delete(this),
          (o > 0 && this._p > 0 || u && this._d.size === 0) && y(this)),
        this._v;
    }
    set value(t) {
      if (this._r) throw new Error("Computed signals are readonly");
      if (this._v !== t) {
        this._v = t;
        let i = _.size === 0;
        if (
          _.add(this),
            this._p === 0 && p(this),
            i && o === 0 && (f(_), _.clear(), r)
        ) {
          let n = r;
          throw r = null, n;
        }
      }
    }
    _() {
      let t = s, i = h;
      return s = this, h = this._d, this._d = new Set(), (n, S) => {
        n && this._s.forEach(v),
          h.forEach(S ? (d) => w(this, d) : (d) => g(this, d)),
          h.clear(),
          h = i,
          s = t;
      };
    }
    _u() {}
  };
function p(e) {
  e._p++ == 0 && e._s.forEach(p);
}
function v(e) {
  e._q || --e._p != 0 || e._s.forEach(v);
}
function f(e) {
  e.forEach((t) => {
    if (t._p > 0 && (t._q = !0, --t._p == 0)) {
      if (t.t) throw new Error("Cycle detected");
      t._q = !1, t.t = !0, t._u(), t.t = !1, f(t._s);
    }
  });
}
function g(e, t) {
  e._d.add(t), t._s.add(e);
}
function w(e, t) {
  e._d.delete(t),
    t._s.delete(e),
    t._s.size === 0 && t._d.forEach((i) => w(t, i));
}
var E = [];
function y(e) {
  if (_.delete(e), e._p = 0, e._u(), r) {
    let t = r;
    throw r = null, t;
  }
  e._s.forEach((t) => {
    t._p > 0 && (t._p > 1 && t._p--, E.push(t));
  });
}
function l(e) {
  u = !0;
  try {
    y(e);
  } finally {
    u = !1;
  }
}
function m(e) {
  return new c(e);
}
function z(e) {
  let t = new c(void 0);
  return t._r = !0,
    t._u = function () {
      let i = t._();
      try {
        let n = e();
        i(t._v === n, !0), t._v = n;
      } catch (n) {
        r || (r = n), i(!0, !1);
      }
    },
    t;
}
function C(e) {
  let t = z(() => q(e));
  return l(t), () => t._()(!0, !0);
}
function q(e) {
  o++;
  try {
    return e();
  } finally {
    let t;
    for (; (t = E.pop()) !== void 0;) _.add(t);
    --o == 0 && (f(_), _.clear());
  }
}
a = s = new c(void 0), a._c = !0;
export { C as effect, c as Signal, m as signal, q as batch, z as computed };

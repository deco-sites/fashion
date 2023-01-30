/* esm.sh - esbuild bundle(es5-ext@0.10.62/global) deno production */
var u = Object.create;
var n = Object.defineProperty;
var b = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf, d = Object.prototype.hasOwnProperty;
var p = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var g = (e, t, r, l) => {
  if (t && typeof t == "object" || typeof t == "function") {
    for (let o of s(t)) {
      !d.call(e, o) && o !== r && n(e, o, {
        get: () => t[o],
        enumerable: !(l = b(t, o)) || l.enumerable,
      });
    }
  }
  return e;
};
var h = (
  e,
  t,
  r,
) => (r = e != null ? u(c(e)) : {},
  g(
    t || !e || !e.__esModule
      ? n(r, "default", { value: e, enumerable: !0 })
      : r,
    e,
  ));
var _ = p((m, f) => {
  var i = function () {
    if (typeof self == "object" && self) return self;
    if (typeof window == "object" && window) return window;
    throw new Error("Unable to resolve global `this`");
  };
  f.exports = function () {
    if (this) return this;
    if (typeof globalThis == "object" && globalThis) return globalThis;
    try {
      Object.defineProperty(Object.prototype, "__global__", {
        get: function () {
          return this;
        },
        configurable: !0,
      });
    } catch {
      return i();
    }
    try {
      return __global__ || i();
    } finally {
      delete Object.prototype.__global__;
    }
  }();
});
var y = h(_()), { default: a, ...w } = y, v = a !== void 0 ? a : w;
export { v as default };

/* esm.sh - esbuild bundle(swr@2.0.0-beta.6/_internal) deno production */
import ne, {
  createContext as We,
  createElement as Fe,
  useCallback as Le,
  useContext as ge,
  useEffect as Ae,
  useLayoutEffect as Ne,
  useRef as Y,
  useState as Ee,
} from "preact/compat";
var q = function () {
  return q = Object.assign || function (i) {
    for (var n, a = 1, r = arguments.length; a < r; a++) {
      n = arguments[a];
      for (var t in n) {
        Object.prototype.hasOwnProperty.call(n, t) && (i[t] = n[t]);
      }
    }
    return i;
  },
    q.apply(this, arguments);
};
function ve(e, i, n, a) {
  function r(t) {
    return t instanceof n ? t : new n(function (u) {
      u(t);
    });
  }
  return new (n || (n = Promise))(function (t, u) {
    function c(f) {
      try {
        o(a.next(f));
      } catch (l) {
        u(l);
      }
    }
    function s(f) {
      try {
        o(a.throw(f));
      } catch (l) {
        u(l);
      }
    }
    function o(f) {
      f.done ? t(f.value) : r(f.value).then(c, s);
    }
    o((a = a.apply(e, i || [])).next());
  });
}
function de(e, i) {
  var n = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    },
    a,
    r,
    t,
    u;
  return u = { next: c(0), throw: c(1), return: c(2) },
    typeof Symbol == "function" && (u[Symbol.iterator] = function () {
      return this;
    }),
    u;
  function c(o) {
    return function (f) {
      return s([o, f]);
    };
  }
  function s(o) {
    if (a) throw new TypeError("Generator is already executing.");
    for (; n;) {
      try {
        if (
          a = 1,
            r && (t = o[0] & 2
              ? r.return
              : o[0]
              ? r.throw || ((t = r.return) && t.call(r), 0)
              : r.next) &&
            !(t = t.call(r, o[1])).done
        ) return t;
        switch (r = 0, t && (o = [o[0] & 2, t.value]), o[0]) {
          case 0:
          case 1:
            t = o;
            break;
          case 4:
            return n.label++, { value: o[1], done: !1 };
          case 5:
            n.label++, r = o[1], o = [0];
            continue;
          case 7:
            o = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (
              t = n.trys,
                !(t = t.length > 0 && t[t.length - 1]) &&
                (o[0] === 6 || o[0] === 2)
            ) {
              n = 0;
              continue;
            }
            if (o[0] === 3 && (!t || o[1] > t[0] && o[1] < t[3])) {
              n.label = o[1];
              break;
            }
            if (o[0] === 6 && n.label < t[1]) {
              n.label = t[1], t = o;
              break;
            }
            if (t && n.label < t[2]) {
              n.label = t[2], n.ops.push(o);
              break;
            }
            t[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        o = i.call(e, n);
      } catch (f) {
        o = [6, f], r = 0;
      } finally {
        a = t = 0;
      }
    }
    if (o[0] & 5) throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
function Ie(e) {
  var i = typeof Symbol == "function" && Symbol.iterator, n = i && e[i], a = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") {
    return {
      next: function () {
        return e && a >= e.length && (e = void 0),
          { value: e && e[a++], done: !e };
      },
    };
  }
  throw new TypeError(
    i ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function h(e, i) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var a = n.call(e), r, t = [], u;
  try {
    for (; (i === void 0 || i-- > 0) && !(r = a.next()).done;) t.push(r.value);
  } catch (c) {
    u = { error: c };
  } finally {
    try {
      r && !r.done && (n = a.return) && n.call(a);
    } finally {
      if (u) throw u.error;
    }
  }
  return t;
}
function Me(e, i, n) {
  if (n || arguments.length === 2) {
    for (var a = 0, r = i.length, t; a < r; a++) {
      (t || !(a in i)) &&
        (t || (t = Array.prototype.slice.call(i, 0, a)), t[a] = i[a]);
    }
  }
  return e.concat(t || Array.prototype.slice.call(i));
}
var g = new WeakMap(),
  he = {},
  b = function () {},
  m = b(),
  j = Object,
  p = function (e) {
    return e === m;
  },
  _ = function (e) {
    return typeof e == "function";
  },
  C = function (e, i) {
    return j.assign({}, e, i);
  },
  re = "undefined",
  H = typeof window != re,
  X = typeof document != re,
  Ue = function () {
    return H && typeof window.requestAnimationFrame != re;
  },
  Ve = function (e, i) {
    var n = g.get(e);
    return [function () {
      return e.get(i) || he;
    }, function (a) {
      var r = e.get(i);
      n[5](i, C(r, a), r || he);
    }, n[6]];
  },
  V = new WeakMap(),
  je = 0,
  x = function (e) {
    var i = typeof e, n = e && e.constructor, a = n == Date, r, t;
    if (j(e) === e && !a && n != RegExp) {
      if (r = V.get(e), r) return r;
      if (r = ++je + "~", V.set(e, r), n == Array) {
        for (r = "@", t = 0; t < e.length; t++) r += x(e[t]) + ",";
        V.set(e, r);
      }
      if (n == j) {
        r = "#";
        for (var u = j.keys(e).sort(); !p(t = u.pop());) {
          p(e[t]) ||
            (r += t + ":" + x(e[t]) + ",");
        }
        V.set(e, r);
      }
    } else {r = a
        ? e.toJSON()
        : i == "symbol"
        ? e.toString()
        : i == "string"
        ? JSON.stringify(e)
        : "" + e;}
    return r;
  },
  Z = !0,
  qe = function () {
    return Z;
  },
  _e = h(
    H && window.addEventListener
      ? [
        window.addEventListener.bind(window),
        window.removeEventListener.bind(window),
      ]
      : [b, b],
    2,
  ),
  k = _e[0],
  ee = _e[1],
  He = function () {
    var e = X && document.visibilityState;
    return p(e) || e !== "hidden";
  },
  Pe = function (e) {
    return X && document.addEventListener("visibilitychange", e),
      k("focus", e),
      function () {
        X && document.removeEventListener("visibilitychange", e),
          ee("focus", e);
      };
  },
  Be = function (e) {
    var i = function () {
        Z = !0, e();
      },
      n = function () {
        Z = !1;
      };
    return k("online", i), k("offline", n), function () {
      ee("online", i), ee("offline", n);
    };
  },
  Ge = { isOnline: qe, isVisible: He },
  Je = { initFocus: Pe, initReconnect: Be },
  Ke = !ne.useId,
  ae = !H || "Deno" in window,
  it = function (e) {
    return Ue() ? window.requestAnimationFrame(e) : setTimeout(e, 1);
  },
  be = ae ? Ae : Ne,
  Q = typeof navigator < "u" && navigator.connection,
  me = !ae && Q && (["slow-2g", "2g"].includes(Q.effectiveType) || Q.saveData),
  ie = function (e) {
    if (_(e)) {
      try {
        e = e();
      } catch {
        e = "";
      }
    }
    var i = e;
    return e = typeof e == "string"
      ? e
      : (Array.isArray(e) ? e.length : e)
      ? x(e)
      : "",
      [e, i];
  },
  $e = 0,
  ye = function () {
    return ++$e;
  },
  pe = 0,
  Ce = 1,
  Se = 2,
  ot = {
    __proto__: null,
    FOCUS_EVENT: pe,
    RECONNECT_EVENT: Ce,
    MUTATE_EVENT: Se,
  };
function ze() {
  for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
  return ve(this, void 0, void 0, function () {
    function n(ue) {
      return ve(this, void 0, void 0, function () {
        var N, E, G, W, T, F, fe, L, ce, I, J, v, w, K, $, M, se, O, le;
        return de(this, function (U) {
          switch (U.label) {
            case 0:
              if (N = h(ie(ue), 1), E = N[0], !E) return [2];
              if (
                G = h(Ve(r, E), 2),
                  W = G[0],
                  T = G[1],
                  F = h(g.get(r), 3),
                  fe = F[0],
                  L = F[1],
                  ce = F[2],
                  I = fe[E],
                  J = function () {
                    return l && (delete ce[E], I && I[0])
                      ? I[0](Se).then(function () {
                        return W().data;
                      })
                      : W().data;
                  },
                  e.length < 3
              ) return [2, J()];
              if (
                v = u,
                  K = ye(),
                  L[E] = [K, 0],
                  $ = !p(f),
                  M = W(),
                  se = M.data,
                  O = p(M._c) ? se : M._c,
                  $ && (f = _(f) ? f(O) : f, T({ data: f, _c: O })),
                  _(v)
              ) {
                try {
                  v = v(O);
                } catch (z) {
                  w = z;
                }
              }
              return v && _(v.then)
                ? [
                  4,
                  v.catch(function (z) {
                    w = z;
                  }),
                ]
                : [3, 2];
            case 1:
              if (v = U.sent(), K !== L[E][0]) {
                if (w) throw w;
                return [2, v];
              } else w && $ && d && (o = !0, v = O, T({ data: v, _c: m }));
              U.label = 2;
            case 2:
              return o &&
                (w || (_(o) && (v = o(v, O)), T({ data: v, _c: m })),
                  T({ error: w })),
                L[E][1] = ye(),
                [4, J()];
            case 3:
              if (le = U.sent(), T({ _c: m }), w) throw w;
              return [2, o ? le : v];
          }
        });
      });
    }
    var a, r, t, u, c, s, o, f, l, d, y, S, D, R, A, B, oe;
    return de(this, function (ue) {
      if (
        a = h(e, 4),
          r = a[0],
          t = a[1],
          u = a[2],
          c = a[3],
          s = typeof c == "boolean" ? { revalidate: c } : c || {},
          o = p(s.populateCache) ? !0 : s.populateCache,
          f = s.optimisticData,
          l = s.revalidate !== !1,
          d = s.rollbackOnError !== !1,
          _(t)
      ) {
        y = t, S = [];
        try {
          for (D = Ie(r.keys()), R = D.next(); !R.done; R = D.next()) {
            A = R.value, !A.startsWith("$inf$") && y(r.get(A)._k) && S.push(A);
          }
        } catch (N) {
          B = { error: N };
        } finally {
          try {
            R && !R.done && (oe = D.return) && oe.call(D);
          } finally {
            if (B) throw B.error;
          }
        }
        return [2, Promise.all(S.map(n))];
      }
      return [2, n(t)];
    });
  });
}
var we = function (e, i) {
    for (var n in e) e[n][0] && e[n][0](i);
  },
  Re = function (e, i) {
    if (!g.has(e)) {
      var n = C(Je, i),
        a = {},
        r = ze.bind(m, e),
        t = b,
        u = {},
        c = function (f, l) {
          var d = u[f] || [];
          return u[f] = d, d.push(l), function () {
            return d.splice(d.indexOf(l), 1);
          };
        },
        s = function (f, l, d) {
          e.set(f, l);
          var y = u[f];
          if (y) for (var S = y.length; S--;) y[S](d, l);
        },
        o = function () {
          if (!g.has(e) && (g.set(e, [a, {}, {}, {}, r, s, c]), !ae)) {
            var f = n.initFocus(setTimeout.bind(m, we.bind(m, a, pe))),
              l = n.initReconnect(setTimeout.bind(m, we.bind(m, a, Ce)));
            t = function () {
              f && f(), l && l(), g.delete(e);
            };
          }
        };
      return o(), [e, r, o, t];
    }
    return [e, g.get(e)[4]];
  },
  Ye = function (e, i, n, a, r) {
    var t = n.errorRetryCount,
      u = r.retryCount,
      c = ~~((Math.random() + .5) * (1 << (u < 8 ? u : 8))) *
        n.errorRetryInterval;
    !p(t) && u > t || setTimeout(a, c, r);
  },
  Qe = function (e, i) {
    return x(e) == x(i);
  },
  Te = h(Re(new Map()), 2),
  P = Te[0],
  Xe = Te[1],
  Ze = C({
    onLoadingSlow: b,
    onSuccess: b,
    onError: b,
    onErrorRetry: Ye,
    onDiscarded: b,
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    errorRetryInterval: me ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: me ? 5e3 : 3e3,
    compare: Qe,
    isPaused: function () {
      return !1;
    },
    cache: P,
    mutate: Xe,
    fallback: {},
  }, Ge),
  Oe = function (e, i) {
    var n = C(e, i);
    if (i) {
      var a = e.use, r = e.fallback, t = i.use, u = i.fallback;
      a && t && (n.use = a.concat(t)), r && u && (n.fallback = C(r, u));
    }
    return n;
  },
  te = We({}),
  ut = function (e) {
    var i = e.value,
      n = ge(te),
      a = _(i),
      r = a ? i(n) : i,
      t = a ? r : Oe(n, r),
      u = r && r.provider,
      c = h(
        Ee(function () {
          return u ? Re(u(t.cache || P), r) : m;
        }),
        1,
      ),
      s = c[0];
    return s && (t.cache = s[0], t.mutate = s[1]),
      be(function () {
        if (s) return s[2] && s[2](), s[3];
      }, []),
      Fe(te.Provider, C(e, { value: t }));
  },
  De = H && window.__SWR_DEVTOOLS_USE__,
  ke = De ? window.__SWR_DEVTOOLS_USE__ : [],
  et = function () {
    De && (window.__SWR_DEVTOOLS_REACT__ = ne);
  },
  xe = function (e) {
    return _(e[1])
      ? [e[0], e[1], e[2] || {}]
      : [e[0], null, (e[1] === null ? e[2] : e[1]) || {}];
  },
  tt = function () {
    return C(Ze, ge(te));
  },
  ft = function (e, i) {
    var n = ie(e)[0], a = h(g.get(P), 4), r = a[3];
    if (r[n]) return r[n];
    var t = i(e);
    return r[n] = t, t;
  },
  nt = function (e) {
    return function (i, n, a) {
      var r = n && function () {
        for (var t = [], u = 0; u < arguments.length; u++) t[u] = arguments[u];
        var c = ie(i)[0], s = h(g.get(P), 4), o = s[3], f = o[c];
        return f ? (delete o[c], f) : n.apply(void 0, Me([], h(t), !1));
      };
      return e(i, r, a);
    };
  },
  rt = ke.concat(nt),
  ct = function (e) {
    return function () {
      for (var n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
      for (
        var r = tt(),
          t = h(xe(n), 3),
          u = t[0],
          c = t[1],
          s = t[2],
          o = Oe(r, s),
          f = e,
          l = o.use,
          d = (l || []).concat(rt),
          y = d.length;
        y--;
      ) f = d[y](f);
      return f(u, c || o.fetcher, o);
    };
  },
  st = function (e) {
    var i = Ee({})[1],
      n = Y(!1),
      a = Y(e),
      r = Y({ data: !1, error: !1, isValidating: !1 }),
      t = Le(function (u) {
        var c = !1, s = a.current;
        for (var o in u) {
          var f = o;
          s[f] !== u[f] && (s[f] = u[f], r.current[f] && (c = !0));
        }
        c && !n.current && (Ke ? i({}) : ne.startTransition(function () {
          return i({});
        }));
      }, []);
    return be(function () {
      return n.current = !1, function () {
        n.current = !0;
      };
    }),
      [a, r.current, t];
  },
  lt = function (e, i, n) {
    var a = i[e] || (i[e] = []);
    return a.push(n), function () {
      var r = a.indexOf(n);
      r >= 0 && (a[r] = a[a.length - 1], a.pop());
    };
  },
  vt = function (e, i) {
    return function () {
      for (var n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
      var r = h(xe(n), 3),
        t = r[0],
        u = r[1],
        c = r[2],
        s = (c.use || []).concat(i);
      return e(t, u, q(q({}, c), { use: s }));
    };
  };
et();
export {
  _ as isFunction,
  ae as IS_SERVER,
  b as noop,
  be as useIsomorphicLayoutEffect,
  C as mergeObjects,
  ct as withArgs,
  ft as preload,
  g as SWRGlobalState,
  Ge as preset,
  H as isWindowDefined,
  ie as serialize,
  it as rAF,
  j as OBJECT,
  Je as defaultConfigOptions,
  Ke as IS_REACT_LEGACY,
  lt as subscribeCallback,
  m as UNDEFINED,
  me as slowConnection,
  Oe as mergeConfigs,
  ot as revalidateEvents,
  P as cache,
  p as isUndefined,
  Qe as compare,
  Re as initCache,
  st as useStateWithDeps,
  tt as useSWRConfig,
  Ue as hasRequestAnimationFrame,
  ut as SWRConfig,
  Ve as createCacheHelper,
  vt as withMiddleware,
  X as isDocumentDefined,
  x as stableHash,
  Xe as mutate,
  xe as normalize,
  ye as getTimestamp,
  Ze as defaultConfig,
  ze as internalMutate,
};

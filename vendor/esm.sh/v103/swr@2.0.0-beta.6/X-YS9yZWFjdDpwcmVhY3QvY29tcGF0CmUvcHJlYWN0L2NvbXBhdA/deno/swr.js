/* esm.sh - esbuild bundle(swr@2.0.0-beta.6) deno production */
import {
  useCallback as Z,
  useDebugValue as De,
  useMemo as Te,
  useRef as w,
} from "preact/compat";
import { useSyncExternalStore as Ve } from "/v103/use-sync-external-store@1.2.0/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/deno/shim/index.js";
import {
  createCacheHelper as xe,
  defaultConfig as Ie,
  getTimestamp as Me,
  internalMutate as Le,
  IS_REACT_LEGACY as be,
  IS_SERVER as ge,
  isFunction as ye,
  isUndefined as d,
  mergeObjects as Fe,
  OBJECT as ke,
  rAF as Ne,
  revalidateEvents as re,
  serialize as Se,
  subscribeCallback as We,
  SWRConfig as _e,
  SWRGlobalState as Ae,
  UNDEFINED as he,
  useIsomorphicLayoutEffect as ee,
  withArgs as Oe,
} from "/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/deno/_internal.js";
import {
  mutate as Qe,
  preload as Xe,
  useSWRConfig as Ze,
} from "/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/deno/_internal.js";
function qe(b, f, e, n) {
  function i(r) {
    return r instanceof e ? r : new e(function (v) {
      v(r);
    });
  }
  return new (e || (e = Promise))(function (r, v) {
    function y(g) {
      try {
        t(n.next(g));
      } catch (k) {
        v(k);
      }
    }
    function S(g) {
      try {
        t(n.throw(g));
      } catch (k) {
        v(k);
      }
    }
    function t(g) {
      g.done ? r(g.value) : i(g.value).then(y, S);
    }
    t((n = n.apply(b, f || [])).next());
  });
}
function Ue(b, f) {
  var e = {
      label: 0,
      sent: function () {
        if (r[0] & 1) throw r[1];
        return r[1];
      },
      trys: [],
      ops: [],
    },
    n,
    i,
    r,
    v;
  return v = { next: y(0), throw: y(1), return: y(2) },
    typeof Symbol == "function" && (v[Symbol.iterator] = function () {
      return this;
    }),
    v;
  function y(t) {
    return function (g) {
      return S([t, g]);
    };
  }
  function S(t) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; e;) {
      try {
        if (
          n = 1,
            i && (r = t[0] & 2
              ? i.return
              : t[0]
              ? i.throw || ((r = i.return) && r.call(i), 0)
              : i.next) &&
            !(r = r.call(i, t[1])).done
        ) return r;
        switch (i = 0, r && (t = [t[0] & 2, r.value]), t[0]) {
          case 0:
          case 1:
            r = t;
            break;
          case 4:
            return e.label++, { value: t[1], done: !1 };
          case 5:
            e.label++, i = t[1], t = [0];
            continue;
          case 7:
            t = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (
              r = e.trys,
                !(r = r.length > 0 && r[r.length - 1]) &&
                (t[0] === 6 || t[0] === 2)
            ) {
              e = 0;
              continue;
            }
            if (t[0] === 3 && (!r || t[1] > r[0] && t[1] < r[3])) {
              e.label = t[1];
              break;
            }
            if (t[0] === 6 && e.label < r[1]) {
              e.label = r[1], r = t;
              break;
            }
            if (r && e.label < r[2]) {
              e.label = r[2], e.ops.push(t);
              break;
            }
            r[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        t = f.call(b, e);
      } catch (g) {
        t = [6, g], i = 0;
      } finally {
        n = r = 0;
      }
    }
    if (t[0] & 5) throw t[1];
    return { value: t[0] ? t[1] : void 0, done: !0 };
  }
}
function F(b, f) {
  var e = typeof Symbol == "function" && b[Symbol.iterator];
  if (!e) return b;
  var n = e.call(b), i, r = [], v;
  try {
    for (; (f === void 0 || f-- > 0) && !(i = n.next()).done;) r.push(i.value);
  } catch (y) {
    v = { error: y };
  } finally {
    try {
      i && !i.done && (e = n.return) && e.call(n);
    } finally {
      if (v) throw v.error;
    }
  }
  return r;
}
function He(b, f, e) {
  if (e || arguments.length === 2) {
    for (var n = 0, i = f.length, r; n < i; n++) {
      (r || !(n in f)) &&
        (r || (r = Array.prototype.slice.call(f, 0, n)), r[n] = f[n]);
    }
  }
  return b.concat(r || Array.prototype.slice.call(f));
}
var te = { dedupe: !0 },
  Pe = function (b, f, e) {
    var n = e.cache,
      i = e.compare,
      r = e.suspense,
      v = e.fallbackData,
      y = e.revalidateOnMount,
      S = e.refreshInterval,
      t = e.refreshWhenHidden,
      g = e.refreshWhenOffline,
      k = e.keepPreviousData,
      U = F(Ae.get(n), 3),
      Ee = U[0],
      me = U[1],
      E = U[2],
      ae = F(Se(b), 2),
      a = ae[0],
      ne = ae[1],
      H = w(!1),
      _ = w(!1),
      M = w(a),
      P = w(f),
      z = w(e),
      h = function () {
        return z.current;
      },
      G = function () {
        return h().isVisible() && h().isOnline();
      },
      j = F(xe(n, a), 3),
      I = j[0],
      B = j[1],
      Re = j[2],
      O = w({}).current,
      ie = d(v) ? e.fallback[a] : v,
      ue = function (s, u) {
        var l = !0;
        for (var o in O) {
          var c = o;
          i(u[c], s[c]) || c === "data" && d(s[c]) && i(u[c], ie) || (l = !1);
        }
        return l;
      },
      se = Te(function () {
        var s = function () {
            return !a || !f ? !1 : d(y) ? !(h().isPaused() || r) : y;
          }(),
          u = function () {
            var o = I(), c = Fe(o);
            return delete c._k,
              s ? Object.assign({ isValidating: !0, isLoading: !0 }, c) : c;
          },
          l = u();
        return function () {
          var o = u();
          return ue(o, l) ? l : l = o;
        };
      }, [n, a]),
      C = Ve(
        Z(function (s) {
          return Re(a, function (u, l) {
            ue(u, l) || s();
          });
        }, [n, a]),
        se,
        se,
      ),
      le = !H.current,
      T = C.data,
      m = d(T) ? ie : T,
      J = C.error,
      fe = w(m),
      oe = k ? d(T) ? fe.current : T : m,
      ce = function () {
        return le && !d(y)
          ? y
          : h().isPaused()
          ? !1
          : r
          ? d(m) ? !1 : e.revalidateIfStale
          : d(m) || e.revalidateIfStale;
      }(),
      de = !!(a && f && le && ce),
      pe = d(C.isValidating) ? de : C.isValidating,
      we = d(C.isLoading) ? de : C.isLoading,
      A = Z(function (s) {
        return qe(void 0, void 0, void 0, function () {
          var u, l, o, c, D, R, V, x, Y, $, K, L, Q, W, p, q, X;
          return Ue(this, function (N) {
            switch (N.label) {
              case 0:
                if (
                  u = P.current, !a || !u || _.current || h().isPaused()
                ) return [2, !1];
                c = !0,
                  D = s || {},
                  R = !E[a] || !D.dedupe,
                  V = function () {
                    return be
                      ? !_.current && a === M.current && H.current
                      : a === M.current;
                  },
                  x = { isValidating: !1, isLoading: !1 },
                  Y = function () {
                    B(x);
                  },
                  $ = function () {
                    var ve = E[a];
                    ve && ve[1] === o && delete E[a];
                  },
                  K = { isValidating: !0 },
                  d(I().data) && (K.isLoading = !0),
                  N.label = 1;
              case 1:
                return N.trys.push([1, 3, , 4]),
                  R &&
                  (B(K),
                    e.loadingTimeout && d(I().data) && setTimeout(function () {
                      c && V() && h().onLoadingSlow(a, e);
                    }, e.loadingTimeout),
                    E[a] = [u(ne), Me()]),
                  X = F(E[a], 2),
                  l = X[0],
                  o = X[1],
                  [4, l];
              case 2:
                return l = N.sent(),
                  R && setTimeout($, e.dedupingInterval),
                  !E[a] || E[a][1] !== o
                    ? (R && V() && h().onDiscarded(a), [2, !1])
                    : (x.error = he,
                      L = me[a],
                      !d(L) && (o <= L[0] || o <= L[1] || L[1] === 0)
                        ? (Y(), R && V() && h().onDiscarded(a), [2, !1])
                        : (Q = I().data,
                          x.data = i(Q, l) ? Q : l,
                          R && V() && h().onSuccess(l, a, e),
                          [3, 4]));
              case 3:
                return W = N.sent(),
                  $(),
                  p = h(),
                  q = p.shouldRetryOnError,
                  p.isPaused() ||
                  (x.error = W,
                    R && V() &&
                    (p.onError(W, a, p),
                      (q === !0 || ye(q) && q(W)) && G() &&
                      p.onErrorRetry(W, a, p, A, {
                        retryCount: (D.retryCount || 0) + 1,
                        dedupe: !0,
                      }))),
                  [3, 4];
              case 4:
                return c = !1, Y(), [2, !0];
            }
          });
        });
      }, [a, n]),
      Ce = Z(function () {
        for (var s = [], u = 0; u < arguments.length; u++) {
          s[u] = arguments[u];
        }
        return Le.apply(void 0, He([n, M.current], F(s), !1));
      }, []);
    if (
      ee(function () {
        P.current = f, z.current = e, d(T) || (fe.current = T);
      }),
        ee(function () {
          if (a) {
            var s = A.bind(he, te),
              u = 0,
              l = function (c) {
                if (c == re.FOCUS_EVENT) {
                  var D = Date.now();
                  h().revalidateOnFocus && D > u && G() &&
                    (u = D + h().focusThrottleInterval, s());
                } else if (c == re.RECONNECT_EVENT) {
                  h().revalidateOnReconnect && G() && s();
                } else if (c == re.MUTATE_EVENT) return A();
              },
              o = We(a, Ee, l);
            return _.current = !1,
              M.current = a,
              H.current = !0,
              B({ _k: ne }),
              ce && (d(m) || ge ? s() : Ne(s)),
              function () {
                _.current = !0, o();
              };
          }
        }, [a]),
        ee(function () {
          var s;
          function u() {
            var o = ye(S) ? S(m) : S;
            o && s !== -1 && (s = setTimeout(l, o));
          }
          function l() {
            !I().error && (t || h().isVisible()) && (g || h().isOnline())
              ? A(te).then(u)
              : u();
          }
          return u(), function () {
            s && (clearTimeout(s), s = -1);
          };
        }, [S, t, g, a]),
        De(oe),
        r && d(m) && a
    ) {
      throw !be && ge
        ? new Error("Fallback data is required when using suspense in SSR.")
        : (P.current = f, z.current = e, _.current = !1, d(J) ? A(te) : J);
    }
    return {
      mutate: Ce,
      get data() {
        return O.data = !0, oe;
      },
      get error() {
        return O.error = !0, J;
      },
      get isValidating() {
        return O.isValidating = !0, pe;
      },
      get isLoading() {
        return O.isLoading = !0, we;
      },
    };
  },
  Be = ke.defineProperty(_e, "defaultValue", { value: Ie }),
  Je = function (b) {
    return Se(b)[0];
  },
  Ye = Oe(Pe);
export {
  Be as SWRConfig,
  Je as unstable_serialize,
  Qe as mutate,
  Xe as preload,
  Ye as default,
  Ze as useSWRConfig,
};

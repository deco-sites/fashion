/* esm.sh - esbuild bundle(@supabase/functions-js@1.3.4) deno production */
var y = function (s, i, e, r) {
    function l(t) {
      return t instanceof e ? t : new e(function (o) {
        o(t);
      });
    }
    return new (e || (e = Promise))(function (t, o) {
      function c(n) {
        try {
          a(r.next(n));
        } catch (h) {
          o(h);
        }
      }
      function f(n) {
        try {
          a(r.throw(n));
        } catch (h) {
          o(h);
        }
      }
      function a(n) {
        n.done ? t(n.value) : l(n.value).then(c, f);
      }
      a((r = r.apply(s, i || [])).next());
    });
  },
  d = (s) => {
    let i;
    return s
      ? i = s
      : typeof fetch > "u"
      ? i = (...e) =>
        y(void 0, void 0, void 0, function* () {
          return yield (yield import(
            "/v103/cross-fetch@3.1.5/deno/cross-fetch.js"
          )).fetch(...e);
        })
      : i = fetch,
      (...e) => i(...e);
  };
var p = function (s, i, e, r) {
    function l(t) {
      return t instanceof e ? t : new e(function (o) {
        o(t);
      });
    }
    return new (e || (e = Promise))(function (t, o) {
      function c(n) {
        try {
          a(r.next(n));
        } catch (h) {
          o(h);
        }
      }
      function f(n) {
        try {
          a(r.throw(n));
        } catch (h) {
          o(h);
        }
      }
      function a(n) {
        n.done ? t(n.value) : l(n.value).then(c, f);
      }
      a((r = r.apply(s, i || [])).next());
    });
  },
  u = class {
    constructor(i, { headers: e = {}, customFetch: r } = {}) {
      this.url = i, this.headers = e, this.fetch = d(r);
    }
    setAuth(i) {
      this.headers.Authorization = `Bearer ${i}`;
    }
    invoke(i, e) {
      return p(this, void 0, void 0, function* () {
        try {
          let { headers: r, body: l } = e ?? {},
            t = yield this.fetch(`${this.url}/${i}`, {
              method: "POST",
              headers: Object.assign({}, this.headers, r),
              body: l,
            }),
            o = t.headers.get("x-relay-error");
          if (o && o === "true") {
            return { data: null, error: new Error(yield t.text()) };
          }
          let c, { responseType: f } = e ?? {};
          return !f || f === "json"
            ? c = yield t.json()
            : f === "arrayBuffer"
            ? c = yield t.arrayBuffer()
            : f === "blob"
            ? c = yield t.blob()
            : c = yield t.text(),
            { data: c, error: null };
        } catch (r) {
          return { data: null, error: r };
        }
      });
    }
  };
export { u as FunctionsClient };

/* esm.sh - esbuild bundle(@supabase/supabase-js@1.35.4) deno production */
var E = "1.35.4";
var _ = { "X-Client-Info": `supabase-js/${E}` }, v = "supabase.auth.token";
function S(h) {
  return h.replace(/\/$/, "");
}
var T = () => typeof document < "u";
import { GoTrueClient as x } from "/v103/@supabase/gotrue-js@1.24.0/deno/gotrue-js.js";
var l = class extends x {
  constructor(t) {
    super(t);
  }
};
import { PostgrestQueryBuilder as w } from "/v103/@supabase/postgrest-js@0.37.4/deno/postgrest-js.js";
import { Transformers as g } from "/v103/@supabase/realtime-js@1.7.5/deno/realtime-js.js";
var d = class {
  constructor(t, e, s, i) {
    let r = {},
      n = i === "*" ? `realtime:${s}` : `realtime:${s}:${i}`,
      o = e.Authorization.split(" ")[1];
    o && (r.user_token = o), this.subscription = t.channel(n, r);
  }
  getPayloadRecords(t) {
    let e = { new: {}, old: {} };
    return (t.type === "INSERT" || t.type === "UPDATE") &&
      (e.new = g.convertChangeData(t.columns, t.record)),
      (t.type === "UPDATE" || t.type === "DELETE") &&
      (e.old = g.convertChangeData(t.columns, t.old_record)),
      e;
  }
  on(t, e) {
    return this.subscription.on(t, (s) => {
      let i = {
        schema: s.schema,
        table: s.table,
        commit_timestamp: s.commit_timestamp,
        eventType: s.type,
        new: {},
        old: {},
        errors: s.errors,
      };
      i = Object.assign(Object.assign({}, i), this.getPayloadRecords(s)), e(i);
    }),
      this;
  }
  subscribe(t = () => {}) {
    return this.subscription.onError((e) => t("SUBSCRIPTION_ERROR", e)),
      this.subscription.onClose(() => t("CLOSED")),
      this.subscription.subscribe().receive("ok", () => t("SUBSCRIBED"))
        .receive("error", (e) => t("SUBSCRIPTION_ERROR", e)).receive(
          "timeout",
          () => t("RETRYING_AFTER_TIMEOUT"),
        ),
      this.subscription;
  }
};
var m = class extends w {
  constructor(
    t,
    {
      headers: e = {},
      schema: s,
      realtime: i,
      table: r,
      fetch: n,
      shouldThrowOnError: o,
    },
  ) {
    super(t, { headers: e, schema: s, fetch: n, shouldThrowOnError: o }),
      this._subscription = null,
      this._realtime = i,
      this._headers = e,
      this._schema = s,
      this._table = r;
  }
  on(t, e) {
    return this._realtime.isConnected() || this._realtime.connect(),
      this._subscription ||
      (this._subscription = new d(
        this._realtime,
        this._headers,
        this._schema,
        this._table,
      )),
      this._subscription.on(t, e);
  }
};
import { SupabaseStorageClient as O } from "/v103/@supabase/storage-js@1.7.3/deno/storage-js.js";
import { FunctionsClient as R } from "/v103/@supabase/functions-js@1.3.4/deno/functions-js.js";
import { PostgrestClient as A } from "/v103/@supabase/postgrest-js@0.37.4/deno/postgrest-js.js";
import { RealtimeClient as C } from "/v103/@supabase/realtime-js@1.7.5/deno/realtime-js.js";
var p = function (h, t, e, s) {
    function i(r) {
      return r instanceof e ? r : new e(function (n) {
        n(r);
      });
    }
    return new (e || (e = Promise))(function (r, n) {
      function o(a) {
        try {
          u(s.next(a));
        } catch (b) {
          n(b);
        }
      }
      function f(a) {
        try {
          u(s.throw(a));
        } catch (b) {
          n(b);
        }
      }
      function u(a) {
        a.done ? r(a.value) : i(a.value).then(o, f);
      }
      u((s = s.apply(h, t || [])).next());
    });
  },
  U = {
    schema: "public",
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    multiTab: !0,
    headers: _,
  },
  c = class {
    constructor(t, e, s) {
      if (this.supabaseUrl = t, this.supabaseKey = e, !t) {
        throw new Error(
          "supabaseUrl is required.",
        );
      }
      if (!e) throw new Error("supabaseKey is required.");
      let i = S(t), r = Object.assign(Object.assign({}, U), s);
      if (
        this.restUrl = `${i}/rest/v1`,
          this.realtimeUrl = `${i}/realtime/v1`.replace("http", "ws"),
          this.authUrl = `${i}/auth/v1`,
          this.storageUrl = `${i}/storage/v1`,
          i.match(/(supabase\.co)|(supabase\.in)/)
      ) {
        let o = i.split(".");
        this.functionsUrl = `${o[0]}.functions.${o[1]}.${o[2]}`;
      } else this.functionsUrl = `${i}/functions/v1`;
      this.schema = r.schema,
        this.multiTab = r.multiTab,
        this.fetch = r.fetch,
        this.headers = Object.assign(Object.assign({}, _), s?.headers),
        this.shouldThrowOnError = r.shouldThrowOnError || !1,
        this.auth = this._initSupabaseAuthClient(r),
        this.realtime = this._initRealtimeClient(
          Object.assign({ headers: this.headers }, r.realtime),
        ),
        this._listenForAuthEvents(),
        this._listenForMultiTabEvents();
    }
    get functions() {
      return new R(this.functionsUrl, {
        headers: this._getAuthHeaders(),
        customFetch: this.fetch,
      });
    }
    get storage() {
      return new O(this.storageUrl, this._getAuthHeaders(), this.fetch);
    }
    from(t) {
      let e = `${this.restUrl}/${t}`;
      return new m(e, {
        headers: this._getAuthHeaders(),
        schema: this.schema,
        realtime: this.realtime,
        table: t,
        fetch: this.fetch,
        shouldThrowOnError: this.shouldThrowOnError,
      });
    }
    rpc(t, e, { head: s = !1, count: i = null } = {}) {
      return this._initPostgRESTClient().rpc(t, e, { head: s, count: i });
    }
    channel(t, e) {
      var s, i;
      let r =
        (i = (s = this.auth.session()) === null || s === void 0
              ? void 0
              : s.access_token) !== null && i !== void 0
          ? i
          : this.supabaseKey;
      return this.realtime.isConnected() || this.realtime.connect(),
        this.realtime.channel(
          t,
          Object.assign(Object.assign({}, e), { user_token: r }),
        );
    }
    removeAllSubscriptions() {
      return p(this, void 0, void 0, function* () {
        let t = this.getSubscriptions().slice(),
          e = t.map((i) => this.removeSubscription(i));
        return (yield Promise.all(e)).map(({ error: i }, r) => ({
          data: { subscription: t[r] },
          error: i,
        }));
      });
    }
    removeChannel(t) {
      return p(this, void 0, void 0, function* () {
        let { error: e } = yield this._closeSubscription(t),
          s = this.getSubscriptions(),
          i = s.filter((r) => r.isJoined()).length;
        return s.length === 0 && (yield this.realtime.disconnect()),
          { data: { openChannels: i }, error: e };
      });
    }
    removeSubscription(t) {
      return p(this, void 0, void 0, function* () {
        let { error: e } = yield this._closeSubscription(t),
          s = this.getSubscriptions(),
          i = s.filter((r) => r.isJoined()).length;
        return s.length === 0 && (yield this.realtime.disconnect()),
          { data: { openSubscriptions: i }, error: e };
      });
    }
    _closeSubscription(t) {
      return p(this, void 0, void 0, function* () {
        let e = null;
        if (!t.isClosed()) {
          let { error: s } = yield this._unsubscribeSubscription(t);
          e = s;
        }
        return this.realtime.remove(t), { error: e };
      });
    }
    _unsubscribeSubscription(t) {
      return new Promise((e) => {
        t.unsubscribe().receive("ok", () => e({ error: null })).receive(
          "error",
          (s) => e({ error: s }),
        ).receive("timeout", () => e({ error: new Error("timed out") }));
      });
    }
    getSubscriptions() {
      return this.realtime.channels;
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: t,
        persistSession: e,
        detectSessionInUrl: s,
        localStorage: i,
        headers: r,
        fetch: n,
        cookieOptions: o,
        multiTab: f,
      },
    ) {
      let u = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new l({
        url: this.authUrl,
        headers: Object.assign(Object.assign({}, r), u),
        autoRefreshToken: t,
        persistSession: e,
        detectSessionInUrl: s,
        localStorage: i,
        fetch: n,
        cookieOptions: o,
        multiTab: f,
      });
    }
    _initRealtimeClient(t) {
      return new C(
        this.realtimeUrl,
        Object.assign(Object.assign({}, t), {
          params: Object.assign(Object.assign({}, t?.params), {
            apikey: this.supabaseKey,
          }),
        }),
      );
    }
    _initPostgRESTClient() {
      return new A(this.restUrl, {
        headers: this._getAuthHeaders(),
        schema: this.schema,
        fetch: this.fetch,
        throwOnError: this.shouldThrowOnError,
      });
    }
    _getAuthHeaders() {
      var t, e;
      let s = Object.assign({}, this.headers),
        i =
          (e = (t = this.auth.session()) === null || t === void 0
                ? void 0
                : t.access_token) !== null && e !== void 0
            ? e
            : this.supabaseKey;
      return s.apikey = this.supabaseKey,
        s.Authorization = s.Authorization || `Bearer ${i}`,
        s;
    }
    _listenForMultiTabEvents() {
      if (!this.multiTab || !T() || !window?.addEventListener) return null;
      try {
        return window?.addEventListener("storage", (t) => {
          var e, s, i;
          if (t.key === v) {
            let r = JSON.parse(String(t.newValue)),
              n = (s = (e = r?.currentSession) === null || e === void 0
                      ? void 0
                      : e.access_token) !== null && s !== void 0
                ? s
                : void 0,
              o = (i = this.auth.session()) === null || i === void 0
                ? void 0
                : i.access_token;
            n
              ? !o && n
                ? this._handleTokenChanged("SIGNED_IN", n, "STORAGE")
                : o !== n &&
                  this._handleTokenChanged("TOKEN_REFRESHED", n, "STORAGE")
              : this._handleTokenChanged("SIGNED_OUT", n, "STORAGE");
          }
        });
      } catch (t) {
        return console.error("_listenForMultiTabEvents", t), null;
      }
    }
    _listenForAuthEvents() {
      let { data: t } = this.auth.onAuthStateChange((e, s) => {
        this._handleTokenChanged(e, s?.access_token, "CLIENT");
      });
      return t;
    }
    _handleTokenChanged(t, e, s) {
      (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") &&
        this.changedAccessToken !== e
        ? (this.realtime.setAuth(e),
          s == "STORAGE" && this.auth.setAuth(e),
          this.changedAccessToken = e)
        : (t === "SIGNED_OUT" || t === "USER_DELETED") &&
          (this.realtime.setAuth(this.supabaseKey),
            s == "STORAGE" && this.auth.signOut());
    }
  };
export * from "/v103/@supabase/gotrue-js@1.24.0/deno/gotrue-js.js";
export * from "/v103/@supabase/realtime-js@1.7.5/deno/realtime-js.js";
var X = (h, t, e) => new c(h, t, e);
export { c as SupabaseClient, X as createClient };

/* esm.sh - esbuild bundle(@supabase/realtime-js@1.7.5) deno production */
var D = Object.defineProperty;
var H = (i, e) => {
  for (var t in e) D(i, t, { get: e[t], enumerable: !0 });
};
var B = {};
H(B, {
  PostgresTypes: () => h,
  convertCell: () => E,
  convertChangeData: () => I,
  convertColumn: () => T,
  toArray: () => $,
  toBoolean: () => O,
  toJson: () => y,
  toNumber: () => w,
  toTimestampString: () => M,
});
var h;
(function (i) {
  i.abstime = "abstime",
    i.bool = "bool",
    i.date = "date",
    i.daterange = "daterange",
    i.float4 = "float4",
    i.float8 = "float8",
    i.int2 = "int2",
    i.int4 = "int4",
    i.int4range = "int4range",
    i.int8 = "int8",
    i.int8range = "int8range",
    i.json = "json",
    i.jsonb = "jsonb",
    i.money = "money",
    i.numeric = "numeric",
    i.oid = "oid",
    i.reltime = "reltime",
    i.text = "text",
    i.time = "time",
    i.timestamp = "timestamp",
    i.timestamptz = "timestamptz",
    i.timetz = "timetz",
    i.tsrange = "tsrange",
    i.tstzrange = "tstzrange";
})(h || (h = {}));
var I = (i, e, t = {}) => {
    var n;
    let s = (n = t.skipTypes) !== null && n !== void 0 ? n : [];
    return Object.keys(e).reduce((o, r) => (o[r] = T(r, i, e, s), o), {});
  },
  T = (i, e, t, n) => {
    let s = e.find((a) => a.name === i), o = s?.type, r = t[i];
    return o && !n.includes(o) ? E(o, r) : x(r);
  },
  E = (i, e) => {
    if (i.charAt(0) === "_") {
      let t = i.slice(1, i.length);
      return $(e, t);
    }
    switch (i) {
      case h.bool:
        return O(e);
      case h.float4:
      case h.float8:
      case h.int2:
      case h.int4:
      case h.int8:
      case h.numeric:
      case h.oid:
        return w(e);
      case h.json:
      case h.jsonb:
        return y(e);
      case h.timestamp:
        return M(e);
      case h.abstime:
      case h.date:
      case h.daterange:
      case h.int4range:
      case h.int8range:
      case h.money:
      case h.reltime:
      case h.text:
      case h.time:
      case h.timestamptz:
      case h.timetz:
      case h.tsrange:
      case h.tstzrange:
        return x(e);
      default:
        return x(e);
    }
  },
  x = (i) => i,
  O = (i) => {
    switch (i) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return i;
    }
  },
  w = (i) => {
    if (typeof i == "string") {
      let e = parseFloat(i);
      if (!Number.isNaN(e)) return e;
    }
    return i;
  },
  y = (i) => {
    if (typeof i == "string") {
      try {
        return JSON.parse(i);
      } catch (e) {
        return console.log(`JSON parse error: ${e}`), i;
      }
    }
    return i;
  },
  $ = (i, e) => {
    if (typeof i != "string") return i;
    let t = i.length - 1, n = i[t];
    if (i[0] === "{" && n === "}") {
      let o, r = i.slice(1, t);
      try {
        o = JSON.parse("[" + r + "]");
      } catch {
        o = r ? r.split(",") : [];
      }
      return o.map((a) => E(e, a));
    }
    return i;
  },
  M = (i) => typeof i == "string" ? i.replace(" ", "T") : i;
import { w3cwebsocket as N } from "/v103/websocket@1.0.34/deno/websocket.js";
var U = "1.7.5";
var J = { "X-Client-Info": `realtime-js/${U}` },
  L = "1.0.0",
  C = 1e4,
  z = 1e3,
  v;
(function (i) {
  i[i.connecting = 0] = "connecting",
    i[i.open = 1] = "open",
    i[i.closing = 2] = "closing",
    i[i.closed = 3] = "closed";
})(v || (v = {}));
var c;
(function (i) {
  i.closed = "closed",
    i.errored = "errored",
    i.joined = "joined",
    i.joining = "joining",
    i.leaving = "leaving";
})(c || (c = {}));
var l;
(function (i) {
  i.close = "phx_close",
    i.error = "phx_error",
    i.join = "phx_join",
    i.reply = "phx_reply",
    i.leave = "phx_leave",
    i.access_token = "access_token";
})(l || (l = {}));
var _;
(function (i) {
  i.websocket = "websocket";
})(_ || (_ = {}));
var m;
(function (i) {
  i.Connecting = "connecting",
    i.Open = "open",
    i.Closing = "closing",
    i.Closed = "closed";
})(m || (m = {}));
var p = class {
  constructor(e, t) {
    this.callback = e,
      this.timerCalc = t,
      this.timer = void 0,
      this.tries = 0,
      this.callback = e,
      this.timerCalc = t;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer),
      this.timer = setTimeout(() => {
        this.tries = this.tries + 1, this.callback();
      }, this.timerCalc(this.tries + 1));
  }
};
var j = class {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(e, t) {
    return e.constructor === ArrayBuffer
      ? t(this._binaryDecode(e))
      : t(typeof e == "string" ? JSON.parse(e) : {});
  }
  _binaryDecode(e) {
    let t = new DataView(e), n = new TextDecoder();
    return this._decodeBroadcast(e, t, n);
  }
  _decodeBroadcast(e, t, n) {
    let s = t.getUint8(1),
      o = t.getUint8(2),
      r = this.HEADER_LENGTH + 2,
      a = n.decode(e.slice(r, r + s));
    r = r + s;
    let d = n.decode(e.slice(r, r + o));
    r = r + o;
    let f = JSON.parse(n.decode(e.slice(r, e.byteLength)));
    return { ref: null, topic: a, event: d, payload: f };
  }
};
var g = class {
  constructor(e, t, n = {}, s = C) {
    this.channel = e,
      this.event = t,
      this.payload = n,
      this.timeout = s,
      this.sent = !1,
      this.timeoutTimer = void 0,
      this.ref = "",
      this.receivedResp = null,
      this.recHooks = [],
      this.refEvent = null;
  }
  resend(e) {
    this.timeout = e,
      this._cancelRefEvent(),
      this.ref = "",
      this.refEvent = null,
      this.receivedResp = null,
      this.sent = !1,
      this.send();
  }
  send() {
    this._hasReceived("timeout") ||
      (this.startTimeout(),
        this.sent = !0,
        this.channel.socket.push({
          topic: this.channel.topic,
          event: this.event,
          payload: this.payload,
          ref: this.ref,
          join_ref: this.channel.joinRef(),
        }));
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, t) {
    var n;
    return this._hasReceived(e) &&
      t((n = this.receivedResp) === null || n === void 0 ? void 0 : n.response),
      this.recHooks.push({ status: e, callback: t }),
      this;
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    this.ref = this.channel.socket.makeRef(),
      this.refEvent = this.channel.replyEventName(this.ref);
    let e = (t) => {
      this._cancelRefEvent(),
        this._cancelTimeout(),
        this.receivedResp = t,
        this._matchReceive(t);
    };
    this.channel.on(this.refEvent, e),
      this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout);
  }
  trigger(e, t) {
    this.refEvent &&
      this.channel.trigger(this.refEvent, { status: e, response: t });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel.off(this.refEvent);
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: e, response: t }) {
    this.recHooks.filter((n) => n.status === e).forEach((n) => n.callback(t));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
};
var b = class {
  constructor(e, t = {}, n) {
    this.topic = e,
      this.params = t,
      this.socket = n,
      this.bindings = [],
      this.state = c.closed,
      this.joinedOnce = !1,
      this.pushBuffer = [],
      this.timeout = this.socket.timeout,
      this.joinPush = new g(this, l.join, this.params, this.timeout),
      this.rejoinTimer = new p(
        () => this.rejoinUntilConnected(),
        this.socket.reconnectAfterMs,
      ),
      this.joinPush.receive("ok", () => {
        this.state = c.joined,
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((s) => s.send()),
          this.pushBuffer = [];
      }),
      this.onClose(() => {
        this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`),
          this.state = c.closed,
          this.socket.remove(this);
      }),
      this.onError((s) => {
        this.isLeaving() || this.isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, s),
            this.state = c.errored,
            this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        this.isJoining() &&
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout,
          ),
            this.state = c.errored,
            this.rejoinTimer.scheduleTimeout());
      }),
      this.on(l.reply, (s, o) => {
        this.trigger(this.replyEventName(o), s);
      });
  }
  rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this.rejoin();
  }
  subscribe(e = this.timeout) {
    if (this.joinedOnce) {
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    }
    return this.joinedOnce = !0, this.rejoin(e), this.joinPush;
  }
  onClose(e) {
    this.on(l.close, e);
  }
  onError(e) {
    this.on(l.error, (t) => e(t));
  }
  on(e, t) {
    this.bindings.push({ event: e, callback: t });
  }
  off(e) {
    this.bindings = this.bindings.filter((t) => t.event !== e);
  }
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  push(e, t, n = this.timeout) {
    if (!this.joinedOnce) {
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    }
    let s = new g(this, e, t, n);
    return this.canPush()
      ? s.send()
      : (s.startTimeout(), this.pushBuffer.push(s)),
      s;
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  unsubscribe(e = this.timeout) {
    this.state = c.leaving;
    let t = () => {
      this.socket.log("channel", `leave ${this.topic}`),
        this.trigger(l.close, "leave", this.joinRef());
    };
    this.joinPush.destroy();
    let n = new g(this, l.leave, {}, e);
    return n.receive("ok", () => t()).receive("timeout", () => t()),
      n.send(),
      this.canPush() || n.trigger("ok", {}),
      n;
  }
  onMessage(e, t, n) {
    return t;
  }
  isMember(e) {
    return this.topic === e;
  }
  joinRef() {
    return this.joinPush.ref;
  }
  rejoin(e = this.timeout) {
    this.isLeaving() ||
      (this.socket.leaveOpenTopic(this.topic),
        this.state = c.joining,
        this.joinPush.resend(e));
  }
  trigger(e, t, n) {
    let { close: s, error: o, leave: r, join: a } = l;
    if (n && [s, o, r, a].indexOf(e) >= 0 && n !== this.joinRef()) return;
    let f = this.onMessage(e, t, n);
    if (t && !f) {
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    }
    this.bindings.filter((u) => u.event === "*" ? e === t?.type : u.event === e)
      .map((u) => u.callback(f, n));
  }
  replyEventName(e) {
    return `chan_reply_${e}`;
  }
  isClosed() {
    return this.state === c.closed;
  }
  isErrored() {
    return this.state === c.errored;
  }
  isJoined() {
    return this.state === c.joined;
  }
  isJoining() {
    return this.state === c.joining;
  }
  isLeaving() {
    return this.state === c.leaving;
  }
};
var A = function (i, e, t, n) {
    function s(o) {
      return o instanceof t ? o : new t(function (r) {
        r(o);
      });
    }
    return new (t || (t = Promise))(function (o, r) {
      function a(u) {
        try {
          f(n.next(u));
        } catch (k) {
          r(k);
        }
      }
      function d(u) {
        try {
          f(n.throw(u));
        } catch (k) {
          r(k);
        }
      }
      function f(u) {
        u.done ? o(u.value) : s(u.value).then(a, d);
      }
      f((n = n.apply(i, e || [])).next());
    });
  },
  S = () => {},
  R = class {
    constructor(e, t) {
      this.accessToken = null,
        this.channels = [],
        this.endPoint = "",
        this.headers = J,
        this.params = {},
        this.timeout = C,
        this.transport = N,
        this.heartbeatIntervalMs = 3e4,
        this.longpollerTimeout = 2e4,
        this.heartbeatTimer = void 0,
        this.pendingHeartbeatRef = null,
        this.ref = 0,
        this.logger = S,
        this.conn = null,
        this.sendBuffer = [],
        this.serializer = new j(),
        this.stateChangeCallbacks = {
          open: [],
          close: [],
          error: [],
          message: [],
        },
        this.endPoint = `${e}/${_.websocket}`,
        t?.params && (this.params = t.params),
        t?.headers &&
        (this.headers = Object.assign(
          Object.assign({}, this.headers),
          t.headers,
        )),
        t?.timeout && (this.timeout = t.timeout),
        t?.logger && (this.logger = t.logger),
        t?.transport && (this.transport = t.transport),
        t?.heartbeatIntervalMs &&
        (this.heartbeatIntervalMs = t.heartbeatIntervalMs),
        t?.longpollerTimeout && (this.longpollerTimeout = t.longpollerTimeout),
        this.reconnectAfterMs = t?.reconnectAfterMs
          ? t.reconnectAfterMs
          : (n) => [1e3, 2e3, 5e3, 1e4][n - 1] || 1e4,
        this.encode = t?.encode ? t.encode : (n, s) => s(JSON.stringify(n)),
        this.decode = t?.decode
          ? t.decode
          : this.serializer.decode.bind(this.serializer),
        this.reconnectTimer = new p(() =>
          A(this, void 0, void 0, function* () {
            yield this.disconnect(), this.connect();
          }), this.reconnectAfterMs);
    }
    connect() {
      this.conn ||
        (this.conn = new this.transport(
          this.endPointURL(),
          [],
          null,
          this.headers,
        ),
          this.conn &&
          (this.conn.binaryType = "arraybuffer",
            this.conn.onopen = () => this._onConnOpen(),
            this.conn.onerror = (e) => this._onConnError(e),
            this.conn.onmessage = (e) => this.onConnMessage(e),
            this.conn.onclose = (e) => this._onConnClose(e)));
    }
    disconnect(e, t) {
      return new Promise((n, s) => {
        try {
          this.conn &&
          (this.conn.onclose = function () {},
            e ? this.conn.close(e, t || "") : this.conn.close(),
            this.conn = null,
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.reset()), n({ error: null, data: !0 });
        } catch (o) {
          n({ error: o, data: !1 });
        }
      });
    }
    log(e, t, n) {
      this.logger(e, t, n);
    }
    onOpen(e) {
      this.stateChangeCallbacks.open.push(e);
    }
    onClose(e) {
      this.stateChangeCallbacks.close.push(e);
    }
    onError(e) {
      this.stateChangeCallbacks.error.push(e);
    }
    onMessage(e) {
      this.stateChangeCallbacks.message.push(e);
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case v.connecting:
          return m.Connecting;
        case v.open:
          return m.Open;
        case v.closing:
          return m.Closing;
        default:
          return m.Closed;
      }
    }
    isConnected() {
      return this.connectionState() === m.Open;
    }
    remove(e) {
      this.channels = this.channels.filter((t) => t.joinRef() !== e.joinRef());
    }
    channel(e, t = {}) {
      let n = new b(e, t, this);
      return this.channels.push(n), n;
    }
    push(e) {
      let { topic: t, event: n, payload: s, ref: o } = e,
        r = () => {
          this.encode(e, (a) => {
            var d;
            (d = this.conn) === null || d === void 0 || d.send(a);
          });
        };
      this.log("push", `${t} ${n} (${o})`, s),
        this.isConnected() ? r() : this.sendBuffer.push(r);
    }
    onConnMessage(e) {
      this.decode(e.data, (t) => {
        let { topic: n, event: s, payload: o, ref: r } = t;
        (r && r === this.pendingHeartbeatRef || s === o?.type) &&
        (this.pendingHeartbeatRef = null),
          this.log(
            "receive",
            `${o.status || ""} ${n} ${s} ${r && "(" + r + ")" || ""}`,
            o,
          ),
          this.channels.filter((a) => a.isMember(n)).forEach((a) =>
            a.trigger(s, o, r)
          ),
          this.stateChangeCallbacks.message.forEach((a) => a(t));
      });
    }
    endPointURL() {
      return this._appendParams(
        this.endPoint,
        Object.assign({}, this.params, { vsn: L }),
      );
    }
    makeRef() {
      let e = this.ref + 1;
      return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
    }
    setAuth(e) {
      this.accessToken = e,
        this.channels.forEach((t) => {
          e && t.updateJoinPayload({ user_token: e }),
            t.joinedOnce && t.isJoined() &&
            t.push(l.access_token, { access_token: e });
        });
    }
    leaveOpenTopic(e) {
      let t = this.channels.find((n) =>
        n.topic === e && (n.isJoined() || n.isJoining())
      );
      t &&
        (this.log("transport", `leaving duplicate topic "${e}"`),
          t.unsubscribe());
    }
    _onConnOpen() {
      this.log("transport", `connected to ${this.endPointURL()}`),
        this._flushSendBuffer(),
        this.reconnectTimer.reset(),
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.heartbeatTimer = setInterval(
          () => this._sendHeartbeat(),
          this.heartbeatIntervalMs,
        ),
        this.stateChangeCallbacks.open.forEach((e) => e());
    }
    _onConnClose(e) {
      this.log("transport", "close", e),
        this._triggerChanError(),
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.reconnectTimer.scheduleTimeout(),
        this.stateChangeCallbacks.close.forEach((t) => t(e));
    }
    _onConnError(e) {
      this.log("transport", e.message),
        this._triggerChanError(),
        this.stateChangeCallbacks.error.forEach((t) => t(e));
    }
    _triggerChanError() {
      this.channels.forEach((e) => e.trigger(l.error));
    }
    _appendParams(e, t) {
      if (Object.keys(t).length === 0) return e;
      let n = e.match(/\?/) ? "&" : "?", s = new URLSearchParams(t);
      return `${e}${n}${s}`;
    }
    _flushSendBuffer() {
      this.isConnected() && this.sendBuffer.length > 0 &&
        (this.sendBuffer.forEach((e) => e()), this.sendBuffer = []);
    }
    _sendHeartbeat() {
      var e;
      if (this.isConnected()) {
        if (this.pendingHeartbeatRef) {
          this.pendingHeartbeatRef = null,
            this.log(
              "transport",
              "heartbeat timeout. Attempting to re-establish connection",
            ),
            (e = this.conn) === null || e === void 0 ||
            e.close(z, "hearbeat timeout");
          return;
        }
        this.pendingHeartbeatRef = this.makeRef(),
          this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef,
          }),
          this.setAuth(this.accessToken);
      }
    }
  };
export { B as Transformers, b as RealtimeSubscription, R as RealtimeClient };

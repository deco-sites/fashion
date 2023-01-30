/* esm.sh - esbuild bundle(imagekit-javascript@1.5.4) deno production */
function m(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
    ? m = function (r) {
      return typeof r;
    }
    : m = function (r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol &&
          r !== Symbol.prototype
        ? "symbol"
        : typeof r;
    },
    m(t);
}
function R(t, r) {
  if (!(t instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function v(t, r) {
  for (var e = 0; e < r.length; e++) {
    var n = r[e];
    n.enumerable = n.enumerable || !1,
      n.configurable = !0,
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function M(t, r, e) {
  return r && v(t.prototype, r), e && v(t, e), t;
}
function P(t, r, e) {
  return r in t
    ? Object.defineProperty(t, r, {
      value: e,
      enumerable: !0,
      configurable: !0,
      writable: !0,
    })
    : t[r] = e,
    t;
}
function A(t, r) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    r && (n = n.filter(function (a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function f(t) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? A(Object(e), !0).forEach(function (n) {
        P(t, n, e[n]);
      })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
      : A(Object(e)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
      });
  }
  return t;
}
var D = "1.5.4",
  s = {
    MANDATORY_INITIALIZATION_MISSING: {
      message: "Missing urlEndpoint during SDK initialization",
      help: "",
    },
    INVALID_TRANSFORMATION_POSITION: {
      message: "Invalid transformationPosition parameter",
      help: "",
    },
    PRIVATE_KEY_CLIENT_SIDE: {
      message: "privateKey should not be passed on the client side",
      help: "",
    },
    MISSING_UPLOAD_DATA: { message: "Missing data for upload", help: "" },
    MISSING_UPLOAD_FILE_PARAMETER: {
      message: "Missing file parameter for upload",
      help: "",
    },
    MISSING_UPLOAD_FILENAME_PARAMETER: {
      message: "Missing fileName parameter for upload",
      help: "",
    },
    MISSING_AUTHENTICATION_ENDPOINT: {
      message: "Missing authentication endpoint for upload",
      help: "",
    },
    MISSING_PUBLIC_KEY: { message: "Missing public key for upload", help: "" },
    AUTH_ENDPOINT_TIMEOUT: {
      message:
        "The authenticationEndpoint you provided timed out in 60 seconds",
      help: "",
    },
    AUTH_ENDPOINT_NETWORK_ERROR: {
      message: "Request to authenticationEndpoint failed due to network error",
      help: "",
    },
    AUTH_INVALID_RESPONSE: {
      message:
        "Invalid response from authenticationEndpoint. The SDK expects a JSON response with three fields i.e. signature, token and expire.",
      help: "",
    },
    UPLOAD_ENDPOINT_NETWORK_ERROR: {
      message:
        "Request to ImageKit upload endpoint failed due to network error",
      help: "",
    },
    INVALID_UPLOAD_OPTIONS: {
      message: "Invalid uploadOptions parameter",
      help: "",
    },
  };
function c(t, r, e) {
  typeof e == "function" && (t ? e(r, null) : e(null, r));
}
function L(t) {
  var r = {}, e = t.getAllResponseHeaders();
  return Object.keys(e).length && e.trim().split(/[\r\n]+/).map(function (n) {
    return n.split(/: /);
  }).forEach(function (n) {
    r[n[0].trim()] = n[1].trim();
  }),
    r;
}
var N = function (r, e) {
    var n = f({}, r), a = { statusCode: e.status, headers: L(e) };
    return Object.defineProperty(n, "$ResponseMetadata", {
      value: a,
      enumerable: !1,
      writable: !1,
    }),
      n;
  },
  b = function (r, e, n, a) {
    w(n.authenticationEndpoint).then(function (i) {
      e.append("signature", i.signature),
        e.append("expire", String(i.expire)),
        e.append("token", i.token),
        x(r, e).then(function (o) {
          return c(!1, o, a);
        }, function (o) {
          return c(!0, o, a);
        });
    }, function (i) {
      return c(!0, i, a);
    });
  },
  w = function (r) {
    return new Promise(function (e, n) {
      var a = new XMLHttpRequest();
      a.timeout = 6e4;
      var i = new URL(r);
      i.searchParams.set("t", Math.random().toString()),
        a.open("GET", i.toString()),
        a.ontimeout = function (o) {
          return n(s.AUTH_ENDPOINT_TIMEOUT);
        },
        a.onerror = function () {
          return n(s.AUTH_ENDPOINT_NETWORK_ERROR);
        },
        a.onload = function () {
          if (a.status === 200) {
            try {
              var o = JSON.parse(a.responseText),
                u = {
                  signature: o.signature,
                  expire: o.expire,
                  token: o.token,
                };
              return !u.signature || !u.expire || !u.token
                ? n(s.AUTH_INVALID_RESPONSE)
                : e(u);
            } catch {
              return n(s.AUTH_INVALID_RESPONSE);
            }
          } else return n(s.AUTH_INVALID_RESPONSE);
        },
        a.send();
    });
  },
  x = function (r, e) {
    return new Promise(function (n, a) {
      r.open("POST", "https://upload.imagekit.io/api/v1/files/upload"),
        r.onerror = function (i) {
          return a(s.UPLOAD_ENDPOINT_NETWORK_ERROR);
        },
        r.onload = function () {
          if (r.status === 200) {
            try {
              var i = JSON.parse(r.responseText), o = N(i, r);
              return n(o);
            } catch (l) {
              return a(l);
            }
          } else {try {
              var i = JSON.parse(r.responseText), u = N(i, r);
              return a(u);
            } catch (l) {
              return a(l);
            }}
        },
        r.send(e);
    });
  },
  U = function (r, e, n, a) {
    if (!e.file) {
      c(!0, s.MISSING_UPLOAD_FILE_PARAMETER, a);
      return;
    }
    if (!e.fileName) {
      c(!0, s.MISSING_UPLOAD_FILENAME_PARAMETER, a);
      return;
    }
    if (!n.authenticationEndpoint) {
      c(!0, s.MISSING_AUTHENTICATION_ENDPOINT, a);
      return;
    }
    if (!n.publicKey) {
      c(!0, s.MISSING_PUBLIC_KEY, a);
      return;
    }
    var i = new FormData(), o;
    for (o in e) {
      o &&
        (o === "file" && typeof e.file != "string"
          ? i.append("file", e.file, String(e.fileName))
          : o === "tags" && Array.isArray(e.tags)
          ? i.append("tags", e.tags.join(","))
          : o === "responseFields" && Array.isArray(e.responseFields)
          ? i.append("responseFields", e.responseFields.join(","))
          : o === "extensions" && Array.isArray(e.extensions)
          ? i.append("extensions", JSON.stringify(e.extensions))
          : o === "customMetadata" && m(e.customMetadata) === "object" &&
              !Array.isArray(e.customMetadata) && e.customMetadata !== null
          ? i.append("customMetadata", JSON.stringify(e.customMetadata))
          : e[o] !== void 0 && i.append(o, String(e[o])));
    }
    i.append("publicKey", n.publicKey),
      b(
        r,
        i,
        f(f({}, n), {}, { authenticationEndpoint: n.authenticationEndpoint }),
        a,
      );
  },
  E = {
    width: "w",
    height: "h",
    aspectRatio: "ar",
    quality: "q",
    crop: "c",
    cropMode: "cm",
    focus: "fo",
    x: "x",
    y: "y",
    format: "f",
    radius: "r",
    background: "bg",
    border: "b",
    rotation: "rt",
    rotate: "rt",
    blur: "bl",
    named: "n",
    overlayImage: "oi",
    overlayImageAspectRatio: "oiar",
    overlayImageBackground: "oibg",
    overlayImageBorder: "oib",
    overlayImageDPR: "oidpr",
    overlayImageQuality: "oiq",
    overlayImageCropping: "oic",
    overlayImageTrim: "oit",
    overlayX: "ox",
    overlayY: "oy",
    overlayFocus: "ofo",
    overlayHeight: "oh",
    overlayWidth: "ow",
    overlayText: "ot",
    overlayTextFontSize: "ots",
    overlayTextFontFamily: "otf",
    overlayTextColor: "otc",
    overlayTextTransparency: "oa",
    overlayAlpha: "oa",
    overlayTextTypography: "ott",
    overlayBackground: "obg",
    overlayTextEncoded: "ote",
    overlayTextWidth: "otw",
    overlayTextBackground: "otbg",
    overlayTextPadding: "otp",
    overlayTextInnerAlignment: "otia",
    overlayRadius: "or",
    progressive: "pr",
    lossless: "lo",
    trim: "t",
    metadata: "md",
    colorProfile: "cp",
    defaultImage: "di",
    dpr: "dpr",
    effectSharpen: "e-sharpen",
    effectUSM: "e-usm",
    effectContrast: "e-contrast",
    effectGray: "e-grayscale",
    original: "orig",
    raw: "raw",
  },
  O = "path",
  _ = "query",
  K = [O, _],
  F = ":",
  C = ",",
  V = "-",
  p = {
    getDefault: function () {
      return O;
    },
    addAsQueryParameter: function (r) {
      return r.transformationPosition === _;
    },
    validParameters: function (r) {
      return typeof r.transformationPosition > "u"
        ? !1
        : K.indexOf(r.transformationPosition) != -1;
    },
    getTransformKey: function (r) {
      return r && (E[r] || E[r.toLowerCase()]) || "";
    },
    getChainTransformDelimiter: function () {
      return F;
    },
    getTransformDelimiter: function () {
      return C;
    },
    getTransformKeyValueDelimiter: function () {
      return V;
    },
  },
  S = "tr";
function G(t) {
  return typeof t == "string" && t[t.length - 1] == "/" &&
    (t = t.substring(0, t.length - 1)),
    t;
}
function q(t) {
  return typeof t == "string" && t[0] == "/" && (t = t.slice(1)), t;
}
function I(t, r) {
  var e = r || "/", n = new RegExp(e + "{1,}", "g");
  return t.join(e).replace(n, e);
}
var H = function (r) {
  if (!r.path && !r.src) return "";
  var e, n, a;
  try {
    r.path
      ? (a = new URL(r.urlEndpoint).pathname,
        e = new URL(I([r.urlEndpoint.replace(a, ""), r.path])))
      : (e = new URL(r.src), n = !0);
  } catch (u) {
    return console.error(u), "";
  }
  for (var i in r.queryParameters) {
    e.searchParams.append(i, String(r.queryParameters[i]));
  }
  var o = B(r.transformation);
  return o && o.length &&
    (p.addAsQueryParameter(r) || n
      ? e.searchParams.append(S, o)
      : e.pathname = I([S + p.getChainTransformDelimiter() + o, e.pathname])),
    a ? e.pathname = I([a, e.pathname]) : e.pathname = I([e.pathname]),
    e.href;
};
function B(t) {
  if (!Array.isArray(t)) return "";
  for (var r = [], e = 0, n = t.length; e < n; e++) {
    var a = [];
    for (var i in t[e]) {
      var o = p.getTransformKey(i);
      if (o || (o = i), t[e][i] === "-") a.push(o);
      else if (i === "raw") a.push(t[e][i]);
      else {
        var u = t[e][i];
        (o === "oi" || o === "di") &&
        (u = G(q(u || "")), u = u.replace(/\//g, "@@")),
          a.push([o, u].join(p.getTransformKeyValueDelimiter()));
      }
    }
    r.push(a.join(p.getTransformDelimiter()));
  }
  return r.join(p.getChainTransformDelimiter());
}
var Y = function (r, e) {
  return H(f(f({}, e), r));
};
function j(t) {
  return t.urlEndpoint;
}
var J = function (r, e) {
    return function () {
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) {
        a[i] = arguments[i];
      }
      if (a.length === e.length && typeof a[a.length - 1] < "u") {
        if (typeof a[a.length - 1] != "function") {
          throw new Error("Callback must be a function.");
        }
        e.call.apply(e, [r].concat(a));
      } else {return new Promise(function (o, u) {
          var l = function (y) {
            if (y) return u(y);
            for (
              var h = arguments.length, g = new Array(h > 1 ? h - 1 : 0), d = 1;
              d < h;
              d++
            ) g[d - 1] = arguments[d];
            o(g.length > 1 ? g : g[0]);
          };
          a.pop(), a.push(l), e.call.apply(e, [r].concat(a));
        });}
    };
  },
  W = function () {
    function t(r) {
      if (
        R(this, t),
          P(this, "options", {
            sdkVersion: "javascript-".concat(D),
            publicKey: "",
            urlEndpoint: "",
            transformationPosition: p.getDefault(),
          }),
          this.options = f(f({}, this.options), r || {}),
          !j(this.options)
      ) throw s.MANDATORY_INITIALIZATION_MISSING;
      if (!p.validParameters(this.options)) {
        throw s
          .INVALID_TRANSFORMATION_POSITION;
      }
    }
    return M(t, [{
      key: "url",
      value: function (e) {
        return Y(e, this.options);
      },
    }, {
      key: "upload",
      value: function (e, n, a) {
        var i;
        if (
          typeof n == "function" ? i = n : a = n || {}, !e || m(e) !== "object"
        ) return c(!0, s.INVALID_UPLOAD_OPTIONS, i);
        var o = f(f({}, this.options), a), u = e || {}, l = u.xhr;
        delete e.xhr;
        var T = l || new XMLHttpRequest();
        return J(this, U)(T, e, o, i);
      },
    }]),
      t;
  }(),
  Q = W;
export { Q as default };

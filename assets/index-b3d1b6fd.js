function Xd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function qs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var bs = { exports: {} },
  so = {},
  ec = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gr = Symbol.for("react.element"),
  Gd = Symbol.for("react.portal"),
  Jd = Symbol.for("react.fragment"),
  qd = Symbol.for("react.strict_mode"),
  bd = Symbol.for("react.profiler"),
  e0 = Symbol.for("react.provider"),
  t0 = Symbol.for("react.context"),
  n0 = Symbol.for("react.forward_ref"),
  r0 = Symbol.for("react.suspense"),
  l0 = Symbol.for("react.memo"),
  o0 = Symbol.for("react.lazy"),
  vu = Symbol.iterator;
function i0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vu && e[vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var tc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nc = Object.assign,
  rc = {};
function er(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rc),
    (this.updater = n || tc);
}
er.prototype.isReactComponent = {};
er.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
er.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lc() {}
lc.prototype = er.prototype;
function ua(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rc),
    (this.updater = n || tc);
}
var sa = (ua.prototype = new lc());
sa.constructor = ua;
nc(sa, er.prototype);
sa.isPureReactComponent = !0;
var gu = Array.isArray,
  oc = Object.prototype.hasOwnProperty,
  ca = { current: null },
  ic = { key: !0, ref: !0, __self: !0, __source: !0 };
function ac(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      oc.call(t, r) && !ic.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: Gr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ca.current,
  };
}
function a0(e, t) {
  return {
    $$typeof: Gr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function fa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gr;
}
function u0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var yu = /\/+/g;
function Ao(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? u0("" + e.key)
    : t.toString(36);
}
function Cl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gr:
          case Gd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Ao(i, 0) : r),
      gu(l)
        ? ((n = ""),
          e != null && (n = e.replace(yu, "$&/") + "/"),
          Cl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (fa(l) &&
            (l = a0(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(yu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), gu(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + Ao(o, a);
      i += Cl(o, t, n, u, l);
    }
  else if (((u = i0(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Ao(o, a++)), (i += Cl(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function il(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Cl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function s0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Te = { current: null },
  Pl = { transition: null },
  c0 = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: Pl,
    ReactCurrentOwner: ca,
  };
B.Children = {
  map: il,
  forEach: function (e, t, n) {
    il(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      il(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      il(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!fa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = er;
B.Fragment = Jd;
B.Profiler = bd;
B.PureComponent = ua;
B.StrictMode = qd;
B.Suspense = r0;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = nc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ca.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      oc.call(t, u) &&
        !ic.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: Gr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: t0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: e0, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = ac;
B.createFactory = function (e) {
  var t = ac.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: n0, render: e };
};
B.isValidElement = fa;
B.lazy = function (e) {
  return { $$typeof: o0, _payload: { _status: -1, _result: e }, _init: s0 };
};
B.memo = function (e, t) {
  return { $$typeof: l0, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = Pl.transition;
  Pl.transition = {};
  try {
    e();
  } finally {
    Pl.transition = t;
  }
};
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Te.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
B.useId = function () {
  return Te.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Te.current.useRef(e);
};
B.useState = function (e) {
  return Te.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Te.current.useTransition();
};
B.version = "18.2.0";
ec.exports = B;
var D = ec.exports;
const j = qs(D),
  f0 = Xd({ __proto__: null, default: j }, [D]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var d0 = D,
  p0 = Symbol.for("react.element"),
  h0 = Symbol.for("react.fragment"),
  m0 = Object.prototype.hasOwnProperty,
  v0 = d0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  g0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function uc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) m0.call(t, r) && !g0.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: p0,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: v0.current,
  };
}
so.Fragment = h0;
so.jsx = uc;
so.jsxs = uc;
bs.exports = so;
var z = bs.exports,
  sc = { exports: {} },
  We = {},
  cc = { exports: {} },
  fc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, F) {
    var H = M.length;
    M.push(F);
    e: for (; 0 < H; ) {
      var le = (H - 1) >>> 1,
        de = M[le];
      if (0 < l(de, F)) (M[le] = F), (M[H] = de), (H = le);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var F = M[0],
      H = M.pop();
    if (H !== F) {
      M[0] = H;
      e: for (var le = 0, de = M.length, Sn = de >>> 1; le < Sn; ) {
        var q = 2 * (le + 1) - 1,
          vt = M[q],
          ct = q + 1,
          En = M[ct];
        if (0 > l(vt, H))
          ct < de && 0 > l(En, vt)
            ? ((M[le] = En), (M[ct] = H), (le = ct))
            : ((M[le] = vt), (M[q] = H), (le = q));
        else if (ct < de && 0 > l(En, H)) (M[le] = En), (M[ct] = H), (le = ct);
        else break e;
      }
    }
    return F;
  }
  function l(M, F) {
    var H = M.sortIndex - F.sortIndex;
    return H !== 0 ? H : M.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    s = [],
    p = 1,
    v = null,
    m = 3,
    E = !1,
    w = !1,
    S = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(M) {
    for (var F = n(s); F !== null; ) {
      if (F.callback === null) r(s);
      else if (F.startTime <= M)
        r(s), (F.sortIndex = F.expirationTime), t(u, F);
      else break;
      F = n(s);
    }
  }
  function c(M) {
    if (((S = !1), h(M), !w))
      if (n(u) !== null) (w = !0), Ue(x);
      else {
        var F = n(s);
        F !== null && st(c, F.startTime - M);
      }
  }
  function x(M, F) {
    (w = !1), S && ((S = !1), d(N), (N = -1)), (E = !0);
    var H = m;
    try {
      for (
        h(F), v = n(u);
        v !== null && (!(v.expirationTime > F) || (M && !ye()));

      ) {
        var le = v.callback;
        if (typeof le == "function") {
          (v.callback = null), (m = v.priorityLevel);
          var de = le(v.expirationTime <= F);
          (F = e.unstable_now()),
            typeof de == "function" ? (v.callback = de) : v === n(u) && r(u),
            h(F);
        } else r(u);
        v = n(u);
      }
      if (v !== null) var Sn = !0;
      else {
        var q = n(s);
        q !== null && st(c, q.startTime - F), (Sn = !1);
      }
      return Sn;
    } finally {
      (v = null), (m = H), (E = !1);
    }
  }
  var R = !1,
    P = null,
    N = -1,
    W = 5,
    I = -1;
  function ye() {
    return !(e.unstable_now() - I < W);
  }
  function J() {
    if (P !== null) {
      var M = e.unstable_now();
      I = M;
      var F = !0;
      try {
        F = P(!0, M);
      } finally {
        F ? ut() : ((R = !1), (P = null));
      }
    } else R = !1;
  }
  var ut;
  if (typeof f == "function")
    ut = function () {
      f(J);
    };
  else if (typeof MessageChannel < "u") {
    var Nt = new MessageChannel(),
      jt = Nt.port2;
    (Nt.port1.onmessage = J),
      (ut = function () {
        jt.postMessage(null);
      });
  } else
    ut = function () {
      _(J, 0);
    };
  function Ue(M) {
    (P = M), R || ((R = !0), ut());
  }
  function st(M, F) {
    N = _(function () {
      M(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || E || ((w = !0), Ue(x));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (M) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = m;
      }
      var H = m;
      m = F;
      try {
        return M();
      } finally {
        m = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, F) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var H = m;
      m = M;
      try {
        return F();
      } finally {
        m = H;
      }
    }),
    (e.unstable_scheduleCallback = function (M, F, H) {
      var le = e.unstable_now();
      switch (
        (typeof H == "object" && H !== null
          ? ((H = H.delay), (H = typeof H == "number" && 0 < H ? le + H : le))
          : (H = le),
        M)
      ) {
        case 1:
          var de = -1;
          break;
        case 2:
          de = 250;
          break;
        case 5:
          de = 1073741823;
          break;
        case 4:
          de = 1e4;
          break;
        default:
          de = 5e3;
      }
      return (
        (de = H + de),
        (M = {
          id: p++,
          callback: F,
          priorityLevel: M,
          startTime: H,
          expirationTime: de,
          sortIndex: -1,
        }),
        H > le
          ? ((M.sortIndex = H),
            t(s, M),
            n(u) === null &&
              M === n(s) &&
              (S ? (d(N), (N = -1)) : (S = !0), st(c, H - le)))
          : ((M.sortIndex = de), t(u, M), w || E || ((w = !0), Ue(x))),
        M
      );
    }),
    (e.unstable_shouldYield = ye),
    (e.unstable_wrapCallback = function (M) {
      var F = m;
      return function () {
        var H = m;
        m = F;
        try {
          return M.apply(this, arguments);
        } finally {
          m = H;
        }
      };
    });
})(fc);
cc.exports = fc;
var y0 = cc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dc = D,
  Be = y0;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var pc = new Set(),
  Tr = {};
function yn(e, t) {
  Qn(e, t), Qn(e + "Capture", t);
}
function Qn(e, t) {
  for (Tr[e] = t, e = 0; e < t.length; e++) pc.add(t[e]);
}
var Ct = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ci = Object.prototype.hasOwnProperty,
  w0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wu = {},
  Su = {};
function S0(e) {
  return ci.call(Su, e)
    ? !0
    : ci.call(wu, e)
    ? !1
    : w0.test(e)
    ? (Su[e] = !0)
    : ((wu[e] = !0), !1);
}
function E0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function k0(e, t, n, r) {
  if (t === null || typeof t > "u" || E0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function De(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Pe[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Pe[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Pe[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Pe[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Pe[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Pe[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Pe[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Pe[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Pe[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var da = /[\-:]([a-z])/g;
function pa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(da, pa);
    Pe[t] = new De(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(da, pa);
    Pe[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(da, pa);
  Pe[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Pe[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new De(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Pe[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ha(e, t, n, r) {
  var l = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (k0(t, n, l, r) && (n = null),
    r || l === null
      ? S0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Mt = dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  al = Symbol.for("react.element"),
  Pn = Symbol.for("react.portal"),
  Rn = Symbol.for("react.fragment"),
  ma = Symbol.for("react.strict_mode"),
  fi = Symbol.for("react.profiler"),
  hc = Symbol.for("react.provider"),
  mc = Symbol.for("react.context"),
  va = Symbol.for("react.forward_ref"),
  di = Symbol.for("react.suspense"),
  pi = Symbol.for("react.suspense_list"),
  ga = Symbol.for("react.memo"),
  At = Symbol.for("react.lazy"),
  vc = Symbol.for("react.offscreen"),
  Eu = Symbol.iterator;
function ir(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Eu && e[Eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ae = Object.assign,
  Fo;
function yr(e) {
  if (Fo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Fo = (t && t[1]) || "";
    }
  return (
    `
` +
    Fo +
    e
  );
}
var Io = !1;
function Uo(e, t) {
  if (!e || Io) return "";
  Io = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Io = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? yr(e) : "";
}
function x0(e) {
  switch (e.tag) {
    case 5:
      return yr(e.type);
    case 16:
      return yr("Lazy");
    case 13:
      return yr("Suspense");
    case 19:
      return yr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Uo(e.type, !1)), e;
    case 11:
      return (e = Uo(e.type.render, !1)), e;
    case 1:
      return (e = Uo(e.type, !0)), e;
    default:
      return "";
  }
}
function hi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Rn:
      return "Fragment";
    case Pn:
      return "Portal";
    case fi:
      return "Profiler";
    case ma:
      return "StrictMode";
    case di:
      return "Suspense";
    case pi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case mc:
        return (e.displayName || "Context") + ".Consumer";
      case hc:
        return (e._context.displayName || "Context") + ".Provider";
      case va:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ga:
        return (
          (t = e.displayName || null), t !== null ? t : hi(e.type) || "Memo"
        );
      case At:
        (t = e._payload), (e = e._init);
        try {
          return hi(e(t));
        } catch {}
    }
  return null;
}
function C0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return hi(t);
    case 8:
      return t === ma ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Gt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function gc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function P0(e) {
  var t = gc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ul(e) {
  e._valueTracker || (e._valueTracker = P0(e));
}
function yc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = gc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Al(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function mi(e, t) {
  var n = t.checked;
  return ae({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ku(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function wc(e, t) {
  (t = t.checked), t != null && ha(e, "checked", t, !1);
}
function vi(e, t) {
  wc(e, t);
  var n = Gt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? gi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && gi(e, t.type, Gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function xu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function gi(e, t, n) {
  (t !== "number" || Al(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wr = Array.isArray;
function Un(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Gt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function yi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return ae({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Cu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (wr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Gt(n) };
}
function Sc(e, t) {
  var n = Gt(t.value),
    r = Gt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Pu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ec(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ec(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var sl,
  kc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        sl = sl || document.createElement("div"),
          sl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = sl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var kr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  R0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(kr).forEach(function (e) {
  R0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kr[t] = kr[e]);
  });
});
function xc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (kr.hasOwnProperty(e) && kr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Cc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = xc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var _0 = ae(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Si(e, t) {
  if (t) {
    if (_0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Ei(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ki = null;
function ya(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var xi = null,
  $n = null,
  Vn = null;
function Ru(e) {
  if ((e = br(e))) {
    if (typeof xi != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = mo(t)), xi(e.stateNode, e.type, t));
  }
}
function Pc(e) {
  $n ? (Vn ? Vn.push(e) : (Vn = [e])) : ($n = e);
}
function Rc() {
  if ($n) {
    var e = $n,
      t = Vn;
    if (((Vn = $n = null), Ru(e), t)) for (e = 0; e < t.length; e++) Ru(t[e]);
  }
}
function _c(e, t) {
  return e(t);
}
function Mc() {}
var $o = !1;
function Lc(e, t, n) {
  if ($o) return e(t, n);
  $o = !0;
  try {
    return _c(e, t, n);
  } finally {
    ($o = !1), ($n !== null || Vn !== null) && (Mc(), Rc());
  }
}
function zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = mo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Ci = !1;
if (Ct)
  try {
    var ar = {};
    Object.defineProperty(ar, "passive", {
      get: function () {
        Ci = !0;
      },
    }),
      window.addEventListener("test", ar, ar),
      window.removeEventListener("test", ar, ar);
  } catch {
    Ci = !1;
  }
function M0(e, t, n, r, l, o, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (p) {
    this.onError(p);
  }
}
var xr = !1,
  Fl = null,
  Il = !1,
  Pi = null,
  L0 = {
    onError: function (e) {
      (xr = !0), (Fl = e);
    },
  };
function N0(e, t, n, r, l, o, i, a, u) {
  (xr = !1), (Fl = null), M0.apply(L0, arguments);
}
function j0(e, t, n, r, l, o, i, a, u) {
  if ((N0.apply(this, arguments), xr)) {
    if (xr) {
      var s = Fl;
      (xr = !1), (Fl = null);
    } else throw Error(C(198));
    Il || ((Il = !0), (Pi = s));
  }
}
function wn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Nc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function _u(e) {
  if (wn(e) !== e) throw Error(C(188));
}
function T0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = wn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return _u(l), e;
        if (o === r) return _u(l), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function jc(e) {
  return (e = T0(e)), e !== null ? Tc(e) : null;
}
function Tc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Tc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Dc = Be.unstable_scheduleCallback,
  Mu = Be.unstable_cancelCallback,
  D0 = Be.unstable_shouldYield,
  z0 = Be.unstable_requestPaint,
  fe = Be.unstable_now,
  O0 = Be.unstable_getCurrentPriorityLevel,
  wa = Be.unstable_ImmediatePriority,
  zc = Be.unstable_UserBlockingPriority,
  Ul = Be.unstable_NormalPriority,
  A0 = Be.unstable_LowPriority,
  Oc = Be.unstable_IdlePriority,
  co = null,
  ht = null;
function F0(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function")
    try {
      ht.onCommitFiberRoot(co, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ot = Math.clz32 ? Math.clz32 : $0,
  I0 = Math.log,
  U0 = Math.LN2;
function $0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((I0(e) / U0) | 0)) | 0;
}
var cl = 64,
  fl = 4194304;
function Sr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function $l(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Sr(a)) : ((o &= i), o !== 0 && (r = Sr(o)));
  } else (i = n & ~l), i !== 0 ? (r = Sr(i)) : o !== 0 && (r = Sr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ot(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function V0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function H0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - ot(o),
      a = 1 << i,
      u = l[i];
    u === -1
      ? (!(a & n) || a & r) && (l[i] = V0(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Ri(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ac() {
  var e = cl;
  return (cl <<= 1), !(cl & 4194240) && (cl = 64), e;
}
function Vo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ot(t)),
    (e[t] = n);
}
function B0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ot(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Sa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ot(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var K = 0;
function Fc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ic,
  Ea,
  Uc,
  $c,
  Vc,
  _i = !1,
  dl = [],
  Ht = null,
  Bt = null,
  Wt = null,
  Or = new Map(),
  Ar = new Map(),
  It = [],
  W0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Lu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ht = null;
      break;
    case "dragenter":
    case "dragleave":
      Bt = null;
      break;
    case "mouseover":
    case "mouseout":
      Wt = null;
      break;
    case "pointerover":
    case "pointerout":
      Or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ar.delete(t.pointerId);
  }
}
function ur(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = br(t)), t !== null && Ea(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Z0(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Ht = ur(Ht, e, t, n, r, l)), !0;
    case "dragenter":
      return (Bt = ur(Bt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Wt = ur(Wt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Or.set(o, ur(Or.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Ar.set(o, ur(Ar.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Hc(e) {
  var t = on(e.target);
  if (t !== null) {
    var n = wn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Nc(n)), t !== null)) {
          (e.blockedOn = t),
            Vc(e.priority, function () {
              Uc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Rl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ki = r), n.target.dispatchEvent(r), (ki = null);
    } else return (t = br(n)), t !== null && Ea(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Nu(e, t, n) {
  Rl(e) && n.delete(t);
}
function Q0() {
  (_i = !1),
    Ht !== null && Rl(Ht) && (Ht = null),
    Bt !== null && Rl(Bt) && (Bt = null),
    Wt !== null && Rl(Wt) && (Wt = null),
    Or.forEach(Nu),
    Ar.forEach(Nu);
}
function sr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _i ||
      ((_i = !0),
      Be.unstable_scheduleCallback(Be.unstable_NormalPriority, Q0)));
}
function Fr(e) {
  function t(l) {
    return sr(l, e);
  }
  if (0 < dl.length) {
    sr(dl[0], e);
    for (var n = 1; n < dl.length; n++) {
      var r = dl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ht !== null && sr(Ht, e),
      Bt !== null && sr(Bt, e),
      Wt !== null && sr(Wt, e),
      Or.forEach(t),
      Ar.forEach(t),
      n = 0;
    n < It.length;
    n++
  )
    (r = It[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < It.length && ((n = It[0]), n.blockedOn === null); )
    Hc(n), n.blockedOn === null && It.shift();
}
var Hn = Mt.ReactCurrentBatchConfig,
  Vl = !0;
function K0(e, t, n, r) {
  var l = K,
    o = Hn.transition;
  Hn.transition = null;
  try {
    (K = 1), ka(e, t, n, r);
  } finally {
    (K = l), (Hn.transition = o);
  }
}
function Y0(e, t, n, r) {
  var l = K,
    o = Hn.transition;
  Hn.transition = null;
  try {
    (K = 4), ka(e, t, n, r);
  } finally {
    (K = l), (Hn.transition = o);
  }
}
function ka(e, t, n, r) {
  if (Vl) {
    var l = Mi(e, t, n, r);
    if (l === null) Jo(e, t, r, Hl, n), Lu(e, r);
    else if (Z0(l, e, t, n, r)) r.stopPropagation();
    else if ((Lu(e, r), t & 4 && -1 < W0.indexOf(e))) {
      for (; l !== null; ) {
        var o = br(l);
        if (
          (o !== null && Ic(o),
          (o = Mi(e, t, n, r)),
          o === null && Jo(e, t, r, Hl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Jo(e, t, r, null, n);
  }
}
var Hl = null;
function Mi(e, t, n, r) {
  if (((Hl = null), (e = ya(r)), (e = on(e)), e !== null))
    if (((t = wn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Nc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Hl = e), null;
}
function Bc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (O0()) {
        case wa:
          return 1;
        case zc:
          return 4;
        case Ul:
        case A0:
          return 16;
        case Oc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $t = null,
  xa = null,
  _l = null;
function Wc() {
  if (_l) return _l;
  var e,
    t = xa,
    n = t.length,
    r,
    l = "value" in $t ? $t.value : $t.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (_l = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ml(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function pl() {
  return !0;
}
function ju() {
  return !1;
}
function Ze(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? pl
        : ju),
      (this.isPropagationStopped = ju),
      this
    );
  }
  return (
    ae(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = pl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = pl));
      },
      persist: function () {},
      isPersistent: pl,
    }),
    t
  );
}
var tr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ca = Ze(tr),
  qr = ae({}, tr, { view: 0, detail: 0 }),
  X0 = Ze(qr),
  Ho,
  Bo,
  cr,
  fo = ae({}, qr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pa,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== cr &&
            (cr && e.type === "mousemove"
              ? ((Ho = e.screenX - cr.screenX), (Bo = e.screenY - cr.screenY))
              : (Bo = Ho = 0),
            (cr = e)),
          Ho);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Bo;
    },
  }),
  Tu = Ze(fo),
  G0 = ae({}, fo, { dataTransfer: 0 }),
  J0 = Ze(G0),
  q0 = ae({}, qr, { relatedTarget: 0 }),
  Wo = Ze(q0),
  b0 = ae({}, tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ep = Ze(b0),
  tp = ae({}, tr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  np = Ze(tp),
  rp = ae({}, tr, { data: 0 }),
  Du = Ze(rp),
  lp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  op = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ip = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ap(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ip[e]) ? !!t[e] : !1;
}
function Pa() {
  return ap;
}
var up = ae({}, qr, {
    key: function (e) {
      if (e.key) {
        var t = lp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ml(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? op[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pa,
    charCode: function (e) {
      return e.type === "keypress" ? Ml(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ml(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  sp = Ze(up),
  cp = ae({}, fo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  zu = Ze(cp),
  fp = ae({}, qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pa,
  }),
  dp = Ze(fp),
  pp = ae({}, tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hp = Ze(pp),
  mp = ae({}, fo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  vp = Ze(mp),
  gp = [9, 13, 27, 32],
  Ra = Ct && "CompositionEvent" in window,
  Cr = null;
Ct && "documentMode" in document && (Cr = document.documentMode);
var yp = Ct && "TextEvent" in window && !Cr,
  Zc = Ct && (!Ra || (Cr && 8 < Cr && 11 >= Cr)),
  Ou = String.fromCharCode(32),
  Au = !1;
function Qc(e, t) {
  switch (e) {
    case "keyup":
      return gp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Kc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var _n = !1;
function wp(e, t) {
  switch (e) {
    case "compositionend":
      return Kc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Au = !0), Ou);
    case "textInput":
      return (e = t.data), e === Ou && Au ? null : e;
    default:
      return null;
  }
}
function Sp(e, t) {
  if (_n)
    return e === "compositionend" || (!Ra && Qc(e, t))
      ? ((e = Wc()), (_l = xa = $t = null), (_n = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Zc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ep = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ep[e.type] : t === "textarea";
}
function Yc(e, t, n, r) {
  Pc(r),
    (t = Bl(t, "onChange")),
    0 < t.length &&
      ((n = new Ca("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Pr = null,
  Ir = null;
function kp(e) {
  of(e, 0);
}
function po(e) {
  var t = Nn(e);
  if (yc(t)) return e;
}
function xp(e, t) {
  if (e === "change") return t;
}
var Xc = !1;
if (Ct) {
  var Zo;
  if (Ct) {
    var Qo = "oninput" in document;
    if (!Qo) {
      var Iu = document.createElement("div");
      Iu.setAttribute("oninput", "return;"),
        (Qo = typeof Iu.oninput == "function");
    }
    Zo = Qo;
  } else Zo = !1;
  Xc = Zo && (!document.documentMode || 9 < document.documentMode);
}
function Uu() {
  Pr && (Pr.detachEvent("onpropertychange", Gc), (Ir = Pr = null));
}
function Gc(e) {
  if (e.propertyName === "value" && po(Ir)) {
    var t = [];
    Yc(t, Ir, e, ya(e)), Lc(kp, t);
  }
}
function Cp(e, t, n) {
  e === "focusin"
    ? (Uu(), (Pr = t), (Ir = n), Pr.attachEvent("onpropertychange", Gc))
    : e === "focusout" && Uu();
}
function Pp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return po(Ir);
}
function Rp(e, t) {
  if (e === "click") return po(t);
}
function _p(e, t) {
  if (e === "input" || e === "change") return po(t);
}
function Mp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var at = typeof Object.is == "function" ? Object.is : Mp;
function Ur(e, t) {
  if (at(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ci.call(t, l) || !at(e[l], t[l])) return !1;
  }
  return !0;
}
function $u(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vu(e, t) {
  var n = $u(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = $u(n);
  }
}
function Jc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Jc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function qc() {
  for (var e = window, t = Al(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Al(e.document);
  }
  return t;
}
function _a(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Lp(e) {
  var t = qc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Jc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && _a(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Vu(n, o));
        var i = Vu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Np = Ct && "documentMode" in document && 11 >= document.documentMode,
  Mn = null,
  Li = null,
  Rr = null,
  Ni = !1;
function Hu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ni ||
    Mn == null ||
    Mn !== Al(r) ||
    ((r = Mn),
    "selectionStart" in r && _a(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Rr && Ur(Rr, r)) ||
      ((Rr = r),
      (r = Bl(Li, "onSelect")),
      0 < r.length &&
        ((t = new Ca("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mn))));
}
function hl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ln = {
    animationend: hl("Animation", "AnimationEnd"),
    animationiteration: hl("Animation", "AnimationIteration"),
    animationstart: hl("Animation", "AnimationStart"),
    transitionend: hl("Transition", "TransitionEnd"),
  },
  Ko = {},
  bc = {};
Ct &&
  ((bc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ln.animationend.animation,
    delete Ln.animationiteration.animation,
    delete Ln.animationstart.animation),
  "TransitionEvent" in window || delete Ln.transitionend.transition);
function ho(e) {
  if (Ko[e]) return Ko[e];
  if (!Ln[e]) return e;
  var t = Ln[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in bc) return (Ko[e] = t[n]);
  return e;
}
var ef = ho("animationend"),
  tf = ho("animationiteration"),
  nf = ho("animationstart"),
  rf = ho("transitionend"),
  lf = new Map(),
  Bu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function qt(e, t) {
  lf.set(e, t), yn(t, [e]);
}
for (var Yo = 0; Yo < Bu.length; Yo++) {
  var Xo = Bu[Yo],
    jp = Xo.toLowerCase(),
    Tp = Xo[0].toUpperCase() + Xo.slice(1);
  qt(jp, "on" + Tp);
}
qt(ef, "onAnimationEnd");
qt(tf, "onAnimationIteration");
qt(nf, "onAnimationStart");
qt("dblclick", "onDoubleClick");
qt("focusin", "onFocus");
qt("focusout", "onBlur");
qt(rf, "onTransitionEnd");
Qn("onMouseEnter", ["mouseout", "mouseover"]);
Qn("onMouseLeave", ["mouseout", "mouseover"]);
Qn("onPointerEnter", ["pointerout", "pointerover"]);
Qn("onPointerLeave", ["pointerout", "pointerover"]);
yn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
yn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
yn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
yn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Er =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Dp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));
function Wu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), j0(r, t, void 0, e), (e.currentTarget = null);
}
function of(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          Wu(l, a, s), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          Wu(l, a, s), (o = u);
        }
    }
  }
  if (Il) throw ((e = Pi), (Il = !1), (Pi = null), e);
}
function ee(e, t) {
  var n = t[Oi];
  n === void 0 && (n = t[Oi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (af(t, e, 2, !1), n.add(r));
}
function Go(e, t, n) {
  var r = 0;
  t && (r |= 4), af(n, e, r, t);
}
var ml = "_reactListening" + Math.random().toString(36).slice(2);
function $r(e) {
  if (!e[ml]) {
    (e[ml] = !0),
      pc.forEach(function (n) {
        n !== "selectionchange" && (Dp.has(n) || Go(n, !1, e), Go(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ml] || ((t[ml] = !0), Go("selectionchange", !1, t));
  }
}
function af(e, t, n, r) {
  switch (Bc(t)) {
    case 1:
      var l = K0;
      break;
    case 4:
      l = Y0;
      break;
    default:
      l = ka;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ci ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Jo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = on(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Lc(function () {
    var s = o,
      p = ya(n),
      v = [];
    e: {
      var m = lf.get(e);
      if (m !== void 0) {
        var E = Ca,
          w = e;
        switch (e) {
          case "keypress":
            if (Ml(n) === 0) break e;
          case "keydown":
          case "keyup":
            E = sp;
            break;
          case "focusin":
            (w = "focus"), (E = Wo);
            break;
          case "focusout":
            (w = "blur"), (E = Wo);
            break;
          case "beforeblur":
          case "afterblur":
            E = Wo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            E = Tu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = J0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = dp;
            break;
          case ef:
          case tf:
          case nf:
            E = ep;
            break;
          case rf:
            E = hp;
            break;
          case "scroll":
            E = X0;
            break;
          case "wheel":
            E = vp;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = np;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = zu;
        }
        var S = (t & 4) !== 0,
          _ = !S && e === "scroll",
          d = S ? (m !== null ? m + "Capture" : null) : m;
        S = [];
        for (var f = s, h; f !== null; ) {
          h = f;
          var c = h.stateNode;
          if (
            (h.tag === 5 &&
              c !== null &&
              ((h = c),
              d !== null && ((c = zr(f, d)), c != null && S.push(Vr(f, c, h)))),
            _)
          )
            break;
          f = f.return;
        }
        0 < S.length &&
          ((m = new E(m, w, null, n, p)), v.push({ event: m, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (E = e === "mouseout" || e === "pointerout"),
          m &&
            n !== ki &&
            (w = n.relatedTarget || n.fromElement) &&
            (on(w) || w[Pt]))
        )
          break e;
        if (
          (E || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          E
            ? ((w = n.relatedTarget || n.toElement),
              (E = s),
              (w = w ? on(w) : null),
              w !== null &&
                ((_ = wn(w)), w !== _ || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((E = null), (w = s)),
          E !== w)
        ) {
          if (
            ((S = Tu),
            (c = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = zu),
              (c = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (_ = E == null ? m : Nn(E)),
            (h = w == null ? m : Nn(w)),
            (m = new S(c, f + "leave", E, n, p)),
            (m.target = _),
            (m.relatedTarget = h),
            (c = null),
            on(p) === s &&
              ((S = new S(d, f + "enter", w, n, p)),
              (S.target = h),
              (S.relatedTarget = _),
              (c = S)),
            (_ = c),
            E && w)
          )
            t: {
              for (S = E, d = w, f = 0, h = S; h; h = kn(h)) f++;
              for (h = 0, c = d; c; c = kn(c)) h++;
              for (; 0 < f - h; ) (S = kn(S)), f--;
              for (; 0 < h - f; ) (d = kn(d)), h--;
              for (; f--; ) {
                if (S === d || (d !== null && S === d.alternate)) break t;
                (S = kn(S)), (d = kn(d));
              }
              S = null;
            }
          else S = null;
          E !== null && Zu(v, m, E, S, !1),
            w !== null && _ !== null && Zu(v, _, w, S, !0);
        }
      }
      e: {
        if (
          ((m = s ? Nn(s) : window),
          (E = m.nodeName && m.nodeName.toLowerCase()),
          E === "select" || (E === "input" && m.type === "file"))
        )
          var x = xp;
        else if (Fu(m))
          if (Xc) x = _p;
          else {
            x = Pp;
            var R = Cp;
          }
        else
          (E = m.nodeName) &&
            E.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (x = Rp);
        if (x && (x = x(e, s))) {
          Yc(v, x, n, p);
          break e;
        }
        R && R(e, m, s),
          e === "focusout" &&
            (R = m._wrapperState) &&
            R.controlled &&
            m.type === "number" &&
            gi(m, "number", m.value);
      }
      switch (((R = s ? Nn(s) : window), e)) {
        case "focusin":
          (Fu(R) || R.contentEditable === "true") &&
            ((Mn = R), (Li = s), (Rr = null));
          break;
        case "focusout":
          Rr = Li = Mn = null;
          break;
        case "mousedown":
          Ni = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ni = !1), Hu(v, n, p);
          break;
        case "selectionchange":
          if (Np) break;
        case "keydown":
        case "keyup":
          Hu(v, n, p);
      }
      var P;
      if (Ra)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        _n
          ? Qc(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Zc &&
          n.locale !== "ko" &&
          (_n || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && _n && (P = Wc())
            : (($t = p),
              (xa = "value" in $t ? $t.value : $t.textContent),
              (_n = !0))),
        (R = Bl(s, N)),
        0 < R.length &&
          ((N = new Du(N, e, null, n, p)),
          v.push({ event: N, listeners: R }),
          P ? (N.data = P) : ((P = Kc(n)), P !== null && (N.data = P)))),
        (P = yp ? wp(e, n) : Sp(e, n)) &&
          ((s = Bl(s, "onBeforeInput")),
          0 < s.length &&
            ((p = new Du("onBeforeInput", "beforeinput", null, n, p)),
            v.push({ event: p, listeners: s }),
            (p.data = P)));
    }
    of(v, t);
  });
}
function Vr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Bl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = zr(e, n)),
      o != null && r.unshift(Vr(e, o, l)),
      (o = zr(e, t)),
      o != null && r.push(Vr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function kn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = zr(n, o)), u != null && i.unshift(Vr(n, u, a)))
        : l || ((u = zr(n, o)), u != null && i.push(Vr(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var zp = /\r\n?/g,
  Op = /\u0000|\uFFFD/g;
function Qu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      zp,
      `
`
    )
    .replace(Op, "");
}
function vl(e, t, n) {
  if (((t = Qu(t)), Qu(e) !== t && n)) throw Error(C(425));
}
function Wl() {}
var ji = null,
  Ti = null;
function Di(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var zi = typeof setTimeout == "function" ? setTimeout : void 0,
  Ap = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ku = typeof Promise == "function" ? Promise : void 0,
  Fp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ku < "u"
      ? function (e) {
          return Ku.resolve(null).then(e).catch(Ip);
        }
      : zi;
function Ip(e) {
  setTimeout(function () {
    throw e;
  });
}
function qo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Fr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Fr(t);
}
function Zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Yu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var nr = Math.random().toString(36).slice(2),
  pt = "__reactFiber$" + nr,
  Hr = "__reactProps$" + nr,
  Pt = "__reactContainer$" + nr,
  Oi = "__reactEvents$" + nr,
  Up = "__reactListeners$" + nr,
  $p = "__reactHandles$" + nr;
function on(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Pt] || n[pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Yu(e); e !== null; ) {
          if ((n = e[pt])) return n;
          e = Yu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function br(e) {
  return (
    (e = e[pt] || e[Pt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Nn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function mo(e) {
  return e[Hr] || null;
}
var Ai = [],
  jn = -1;
function bt(e) {
  return { current: e };
}
function te(e) {
  0 > jn || ((e.current = Ai[jn]), (Ai[jn] = null), jn--);
}
function b(e, t) {
  jn++, (Ai[jn] = e.current), (e.current = t);
}
var Jt = {},
  Le = bt(Jt),
  Ae = bt(!1),
  pn = Jt;
function Kn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Fe(e) {
  return (e = e.childContextTypes), e != null;
}
function Zl() {
  te(Ae), te(Le);
}
function Xu(e, t, n) {
  if (Le.current !== Jt) throw Error(C(168));
  b(Le, t), b(Ae, n);
}
function uf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(C(108, C0(e) || "Unknown", l));
  return ae({}, n, r);
}
function Ql(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jt),
    (pn = Le.current),
    b(Le, e),
    b(Ae, Ae.current),
    !0
  );
}
function Gu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = uf(e, t, pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Ae),
      te(Le),
      b(Le, e))
    : te(Ae),
    b(Ae, n);
}
var St = null,
  vo = !1,
  bo = !1;
function sf(e) {
  St === null ? (St = [e]) : St.push(e);
}
function Vp(e) {
  (vo = !0), sf(e);
}
function en() {
  if (!bo && St !== null) {
    bo = !0;
    var e = 0,
      t = K;
    try {
      var n = St;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (St = null), (vo = !1);
    } catch (l) {
      throw (St !== null && (St = St.slice(e + 1)), Dc(wa, en), l);
    } finally {
      (K = t), (bo = !1);
    }
  }
  return null;
}
var Tn = [],
  Dn = 0,
  Kl = null,
  Yl = 0,
  Ke = [],
  Ye = 0,
  hn = null,
  Et = 1,
  kt = "";
function rn(e, t) {
  (Tn[Dn++] = Yl), (Tn[Dn++] = Kl), (Kl = e), (Yl = t);
}
function cf(e, t, n) {
  (Ke[Ye++] = Et), (Ke[Ye++] = kt), (Ke[Ye++] = hn), (hn = e);
  var r = Et;
  e = kt;
  var l = 32 - ot(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - ot(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Et = (1 << (32 - ot(t) + l)) | (n << l) | r),
      (kt = o + e);
  } else (Et = (1 << o) | (n << l) | r), (kt = e);
}
function Ma(e) {
  e.return !== null && (rn(e, 1), cf(e, 1, 0));
}
function La(e) {
  for (; e === Kl; )
    (Kl = Tn[--Dn]), (Tn[Dn] = null), (Yl = Tn[--Dn]), (Tn[Dn] = null);
  for (; e === hn; )
    (hn = Ke[--Ye]),
      (Ke[Ye] = null),
      (kt = Ke[--Ye]),
      (Ke[Ye] = null),
      (Et = Ke[--Ye]),
      (Ke[Ye] = null);
}
var He = null,
  Ve = null,
  re = !1,
  lt = null;
function ff(e, t) {
  var n = Xe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ju(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (He = e), (Ve = Zt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (He = e), (Ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = hn !== null ? { id: Et, overflow: kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Xe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (He = e),
            (Ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Fi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ii(e) {
  if (re) {
    var t = Ve;
    if (t) {
      var n = t;
      if (!Ju(e, t)) {
        if (Fi(e)) throw Error(C(418));
        t = Zt(n.nextSibling);
        var r = He;
        t && Ju(e, t)
          ? ff(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (re = !1), (He = e));
      }
    } else {
      if (Fi(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (re = !1), (He = e);
    }
  }
}
function qu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  He = e;
}
function gl(e) {
  if (e !== He) return !1;
  if (!re) return qu(e), (re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Di(e.type, e.memoizedProps))),
    t && (t = Ve))
  ) {
    if (Fi(e)) throw (df(), Error(C(418)));
    for (; t; ) ff(e, t), (t = Zt(t.nextSibling));
  }
  if ((qu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ve = Zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ve = null;
    }
  } else Ve = He ? Zt(e.stateNode.nextSibling) : null;
  return !0;
}
function df() {
  for (var e = Ve; e; ) e = Zt(e.nextSibling);
}
function Yn() {
  (Ve = He = null), (re = !1);
}
function Na(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
var Hp = Mt.ReactCurrentBatchConfig;
function tt(e, t) {
  if (e && e.defaultProps) {
    (t = ae({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Xl = bt(null),
  Gl = null,
  zn = null,
  ja = null;
function Ta() {
  ja = zn = Gl = null;
}
function Da(e) {
  var t = Xl.current;
  te(Xl), (e._currentValue = t);
}
function Ui(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Bn(e, t) {
  (Gl = e),
    (ja = zn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Oe = !0), (e.firstContext = null));
}
function Je(e) {
  var t = e._currentValue;
  if (ja !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), zn === null)) {
      if (Gl === null) throw Error(C(308));
      (zn = e), (Gl.dependencies = { lanes: 0, firstContext: e });
    } else zn = zn.next = e;
  return t;
}
var an = null;
function za(e) {
  an === null ? (an = [e]) : an.push(e);
}
function pf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), za(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Rt(e, r)
  );
}
function Rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ft = !1;
function Oa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function hf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Rt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), za(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Rt(e, n)
  );
}
function Ll(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sa(e, n);
  }
}
function bu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Jl(e, t, n, r) {
  var l = e.updateQueue;
  Ft = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (a = p.lastBaseUpdate),
      a !== i &&
        (a === null ? (p.firstBaseUpdate = s) : (a.next = s),
        (p.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var v = l.baseState;
    (i = 0), (p = s = u = null), (a = o);
    do {
      var m = a.lane,
        E = a.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: E,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            S = a;
          switch (((m = t), (E = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                v = w.call(E, v, m);
                break e;
              }
              v = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (m = typeof w == "function" ? w.call(E, v, m) : w),
                m == null)
              )
                break e;
              v = ae({}, v, m);
              break e;
            case 2:
              Ft = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [a]) : m.push(a));
      } else
        (E = {
          eventTime: E,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          p === null ? ((s = p = E), (u = v)) : (p = p.next = E),
          (i |= m);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (m = a),
          (a = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (u = v),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (vn |= i), (e.lanes = i), (e.memoizedState = v);
  }
}
function es(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(C(191, l));
        l.call(r);
      }
    }
}
var mf = new dc.Component().refs;
function $i(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ae({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var go = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? wn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      l = Yt(e),
      o = xt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Qt(e, o, l)),
      t !== null && (it(t, e, l, r), Ll(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      l = Yt(e),
      o = xt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Qt(e, o, l)),
      t !== null && (it(t, e, l, r), Ll(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = je(),
      r = Yt(e),
      l = xt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Qt(e, l, r)),
      t !== null && (it(t, e, r, n), Ll(t, e, r));
  },
};
function ts(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ur(n, r) || !Ur(l, o)
      : !0
  );
}
function vf(e, t, n) {
  var r = !1,
    l = Jt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Je(o))
      : ((l = Fe(t) ? pn : Le.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Kn(e, l) : Jt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = go),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ns(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && go.enqueueReplaceState(t, t.state, null);
}
function Vi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = mf), Oa(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Je(o))
    : ((o = Fe(t) ? pn : Le.current), (l.context = Kn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && ($i(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && go.enqueueReplaceState(l, l.state, null),
      Jl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function fr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            a === mf && (a = l.refs = {}),
              i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function yl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function rs(e) {
  var t = e._init;
  return t(e._payload);
}
function gf(e) {
  function t(d, f) {
    if (e) {
      var h = d.deletions;
      h === null ? ((d.deletions = [f]), (d.flags |= 16)) : h.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function l(d, f) {
    return (d = Xt(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, f, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((d.flags |= 2), f) : h)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, f, h, c) {
    return f === null || f.tag !== 6
      ? ((f = ii(h, d.mode, c)), (f.return = d), f)
      : ((f = l(f, h)), (f.return = d), f);
  }
  function u(d, f, h, c) {
    var x = h.type;
    return x === Rn
      ? p(d, f, h.props.children, c, h.key)
      : f !== null &&
        (f.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === At &&
            rs(x) === f.type))
      ? ((c = l(f, h.props)), (c.ref = fr(d, f, h)), (c.return = d), c)
      : ((c = Ol(h.type, h.key, h.props, null, d.mode, c)),
        (c.ref = fr(d, f, h)),
        (c.return = d),
        c);
  }
  function s(d, f, h, c) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = ai(h, d.mode, c)), (f.return = d), f)
      : ((f = l(f, h.children || [])), (f.return = d), f);
  }
  function p(d, f, h, c, x) {
    return f === null || f.tag !== 7
      ? ((f = fn(h, d.mode, c, x)), (f.return = d), f)
      : ((f = l(f, h)), (f.return = d), f);
  }
  function v(d, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = ii("" + f, d.mode, h)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case al:
          return (
            (h = Ol(f.type, f.key, f.props, null, d.mode, h)),
            (h.ref = fr(d, null, f)),
            (h.return = d),
            h
          );
        case Pn:
          return (f = ai(f, d.mode, h)), (f.return = d), f;
        case At:
          var c = f._init;
          return v(d, c(f._payload), h);
      }
      if (wr(f) || ir(f))
        return (f = fn(f, d.mode, h, null)), (f.return = d), f;
      yl(d, f);
    }
    return null;
  }
  function m(d, f, h, c) {
    var x = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return x !== null ? null : a(d, f, "" + h, c);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case al:
          return h.key === x ? u(d, f, h, c) : null;
        case Pn:
          return h.key === x ? s(d, f, h, c) : null;
        case At:
          return (x = h._init), m(d, f, x(h._payload), c);
      }
      if (wr(h) || ir(h)) return x !== null ? null : p(d, f, h, c, null);
      yl(d, h);
    }
    return null;
  }
  function E(d, f, h, c, x) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (d = d.get(h) || null), a(f, d, "" + c, x);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case al:
          return (d = d.get(c.key === null ? h : c.key) || null), u(f, d, c, x);
        case Pn:
          return (d = d.get(c.key === null ? h : c.key) || null), s(f, d, c, x);
        case At:
          var R = c._init;
          return E(d, f, h, R(c._payload), x);
      }
      if (wr(c) || ir(c)) return (d = d.get(h) || null), p(f, d, c, x, null);
      yl(f, c);
    }
    return null;
  }
  function w(d, f, h, c) {
    for (
      var x = null, R = null, P = f, N = (f = 0), W = null;
      P !== null && N < h.length;
      N++
    ) {
      P.index > N ? ((W = P), (P = null)) : (W = P.sibling);
      var I = m(d, P, h[N], c);
      if (I === null) {
        P === null && (P = W);
        break;
      }
      e && P && I.alternate === null && t(d, P),
        (f = o(I, f, N)),
        R === null ? (x = I) : (R.sibling = I),
        (R = I),
        (P = W);
    }
    if (N === h.length) return n(d, P), re && rn(d, N), x;
    if (P === null) {
      for (; N < h.length; N++)
        (P = v(d, h[N], c)),
          P !== null &&
            ((f = o(P, f, N)), R === null ? (x = P) : (R.sibling = P), (R = P));
      return re && rn(d, N), x;
    }
    for (P = r(d, P); N < h.length; N++)
      (W = E(P, d, N, h[N], c)),
        W !== null &&
          (e && W.alternate !== null && P.delete(W.key === null ? N : W.key),
          (f = o(W, f, N)),
          R === null ? (x = W) : (R.sibling = W),
          (R = W));
    return (
      e &&
        P.forEach(function (ye) {
          return t(d, ye);
        }),
      re && rn(d, N),
      x
    );
  }
  function S(d, f, h, c) {
    var x = ir(h);
    if (typeof x != "function") throw Error(C(150));
    if (((h = x.call(h)), h == null)) throw Error(C(151));
    for (
      var R = (x = null), P = f, N = (f = 0), W = null, I = h.next();
      P !== null && !I.done;
      N++, I = h.next()
    ) {
      P.index > N ? ((W = P), (P = null)) : (W = P.sibling);
      var ye = m(d, P, I.value, c);
      if (ye === null) {
        P === null && (P = W);
        break;
      }
      e && P && ye.alternate === null && t(d, P),
        (f = o(ye, f, N)),
        R === null ? (x = ye) : (R.sibling = ye),
        (R = ye),
        (P = W);
    }
    if (I.done) return n(d, P), re && rn(d, N), x;
    if (P === null) {
      for (; !I.done; N++, I = h.next())
        (I = v(d, I.value, c)),
          I !== null &&
            ((f = o(I, f, N)), R === null ? (x = I) : (R.sibling = I), (R = I));
      return re && rn(d, N), x;
    }
    for (P = r(d, P); !I.done; N++, I = h.next())
      (I = E(P, d, N, I.value, c)),
        I !== null &&
          (e && I.alternate !== null && P.delete(I.key === null ? N : I.key),
          (f = o(I, f, N)),
          R === null ? (x = I) : (R.sibling = I),
          (R = I));
    return (
      e &&
        P.forEach(function (J) {
          return t(d, J);
        }),
      re && rn(d, N),
      x
    );
  }
  function _(d, f, h, c) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Rn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case al:
          e: {
            for (var x = h.key, R = f; R !== null; ) {
              if (R.key === x) {
                if (((x = h.type), x === Rn)) {
                  if (R.tag === 7) {
                    n(d, R.sibling),
                      (f = l(R, h.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  R.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === At &&
                    rs(x) === R.type)
                ) {
                  n(d, R.sibling),
                    (f = l(R, h.props)),
                    (f.ref = fr(d, R, h)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, R);
                break;
              } else t(d, R);
              R = R.sibling;
            }
            h.type === Rn
              ? ((f = fn(h.props.children, d.mode, c, h.key)),
                (f.return = d),
                (d = f))
              : ((c = Ol(h.type, h.key, h.props, null, d.mode, c)),
                (c.ref = fr(d, f, h)),
                (c.return = d),
                (d = c));
          }
          return i(d);
        case Pn:
          e: {
            for (R = h.key; f !== null; ) {
              if (f.key === R)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(d, f.sibling),
                    (f = l(f, h.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = ai(h, d.mode, c)), (f.return = d), (d = f);
          }
          return i(d);
        case At:
          return (R = h._init), _(d, f, R(h._payload), c);
      }
      if (wr(h)) return w(d, f, h, c);
      if (ir(h)) return S(d, f, h, c);
      yl(d, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = l(f, h)), (f.return = d), (d = f))
          : (n(d, f), (f = ii(h, d.mode, c)), (f.return = d), (d = f)),
        i(d))
      : n(d, f);
  }
  return _;
}
var Xn = gf(!0),
  yf = gf(!1),
  el = {},
  mt = bt(el),
  Br = bt(el),
  Wr = bt(el);
function un(e) {
  if (e === el) throw Error(C(174));
  return e;
}
function Aa(e, t) {
  switch ((b(Wr, t), b(Br, e), b(mt, el), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = wi(t, e));
  }
  te(mt), b(mt, t);
}
function Gn() {
  te(mt), te(Br), te(Wr);
}
function wf(e) {
  un(Wr.current);
  var t = un(mt.current),
    n = wi(t, e.type);
  t !== n && (b(Br, e), b(mt, n));
}
function Fa(e) {
  Br.current === e && (te(mt), te(Br));
}
var oe = bt(0);
function ql(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ei = [];
function Ia() {
  for (var e = 0; e < ei.length; e++)
    ei[e]._workInProgressVersionPrimary = null;
  ei.length = 0;
}
var Nl = Mt.ReactCurrentDispatcher,
  ti = Mt.ReactCurrentBatchConfig,
  mn = 0,
  ie = null,
  ve = null,
  Se = null,
  bl = !1,
  _r = !1,
  Zr = 0,
  Bp = 0;
function Re() {
  throw Error(C(321));
}
function Ua(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!at(e[n], t[n])) return !1;
  return !0;
}
function $a(e, t, n, r, l, o) {
  if (
    ((mn = o),
    (ie = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Nl.current = e === null || e.memoizedState === null ? Kp : Yp),
    (e = n(r, l)),
    _r)
  ) {
    o = 0;
    do {
      if (((_r = !1), (Zr = 0), 25 <= o)) throw Error(C(301));
      (o += 1),
        (Se = ve = null),
        (t.updateQueue = null),
        (Nl.current = Xp),
        (e = n(r, l));
    } while (_r);
  }
  if (
    ((Nl.current = eo),
    (t = ve !== null && ve.next !== null),
    (mn = 0),
    (Se = ve = ie = null),
    (bl = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Va() {
  var e = Zr !== 0;
  return (Zr = 0), e;
}
function dt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (ie.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function qe() {
  if (ve === null) {
    var e = ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ve.next;
  var t = Se === null ? ie.memoizedState : Se.next;
  if (t !== null) (Se = t), (ve = e);
  else {
    if (e === null) throw Error(C(310));
    (ve = e),
      (e = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null,
      }),
      Se === null ? (ie.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function Qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ni(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ve,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      s = o;
    do {
      var p = s.lane;
      if ((mn & p) === p)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var v = {
          lane: p,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = v), (i = r)) : (u = u.next = v),
          (ie.lanes |= p),
          (vn |= p);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (i = r) : (u.next = a),
      at(r, t.memoizedState) || (Oe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ie.lanes |= o), (vn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ri(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    at(o, t.memoizedState) || (Oe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Sf() {}
function Ef(e, t) {
  var n = ie,
    r = qe(),
    l = t(),
    o = !at(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Oe = !0)),
    (r = r.queue),
    Ha(Cf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kr(9, xf.bind(null, n, r, l, t), void 0, null),
      Ee === null)
    )
      throw Error(C(349));
    mn & 30 || kf(n, t, l);
  }
  return l;
}
function kf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ie.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function xf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Pf(t) && Rf(e);
}
function Cf(e, t, n) {
  return n(function () {
    Pf(t) && Rf(e);
  });
}
function Pf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !at(e, n);
  } catch {
    return !0;
  }
}
function Rf(e) {
  var t = Rt(e, 1);
  t !== null && it(t, e, 1, -1);
}
function ls(e) {
  var t = dt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Qp.bind(null, ie, e)),
    [t.memoizedState, e]
  );
}
function Kr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ie.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function _f() {
  return qe().memoizedState;
}
function jl(e, t, n, r) {
  var l = dt();
  (ie.flags |= e),
    (l.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r));
}
function yo(e, t, n, r) {
  var l = qe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ve !== null) {
    var i = ve.memoizedState;
    if (((o = i.destroy), r !== null && Ua(r, i.deps))) {
      l.memoizedState = Kr(t, n, o, r);
      return;
    }
  }
  (ie.flags |= e), (l.memoizedState = Kr(1 | t, n, o, r));
}
function os(e, t) {
  return jl(8390656, 8, e, t);
}
function Ha(e, t) {
  return yo(2048, 8, e, t);
}
function Mf(e, t) {
  return yo(4, 2, e, t);
}
function Lf(e, t) {
  return yo(4, 4, e, t);
}
function Nf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function jf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), yo(4, 4, Nf.bind(null, t, e), n)
  );
}
function Ba() {}
function Tf(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ua(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Df(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ua(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function zf(e, t, n) {
  return mn & 21
    ? (at(n, t) || ((n = Ac()), (ie.lanes |= n), (vn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n));
}
function Wp(e, t) {
  var n = K;
  (K = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ti.transition;
  ti.transition = {};
  try {
    e(!1), t();
  } finally {
    (K = n), (ti.transition = r);
  }
}
function Of() {
  return qe().memoizedState;
}
function Zp(e, t, n) {
  var r = Yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Af(e))
  )
    Ff(t, n);
  else if (((n = pf(e, t, n, r)), n !== null)) {
    var l = je();
    it(n, e, r, l), If(n, t, r);
  }
}
function Qp(e, t, n) {
  var r = Yt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Af(e)) Ff(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), at(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), za(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = pf(e, t, l, r)),
      n !== null && ((l = je()), it(n, e, r, l), If(n, t, r));
  }
}
function Af(e) {
  var t = e.alternate;
  return e === ie || (t !== null && t === ie);
}
function Ff(e, t) {
  _r = bl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function If(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sa(e, n);
  }
}
var eo = {
    readContext: Je,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1,
  },
  Kp = {
    readContext: Je,
    useCallback: function (e, t) {
      return (dt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Je,
    useEffect: os,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        jl(4194308, 4, Nf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return jl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return jl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = dt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = dt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Zp.bind(null, ie, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ls,
    useDebugValue: Ba,
    useDeferredValue: function (e) {
      return (dt().memoizedState = e);
    },
    useTransition: function () {
      var e = ls(!1),
        t = e[0];
      return (e = Wp.bind(null, e[1])), (dt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ie,
        l = dt();
      if (re) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(C(349));
        mn & 30 || kf(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        os(Cf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Kr(9, xf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dt(),
        t = Ee.identifierPrefix;
      if (re) {
        var n = kt,
          r = Et;
        (n = (r & ~(1 << (32 - ot(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Zr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Bp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Yp = {
    readContext: Je,
    useCallback: Tf,
    useContext: Je,
    useEffect: Ha,
    useImperativeHandle: jf,
    useInsertionEffect: Mf,
    useLayoutEffect: Lf,
    useMemo: Df,
    useReducer: ni,
    useRef: _f,
    useState: function () {
      return ni(Qr);
    },
    useDebugValue: Ba,
    useDeferredValue: function (e) {
      var t = qe();
      return zf(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = ni(Qr)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: Sf,
    useSyncExternalStore: Ef,
    useId: Of,
    unstable_isNewReconciler: !1,
  },
  Xp = {
    readContext: Je,
    useCallback: Tf,
    useContext: Je,
    useEffect: Ha,
    useImperativeHandle: jf,
    useInsertionEffect: Mf,
    useLayoutEffect: Lf,
    useMemo: Df,
    useReducer: ri,
    useRef: _f,
    useState: function () {
      return ri(Qr);
    },
    useDebugValue: Ba,
    useDeferredValue: function (e) {
      var t = qe();
      return ve === null ? (t.memoizedState = e) : zf(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = ri(Qr)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: Sf,
    useSyncExternalStore: Ef,
    useId: Of,
    unstable_isNewReconciler: !1,
  };
function Jn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += x0(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function li(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Hi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Gp = typeof WeakMap == "function" ? WeakMap : Map;
function Uf(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      no || ((no = !0), (qi = r)), Hi(e, t);
    }),
    n
  );
}
function $f(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Hi(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Hi(e, t),
          typeof r != "function" &&
            (Kt === null ? (Kt = new Set([this])) : Kt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function is(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = ch.bind(null, e, t, n)), t.then(e, e));
}
function as(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function us(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = xt(-1, 1)), (t.tag = 2), Qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Jp = Mt.ReactCurrentOwner,
  Oe = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? yf(t, null, n, r) : Xn(t, e.child, n, r);
}
function ss(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Bn(t, l),
    (r = $a(e, t, n, r, o, l)),
    (n = Va()),
    e !== null && !Oe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        _t(e, t, l))
      : (re && n && Ma(t), (t.flags |= 1), Ne(e, t, r, l), t.child)
  );
}
function cs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ja(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Vf(e, t, o, r, l))
      : ((e = Ol(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ur), n(i, r) && e.ref === t.ref)
    )
      return _t(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Xt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Vf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ur(o, r) && e.ref === t.ref)
      if (((Oe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Oe = !0);
      else return (t.lanes = e.lanes), _t(e, t, l);
  }
  return Bi(e, t, n, r, l);
}
function Hf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(An, $e),
        ($e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          b(An, $e),
          ($e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        b(An, $e),
        ($e |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(An, $e),
      ($e |= r);
  return Ne(e, t, l, n), t.child;
}
function Bf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Bi(e, t, n, r, l) {
  var o = Fe(n) ? pn : Le.current;
  return (
    (o = Kn(t, o)),
    Bn(t, l),
    (n = $a(e, t, n, r, o, l)),
    (r = Va()),
    e !== null && !Oe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        _t(e, t, l))
      : (re && r && Ma(t), (t.flags |= 1), Ne(e, t, n, l), t.child)
  );
}
function fs(e, t, n, r, l) {
  if (Fe(n)) {
    var o = !0;
    Ql(t);
  } else o = !1;
  if ((Bn(t, l), t.stateNode === null))
    Tl(e, t), vf(t, n, r), Vi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Je(s))
      : ((s = Fe(n) ? pn : Le.current), (s = Kn(t, s)));
    var p = n.getDerivedStateFromProps,
      v =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && ns(t, i, r, s)),
      (Ft = !1);
    var m = t.memoizedState;
    (i.state = m),
      Jl(t, r, i, l),
      (u = t.memoizedState),
      a !== r || m !== u || Ae.current || Ft
        ? (typeof p == "function" && ($i(t, n, p, r), (u = t.memoizedState)),
          (a = Ft || ts(t, n, a, r, m, u, s))
            ? (v ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      hf(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : tt(t.type, a)),
      (i.props = s),
      (v = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Je(u))
        : ((u = Fe(n) ? pn : Le.current), (u = Kn(t, u)));
    var E = n.getDerivedStateFromProps;
    (p =
      typeof E == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== v || m !== u) && ns(t, i, r, u)),
      (Ft = !1),
      (m = t.memoizedState),
      (i.state = m),
      Jl(t, r, i, l);
    var w = t.memoizedState;
    a !== v || m !== w || Ae.current || Ft
      ? (typeof E == "function" && ($i(t, n, E, r), (w = t.memoizedState)),
        (s = Ft || ts(t, n, s, r, m, w, u) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = u),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Wi(e, t, n, r, o, l);
}
function Wi(e, t, n, r, l, o) {
  Bf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Gu(t, n, !1), _t(e, t, o);
  (r = t.stateNode), (Jp.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Xn(t, e.child, null, o)), (t.child = Xn(t, null, a, o)))
      : Ne(e, t, a, o),
    (t.memoizedState = r.state),
    l && Gu(t, n, !0),
    t.child
  );
}
function Wf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Xu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Xu(e, t.context, !1),
    Aa(e, t.containerInfo);
}
function ds(e, t, n, r, l) {
  return Yn(), Na(l), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var Zi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Zf(e, t, n) {
  var r = t.pendingProps,
    l = oe.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    b(oe, l & 1),
    e === null)
  )
    return (
      Ii(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Eo(i, r, 0, null)),
              (e = fn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Qi(n)),
              (t.memoizedState = Zi),
              e)
            : Wa(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return qp(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Xt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = Xt(a, o)) : ((o = fn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Qi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Zi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Xt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Wa(e, t) {
  return (
    (t = Eo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function wl(e, t, n, r) {
  return (
    r !== null && Na(r),
    Xn(t, e.child, null, n),
    (e = Wa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function qp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = li(Error(C(422)))), wl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Eo({ mode: "visible", children: r.children }, l, 0, null)),
        (o = fn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Xn(t, e.child, null, i),
        (t.child.memoizedState = Qi(i)),
        (t.memoizedState = Zi),
        o);
  if (!(t.mode & 1)) return wl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(C(419))), (r = li(o, r, void 0)), wl(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Oe || a)) {
    if (((r = Ee), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Rt(e, l), it(r, e, l, -1));
    }
    return Ga(), (r = li(Error(C(421)))), wl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = fh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ve = Zt(l.nextSibling)),
      (He = t),
      (re = !0),
      (lt = null),
      e !== null &&
        ((Ke[Ye++] = Et),
        (Ke[Ye++] = kt),
        (Ke[Ye++] = hn),
        (Et = e.id),
        (kt = e.overflow),
        (hn = t)),
      (t = Wa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ps(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ui(e.return, t, n);
}
function oi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Qf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Ne(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ps(e, n, t);
        else if (e.tag === 19) ps(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ql(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          oi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ql(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        oi(t, !0, n, null, o);
        break;
      case "together":
        oi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Tl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function _t(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (vn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function bp(e, t, n) {
  switch (t.tag) {
    case 3:
      Wf(t), Yn();
      break;
    case 5:
      wf(t);
      break;
    case 1:
      Fe(t.type) && Ql(t);
      break;
    case 4:
      Aa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      b(Xl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Zf(e, t, n)
          : (b(oe, oe.current & 1),
            (e = _t(e, t, n)),
            e !== null ? e.sibling : null);
      b(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Qf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        b(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Hf(e, t, n);
  }
  return _t(e, t, n);
}
var Kf, Ki, Yf, Xf;
Kf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ki = function () {};
Yf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), un(mt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = mi(e, l)), (r = mi(e, r)), (o = []);
        break;
      case "select":
        (l = ae({}, l, { value: void 0 })),
          (r = ae({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = yi(e, l)), (r = yi(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Wl);
    }
    Si(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Tr.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Tr.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && ee("scroll", e),
                  o || a === u || (o = []))
                : (o = o || []).push(s, u));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Xf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function dr(e, t) {
  if (!re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function _e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function eh(e, t, n) {
  var r = t.pendingProps;
  switch ((La(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return _e(t), null;
    case 1:
      return Fe(t.type) && Zl(), _e(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Gn(),
        te(Ae),
        te(Le),
        Ia(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (gl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), lt !== null && (ta(lt), (lt = null)))),
        Ki(e, t),
        _e(t),
        null
      );
    case 5:
      Fa(t);
      var l = un(Wr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Yf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return _e(t), null;
        }
        if (((e = un(mt.current)), gl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[pt] = t), (r[Hr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Er.length; l++) ee(Er[l], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              ku(r, o), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ee("invalid", r);
              break;
            case "textarea":
              Cu(r, o), ee("invalid", r);
          }
          Si(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      vl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      vl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Tr.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  ee("scroll", r);
            }
          switch (n) {
            case "input":
              ul(r), xu(r, o, !0);
              break;
            case "textarea":
              ul(r), Pu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Wl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ec(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[pt] = t),
            (e[Hr] = r),
            Kf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ei(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Er.length; l++) ee(Er[l], e);
                l = r;
                break;
              case "source":
                ee("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (l = r);
                break;
              case "details":
                ee("toggle", e), (l = r);
                break;
              case "input":
                ku(e, r), (l = mi(e, r)), ee("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ae({}, r, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                Cu(e, r), (l = yi(e, r)), ee("invalid", e);
                break;
              default:
                l = r;
            }
            Si(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? Cc(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && kc(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Dr(e, u)
                    : typeof u == "number" && Dr(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Tr.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && ee("scroll", e)
                      : u != null && ha(e, o, u, i));
              }
            switch (n) {
              case "input":
                ul(e), xu(e, r, !1);
                break;
              case "textarea":
                ul(e), Pu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Gt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Un(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Un(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Wl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return _e(t), null;
    case 6:
      if (e && t.stateNode != null) Xf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = un(Wr.current)), un(mt.current), gl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pt] = t),
            (o = r.nodeValue !== n) && ((e = He), e !== null))
          )
            switch (e.tag) {
              case 3:
                vl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  vl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pt] = t),
            (t.stateNode = r);
      }
      return _e(t), null;
    case 13:
      if (
        (te(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (re && Ve !== null && t.mode & 1 && !(t.flags & 128))
          df(), Yn(), (t.flags |= 98560), (o = !1);
        else if (((o = gl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(C(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(C(317));
            o[pt] = t;
          } else
            Yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          _e(t), (o = !1);
        } else lt !== null && (ta(lt), (lt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? ge === 0 && (ge = 3) : Ga())),
          t.updateQueue !== null && (t.flags |= 4),
          _e(t),
          null);
    case 4:
      return (
        Gn(), Ki(e, t), e === null && $r(t.stateNode.containerInfo), _e(t), null
      );
    case 10:
      return Da(t.type._context), _e(t), null;
    case 17:
      return Fe(t.type) && Zl(), _e(t), null;
    case 19:
      if ((te(oe), (o = t.memoizedState), o === null)) return _e(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) dr(o, !1);
        else {
          if (ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ql(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    dr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return b(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            fe() > qn &&
            ((t.flags |= 128), (r = !0), dr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ql(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              dr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !re)
            )
              return _e(t), null;
          } else
            2 * fe() - o.renderingStartTime > qn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), dr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = fe()),
          (t.sibling = null),
          (n = oe.current),
          b(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (_e(t), null);
    case 22:
    case 23:
      return (
        Xa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? $e & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : _e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function th(e, t) {
  switch ((La(t), t.tag)) {
    case 1:
      return (
        Fe(t.type) && Zl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Gn(),
        te(Ae),
        te(Le),
        Ia(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Fa(t), null;
    case 13:
      if (
        (te(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(C(340));
        Yn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(oe), null;
    case 4:
      return Gn(), null;
    case 10:
      return Da(t.type._context), null;
    case 22:
    case 23:
      return Xa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Sl = !1,
  Me = !1,
  nh = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function On(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ue(e, t, r);
      }
    else n.current = null;
}
function Yi(e, t, n) {
  try {
    n();
  } catch (r) {
    ue(e, t, r);
  }
}
var hs = !1;
function rh(e, t) {
  if (((ji = Vl), (e = qc()), _a(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            s = 0,
            p = 0,
            v = e,
            m = null;
          t: for (;;) {
            for (
              var E;
              v !== n || (l !== 0 && v.nodeType !== 3) || (a = i + l),
                v !== o || (r !== 0 && v.nodeType !== 3) || (u = i + r),
                v.nodeType === 3 && (i += v.nodeValue.length),
                (E = v.firstChild) !== null;

            )
              (m = v), (v = E);
            for (;;) {
              if (v === e) break t;
              if (
                (m === n && ++s === l && (a = i),
                m === o && ++p === r && (u = i),
                (E = v.nextSibling) !== null)
              )
                break;
              (v = m), (m = v.parentNode);
            }
            v = E;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ti = { focusedElem: e, selectionRange: n }, Vl = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    _ = w.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : tt(t.type, S),
                      _
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (c) {
          ue(t, t.return, c);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (w = hs), (hs = !1), w;
}
function Mr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Yi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function wo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Xi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Gf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Gf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[pt], delete t[Hr], delete t[Oi], delete t[Up], delete t[$p])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Jf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ms(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Jf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Gi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Wl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gi(e, t, n), e = e.sibling; e !== null; ) Gi(e, t, n), (e = e.sibling);
}
function Ji(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ji(e, t, n), e = e.sibling; e !== null; ) Ji(e, t, n), (e = e.sibling);
}
var xe = null,
  nt = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) qf(e, t, n), (n = n.sibling);
}
function qf(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function")
    try {
      ht.onCommitFiberUnmount(co, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Me || On(n, t);
    case 6:
      var r = xe,
        l = nt;
      (xe = null),
        Ot(e, t, n),
        (xe = r),
        (nt = l),
        xe !== null &&
          (nt
            ? ((e = xe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : xe.removeChild(n.stateNode));
      break;
    case 18:
      xe !== null &&
        (nt
          ? ((e = xe),
            (n = n.stateNode),
            e.nodeType === 8
              ? qo(e.parentNode, n)
              : e.nodeType === 1 && qo(e, n),
            Fr(e))
          : qo(xe, n.stateNode));
      break;
    case 4:
      (r = xe),
        (l = nt),
        (xe = n.stateNode.containerInfo),
        (nt = !0),
        Ot(e, t, n),
        (xe = r),
        (nt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Yi(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (
        !Me &&
        (On(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ue(n, t, a);
        }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Me = (r = Me) || n.memoizedState !== null), Ot(e, t, n), (Me = r))
        : Ot(e, t, n);
      break;
    default:
      Ot(e, t, n);
  }
}
function vs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new nh()),
      t.forEach(function (r) {
        var l = dh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function et(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (xe = a.stateNode), (nt = !1);
              break e;
            case 3:
              (xe = a.stateNode.containerInfo), (nt = !0);
              break e;
            case 4:
              (xe = a.stateNode.containerInfo), (nt = !0);
              break e;
          }
          a = a.return;
        }
        if (xe === null) throw Error(C(160));
        qf(o, i, l), (xe = null), (nt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        ue(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) bf(t, e), (t = t.sibling);
}
function bf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((et(t, e), ft(e), r & 4)) {
        try {
          Mr(3, e, e.return), wo(3, e);
        } catch (S) {
          ue(e, e.return, S);
        }
        try {
          Mr(5, e, e.return);
        } catch (S) {
          ue(e, e.return, S);
        }
      }
      break;
    case 1:
      et(t, e), ft(e), r & 512 && n !== null && On(n, n.return);
      break;
    case 5:
      if (
        (et(t, e),
        ft(e),
        r & 512 && n !== null && On(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Dr(l, "");
        } catch (S) {
          ue(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && wc(l, o),
              Ei(a, i);
            var s = Ei(a, o);
            for (i = 0; i < u.length; i += 2) {
              var p = u[i],
                v = u[i + 1];
              p === "style"
                ? Cc(l, v)
                : p === "dangerouslySetInnerHTML"
                ? kc(l, v)
                : p === "children"
                ? Dr(l, v)
                : ha(l, p, v, s);
            }
            switch (a) {
              case "input":
                vi(l, o);
                break;
              case "textarea":
                Sc(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var E = o.value;
                E != null
                  ? Un(l, !!o.multiple, E, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Un(l, !!o.multiple, o.defaultValue, !0)
                      : Un(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Hr] = o;
          } catch (S) {
            ue(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((et(t, e), ft(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          ue(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (et(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fr(t.containerInfo);
        } catch (S) {
          ue(e, e.return, S);
        }
      break;
    case 4:
      et(t, e), ft(e);
      break;
    case 13:
      et(t, e),
        ft(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ka = fe())),
        r & 4 && vs(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Me = (s = Me) || p), et(t, e), (Me = s)) : et(t, e),
        ft(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !p && e.mode & 1)
        )
          for (L = e, p = e.child; p !== null; ) {
            for (v = L = p; L !== null; ) {
              switch (((m = L), (E = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mr(4, m, m.return);
                  break;
                case 1:
                  On(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      ue(r, n, S);
                    }
                  }
                  break;
                case 5:
                  On(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ys(v);
                    continue;
                  }
              }
              E !== null ? ((E.return = m), (L = E)) : ys(v);
            }
            p = p.sibling;
          }
        e: for (p = null, v = e; ; ) {
          if (v.tag === 5) {
            if (p === null) {
              p = v;
              try {
                (l = v.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = v.stateNode),
                      (u = v.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = xc("display", i)));
              } catch (S) {
                ue(e, e.return, S);
              }
            }
          } else if (v.tag === 6) {
            if (p === null)
              try {
                v.stateNode.nodeValue = s ? "" : v.memoizedProps;
              } catch (S) {
                ue(e, e.return, S);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            p === v && (p = null), (v = v.return);
          }
          p === v && (p = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      et(t, e), ft(e), r & 4 && vs(e);
      break;
    case 21:
      break;
    default:
      et(t, e), ft(e);
  }
}
function ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Jf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Dr(l, ""), (r.flags &= -33));
          var o = ms(e);
          Ji(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = ms(e);
          Gi(e, a, i);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      ue(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lh(e, t, n) {
  (L = e), ed(e);
}
function ed(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var l = L,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Sl;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Me;
        a = Sl;
        var s = Me;
        if (((Sl = i), (Me = u) && !s))
          for (L = l; L !== null; )
            (i = L),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ws(l)
                : u !== null
                ? ((u.return = i), (L = u))
                : ws(l);
        for (; o !== null; ) (L = o), ed(o), (o = o.sibling);
        (L = l), (Sl = a), (Me = s);
      }
      gs(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (L = o)) : gs(e);
  }
}
function gs(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Me || wo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Me)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && es(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                es(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var p = s.memoizedState;
                  if (p !== null) {
                    var v = p.dehydrated;
                    v !== null && Fr(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        Me || (t.flags & 512 && Xi(t));
      } catch (m) {
        ue(t, t.return, m);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function ys(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function ws(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            wo(4, t);
          } catch (u) {
            ue(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ue(t, l, u);
            }
          }
          var o = t.return;
          try {
            Xi(t);
          } catch (u) {
            ue(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Xi(t);
          } catch (u) {
            ue(t, i, u);
          }
      }
    } catch (u) {
      ue(t, t.return, u);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (L = a);
      break;
    }
    L = t.return;
  }
}
var oh = Math.ceil,
  to = Mt.ReactCurrentDispatcher,
  Za = Mt.ReactCurrentOwner,
  Ge = Mt.ReactCurrentBatchConfig,
  Q = 0,
  Ee = null,
  he = null,
  Ce = 0,
  $e = 0,
  An = bt(0),
  ge = 0,
  Yr = null,
  vn = 0,
  So = 0,
  Qa = 0,
  Lr = null,
  ze = null,
  Ka = 0,
  qn = 1 / 0,
  wt = null,
  no = !1,
  qi = null,
  Kt = null,
  El = !1,
  Vt = null,
  ro = 0,
  Nr = 0,
  bi = null,
  Dl = -1,
  zl = 0;
function je() {
  return Q & 6 ? fe() : Dl !== -1 ? Dl : (Dl = fe());
}
function Yt(e) {
  return e.mode & 1
    ? Q & 2 && Ce !== 0
      ? Ce & -Ce
      : Hp.transition !== null
      ? (zl === 0 && (zl = Ac()), zl)
      : ((e = K),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bc(e.type))),
        e)
    : 1;
}
function it(e, t, n, r) {
  if (50 < Nr) throw ((Nr = 0), (bi = null), Error(C(185)));
  Jr(e, n, r),
    (!(Q & 2) || e !== Ee) &&
      (e === Ee && (!(Q & 2) && (So |= n), ge === 4 && Ut(e, Ce)),
      Ie(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((qn = fe() + 500), vo && en()));
}
function Ie(e, t) {
  var n = e.callbackNode;
  H0(e, t);
  var r = $l(e, e === Ee ? Ce : 0);
  if (r === 0)
    n !== null && Mu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Mu(n), t === 1))
      e.tag === 0 ? Vp(Ss.bind(null, e)) : sf(Ss.bind(null, e)),
        Fp(function () {
          !(Q & 6) && en();
        }),
        (n = null);
    else {
      switch (Fc(r)) {
        case 1:
          n = wa;
          break;
        case 4:
          n = zc;
          break;
        case 16:
          n = Ul;
          break;
        case 536870912:
          n = Oc;
          break;
        default:
          n = Ul;
      }
      n = ud(n, td.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function td(e, t) {
  if (((Dl = -1), (zl = 0), Q & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Wn() && e.callbackNode !== n) return null;
  var r = $l(e, e === Ee ? Ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = lo(e, r);
  else {
    t = r;
    var l = Q;
    Q |= 2;
    var o = rd();
    (Ee !== e || Ce !== t) && ((wt = null), (qn = fe() + 500), cn(e, t));
    do
      try {
        uh();
        break;
      } catch (a) {
        nd(e, a);
      }
    while (1);
    Ta(),
      (to.current = o),
      (Q = l),
      he !== null ? (t = 0) : ((Ee = null), (Ce = 0), (t = ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ri(e)), l !== 0 && ((r = l), (t = ea(e, l)))), t === 1)
    )
      throw ((n = Yr), cn(e, 0), Ut(e, r), Ie(e, fe()), n);
    if (t === 6) Ut(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !ih(l) &&
          ((t = lo(e, r)),
          t === 2 && ((o = Ri(e)), o !== 0 && ((r = o), (t = ea(e, o)))),
          t === 1))
      )
        throw ((n = Yr), cn(e, 0), Ut(e, r), Ie(e, fe()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          ln(e, ze, wt);
          break;
        case 3:
          if (
            (Ut(e, r), (r & 130023424) === r && ((t = Ka + 500 - fe()), 10 < t))
          ) {
            if ($l(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              je(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = zi(ln.bind(null, e, ze, wt), t);
            break;
          }
          ln(e, ze, wt);
          break;
        case 4:
          if ((Ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - ot(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = fe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * oh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = zi(ln.bind(null, e, ze, wt), r);
            break;
          }
          ln(e, ze, wt);
          break;
        case 5:
          ln(e, ze, wt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Ie(e, fe()), e.callbackNode === n ? td.bind(null, e) : null;
}
function ea(e, t) {
  var n = Lr;
  return (
    e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256),
    (e = lo(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && ta(t)),
    e
  );
}
function ta(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function ih(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!at(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ut(e, t) {
  for (
    t &= ~Qa,
      t &= ~So,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ot(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ss(e) {
  if (Q & 6) throw Error(C(327));
  Wn();
  var t = $l(e, 0);
  if (!(t & 1)) return Ie(e, fe()), null;
  var n = lo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ri(e);
    r !== 0 && ((t = r), (n = ea(e, r)));
  }
  if (n === 1) throw ((n = Yr), cn(e, 0), Ut(e, t), Ie(e, fe()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ln(e, ze, wt),
    Ie(e, fe()),
    null
  );
}
function Ya(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((qn = fe() + 500), vo && en());
  }
}
function gn(e) {
  Vt !== null && Vt.tag === 0 && !(Q & 6) && Wn();
  var t = Q;
  Q |= 1;
  var n = Ge.transition,
    r = K;
  try {
    if (((Ge.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (Ge.transition = n), (Q = t), !(Q & 6) && en();
  }
}
function Xa() {
  ($e = An.current), te(An);
}
function cn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ap(n)), he !== null))
    for (n = he.return; n !== null; ) {
      var r = n;
      switch ((La(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Zl();
          break;
        case 3:
          Gn(), te(Ae), te(Le), Ia();
          break;
        case 5:
          Fa(r);
          break;
        case 4:
          Gn();
          break;
        case 13:
          te(oe);
          break;
        case 19:
          te(oe);
          break;
        case 10:
          Da(r.type._context);
          break;
        case 22:
        case 23:
          Xa();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
    (he = e = Xt(e.current, null)),
    (Ce = $e = t),
    (ge = 0),
    (Yr = null),
    (Qa = So = vn = 0),
    (ze = Lr = null),
    an !== null)
  ) {
    for (t = 0; t < an.length; t++)
      if (((n = an[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    an = null;
  }
  return e;
}
function nd(e, t) {
  do {
    var n = he;
    try {
      if ((Ta(), (Nl.current = eo), bl)) {
        for (var r = ie.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        bl = !1;
      }
      if (
        ((mn = 0),
        (Se = ve = ie = null),
        (_r = !1),
        (Zr = 0),
        (Za.current = null),
        n === null || n.return === null)
      ) {
        (ge = 1), (Yr = t), (he = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = Ce),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            p = a,
            v = p.tag;
          if (!(p.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var E = as(i);
          if (E !== null) {
            (E.flags &= -257),
              us(E, i, a, o, t),
              E.mode & 1 && is(o, s, t),
              (t = E),
              (u = s);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              is(o, s, t), Ga();
              break e;
            }
            u = Error(C(426));
          }
        } else if (re && a.mode & 1) {
          var _ = as(i);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              us(_, i, a, o, t),
              Na(Jn(u, a));
            break e;
          }
        }
        (o = u = Jn(u, a)),
          ge !== 4 && (ge = 2),
          Lr === null ? (Lr = [o]) : Lr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Uf(o, u, t);
              bu(o, d);
              break e;
            case 1:
              a = u;
              var f = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Kt === null || !Kt.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var c = $f(o, a, t);
                bu(o, c);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      od(n);
    } catch (x) {
      (t = x), he === n && n !== null && (he = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function rd() {
  var e = to.current;
  return (to.current = eo), e === null ? eo : e;
}
function Ga() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    Ee === null || (!(vn & 268435455) && !(So & 268435455)) || Ut(Ee, Ce);
}
function lo(e, t) {
  var n = Q;
  Q |= 2;
  var r = rd();
  (Ee !== e || Ce !== t) && ((wt = null), cn(e, t));
  do
    try {
      ah();
      break;
    } catch (l) {
      nd(e, l);
    }
  while (1);
  if ((Ta(), (Q = n), (to.current = r), he !== null)) throw Error(C(261));
  return (Ee = null), (Ce = 0), ge;
}
function ah() {
  for (; he !== null; ) ld(he);
}
function uh() {
  for (; he !== null && !D0(); ) ld(he);
}
function ld(e) {
  var t = ad(e.alternate, e, $e);
  (e.memoizedProps = e.pendingProps),
    t === null ? od(e) : (he = t),
    (Za.current = null);
}
function od(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = th(n, t)), n !== null)) {
        (n.flags &= 32767), (he = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ge = 6), (he = null);
        return;
      }
    } else if (((n = eh(n, t, $e)), n !== null)) {
      he = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function ln(e, t, n) {
  var r = K,
    l = Ge.transition;
  try {
    (Ge.transition = null), (K = 1), sh(e, t, n, r);
  } finally {
    (Ge.transition = l), (K = r);
  }
  return null;
}
function sh(e, t, n, r) {
  do Wn();
  while (Vt !== null);
  if (Q & 6) throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (B0(e, o),
    e === Ee && ((he = Ee = null), (Ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      El ||
      ((El = !0),
      ud(Ul, function () {
        return Wn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ge.transition), (Ge.transition = null);
    var i = K;
    K = 1;
    var a = Q;
    (Q |= 4),
      (Za.current = null),
      rh(e, n),
      bf(n, e),
      Lp(Ti),
      (Vl = !!ji),
      (Ti = ji = null),
      (e.current = n),
      lh(n),
      z0(),
      (Q = a),
      (K = i),
      (Ge.transition = o);
  } else e.current = n;
  if (
    (El && ((El = !1), (Vt = e), (ro = l)),
    (o = e.pendingLanes),
    o === 0 && (Kt = null),
    F0(n.stateNode),
    Ie(e, fe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (no) throw ((no = !1), (e = qi), (qi = null), e);
  return (
    ro & 1 && e.tag !== 0 && Wn(),
    (o = e.pendingLanes),
    o & 1 ? (e === bi ? Nr++ : ((Nr = 0), (bi = e))) : (Nr = 0),
    en(),
    null
  );
}
function Wn() {
  if (Vt !== null) {
    var e = Fc(ro),
      t = Ge.transition,
      n = K;
    try {
      if (((Ge.transition = null), (K = 16 > e ? 16 : e), Vt === null))
        var r = !1;
      else {
        if (((e = Vt), (Vt = null), (ro = 0), Q & 6)) throw Error(C(331));
        var l = Q;
        for (Q |= 4, L = e.current; L !== null; ) {
          var o = L,
            i = o.child;
          if (L.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (L = s; L !== null; ) {
                  var p = L;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mr(8, p, o);
                  }
                  var v = p.child;
                  if (v !== null) (v.return = p), (L = v);
                  else
                    for (; L !== null; ) {
                      p = L;
                      var m = p.sibling,
                        E = p.return;
                      if ((Gf(p), p === s)) {
                        L = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = E), (L = m);
                        break;
                      }
                      L = E;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var _ = S.sibling;
                    (S.sibling = null), (S = _);
                  } while (S !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (L = i);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mr(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (L = d);
                break e;
              }
              L = o.return;
            }
        }
        var f = e.current;
        for (L = f; L !== null; ) {
          i = L;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (L = h);
          else
            e: for (i = f; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wo(9, a);
                  }
                } catch (x) {
                  ue(a, a.return, x);
                }
              if (a === i) {
                L = null;
                break e;
              }
              var c = a.sibling;
              if (c !== null) {
                (c.return = a.return), (L = c);
                break e;
              }
              L = a.return;
            }
        }
        if (
          ((Q = l), en(), ht && typeof ht.onPostCommitFiberRoot == "function")
        )
          try {
            ht.onPostCommitFiberRoot(co, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (K = n), (Ge.transition = t);
    }
  }
  return !1;
}
function Es(e, t, n) {
  (t = Jn(n, t)),
    (t = Uf(e, t, 1)),
    (e = Qt(e, t, 1)),
    (t = je()),
    e !== null && (Jr(e, 1, t), Ie(e, t));
}
function ue(e, t, n) {
  if (e.tag === 3) Es(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Es(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Kt === null || !Kt.has(r)))
        ) {
          (e = Jn(n, e)),
            (e = $f(t, e, 1)),
            (t = Qt(t, e, 1)),
            (e = je()),
            t !== null && (Jr(t, 1, e), Ie(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ch(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (Ce & n) === n &&
      (ge === 4 || (ge === 3 && (Ce & 130023424) === Ce && 500 > fe() - Ka)
        ? cn(e, 0)
        : (Qa |= n)),
    Ie(e, t);
}
function id(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = fl), (fl <<= 1), !(fl & 130023424) && (fl = 4194304))
      : (t = 1));
  var n = je();
  (e = Rt(e, t)), e !== null && (Jr(e, t, n), Ie(e, n));
}
function fh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), id(e, n);
}
function dh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), id(e, n);
}
var ad;
ad = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) Oe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Oe = !1), bp(e, t, n);
      Oe = !!(e.flags & 131072);
    }
  else (Oe = !1), re && t.flags & 1048576 && cf(t, Yl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Tl(e, t), (e = t.pendingProps);
      var l = Kn(t, Le.current);
      Bn(t, n), (l = $a(null, t, r, e, l, n));
      var o = Va();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Fe(r) ? ((o = !0), Ql(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Oa(t),
            (l.updater = go),
            (t.stateNode = l),
            (l._reactInternals = t),
            Vi(t, r, e, n),
            (t = Wi(null, t, r, !0, o, n)))
          : ((t.tag = 0), re && o && Ma(t), Ne(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Tl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = hh(r)),
          (e = tt(r, e)),
          l)
        ) {
          case 0:
            t = Bi(null, t, r, e, n);
            break e;
          case 1:
            t = fs(null, t, r, e, n);
            break e;
          case 11:
            t = ss(null, t, r, e, n);
            break e;
          case 14:
            t = cs(null, t, r, tt(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        Bi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        fs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Wf(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          hf(e, t),
          Jl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Jn(Error(C(423)), t)), (t = ds(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Jn(Error(C(424)), t)), (t = ds(e, t, r, n, l));
            break e;
          } else
            for (
              Ve = Zt(t.stateNode.containerInfo.firstChild),
                He = t,
                re = !0,
                lt = null,
                n = yf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Yn(), r === l)) {
            t = _t(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        wf(t),
        e === null && Ii(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Di(r, l) ? (i = null) : o !== null && Di(r, o) && (t.flags |= 32),
        Bf(e, t),
        Ne(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ii(t), null;
    case 13:
      return Zf(e, t, n);
    case 4:
      return (
        Aa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xn(t, null, r, n)) : Ne(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        ss(e, t, r, l, n)
      );
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          b(Xl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (at(o.value, i)) {
            if (o.children === l.children && !Ae.current) {
              t = _t(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = xt(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var p = s.pending;
                        p === null
                          ? (u.next = u)
                          : ((u.next = p.next), (p.next = u)),
                          (s.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Ui(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(C(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Ui(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Ne(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Bn(t, n),
        (l = Je(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ne(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = tt(r, t.pendingProps)),
        (l = tt(r.type, l)),
        cs(e, t, r, l, n)
      );
    case 15:
      return Vf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        Tl(e, t),
        (t.tag = 1),
        Fe(r) ? ((e = !0), Ql(t)) : (e = !1),
        Bn(t, n),
        vf(t, r, l),
        Vi(t, r, l, n),
        Wi(null, t, r, !0, e, n)
      );
    case 19:
      return Qf(e, t, n);
    case 22:
      return Hf(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function ud(e, t) {
  return Dc(e, t);
}
function ph(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Xe(e, t, n, r) {
  return new ph(e, t, n, r);
}
function Ja(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function hh(e) {
  if (typeof e == "function") return Ja(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === va)) return 11;
    if (e === ga) return 14;
  }
  return 2;
}
function Xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Xe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ol(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ja(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Rn:
        return fn(n.children, l, o, t);
      case ma:
        (i = 8), (l |= 8);
        break;
      case fi:
        return (
          (e = Xe(12, n, t, l | 2)), (e.elementType = fi), (e.lanes = o), e
        );
      case di:
        return (e = Xe(13, n, t, l)), (e.elementType = di), (e.lanes = o), e;
      case pi:
        return (e = Xe(19, n, t, l)), (e.elementType = pi), (e.lanes = o), e;
      case vc:
        return Eo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case hc:
              i = 10;
              break e;
            case mc:
              i = 9;
              break e;
            case va:
              i = 11;
              break e;
            case ga:
              i = 14;
              break e;
            case At:
              (i = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Xe(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function fn(e, t, n, r) {
  return (e = Xe(7, e, r, t)), (e.lanes = n), e;
}
function Eo(e, t, n, r) {
  return (
    (e = Xe(22, e, r, t)),
    (e.elementType = vc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ii(e, t, n) {
  return (e = Xe(6, e, null, t)), (e.lanes = n), e;
}
function ai(e, t, n) {
  return (
    (t = Xe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function mh(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Vo(0)),
    (this.expirationTimes = Vo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Vo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function qa(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new mh(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Xe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Oa(o),
    e
  );
}
function vh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function sd(e) {
  if (!e) return Jt;
  e = e._reactInternals;
  e: {
    if (wn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n)) return uf(e, n, t);
  }
  return t;
}
function cd(e, t, n, r, l, o, i, a, u) {
  return (
    (e = qa(n, r, !0, e, l, o, i, a, u)),
    (e.context = sd(null)),
    (n = e.current),
    (r = je()),
    (l = Yt(n)),
    (o = xt(r, l)),
    (o.callback = t ?? null),
    Qt(n, o, l),
    (e.current.lanes = l),
    Jr(e, l, r),
    Ie(e, r),
    e
  );
}
function ko(e, t, n, r) {
  var l = t.current,
    o = je(),
    i = Yt(l);
  return (
    (n = sd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = xt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Qt(l, t, i)),
    e !== null && (it(e, l, i, o), Ll(e, l, i)),
    i
  );
}
function oo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ks(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ba(e, t) {
  ks(e, t), (e = e.alternate) && ks(e, t);
}
function gh() {
  return null;
}
var fd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function eu(e) {
  this._internalRoot = e;
}
xo.prototype.render = eu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  ko(e, t, null, null);
};
xo.prototype.unmount = eu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function () {
      ko(null, e, null, null);
    }),
      (t[Pt] = null);
  }
};
function xo(e) {
  this._internalRoot = e;
}
xo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $c();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++);
    It.splice(n, 0, e), n === 0 && Hc(e);
  }
};
function tu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Co(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function xs() {}
function yh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = oo(i);
        o.call(s);
      };
    }
    var i = cd(t, r, e, 0, null, !1, !1, "", xs);
    return (
      (e._reactRootContainer = i),
      (e[Pt] = i.current),
      $r(e.nodeType === 8 ? e.parentNode : e),
      gn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = oo(u);
      a.call(s);
    };
  }
  var u = qa(e, 0, !1, null, null, !1, !1, "", xs);
  return (
    (e._reactRootContainer = u),
    (e[Pt] = u.current),
    $r(e.nodeType === 8 ? e.parentNode : e),
    gn(function () {
      ko(t, u, n, r);
    }),
    u
  );
}
function Po(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = oo(i);
        a.call(u);
      };
    }
    ko(t, i, e, l);
  } else i = yh(n, t, e, l, r);
  return oo(i);
}
Ic = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sr(t.pendingLanes);
        n !== 0 &&
          (Sa(t, n | 1), Ie(t, fe()), !(Q & 6) && ((qn = fe() + 500), en()));
      }
      break;
    case 13:
      gn(function () {
        var r = Rt(e, 1);
        if (r !== null) {
          var l = je();
          it(r, e, 1, l);
        }
      }),
        ba(e, 1);
  }
};
Ea = function (e) {
  if (e.tag === 13) {
    var t = Rt(e, 134217728);
    if (t !== null) {
      var n = je();
      it(t, e, 134217728, n);
    }
    ba(e, 134217728);
  }
};
Uc = function (e) {
  if (e.tag === 13) {
    var t = Yt(e),
      n = Rt(e, t);
    if (n !== null) {
      var r = je();
      it(n, e, t, r);
    }
    ba(e, t);
  }
};
$c = function () {
  return K;
};
Vc = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
xi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((vi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = mo(r);
            if (!l) throw Error(C(90));
            yc(r), vi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Sc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Un(e, !!n.multiple, t, !1);
  }
};
_c = Ya;
Mc = gn;
var wh = { usingClientEntryPoint: !1, Events: [br, Nn, mo, Pc, Rc, Ya] },
  pr = {
    findFiberByHostInstance: on,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Sh = {
    bundleType: pr.bundleType,
    version: pr.version,
    rendererPackageName: pr.rendererPackageName,
    rendererConfig: pr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = jc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: pr.findFiberByHostInstance || gh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!kl.isDisabled && kl.supportsFiber)
    try {
      (co = kl.inject(Sh)), (ht = kl);
    } catch {}
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wh;
We.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!tu(t)) throw Error(C(200));
  return vh(e, t, null, n);
};
We.createRoot = function (e, t) {
  if (!tu(e)) throw Error(C(299));
  var n = !1,
    r = "",
    l = fd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = qa(e, 1, !1, null, null, n, !1, r, l)),
    (e[Pt] = t.current),
    $r(e.nodeType === 8 ? e.parentNode : e),
    new eu(t)
  );
};
We.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = jc(t)), (e = e === null ? null : e.stateNode), e;
};
We.flushSync = function (e) {
  return gn(e);
};
We.hydrate = function (e, t, n) {
  if (!Co(t)) throw Error(C(200));
  return Po(null, e, t, !0, n);
};
We.hydrateRoot = function (e, t, n) {
  if (!tu(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = fd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = cd(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Pt] = t.current),
    $r(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new xo(t);
};
We.render = function (e, t, n) {
  if (!Co(t)) throw Error(C(200));
  return Po(null, e, t, !1, n);
};
We.unmountComponentAtNode = function (e) {
  if (!Co(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (gn(function () {
        Po(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Pt] = null);
        });
      }),
      !0)
    : !1;
};
We.unstable_batchedUpdates = Ya;
We.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Co(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Po(e, t, n, !1, r);
};
We.version = "18.2.0-next-9e3b772b8-20220608";
function dd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dd);
    } catch (e) {
      console.error(e);
    }
}
dd(), (sc.exports = We);
var Eh = sc.exports,
  pd,
  Cs = Eh;
(pd = Cs.createRoot), Cs.hydrateRoot;
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ne() {
  return (
    (ne = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ne.apply(this, arguments)
  );
}
var pe;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(pe || (pe = {}));
const Ps = "popstate";
function kh(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location;
    return Xr(
      "",
      { pathname: o, search: i, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : tl(l);
  }
  return Ch(t, n, null, e);
}
function Z(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function bn(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function xh() {
  return Math.random().toString(36).substr(2, 8);
}
function Rs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Xr(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ne(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Lt(t) : t,
      { state: n, key: (t && t.key) || r || xh() }
    )
  );
}
function tl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Lt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Ch(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = pe.Pop,
    u = null,
    s = p();
  s == null && ((s = 0), i.replaceState(ne({}, i.state, { idx: s }), ""));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function v() {
    a = pe.Pop;
    let _ = p(),
      d = _ == null ? null : _ - s;
    (s = _), u && u({ action: a, location: S.location, delta: d });
  }
  function m(_, d) {
    a = pe.Push;
    let f = Xr(S.location, _, d);
    n && n(f, _), (s = p() + 1);
    let h = Rs(f, s),
      c = S.createHref(f);
    try {
      i.pushState(h, "", c);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError") throw x;
      l.location.assign(c);
    }
    o && u && u({ action: a, location: S.location, delta: 1 });
  }
  function E(_, d) {
    a = pe.Replace;
    let f = Xr(S.location, _, d);
    n && n(f, _), (s = p());
    let h = Rs(f, s),
      c = S.createHref(f);
    i.replaceState(h, "", c),
      o && u && u({ action: a, location: S.location, delta: 0 });
  }
  function w(_) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof _ == "string" ? _ : tl(_);
    return (
      Z(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, d)
    );
  }
  let S = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(_) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Ps, v),
        (u = _),
        () => {
          l.removeEventListener(Ps, v), (u = null);
        }
      );
    },
    createHref(_) {
      return t(l, _);
    },
    createURL: w,
    encodeLocation(_) {
      let d = w(_);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: E,
    go(_) {
      return i.go(_);
    },
  };
  return S;
}
var ce;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ce || (ce = {}));
const Ph = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Rh(e) {
  return e.index === !0;
}
function na(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        a = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (Z(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        Z(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Rh(l))
      ) {
        let u = ne({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = ne({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = na(l.children, t, i, r)), u
        );
      }
    })
  );
}
function Fn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Lt(t) : t,
    l = nl(r.pathname || "/", n);
  if (l == null) return null;
  let o = hd(e);
  _h(o);
  let i = null;
  for (let a = 0; i == null && a < o.length; ++a) i = Ah(o[a], Uh(l));
  return i;
}
function hd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (Z(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = dn([r, u.relativePath]),
      p = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (Z(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      hd(o.children, t, p, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: zh(s, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i);
      else for (let u of md(o.path)) l(o, i, u);
    }),
    t
  );
}
function md(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = md(r.join("/")),
    a = [];
  return (
    a.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
    l && a.push(...i),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function _h(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Oh(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Mh = /^:\w+$/,
  Lh = 3,
  Nh = 2,
  jh = 1,
  Th = 10,
  Dh = -2,
  _s = (e) => e === "*";
function zh(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(_s) && (r += Dh),
    t && (r += Nh),
    n
      .filter((l) => !_s(l))
      .reduce((l, o) => l + (Mh.test(o) ? Lh : o === "" ? jh : Th), r)
  );
}
function Oh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ah(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      u = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      p = Fh(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let v = a.route;
    o.push({
      params: r,
      pathname: dn([l, p.pathname]),
      pathnameBase: Wh(dn([l, p.pathnameBase])),
      route: v,
    }),
      p.pathnameBase !== "/" && (l = dn([l, p.pathnameBase]));
  }
  return o;
}
function Fh(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Ih(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, p, v) => {
      if (p === "*") {
        let m = a[v] || "";
        i = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (s[p] = $h(a[v] || "", p)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Ih(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    bn(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, a) => (r.push(a), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Uh(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      bn(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function $h(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      bn(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function nl(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Vh(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Lt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Hh(n, t)) : t,
    search: Zh(r),
    hash: Qh(l),
  };
}
function Hh(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ui(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function vd(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Bh(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Lt(e))
    : ((l = ne({}, e)),
      Z(
        !l.pathname || !l.pathname.includes("?"),
        ui("?", "pathname", "search", l)
      ),
      Z(
        !l.pathname || !l.pathname.includes("#"),
        ui("#", "pathname", "hash", l)
      ),
      Z(!l.search || !l.search.includes("#"), ui("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    a;
  if (r || i == null) a = n;
  else {
    let v = t.length - 1;
    if (i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (v -= 1);
      l.pathname = m.join("/");
    }
    a = v >= 0 ? t[v] : "/";
  }
  let u = Vh(l, a),
    s = i && i !== "/" && i.endsWith("/"),
    p = (o || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || p) && (u.pathname += "/"), u;
}
const dn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Wh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Zh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Qh = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class nu {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function gd(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const yd = ["post", "put", "patch", "delete"],
  Kh = new Set(yd),
  Yh = ["get", ...yd],
  Xh = new Set(Yh),
  Gh = new Set([301, 302, 303, 307, 308]),
  Jh = new Set([307, 308]),
  si = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  qh = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  hr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  wd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  bh = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function e1(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  Z(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let g = e.detectErrorBoundary;
    l = (y) => ({ hasErrorBoundary: g(y) });
  } else l = bh;
  let o = {},
    i = na(e.routes, l, void 0, o),
    a,
    u = e.basename || "/",
    s = ne({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    p = null,
    v = new Set(),
    m = null,
    E = null,
    w = null,
    S = e.hydrationData != null,
    _ = Fn(i, e.history.location, u),
    d = null;
  if (_ == null) {
    let g = Qe(404, { pathname: e.history.location.pathname }),
      { matches: y, route: k } = Os(i);
    (_ = y), (d = { [k.id]: g });
  }
  let f =
      !_.some((g) => g.route.lazy) &&
      (!_.some((g) => g.route.loader) || e.hydrationData != null),
    h,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: _,
      initialized: f,
      navigation: si,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    x = pe.Pop,
    R = !1,
    P,
    N = !1,
    W = !1,
    I = [],
    ye = [],
    J = new Map(),
    ut = 0,
    Nt = -1,
    jt = new Map(),
    Ue = new Set(),
    st = new Map(),
    M = new Map(),
    F = new Map(),
    H = !1;
  function le() {
    return (
      (p = e.history.listen((g) => {
        let { action: y, location: k, delta: T } = g;
        if (H) {
          H = !1;
          return;
        }
        bn(
          F.size === 0 || T != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let V = du({
          currentLocation: c.location,
          nextLocation: k,
          historyAction: y,
        });
        if (V && T != null) {
          (H = !0),
            e.history.go(T * -1),
            ll(V, {
              state: "blocked",
              location: k,
              proceed() {
                ll(V, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(T);
              },
              reset() {
                let U = new Map(c.blockers);
                U.set(V, hr), q({ blockers: U });
              },
            });
          return;
        }
        return Tt(y, k);
      })),
      c.initialized || Tt(pe.Pop, c.location),
      h
    );
  }
  function de() {
    p && p(),
      v.clear(),
      P && P.abort(),
      c.fetchers.forEach((g, y) => Lo(y)),
      c.blockers.forEach((g, y) => fu(y));
  }
  function Sn(g) {
    return v.add(g), () => v.delete(g);
  }
  function q(g) {
    (c = ne({}, c, g)), v.forEach((y) => y(c));
  }
  function vt(g, y) {
    var k, T;
    let V =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        rt(c.navigation.formMethod) &&
        c.navigation.state === "loading" &&
        ((k = g.state) == null ? void 0 : k._isRedirect) !== !0,
      U;
    y.actionData
      ? Object.keys(y.actionData).length > 0
        ? (U = y.actionData)
        : (U = null)
      : V
      ? (U = c.actionData)
      : (U = null);
    let $ = y.loaderData
        ? zs(c.loaderData, y.loaderData, y.matches || [], y.errors)
        : c.loaderData,
      A = c.blockers;
    A.size > 0 && ((A = new Map(A)), A.forEach((G, ke) => A.set(ke, hr)));
    let O =
      R === !0 ||
      (c.navigation.formMethod != null &&
        rt(c.navigation.formMethod) &&
        ((T = g.state) == null ? void 0 : T._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      N ||
        x === pe.Pop ||
        (x === pe.Push
          ? e.history.push(g, g.state)
          : x === pe.Replace && e.history.replace(g, g.state)),
      q(
        ne({}, y, {
          actionData: U,
          loaderData: $,
          historyAction: x,
          location: g,
          initialized: !0,
          navigation: si,
          revalidation: "idle",
          restoreScrollPosition: hu(g, y.matches || c.matches),
          preventScrollReset: O,
          blockers: A,
        })
      ),
      (x = pe.Pop),
      (R = !1),
      (N = !1),
      (W = !1),
      (I = []),
      (ye = []);
  }
  async function ct(g, y) {
    if (typeof g == "number") {
      e.history.go(g);
      return;
    }
    let k = ra(
        c.location,
        c.matches,
        u,
        s.v7_prependBasename,
        g,
        y == null ? void 0 : y.fromRouteId,
        y == null ? void 0 : y.relative
      ),
      {
        path: T,
        submission: V,
        error: U,
      } = Ms(s.v7_normalizeFormMethod, !1, k, y),
      $ = c.location,
      A = Xr(c.location, T, y && y.state);
    A = ne({}, A, e.history.encodeLocation(A));
    let O = y && y.replace != null ? y.replace : void 0,
      G = pe.Push;
    O === !0
      ? (G = pe.Replace)
      : O === !1 ||
        (V != null &&
          rt(V.formMethod) &&
          V.formAction === c.location.pathname + c.location.search &&
          (G = pe.Replace));
    let ke =
        y && "preventScrollReset" in y ? y.preventScrollReset === !0 : void 0,
      Y = du({ currentLocation: $, nextLocation: A, historyAction: G });
    if (Y) {
      ll(Y, {
        state: "blocked",
        location: A,
        proceed() {
          ll(Y, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: A,
          }),
            ct(g, y);
        },
        reset() {
          let se = new Map(c.blockers);
          se.set(Y, hr), q({ blockers: se });
        },
      });
      return;
    }
    return await Tt(G, A, {
      submission: V,
      pendingError: U,
      preventScrollReset: ke,
      replace: y && y.replace,
    });
  }
  function En() {
    if (
      (Mo(),
      q({ revalidation: "loading" }),
      c.navigation.state !== "submitting")
    ) {
      if (c.navigation.state === "idle") {
        Tt(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Tt(x || c.historyAction, c.navigation.location, {
        overrideNavigation: c.navigation,
      });
    }
  }
  async function Tt(g, y, k) {
    P && P.abort(),
      (P = null),
      (x = g),
      (N = (k && k.startUninterruptedRevalidation) === !0),
      Qd(c.location, c.matches),
      (R = (k && k.preventScrollReset) === !0);
    let T = a || i,
      V = k && k.overrideNavigation,
      U = Fn(T, y, u);
    if (!U) {
      let se = Qe(404, { pathname: y.pathname }),
        { matches: we, route: tn } = Os(T);
      No(), vt(y, { matches: we, loaderData: {}, errors: { [tn.id]: se } });
      return;
    }
    if (
      c.initialized &&
      !W &&
      o1(c.location, y) &&
      !(k && k.submission && rt(k.submission.formMethod))
    ) {
      vt(y, { matches: U });
      return;
    }
    P = new AbortController();
    let $ = vr(e.history, y, P.signal, k && k.submission),
      A,
      O;
    if (k && k.pendingError) O = { [In(U).route.id]: k.pendingError };
    else if (k && k.submission && rt(k.submission.formMethod)) {
      let se = await Ud($, y, k.submission, U, { replace: k.replace });
      if (se.shortCircuited) return;
      (A = se.pendingActionData),
        (O = se.pendingActionError),
        (V = xl(y, k.submission)),
        ($ = new Request($.url, { signal: $.signal }));
    }
    let {
      shortCircuited: G,
      loaderData: ke,
      errors: Y,
    } = await $d(
      $,
      y,
      U,
      V,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      A,
      O
    );
    G ||
      ((P = null),
      vt(
        y,
        ne({ matches: U }, A ? { actionData: A } : {}, {
          loaderData: ke,
          errors: Y,
        })
      ));
  }
  async function Ud(g, y, k, T, V) {
    V === void 0 && (V = {}), Mo();
    let U = c1(y, k);
    q({ navigation: U });
    let $,
      A = oa(T, y);
    if (!A.route.action && !A.route.lazy)
      $ = {
        type: ce.error,
        error: Qe(405, {
          method: g.method,
          pathname: y.pathname,
          routeId: A.route.id,
        }),
      };
    else if ((($ = await mr("action", g, A, T, o, l, u)), g.signal.aborted))
      return { shortCircuited: !0 };
    if (Zn($)) {
      let O;
      return (
        V && V.replace != null
          ? (O = V.replace)
          : (O = $.location === c.location.pathname + c.location.search),
        await rr(c, $, { submission: k, replace: O }),
        { shortCircuited: !0 }
      );
    }
    if (jr($)) {
      let O = In(T, A.route.id);
      return (
        (V && V.replace) !== !0 && (x = pe.Push),
        { pendingActionData: {}, pendingActionError: { [O.route.id]: $.error } }
      );
    }
    if (sn($)) throw Qe(400, { type: "defer-action" });
    return { pendingActionData: { [A.route.id]: $.data } };
  }
  async function $d(g, y, k, T, V, U, $, A, O) {
    let G = T || xl(y, V),
      ke = V || U || Is(G),
      Y = a || i,
      [se, we] = Ls(e.history, c, k, ke, y, W, I, ye, st, Ue, Y, u, A, O);
    if (
      (No(
        (X) =>
          !(k && k.some((be) => be.route.id === X)) ||
          (se && se.some((be) => be.route.id === X))
      ),
      (Nt = ++ut),
      se.length === 0 && we.length === 0)
    ) {
      let X = su();
      return (
        vt(
          y,
          ne(
            { matches: k, loaderData: {}, errors: O || null },
            A ? { actionData: A } : {},
            X ? { fetchers: new Map(c.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!N) {
      we.forEach((be) => {
        let zt = c.fetchers.get(be.key),
          Oo = gr(void 0, zt ? zt.data : void 0);
        c.fetchers.set(be.key, Oo);
      });
      let X = A || c.actionData;
      q(
        ne(
          { navigation: G },
          X
            ? Object.keys(X).length === 0
              ? { actionData: null }
              : { actionData: X }
            : {},
          we.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
        )
      );
    }
    we.forEach((X) => {
      J.has(X.key) && Dt(X.key), X.controller && J.set(X.key, X.controller);
    });
    let tn = () => we.forEach((X) => Dt(X.key));
    P && P.signal.addEventListener("abort", tn);
    let {
      results: nn,
      loaderResults: lr,
      fetcherResults: jo,
    } = await au(c.matches, k, se, we, g);
    if (g.signal.aborted) return { shortCircuited: !0 };
    P && P.signal.removeEventListener("abort", tn),
      we.forEach((X) => J.delete(X.key));
    let gt = As(nn);
    if (gt) {
      if (gt.idx >= se.length) {
        let X = we[gt.idx - se.length].key;
        Ue.add(X);
      }
      return await rr(c, gt.result, { replace: $ }), { shortCircuited: !0 };
    }
    let { loaderData: yt, errors: ol } = Ds(c, k, se, lr, O, we, jo, M);
    M.forEach((X, be) => {
      X.subscribe((zt) => {
        (zt || X.done) && M.delete(be);
      });
    });
    let To = su(),
      Do = cu(Nt),
      zo = To || Do || we.length > 0;
    return ne(
      { loaderData: yt, errors: ol },
      zo ? { fetchers: new Map(c.fetchers) } : {}
    );
  }
  function iu(g) {
    return c.fetchers.get(g) || qh;
  }
  function Vd(g, y, k, T) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    J.has(g) && Dt(g);
    let V = a || i,
      U = ra(
        c.location,
        c.matches,
        u,
        s.v7_prependBasename,
        k,
        y,
        T == null ? void 0 : T.relative
      ),
      $ = Fn(V, U, u);
    if (!$) {
      rl(g, y, Qe(404, { pathname: U }));
      return;
    }
    let {
      path: A,
      submission: O,
      error: G,
    } = Ms(s.v7_normalizeFormMethod, !0, U, T);
    if (G) {
      rl(g, y, G);
      return;
    }
    let ke = oa($, A);
    if (((R = (T && T.preventScrollReset) === !0), O && rt(O.formMethod))) {
      Hd(g, y, A, ke, $, O);
      return;
    }
    st.set(g, { routeId: y, path: A }), Bd(g, y, A, ke, $, O);
  }
  async function Hd(g, y, k, T, V, U) {
    if ((Mo(), st.delete(g), !T.route.action && !T.route.lazy)) {
      let me = Qe(405, { method: U.formMethod, pathname: k, routeId: y });
      rl(g, y, me);
      return;
    }
    let $ = c.fetchers.get(g),
      A = f1(U, $);
    c.fetchers.set(g, A), q({ fetchers: new Map(c.fetchers) });
    let O = new AbortController(),
      G = vr(e.history, k, O.signal, U);
    J.set(g, O);
    let ke = ut,
      Y = await mr("action", G, T, V, o, l, u);
    if (G.signal.aborted) {
      J.get(g) === O && J.delete(g);
      return;
    }
    if (Zn(Y))
      if ((J.delete(g), Nt > ke)) {
        let me = Cn(void 0);
        c.fetchers.set(g, me), q({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        Ue.add(g);
        let me = gr(U);
        return (
          c.fetchers.set(g, me),
          q({ fetchers: new Map(c.fetchers) }),
          rr(c, Y, { submission: U, isFetchActionRedirect: !0 })
        );
      }
    if (jr(Y)) {
      rl(g, y, Y.error);
      return;
    }
    if (sn(Y)) throw Qe(400, { type: "defer-action" });
    let se = c.navigation.location || c.location,
      we = vr(e.history, se, O.signal),
      tn = a || i,
      nn =
        c.navigation.state !== "idle"
          ? Fn(tn, c.navigation.location, u)
          : c.matches;
    Z(nn, "Didn't find any matches after fetcher action");
    let lr = ++ut;
    jt.set(g, lr);
    let jo = gr(U, Y.data);
    c.fetchers.set(g, jo);
    let [gt, yt] = Ls(
      e.history,
      c,
      nn,
      U,
      se,
      W,
      I,
      ye,
      st,
      Ue,
      tn,
      u,
      { [T.route.id]: Y.data },
      void 0
    );
    yt
      .filter((me) => me.key !== g)
      .forEach((me) => {
        let or = me.key,
          mu = c.fetchers.get(or),
          Yd = gr(void 0, mu ? mu.data : void 0);
        c.fetchers.set(or, Yd),
          J.has(or) && Dt(or),
          me.controller && J.set(or, me.controller);
      }),
      q({ fetchers: new Map(c.fetchers) });
    let ol = () => yt.forEach((me) => Dt(me.key));
    O.signal.addEventListener("abort", ol);
    let {
      results: To,
      loaderResults: Do,
      fetcherResults: zo,
    } = await au(c.matches, nn, gt, yt, we);
    if (O.signal.aborted) return;
    O.signal.removeEventListener("abort", ol),
      jt.delete(g),
      J.delete(g),
      yt.forEach((me) => J.delete(me.key));
    let X = As(To);
    if (X) {
      if (X.idx >= gt.length) {
        let me = yt[X.idx - gt.length].key;
        Ue.add(me);
      }
      return rr(c, X.result);
    }
    let { loaderData: be, errors: zt } = Ds(
      c,
      c.matches,
      gt,
      Do,
      void 0,
      yt,
      zo,
      M
    );
    if (c.fetchers.has(g)) {
      let me = Cn(Y.data);
      c.fetchers.set(g, me);
    }
    let Oo = cu(lr);
    c.navigation.state === "loading" && lr > Nt
      ? (Z(x, "Expected pending action"),
        P && P.abort(),
        vt(c.navigation.location, {
          matches: nn,
          loaderData: be,
          errors: zt,
          fetchers: new Map(c.fetchers),
        }))
      : (q(
          ne(
            { errors: zt, loaderData: zs(c.loaderData, be, nn, zt) },
            Oo || yt.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
          )
        ),
        (W = !1));
  }
  async function Bd(g, y, k, T, V, U) {
    let $ = c.fetchers.get(g),
      A = gr(U, $ ? $.data : void 0);
    c.fetchers.set(g, A), q({ fetchers: new Map(c.fetchers) });
    let O = new AbortController(),
      G = vr(e.history, k, O.signal);
    J.set(g, O);
    let ke = ut,
      Y = await mr("loader", G, T, V, o, l, u);
    if (
      (sn(Y) && (Y = (await kd(Y, G.signal, !0)) || Y),
      J.get(g) === O && J.delete(g),
      G.signal.aborted)
    )
      return;
    if (Zn(Y))
      if (Nt > ke) {
        let we = Cn(void 0);
        c.fetchers.set(g, we), q({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        Ue.add(g), await rr(c, Y);
        return;
      }
    if (jr(Y)) {
      let we = In(c.matches, y);
      c.fetchers.delete(g),
        q({
          fetchers: new Map(c.fetchers),
          errors: { [we.route.id]: Y.error },
        });
      return;
    }
    Z(!sn(Y), "Unhandled fetcher deferred data");
    let se = Cn(Y.data);
    c.fetchers.set(g, se), q({ fetchers: new Map(c.fetchers) });
  }
  async function rr(g, y, k) {
    let {
      submission: T,
      replace: V,
      isFetchActionRedirect: U,
    } = k === void 0 ? {} : k;
    y.revalidate && (W = !0);
    let $ = Xr(
      g.location,
      y.location,
      ne({ _isRedirect: !0 }, U ? { _isFetchActionRedirect: !0 } : {})
    );
    if ((Z($, "Expected a location on the redirect navigation"), n)) {
      let G = !1;
      if (y.reloadDocument) G = !0;
      else if (wd.test(y.location)) {
        const ke = e.history.createURL(y.location);
        G = ke.origin !== t.location.origin || nl(ke.pathname, u) == null;
      }
      if (G) {
        V ? t.location.replace(y.location) : t.location.assign(y.location);
        return;
      }
    }
    P = null;
    let A = V === !0 ? pe.Replace : pe.Push,
      O = T || Is(g.navigation);
    if (Jh.has(y.status) && O && rt(O.formMethod))
      await Tt(A, $, {
        submission: ne({}, O, { formAction: y.location }),
        preventScrollReset: R,
      });
    else if (U)
      await Tt(A, $, {
        overrideNavigation: xl($),
        fetcherSubmission: O,
        preventScrollReset: R,
      });
    else {
      let G = xl($, O);
      await Tt(A, $, { overrideNavigation: G, preventScrollReset: R });
    }
  }
  async function au(g, y, k, T, V) {
    let U = await Promise.all([
        ...k.map((O) => mr("loader", V, O, y, o, l, u)),
        ...T.map((O) =>
          O.matches && O.match && O.controller
            ? mr(
                "loader",
                vr(e.history, O.path, O.controller.signal),
                O.match,
                O.matches,
                o,
                l,
                u
              )
            : { type: ce.error, error: Qe(404, { pathname: O.path }) }
        ),
      ]),
      $ = U.slice(0, k.length),
      A = U.slice(k.length);
    return (
      await Promise.all([
        Fs(
          g,
          k,
          $,
          $.map(() => V.signal),
          !1,
          c.loaderData
        ),
        Fs(
          g,
          T.map((O) => O.match),
          A,
          T.map((O) => (O.controller ? O.controller.signal : null)),
          !0
        ),
      ]),
      { results: U, loaderResults: $, fetcherResults: A }
    );
  }
  function Mo() {
    (W = !0),
      I.push(...No()),
      st.forEach((g, y) => {
        J.has(y) && (ye.push(y), Dt(y));
      });
  }
  function rl(g, y, k) {
    let T = In(c.matches, y);
    Lo(g), q({ errors: { [T.route.id]: k }, fetchers: new Map(c.fetchers) });
  }
  function Lo(g) {
    let y = c.fetchers.get(g);
    J.has(g) && !(y && y.state === "loading" && jt.has(g)) && Dt(g),
      st.delete(g),
      jt.delete(g),
      Ue.delete(g),
      c.fetchers.delete(g);
  }
  function Dt(g) {
    let y = J.get(g);
    Z(y, "Expected fetch controller: " + g), y.abort(), J.delete(g);
  }
  function uu(g) {
    for (let y of g) {
      let k = iu(y),
        T = Cn(k.data);
      c.fetchers.set(y, T);
    }
  }
  function su() {
    let g = [],
      y = !1;
    for (let k of Ue) {
      let T = c.fetchers.get(k);
      Z(T, "Expected fetcher: " + k),
        T.state === "loading" && (Ue.delete(k), g.push(k), (y = !0));
    }
    return uu(g), y;
  }
  function cu(g) {
    let y = [];
    for (let [k, T] of jt)
      if (T < g) {
        let V = c.fetchers.get(k);
        Z(V, "Expected fetcher: " + k),
          V.state === "loading" && (Dt(k), jt.delete(k), y.push(k));
      }
    return uu(y), y.length > 0;
  }
  function Wd(g, y) {
    let k = c.blockers.get(g) || hr;
    return F.get(g) !== y && F.set(g, y), k;
  }
  function fu(g) {
    c.blockers.delete(g), F.delete(g);
  }
  function ll(g, y) {
    let k = c.blockers.get(g) || hr;
    Z(
      (k.state === "unblocked" && y.state === "blocked") ||
        (k.state === "blocked" && y.state === "blocked") ||
        (k.state === "blocked" && y.state === "proceeding") ||
        (k.state === "blocked" && y.state === "unblocked") ||
        (k.state === "proceeding" && y.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + y.state
    );
    let T = new Map(c.blockers);
    T.set(g, y), q({ blockers: T });
  }
  function du(g) {
    let { currentLocation: y, nextLocation: k, historyAction: T } = g;
    if (F.size === 0) return;
    F.size > 1 && bn(!1, "A router only supports one blocker at a time");
    let V = Array.from(F.entries()),
      [U, $] = V[V.length - 1],
      A = c.blockers.get(U);
    if (
      !(A && A.state === "proceeding") &&
      $({ currentLocation: y, nextLocation: k, historyAction: T })
    )
      return U;
  }
  function No(g) {
    let y = [];
    return (
      M.forEach((k, T) => {
        (!g || g(T)) && (k.cancel(), y.push(T), M.delete(T));
      }),
      y
    );
  }
  function Zd(g, y, k) {
    if (((m = g), (w = y), (E = k || null), !S && c.navigation === si)) {
      S = !0;
      let T = hu(c.location, c.matches);
      T != null && q({ restoreScrollPosition: T });
    }
    return () => {
      (m = null), (w = null), (E = null);
    };
  }
  function pu(g, y) {
    return (
      (E &&
        E(
          g,
          y.map((T) => s1(T, c.loaderData))
        )) ||
      g.key
    );
  }
  function Qd(g, y) {
    if (m && w) {
      let k = pu(g, y);
      m[k] = w();
    }
  }
  function hu(g, y) {
    if (m) {
      let k = pu(g, y),
        T = m[k];
      if (typeof T == "number") return T;
    }
    return null;
  }
  function Kd(g) {
    (o = {}), (a = na(g, l, void 0, o));
  }
  return (
    (h = {
      get basename() {
        return u;
      },
      get state() {
        return c;
      },
      get routes() {
        return i;
      },
      initialize: le,
      subscribe: Sn,
      enableScrollRestoration: Zd,
      navigate: ct,
      fetch: Vd,
      revalidate: En,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: iu,
      deleteFetcher: Lo,
      dispose: de,
      getBlocker: Wd,
      deleteBlocker: fu,
      _internalFetchControllers: J,
      _internalActiveDeferreds: M,
      _internalSetRoutes: Kd,
    }),
    h
  );
}
function t1(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function ra(e, t, n, r, l, o, i) {
  let a, u;
  if (o != null && i !== "path") {
    a = [];
    for (let p of t)
      if ((a.push(p), p.route.id === o)) {
        u = p;
        break;
      }
  } else (a = t), (u = t[t.length - 1]);
  let s = Bh(
    l || ".",
    vd(a).map((p) => p.pathnameBase),
    nl(e.pathname, n) || e.pathname,
    i === "path"
  );
  return (
    l == null && ((s.search = e.search), (s.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      u &&
      u.route.index &&
      !ru(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (s.pathname = s.pathname === "/" ? n : dn([n, s.pathname])),
    tl(s)
  );
}
function Ms(e, t, n, r) {
  if (!r || !t1(r)) return { path: n };
  if (r.formMethod && !u1(r.formMethod))
    return { path: n, error: Qe(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Qe(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    a = Ed(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!rt(i)) return l();
      let m =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((E, w) => {
              let [S, _] = w;
              return (
                "" +
                E +
                S +
                "=" +
                _ +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!rt(i)) return l();
      try {
        let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  Z(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let u, s;
  if (r.formData) (u = la(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = la(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = Ts(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = Ts(u));
    } catch {
      return l();
    }
  let p = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (rt(p.formMethod)) return { path: n, submission: p };
  let v = Lt(n);
  return (
    t && v.search && ru(v.search) && u.append("index", ""),
    (v.search = "?" + u),
    { path: tl(v), submission: p }
  );
}
function n1(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Ls(e, t, n, r, l, o, i, a, u, s, p, v, m, E) {
  let w = E ? Object.values(E)[0] : m ? Object.values(m)[0] : void 0,
    S = e.createURL(t.location),
    _ = e.createURL(l),
    d = E ? Object.keys(E)[0] : void 0,
    h = n1(n, d).filter((x, R) => {
      if (x.route.lazy) return !0;
      if (x.route.loader == null) return !1;
      if (r1(t.loaderData, t.matches[R], x) || i.some((W) => W === x.route.id))
        return !0;
      let P = t.matches[R],
        N = x;
      return Ns(
        x,
        ne(
          {
            currentUrl: S,
            currentParams: P.params,
            nextUrl: _,
            nextParams: N.params,
          },
          r,
          {
            actionResult: w,
            defaultShouldRevalidate:
              o ||
              S.pathname + S.search === _.pathname + _.search ||
              S.search !== _.search ||
              Sd(P, N),
          }
        )
      );
    }),
    c = [];
  return (
    u.forEach((x, R) => {
      if (!n.some((ye) => ye.route.id === x.routeId)) return;
      let P = Fn(p, x.path, v);
      if (!P) {
        c.push({
          key: R,
          routeId: x.routeId,
          path: x.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let N = t.fetchers.get(R),
        W = oa(P, x.path),
        I = !1;
      s.has(R)
        ? (I = !1)
        : a.includes(R)
        ? (I = !0)
        : N && N.state !== "idle" && N.data === void 0
        ? (I = o)
        : (I = Ns(
            W,
            ne(
              {
                currentUrl: S,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: _,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: w, defaultShouldRevalidate: o }
            )
          )),
        I &&
          c.push({
            key: R,
            routeId: x.routeId,
            path: x.path,
            matches: P,
            match: W,
            controller: new AbortController(),
          });
    }),
    [h, c]
  );
}
function r1(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Sd(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Ns(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function js(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  Z(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let u = l[i] !== void 0 && i !== "hasErrorBoundary";
    bn(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !u && !Ph.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, ne({}, t(l), { lazy: void 0 }));
}
async function mr(e, t, n, r, l, o, i, a) {
  a === void 0 && (a = {});
  let u,
    s,
    p,
    v = (w) => {
      let S,
        _ = new Promise((d, f) => (S = f));
      return (
        (p = () => S()),
        t.signal.addEventListener("abort", p),
        Promise.race([
          w({ request: t, params: n.params, context: a.requestContext }),
          _,
        ])
      );
    };
  try {
    let w = n.route[e];
    if (n.route.lazy)
      if (w) s = (await Promise.all([v(w), js(n.route, o, l)]))[0];
      else if ((await js(n.route, o, l), (w = n.route[e]), w)) s = await v(w);
      else if (e === "action") {
        let S = new URL(t.url),
          _ = S.pathname + S.search;
        throw Qe(405, { method: t.method, pathname: _, routeId: n.route.id });
      } else return { type: ce.data, data: void 0 };
    else if (w) s = await v(w);
    else {
      let S = new URL(t.url),
        _ = S.pathname + S.search;
      throw Qe(404, { pathname: _ });
    }
    Z(
      s !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (w) {
    (u = ce.error), (s = w);
  } finally {
    p && t.signal.removeEventListener("abort", p);
  }
  if (a1(s)) {
    let w = s.status;
    if (Gh.has(w)) {
      let d = s.headers.get("Location");
      if (
        (Z(
          d,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !wd.test(d))
      )
        d = ra(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, d);
      else if (!a.isStaticRequest) {
        let f = new URL(t.url),
          h = d.startsWith("//") ? new URL(f.protocol + d) : new URL(d),
          c = nl(h.pathname, i) != null;
        h.origin === f.origin && c && (d = h.pathname + h.search + h.hash);
      }
      if (a.isStaticRequest) throw (s.headers.set("Location", d), s);
      return {
        type: ce.redirect,
        status: w,
        location: d,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (a.isRouteRequest)
      throw { type: u === ce.error ? ce.error : ce.data, response: s };
    let S,
      _ = s.headers.get("Content-Type");
    return (
      _ && /\bapplication\/json\b/.test(_)
        ? (S = await s.json())
        : (S = await s.text()),
      u === ce.error
        ? { type: u, error: new nu(w, s.statusText, S), headers: s.headers }
        : { type: ce.data, data: S, statusCode: s.status, headers: s.headers }
    );
  }
  if (u === ce.error) return { type: u, error: s };
  if (i1(s)) {
    var m, E;
    return {
      type: ce.deferred,
      deferredData: s,
      statusCode: (m = s.init) == null ? void 0 : m.status,
      headers:
        ((E = s.init) == null ? void 0 : E.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: ce.data, data: s };
}
function vr(e, t, n, r) {
  let l = e.createURL(Ed(t)).toString(),
    o = { signal: n };
  if (r && rt(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (o.method = i.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (o.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = la(r.formData))
        : (o.body = r.formData);
  }
  return new Request(l, o);
}
function la(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Ts(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function l1(e, t, n, r, l) {
  let o = {},
    i = null,
    a,
    u = !1,
    s = {};
  return (
    n.forEach((p, v) => {
      let m = t[v].route.id;
      if (
        (Z(!Zn(p), "Cannot handle redirect results in processLoaderData"),
        jr(p))
      ) {
        let E = In(e, m),
          w = p.error;
        r && ((w = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[E.route.id] == null && (i[E.route.id] = w),
          (o[m] = void 0),
          u || ((u = !0), (a = gd(p.error) ? p.error.status : 500)),
          p.headers && (s[m] = p.headers);
      } else
        sn(p)
          ? (l.set(m, p.deferredData), (o[m] = p.deferredData.data))
          : (o[m] = p.data),
          p.statusCode != null &&
            p.statusCode !== 200 &&
            !u &&
            (a = p.statusCode),
          p.headers && (s[m] = p.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: a || 200, loaderHeaders: s }
  );
}
function Ds(e, t, n, r, l, o, i, a) {
  let { loaderData: u, errors: s } = l1(t, n, r, l, a);
  for (let p = 0; p < o.length; p++) {
    let { key: v, match: m, controller: E } = o[p];
    Z(
      i !== void 0 && i[p] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let w = i[p];
    if (!(E && E.signal.aborted))
      if (jr(w)) {
        let S = In(e.matches, m == null ? void 0 : m.route.id);
        (s && s[S.route.id]) || (s = ne({}, s, { [S.route.id]: w.error })),
          e.fetchers.delete(v);
      } else if (Zn(w)) Z(!1, "Unhandled fetcher revalidation redirect");
      else if (sn(w)) Z(!1, "Unhandled fetcher deferred data");
      else {
        let S = Cn(w.data);
        e.fetchers.set(v, S);
      }
  }
  return { loaderData: u, errors: s };
}
function zs(e, t, n, r) {
  let l = ne({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function In(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Os(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Qe(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (a = "defer() is not supported in actions")
          : o === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((i = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = "Method Not Allowed"),
        l && n && r
          ? (a =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new nu(e || 500, i, new Error(a), !0)
  );
}
function As(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Zn(n)) return { result: n, idx: t };
  }
}
function Ed(e) {
  let t = typeof e == "string" ? Lt(e) : e;
  return tl(ne({}, t, { hash: "" }));
}
function o1(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function sn(e) {
  return e.type === ce.deferred;
}
function jr(e) {
  return e.type === ce.error;
}
function Zn(e) {
  return (e && e.type) === ce.redirect;
}
function i1(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function a1(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function u1(e) {
  return Xh.has(e.toLowerCase());
}
function rt(e) {
  return Kh.has(e.toLowerCase());
}
async function Fs(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      u = t[i];
    if (!u) continue;
    let s = e.find((v) => v.route.id === u.route.id),
      p = s != null && !Sd(s, u) && (o && o[u.route.id]) !== void 0;
    if (sn(a) && (l || p)) {
      let v = r[i];
      Z(v, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await kd(a, v, l).then((m) => {
          m && (n[i] = m || n[i]);
        });
    }
  }
}
async function kd(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ce.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: ce.error, error: l };
      }
    return { type: ce.data, data: e.deferredData.data };
  }
}
function ru(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function s1(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function oa(e, t) {
  let n = typeof t == "string" ? Lt(t).search : t.search;
  if (e[e.length - 1].route.index && ru(n || "")) return e[e.length - 1];
  let r = vd(e);
  return r[r.length - 1];
}
function Is(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function xl(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function c1(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function gr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
        " _hasFetcherDoneAnything ": !0,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
        " _hasFetcherDoneAnything ": !0,
      };
}
function f1(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
    " _hasFetcherDoneAnything ": !0,
  };
}
function Cn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
    " _hasFetcherDoneAnything ": !0,
  };
}
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ia() {
  return (
    (ia = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ia.apply(this, arguments)
  );
}
const xd = D.createContext(null),
  Cd = D.createContext(null),
  Pd = D.createContext(null),
  Ro = D.createContext(null),
  _o = D.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Rd = D.createContext(null);
function lu() {
  return D.useContext(Ro) != null;
}
function d1() {
  return lu() || Z(!1), D.useContext(Ro).location;
}
function p1(e, t, n) {
  lu() || Z(!1);
  let { navigator: r } = D.useContext(Pd),
    { matches: l } = D.useContext(_o),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let u = d1(),
    s;
  if (t) {
    var p;
    let S = typeof t == "string" ? Lt(t) : t;
    a === "/" || ((p = S.pathname) != null && p.startsWith(a)) || Z(!1),
      (s = S);
  } else s = u;
  let v = s.pathname || "/",
    m = a === "/" ? v : v.slice(a.length) || "/",
    E = Fn(e, { pathname: m }),
    w = y1(
      E &&
        E.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, i, S.params),
            pathname: dn([
              a,
              r.encodeLocation
                ? r.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? a
                : dn([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && w
    ? D.createElement(
        Ro.Provider,
        {
          value: {
            location: ia(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s
            ),
            navigationType: pe.Pop,
          },
        },
        w
      )
    : w;
}
function h1() {
  let e = k1(),
    t = gd(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return D.createElement(
    D.Fragment,
    null,
    D.createElement("h2", null, "Unexpected Application Error!"),
    D.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? D.createElement("pre", { style: l }, n) : null,
    o
  );
}
const m1 = D.createElement(h1, null);
class v1 extends D.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? D.createElement(
          _o.Provider,
          { value: this.props.routeContext },
          D.createElement(Rd.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function g1(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = D.useContext(xd);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    D.createElement(_o.Provider, { value: t }, r)
  );
}
function y1(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let a = o.findIndex(
      (u) => u.route.id && (i == null ? void 0 : i[u.route.id])
    );
    a >= 0 || Z(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
  }
  return o.reduceRight((a, u, s) => {
    let p = u.route.id ? (i == null ? void 0 : i[u.route.id]) : null,
      v = null;
    n && (v = u.route.errorElement || m1);
    let m = t.concat(o.slice(0, s + 1)),
      E = () => {
        let w;
        return (
          p
            ? (w = v)
            : u.route.Component
            ? (w = D.createElement(u.route.Component, null))
            : u.route.element
            ? (w = u.route.element)
            : (w = a),
          D.createElement(g1, {
            match: u,
            routeContext: { outlet: a, matches: m, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0)
      ? D.createElement(v1, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: p,
          children: E(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : E();
  }, null);
}
var aa = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(aa || {});
function w1(e) {
  let t = D.useContext(Cd);
  return t || Z(!1), t;
}
function S1(e) {
  let t = D.useContext(_o);
  return t || Z(!1), t;
}
function E1(e) {
  let t = S1(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Z(!1), n.route.id;
}
function k1() {
  var e;
  let t = D.useContext(Rd),
    n = w1(aa.UseRouteError),
    r = E1(aa.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
const x1 = "startTransition",
  Us = f0[x1];
function C1(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = D.useState(n.state),
    { v7_startTransition: i } = r || {},
    a = D.useCallback(
      (v) => {
        i && Us ? Us(() => o(v)) : o(v);
      },
      [o, i]
    );
  D.useLayoutEffect(() => n.subscribe(a), [n, a]);
  let u = D.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (v) => n.navigate(v),
        push: (v, m, E) =>
          n.navigate(v, {
            state: m,
            preventScrollReset: E == null ? void 0 : E.preventScrollReset,
          }),
        replace: (v, m, E) =>
          n.navigate(v, {
            replace: !0,
            state: m,
            preventScrollReset: E == null ? void 0 : E.preventScrollReset,
          }),
      }),
      [n]
    ),
    s = n.basename || "/",
    p = D.useMemo(
      () => ({ router: n, navigator: u, static: !1, basename: s }),
      [n, u, s]
    );
  return D.createElement(
    D.Fragment,
    null,
    D.createElement(
      xd.Provider,
      { value: p },
      D.createElement(
        Cd.Provider,
        { value: l },
        D.createElement(
          R1,
          {
            basename: s,
            location: l.location,
            navigationType: l.historyAction,
            navigator: u,
          },
          l.initialized
            ? D.createElement(P1, { routes: n.routes, state: l })
            : t
        )
      )
    ),
    null
  );
}
function P1(e) {
  let { routes: t, state: n } = e;
  return p1(t, void 0, n);
}
function R1(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = pe.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  lu() && Z(!1);
  let a = t.replace(/^\/*/, "/"),
    u = D.useMemo(() => ({ basename: a, navigator: o, static: i }), [a, o, i]);
  typeof r == "string" && (r = Lt(r));
  let {
      pathname: s = "/",
      search: p = "",
      hash: v = "",
      state: m = null,
      key: E = "default",
    } = r,
    w = D.useMemo(() => {
      let S = nl(s, a);
      return S == null
        ? null
        : {
            location: { pathname: S, search: p, hash: v, state: m, key: E },
            navigationType: l,
          };
    }, [a, s, p, v, m, E, l]);
  return w == null
    ? null
    : D.createElement(
        Pd.Provider,
        { value: u },
        D.createElement(Ro.Provider, { children: n, value: w })
      );
}
new Promise(() => {});
function _1(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: D.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: D.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function io() {
  return (
    (io = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    io.apply(this, arguments)
  );
}
function M1(e, t) {
  return e1({
    basename: t == null ? void 0 : t.basename,
    future: io({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: kh({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || L1(),
    routes: e,
    mapRouteProperties: _1,
  }).initialize();
}
function L1() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = io({}, t, { errors: N1(t.errors) })), t;
}
function N1(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new nu(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
var $s;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})($s || ($s = {}));
var Vs;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Vs || (Vs = {}));
const j1 = "./assets/cv-06d93939.pdf";
function T1() {
  const [e, t] = D.useState(!1),
    n = () => {
      t(!e);
    },
    r = () => {
      window.innerWidth > 820 && e && t(!1);
    };
  return (
    D.useEffect(
      () => (
        window.addEventListener("resize", r),
        () => {
          window.removeEventListener("resize", r);
        }
      ),
      [e]
    ),
    z.jsxs("header", {
      children: [
        z.jsx("h1", { children: "Alejandro Marín" }),
        z.jsx("button", {
          className: `hamburger ${e ? "nav-menu" : ""}`,
          onClick: n,
          children: "☰",
        }),
        z.jsxs("nav", {
          className: `nav-menu ${e ? "open" : "hidden"}`,
          children: [
            z.jsx("div", {
              className: `${e ? "close-menu open" : "hamburger"}`,
              onClick: n,
              children: z.jsx("span", { children: "X" }),
            }),
            z.jsxs("ul", {
              children: [
                z.jsx("li", {
                  children: z.jsx("a", { href: "#home", children: "Inicio" }),
                }),
                z.jsx("li", {
                  children: z.jsx("a", {
                    href: "#my-projects",
                    children: "Proyectos",
                  }),
                }),
                z.jsx("li", {
                  children: z.jsx("a", {
                    href: "#contact",
                    children: "Contacto",
                  }),
                }),
              ],
            }),
            z.jsx("button", {
              className: "btn-secondary",
              children: z.jsx("a", {
                href: j1,
                target: "_blank",
                rel: "noreferrer",
                children: "CV",
              }),
            }),
          ],
        }),
      ],
    })
  );
}
const D1 = D.createContext({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1,
});
var z1 = Object.defineProperty,
  ao = Object.getOwnPropertySymbols,
  _d = Object.prototype.hasOwnProperty,
  Md = Object.prototype.propertyIsEnumerable,
  Hs = (e, t, n) =>
    t in e
      ? z1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Bs = (e, t) => {
    for (var n in t || (t = {})) _d.call(t, n) && Hs(e, n, t[n]);
    if (ao) for (var n of ao(t)) Md.call(t, n) && Hs(e, n, t[n]);
    return e;
  },
  Ws = (e, t) => {
    var n = {};
    for (var r in e) _d.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ao)
      for (var r of ao(e)) t.indexOf(r) < 0 && Md.call(e, r) && (n[r] = e[r]);
    return n;
  };
const ou = D.forwardRef((e, t) => {
  const n = e,
    {
      alt: r,
      color: l,
      size: o,
      weight: i,
      mirrored: a,
      children: u,
      weights: s,
    } = n,
    p = Ws(n, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "weights",
    ]),
    v = D.useContext(D1),
    {
      color: m = "currentColor",
      size: E,
      weight: w = "regular",
      mirrored: S = !1,
    } = v,
    _ = Ws(v, ["color", "size", "weight", "mirrored"]);
  return j.createElement(
    "svg",
    Bs(
      Bs(
        {
          ref: t,
          xmlns: "http://www.w3.org/2000/svg",
          width: o ?? E,
          height: o ?? E,
          fill: l ?? m,
          viewBox: "0 0 256 256",
          transform: a || S ? "scale(-1, 1)" : void 0,
        },
        _
      ),
      p
    ),
    !!r && j.createElement("title", null, r),
    u,
    s.get(i ?? w)
  );
});
ou.displayName = "IconBase";
var O1 = Object.defineProperty,
  uo = Object.getOwnPropertySymbols,
  Ld = Object.prototype.hasOwnProperty,
  Nd = Object.prototype.propertyIsEnumerable,
  Zs = (e, t, n) =>
    t in e
      ? O1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  A1 = (e, t) => {
    for (var n in t || (t = {})) Ld.call(t, n) && Zs(e, n, t[n]);
    if (uo) for (var n of uo(t)) Nd.call(t, n) && Zs(e, n, t[n]);
    return e;
  },
  F1 = (e, t) => {
    var n = {};
    for (var r in e) Ld.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && uo)
      for (var r of uo(e)) t.indexOf(r) < 0 && Nd.call(e, r) && (n[r] = e[r]);
    return n;
  };
const jd = D.forwardRef((e, t) => {
  const n = e,
    {
      alt: r,
      color: l = "currentColor",
      size: o,
      weight: i = "regular",
      mirrored: a = !1,
      children: u,
      weights: s,
    } = n,
    p = F1(n, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "weights",
    ]);
  return j.createElement(
    "svg",
    A1(
      {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        fill: l,
        viewBox: "0 0 256 256",
        transform: a ? "scale(-1, 1)" : void 0,
      },
      p
    ),
    !!r && j.createElement("title", null, r),
    u,
    s.get(i)
  );
});
jd.displayName = "SSRBase";
const I1 = new Map([
    [
      "bold",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44Zm-96,83.72L62.85,68h130.3ZM92.79,128,44,172.72V83.28Zm17.76,16.28,9.34,8.57a12,12,0,0,0,16.22,0l9.34-8.57L193.15,188H62.85ZM163.21,128,212,83.28v89.44Z",
        })
      ),
    ],
    [
      "duotone",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", { d: "M224,56l-96,88L32,56Z", opacity: "0.2" }),
        j.createElement("path", {
          d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z",
        })
      ),
    ],
    [
      "fill",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z",
        })
      ),
    ],
    [
      "light",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50Zm-96,85.86L47.42,62H208.58ZM101.67,128,38,186.36V69.64Zm8.88,8.14L124,148.42a6,6,0,0,0,8.1,0l13.4-12.28L208.58,194H47.43ZM154.33,128,218,69.64V186.36Z",
        })
      ),
    ],
    [
      "regular",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z",
        })
      ),
    ],
    [
      "thin",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-96,86.57L42.28,60H213.72ZM104.63,128,36,190.91V65.09Zm5.92,5.43L125.3,147a4,4,0,0,0,5.4,0l14.75-13.52L213.72,196H42.28ZM151.37,128,220,65.09V190.91Z",
        })
      ),
    ],
  ]),
  U1 = new Map([
    [
      "bold",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z",
        })
      ),
    ],
    [
      "duotone",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z",
          opacity: "0.2",
        }),
        j.createElement("path", {
          d: "M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z",
        })
      ),
    ],
    [
      "fill",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z",
        })
      ),
    ],
    [
      "light",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M206.13,75.92A57.79,57.79,0,0,0,201.2,29a6,6,0,0,0-5.2-3,57.77,57.77,0,0,0-47,24H123A57.77,57.77,0,0,0,76,26a6,6,0,0,0-5.2,3,57.79,57.79,0,0,0-4.93,46.92A55.88,55.88,0,0,0,58,104v8a54.06,54.06,0,0,0,50.45,53.87A37.85,37.85,0,0,0,98,192v10H72a26,26,0,0,1-26-26A38,38,0,0,0,8,138a6,6,0,0,0,0,12,26,26,0,0,1,26,26,38,38,0,0,0,38,38H98v18a6,6,0,0,0,12,0V192a26,26,0,0,1,52,0v40a6,6,0,0,0,12,0V192a37.85,37.85,0,0,0-10.45-26.13A54.06,54.06,0,0,0,214,112v-8A55.88,55.88,0,0,0,206.13,75.92ZM202,112a42,42,0,0,1-42,42H112a42,42,0,0,1-42-42v-8a43.86,43.86,0,0,1,7.3-23.69,6,6,0,0,0,.81-5.76,45.85,45.85,0,0,1,1.43-36.42,45.85,45.85,0,0,1,35.23,21.1A6,6,0,0,0,119.83,62h32.34a6,6,0,0,0,5.06-2.76,45.83,45.83,0,0,1,35.23-21.11,45.85,45.85,0,0,1,1.43,36.42,6,6,0,0,0,.79,5.74A43.78,43.78,0,0,1,202,104Z",
        })
      ),
    ],
    [
      "regular",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z",
        })
      ),
    ],
    [
      "thin",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M203.94,76.16A55.73,55.73,0,0,0,199.46,30,4,4,0,0,0,196,28a55.78,55.78,0,0,0-46,24H122A55.78,55.78,0,0,0,76,28a4,4,0,0,0-3.46,2,55.73,55.73,0,0,0-4.48,46.16A53.78,53.78,0,0,0,60,104v8a52.06,52.06,0,0,0,52,52h1.41A36,36,0,0,0,100,192v12H72a28,28,0,0,1-28-28A36,36,0,0,0,8,140a4,4,0,0,0,0,8,28,28,0,0,1,28,28,36,36,0,0,0,36,36h28v20a4,4,0,0,0,8,0V192a28,28,0,0,1,56,0v40a4,4,0,0,0,8,0V192a36,36,0,0,0-13.41-28H160a52.06,52.06,0,0,0,52-52v-8A53.78,53.78,0,0,0,203.94,76.16ZM204,112a44.05,44.05,0,0,1-44,44H112a44.05,44.05,0,0,1-44-44v-8a45.76,45.76,0,0,1,7.71-24.89,4,4,0,0,0,.53-3.84,47.82,47.82,0,0,1,2.1-39.21,47.8,47.8,0,0,1,38.12,22.1A4,4,0,0,0,119.83,60h32.34a4,4,0,0,0,3.37-1.84,47.8,47.8,0,0,1,38.12-22.1,47.82,47.82,0,0,1,2.1,39.21,4,4,0,0,0,.53,3.83A45.85,45.85,0,0,1,204,104Z",
        })
      ),
    ],
  ]),
  $1 = new Map([
    [
      "bold",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V124a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,152v24a12,12,0,0,1-24,0V152a16,16,0,0,0-32,0v24a12,12,0,0,1-24,0ZM96,124v52a12,12,0,0,1-24,0V124a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z",
        })
      ),
    ],
    [
      "duotone",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z",
          opacity: "0.2",
        }),
        j.createElement("path", {
          d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
        })
      ),
    ],
    [
      "fill",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z",
        })
      ),
    ],
    [
      "light",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z",
        })
      ),
    ],
    [
      "regular",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
        })
      ),
    ],
    [
      "thin",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M216,28H40A12,12,0,0,0,28,40V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Zm4,188a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM92,112v64a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm88,28v36a4,4,0,0,1-8,0V140a24,24,0,0,0-48,0v36a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0v6.87A32,32,0,0,1,180,140ZM96,84a8,8,0,1,1-8-8A8,8,0,0,1,96,84Z",
        })
      ),
    ],
  ]);
var V1 = Object.defineProperty,
  H1 = Object.defineProperties,
  B1 = Object.getOwnPropertyDescriptors,
  Qs = Object.getOwnPropertySymbols,
  W1 = Object.prototype.hasOwnProperty,
  Z1 = Object.prototype.propertyIsEnumerable,
  Ks = (e, t, n) =>
    t in e
      ? V1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Q1 = (e, t) => {
    for (var n in t || (t = {})) W1.call(t, n) && Ks(e, n, t[n]);
    if (Qs) for (var n of Qs(t)) Z1.call(t, n) && Ks(e, n, t[n]);
    return e;
  },
  K1 = (e, t) => H1(e, B1(t));
const Td = D.forwardRef((e, t) =>
  j.createElement(jd, K1(Q1({ ref: t }, e), { weights: $1 }))
);
Td.displayName = "LinkedinLogo";
var Y1 = Object.defineProperty,
  X1 = Object.defineProperties,
  G1 = Object.getOwnPropertyDescriptors,
  Ys = Object.getOwnPropertySymbols,
  J1 = Object.prototype.hasOwnProperty,
  q1 = Object.prototype.propertyIsEnumerable,
  Xs = (e, t, n) =>
    t in e
      ? Y1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  b1 = (e, t) => {
    for (var n in t || (t = {})) J1.call(t, n) && Xs(e, n, t[n]);
    if (Ys) for (var n of Ys(t)) q1.call(t, n) && Xs(e, n, t[n]);
    return e;
  },
  em = (e, t) => X1(e, G1(t));
const Dd = D.forwardRef((e, t) =>
  j.createElement(ou, em(b1({ ref: t }, e), { weights: I1 }))
);
Dd.displayName = "Envelope";
var tm = Object.defineProperty,
  nm = Object.defineProperties,
  rm = Object.getOwnPropertyDescriptors,
  Gs = Object.getOwnPropertySymbols,
  lm = Object.prototype.hasOwnProperty,
  om = Object.prototype.propertyIsEnumerable,
  Js = (e, t, n) =>
    t in e
      ? tm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  im = (e, t) => {
    for (var n in t || (t = {})) lm.call(t, n) && Js(e, n, t[n]);
    if (Gs) for (var n of Gs(t)) om.call(t, n) && Js(e, n, t[n]);
    return e;
  },
  am = (e, t) => nm(e, rm(t));
const zd = D.forwardRef((e, t) =>
  j.createElement(ou, am(im({ ref: t }, e), { weights: U1 }))
);
zd.displayName = "GithubLogo";
const um = () =>
  z.jsxs("footer", {
    id: "contact",
    children: [
      z.jsx("h1", { children: "Contáctame" }),
      z.jsx("p", {
        children: "Siempre estoy en la escucha de nuevas oportunidades",
      }),
      z.jsx("a", {
        href: "https://github.com/aleins99",
        target: "_blank",
        rel: "noreferrer",
        alt: "Ir a la cuenta de GitHub de Alejandro",
        title: "Visitar mi cuenta de GitHub",
        children: z.jsx(zd, { size: "40" }),
      }),
      z.jsx("a", {
        href: "https://www.linkedin.com/in/alejandro-marin99/",
        target: "_blank",
        rel: "noreferrer",
        alt: "Ir a la cuenta de Linkedin de Alejandro",
        title: "Visitar mi cuenta de Linkedin",
        children: z.jsx(Td, { size: "40" }),
      }),
      z.jsx("a", {
        href: "mailto:amarininsfran@gmail.com",
        alt: "Enviar correo a Alejandro",
        title: "Envíame un correo para hablar",
        children: z.jsx(Dd, { size: "40" }),
      }),
      z.jsx("p", {
        style: { marginTop: "36px" },
        children: "Hecho por Alejandro Marín 👨‍💻❤️",
      }),
    ],
  });
const sm = () =>
  z.jsxs("div", {
    className: "home-page",
    id: "home",
    children: [
      z.jsx("span", { children: "Hola, mi nombre es" }),
      z.jsx("h1", { children: "Alejandro Marín" }),
      z.jsx("h1", { children: " Soy un Desarrollador Web de Paraguay 🇵🇾." }),
      z.jsx("p", {
        children:
          "Me encanta aprender y mejorar siempre tanto en lo personal como profesionalmente.",
      }),
      z.jsx("p", {
        children:
          "Cree esta página para compartir lo que voy aprendiendo y mostrar mis habilidades como desarrollador.",
      }),
    ],
  });
const cm = ({ imageSrc: e, description: t }) => {
  const [n, r] = D.useState(!1),
    l = () => {
      r(!n);
    };
  return z.jsx("div", {
    className: `card-container  ${n ? "flipped" : ""}`,
    onTouchStart: l,
    onTouchEnd: l,
    children: z.jsxs("div", {
      className: "card-inner",
      children: [
        z.jsx("div", {
          className: "card-front",
          children: z.jsx("img", { src: e, alt: "Imagen" }),
        }),
        z.jsx("div", {
          className: "card-back",
          children: z.jsx("p", { children: t }),
        }),
      ],
    }),
  });
};
var Od = { exports: {} },
  fm = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  dm = fm,
  pm = dm;
function Ad() {}
function Fd() {}
Fd.resetWarningCache = Ad;
var hm = function () {
  function e(r, l, o, i, a, u) {
    if (u !== pm) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Fd,
    resetWarningCache: Ad,
  };
  return (n.PropTypes = n), n;
};
Od.exports = hm();
var mm = Od.exports;
const xn = qs(mm),
  Id = ({ title: e, description: t, technologies: n, link: r, image: l }) =>
    z.jsxs("div", {
      className: "project-card",
      children: [
        z.jsxs("div", {
          className: "upper",
          children: [
            z.jsx("h3", { children: e }),
            z.jsx(cm, { imageSrc: l, description: t }),
          ],
        }),
        z.jsxs("div", {
          className: "project-tech",
          children: [
            z.jsx("p", { children: "Tecnologías utilizadas:" }),
            z.jsx("ul", {
              children: n.map((o, i) => z.jsx("li", { children: o }, i)),
            }),
          ],
        }),
        z.jsx("a", {
          className: "btn-primary",
          href: r,
          target: "_blank",
          rel: "noreferrer",
          children: "Código Fuente",
        }),
      ],
    });
Id.propTypes = {
  title: xn.string.isRequired,
  description: xn.string.isRequired,
  technologies: xn.arrayOf(xn.string).isRequired,
  link: xn.string.isRequired,
  image: xn.string.isRequired,
};
const vm = "./assets/monster-rolodex-a77e7000.png",
  gm = "./assets/pig-game-ebed7a3d.png",
  ym = "./assets/turnero-c71882bb.png",
  wm = "./assets/adoptPet-d339442f.png",
  Sm = "./assets/cofeetime-8ab2d905.png",
  Em = "./assets/agileProject-076a2588.png",
  km = [
    {
      title: "CofeeTime",
      description:
        "Sistema de Cafetería con uso de roles como Administrador, Recepcionista y Cocinero, cada uno con una pantalla diferente.",
      image: Sm,
      technologies: [
        "Django REST Framework",
        "React",
        "Tailwind CSS",
        "MongoDB",
        "JWT",
        "Docker",
      ],
      link: "https://github.com/aleins99/CofeeTime",
    },
    {
      title: "Agile Project",
      description:
        "Sistema de Proyectos basada en la metodología SCRUM, donde puedes crear proyectos, crear roles, agregar tareas, agregar miembros, agregar comentarios,manejo de us, tablero kanban, historial de proyectos y avisos por correo. ",
      technologies: [
        "Bootstrap",
        "OAuth2",
        "JavaScript",
        "Django",
        "AJAX",
        "PostgreSQL",
      ],
      image: Em,
      link: "https://github.com/aleins99/PROYECTO_IS2",
    },
    {
      title: "Turnero",
      description:
        "Sistema de registro turnos, donde puedes agregar diferentes categorías y ordenarlas por preferencia o condición de salud.",
      technologies: ["Django", "HTML", "CSS", "PostgreSQL"],
      image: ym,
      link: "https://github.com/aleins99/Turnero",
    },
    {
      title: "Adopt Me",
      description:
        "Una página que simula el proceso de adoptar animales por medio de una página web.",
      technologies: ["React", "CSS"],
      image: wm,
      link: "https://github.com/aleins99/AdoptPet",
    },
    {
      title: "Monster Rolodex",
      description: "Mi primer proyecto usando React ⚛. ",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      image: vm,
      link: "",
    },
    {
      title: "Pig Game",
      description: "Este es un juego de 2 jugadores para pasarla bien :).",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: gm,
      link: "https://github.com/aleins99/Pig-Game",
    },
  ],
  xm = () =>
    z.jsxs("div", {
      id: "my-projects",
      children: [
        z.jsx("h2", { children: "Mis Proyectos" }),
        z.jsx("div", {
          id: "projects",
          children: km.map((e, t) => z.jsx(Id, { ...e }, t)),
        }),
      ],
    });
const Cm = () => z.jsx("div", {});
function Pm() {
  return z.jsxs("div", {
    className: "app",
    children: [
      z.jsx(T1, {}),
      z.jsx(sm, {}),
      z.jsx(Cm, {}),
      z.jsx(xm, {}),
      z.jsx(um, {}),
    ],
  });
}
const Rm = M1([{ path: "*", Component: Pm }]);
pd(document.getElementById("root")).render(
  z.jsx(D.StrictMode, { children: z.jsx(C1, { router: Rm }) })
);

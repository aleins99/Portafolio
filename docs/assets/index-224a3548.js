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
  uo = {},
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
function Oo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? u0("" + e.key)
    : t.toString(36);
}
function xl(e, t, n, r, l) {
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
      (e = r === "" ? "." + Oo(i, 0) : r),
      gu(l)
        ? ((n = ""),
          e != null && (n = e.replace(yu, "$&/") + "/"),
          xl(l, t, n, "", function (s) {
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
      var u = r + Oo(o, a);
      i += xl(o, t, n, u, l);
    }
  else if (((u = i0(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Oo(o, a++)), (i += xl(o, t, n, u, l));
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
    xl(e, r, "", "", function (o) {
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
var je = { current: null },
  Cl = { transition: null },
  c0 = {
    ReactCurrentDispatcher: je,
    ReactCurrentBatchConfig: Cl,
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
  var t = Cl.transition;
  Cl.transition = {};
  try {
    e();
  } finally {
    Cl.transition = t;
  }
};
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (e, t) {
  return je.current.useCallback(e, t);
};
B.useContext = function (e) {
  return je.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return je.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return je.current.useEffect(e, t);
};
B.useId = function () {
  return je.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return je.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return je.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return je.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return je.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return je.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return je.current.useRef(e);
};
B.useState = function (e) {
  return je.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return je.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return je.current.useTransition();
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
uo.Fragment = h0;
uo.jsx = uc;
uo.jsxs = uc;
bs.exports = uo;
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
  function t(M, A) {
    var V = M.length;
    M.push(A);
    e: for (; 0 < V; ) {
      var re = (V - 1) >>> 1,
        pe = M[re];
      if (0 < l(pe, A)) (M[re] = A), (M[V] = pe), (V = re);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var A = M[0],
      V = M.pop();
    if (V !== A) {
      M[0] = V;
      e: for (var re = 0, pe = M.length, Sn = pe >>> 1; re < Sn; ) {
        var q = 2 * (re + 1) - 1,
          vt = M[q],
          ct = q + 1,
          En = M[ct];
        if (0 > l(vt, V))
          ct < pe && 0 > l(En, vt)
            ? ((M[re] = En), (M[ct] = V), (re = ct))
            : ((M[re] = vt), (M[q] = V), (re = q));
        else if (ct < pe && 0 > l(En, V)) (M[re] = En), (M[ct] = V), (re = ct);
        else break e;
      }
    }
    return A;
  }
  function l(M, A) {
    var V = M.sortIndex - A.sortIndex;
    return V !== 0 ? V : M.id - A.id;
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
    S = !1,
    w = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(M) {
    for (var A = n(s); A !== null; ) {
      if (A.callback === null) r(s);
      else if (A.startTime <= M)
        r(s), (A.sortIndex = A.expirationTime), t(u, A);
      else break;
      A = n(s);
    }
  }
  function c(M) {
    if (((w = !1), h(M), !S))
      if (n(u) !== null) (S = !0), Ue(x);
      else {
        var A = n(s);
        A !== null && st(c, A.startTime - M);
      }
  }
  function x(M, A) {
    (S = !1), w && ((w = !1), d(T), (T = -1)), (E = !0);
    var V = m;
    try {
      for (
        h(A), v = n(u);
        v !== null && (!(v.expirationTime > A) || (M && !we()));

      ) {
        var re = v.callback;
        if (typeof re == "function") {
          (v.callback = null), (m = v.priorityLevel);
          var pe = re(v.expirationTime <= A);
          (A = e.unstable_now()),
            typeof pe == "function" ? (v.callback = pe) : v === n(u) && r(u),
            h(A);
        } else r(u);
        v = n(u);
      }
      if (v !== null) var Sn = !0;
      else {
        var q = n(s);
        q !== null && st(c, q.startTime - A), (Sn = !1);
      }
      return Sn;
    } finally {
      (v = null), (m = V), (E = !1);
    }
  }
  var _ = !1,
    P = null,
    T = -1,
    W = 5,
    I = -1;
  function we() {
    return !(e.unstable_now() - I < W);
  }
  function J() {
    if (P !== null) {
      var M = e.unstable_now();
      I = M;
      var A = !0;
      try {
        A = P(!0, M);
      } finally {
        A ? ut() : ((_ = !1), (P = null));
      }
    } else _ = !1;
  }
  var ut;
  if (typeof f == "function")
    ut = function () {
      f(J);
    };
  else if (typeof MessageChannel < "u") {
    var Nt = new MessageChannel(),
      Tt = Nt.port2;
    (Nt.port1.onmessage = J),
      (ut = function () {
        Tt.postMessage(null);
      });
  } else
    ut = function () {
      R(J, 0);
    };
  function Ue(M) {
    (P = M), _ || ((_ = !0), ut());
  }
  function st(M, A) {
    T = R(function () {
      M(e.unstable_now());
    }, A);
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
      S || E || ((S = !0), Ue(x));
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
          var A = 3;
          break;
        default:
          A = m;
      }
      var V = m;
      m = A;
      try {
        return M();
      } finally {
        m = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, A) {
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
      var V = m;
      m = M;
      try {
        return A();
      } finally {
        m = V;
      }
    }),
    (e.unstable_scheduleCallback = function (M, A, V) {
      var re = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? re + V : re))
          : (V = re),
        M)
      ) {
        case 1:
          var pe = -1;
          break;
        case 2:
          pe = 250;
          break;
        case 5:
          pe = 1073741823;
          break;
        case 4:
          pe = 1e4;
          break;
        default:
          pe = 5e3;
      }
      return (
        (pe = V + pe),
        (M = {
          id: p++,
          callback: A,
          priorityLevel: M,
          startTime: V,
          expirationTime: pe,
          sortIndex: -1,
        }),
        V > re
          ? ((M.sortIndex = V),
            t(s, M),
            n(u) === null &&
              M === n(s) &&
              (w ? (d(T), (T = -1)) : (w = !0), st(c, V - re)))
          : ((M.sortIndex = pe), t(u, M), S || E || ((S = !0), Ue(x))),
        M
      );
    }),
    (e.unstable_shouldYield = we),
    (e.unstable_wrapCallback = function (M) {
      var A = m;
      return function () {
        var V = m;
        m = A;
        try {
          return M.apply(this, arguments);
        } finally {
          m = V;
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
  jr = {};
function yn(e, t) {
  Qn(e, t), Qn(e + "Capture", t);
}
function Qn(e, t) {
  for (jr[e] = t, e = 0; e < t.length; e++) pc.add(t[e]);
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
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ce[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ce[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ce[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ce[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ce[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ce[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var da = /[\-:]([a-z])/g;
function pa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(da, pa);
    Ce[t] = new De(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(da, pa);
    Ce[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(da, pa);
  Ce[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ce[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new De(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ce[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ha(e, t, n, r) {
  var l = Ce.hasOwnProperty(t) ? Ce[t] : null;
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
  Ot = Symbol.for("react.lazy"),
  vc = Symbol.for("react.offscreen"),
  Eu = Symbol.iterator;
function ir(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Eu && e[Eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ue = Object.assign,
  Ao;
function yr(e) {
  if (Ao === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ao = (t && t[1]) || "";
    }
  return (
    `
` +
    Ao +
    e
  );
}
var Fo = !1;
function Io(e, t) {
  if (!e || Fo) return "";
  Fo = !0;
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
    (Fo = !1), (Error.prepareStackTrace = n);
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
      return (e = Io(e.type, !1)), e;
    case 11:
      return (e = Io(e.type.render, !1)), e;
    case 1:
      return (e = Io(e.type, !0)), e;
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
      case Ot:
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
function Xt(e) {
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
function Ol(e) {
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
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ku(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Xt(t.value != null ? t.value : n)),
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
  var n = Xt(t.value),
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
    : t.hasOwnProperty("defaultValue") && gi(e, t.type, Xt(t.defaultValue)),
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
  (t !== "number" || Ol(e.ownerDocument) !== e) &&
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
    for (n = "" + Xt(n), t = null, l = 0; l < e.length; l++) {
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
  return ue({}, t, {
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
  e._wrapperState = { initialValue: Xt(n) };
}
function Sc(e, t) {
  var n = Xt(t.value),
    r = Xt(t.defaultValue);
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
var _0 = ue(
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
    t && ((t = ho(t)), xi(e.stateNode, e.type, t));
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
var Uo = !1;
function Lc(e, t, n) {
  if (Uo) return e(t, n);
  Uo = !0;
  try {
    return _c(e, t, n);
  } finally {
    (Uo = !1), ($n !== null || Vn !== null) && (Mc(), Rc());
  }
}
function zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ho(n);
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
  Al = null,
  Fl = !1,
  Pi = null,
  L0 = {
    onError: function (e) {
      (xr = !0), (Al = e);
    },
  };
function N0(e, t, n, r, l, o, i, a, u) {
  (xr = !1), (Al = null), M0.apply(L0, arguments);
}
function T0(e, t, n, r, l, o, i, a, u) {
  if ((N0.apply(this, arguments), xr)) {
    if (xr) {
      var s = Al;
      (xr = !1), (Al = null);
    } else throw Error(C(198));
    Fl || ((Fl = !0), (Pi = s));
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
function j0(e) {
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
function Tc(e) {
  return (e = j0(e)), e !== null ? jc(e) : null;
}
function jc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = jc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Dc = Be.unstable_scheduleCallback,
  Mu = Be.unstable_cancelCallback,
  D0 = Be.unstable_shouldYield,
  z0 = Be.unstable_requestPaint,
  de = Be.unstable_now,
  O0 = Be.unstable_getCurrentPriorityLevel,
  wa = Be.unstable_ImmediatePriority,
  zc = Be.unstable_UserBlockingPriority,
  Il = Be.unstable_NormalPriority,
  A0 = Be.unstable_LowPriority,
  Oc = Be.unstable_IdlePriority,
  so = null,
  ht = null;
function F0(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function")
    try {
      ht.onCommitFiberRoot(so, e, void 0, (e.current.flags & 128) === 128);
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
function Ul(e, t) {
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
function $o(e) {
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
var Y = 0;
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
  Vt = null,
  Ht = null,
  Bt = null,
  Or = new Map(),
  Ar = new Map(),
  Ft = [],
  W0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Lu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ht = null;
      break;
    case "mouseover":
    case "mouseout":
      Bt = null;
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
      return (Vt = ur(Vt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Ht = ur(Ht, e, t, n, r, l)), !0;
    case "mouseover":
      return (Bt = ur(Bt, e, t, n, r, l)), !0;
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
function Pl(e) {
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
  Pl(e) && n.delete(t);
}
function Q0() {
  (_i = !1),
    Vt !== null && Pl(Vt) && (Vt = null),
    Ht !== null && Pl(Ht) && (Ht = null),
    Bt !== null && Pl(Bt) && (Bt = null),
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
    Vt !== null && sr(Vt, e),
      Ht !== null && sr(Ht, e),
      Bt !== null && sr(Bt, e),
      Or.forEach(t),
      Ar.forEach(t),
      n = 0;
    n < Ft.length;
    n++
  )
    (r = Ft[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ft.length && ((n = Ft[0]), n.blockedOn === null); )
    Hc(n), n.blockedOn === null && Ft.shift();
}
var Hn = Mt.ReactCurrentBatchConfig,
  $l = !0;
function K0(e, t, n, r) {
  var l = Y,
    o = Hn.transition;
  Hn.transition = null;
  try {
    (Y = 1), ka(e, t, n, r);
  } finally {
    (Y = l), (Hn.transition = o);
  }
}
function Y0(e, t, n, r) {
  var l = Y,
    o = Hn.transition;
  Hn.transition = null;
  try {
    (Y = 4), ka(e, t, n, r);
  } finally {
    (Y = l), (Hn.transition = o);
  }
}
function ka(e, t, n, r) {
  if ($l) {
    var l = Mi(e, t, n, r);
    if (l === null) Go(e, t, r, Vl, n), Lu(e, r);
    else if (Z0(l, e, t, n, r)) r.stopPropagation();
    else if ((Lu(e, r), t & 4 && -1 < W0.indexOf(e))) {
      for (; l !== null; ) {
        var o = br(l);
        if (
          (o !== null && Ic(o),
          (o = Mi(e, t, n, r)),
          o === null && Go(e, t, r, Vl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Go(e, t, r, null, n);
  }
}
var Vl = null;
function Mi(e, t, n, r) {
  if (((Vl = null), (e = ya(r)), (e = on(e)), e !== null))
    if (((t = wn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Nc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Vl = e), null;
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
        case Il:
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
var Ut = null,
  xa = null,
  Rl = null;
function Wc() {
  if (Rl) return Rl;
  var e,
    t = xa,
    n = t.length,
    r,
    l = "value" in Ut ? Ut.value : Ut.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Rl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function _l(e) {
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
function Tu() {
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
        : Tu),
      (this.isPropagationStopped = Tu),
      this
    );
  }
  return (
    ue(t.prototype, {
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
  qr = ue({}, tr, { view: 0, detail: 0 }),
  X0 = Ze(qr),
  Vo,
  Ho,
  cr,
  co = ue({}, qr, {
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
              ? ((Vo = e.screenX - cr.screenX), (Ho = e.screenY - cr.screenY))
              : (Ho = Vo = 0),
            (cr = e)),
          Vo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ho;
    },
  }),
  ju = Ze(co),
  G0 = ue({}, co, { dataTransfer: 0 }),
  J0 = Ze(G0),
  q0 = ue({}, qr, { relatedTarget: 0 }),
  Bo = Ze(q0),
  b0 = ue({}, tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ep = Ze(b0),
  tp = ue({}, tr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  np = Ze(tp),
  rp = ue({}, tr, { data: 0 }),
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
var up = ue({}, qr, {
    key: function (e) {
      if (e.key) {
        var t = lp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _l(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
      return e.type === "keypress" ? _l(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _l(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  sp = Ze(up),
  cp = ue({}, co, {
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
  fp = ue({}, qr, {
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
  pp = ue({}, tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hp = Ze(pp),
  mp = ue({}, co, {
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
      ? ((e = Wc()), (Rl = xa = Ut = null), (_n = !1), e)
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
    (t = Hl(t, "onChange")),
    0 < t.length &&
      ((n = new Ca("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Pr = null,
  Ir = null;
function kp(e) {
  of(e, 0);
}
function fo(e) {
  var t = Nn(e);
  if (yc(t)) return e;
}
function xp(e, t) {
  if (e === "change") return t;
}
var Xc = !1;
if (Ct) {
  var Wo;
  if (Ct) {
    var Zo = "oninput" in document;
    if (!Zo) {
      var Iu = document.createElement("div");
      Iu.setAttribute("oninput", "return;"),
        (Zo = typeof Iu.oninput == "function");
    }
    Wo = Zo;
  } else Wo = !1;
  Xc = Wo && (!document.documentMode || 9 < document.documentMode);
}
function Uu() {
  Pr && (Pr.detachEvent("onpropertychange", Gc), (Ir = Pr = null));
}
function Gc(e) {
  if (e.propertyName === "value" && fo(Ir)) {
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
    return fo(Ir);
}
function Rp(e, t) {
  if (e === "click") return fo(t);
}
function _p(e, t) {
  if (e === "input" || e === "change") return fo(t);
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
  for (var e = window, t = Ol(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ol(e.document);
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
    Mn !== Ol(r) ||
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
      (r = Hl(Li, "onSelect")),
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
  Qo = {},
  bc = {};
Ct &&
  ((bc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ln.animationend.animation,
    delete Ln.animationiteration.animation,
    delete Ln.animationstart.animation),
  "TransitionEvent" in window || delete Ln.transitionend.transition);
function po(e) {
  if (Qo[e]) return Qo[e];
  if (!Ln[e]) return e;
  var t = Ln[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in bc) return (Qo[e] = t[n]);
  return e;
}
var ef = po("animationend"),
  tf = po("animationiteration"),
  nf = po("animationstart"),
  rf = po("transitionend"),
  lf = new Map(),
  Bu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Jt(e, t) {
  lf.set(e, t), yn(t, [e]);
}
for (var Ko = 0; Ko < Bu.length; Ko++) {
  var Yo = Bu[Ko],
    Tp = Yo.toLowerCase(),
    jp = Yo[0].toUpperCase() + Yo.slice(1);
  Jt(Tp, "on" + jp);
}
Jt(ef, "onAnimationEnd");
Jt(tf, "onAnimationIteration");
Jt(nf, "onAnimationStart");
Jt("dblclick", "onDoubleClick");
Jt("focusin", "onFocus");
Jt("focusout", "onBlur");
Jt(rf, "onTransitionEnd");
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
  (e.currentTarget = n), T0(r, t, void 0, e), (e.currentTarget = null);
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
  if (Fl) throw ((e = Pi), (Fl = !1), (Pi = null), e);
}
function ee(e, t) {
  var n = t[Oi];
  n === void 0 && (n = t[Oi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (af(t, e, 2, !1), n.add(r));
}
function Xo(e, t, n) {
  var r = 0;
  t && (r |= 4), af(n, e, r, t);
}
var ml = "_reactListening" + Math.random().toString(36).slice(2);
function $r(e) {
  if (!e[ml]) {
    (e[ml] = !0),
      pc.forEach(function (n) {
        n !== "selectionchange" && (Dp.has(n) || Xo(n, !1, e), Xo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ml] || ((t[ml] = !0), Xo("selectionchange", !1, t));
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
function Go(e, t, n, r, l) {
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
          S = e;
        switch (e) {
          case "keypress":
            if (_l(n) === 0) break e;
          case "keydown":
          case "keyup":
            E = sp;
            break;
          case "focusin":
            (S = "focus"), (E = Bo);
            break;
          case "focusout":
            (S = "blur"), (E = Bo);
            break;
          case "beforeblur":
          case "afterblur":
            E = Bo;
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
            E = ju;
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
        var w = (t & 4) !== 0,
          R = !w && e === "scroll",
          d = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var f = s, h; f !== null; ) {
          h = f;
          var c = h.stateNode;
          if (
            (h.tag === 5 &&
              c !== null &&
              ((h = c),
              d !== null && ((c = zr(f, d)), c != null && w.push(Vr(f, c, h)))),
            R)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((m = new E(m, S, null, n, p)), v.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (E = e === "mouseout" || e === "pointerout"),
          m &&
            n !== ki &&
            (S = n.relatedTarget || n.fromElement) &&
            (on(S) || S[Pt]))
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
            ? ((S = n.relatedTarget || n.toElement),
              (E = s),
              (S = S ? on(S) : null),
              S !== null &&
                ((R = wn(S)), S !== R || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((E = null), (S = s)),
          E !== S)
        ) {
          if (
            ((w = ju),
            (c = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = zu),
              (c = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (R = E == null ? m : Nn(E)),
            (h = S == null ? m : Nn(S)),
            (m = new w(c, f + "leave", E, n, p)),
            (m.target = R),
            (m.relatedTarget = h),
            (c = null),
            on(p) === s &&
              ((w = new w(d, f + "enter", S, n, p)),
              (w.target = h),
              (w.relatedTarget = R),
              (c = w)),
            (R = c),
            E && S)
          )
            t: {
              for (w = E, d = S, f = 0, h = w; h; h = kn(h)) f++;
              for (h = 0, c = d; c; c = kn(c)) h++;
              for (; 0 < f - h; ) (w = kn(w)), f--;
              for (; 0 < h - f; ) (d = kn(d)), h--;
              for (; f--; ) {
                if (w === d || (d !== null && w === d.alternate)) break t;
                (w = kn(w)), (d = kn(d));
              }
              w = null;
            }
          else w = null;
          E !== null && Zu(v, m, E, w, !1),
            S !== null && R !== null && Zu(v, R, S, w, !0);
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
            var _ = Cp;
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
        _ && _(e, m, s),
          e === "focusout" &&
            (_ = m._wrapperState) &&
            _.controlled &&
            m.type === "number" &&
            gi(m, "number", m.value);
      }
      switch (((_ = s ? Nn(s) : window), e)) {
        case "focusin":
          (Fu(_) || _.contentEditable === "true") &&
            ((Mn = _), (Li = s), (Rr = null));
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
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        _n
          ? Qc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Zc &&
          n.locale !== "ko" &&
          (_n || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && _n && (P = Wc())
            : ((Ut = p),
              (xa = "value" in Ut ? Ut.value : Ut.textContent),
              (_n = !0))),
        (_ = Hl(s, T)),
        0 < _.length &&
          ((T = new Du(T, e, null, n, p)),
          v.push({ event: T, listeners: _ }),
          P ? (T.data = P) : ((P = Kc(n)), P !== null && (T.data = P)))),
        (P = yp ? wp(e, n) : Sp(e, n)) &&
          ((s = Hl(s, "onBeforeInput")),
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
function Hl(e, t) {
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
function Bl() {}
var Ti = null,
  ji = null;
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
function Jo(e, t) {
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
function Wt(e) {
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
function ho(e) {
  return e[Hr] || null;
}
var Ai = [],
  Tn = -1;
function qt(e) {
  return { current: e };
}
function te(e) {
  0 > Tn || ((e.current = Ai[Tn]), (Ai[Tn] = null), Tn--);
}
function b(e, t) {
  Tn++, (Ai[Tn] = e.current), (e.current = t);
}
var Gt = {},
  Le = qt(Gt),
  Ae = qt(!1),
  pn = Gt;
function Kn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Gt;
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
function Wl() {
  te(Ae), te(Le);
}
function Xu(e, t, n) {
  if (Le.current !== Gt) throw Error(C(168));
  b(Le, t), b(Ae, n);
}
function uf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(C(108, C0(e) || "Unknown", l));
  return ue({}, n, r);
}
function Zl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Gt),
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
  mo = !1,
  qo = !1;
function sf(e) {
  St === null ? (St = [e]) : St.push(e);
}
function Vp(e) {
  (mo = !0), sf(e);
}
function bt() {
  if (!qo && St !== null) {
    qo = !0;
    var e = 0,
      t = Y;
    try {
      var n = St;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (St = null), (mo = !1);
    } catch (l) {
      throw (St !== null && (St = St.slice(e + 1)), Dc(wa, bt), l);
    } finally {
      (Y = t), (qo = !1);
    }
  }
  return null;
}
var jn = [],
  Dn = 0,
  Ql = null,
  Kl = 0,
  Ke = [],
  Ye = 0,
  hn = null,
  Et = 1,
  kt = "";
function rn(e, t) {
  (jn[Dn++] = Kl), (jn[Dn++] = Ql), (Ql = e), (Kl = t);
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
  for (; e === Ql; )
    (Ql = jn[--Dn]), (jn[Dn] = null), (Kl = jn[--Dn]), (jn[Dn] = null);
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
  ne = !1,
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
          ? ((e.stateNode = t), (He = e), (Ve = Wt(t.firstChild)), !0)
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
  if (ne) {
    var t = Ve;
    if (t) {
      var n = t;
      if (!Ju(e, t)) {
        if (Fi(e)) throw Error(C(418));
        t = Wt(n.nextSibling);
        var r = He;
        t && Ju(e, t)
          ? ff(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ne = !1), (He = e));
      }
    } else {
      if (Fi(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (ne = !1), (He = e);
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
  if (!ne) return qu(e), (ne = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Di(e.type, e.memoizedProps))),
    t && (t = Ve))
  ) {
    if (Fi(e)) throw (df(), Error(C(418)));
    for (; t; ) ff(e, t), (t = Wt(t.nextSibling));
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
              Ve = Wt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ve = null;
    }
  } else Ve = He ? Wt(e.stateNode.nextSibling) : null;
  return !0;
}
function df() {
  for (var e = Ve; e; ) e = Wt(e.nextSibling);
}
function Yn() {
  (Ve = He = null), (ne = !1);
}
function Na(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
var Hp = Mt.ReactCurrentBatchConfig;
function tt(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Yl = qt(null),
  Xl = null,
  zn = null,
  Ta = null;
function ja() {
  Ta = zn = Xl = null;
}
function Da(e) {
  var t = Yl.current;
  te(Yl), (e._currentValue = t);
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
  (Xl = e),
    (Ta = zn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Oe = !0), (e.firstContext = null));
}
function Je(e) {
  var t = e._currentValue;
  if (Ta !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), zn === null)) {
      if (Xl === null) throw Error(C(308));
      (zn = e), (Xl.dependencies = { lanes: 0, firstContext: e });
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
var At = !1;
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
function Zt(e, t, n) {
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
function Ml(e, t, n) {
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
function Gl(e, t, n, r) {
  var l = e.updateQueue;
  At = !1;
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
          var S = e,
            w = a;
          switch (((m = t), (E = n), w.tag)) {
            case 1:
              if (((S = w.payload), typeof S == "function")) {
                v = S.call(E, v, m);
                break e;
              }
              v = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = w.payload),
                (m = typeof S == "function" ? S.call(E, v, m) : S),
                m == null)
              )
                break e;
              v = ue({}, v, m);
              break e;
            case 2:
              At = !0;
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
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var vo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? wn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      l = Kt(e),
      o = xt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Zt(e, o, l)),
      t !== null && (it(t, e, l, r), Ml(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      l = Kt(e),
      o = xt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Zt(e, o, l)),
      t !== null && (it(t, e, l, r), Ml(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Te(),
      r = Kt(e),
      l = xt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Zt(e, l, r)),
      t !== null && (it(t, e, r, n), Ml(t, e, r));
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
    l = Gt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Je(o))
      : ((l = Fe(t) ? pn : Le.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Kn(e, l) : Gt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = vo),
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
    t.state !== e && vo.enqueueReplaceState(t, t.state, null);
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
      t !== l.state && vo.enqueueReplaceState(l, l.state, null),
      Gl(e, n, l, r),
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
    return (d = Yt(d, f)), (d.index = 0), (d.sibling = null), d;
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
      ? ((f = oi(h, d.mode, c)), (f.return = d), f)
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
            x.$$typeof === Ot &&
            rs(x) === f.type))
      ? ((c = l(f, h.props)), (c.ref = fr(d, f, h)), (c.return = d), c)
      : ((c = zl(h.type, h.key, h.props, null, d.mode, c)),
        (c.ref = fr(d, f, h)),
        (c.return = d),
        c);
  }
  function s(d, f, h, c) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = ii(h, d.mode, c)), (f.return = d), f)
      : ((f = l(f, h.children || [])), (f.return = d), f);
  }
  function p(d, f, h, c, x) {
    return f === null || f.tag !== 7
      ? ((f = fn(h, d.mode, c, x)), (f.return = d), f)
      : ((f = l(f, h)), (f.return = d), f);
  }
  function v(d, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = oi("" + f, d.mode, h)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case al:
          return (
            (h = zl(f.type, f.key, f.props, null, d.mode, h)),
            (h.ref = fr(d, null, f)),
            (h.return = d),
            h
          );
        case Pn:
          return (f = ii(f, d.mode, h)), (f.return = d), f;
        case Ot:
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
        case Ot:
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
        case Ot:
          var _ = c._init;
          return E(d, f, h, _(c._payload), x);
      }
      if (wr(c) || ir(c)) return (d = d.get(h) || null), p(f, d, c, x, null);
      yl(f, c);
    }
    return null;
  }
  function S(d, f, h, c) {
    for (
      var x = null, _ = null, P = f, T = (f = 0), W = null;
      P !== null && T < h.length;
      T++
    ) {
      P.index > T ? ((W = P), (P = null)) : (W = P.sibling);
      var I = m(d, P, h[T], c);
      if (I === null) {
        P === null && (P = W);
        break;
      }
      e && P && I.alternate === null && t(d, P),
        (f = o(I, f, T)),
        _ === null ? (x = I) : (_.sibling = I),
        (_ = I),
        (P = W);
    }
    if (T === h.length) return n(d, P), ne && rn(d, T), x;
    if (P === null) {
      for (; T < h.length; T++)
        (P = v(d, h[T], c)),
          P !== null &&
            ((f = o(P, f, T)), _ === null ? (x = P) : (_.sibling = P), (_ = P));
      return ne && rn(d, T), x;
    }
    for (P = r(d, P); T < h.length; T++)
      (W = E(P, d, T, h[T], c)),
        W !== null &&
          (e && W.alternate !== null && P.delete(W.key === null ? T : W.key),
          (f = o(W, f, T)),
          _ === null ? (x = W) : (_.sibling = W),
          (_ = W));
    return (
      e &&
        P.forEach(function (we) {
          return t(d, we);
        }),
      ne && rn(d, T),
      x
    );
  }
  function w(d, f, h, c) {
    var x = ir(h);
    if (typeof x != "function") throw Error(C(150));
    if (((h = x.call(h)), h == null)) throw Error(C(151));
    for (
      var _ = (x = null), P = f, T = (f = 0), W = null, I = h.next();
      P !== null && !I.done;
      T++, I = h.next()
    ) {
      P.index > T ? ((W = P), (P = null)) : (W = P.sibling);
      var we = m(d, P, I.value, c);
      if (we === null) {
        P === null && (P = W);
        break;
      }
      e && P && we.alternate === null && t(d, P),
        (f = o(we, f, T)),
        _ === null ? (x = we) : (_.sibling = we),
        (_ = we),
        (P = W);
    }
    if (I.done) return n(d, P), ne && rn(d, T), x;
    if (P === null) {
      for (; !I.done; T++, I = h.next())
        (I = v(d, I.value, c)),
          I !== null &&
            ((f = o(I, f, T)), _ === null ? (x = I) : (_.sibling = I), (_ = I));
      return ne && rn(d, T), x;
    }
    for (P = r(d, P); !I.done; T++, I = h.next())
      (I = E(P, d, T, I.value, c)),
        I !== null &&
          (e && I.alternate !== null && P.delete(I.key === null ? T : I.key),
          (f = o(I, f, T)),
          _ === null ? (x = I) : (_.sibling = I),
          (_ = I));
    return (
      e &&
        P.forEach(function (J) {
          return t(d, J);
        }),
      ne && rn(d, T),
      x
    );
  }
  function R(d, f, h, c) {
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
            for (var x = h.key, _ = f; _ !== null; ) {
              if (_.key === x) {
                if (((x = h.type), x === Rn)) {
                  if (_.tag === 7) {
                    n(d, _.sibling),
                      (f = l(_, h.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  _.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === Ot &&
                    rs(x) === _.type)
                ) {
                  n(d, _.sibling),
                    (f = l(_, h.props)),
                    (f.ref = fr(d, _, h)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, _);
                break;
              } else t(d, _);
              _ = _.sibling;
            }
            h.type === Rn
              ? ((f = fn(h.props.children, d.mode, c, h.key)),
                (f.return = d),
                (d = f))
              : ((c = zl(h.type, h.key, h.props, null, d.mode, c)),
                (c.ref = fr(d, f, h)),
                (c.return = d),
                (d = c));
          }
          return i(d);
        case Pn:
          e: {
            for (_ = h.key; f !== null; ) {
              if (f.key === _)
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
            (f = ii(h, d.mode, c)), (f.return = d), (d = f);
          }
          return i(d);
        case Ot:
          return (_ = h._init), R(d, f, _(h._payload), c);
      }
      if (wr(h)) return S(d, f, h, c);
      if (ir(h)) return w(d, f, h, c);
      yl(d, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = l(f, h)), (f.return = d), (d = f))
          : (n(d, f), (f = oi(h, d.mode, c)), (f.return = d), (d = f)),
        i(d))
      : n(d, f);
  }
  return R;
}
var Xn = gf(!0),
  yf = gf(!1),
  el = {},
  mt = qt(el),
  Br = qt(el),
  Wr = qt(el);
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
var ie = qt(0);
function Jl(e) {
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
var bo = [];
function Ia() {
  for (var e = 0; e < bo.length; e++)
    bo[e]._workInProgressVersionPrimary = null;
  bo.length = 0;
}
var Ll = Mt.ReactCurrentDispatcher,
  ei = Mt.ReactCurrentBatchConfig,
  mn = 0,
  ae = null,
  ge = null,
  Se = null,
  ql = !1,
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
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ll.current = e === null || e.memoizedState === null ? Kp : Yp),
    (e = n(r, l)),
    _r)
  ) {
    o = 0;
    do {
      if (((_r = !1), (Zr = 0), 25 <= o)) throw Error(C(301));
      (o += 1),
        (Se = ge = null),
        (t.updateQueue = null),
        (Ll.current = Xp),
        (e = n(r, l));
    } while (_r);
  }
  if (
    ((Ll.current = bl),
    (t = ge !== null && ge.next !== null),
    (mn = 0),
    (Se = ge = ae = null),
    (ql = !1),
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
  return Se === null ? (ae.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function qe() {
  if (ge === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = Se === null ? ae.memoizedState : Se.next;
  if (t !== null) (Se = t), (ge = e);
  else {
    if (e === null) throw Error(C(310));
    (ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      Se === null ? (ae.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function Qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ti(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ge,
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
          (ae.lanes |= p),
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
    do (o = l.lane), (ae.lanes |= o), (vn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ni(e) {
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
  var n = ae,
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
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
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
    (e = e.dispatch = Qp.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function Kr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
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
function Nl(e, t, n, r) {
  var l = dt();
  (ae.flags |= e),
    (l.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r));
}
function go(e, t, n, r) {
  var l = qe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ge !== null) {
    var i = ge.memoizedState;
    if (((o = i.destroy), r !== null && Ua(r, i.deps))) {
      l.memoizedState = Kr(t, n, o, r);
      return;
    }
  }
  (ae.flags |= e), (l.memoizedState = Kr(1 | t, n, o, r));
}
function os(e, t) {
  return Nl(8390656, 8, e, t);
}
function Ha(e, t) {
  return go(2048, 8, e, t);
}
function Mf(e, t) {
  return go(4, 2, e, t);
}
function Lf(e, t) {
  return go(4, 4, e, t);
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
function Tf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), go(4, 4, Nf.bind(null, t, e), n)
  );
}
function Ba() {}
function jf(e, t) {
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
    ? (at(n, t) || ((n = Ac()), (ae.lanes |= n), (vn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n));
}
function Wp(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ei.transition;
  ei.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (ei.transition = r);
  }
}
function Of() {
  return qe().memoizedState;
}
function Zp(e, t, n) {
  var r = Kt(e);
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
    var l = Te();
    it(n, e, r, l), If(n, t, r);
  }
}
function Qp(e, t, n) {
  var r = Kt(e),
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
      n !== null && ((l = Te()), it(n, e, r, l), If(n, t, r));
  }
}
function Af(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function Ff(e, t) {
  _r = ql = !0;
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
var bl = {
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
        Nl(4194308, 4, Nf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Nl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Nl(4, 2, e, t);
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
        (e = e.dispatch = Zp.bind(null, ae, e)),
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
      var r = ae,
        l = dt();
      if (ne) {
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
      if (ne) {
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
    useCallback: jf,
    useContext: Je,
    useEffect: Ha,
    useImperativeHandle: Tf,
    useInsertionEffect: Mf,
    useLayoutEffect: Lf,
    useMemo: Df,
    useReducer: ti,
    useRef: _f,
    useState: function () {
      return ti(Qr);
    },
    useDebugValue: Ba,
    useDeferredValue: function (e) {
      var t = qe();
      return zf(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = ti(Qr)[0],
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
    useCallback: jf,
    useContext: Je,
    useEffect: Ha,
    useImperativeHandle: Tf,
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
      return ge === null ? (t.memoizedState = e) : zf(t, ge.memoizedState, e);
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
function ri(e, t, n) {
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
      to || ((to = !0), (qi = r)), Hi(e, t);
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
            (Qt === null ? (Qt = new Set([this])) : Qt.add(this));
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
              : ((t = xt(-1, 1)), (t.tag = 2), Zt(n, t, 1))),
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
      : (ne && n && Ma(t), (t.flags |= 1), Ne(e, t, r, l), t.child)
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
      : ((e = zl(n.type, null, r, t, t.mode, l)),
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
    (e = Yt(o, r)),
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
      : (ne && r && Ma(t), (t.flags |= 1), Ne(e, t, n, l), t.child)
  );
}
function fs(e, t, n, r, l) {
  if (Fe(n)) {
    var o = !0;
    Zl(t);
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
      (At = !1);
    var m = t.memoizedState;
    (i.state = m),
      Gl(t, r, i, l),
      (u = t.memoizedState),
      a !== r || m !== u || Ae.current || At
        ? (typeof p == "function" && ($i(t, n, p, r), (u = t.memoizedState)),
          (a = At || ts(t, n, a, r, m, u, s))
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
      (At = !1),
      (m = t.memoizedState),
      (i.state = m),
      Gl(t, r, i, l);
    var S = t.memoizedState;
    a !== v || m !== S || Ae.current || At
      ? (typeof E == "function" && ($i(t, n, E, r), (S = t.memoizedState)),
        (s = At || ts(t, n, s, r, m, S, u) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, S, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, S, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
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
    l = ie.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    b(ie, l & 1),
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
                : (o = So(i, r, 0, null)),
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
        : ((r = Yt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = Yt(a, o)) : ((o = fn(o, i, n, null)), (o.flags |= 2)),
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
    (r = Yt(o, { mode: "visible", children: r.children })),
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
    (t = So({ mode: "visible", children: t }, e.mode, 0, null)),
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
      ? ((t.flags &= -257), (r = ri(Error(C(422)))), wl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = So({ mode: "visible", children: r.children }, l, 0, null)),
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
    return (r = a), (o = Error(C(419))), (r = ri(o, r, void 0)), wl(e, t, i, r);
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
    return Ga(), (r = ri(Error(C(421)))), wl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = fh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ve = Wt(l.nextSibling)),
      (He = t),
      (ne = !0),
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
function li(e, t, n, r, l) {
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
  if ((Ne(e, t, r.children, n), (r = ie.current), r & 2))
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
  if ((b(ie, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Jl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          li(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Jl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        li(t, !0, n, null, o);
        break;
      case "together":
        li(t, !1, null, null, void 0);
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
      e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Yt(e, e.pendingProps)), (n.return = t);
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
      Fe(t.type) && Zl(t);
      break;
    case 4:
      Aa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      b(Yl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(ie, ie.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Zf(e, t, n)
          : (b(ie, ie.current & 1),
            (e = _t(e, t, n)),
            e !== null ? e.sibling : null);
      b(ie, ie.current & 1);
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
        b(ie, ie.current),
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
        (l = ue({}, l, { value: void 0 })),
          (r = ue({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = yi(e, l)), (r = yi(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Bl);
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
            (jr.hasOwnProperty(s)
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
              (jr.hasOwnProperty(s)
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
  if (!ne)
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
      return Fe(t.type) && Wl(), _e(t), null;
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
                : jr.hasOwnProperty(i) &&
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
              typeof o.onClick == "function" && (r.onclick = Bl);
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
                  (l = ue({}, r, { value: void 0 })),
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
                    (jr.hasOwnProperty(o)
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
                r.value != null && e.setAttribute("value", "" + Xt(r.value));
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
                typeof l.onClick == "function" && (e.onclick = Bl);
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
        (te(ie),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ne && Ve !== null && t.mode & 1 && !(t.flags & 128))
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
              (e === null || ie.current & 1 ? ye === 0 && (ye = 3) : Ga())),
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
      return Fe(t.type) && Wl(), _e(t), null;
    case 19:
      if ((te(ie), (o = t.memoizedState), o === null)) return _e(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) dr(o, !1);
        else {
          if (ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Jl(e)), i !== null)) {
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
                return b(ie, (ie.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            de() > qn &&
            ((t.flags |= 128), (r = !0), dr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Jl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              dr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !ne)
            )
              return _e(t), null;
          } else
            2 * de() - o.renderingStartTime > qn &&
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
          (o.renderingStartTime = de()),
          (t.sibling = null),
          (n = ie.current),
          b(ie, r ? (n & 1) | 2 : n & 1),
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
        Fe(t.type) && Wl(),
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
        (te(ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(C(340));
        Yn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(ie), null;
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
  N = null;
function On(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        se(e, t, r);
      }
    else n.current = null;
}
function Yi(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var hs = !1;
function rh(e, t) {
  if (((Ti = $l), (e = qc()), _a(e))) {
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
  for (ji = { focusedElem: e, selectionRange: n }, $l = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var w = S.memoizedProps,
                    R = S.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : tt(t.type, w),
                      R
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
          se(t, t.return, c);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (S = hs), (hs = !1), S;
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
function yo(e, t) {
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
          n != null || t.onclick !== null || (t.onclick = Bl));
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
var ke = null,
  nt = !1;
function zt(e, t, n) {
  for (n = n.child; n !== null; ) qf(e, t, n), (n = n.sibling);
}
function qf(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function")
    try {
      ht.onCommitFiberUnmount(so, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Me || On(n, t);
    case 6:
      var r = ke,
        l = nt;
      (ke = null),
        zt(e, t, n),
        (ke = r),
        (nt = l),
        ke !== null &&
          (nt
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null &&
        (nt
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? Jo(e.parentNode, n)
              : e.nodeType === 1 && Jo(e, n),
            Fr(e))
          : Jo(ke, n.stateNode));
      break;
    case 4:
      (r = ke),
        (l = nt),
        (ke = n.stateNode.containerInfo),
        (nt = !0),
        zt(e, t, n),
        (ke = r),
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
      zt(e, t, n);
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
          se(n, t, a);
        }
      zt(e, t, n);
      break;
    case 21:
      zt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Me = (r = Me) || n.memoizedState !== null), zt(e, t, n), (Me = r))
        : zt(e, t, n);
      break;
    default:
      zt(e, t, n);
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
              (ke = a.stateNode), (nt = !1);
              break e;
            case 3:
              (ke = a.stateNode.containerInfo), (nt = !0);
              break e;
            case 4:
              (ke = a.stateNode.containerInfo), (nt = !0);
              break e;
          }
          a = a.return;
        }
        if (ke === null) throw Error(C(160));
        qf(o, i, l), (ke = null), (nt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        se(l, t, s);
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
          Mr(3, e, e.return), yo(3, e);
        } catch (w) {
          se(e, e.return, w);
        }
        try {
          Mr(5, e, e.return);
        } catch (w) {
          se(e, e.return, w);
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
        } catch (w) {
          se(e, e.return, w);
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
          } catch (w) {
            se(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((et(t, e), ft(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          se(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (et(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fr(t.containerInfo);
        } catch (w) {
          se(e, e.return, w);
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
            (Ka = de())),
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
          for (N = e, p = e.child; p !== null; ) {
            for (v = N = p; N !== null; ) {
              switch (((m = N), (E = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mr(4, m, m.return);
                  break;
                case 1:
                  On(m, m.return);
                  var S = m.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (w) {
                      se(r, n, w);
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
              E !== null ? ((E.return = m), (N = E)) : ys(v);
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
              } catch (w) {
                se(e, e.return, w);
              }
            }
          } else if (v.tag === 6) {
            if (p === null)
              try {
                v.stateNode.nodeValue = s ? "" : v.memoizedProps;
              } catch (w) {
                se(e, e.return, w);
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
      se(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lh(e, t, n) {
  (N = e), ed(e);
}
function ed(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Sl;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Me;
        a = Sl;
        var s = Me;
        if (((Sl = i), (Me = u) && !s))
          for (N = l; N !== null; )
            (i = N),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ws(l)
                : u !== null
                ? ((u.return = i), (N = u))
                : ws(l);
        for (; o !== null; ) (N = o), ed(o), (o = o.sibling);
        (N = l), (Sl = a), (Me = s);
      }
      gs(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (N = o)) : gs(e);
  }
}
function gs(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Me || yo(5, t);
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
        se(t, t.return, m);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function ys(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function ws(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yo(4, t);
          } catch (u) {
            se(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              se(t, l, u);
            }
          }
          var o = t.return;
          try {
            Xi(t);
          } catch (u) {
            se(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Xi(t);
          } catch (u) {
            se(t, i, u);
          }
      }
    } catch (u) {
      se(t, t.return, u);
    }
    if (t === e) {
      N = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (N = a);
      break;
    }
    N = t.return;
  }
}
var oh = Math.ceil,
  eo = Mt.ReactCurrentDispatcher,
  Za = Mt.ReactCurrentOwner,
  Ge = Mt.ReactCurrentBatchConfig,
  Q = 0,
  Ee = null,
  me = null,
  xe = 0,
  $e = 0,
  An = qt(0),
  ye = 0,
  Yr = null,
  vn = 0,
  wo = 0,
  Qa = 0,
  Lr = null,
  ze = null,
  Ka = 0,
  qn = 1 / 0,
  wt = null,
  to = !1,
  qi = null,
  Qt = null,
  El = !1,
  $t = null,
  no = 0,
  Nr = 0,
  bi = null,
  jl = -1,
  Dl = 0;
function Te() {
  return Q & 6 ? de() : jl !== -1 ? jl : (jl = de());
}
function Kt(e) {
  return e.mode & 1
    ? Q & 2 && xe !== 0
      ? xe & -xe
      : Hp.transition !== null
      ? (Dl === 0 && (Dl = Ac()), Dl)
      : ((e = Y),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bc(e.type))),
        e)
    : 1;
}
function it(e, t, n, r) {
  if (50 < Nr) throw ((Nr = 0), (bi = null), Error(C(185)));
  Jr(e, n, r),
    (!(Q & 2) || e !== Ee) &&
      (e === Ee && (!(Q & 2) && (wo |= n), ye === 4 && It(e, xe)),
      Ie(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((qn = de() + 500), mo && bt()));
}
function Ie(e, t) {
  var n = e.callbackNode;
  H0(e, t);
  var r = Ul(e, e === Ee ? xe : 0);
  if (r === 0)
    n !== null && Mu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Mu(n), t === 1))
      e.tag === 0 ? Vp(Ss.bind(null, e)) : sf(Ss.bind(null, e)),
        Fp(function () {
          !(Q & 6) && bt();
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
          n = Il;
          break;
        case 536870912:
          n = Oc;
          break;
        default:
          n = Il;
      }
      n = ud(n, td.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function td(e, t) {
  if (((jl = -1), (Dl = 0), Q & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Wn() && e.callbackNode !== n) return null;
  var r = Ul(e, e === Ee ? xe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ro(e, r);
  else {
    t = r;
    var l = Q;
    Q |= 2;
    var o = rd();
    (Ee !== e || xe !== t) && ((wt = null), (qn = de() + 500), cn(e, t));
    do
      try {
        uh();
        break;
      } catch (a) {
        nd(e, a);
      }
    while (1);
    ja(),
      (eo.current = o),
      (Q = l),
      me !== null ? (t = 0) : ((Ee = null), (xe = 0), (t = ye));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ri(e)), l !== 0 && ((r = l), (t = ea(e, l)))), t === 1)
    )
      throw ((n = Yr), cn(e, 0), It(e, r), Ie(e, de()), n);
    if (t === 6) It(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !ih(l) &&
          ((t = ro(e, r)),
          t === 2 && ((o = Ri(e)), o !== 0 && ((r = o), (t = ea(e, o)))),
          t === 1))
      )
        throw ((n = Yr), cn(e, 0), It(e, r), Ie(e, de()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          ln(e, ze, wt);
          break;
        case 3:
          if (
            (It(e, r), (r & 130023424) === r && ((t = Ka + 500 - de()), 10 < t))
          ) {
            if (Ul(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Te(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = zi(ln.bind(null, e, ze, wt), t);
            break;
          }
          ln(e, ze, wt);
          break;
        case 4:
          if ((It(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - ot(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = de() - r),
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
  return Ie(e, de()), e.callbackNode === n ? td.bind(null, e) : null;
}
function ea(e, t) {
  var n = Lr;
  return (
    e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256),
    (e = ro(e, t)),
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
function It(e, t) {
  for (
    t &= ~Qa,
      t &= ~wo,
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
  var t = Ul(e, 0);
  if (!(t & 1)) return Ie(e, de()), null;
  var n = ro(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ri(e);
    r !== 0 && ((t = r), (n = ea(e, r)));
  }
  if (n === 1) throw ((n = Yr), cn(e, 0), It(e, t), Ie(e, de()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ln(e, ze, wt),
    Ie(e, de()),
    null
  );
}
function Ya(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((qn = de() + 500), mo && bt());
  }
}
function gn(e) {
  $t !== null && $t.tag === 0 && !(Q & 6) && Wn();
  var t = Q;
  Q |= 1;
  var n = Ge.transition,
    r = Y;
  try {
    if (((Ge.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (Ge.transition = n), (Q = t), !(Q & 6) && bt();
  }
}
function Xa() {
  ($e = An.current), te(An);
}
function cn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ap(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((La(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Wl();
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
          te(ie);
          break;
        case 19:
          te(ie);
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
    (me = e = Yt(e.current, null)),
    (xe = $e = t),
    (ye = 0),
    (Yr = null),
    (Qa = wo = vn = 0),
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
    var n = me;
    try {
      if ((ja(), (Ll.current = bl), ql)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ql = !1;
      }
      if (
        ((mn = 0),
        (Se = ge = ae = null),
        (_r = !1),
        (Zr = 0),
        (Za.current = null),
        n === null || n.return === null)
      ) {
        (ye = 1), (Yr = t), (me = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = xe),
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
            var S = t.updateQueue;
            if (S === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else S.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              is(o, s, t), Ga();
              break e;
            }
            u = Error(C(426));
          }
        } else if (ne && a.mode & 1) {
          var R = as(i);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              us(R, i, a, o, t),
              Na(Jn(u, a));
            break e;
          }
        }
        (o = u = Jn(u, a)),
          ye !== 4 && (ye = 2),
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
                    (Qt === null || !Qt.has(h))))
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
      (t = x), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function rd() {
  var e = eo.current;
  return (eo.current = bl), e === null ? bl : e;
}
function Ga() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    Ee === null || (!(vn & 268435455) && !(wo & 268435455)) || It(Ee, xe);
}
function ro(e, t) {
  var n = Q;
  Q |= 2;
  var r = rd();
  (Ee !== e || xe !== t) && ((wt = null), cn(e, t));
  do
    try {
      ah();
      break;
    } catch (l) {
      nd(e, l);
    }
  while (1);
  if ((ja(), (Q = n), (eo.current = r), me !== null)) throw Error(C(261));
  return (Ee = null), (xe = 0), ye;
}
function ah() {
  for (; me !== null; ) ld(me);
}
function uh() {
  for (; me !== null && !D0(); ) ld(me);
}
function ld(e) {
  var t = ad(e.alternate, e, $e);
  (e.memoizedProps = e.pendingProps),
    t === null ? od(e) : (me = t),
    (Za.current = null);
}
function od(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = th(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ye = 6), (me = null);
        return;
      }
    } else if (((n = eh(n, t, $e)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function ln(e, t, n) {
  var r = Y,
    l = Ge.transition;
  try {
    (Ge.transition = null), (Y = 1), sh(e, t, n, r);
  } finally {
    (Ge.transition = l), (Y = r);
  }
  return null;
}
function sh(e, t, n, r) {
  do Wn();
  while ($t !== null);
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
    e === Ee && ((me = Ee = null), (xe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      El ||
      ((El = !0),
      ud(Il, function () {
        return Wn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ge.transition), (Ge.transition = null);
    var i = Y;
    Y = 1;
    var a = Q;
    (Q |= 4),
      (Za.current = null),
      rh(e, n),
      bf(n, e),
      Lp(ji),
      ($l = !!Ti),
      (ji = Ti = null),
      (e.current = n),
      lh(n),
      z0(),
      (Q = a),
      (Y = i),
      (Ge.transition = o);
  } else e.current = n;
  if (
    (El && ((El = !1), ($t = e), (no = l)),
    (o = e.pendingLanes),
    o === 0 && (Qt = null),
    F0(n.stateNode),
    Ie(e, de()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (to) throw ((to = !1), (e = qi), (qi = null), e);
  return (
    no & 1 && e.tag !== 0 && Wn(),
    (o = e.pendingLanes),
    o & 1 ? (e === bi ? Nr++ : ((Nr = 0), (bi = e))) : (Nr = 0),
    bt(),
    null
  );
}
function Wn() {
  if ($t !== null) {
    var e = Fc(no),
      t = Ge.transition,
      n = Y;
    try {
      if (((Ge.transition = null), (Y = 16 > e ? 16 : e), $t === null))
        var r = !1;
      else {
        if (((e = $t), ($t = null), (no = 0), Q & 6)) throw Error(C(331));
        var l = Q;
        for (Q |= 4, N = e.current; N !== null; ) {
          var o = N,
            i = o.child;
          if (N.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (N = s; N !== null; ) {
                  var p = N;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mr(8, p, o);
                  }
                  var v = p.child;
                  if (v !== null) (v.return = p), (N = v);
                  else
                    for (; N !== null; ) {
                      p = N;
                      var m = p.sibling,
                        E = p.return;
                      if ((Gf(p), p === s)) {
                        N = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = E), (N = m);
                        break;
                      }
                      N = E;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var w = S.child;
                if (w !== null) {
                  S.child = null;
                  do {
                    var R = w.sibling;
                    (w.sibling = null), (w = R);
                  } while (w !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (N = i);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mr(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (N = d);
                break e;
              }
              N = o.return;
            }
        }
        var f = e.current;
        for (N = f; N !== null; ) {
          i = N;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (N = h);
          else
            e: for (i = f; N !== null; ) {
              if (((a = N), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yo(9, a);
                  }
                } catch (x) {
                  se(a, a.return, x);
                }
              if (a === i) {
                N = null;
                break e;
              }
              var c = a.sibling;
              if (c !== null) {
                (c.return = a.return), (N = c);
                break e;
              }
              N = a.return;
            }
        }
        if (
          ((Q = l), bt(), ht && typeof ht.onPostCommitFiberRoot == "function")
        )
          try {
            ht.onPostCommitFiberRoot(so, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (Ge.transition = t);
    }
  }
  return !1;
}
function Es(e, t, n) {
  (t = Jn(n, t)),
    (t = Uf(e, t, 1)),
    (e = Zt(e, t, 1)),
    (t = Te()),
    e !== null && (Jr(e, 1, t), Ie(e, t));
}
function se(e, t, n) {
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
            (Qt === null || !Qt.has(r)))
        ) {
          (e = Jn(n, e)),
            (e = $f(t, e, 1)),
            (t = Zt(t, e, 1)),
            (e = Te()),
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
    (t = Te()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (xe & n) === n &&
      (ye === 4 || (ye === 3 && (xe & 130023424) === xe && 500 > de() - Ka)
        ? cn(e, 0)
        : (Qa |= n)),
    Ie(e, t);
}
function id(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = fl), (fl <<= 1), !(fl & 130023424) && (fl = 4194304))
      : (t = 1));
  var n = Te();
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
  else (Oe = !1), ne && t.flags & 1048576 && cf(t, Kl, t.index);
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
            Fe(r) ? ((o = !0), Zl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Oa(t),
            (l.updater = vo),
            (t.stateNode = l),
            (l._reactInternals = t),
            Vi(t, r, e, n),
            (t = Wi(null, t, r, !0, o, n)))
          : ((t.tag = 0), ne && o && Ma(t), Ne(null, t, l, n), (t = t.child)),
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
          Gl(t, r, null, n);
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
              Ve = Wt(t.stateNode.containerInfo.firstChild),
                He = t,
                ne = !0,
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
          b(Yl, r._currentValue),
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
        Fe(r) ? ((e = !0), Zl(t)) : (e = !1),
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
function Yt(e, t) {
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
function zl(e, t, n, r, l, o) {
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
        return So(n, l, o, t);
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
            case Ot:
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
function So(e, t, n, r) {
  return (
    (e = Xe(22, e, r, t)),
    (e.elementType = vc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function oi(e, t, n) {
  return (e = Xe(6, e, null, t)), (e.lanes = n), e;
}
function ii(e, t, n) {
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
    (this.eventTimes = $o(0)),
    (this.expirationTimes = $o(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $o(0)),
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
  if (!e) return Gt;
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
    (r = Te()),
    (l = Kt(n)),
    (o = xt(r, l)),
    (o.callback = t ?? null),
    Zt(n, o, l),
    (e.current.lanes = l),
    Jr(e, l, r),
    Ie(e, r),
    e
  );
}
function Eo(e, t, n, r) {
  var l = t.current,
    o = Te(),
    i = Kt(l);
  return (
    (n = sd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = xt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zt(l, t, i)),
    e !== null && (it(e, l, i, o), Ml(e, l, i)),
    i
  );
}
function lo(e) {
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
ko.prototype.render = eu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Eo(e, t, null, null);
};
ko.prototype.unmount = eu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function () {
      Eo(null, e, null, null);
    }),
      (t[Pt] = null);
  }
};
function ko(e) {
  this._internalRoot = e;
}
ko.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $c();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++);
    Ft.splice(n, 0, e), n === 0 && Hc(e);
  }
};
function tu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function xo(e) {
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
        var s = lo(i);
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
      var s = lo(u);
      a.call(s);
    };
  }
  var u = qa(e, 0, !1, null, null, !1, !1, "", xs);
  return (
    (e._reactRootContainer = u),
    (e[Pt] = u.current),
    $r(e.nodeType === 8 ? e.parentNode : e),
    gn(function () {
      Eo(t, u, n, r);
    }),
    u
  );
}
function Co(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = lo(i);
        a.call(u);
      };
    }
    Eo(t, i, e, l);
  } else i = yh(n, t, e, l, r);
  return lo(i);
}
Ic = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sr(t.pendingLanes);
        n !== 0 &&
          (Sa(t, n | 1), Ie(t, de()), !(Q & 6) && ((qn = de() + 500), bt()));
      }
      break;
    case 13:
      gn(function () {
        var r = Rt(e, 1);
        if (r !== null) {
          var l = Te();
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
      var n = Te();
      it(t, e, 134217728, n);
    }
    ba(e, 134217728);
  }
};
Uc = function (e) {
  if (e.tag === 13) {
    var t = Kt(e),
      n = Rt(e, t);
    if (n !== null) {
      var r = Te();
      it(n, e, t, r);
    }
    ba(e, t);
  }
};
$c = function () {
  return Y;
};
Vc = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
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
            var l = ho(r);
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
var wh = { usingClientEntryPoint: !1, Events: [br, Nn, ho, Pc, Rc, Ya] },
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
      return (e = Tc(e)), e === null ? null : e.stateNode;
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
      (so = kl.inject(Sh)), (ht = kl);
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
  return (e = Tc(t)), (e = e === null ? null : e.stateNode), e;
};
We.flushSync = function (e) {
  return gn(e);
};
We.hydrate = function (e, t, n) {
  if (!xo(t)) throw Error(C(200));
  return Co(null, e, t, !0, n);
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
  return new ko(t);
};
We.render = function (e, t, n) {
  if (!xo(t)) throw Error(C(200));
  return Co(null, e, t, !1, n);
};
We.unmountComponentAtNode = function (e) {
  if (!xo(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (gn(function () {
        Co(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Pt] = null);
        });
      }),
      !0)
    : !1;
};
We.unstable_batchedUpdates = Ya;
We.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!xo(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Co(e, t, n, !1, r);
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
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function oe() {
  return (
    (oe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oe.apply(this, arguments)
  );
}
var he;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(he || (he = {}));
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
    oe(
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
    a = he.Pop,
    u = null,
    s = p();
  s == null && ((s = 0), i.replaceState(oe({}, i.state, { idx: s }), ""));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function v() {
    a = he.Pop;
    let R = p(),
      d = R == null ? null : R - s;
    (s = R), u && u({ action: a, location: w.location, delta: d });
  }
  function m(R, d) {
    a = he.Push;
    let f = Xr(w.location, R, d);
    n && n(f, R), (s = p() + 1);
    let h = Rs(f, s),
      c = w.createHref(f);
    try {
      i.pushState(h, "", c);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError") throw x;
      l.location.assign(c);
    }
    o && u && u({ action: a, location: w.location, delta: 1 });
  }
  function E(R, d) {
    a = he.Replace;
    let f = Xr(w.location, R, d);
    n && n(f, R), (s = p());
    let h = Rs(f, s),
      c = w.createHref(f);
    i.replaceState(h, "", c),
      o && u && u({ action: a, location: w.location, delta: 0 });
  }
  function S(R) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof R == "string" ? R : tl(R);
    return (
      Z(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, d)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(R) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Ps, v),
        (u = R),
        () => {
          l.removeEventListener(Ps, v), (u = null);
        }
      );
    },
    createHref(R) {
      return t(l, R);
    },
    createURL: S,
    encodeLocation(R) {
      let d = S(R);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: E,
    go(R) {
      return i.go(R);
    },
  };
  return w;
}
var fe;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(fe || (fe = {}));
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
        let u = oe({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = oe({}, l, t(l), { id: a, children: void 0 });
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
  Mh(o);
  let i = null;
  for (let a = 0; i == null && a < o.length; ++a) i = Fh(o[a], $h(l));
  return i;
}
function _h(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
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
        t.push({ path: s, score: Oh(s, o.index), routesMeta: p });
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
function Mh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Ah(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Lh = /^:\w+$/,
  Nh = 3,
  Th = 2,
  jh = 1,
  Dh = 10,
  zh = -2,
  _s = (e) => e === "*";
function Oh(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(_s) && (r += zh),
    t && (r += Th),
    n
      .filter((l) => !_s(l))
      .reduce((l, o) => l + (Lh.test(o) ? Nh : o === "" ? jh : Dh), r)
  );
}
function Ah(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Fh(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      u = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      p = Ih(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let v = a.route;
    o.push({
      params: r,
      pathname: dn([l, p.pathname]),
      pathnameBase: Zh(dn([l, p.pathnameBase])),
      route: v,
    }),
      p.pathnameBase !== "/" && (l = dn([l, p.pathnameBase]));
  }
  return o;
}
function Ih(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Uh(e.path, e.caseSensitive, e.end),
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
      return (s[p] = Vh(a[v] || "", p)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Uh(e, t, n) {
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
function $h(e) {
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
function Vh(e, t) {
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
function Hh(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Lt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Bh(n, t)) : t,
    search: Qh(r),
    hash: Kh(l),
  };
}
function Bh(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ai(e, t, n, r) {
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
function Wh(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Lt(e))
    : ((l = oe({}, e)),
      Z(
        !l.pathname || !l.pathname.includes("?"),
        ai("?", "pathname", "search", l)
      ),
      Z(
        !l.pathname || !l.pathname.includes("#"),
        ai("#", "pathname", "hash", l)
      ),
      Z(!l.search || !l.search.includes("#"), ai("#", "search", "hash", l)));
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
  let u = Hh(l, a),
    s = i && i !== "/" && i.endsWith("/"),
    p = (o || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || p) && (u.pathname += "/"), u;
}
const dn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Zh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Qh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Kh = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
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
  Yh = new Set(yd),
  Xh = ["get", ...yd],
  Gh = new Set(Xh),
  Jh = new Set([301, 302, 303, 307, 308]),
  qh = new Set([307, 308]),
  ui = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  bh = {
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
  e1 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function t1(e) {
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
  } else l = e1;
  let o = {},
    i = na(e.routes, l, void 0, o),
    a,
    u = e.basename || "/",
    s = oe({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    p = null,
    v = new Set(),
    m = null,
    E = null,
    S = null,
    w = e.hydrationData != null,
    R = Fn(i, e.history.location, u),
    d = null;
  if (R == null) {
    let g = Qe(404, { pathname: e.history.location.pathname }),
      { matches: y, route: k } = Os(i);
    (R = y), (d = { [k.id]: g });
  }
  let f =
      !R.some((g) => g.route.lazy) &&
      (!R.some((g) => g.route.loader) || e.hydrationData != null),
    h,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: R,
      initialized: f,
      navigation: ui,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    x = he.Pop,
    _ = !1,
    P,
    T = !1,
    W = !1,
    I = [],
    we = [],
    J = new Map(),
    ut = 0,
    Nt = -1,
    Tt = new Map(),
    Ue = new Set(),
    st = new Map(),
    M = new Map(),
    A = new Map(),
    V = !1;
  function re() {
    return (
      (p = e.history.listen((g) => {
        let { action: y, location: k, delta: L } = g;
        if (V) {
          V = !1;
          return;
        }
        bn(
          A.size === 0 || L != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let $ = du({
          currentLocation: c.location,
          nextLocation: k,
          historyAction: y,
        });
        if ($ && L != null) {
          (V = !0),
            e.history.go(L * -1),
            ll($, {
              state: "blocked",
              location: k,
              proceed() {
                ll($, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(L);
              },
              reset() {
                let U = new Map(c.blockers);
                U.set($, hr), q({ blockers: U });
              },
            });
          return;
        }
        return en(y, k);
      })),
      c.initialized || en(he.Pop, c.location),
      h
    );
  }
  function pe() {
    p && p(),
      v.clear(),
      P && P.abort(),
      c.fetchers.forEach((g, y) => Mo(y)),
      c.blockers.forEach((g, y) => fu(y));
  }
  function Sn(g) {
    return v.add(g), () => v.delete(g);
  }
  function q(g) {
    (c = oe({}, c, g)), v.forEach((y) => y(c));
  }
  function vt(g, y) {
    var k, L;
    let $ =
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
      : $
      ? (U = c.actionData)
      : (U = null);
    let H = y.loaderData
        ? zs(c.loaderData, y.loaderData, y.matches || [], y.errors)
        : c.loaderData,
      F = c.blockers;
    F.size > 0 && ((F = new Map(F)), F.forEach((le, Pe) => F.set(Pe, hr)));
    let O =
      _ === !0 ||
      (c.navigation.formMethod != null &&
        rt(c.navigation.formMethod) &&
        ((L = g.state) == null ? void 0 : L._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      T ||
        x === he.Pop ||
        (x === he.Push
          ? e.history.push(g, g.state)
          : x === he.Replace && e.history.replace(g, g.state)),
      q(
        oe({}, y, {
          actionData: U,
          loaderData: H,
          historyAction: x,
          location: g,
          initialized: !0,
          navigation: ui,
          revalidation: "idle",
          restoreScrollPosition: hu(g, y.matches || c.matches),
          preventScrollReset: O,
          blockers: F,
        })
      ),
      (x = he.Pop),
      (_ = !1),
      (T = !1),
      (W = !1),
      (I = []),
      (we = []);
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
        path: L,
        submission: $,
        error: U,
      } = Ms(s.v7_normalizeFormMethod, !1, k, y),
      H = c.location,
      F = Xr(c.location, L, y && y.state);
    F = oe({}, F, e.history.encodeLocation(F));
    let O = y && y.replace != null ? y.replace : void 0,
      le = he.Push;
    O === !0
      ? (le = he.Replace)
      : O === !1 ||
        ($ != null &&
          rt($.formMethod) &&
          $.formAction === c.location.pathname + c.location.search &&
          (le = he.Replace));
    let Pe =
        y && "preventScrollReset" in y ? y.preventScrollReset === !0 : void 0,
      K = du({ currentLocation: H, nextLocation: F, historyAction: le });
    if (K) {
      ll(K, {
        state: "blocked",
        location: F,
        proceed() {
          ll(K, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F,
          }),
            ct(g, y);
        },
        reset() {
          let G = new Map(c.blockers);
          G.set(K, hr), q({ blockers: G });
        },
      });
      return;
    }
    return await en(le, F, {
      submission: $,
      pendingError: U,
      preventScrollReset: Pe,
      replace: y && y.replace,
    });
  }
  function En() {
    if (
      (_o(),
      q({ revalidation: "loading" }),
      c.navigation.state !== "submitting")
    ) {
      if (c.navigation.state === "idle") {
        en(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      en(x || c.historyAction, c.navigation.location, {
        overrideNavigation: c.navigation,
      });
    }
  }
  async function en(g, y, k) {
    P && P.abort(),
      (P = null),
      (x = g),
      (T = (k && k.startUninterruptedRevalidation) === !0),
      Qd(c.location, c.matches),
      (_ = (k && k.preventScrollReset) === !0);
    let L = a || i,
      $ = k && k.overrideNavigation,
      U = Fn(L, y, u);
    if (!U) {
      let G = Qe(404, { pathname: y.pathname }),
        { matches: ce, route: tn } = Os(L);
      Lo(), vt(y, { matches: ce, loaderData: {}, errors: { [tn.id]: G } });
      return;
    }
    if (
      c.initialized &&
      !W &&
      i1(c.location, y) &&
      !(k && k.submission && rt(k.submission.formMethod))
    ) {
      vt(y, { matches: U });
      return;
    }
    P = new AbortController();
    let H = vr(e.history, y, P.signal, k && k.submission),
      F,
      O;
    if (k && k.pendingError) O = { [In(U).route.id]: k.pendingError };
    else if (k && k.submission && rt(k.submission.formMethod)) {
      let G = await Ud(H, y, k.submission, U, { replace: k.replace });
      if (G.shortCircuited) return;
      (F = G.pendingActionData),
        (O = G.pendingActionError),
        ($ = si(y, k.submission)),
        (H = new Request(H.url, { signal: H.signal }));
    }
    let {
      shortCircuited: le,
      loaderData: Pe,
      errors: K,
    } = await $d(
      H,
      y,
      U,
      $,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      F,
      O
    );
    le ||
      ((P = null),
      vt(
        y,
        oe({ matches: U }, F ? { actionData: F } : {}, {
          loaderData: Pe,
          errors: K,
        })
      ));
  }
  async function Ud(g, y, k, L, $) {
    $ === void 0 && ($ = {}), _o();
    let U = c1(y, k);
    q({ navigation: U });
    let H,
      F = oa(L, y);
    if (!F.route.action && !F.route.lazy)
      H = {
        type: fe.error,
        error: Qe(405, {
          method: g.method,
          pathname: y.pathname,
          routeId: F.route.id,
        }),
      };
    else if (((H = await mr("action", g, F, L, o, l, u)), g.signal.aborted))
      return { shortCircuited: !0 };
    if (Zn(H)) {
      let O;
      return (
        $ && $.replace != null
          ? (O = $.replace)
          : (O = H.location === c.location.pathname + c.location.search),
        await rr(c, H, { submission: k, replace: O }),
        { shortCircuited: !0 }
      );
    }
    if (Tr(H)) {
      let O = In(L, F.route.id);
      return (
        ($ && $.replace) !== !0 && (x = he.Push),
        { pendingActionData: {}, pendingActionError: { [O.route.id]: H.error } }
      );
    }
    if (sn(H)) throw Qe(400, { type: "defer-action" });
    return { pendingActionData: { [F.route.id]: H.data } };
  }
  async function $d(g, y, k, L, $, U, H, F, O) {
    let le = L || si(y, $),
      Pe = $ || U || Is(le),
      K = a || i,
      [G, ce] = Ls(e.history, c, k, Pe, y, W, I, we, st, Ue, K, u, F, O);
    if (
      (Lo(
        (X) =>
          !(k && k.some((be) => be.route.id === X)) ||
          (G && G.some((be) => be.route.id === X))
      ),
      (Nt = ++ut),
      G.length === 0 && ce.length === 0)
    ) {
      let X = su();
      return (
        vt(
          y,
          oe(
            { matches: k, loaderData: {}, errors: O || null },
            F ? { actionData: F } : {},
            X ? { fetchers: new Map(c.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!T) {
      ce.forEach((be) => {
        let Dt = c.fetchers.get(be.key),
          zo = gr(void 0, Dt ? Dt.data : void 0);
        c.fetchers.set(be.key, zo);
      });
      let X = F || c.actionData;
      q(
        oe(
          { navigation: le },
          X
            ? Object.keys(X).length === 0
              ? { actionData: null }
              : { actionData: X }
            : {},
          ce.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
        )
      );
    }
    ce.forEach((X) => {
      J.has(X.key) && jt(X.key), X.controller && J.set(X.key, X.controller);
    });
    let tn = () => ce.forEach((X) => jt(X.key));
    P && P.signal.addEventListener("abort", tn);
    let {
      results: nn,
      loaderResults: lr,
      fetcherResults: No,
    } = await au(c.matches, k, G, ce, g);
    if (g.signal.aborted) return { shortCircuited: !0 };
    P && P.signal.removeEventListener("abort", tn),
      ce.forEach((X) => J.delete(X.key));
    let gt = As(nn);
    if (gt) {
      if (gt.idx >= G.length) {
        let X = ce[gt.idx - G.length].key;
        Ue.add(X);
      }
      return await rr(c, gt.result, { replace: H }), { shortCircuited: !0 };
    }
    let { loaderData: yt, errors: ol } = Ds(c, k, G, lr, O, ce, No, M);
    M.forEach((X, be) => {
      X.subscribe((Dt) => {
        (Dt || X.done) && M.delete(be);
      });
    });
    let To = su(),
      jo = cu(Nt),
      Do = To || jo || ce.length > 0;
    return oe(
      { loaderData: yt, errors: ol },
      Do ? { fetchers: new Map(c.fetchers) } : {}
    );
  }
  function iu(g) {
    return c.fetchers.get(g) || bh;
  }
  function Vd(g, y, k, L) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    J.has(g) && jt(g);
    let $ = a || i,
      U = ra(
        c.location,
        c.matches,
        u,
        s.v7_prependBasename,
        k,
        y,
        L == null ? void 0 : L.relative
      ),
      H = Fn($, U, u);
    if (!H) {
      rl(g, y, Qe(404, { pathname: U }));
      return;
    }
    let {
      path: F,
      submission: O,
      error: le,
    } = Ms(s.v7_normalizeFormMethod, !0, U, L);
    if (le) {
      rl(g, y, le);
      return;
    }
    let Pe = oa(H, F);
    if (((_ = (L && L.preventScrollReset) === !0), O && rt(O.formMethod))) {
      Hd(g, y, F, Pe, H, O);
      return;
    }
    st.set(g, { routeId: y, path: F }), Bd(g, y, F, Pe, H, O);
  }
  async function Hd(g, y, k, L, $, U) {
    if ((_o(), st.delete(g), !L.route.action && !L.route.lazy)) {
      let ve = Qe(405, { method: U.formMethod, pathname: k, routeId: y });
      rl(g, y, ve);
      return;
    }
    let H = c.fetchers.get(g),
      F = f1(U, H);
    c.fetchers.set(g, F), q({ fetchers: new Map(c.fetchers) });
    let O = new AbortController(),
      le = vr(e.history, k, O.signal, U);
    J.set(g, O);
    let Pe = ut,
      K = await mr("action", le, L, $, o, l, u);
    if (le.signal.aborted) {
      J.get(g) === O && J.delete(g);
      return;
    }
    if (Zn(K))
      if ((J.delete(g), Nt > Pe)) {
        let ve = Cn(void 0);
        c.fetchers.set(g, ve), q({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        Ue.add(g);
        let ve = gr(U);
        return (
          c.fetchers.set(g, ve),
          q({ fetchers: new Map(c.fetchers) }),
          rr(c, K, { fetcherSubmission: U })
        );
      }
    if (Tr(K)) {
      rl(g, y, K.error);
      return;
    }
    if (sn(K)) throw Qe(400, { type: "defer-action" });
    let G = c.navigation.location || c.location,
      ce = vr(e.history, G, O.signal),
      tn = a || i,
      nn =
        c.navigation.state !== "idle"
          ? Fn(tn, c.navigation.location, u)
          : c.matches;
    Z(nn, "Didn't find any matches after fetcher action");
    let lr = ++ut;
    Tt.set(g, lr);
    let No = gr(U, K.data);
    c.fetchers.set(g, No);
    let [gt, yt] = Ls(
      e.history,
      c,
      nn,
      U,
      G,
      W,
      I,
      we,
      st,
      Ue,
      tn,
      u,
      { [L.route.id]: K.data },
      void 0
    );
    yt
      .filter((ve) => ve.key !== g)
      .forEach((ve) => {
        let or = ve.key,
          mu = c.fetchers.get(or),
          Yd = gr(void 0, mu ? mu.data : void 0);
        c.fetchers.set(or, Yd),
          J.has(or) && jt(or),
          ve.controller && J.set(or, ve.controller);
      }),
      q({ fetchers: new Map(c.fetchers) });
    let ol = () => yt.forEach((ve) => jt(ve.key));
    O.signal.addEventListener("abort", ol);
    let {
      results: To,
      loaderResults: jo,
      fetcherResults: Do,
    } = await au(c.matches, nn, gt, yt, ce);
    if (O.signal.aborted) return;
    O.signal.removeEventListener("abort", ol),
      Tt.delete(g),
      J.delete(g),
      yt.forEach((ve) => J.delete(ve.key));
    let X = As(To);
    if (X) {
      if (X.idx >= gt.length) {
        let ve = yt[X.idx - gt.length].key;
        Ue.add(ve);
      }
      return rr(c, X.result);
    }
    let { loaderData: be, errors: Dt } = Ds(
      c,
      c.matches,
      gt,
      jo,
      void 0,
      yt,
      Do,
      M
    );
    if (c.fetchers.has(g)) {
      let ve = Cn(K.data);
      c.fetchers.set(g, ve);
    }
    let zo = cu(lr);
    c.navigation.state === "loading" && lr > Nt
      ? (Z(x, "Expected pending action"),
        P && P.abort(),
        vt(c.navigation.location, {
          matches: nn,
          loaderData: be,
          errors: Dt,
          fetchers: new Map(c.fetchers),
        }))
      : (q(
          oe(
            { errors: Dt, loaderData: zs(c.loaderData, be, nn, Dt) },
            zo || yt.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
          )
        ),
        (W = !1));
  }
  async function Bd(g, y, k, L, $, U) {
    let H = c.fetchers.get(g),
      F = gr(U, H ? H.data : void 0);
    c.fetchers.set(g, F), q({ fetchers: new Map(c.fetchers) });
    let O = new AbortController(),
      le = vr(e.history, k, O.signal);
    J.set(g, O);
    let Pe = ut,
      K = await mr("loader", le, L, $, o, l, u);
    if (
      (sn(K) && (K = (await kd(K, le.signal, !0)) || K),
      J.get(g) === O && J.delete(g),
      le.signal.aborted)
    )
      return;
    if (Zn(K))
      if (Nt > Pe) {
        let ce = Cn(void 0);
        c.fetchers.set(g, ce), q({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        Ue.add(g), await rr(c, K);
        return;
      }
    if (Tr(K)) {
      let ce = In(c.matches, y);
      c.fetchers.delete(g),
        q({
          fetchers: new Map(c.fetchers),
          errors: { [ce.route.id]: K.error },
        });
      return;
    }
    Z(!sn(K), "Unhandled fetcher deferred data");
    let G = Cn(K.data);
    c.fetchers.set(g, G), q({ fetchers: new Map(c.fetchers) });
  }
  async function rr(g, y, k) {
    let {
      submission: L,
      fetcherSubmission: $,
      replace: U,
    } = k === void 0 ? {} : k;
    y.revalidate && (W = !0);
    let H = Xr(g.location, y.location, { _isRedirect: !0 });
    if ((Z(H, "Expected a location on the redirect navigation"), n)) {
      let G = !1;
      if (y.reloadDocument) G = !0;
      else if (wd.test(y.location)) {
        const ce = e.history.createURL(y.location);
        G = ce.origin !== t.location.origin || nl(ce.pathname, u) == null;
      }
      if (G) {
        U ? t.location.replace(y.location) : t.location.assign(y.location);
        return;
      }
    }
    P = null;
    let F = U === !0 ? he.Replace : he.Push,
      { formMethod: O, formAction: le, formEncType: Pe } = g.navigation;
    !L && !$ && O && le && Pe && (L = Is(g.navigation));
    let K = L || $;
    if (qh.has(y.status) && K && rt(K.formMethod))
      await en(F, H, {
        submission: oe({}, K, { formAction: y.location }),
        preventScrollReset: _,
      });
    else {
      let G = si(H, L);
      await en(F, H, {
        overrideNavigation: G,
        fetcherSubmission: $,
        preventScrollReset: _,
      });
    }
  }
  async function au(g, y, k, L, $) {
    let U = await Promise.all([
        ...k.map((O) => mr("loader", $, O, y, o, l, u)),
        ...L.map((O) =>
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
            : { type: fe.error, error: Qe(404, { pathname: O.path }) }
        ),
      ]),
      H = U.slice(0, k.length),
      F = U.slice(k.length);
    return (
      await Promise.all([
        Fs(
          g,
          k,
          H,
          H.map(() => $.signal),
          !1,
          c.loaderData
        ),
        Fs(
          g,
          L.map((O) => O.match),
          F,
          L.map((O) => (O.controller ? O.controller.signal : null)),
          !0
        ),
      ]),
      { results: U, loaderResults: H, fetcherResults: F }
    );
  }
  function _o() {
    (W = !0),
      I.push(...Lo()),
      st.forEach((g, y) => {
        J.has(y) && (we.push(y), jt(y));
      });
  }
  function rl(g, y, k) {
    let L = In(c.matches, y);
    Mo(g), q({ errors: { [L.route.id]: k }, fetchers: new Map(c.fetchers) });
  }
  function Mo(g) {
    let y = c.fetchers.get(g);
    J.has(g) && !(y && y.state === "loading" && Tt.has(g)) && jt(g),
      st.delete(g),
      Tt.delete(g),
      Ue.delete(g),
      c.fetchers.delete(g);
  }
  function jt(g) {
    let y = J.get(g);
    Z(y, "Expected fetch controller: " + g), y.abort(), J.delete(g);
  }
  function uu(g) {
    for (let y of g) {
      let k = iu(y),
        L = Cn(k.data);
      c.fetchers.set(y, L);
    }
  }
  function su() {
    let g = [],
      y = !1;
    for (let k of Ue) {
      let L = c.fetchers.get(k);
      Z(L, "Expected fetcher: " + k),
        L.state === "loading" && (Ue.delete(k), g.push(k), (y = !0));
    }
    return uu(g), y;
  }
  function cu(g) {
    let y = [];
    for (let [k, L] of Tt)
      if (L < g) {
        let $ = c.fetchers.get(k);
        Z($, "Expected fetcher: " + k),
          $.state === "loading" && (jt(k), Tt.delete(k), y.push(k));
      }
    return uu(y), y.length > 0;
  }
  function Wd(g, y) {
    let k = c.blockers.get(g) || hr;
    return A.get(g) !== y && A.set(g, y), k;
  }
  function fu(g) {
    c.blockers.delete(g), A.delete(g);
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
    let L = new Map(c.blockers);
    L.set(g, y), q({ blockers: L });
  }
  function du(g) {
    let { currentLocation: y, nextLocation: k, historyAction: L } = g;
    if (A.size === 0) return;
    A.size > 1 && bn(!1, "A router only supports one blocker at a time");
    let $ = Array.from(A.entries()),
      [U, H] = $[$.length - 1],
      F = c.blockers.get(U);
    if (
      !(F && F.state === "proceeding") &&
      H({ currentLocation: y, nextLocation: k, historyAction: L })
    )
      return U;
  }
  function Lo(g) {
    let y = [];
    return (
      M.forEach((k, L) => {
        (!g || g(L)) && (k.cancel(), y.push(L), M.delete(L));
      }),
      y
    );
  }
  function Zd(g, y, k) {
    if (((m = g), (S = y), (E = k || null), !w && c.navigation === ui)) {
      w = !0;
      let L = hu(c.location, c.matches);
      L != null && q({ restoreScrollPosition: L });
    }
    return () => {
      (m = null), (S = null), (E = null);
    };
  }
  function pu(g, y) {
    return (
      (E &&
        E(
          g,
          y.map((L) => _h(L, c.loaderData))
        )) ||
      g.key
    );
  }
  function Qd(g, y) {
    if (m && S) {
      let k = pu(g, y);
      m[k] = S();
    }
  }
  function hu(g, y) {
    if (m) {
      let k = pu(g, y),
        L = m[k];
      if (typeof L == "number") return L;
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
      initialize: re,
      subscribe: Sn,
      enableScrollRestoration: Zd,
      navigate: ct,
      fetch: Vd,
      revalidate: En,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: iu,
      deleteFetcher: Mo,
      dispose: pe,
      getBlocker: Wd,
      deleteBlocker: fu,
      _internalFetchControllers: J,
      _internalActiveDeferreds: M,
      _internalSetRoutes: Kd,
    }),
    h
  );
}
function n1(e) {
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
  let s = Wh(
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
  if (!r || !n1(r)) return { path: n };
  if (r.formMethod && !s1(r.formMethod))
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
          ? Array.from(r.body.entries()).reduce((E, S) => {
              let [w, R] = S;
              return (
                "" +
                E +
                w +
                "=" +
                R +
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
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = js(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = js(u));
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
function r1(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Ls(e, t, n, r, l, o, i, a, u, s, p, v, m, E) {
  let S = E ? Object.values(E)[0] : m ? Object.values(m)[0] : void 0,
    w = e.createURL(t.location),
    R = e.createURL(l),
    d = E ? Object.keys(E)[0] : void 0,
    h = r1(n, d).filter((x, _) => {
      if (x.route.lazy) return !0;
      if (x.route.loader == null) return !1;
      if (l1(t.loaderData, t.matches[_], x) || i.some((W) => W === x.route.id))
        return !0;
      let P = t.matches[_],
        T = x;
      return Ns(
        x,
        oe(
          {
            currentUrl: w,
            currentParams: P.params,
            nextUrl: R,
            nextParams: T.params,
          },
          r,
          {
            actionResult: S,
            defaultShouldRevalidate:
              o ||
              w.pathname + w.search === R.pathname + R.search ||
              w.search !== R.search ||
              Sd(P, T),
          }
        )
      );
    }),
    c = [];
  return (
    u.forEach((x, _) => {
      if (!n.some((we) => we.route.id === x.routeId)) return;
      let P = Fn(p, x.path, v);
      if (!P) {
        c.push({
          key: _,
          routeId: x.routeId,
          path: x.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let T = t.fetchers.get(_),
        W = oa(P, x.path),
        I = !1;
      s.has(_)
        ? (I = !1)
        : a.includes(_)
        ? (I = !0)
        : T && T.state !== "idle" && T.data === void 0
        ? (I = o)
        : (I = Ns(
            W,
            oe(
              {
                currentUrl: w,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: R,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: S, defaultShouldRevalidate: o }
            )
          )),
        I &&
          c.push({
            key: _,
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
function l1(e, t, n) {
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
async function Ts(e, t, n) {
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
  Object.assign(l, o), Object.assign(l, oe({}, t(l), { lazy: void 0 }));
}
async function mr(e, t, n, r, l, o, i, a) {
  a === void 0 && (a = {});
  let u,
    s,
    p,
    v = (S) => {
      let w,
        R = new Promise((d, f) => (w = f));
      return (
        (p = () => w()),
        t.signal.addEventListener("abort", p),
        Promise.race([
          S({ request: t, params: n.params, context: a.requestContext }),
          R,
        ])
      );
    };
  try {
    let S = n.route[e];
    if (n.route.lazy)
      if (S) {
        let w,
          R = await Promise.all([
            v(S).catch((d) => {
              w = d;
            }),
            Ts(n.route, o, l),
          ]);
        if (w) throw w;
        s = R[0];
      } else if ((await Ts(n.route, o, l), (S = n.route[e]), S)) s = await v(S);
      else if (e === "action") {
        let w = new URL(t.url),
          R = w.pathname + w.search;
        throw Qe(405, { method: t.method, pathname: R, routeId: n.route.id });
      } else return { type: fe.data, data: void 0 };
    else if (S) s = await v(S);
    else {
      let w = new URL(t.url),
        R = w.pathname + w.search;
      throw Qe(404, { pathname: R });
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
  } catch (S) {
    (u = fe.error), (s = S);
  } finally {
    p && t.signal.removeEventListener("abort", p);
  }
  if (u1(s)) {
    let S = s.status;
    if (Jh.has(S)) {
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
        type: fe.redirect,
        status: S,
        location: d,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (a.isRouteRequest)
      throw { type: u === fe.error ? fe.error : fe.data, response: s };
    let w,
      R = s.headers.get("Content-Type");
    return (
      R && /\bapplication\/json\b/.test(R)
        ? (w = await s.json())
        : (w = await s.text()),
      u === fe.error
        ? { type: u, error: new nu(S, s.statusText, w), headers: s.headers }
        : { type: fe.data, data: w, statusCode: s.status, headers: s.headers }
    );
  }
  if (u === fe.error) return { type: u, error: s };
  if (a1(s)) {
    var m, E;
    return {
      type: fe.deferred,
      deferredData: s,
      statusCode: (m = s.init) == null ? void 0 : m.status,
      headers:
        ((E = s.init) == null ? void 0 : E.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: fe.data, data: s };
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
function js(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function o1(e, t, n, r, l) {
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
        Tr(p))
      ) {
        let E = In(e, m),
          S = p.error;
        r && ((S = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[E.route.id] == null && (i[E.route.id] = S),
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
  let { loaderData: u, errors: s } = o1(t, n, r, l, a);
  for (let p = 0; p < o.length; p++) {
    let { key: v, match: m, controller: E } = o[p];
    Z(
      i !== void 0 && i[p] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let S = i[p];
    if (!(E && E.signal.aborted))
      if (Tr(S)) {
        let w = In(e.matches, m == null ? void 0 : m.route.id);
        (s && s[w.route.id]) || (s = oe({}, s, { [w.route.id]: S.error })),
          e.fetchers.delete(v);
      } else if (Zn(S)) Z(!1, "Unhandled fetcher revalidation redirect");
      else if (sn(S)) Z(!1, "Unhandled fetcher deferred data");
      else {
        let w = Cn(S.data);
        e.fetchers.set(v, w);
      }
  }
  return { loaderData: u, errors: s };
}
function zs(e, t, n, r) {
  let l = oe({}, t);
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
  return tl(oe({}, t, { hash: "" }));
}
function i1(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function sn(e) {
  return e.type === fe.deferred;
}
function Tr(e) {
  return e.type === fe.error;
}
function Zn(e) {
  return (e && e.type) === fe.redirect;
}
function a1(e) {
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
function u1(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function s1(e) {
  return Gh.has(e.toLowerCase());
}
function rt(e) {
  return Yh.has(e.toLowerCase());
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
        return { type: fe.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: fe.error, error: l };
      }
    return { type: fe.data, data: e.deferredData.data };
  }
}
function ru(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
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
function si(e, t) {
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
  };
}
/**
 * React Router v6.16.0
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
  Po = D.createContext(null),
  Ro = D.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Rd = D.createContext(null);
function lu() {
  return D.useContext(Po) != null;
}
function d1() {
  return lu() || Z(!1), D.useContext(Po).location;
}
function p1(e, t, n) {
  lu() || Z(!1);
  let { navigator: r } = D.useContext(Pd),
    { matches: l } = D.useContext(Ro),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let u = d1(),
    s;
  if (t) {
    var p;
    let w = typeof t == "string" ? Lt(t) : t;
    a === "/" || ((p = w.pathname) != null && p.startsWith(a)) || Z(!1),
      (s = w);
  } else s = u;
  let v = s.pathname || "/",
    m = a === "/" ? v : v.slice(a.length) || "/",
    E = Fn(e, { pathname: m }),
    S = y1(
      E &&
        E.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, i, w.params),
            pathname: dn([
              a,
              r.encodeLocation
                ? r.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : dn([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && S
    ? D.createElement(
        Po.Provider,
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
            navigationType: he.Pop,
          },
        },
        S
      )
    : S;
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
          Ro.Provider,
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
    D.createElement(Ro.Provider, { value: t }, r)
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
        let S;
        return (
          p
            ? (S = v)
            : u.route.Component
            ? (S = D.createElement(u.route.Component, null))
            : u.route.element
            ? (S = u.route.element)
            : (S = a),
          D.createElement(g1, {
            match: u,
            routeContext: { outlet: a, matches: m, isDataRoute: n != null },
            children: S,
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
  let t = D.useContext(Ro);
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
    navigationType: l = he.Pop,
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
    S = D.useMemo(() => {
      let w = nl(s, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: p, hash: v, state: m, key: E },
            navigationType: l,
          };
    }, [a, s, p, v, m, E, l]);
  return S == null
    ? null
    : D.createElement(
        Pd.Provider,
        { value: u },
        D.createElement(Po.Provider, { children: n, value: S })
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
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function oo() {
  return (
    (oo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oo.apply(this, arguments)
  );
}
function M1(e, t) {
  return t1({
    basename: t == null ? void 0 : t.basename,
    future: oo({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: kh({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || L1(),
    routes: e,
    mapRouteProperties: _1,
  }).initialize();
}
function L1() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = oo({}, t, { errors: N1(t.errors) })), t;
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
const T1 = "./assets/cv-7b4ca1d7.pdf";
function j1() {
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
                href: T1,
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
  io = Object.getOwnPropertySymbols,
  _d = Object.prototype.hasOwnProperty,
  Md = Object.prototype.propertyIsEnumerable,
  Hs = (e, t, n) =>
    t in e
      ? z1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Bs = (e, t) => {
    for (var n in t || (t = {})) _d.call(t, n) && Hs(e, n, t[n]);
    if (io) for (var n of io(t)) Md.call(t, n) && Hs(e, n, t[n]);
    return e;
  },
  Ws = (e, t) => {
    var n = {};
    for (var r in e) _d.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && io)
      for (var r of io(e)) t.indexOf(r) < 0 && Md.call(e, r) && (n[r] = e[r]);
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
      weight: S = "regular",
      mirrored: w = !1,
    } = v,
    R = Ws(v, ["color", "size", "weight", "mirrored"]);
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
          transform: a || w ? "scale(-1, 1)" : void 0,
        },
        R
      ),
      p
    ),
    !!r && j.createElement("title", null, r),
    u,
    s.get(i ?? S)
  );
});
ou.displayName = "IconBase";
var O1 = Object.defineProperty,
  ao = Object.getOwnPropertySymbols,
  Ld = Object.prototype.hasOwnProperty,
  Nd = Object.prototype.propertyIsEnumerable,
  Zs = (e, t, n) =>
    t in e
      ? O1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  A1 = (e, t) => {
    for (var n in t || (t = {})) Ld.call(t, n) && Zs(e, n, t[n]);
    if (ao) for (var n of ao(t)) Nd.call(t, n) && Zs(e, n, t[n]);
    return e;
  },
  F1 = (e, t) => {
    var n = {};
    for (var r in e) Ld.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ao)
      for (var r of ao(e)) t.indexOf(r) < 0 && Nd.call(e, r) && (n[r] = e[r]);
    return n;
  };
const Td = D.forwardRef((e, t) => {
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
Td.displayName = "SSRBase";
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
const jd = D.forwardRef((e, t) =>
  j.createElement(Td, K1(Q1({ ref: t }, e), { weights: $1 }))
);
jd.displayName = "LinkedinLogo";
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
        children: z.jsx(jd, { size: "40" }),
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
        "TailwindCSS",
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
        "Boostrap",
        "Oauth2",
        "Javascript",
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
      z.jsx(j1, {}),
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

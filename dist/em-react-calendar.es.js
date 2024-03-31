import Oe, { useState as ie, useRef as Yr, useEffect as pr, isValidElement as Wr } from "react";
function qr(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ye = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr;
function Nr() {
  if (tr)
    return Ee;
  tr = 1;
  var n = Oe, _ = Symbol.for("react.element"), y = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, h = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(l, v, b) {
    var u, d = {}, f = null, E = null;
    b !== void 0 && (f = "" + b), v.key !== void 0 && (f = "" + v.key), v.ref !== void 0 && (E = v.ref);
    for (u in v)
      p.call(v, u) && !c.hasOwnProperty(u) && (d[u] = v[u]);
    if (l && l.defaultProps)
      for (u in v = l.defaultProps, v)
        d[u] === void 0 && (d[u] = v[u]);
    return { $$typeof: _, type: l, key: f, ref: E, props: d, _owner: h.current };
  }
  return Ee.Fragment = y, Ee.jsx = m, Ee.jsxs = m, Ee;
}
var _e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function Ur() {
  return nr || (nr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Oe, _ = Symbol.for("react.element"), y = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), l = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), M = Symbol.iterator, T = "@@iterator";
    function B(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = M && e[M] || e[T];
      return typeof r == "function" ? r : null;
    }
    var N = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), g = 1; g < r; g++)
          a[g - 1] = arguments[g];
        U("error", e, a);
      }
    }
    function U(e, r, a) {
      {
        var g = N.ReactDebugCurrentFrame, F = g.getStackAddendum();
        F !== "" && (r += "%s", a = a.concat([F]));
        var Y = a.map(function(D) {
          return String(D);
        });
        Y.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, Y);
      }
    }
    var C = !1, o = !1, J = !1, te = !1, me = !1, ue;
    ue = Symbol.for("react.module.reference");
    function ge(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === c || me || e === h || e === b || e === u || te || e === E || C || o || J || typeof e == "object" && e !== null && (e.$$typeof === f || e.$$typeof === d || e.$$typeof === m || e.$$typeof === l || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function fe(e, r, a) {
      var g = e.displayName;
      if (g)
        return g;
      var F = r.displayName || r.name || "";
      return F !== "" ? a + "(" + F + ")" : a;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function Z(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case y:
          return "Portal";
        case c:
          return "Profiler";
        case h:
          return "StrictMode";
        case b:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var r = e;
            return le(r) + ".Consumer";
          case m:
            var a = e;
            return le(a._context) + ".Provider";
          case v:
            return fe(e, e.render, "ForwardRef");
          case d:
            var g = e.displayName || null;
            return g !== null ? g : Z(e.type) || "Memo";
          case f: {
            var F = e, Y = F._payload, D = F._init;
            try {
              return Z(D(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, oe = 0, Q, ne, se, de, t, s, S;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function w() {
      {
        if (oe === 0) {
          Q = console.log, ne = console.info, se = console.warn, de = console.error, t = console.group, s = console.groupCollapsed, S = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: O,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        oe++;
      }
    }
    function I() {
      {
        if (oe--, oe === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, e, {
              value: Q
            }),
            info: X({}, e, {
              value: ne
            }),
            warn: X({}, e, {
              value: se
            }),
            error: X({}, e, {
              value: de
            }),
            group: X({}, e, {
              value: t
            }),
            groupCollapsed: X({}, e, {
              value: s
            }),
            groupEnd: X({}, e, {
              value: S
            })
          });
        }
        oe < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var R = N.ReactCurrentDispatcher, x;
    function P(e, r, a) {
      {
        if (x === void 0)
          try {
            throw Error();
          } catch (F) {
            var g = F.stack.trim().match(/\n( *(at )?)/);
            x = g && g[1] || "";
          }
        return `
` + x + e;
      }
    }
    var k = !1, j;
    {
      var G = typeof WeakMap == "function" ? WeakMap : Map;
      j = new G();
    }
    function i(e, r) {
      if (!e || k)
        return "";
      {
        var a = j.get(e);
        if (a !== void 0)
          return a;
      }
      var g;
      k = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = R.current, R.current = null, w();
      try {
        if (r) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (ae) {
              g = ae;
            }
            Reflect.construct(e, [], D);
          } else {
            try {
              D.call();
            } catch (ae) {
              g = ae;
            }
            e.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            g = ae;
          }
          e();
        }
      } catch (ae) {
        if (ae && g && typeof ae.stack == "string") {
          for (var A = ae.stack.split(`
`), K = g.stack.split(`
`), V = A.length - 1, z = K.length - 1; V >= 1 && z >= 0 && A[V] !== K[z]; )
            z--;
          for (; V >= 1 && z >= 0; V--, z--)
            if (A[V] !== K[z]) {
              if (V !== 1 || z !== 1)
                do
                  if (V--, z--, z < 0 || A[V] !== K[z]) {
                    var re = `
` + A[V].replace(" at new ", " at ");
                    return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), typeof e == "function" && j.set(e, re), re;
                  }
                while (V >= 1 && z >= 0);
              break;
            }
        }
      } finally {
        k = !1, R.current = Y, I(), Error.prepareStackTrace = F;
      }
      var ye = e ? e.displayName || e.name : "", rr = ye ? P(ye) : "";
      return typeof e == "function" && j.set(e, rr), rr;
    }
    function ee(e, r, a) {
      return i(e, !1);
    }
    function pe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ce(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return i(e, pe(e));
      if (typeof e == "string")
        return P(e);
      switch (e) {
        case b:
          return P("Suspense");
        case u:
          return P("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return ee(e.render);
          case d:
            return ce(e.type, r, a);
          case f: {
            var g = e, F = g._payload, Y = g._init;
            try {
              return ce(Y(F), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, Ue = {}, Ve = N.ReactDebugCurrentFrame;
    function Re(e) {
      if (e) {
        var r = e._owner, a = ce(e.type, e._source, r ? r.type : null);
        Ve.setExtraStackFrame(a);
      } else
        Ve.setExtraStackFrame(null);
    }
    function br(e, r, a, g, F) {
      {
        var Y = Function.call.bind(we);
        for (var D in e)
          if (Y(e, D)) {
            var A = void 0;
            try {
              if (typeof e[D] != "function") {
                var K = Error((g || "React class") + ": " + a + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              A = e[D](r, D, g, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (V) {
              A = V;
            }
            A && !(A instanceof Error) && (Re(F), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", a, D, typeof A), Re(null)), A instanceof Error && !(A.message in Ue) && (Ue[A.message] = !0, Re(F), q("Failed %s type: %s", a, A.message), Re(null));
          }
      }
    }
    var Er = Array.isArray;
    function Se(e) {
      return Er(e);
    }
    function _r(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Tr(e) {
      try {
        return Be(e), !1;
      } catch {
        return !0;
      }
    }
    function Be(e) {
      return "" + e;
    }
    function ze(e) {
      if (Tr(e))
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _r(e)), Be(e);
    }
    var be = N.ReactCurrentOwner, wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, He, Je, Pe;
    Pe = {};
    function Rr(e) {
      if (we.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Cr(e) {
      if (we.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function xr(e, r) {
      if (typeof e.ref == "string" && be.current && r && be.current.stateNode !== r) {
        var a = Z(be.current.type);
        Pe[a] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(be.current.type), e.ref), Pe[a] = !0);
      }
    }
    function Or(e, r) {
      {
        var a = function() {
          He || (He = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function Sr(e, r) {
      {
        var a = function() {
          Je || (Je = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var Pr = function(e, r, a, g, F, Y, D) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: _,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: D,
        // Record the component responsible for creating this element.
        _owner: Y
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function jr(e, r, a, g, F) {
      {
        var Y, D = {}, A = null, K = null;
        a !== void 0 && (ze(a), A = "" + a), Cr(r) && (ze(r.key), A = "" + r.key), Rr(r) && (K = r.ref, xr(r, F));
        for (Y in r)
          we.call(r, Y) && !wr.hasOwnProperty(Y) && (D[Y] = r[Y]);
        if (e && e.defaultProps) {
          var V = e.defaultProps;
          for (Y in V)
            D[Y] === void 0 && (D[Y] = V[Y]);
        }
        if (A || K) {
          var z = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          A && Or(D, z), K && Sr(D, z);
        }
        return Pr(e, A, K, F, g, be.current, D);
      }
    }
    var je = N.ReactCurrentOwner, Ge = N.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var r = e._owner, a = ce(e.type, e._source, r ? r.type : null);
        Ge.setExtraStackFrame(a);
      } else
        Ge.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function Ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === _;
    }
    function Ke() {
      {
        if (je.current) {
          var e = Z(je.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ar(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
    }
    var Xe = {};
    function Ir(e) {
      {
        var r = Ke();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function Ze(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = Ir(r);
        if (Xe[a])
          return;
        Xe[a] = !0;
        var g = "";
        e && e._owner && e._owner !== je.current && (g = " It was passed a child from " + Z(e._owner.type) + "."), ve(e), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, g), ve(null);
      }
    }
    function Qe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Se(e))
          for (var a = 0; a < e.length; a++) {
            var g = e[a];
            Ie(g) && Ze(g, r);
          }
        else if (Ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var F = B(e);
          if (typeof F == "function" && F !== e.entries)
            for (var Y = F.call(e), D; !(D = Y.next()).done; )
              Ie(D.value) && Ze(D.value, r);
        }
      }
    }
    function Dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === d))
          a = r.propTypes;
        else
          return;
        if (a) {
          var g = Z(r);
          br(a, e.props, "prop", g, e);
        } else if (r.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var F = Z(r);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var g = r[a];
          if (g !== "children" && g !== "key") {
            ve(e), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), ve(null);
            break;
          }
        }
        e.ref !== null && (ve(e), q("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function er(e, r, a, g, F, Y) {
      {
        var D = ge(e);
        if (!D) {
          var A = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = Ar(F);
          K ? A += K : A += Ke();
          var V;
          e === null ? V = "null" : Se(e) ? V = "array" : e !== void 0 && e.$$typeof === _ ? (V = "<" + (Z(e.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : V = typeof e, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, A);
        }
        var z = jr(e, r, a, F, Y);
        if (z == null)
          return z;
        if (D) {
          var re = r.children;
          if (re !== void 0)
            if (g)
              if (Se(re)) {
                for (var ye = 0; ye < re.length; ye++)
                  Qe(re[ye], e);
                Object.freeze && Object.freeze(re);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qe(re, e);
        }
        return e === p ? Mr(z) : Dr(z), z;
      }
    }
    function kr(e, r, a) {
      return er(e, r, a, !0);
    }
    function Fr(e, r, a) {
      return er(e, r, a, !1);
    }
    var $r = Fr, Lr = kr;
    _e.Fragment = p, _e.jsx = $r, _e.jsxs = Lr;
  }()), _e;
}
process.env.NODE_ENV === "production" ? Ye.exports = Nr() : Ye.exports = Ur();
var W = Ye.exports, We = { exports: {} }, Ce = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function Vr() {
  if (or)
    return $;
  or = 1;
  var n = typeof Symbol == "function" && Symbol.for, _ = n ? Symbol.for("react.element") : 60103, y = n ? Symbol.for("react.portal") : 60106, p = n ? Symbol.for("react.fragment") : 60107, h = n ? Symbol.for("react.strict_mode") : 60108, c = n ? Symbol.for("react.profiler") : 60114, m = n ? Symbol.for("react.provider") : 60109, l = n ? Symbol.for("react.context") : 60110, v = n ? Symbol.for("react.async_mode") : 60111, b = n ? Symbol.for("react.concurrent_mode") : 60111, u = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, f = n ? Symbol.for("react.suspense_list") : 60120, E = n ? Symbol.for("react.memo") : 60115, M = n ? Symbol.for("react.lazy") : 60116, T = n ? Symbol.for("react.block") : 60121, B = n ? Symbol.for("react.fundamental") : 60117, N = n ? Symbol.for("react.responder") : 60118, q = n ? Symbol.for("react.scope") : 60119;
  function U(o) {
    if (typeof o == "object" && o !== null) {
      var J = o.$$typeof;
      switch (J) {
        case _:
          switch (o = o.type, o) {
            case v:
            case b:
            case p:
            case c:
            case h:
            case d:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case l:
                case u:
                case M:
                case E:
                case m:
                  return o;
                default:
                  return J;
              }
          }
        case y:
          return J;
      }
    }
  }
  function C(o) {
    return U(o) === b;
  }
  return $.AsyncMode = v, $.ConcurrentMode = b, $.ContextConsumer = l, $.ContextProvider = m, $.Element = _, $.ForwardRef = u, $.Fragment = p, $.Lazy = M, $.Memo = E, $.Portal = y, $.Profiler = c, $.StrictMode = h, $.Suspense = d, $.isAsyncMode = function(o) {
    return C(o) || U(o) === v;
  }, $.isConcurrentMode = C, $.isContextConsumer = function(o) {
    return U(o) === l;
  }, $.isContextProvider = function(o) {
    return U(o) === m;
  }, $.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === _;
  }, $.isForwardRef = function(o) {
    return U(o) === u;
  }, $.isFragment = function(o) {
    return U(o) === p;
  }, $.isLazy = function(o) {
    return U(o) === M;
  }, $.isMemo = function(o) {
    return U(o) === E;
  }, $.isPortal = function(o) {
    return U(o) === y;
  }, $.isProfiler = function(o) {
    return U(o) === c;
  }, $.isStrictMode = function(o) {
    return U(o) === h;
  }, $.isSuspense = function(o) {
    return U(o) === d;
  }, $.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === p || o === b || o === c || o === h || o === d || o === f || typeof o == "object" && o !== null && (o.$$typeof === M || o.$$typeof === E || o.$$typeof === m || o.$$typeof === l || o.$$typeof === u || o.$$typeof === B || o.$$typeof === N || o.$$typeof === q || o.$$typeof === T);
  }, $.typeOf = U, $;
}
var L = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar;
function Br() {
  return ar || (ar = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, _ = n ? Symbol.for("react.element") : 60103, y = n ? Symbol.for("react.portal") : 60106, p = n ? Symbol.for("react.fragment") : 60107, h = n ? Symbol.for("react.strict_mode") : 60108, c = n ? Symbol.for("react.profiler") : 60114, m = n ? Symbol.for("react.provider") : 60109, l = n ? Symbol.for("react.context") : 60110, v = n ? Symbol.for("react.async_mode") : 60111, b = n ? Symbol.for("react.concurrent_mode") : 60111, u = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, f = n ? Symbol.for("react.suspense_list") : 60120, E = n ? Symbol.for("react.memo") : 60115, M = n ? Symbol.for("react.lazy") : 60116, T = n ? Symbol.for("react.block") : 60121, B = n ? Symbol.for("react.fundamental") : 60117, N = n ? Symbol.for("react.responder") : 60118, q = n ? Symbol.for("react.scope") : 60119;
    function U(i) {
      return typeof i == "string" || typeof i == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      i === p || i === b || i === c || i === h || i === d || i === f || typeof i == "object" && i !== null && (i.$$typeof === M || i.$$typeof === E || i.$$typeof === m || i.$$typeof === l || i.$$typeof === u || i.$$typeof === B || i.$$typeof === N || i.$$typeof === q || i.$$typeof === T);
    }
    function C(i) {
      if (typeof i == "object" && i !== null) {
        var ee = i.$$typeof;
        switch (ee) {
          case _:
            var pe = i.type;
            switch (pe) {
              case v:
              case b:
              case p:
              case c:
              case h:
              case d:
                return pe;
              default:
                var ce = pe && pe.$$typeof;
                switch (ce) {
                  case l:
                  case u:
                  case M:
                  case E:
                  case m:
                    return ce;
                  default:
                    return ee;
                }
            }
          case y:
            return ee;
        }
      }
    }
    var o = v, J = b, te = l, me = m, ue = _, ge = u, fe = p, le = M, Z = E, X = y, oe = c, Q = h, ne = d, se = !1;
    function de(i) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(i) || C(i) === v;
    }
    function t(i) {
      return C(i) === b;
    }
    function s(i) {
      return C(i) === l;
    }
    function S(i) {
      return C(i) === m;
    }
    function O(i) {
      return typeof i == "object" && i !== null && i.$$typeof === _;
    }
    function w(i) {
      return C(i) === u;
    }
    function I(i) {
      return C(i) === p;
    }
    function R(i) {
      return C(i) === M;
    }
    function x(i) {
      return C(i) === E;
    }
    function P(i) {
      return C(i) === y;
    }
    function k(i) {
      return C(i) === c;
    }
    function j(i) {
      return C(i) === h;
    }
    function G(i) {
      return C(i) === d;
    }
    L.AsyncMode = o, L.ConcurrentMode = J, L.ContextConsumer = te, L.ContextProvider = me, L.Element = ue, L.ForwardRef = ge, L.Fragment = fe, L.Lazy = le, L.Memo = Z, L.Portal = X, L.Profiler = oe, L.StrictMode = Q, L.Suspense = ne, L.isAsyncMode = de, L.isConcurrentMode = t, L.isContextConsumer = s, L.isContextProvider = S, L.isElement = O, L.isForwardRef = w, L.isFragment = I, L.isLazy = R, L.isMemo = x, L.isPortal = P, L.isProfiler = k, L.isStrictMode = j, L.isSuspense = G, L.isValidElementType = U, L.typeOf = C;
  }()), L;
}
var ir;
function vr() {
  return ir || (ir = 1, process.env.NODE_ENV === "production" ? Ce.exports = Vr() : Ce.exports = Br()), Ce.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var De, sr;
function zr() {
  if (sr)
    return De;
  sr = 1;
  var n = Object.getOwnPropertySymbols, _ = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
  function p(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function h() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var m = {}, l = 0; l < 10; l++)
        m["_" + String.fromCharCode(l)] = l;
      var v = Object.getOwnPropertyNames(m).map(function(u) {
        return m[u];
      });
      if (v.join("") !== "0123456789")
        return !1;
      var b = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        b[u] = u;
      }), Object.keys(Object.assign({}, b)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return De = h() ? Object.assign : function(c, m) {
    for (var l, v = p(c), b, u = 1; u < arguments.length; u++) {
      l = Object(arguments[u]);
      for (var d in l)
        _.call(l, d) && (v[d] = l[d]);
      if (n) {
        b = n(l);
        for (var f = 0; f < b.length; f++)
          y.call(l, b[f]) && (v[b[f]] = l[b[f]]);
      }
    }
    return v;
  }, De;
}
var Me, cr;
function Ne() {
  if (cr)
    return Me;
  cr = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Me = n, Me;
}
var ke, ur;
function yr() {
  return ur || (ur = 1, ke = Function.call.bind(Object.prototype.hasOwnProperty)), ke;
}
var Fe, fr;
function Hr() {
  if (fr)
    return Fe;
  fr = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var _ = Ne(), y = {}, p = yr();
    n = function(c) {
      var m = "Warning: " + c;
      typeof console < "u" && console.error(m);
      try {
        throw new Error(m);
      } catch {
      }
    };
  }
  function h(c, m, l, v, b) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in c)
        if (p(c, u)) {
          var d;
          try {
            if (typeof c[u] != "function") {
              var f = Error(
                (v || "React class") + ": " + l + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            d = c[u](m, u, v, l, null, _);
          } catch (M) {
            d = M;
          }
          if (d && !(d instanceof Error) && n(
            (v || "React class") + ": type specification of " + l + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in y)) {
            y[d.message] = !0;
            var E = b ? b() : "";
            n(
              "Failed " + l + " type: " + d.message + (E ?? "")
            );
          }
        }
    }
  }
  return h.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (y = {});
  }, Fe = h, Fe;
}
var $e, lr;
function Jr() {
  if (lr)
    return $e;
  lr = 1;
  var n = vr(), _ = zr(), y = Ne(), p = yr(), h = Hr(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(l) {
    var v = "Warning: " + l;
    typeof console < "u" && console.error(v);
    try {
      throw new Error(v);
    } catch {
    }
  });
  function m() {
    return null;
  }
  return $e = function(l, v) {
    var b = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(t) {
      var s = t && (b && t[b] || t[u]);
      if (typeof s == "function")
        return s;
    }
    var f = "<<anonymous>>", E = {
      array: N("array"),
      bigint: N("bigint"),
      bool: N("boolean"),
      func: N("function"),
      number: N("number"),
      object: N("object"),
      string: N("string"),
      symbol: N("symbol"),
      any: q(),
      arrayOf: U,
      element: C(),
      elementType: o(),
      instanceOf: J,
      node: ge(),
      objectOf: me,
      oneOf: te,
      oneOfType: ue,
      shape: le,
      exact: Z
    };
    function M(t, s) {
      return t === s ? t !== 0 || 1 / t === 1 / s : t !== t && s !== s;
    }
    function T(t, s) {
      this.message = t, this.data = s && typeof s == "object" ? s : {}, this.stack = "";
    }
    T.prototype = Error.prototype;
    function B(t) {
      if (process.env.NODE_ENV !== "production")
        var s = {}, S = 0;
      function O(I, R, x, P, k, j, G) {
        if (P = P || f, j = j || x, G !== y) {
          if (v) {
            var i = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw i.name = "Invariant Violation", i;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = P + ":" + x;
            !s[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            S < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + P + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), s[ee] = !0, S++);
          }
        }
        return R[x] == null ? I ? R[x] === null ? new T("The " + k + " `" + j + "` is marked as required " + ("in `" + P + "`, but its value is `null`.")) : new T("The " + k + " `" + j + "` is marked as required in " + ("`" + P + "`, but its value is `undefined`.")) : null : t(R, x, P, k, j);
      }
      var w = O.bind(null, !1);
      return w.isRequired = O.bind(null, !0), w;
    }
    function N(t) {
      function s(S, O, w, I, R, x) {
        var P = S[O], k = Q(P);
        if (k !== t) {
          var j = ne(P);
          return new T(
            "Invalid " + I + " `" + R + "` of type " + ("`" + j + "` supplied to `" + w + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return B(s);
    }
    function q() {
      return B(m);
    }
    function U(t) {
      function s(S, O, w, I, R) {
        if (typeof t != "function")
          return new T("Property `" + R + "` of component `" + w + "` has invalid PropType notation inside arrayOf.");
        var x = S[O];
        if (!Array.isArray(x)) {
          var P = Q(x);
          return new T("Invalid " + I + " `" + R + "` of type " + ("`" + P + "` supplied to `" + w + "`, expected an array."));
        }
        for (var k = 0; k < x.length; k++) {
          var j = t(x, k, w, I, R + "[" + k + "]", y);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return B(s);
    }
    function C() {
      function t(s, S, O, w, I) {
        var R = s[S];
        if (!l(R)) {
          var x = Q(R);
          return new T("Invalid " + w + " `" + I + "` of type " + ("`" + x + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return B(t);
    }
    function o() {
      function t(s, S, O, w, I) {
        var R = s[S];
        if (!n.isValidElementType(R)) {
          var x = Q(R);
          return new T("Invalid " + w + " `" + I + "` of type " + ("`" + x + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return B(t);
    }
    function J(t) {
      function s(S, O, w, I, R) {
        if (!(S[O] instanceof t)) {
          var x = t.name || f, P = de(S[O]);
          return new T("Invalid " + I + " `" + R + "` of type " + ("`" + P + "` supplied to `" + w + "`, expected ") + ("instance of `" + x + "`."));
        }
        return null;
      }
      return B(s);
    }
    function te(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), m;
      function s(S, O, w, I, R) {
        for (var x = S[O], P = 0; P < t.length; P++)
          if (M(x, t[P]))
            return null;
        var k = JSON.stringify(t, function(G, i) {
          var ee = ne(i);
          return ee === "symbol" ? String(i) : i;
        });
        return new T("Invalid " + I + " `" + R + "` of value `" + String(x) + "` " + ("supplied to `" + w + "`, expected one of " + k + "."));
      }
      return B(s);
    }
    function me(t) {
      function s(S, O, w, I, R) {
        if (typeof t != "function")
          return new T("Property `" + R + "` of component `" + w + "` has invalid PropType notation inside objectOf.");
        var x = S[O], P = Q(x);
        if (P !== "object")
          return new T("Invalid " + I + " `" + R + "` of type " + ("`" + P + "` supplied to `" + w + "`, expected an object."));
        for (var k in x)
          if (p(x, k)) {
            var j = t(x, k, w, I, R + "." + k, y);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return B(s);
    }
    function ue(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), m;
      for (var s = 0; s < t.length; s++) {
        var S = t[s];
        if (typeof S != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(S) + " at index " + s + "."
          ), m;
      }
      function O(w, I, R, x, P) {
        for (var k = [], j = 0; j < t.length; j++) {
          var G = t[j], i = G(w, I, R, x, P, y);
          if (i == null)
            return null;
          i.data && p(i.data, "expectedType") && k.push(i.data.expectedType);
        }
        var ee = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new T("Invalid " + x + " `" + P + "` supplied to " + ("`" + R + "`" + ee + "."));
      }
      return B(O);
    }
    function ge() {
      function t(s, S, O, w, I) {
        return X(s[S]) ? null : new T("Invalid " + w + " `" + I + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return B(t);
    }
    function fe(t, s, S, O, w) {
      return new T(
        (t || "React class") + ": " + s + " type `" + S + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + w + "`."
      );
    }
    function le(t) {
      function s(S, O, w, I, R) {
        var x = S[O], P = Q(x);
        if (P !== "object")
          return new T("Invalid " + I + " `" + R + "` of type `" + P + "` " + ("supplied to `" + w + "`, expected `object`."));
        for (var k in t) {
          var j = t[k];
          if (typeof j != "function")
            return fe(w, I, R, k, ne(j));
          var G = j(x, k, w, I, R + "." + k, y);
          if (G)
            return G;
        }
        return null;
      }
      return B(s);
    }
    function Z(t) {
      function s(S, O, w, I, R) {
        var x = S[O], P = Q(x);
        if (P !== "object")
          return new T("Invalid " + I + " `" + R + "` of type `" + P + "` " + ("supplied to `" + w + "`, expected `object`."));
        var k = _({}, S[O], t);
        for (var j in k) {
          var G = t[j];
          if (p(t, j) && typeof G != "function")
            return fe(w, I, R, j, ne(G));
          if (!G)
            return new T(
              "Invalid " + I + " `" + R + "` key `" + j + "` supplied to `" + w + "`.\nBad object: " + JSON.stringify(S[O], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var i = G(x, j, w, I, R + "." + j, y);
          if (i)
            return i;
        }
        return null;
      }
      return B(s);
    }
    function X(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(X);
          if (t === null || l(t))
            return !0;
          var s = d(t);
          if (s) {
            var S = s.call(t), O;
            if (s !== t.entries) {
              for (; !(O = S.next()).done; )
                if (!X(O.value))
                  return !1;
            } else
              for (; !(O = S.next()).done; ) {
                var w = O.value;
                if (w && !X(w[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(t, s) {
      return t === "symbol" ? !0 : s ? s["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && s instanceof Symbol : !1;
    }
    function Q(t) {
      var s = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : oe(s, t) ? "symbol" : s;
    }
    function ne(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var s = Q(t);
      if (s === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return s;
    }
    function se(t) {
      var s = ne(t);
      switch (s) {
        case "array":
        case "object":
          return "an " + s;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + s;
        default:
          return s;
      }
    }
    function de(t) {
      return !t.constructor || !t.constructor.name ? f : t.constructor.name;
    }
    return E.checkPropTypes = h, E.resetWarningCache = h.resetWarningCache, E.PropTypes = E, E;
  }, $e;
}
var Le, dr;
function Gr() {
  if (dr)
    return Le;
  dr = 1;
  var n = Ne();
  function _() {
  }
  function y() {
  }
  return y.resetWarningCache = _, Le = function() {
    function p(m, l, v, b, u, d) {
      if (d !== n) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    p.isRequired = p;
    function h() {
      return p;
    }
    var c = {
      array: p,
      bigint: p,
      bool: p,
      func: p,
      number: p,
      object: p,
      string: p,
      symbol: p,
      any: p,
      arrayOf: h,
      element: p,
      elementType: p,
      instanceOf: h,
      node: p,
      objectOf: h,
      oneOf: h,
      oneOfType: h,
      shape: h,
      exact: h,
      checkPropTypes: y,
      resetWarningCache: _
    };
    return c.PropTypes = c, c;
  }, Le;
}
if (process.env.NODE_ENV !== "production") {
  var Kr = vr(), Xr = !0;
  We.exports = Jr()(Kr.isElement, Xr);
} else
  We.exports = Gr()();
var Zr = We.exports;
const H = /* @__PURE__ */ qr(Zr), Qr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20448%20512'%3e%3c!--!%20Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20(Icons:%20CC%20BY%204.0,%20Fonts:%20SIL%20OFL%201.1,%20Code:%20MIT%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cpath%20d='M201.4%20342.6c12.5%2012.5%2032.8%2012.5%2045.3%200l160-160c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L224%20274.7%2086.6%20137.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3l160%20160z'/%3e%3c/svg%3e", et = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20448%20512'%3e%3c!--!%20Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20(Icons:%20CC%20BY%204.0,%20Fonts:%20SIL%20OFL%201.1,%20Code:%20MIT%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cpath%20d='M201.4%20137.4c12.5-12.5%2032.8-12.5%2045.3%200l160%20160c12.5%2012.5%2012.5%2032.8%200%2045.3s-32.8%2012.5-45.3%200L224%20205.3%2086.6%20342.6c-12.5%2012.5-32.8%2012.5-45.3%200s-12.5-32.8%200-45.3l160-160z'/%3e%3c/svg%3e", rt = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20448%20512'%3e%3c!--!%20Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20(Icons:%20CC%20BY%204.0,%20Fonts:%20SIL%20OFL%201.1,%20Code:%20MIT%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cpath%20d='M201.4%20342.6c12.5%2012.5%2032.8%2012.5%2045.3%200l160-160c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L224%20274.7%2086.6%20137.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3l160%20160z'%20fill='%23daa520'/%3e%3c/svg%3e", tt = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20448%20512'%3e%3c!--!%20Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20(Icons:%20CC%20BY%204.0,%20Fonts:%20SIL%20OFL%201.1,%20Code:%20MIT%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cpath%20d='M201.4%20137.4c12.5-12.5%2032.8-12.5%2045.3%200l160%20160c12.5%2012.5%2012.5%2032.8%200%2045.3s-32.8%2012.5-45.3%200L224%20205.3%2086.6%20342.6c-12.5%2012.5-32.8%2012.5-45.3%200s-12.5-32.8%200-45.3l160-160z'%20fill='%23daa520'/%3e%3c/svg%3e", nt = "_wrapper_klj8k_1", ot = "_select_klj8k_9", at = "_text_klj8k_24", it = "_hidden_klj8k_35", he = {
  wrapper: nt,
  select: ot,
  text: at,
  hidden: it
}, qe = ({ value: n, children: _, id: y, onValueChange: p }) => {
  const [h, c] = ie({ open: !1 }), [m, l] = ie(n), [v, b] = ie(0), u = Yr(), d = () => c({ open: !h.open }), f = (T) => {
    l(T), p(T), c({ open: !1 });
  }, E = (T) => {
    u.current && !u.current.contains(T.target) && c({ open: !1 });
  };
  pr(() => (document.addEventListener("mousedown", E), u.current && b(u.current.offsetHeight), l(n), () => document.removeEventListener("mousedown", E)), [n]);
  const M = Oe.Children.map(_, (T) => Wr(T) ? Oe.cloneElement(T, { onChange: f }) : T);
  return /* @__PURE__ */ W.jsxs("div", { className: he.wrapper, ref: u, children: [
    /* @__PURE__ */ W.jsxs(
      "button",
      {
        onClick: d,
        type: "button",
        className: he.select,
        id: y,
        children: [
          /* @__PURE__ */ W.jsx("span", { className: he.text, children: m }),
          /* @__PURE__ */ W.jsx(
            "img",
            {
              src: y ? Qr : rt,
              alt: "Open Dropdown",
              className: h.open ? he.hidden : ""
            }
          ),
          /* @__PURE__ */ W.jsx(
            "img",
            {
              src: y ? et : tt,
              alt: "Close Dropdown",
              className: h.open ? "" : he.hidden
            }
          )
        ]
      }
    ),
    h.open && /* @__PURE__ */ W.jsx(
      "div",
      {
        className: he.style,
        style: {
          position: "absolute",
          top: `${v}px`,
          border: "1px solid #f6f6f6"
        },
        children: M
      }
    )
  ] });
};
qe.PropTypes = {
  value: H.string.isRequired,
  children: H.elementType,
  id: H.string,
  onValueChange: H.func.isRequired
};
const hr = ({ items: n, itemsPerPage: _ = 12, onChange: y }) => {
  const p = Math.ceil(n.length / _), [h, c] = ie(p), m = (f) => {
    c((E) => {
      const M = E + f;
      return Math.max(1, Math.min(M, p));
    });
  }, l = (f) => {
    f.preventDefault(), f.deltaY < 0 ? m(-1) : m(1);
  }, v = (f) => {
    f.key === "ArrowUp" ? (f.preventDefault(), m(-1)) : f.key === "ArrowDown" && (f.preventDefault(), m(1));
  };
  pr(() => {
    const f = document.getElementById("itemContainer");
    return f.addEventListener("wheel", l, { passive: !1 }), window.addEventListener("keydown", v), () => {
      f.removeEventListener("wheel", l), window.removeEventListener("keydown", v);
    };
  }, []);
  const b = (h - 1) * _, u = b + _, d = n.slice(b, u);
  return /* @__PURE__ */ W.jsx("ul", { id: "itemContainer", tabIndex: "0", children: d.map((f) => /* @__PURE__ */ W.jsx(
    "li",
    {
      style: { cursor: f === null ? "default" : "pointer" },
      onClick: () => f !== null && y(f),
      children: f
    },
    `${f}-${crypto.randomUUID()}`
  )) });
};
hr.PropTypes = {
  items: H.array.isRequired,
  itemsPerPage: H.number,
  onChange: H.func.isRequired
};
const st = "_wrapper_135ri_1", ct = "_day_135ri_1", xe = {
  wrapper: st,
  day: ct,
  "day--selected": "_day--selected_135ri_13",
  "day--disable": "_day--disable_135ri_16"
}, mr = ({ days: n, date: _, tableHasChange: y, onChange: p }) => {
  const { monthTable: h, disableDays: c } = n, m = h.indexOf(1) + _.getDate() - 1, [l, v] = ie(m), b = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri", "Sat."].map(
    (d) => /* @__PURE__ */ W.jsx("th", { children: d }, `${d}`)
  ), u = () => {
    let d = [];
    for (let f = 0; f < h.length; f += 7) {
      let E = [];
      for (let M = f; M <= f + 6; M++)
        E.push(
          /* @__PURE__ */ W.jsx(
            "td",
            {
              className: `
              ${xe.day}
              ${M === l && !y ? c.find((T) => T === M) ? "" : xe["day--selected"] : ""}
              ${M === 0 || c.find((T) => T === M) ? xe["day--disable"] : ""}
            `,
              onClick: () => {
                v(M), p(h[M]);
              },
              children: h[M]
            },
            `${f}-${M}`
          )
        );
      d.push(E);
    }
    return d;
  };
  return /* @__PURE__ */ W.jsx("table", { className: xe.wrapper, children: /* @__PURE__ */ W.jsxs("tbody", { children: [
    /* @__PURE__ */ W.jsx("tr", { children: b }),
    u().map((d) => /* @__PURE__ */ W.jsx("tr", { children: d }, `${crypto.randomUUID()}`))
  ] }) });
};
mr.PropTypes = {
  days: H.objectOf(H.arrayOf(H.number)).isRequired,
  date: H.instanceOf(Date).isRequired,
  tableHasChange: H.bool.isRequired,
  onChange: H.func.isRequired
};
const ut = (n) => [
  { month: "January", days: 31 },
  { month: "February", days: ft(n) },
  { month: "March", days: 31 },
  { month: "April", days: 30 },
  { month: "May", days: 31 },
  { month: "June", days: 30 },
  { month: "July", days: 31 },
  { month: "August", days: 31 },
  { month: "September", days: 30 },
  { month: "October", days: 31 },
  { month: "November", days: 30 },
  { month: "December", days: 31 }
], ft = (n) => n % 4 === 0 && n % 100 !== 0 || n % 400 === 0 ? 29 : 28, lt = (n) => {
  if (n.getDate() === 1)
    return n.getDay();
  const _ = n.getMonth(), y = n.getFullYear();
  return new Date(y, _, 1).getDay();
}, dt = (n) => {
  const y = ut(n);
  let p = [];
  for (let h in y) {
    const c = [], m = [];
    let l = 0;
    const v = lt(new Date(n, h, 1)), b = y[h].month === "January" ? 31 : y[h - 1].days, u = b - (v === 0 ? 7 : v) + 1;
    for (let E = u; E <= b; E++)
      c.push(E), m.push(l++);
    for (let E = 1; E <= y[h].days; E++)
      c.push(E), l++;
    const d = 42 - c.length;
    for (let E = 1; E <= d; E++)
      c.push(E), m.push(l++);
    const f = {
      month: y[h].month,
      monthTable: c,
      disableDays: m
    };
    p.push(f);
  }
  return p;
}, pt = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20576%20512'%3e%3c!--!%20Font%20Awesome%20Free%206.4.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20(Icons:%20CC%20BY%204.0,%20Fonts:%20SIL%20OFL%201.1,%20Code:%20MIT%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cpath%20d='M543.8%20287.6c17%200%2032-14%2032-32.1c1-9-3-17-11-24L512%20185V64c0-17.7-14.3-32-32-32H448c-17.7%200-32%2014.3-32%2032v36.7L309.5%207c-6-5-14-7-21-7s-15%201-22%208L10%20231.5c-7%207-10%2015-10%2024c0%2018%2014%2032.1%2032%2032.1h32v69.7c-.1%20.9-.1%201.8-.1%202.8V472c0%2022.1%2017.9%2040%2040%2040h16c1.2%200%202.4-.1%203.6-.2c1.5%20.1%203%20.2%204.5%20.2H160h24c22.1%200%2040-17.9%2040-40V448%20384c0-17.7%2014.3-32%2032-32h64c17.7%200%2032%2014.3%2032%2032v64%2024c0%2022.1%2017.9%2040%2040%2040h24%2032.5c1.4%200%202.8%200%204.2-.1c1.1%20.1%202.2%20.1%203.3%20.1h16c22.1%200%2040-17.9%2040-40V455.8c.3-2.6%20.5-5.3%20.5-8.1l-.7-160.2h32z'%20fill='%23daa520'/%3e%3c/svg%3e", vt = "_calendar_vofl3_1", yt = "_header_vofl3_12", ht = "_today_vofl3_18", mt = "_icon_vofl3_25", gt = "_navbar_vofl3_28", Te = {
  calendar: vt,
  header: yt,
  today: ht,
  icon: mt,
  navbar: gt
}, gr = ({ list: n, onChange: _ }) => /* @__PURE__ */ W.jsx("ul", { children: n.map((y) => /* @__PURE__ */ W.jsx("li", { onClick: () => _(y), children: y }, `item-${y}`)) }), bt = ({ inputId: n, selectedDate: _, onDateSelect: y }) => {
  const [p, h] = ie(_.getFullYear()), [c, m] = ie(_.getMonth()), [l, v] = ie(_.getDate()), [b, u] = ie(!1), d = dt(p), f = d.map((C) => C.month), M = ((C) => {
    const o = Math.ceil(C / 10) * 10 - 1, J = [];
    for (let te = 1900; te <= o; te++)
      te % 10 === 0 && (J.push(null), te >= 1910 && J.push(null)), J.push(te);
    return J.push(null), J;
  })(2024), T = (C) => C.toString().length === 1 ? `0${C}` : C, B = (C) => {
    v(C);
    const o = `${T(c + 1)}/${T(C)}/${p}`;
    document.getElementById(n).value = o, y(new Date(p, c, C));
  }, N = (C) => {
    const o = d.findIndex(
      (J) => J.month === C
    );
    m(o), u(!0);
  }, q = (C) => {
    h(C), u(!0);
  }, U = () => {
    const C = /* @__PURE__ */ new Date(), o = `${T(C.getMonth() + 1)}/${T(
      C.getDate()
    )}/${C.getFullYear()}`;
    document.getElementById(n).value = o, y(/* @__PURE__ */ new Date());
  };
  return /* @__PURE__ */ W.jsxs("article", { className: Te.calendar, children: [
    /* @__PURE__ */ W.jsxs("header", { className: Te.header, children: [
      /* @__PURE__ */ W.jsx(
        "button",
        {
          type: "button",
          onClick: U,
          className: Te.today,
          children: /* @__PURE__ */ W.jsx("img", { src: pt, alt: "Today", className: Te.icon })
        }
      ),
      /* @__PURE__ */ W.jsxs("div", { className: Te.navbar, children: [
        /* @__PURE__ */ W.jsx(
          qe,
          {
            value: f[_.getMonth()],
            onValueChange: N,
            children: /* @__PURE__ */ W.jsx(gr, { list: f })
          }
        ),
        /* @__PURE__ */ W.jsx(
          qe,
          {
            value: _.getFullYear(),
            onValueChange: q,
            children: /* @__PURE__ */ W.jsx(hr, { items: M })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ W.jsx(
      mr,
      {
        days: d[c],
        date: _,
        onChange: B,
        tableHasChange: b
      }
    )
  ] });
};
gr.PropTypes = {
  list: H.arrayOf(H.string).isRequired,
  onChange: H.func
};
bt.PropTypes = {
  inputId: H.string.isRequired,
  selectedDate: H.instanceOf(Date).isRequired,
  onDateSelect: H.func.isRequired
};
export {
  bt as Calendar,
  qe as Select
};

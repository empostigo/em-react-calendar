import Q, { useState as A, useRef as hr, useEffect as $e, isValidElement as vr } from "react";
import "./style.css"
var ue = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function pr() {
  if (Ae)
    return U;
  Ae = 1;
  var o = Q, l = Symbol.for("react.element"), u = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, p = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(R, d, j) {
    var f, h = {}, a = null, y = null;
    j !== void 0 && (a = "" + j), d.key !== void 0 && (a = "" + d.key), d.ref !== void 0 && (y = d.ref);
    for (f in d)
      b.call(d, f) && !m.hasOwnProperty(f) && (h[f] = d[f]);
    if (R && R.defaultProps)
      for (f in d = R.defaultProps, d)
        h[f] === void 0 && (h[f] = d[f]);
    return { $$typeof: l, type: R, key: a, ref: y, props: h, _owner: p.current };
  }
  return U.Fragment = u, U.jsx = E, U.jsxs = E, U;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function mr() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Q, l = Symbol.for("react.element"), u = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), R = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), a = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), C = Symbol.iterator, T = "@@iterator";
    function ee(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = C && e[C] || e[T];
      return typeof r == "function" ? r : null;
    }
    var L = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        re("error", e, t);
      }
    }
    function re(e, r, t) {
      {
        var n = L.ReactDebugCurrentFrame, c = n.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var v = t.map(function(i) {
          return String(i);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var _ = !1, P = !1, k = !1, M = !1, Ye = !1, fe;
    fe = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === m || Ye || e === p || e === j || e === f || M || e === y || _ || P || k || typeof e == "object" && e !== null && (e.$$typeof === a || e.$$typeof === h || e.$$typeof === E || e.$$typeof === R || e.$$typeof === d || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case u:
          return "Portal";
        case m:
          return "Profiler";
        case p:
          return "StrictMode";
        case j:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return de(r) + ".Consumer";
          case E:
            var t = e;
            return de(t._context) + ".Provider";
          case d:
            return We(e, e.render, "ForwardRef");
          case h:
            var n = e.displayName || null;
            return n !== null ? n : F(e.type) || "Memo";
          case a: {
            var c = e, v = c._payload, i = c._init;
            try {
              return F(i(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, V = 0, he, ve, pe, me, ye, ge, be;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function Ve() {
      {
        if (V === 0) {
          he = console.log, ve = console.info, pe = console.warn, me = console.error, ye = console.group, ge = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
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
        V++;
      }
    }
    function Be() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, e, {
              value: he
            }),
            info: $({}, e, {
              value: ve
            }),
            warn: $({}, e, {
              value: pe
            }),
            error: $({}, e, {
              value: me
            }),
            group: $({}, e, {
              value: ye
            }),
            groupCollapsed: $({}, e, {
              value: ge
            }),
            groupEnd: $({}, e, {
              value: be
            })
          });
        }
        V < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = L.ReactCurrentDispatcher, ne;
    function z(e, r, t) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (c) {
            var n = c.stack.trim().match(/\n( *(at )?)/);
            ne = n && n[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var ae = !1, q;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      q = new Ue();
    }
    function we(e, r) {
      if (!e || ae)
        return "";
      {
        var t = q.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ae = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = te.current, te.current = null, Ve();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (I) {
              n = I;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (I) {
              n = I;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            n = I;
          }
          e();
        }
      } catch (I) {
        if (I && n && typeof I.stack == "string") {
          for (var s = I.stack.split(`
`), O = n.stack.split(`
`), w = s.length - 1, x = O.length - 1; w >= 1 && x >= 0 && s[w] !== O[x];)
            x--;
          for (; w >= 1 && x >= 0; w--, x--)
            if (s[w] !== O[x]) {
              if (w !== 1 || x !== 1)
                do
                  if (w--, x--, x < 0 || s[w] !== O[x]) {
                    var S = `
` + s[w].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, S), S;
                  }
                while (w >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        ae = !1, te.current = v, Be(), Error.prepareStackTrace = c;
      }
      var N = e ? e.displayName || e.name : "", Ie = N ? z(N) : "";
      return typeof e == "function" && q.set(e, Ie), Ie;
    }
    function Je(e, r, t) {
      return we(e, !1);
    }
    function He(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return we(e, He(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case j:
          return z("Suspense");
        case f:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Je(e.render);
          case h:
            return G(e.type, r, t);
          case a: {
            var n = e, c = n._payload, v = n._init;
            try {
              return G(v(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, Ee = {}, Re = L.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function ze(e, r, t, n, c) {
      {
        var v = Function.call.bind(K);
        for (var i in e)
          if (v(e, i)) {
            var s = void 0;
            try {
              if (typeof e[i] != "function") {
                var O = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              s = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              s = w;
            }
            s && !(s instanceof Error) && (X(c), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof s), X(null)), s instanceof Error && !(s.message in Ee) && (Ee[s.message] = !0, X(c), D("Failed %s type: %s", t, s.message), X(null));
          }
      }
    }
    var qe = Array.isArray;
    function oe(e) {
      return qe(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return xe(e), !1;
      } catch {
        return !0;
      }
    }
    function xe(e) {
      return "" + e;
    }
    function Ce(e) {
      if (Ke(e))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), xe(e);
    }
    var B = L.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, je, se;
    se = {};
    function Ze(e) {
      if (K.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (K.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && B.current && r && B.current.stateNode !== r) {
        var t = F(B.current.type);
        se[t] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(B.current.type), e.ref), se[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Te || (Te = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          je || (je = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, c, v, i) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function ar(e, r, t, n, c) {
      {
        var v, i = {}, s = null, O = null;
        t !== void 0 && (Ce(t), s = "" + t), Qe(r) && (Ce(r.key), s = "" + r.key), Ze(r) && (O = r.ref, er(r, c));
        for (v in r)
          K.call(r, v) && !Xe.hasOwnProperty(v) && (i[v] = r[v]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (v in w)
            i[v] === void 0 && (i[v] = w[v]);
        }
        if (s || O) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && rr(i, x), O && tr(i, x);
        }
        return nr(e, s, O, c, n, B.current, i);
      }
    }
    var ie = L.ReactCurrentOwner, De = L.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        De.setExtraStackFrame(t);
      } else
        De.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Oe() {
      {
        if (ie.current) {
          var e = F(ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Se = {};
    function sr(e) {
      {
        var r = Oe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Pe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = sr(r);
        if (Se[t])
          return;
        Se[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ie.current && (n = " It was passed a child from " + F(e._owner.type) + "."), Y(e), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), Y(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            le(n) && Pe(n, r);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = ee(e);
          if (typeof c == "function" && c !== e.entries)
            for (var v = c.call(e), i; !(i = v.next()).done;)
              le(i.value) && Pe(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = F(r);
          ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ce) {
          ce = !0;
          var c = F(r);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            Y(e), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), D("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function Fe(e, r, t, n, c, v) {
      {
        var i = Ne(e);
        if (!i) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = or(c);
          O ? s += O : s += Oe();
          var w;
          e === null ? w = "null" : oe(e) ? w = "array" : e !== void 0 && e.$$typeof === l ? (w = "<" + (F(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, s);
        }
        var x = ar(e, r, t, c, v);
        if (x == null)
          return x;
        if (i) {
          var S = r.children;
          if (S !== void 0)
            if (n)
              if (oe(S)) {
                for (var N = 0; N < S.length; N++)
                  ke(S[N], e);
                Object.freeze && Object.freeze(S);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(S, e);
        }
        return e === b ? cr(x) : ir(x), x;
      }
    }
    function lr(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var fr = ur, dr = lr;
    J.Fragment = b, J.jsx = fr, J.jsxs = dr;
  }()), J;
}
process.env.NODE_ENV === "production" ? ue.exports = pr() : ue.exports = mr();
var g = ue.exports;
const yr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20448%20512'%3e%3c!--!%20Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20(Icons:%20CC%20BY%204.0,%20Fonts:%20SIL%20OFL%201.1,%20Code:%20MIT%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cpath%20d='M201.4%20342.6c12.5%2012.5%2032.8%2012.5%2045.3%200l160-160c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L224%20274.7%2086.6%20137.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3l160%20160z'/%3e%3c/svg%3e", gr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20448%20512'%3e%3c!--!%20Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20(Icons:%20CC%20BY%204.0,%20Fonts:%20SIL%20OFL%201.1,%20Code:%20MIT%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cpath%20d='M201.4%20137.4c12.5-12.5%2032.8-12.5%2045.3%200l160%20160c12.5%2012.5%2012.5%2032.8%200%2045.3s-32.8%2012.5-45.3%200L224%20205.3%2086.6%20342.6c-12.5%2012.5-32.8%2012.5-45.3%200s-12.5-32.8%200-45.3l160-160z'/%3e%3c/svg%3e", br = "_wrapper_klj8k_1", _r = "_select_klj8k_9", wr = "_text_klj8k_24", Er = "_hidden_klj8k_35", W = {
  wrapper: br,
  select: _r,
  text: wr,
  hidden: Er
}, Me = ({ initValue: o, children: l, id: u, onValueChange: b }) => {
  const [p, m] = A({ open: !1 }), [E, R] = A(o), [d, j] = A(0), f = hr(), h = () => m({ open: !p.open }), a = (T) => {
    R(T), b(T), m({ open: !1 });
  }, y = (T) => {
    f.current && !f.current.contains(T.target) && m({ open: !1 });
  };
  $e(() => (document.addEventListener("mousedown", y), f.current && j(f.current.offsetHeight), R(o), () => document.removeEventListener("mousedown", y)), [o]);
  const C = Q.Children.map(l, (T) => vr(T) ? Q.cloneElement(T, { onChange: a }) : T);
  return /* @__PURE__ */ g.jsxs("div", {
    className: W.wrapper, ref: f, children: [
    /* @__PURE__ */ g.jsxs(
      "button",
      {
        onClick: h,
        type: "button",
        className: W.select,
        id: u,
        children: [
          /* @__PURE__ */ g.jsx("span", { className: W.text, children: E }),
          /* @__PURE__ */ g.jsx(
          "img",
          {
            src: yr,
            alt: "Open Dropdown",
            className: p.open ? W.hidden : ""
          }
        ),
          /* @__PURE__ */ g.jsx(
          "img",
          {
            src: gr,
            alt: "Close Dropdown",
            className: p.open ? "" : W.hidden
          }
        )
        ]
      }
    ),
      p.open && /* @__PURE__ */ g.jsx(
        "div",
        {
          className: W.style,
          style: {
            position: "absolute",
            top: `${d}px`,
            border: "1px solid #f6f6f6"
          },
          children: C
        }
      )
    ]
  });
}, Rr = ({ items: o, itemsPerPage: l = 12, onChange: u }) => {
  const b = Math.ceil(o.length / l), [p, m] = A(b), E = (a) => {
    m((y) => {
      const C = y + a;
      return Math.max(1, Math.min(C, b));
    });
  }, R = (a) => {
    a.preventDefault(), a.deltaY < 0 ? E(-1) : E(1);
  }, d = (a) => {
    a.key === "ArrowUp" ? (a.preventDefault(), E(-1)) : a.key === "ArrowDown" && (a.preventDefault(), E(1));
  };
  $e(() => {
    const a = document.getElementById("itemContainer");
    return a.addEventListener("wheel", R, { passive: !1 }), window.addEventListener("keydown", d), () => {
      a.removeEventListener("wheel", R), window.removeEventListener("keydown", d);
    };
  }, []);
  const j = (p - 1) * l, f = j + l, h = o.slice(j, f);
  return /* @__PURE__ */ g.jsx("ul", {
    id: "itemContainer", tabIndex: "0", children: h.map((a) => /* @__PURE__ */ g.jsx(
      "li",
      {
        style: { cursor: a === null ? "default" : "pointer" },
        onClick: () => a !== null && u(a),
        children: a
      },
      `${a}-${crypto.randomUUID()}`
    ))
  });
}, xr = "_wrapper_135ri_1", Cr = "_day_135ri_1", Z = {
  wrapper: xr,
  day: Cr,
  "day--selected": "_day--selected_135ri_13",
  "day--disable": "_day--disable_135ri_16"
}, Tr = ({ days: o, date: l, tableHasChange: u, onChange: b }) => {
  const p = o.monthTable, m = o.disableDays, E = p.indexOf(1) + l.getDate() - 1, [R, d] = A(E), j = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri", "Sat."].map(
    (h) => /* @__PURE__ */ g.jsx("th", { children: h }, `${h}`)
  ), f = () => {
    let h = [];
    for (let a = 0; a < p.length; a += 7) {
      let y = [];
      for (let C = a; C <= a + 6; C++)
        y.push(
          /* @__PURE__ */ g.jsx(
          "td",
          {
            className: `
              ${Z.day}
              ${C === R && !u ? m.find((T) => T === C) ? "" : Z["day--selected"] : ""}
              ${C === 0 || m.find((T) => T === C) ? Z["day--disable"] : ""}
            `,
            onClick: () => {
              d(C), b(p[C]);
            },
            children: p[C]
          },
          `${a}-${C}`
        )
        );
      h.push(y);
    }
    return h;
  };
  return /* @__PURE__ */ g.jsx("table", {
    className: Z.wrapper, children: /* @__PURE__ */ g.jsxs("tbody", {
      children: [
    /* @__PURE__ */ g.jsx("tr", { children: j }),
        f().map((h) => /* @__PURE__ */ g.jsx("tr", { children: h }, `${crypto.randomUUID()}`))
      ]
    })
  });
}, jr = (o) => [
  { month: "January", days: 31 },
  { month: "February", days: Dr(o) },
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
], Dr = (o) => o % 4 === 0 && o % 100 !== 0 || o % 400 === 0 ? 29 : 28, Or = (o) => {
  if (o.getDate() === 1)
    return o.getDay();
  const l = o.getMonth(), u = o.getFullYear();
  return new Date(u, l, 1).getDay();
}, Sr = (o) => {
  const u = jr(o);
  let b = [];
  for (let p in u) {
    const m = [], E = [];
    let R = 0;
    const d = Or(new Date(o, p, 1)), j = u[p].month === "January" ? 31 : u[p - 1].days, f = j - (d === 0 ? 7 : d) + 1;
    for (let y = f; y <= j; y++)
      m.push(y), E.push(R++);
    for (let y = 1; y <= u[p].days; y++)
      m.push(y), R++;
    const h = 42 - m.length;
    for (let y = 1; y <= h; y++)
      m.push(y), E.push(R++);
    const a = {
      month: u[p].month,
      monthTable: m,
      disableDays: E
    };
    b.push(a);
  }
  return b;
}, Yr = (o) => {
  if (!o || o === null)
    return /* @__PURE__ */ new Date();
  const l = (m) => m = parseInt(m) - 1, u = o.split("/"), b = l(u[0]), p = l(u[1]) + 1;
  return new Date(new Date(u[2], b, p));
}, Pr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20576%20512'%3e%3c!--!%20Font%20Awesome%20Free%206.4.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20(Icons:%20CC%20BY%204.0,%20Fonts:%20SIL%20OFL%201.1,%20Code:%20MIT%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cpath%20d='M543.8%20287.6c17%200%2032-14%2032-32.1c1-9-3-17-11-24L512%20185V64c0-17.7-14.3-32-32-32H448c-17.7%200-32%2014.3-32%2032v36.7L309.5%207c-6-5-14-7-21-7s-15%201-22%208L10%20231.5c-7%207-10%2015-10%2024c0%2018%2014%2032.1%2032%2032.1h32v69.7c-.1%20.9-.1%201.8-.1%202.8V472c0%2022.1%2017.9%2040%2040%2040h16c1.2%200%202.4-.1%203.6-.2c1.5%20.1%203%20.2%204.5%20.2H160h24c22.1%200%2040-17.9%2040-40V448%20384c0-17.7%2014.3-32%2032-32h64c17.7%200%2032%2014.3%2032%2032v64%2024c0%2022.1%2017.9%2040%2040%2040h24%2032.5c1.4%200%202.8%200%204.2-.1c1.1%20.1%202.2%20.1%203.3%20.1h16c22.1%200%2040-17.9%2040-40V455.8c.3-2.6%20.5-5.3%20.5-8.1l-.7-160.2h32z'%20fill='%23daa520'/%3e%3c/svg%3e", kr = "_calendar_vofl3_1", Fr = "_header_vofl3_12", Ir = "_today_vofl3_18", Ar = "_icon_vofl3_25", Lr = "_navbar_vofl3_28", H = {
  calendar: kr,
  header: Fr,
  today: Ir,
  icon: Ar,
  navbar: Lr
}, Mr = ({ list: o, onChange: l }) => /* @__PURE__ */ g.jsx("ul", { children: o.map((u) => /* @__PURE__ */ g.jsx("li", { onClick: () => l(u), children: u }, `item-${u}`)) }), Nr = ({ inputId: o, selectedDate: l, onDateSelect: u }) => {
  const [b, p] = A(l.getFullYear()), [m, E] = A(l.getMonth()), [R, d] = A(l.getDate()), [j, f] = A(!1), h = Sr(b), a = h.map((_) => _.month), C = ((_) => {
    const P = Math.ceil(_ / 10) * 10 - 1, k = [];
    for (let M = 1900; M <= P; M++)
      M % 10 === 0 && (k.push(null), M >= 1910 && k.push(null)), k.push(M);
    return k.push(null), k;
  })(2024), T = (_) => _.toString().length === 1 ? `0${_}` : _, ee = (_) => {
    d(_);
    const P = `${T(m + 1)}/${T(_)}/${b}`;
    document.getElementById(o).value = P, u(new Date(b, m, _));
  }, L = (_) => {
    const P = h.findIndex(
      (k) => k.month === _
    );
    E(P), f(!0);
  }, D = (_) => {
    p(_), f(!0);
  }, re = () => {
    const _ = /* @__PURE__ */ new Date(), P = `${T(_.getMonth() + 1)}/${T(
      _.getDate()
    )}/${_.getFullYear()}`;
    document.getElementById(o).value = P, u(/* @__PURE__ */ new Date());
  };
  return /* @__PURE__ */ g.jsxs("article", {
    className: H.calendar, children: [
    /* @__PURE__ */ g.jsxs("header", {
      className: H.header, children: [
      /* @__PURE__ */ g.jsx(
        "button",
        {
          type: "button",
          onClick: re,
          className: H.today,
          children: /* @__PURE__ */ g.jsx("img", { src: Pr, alt: "Today", className: H.icon })
        }
      ),
      /* @__PURE__ */ g.jsxs("div", {
        className: H.navbar, children: [
        /* @__PURE__ */ g.jsx(
          Me,
          {
            initValue: a[l.getMonth()],
            onValueChange: L,
            children: /* @__PURE__ */ g.jsx(Mr, { list: a })
          }
        ),
        /* @__PURE__ */ g.jsx(
          Me,
          {
            initValue: l.getFullYear(),
            onValueChange: D,
            children: /* @__PURE__ */ g.jsx(Rr, { items: C })
          }
        )
        ]
      })
      ]
    }),
    /* @__PURE__ */ g.jsx(
      Tr,
      {
        days: h[m],
        date: l,
        onChange: ee,
        tableHasChange: j
      }
    )
    ]
  });
};
export {
  Nr as Calendar,
  Yr as standardDate
};

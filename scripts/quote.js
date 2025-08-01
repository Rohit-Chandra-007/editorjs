/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@editorjs/quote@2.7.6/dist/quote.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".cdx-quote-icon svg{transform:rotate(180deg)}.cdx-quote{margin:0}.cdx-quote__text{min-height:158px;margin-bottom:10px}.cdx-quote [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-quote [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-quote [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-quote-settings{display:flex}.cdx-quote-settings .cdx-settings-button{width:50%}")), document.head.appendChild(t)
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e)
  }
})();
(function (g, d) {
  typeof exports == "object" && typeof module < "u" ? module.exports = d() : typeof define == "function" && define.amd ? define(d) : (g = typeof globalThis < "u" ? globalThis : g || self, g.Quote = d())
})(this, function () {
  "use strict";
  const g = "",
    d = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>',
    Te = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>',
    je = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>';
  var m = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

  function Ce(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
      var n = function r() {
        return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
      };
      n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {value: !0}), Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(n, r, i.get ? i : {
        enumerable: !0, get: function () {
          return e[r]
        }
      })
    }), n
  }

  var b = {}, T = {}, j = {};
  Object.defineProperty(j, "__esModule", {value: !0}), j.allInputsSelector = Le;

  function Le() {
    var e = ["text", "password", "email", "number", "search", "tel", "url"];
    return "[contenteditable=true], textarea, input:not([type]), " + e.map(function (t) {
      return 'input[type="'.concat(t, '"]')
    }).join(", ")
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.allInputsSelector = void 0;
    var t = j;
    Object.defineProperty(e, "allInputsSelector", {
      enumerable: !0, get: function () {
        return t.allInputsSelector
      }
    })
  })(T);
  var s = {}, C = {};
  Object.defineProperty(C, "__esModule", {value: !0}), C.isNativeInput = Se;

  function Se(e) {
    var t = ["INPUT", "TEXTAREA"];
    return e && e.tagName ? t.includes(e.tagName) : !1
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isNativeInput = void 0;
    var t = C;
    Object.defineProperty(e, "isNativeInput", {
      enumerable: !0, get: function () {
        return t.isNativeInput
      }
    })
  })(s);
  var ae = {}, L = {};
  Object.defineProperty(L, "__esModule", {value: !0}), L.append = Me;

  function Me(e, t) {
    Array.isArray(t) ? t.forEach(function (n) {
      e.appendChild(n)
    }) : e.appendChild(t)
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.append = void 0;
    var t = L;
    Object.defineProperty(e, "append", {
      enumerable: !0, get: function () {
        return t.append
      }
    })
  })(ae);
  var S = {}, M = {};
  Object.defineProperty(M, "__esModule", {value: !0}), M.blockElements = ke;

  function ke() {
    return ["address", "article", "aside", "blockquote", "canvas", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "ruby", "section", "table", "tbody", "thead", "tr", "tfoot", "ul", "video"]
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.blockElements = void 0;
    var t = M;
    Object.defineProperty(e, "blockElements", {
      enumerable: !0, get: function () {
        return t.blockElements
      }
    })
  })(S);
  var le = {}, k = {};
  Object.defineProperty(k, "__esModule", {value: !0}), k.calculateBaseline = we;

  function we(e) {
    var t = window.getComputedStyle(e), n = parseFloat(t.fontSize), r = parseFloat(t.lineHeight) || n * 1.2,
      i = parseFloat(t.paddingTop), a = parseFloat(t.borderTopWidth), l = parseFloat(t.marginTop), u = n * .8,
      p = (r - n) / 2, c = l + a + i + p + u;
    return c
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.calculateBaseline = void 0;
    var t = k;
    Object.defineProperty(e, "calculateBaseline", {
      enumerable: !0, get: function () {
        return t.calculateBaseline
      }
    })
  })(le);
  var ue = {}, w = {}, N = {}, I = {};
  Object.defineProperty(I, "__esModule", {value: !0}), I.isContentEditable = Ne;

  function Ne(e) {
    return e.contentEditable === "true"
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isContentEditable = void 0;
    var t = I;
    Object.defineProperty(e, "isContentEditable", {
      enumerable: !0, get: function () {
        return t.isContentEditable
      }
    })
  })(N), Object.defineProperty(w, "__esModule", {value: !0}), w.canSetCaret = $e;
  var Ie = s, Ae = N;

  function $e(e) {
    var t = !0;
    if ((0, Ie.isNativeInput)(e)) switch (e.type) {
      case"file":
      case"checkbox":
      case"radio":
      case"hidden":
      case"submit":
      case"button":
      case"image":
      case"reset":
        t = !1;
        break
    } else t = (0, Ae.isContentEditable)(e);
    return t
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.canSetCaret = void 0;
    var t = w;
    Object.defineProperty(e, "canSetCaret", {
      enumerable: !0, get: function () {
        return t.canSetCaret
      }
    })
  })(ue);
  var y = {}, A = {};

  function Be(e, t, n) {
    const r = n.value !== void 0 ? "value" : "get", i = n[r], a = `#${t}Cache`;
    if (n[r] = function (...l) {
      return this[a] === void 0 && (this[a] = i.apply(this, l)), this[a]
    }, r === "get" && n.set) {
      const l = n.set;
      n.set = function (u) {
        delete e[a], l.apply(this, u)
      }
    }
    return n
  }

  function oe() {
    const e = {win: !1, mac: !1, x11: !1, linux: !1},
      t = Object.keys(e).find(n => window.navigator.appVersion.toLowerCase().indexOf(n) !== -1);
    return t !== void 0 && (e[t] = !0), e
  }

  function $(e) {
    return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0)
  }

  function De(e) {
    return !$(e)
  }

  const He = () => typeof window < "u" && window.navigator !== null && $(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);

  function Re(e) {
    const t = oe();
    return e = e.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e
  }

  function Fe(e) {
    return e[0].toUpperCase() + e.slice(1)
  }

  function We(e) {
    const t = document.createElement("div");
    t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
    const n = window.getSelection(), r = document.createRange();
    if (r.selectNode(t), n === null) throw new Error("Cannot copy text to clipboard");
    n.removeAllRanges(), n.addRange(r), document.execCommand("copy"), document.body.removeChild(t)
  }

  function Ue(e, t, n) {
    let r;
    return (...i) => {
      const a = this, l = () => {
        r = void 0, n !== !0 && e.apply(a, i)
      }, u = n === !0 && r !== void 0;
      window.clearTimeout(r), r = window.setTimeout(l, t), u && e.apply(a, i)
    }
  }

  function o(e) {
    return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }

  function qe(e) {
    return o(e) === "boolean"
  }

  function se(e) {
    return o(e) === "function" || o(e) === "asyncfunction"
  }

  function ze(e) {
    return se(e) && /^\s*class\s+/.test(e.toString())
  }

  function Ge(e) {
    return o(e) === "number"
  }

  function _(e) {
    return o(e) === "object"
  }

  function Ke(e) {
    return Promise.resolve(e) === e
  }

  function Qe(e) {
    return o(e) === "string"
  }

  function Xe(e) {
    return o(e) === "undefined"
  }

  function B(e, ...t) {
    if (!t.length) return e;
    const n = t.shift();
    if (_(e) && _(n)) for (const r in n) _(n[r]) ? (e[r] === void 0 && Object.assign(e, {[r]: {}}), B(e[r], n[r])) : Object.assign(e, {[r]: n[r]});
    return B(e, ...t)
  }

  function Ye(e, t, n) {
    const r = `«${t}» is deprecated and will be removed in the next major release. Please use the «${n}» instead.`;
    e && console.warn(r)
  }

  function Ve(e) {
    try {
      return new URL(e).href
    } catch {
    }
    return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e
  }

  function Ze(e) {
    return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223
  }

  const Je = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
    META: 91,
    SLASH: 191
  }, xe = {LEFT: 0, WHEEL: 1, RIGHT: 2, BACKWARD: 3, FORWARD: 4};

  class et {
    constructor() {
      this.completed = Promise.resolve()
    }

    add(t) {
      return new Promise((n, r) => {
        this.completed = this.completed.then(t).then(n).catch(r)
      })
    }
  }

  function tt(e, t, n = void 0) {
    let r, i, a, l = null, u = 0;
    n || (n = {});
    const p = function () {
      u = n.leading === !1 ? 0 : Date.now(), l = null, a = e.apply(r, i), l === null && (r = i = null)
    };
    return function () {
      const c = Date.now();
      !u && n.leading === !1 && (u = c);
      const v = t - (c - u);
      return r = this, i = arguments, v <= 0 || v > t ? (l && (clearTimeout(l), l = null), u = c, a = e.apply(r, i), l === null && (r = i = null)) : !l && n.trailing !== !1 && (l = setTimeout(p, v)), a
    }
  }

  const D = Ce(Object.freeze(Object.defineProperty({
    __proto__: null,
    PromiseQueue: et,
    beautifyShortcut: Re,
    cacheable: Be,
    capitalize: Fe,
    copyTextToClipboard: We,
    debounce: Ue,
    deepMerge: B,
    deprecationAssert: Ye,
    getUserOS: oe,
    getValidUrl: Ve,
    isBoolean: qe,
    isClass: ze,
    isEmpty: De,
    isFunction: se,
    isIosDevice: He,
    isNumber: Ge,
    isObject: _,
    isPrintableKey: Ze,
    isPromise: Ke,
    isString: Qe,
    isUndefined: Xe,
    keyCodes: Je,
    mouseButtons: xe,
    notEmpty: $,
    throttle: tt,
    typeOf: o
  }, Symbol.toStringTag, {value: "Module"})));
  Object.defineProperty(A, "__esModule", {value: !0}), A.containsOnlyInlineElements = it;
  var nt = D, rt = S;

  function it(e) {
    var t;
    (0, nt.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    var n = function (r) {
      return !(0, rt.blockElements)().includes(r.tagName.toLowerCase()) && Array.from(r.children).every(n)
    };
    return Array.from(t.children).every(n)
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.containsOnlyInlineElements = void 0;
    var t = A;
    Object.defineProperty(e, "containsOnlyInlineElements", {
      enumerable: !0, get: function () {
        return t.containsOnlyInlineElements
      }
    })
  })(y);
  var ce = {}, H = {}, h = {}, R = {};
  Object.defineProperty(R, "__esModule", {value: !0}), R.make = at;

  function at(e, t, n) {
    var r;
    t === void 0 && (t = null), n === void 0 && (n = {});
    var i = document.createElement(e);
    if (Array.isArray(t)) {
      var a = t.filter(function (u) {
        return u !== void 0
      });
      (r = i.classList).add.apply(r, a)
    } else t !== null && i.classList.add(t);
    for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (i[l] = n[l]);
    return i
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.make = void 0;
    var t = R;
    Object.defineProperty(e, "make", {
      enumerable: !0, get: function () {
        return t.make
      }
    })
  })(h), Object.defineProperty(H, "__esModule", {value: !0}), H.fragmentToString = ut;
  var lt = h;

  function ut(e) {
    var t = (0, lt.make)("div");
    return t.appendChild(e), t.innerHTML
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.fragmentToString = void 0;
    var t = H;
    Object.defineProperty(e, "fragmentToString", {
      enumerable: !0, get: function () {
        return t.fragmentToString
      }
    })
  })(ce);
  var de = {}, F = {};
  Object.defineProperty(F, "__esModule", {value: !0}), F.getContentLength = st;
  var ot = s;

  function st(e) {
    var t, n;
    return (0, ot.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.getContentLength = void 0;
    var t = F;
    Object.defineProperty(e, "getContentLength", {
      enumerable: !0, get: function () {
        return t.getContentLength
      }
    })
  })(de);
  var W = {}, U = {}, fe = m && m.__spreadArray || function (e, t, n) {
    if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
    return e.concat(a || Array.prototype.slice.call(t))
  };
  Object.defineProperty(U, "__esModule", {value: !0}), U.getDeepestBlockElements = pe;
  var ct = y;

  function pe(e) {
    return (0, ct.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function (t, n) {
      return fe(fe([], t, !0), pe(n), !0)
    }, [])
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.getDeepestBlockElements = void 0;
    var t = U;
    Object.defineProperty(e, "getDeepestBlockElements", {
      enumerable: !0, get: function () {
        return t.getDeepestBlockElements
      }
    })
  })(W);
  var ve = {}, q = {}, E = {}, z = {};
  Object.defineProperty(z, "__esModule", {value: !0}), z.isLineBreakTag = dt;

  function dt(e) {
    return ["BR", "WBR"].includes(e.tagName)
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isLineBreakTag = void 0;
    var t = z;
    Object.defineProperty(e, "isLineBreakTag", {
      enumerable: !0, get: function () {
        return t.isLineBreakTag
      }
    })
  })(E);
  var O = {}, G = {};
  Object.defineProperty(G, "__esModule", {value: !0}), G.isSingleTag = ft;

  function ft(e) {
    return ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"].includes(e.tagName)
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isSingleTag = void 0;
    var t = G;
    Object.defineProperty(e, "isSingleTag", {
      enumerable: !0, get: function () {
        return t.isSingleTag
      }
    })
  })(O), Object.defineProperty(q, "__esModule", {value: !0}), q.getDeepestNode = ge;
  var pt = s, vt = E, gt = O;

  function ge(e, t) {
    t === void 0 && (t = !1);
    var n = t ? "lastChild" : "firstChild", r = t ? "previousSibling" : "nextSibling";
    if (e.nodeType === Node.ELEMENT_NODE && e[n]) {
      var i = e[n];
      if ((0, gt.isSingleTag)(i) && !(0, pt.isNativeInput)(i) && !(0, vt.isLineBreakTag)(i)) if (i[r]) i = i[r]; else if (i.parentNode !== null && i.parentNode[r]) i = i.parentNode[r]; else return i.parentNode;
      return ge(i, t)
    }
    return e
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.getDeepestNode = void 0;
    var t = q;
    Object.defineProperty(e, "getDeepestNode", {
      enumerable: !0, get: function () {
        return t.getDeepestNode
      }
    })
  })(ve);
  var me = {}, K = {}, P = m && m.__spreadArray || function (e, t, n) {
    if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
    return e.concat(a || Array.prototype.slice.call(t))
  };
  Object.defineProperty(K, "__esModule", {value: !0}), K.findAllInputs = ht;
  var mt = y, bt = W, yt = T, _t = s;

  function ht(e) {
    return Array.from(e.querySelectorAll((0, yt.allInputsSelector)())).reduce(function (t, n) {
      return (0, _t.isNativeInput)(n) || (0, mt.containsOnlyInlineElements)(n) ? P(P([], t, !0), [n], !1) : P(P([], t, !0), (0, bt.getDeepestBlockElements)(n), !0)
    }, [])
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.findAllInputs = void 0;
    var t = K;
    Object.defineProperty(e, "findAllInputs", {
      enumerable: !0, get: function () {
        return t.findAllInputs
      }
    })
  })(me);
  var be = {}, Q = {};
  Object.defineProperty(Q, "__esModule", {value: !0}), Q.isCollapsedWhitespaces = Et;

  function Et(e) {
    return !/[^\t\n\r ]/.test(e)
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isCollapsedWhitespaces = void 0;
    var t = Q;
    Object.defineProperty(e, "isCollapsedWhitespaces", {
      enumerable: !0, get: function () {
        return t.isCollapsedWhitespaces
      }
    })
  })(be);
  var X = {}, Y = {};
  Object.defineProperty(Y, "__esModule", {value: !0}), Y.isElement = Pt;
  var Ot = D;

  function Pt(e) {
    return (0, Ot.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isElement = void 0;
    var t = Y;
    Object.defineProperty(e, "isElement", {
      enumerable: !0, get: function () {
        return t.isElement
      }
    })
  })(X);
  var ye = {}, V = {}, Z = {}, J = {};
  Object.defineProperty(J, "__esModule", {value: !0}), J.isLeaf = Tt;

  function Tt(e) {
    return e === null ? !1 : e.childNodes.length === 0
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isLeaf = void 0;
    var t = J;
    Object.defineProperty(e, "isLeaf", {
      enumerable: !0, get: function () {
        return t.isLeaf
      }
    })
  })(Z);
  var x = {}, ee = {};
  Object.defineProperty(ee, "__esModule", {value: !0}), ee.isNodeEmpty = Mt;
  var jt = E, Ct = X, Lt = s, St = O;

  function Mt(e, t) {
    var n = "";
    return (0, St.isSingleTag)(e) && !(0, jt.isLineBreakTag)(e) ? !1 : ((0, Ct.isElement)(e) && (0, Lt.isNativeInput)(e) ? n = e.value : e.textContent !== null && (n = e.textContent.replace("​", "")), t !== void 0 && (n = n.replace(new RegExp(t, "g"), "")), n.trim().length === 0)
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isNodeEmpty = void 0;
    var t = ee;
    Object.defineProperty(e, "isNodeEmpty", {
      enumerable: !0, get: function () {
        return t.isNodeEmpty
      }
    })
  })(x), Object.defineProperty(V, "__esModule", {value: !0}), V.isEmpty = Nt;
  var kt = Z, wt = x;

  function Nt(e, t) {
    e.normalize();
    for (var n = [e]; n.length > 0;) {
      var r = n.shift();
      if (r) {
        if (e = r, (0, kt.isLeaf)(e) && !(0, wt.isNodeEmpty)(e, t)) return !1;
        n.push.apply(n, Array.from(e.childNodes))
      }
    }
    return !0
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isEmpty = void 0;
    var t = V;
    Object.defineProperty(e, "isEmpty", {
      enumerable: !0, get: function () {
        return t.isEmpty
      }
    })
  })(ye);
  var _e = {}, te = {};
  Object.defineProperty(te, "__esModule", {value: !0}), te.isFragment = At;
  var It = D;

  function At(e) {
    return (0, It.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isFragment = void 0;
    var t = te;
    Object.defineProperty(e, "isFragment", {
      enumerable: !0, get: function () {
        return t.isFragment
      }
    })
  })(_e);
  var he = {}, ne = {};
  Object.defineProperty(ne, "__esModule", {value: !0}), ne.isHTMLString = Bt;
  var $t = h;

  function Bt(e) {
    var t = (0, $t.make)("div");
    return t.innerHTML = e, t.childElementCount > 0
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isHTMLString = void 0;
    var t = ne;
    Object.defineProperty(e, "isHTMLString", {
      enumerable: !0, get: function () {
        return t.isHTMLString
      }
    })
  })(he);
  var Ee = {}, re = {};
  Object.defineProperty(re, "__esModule", {value: !0}), re.offset = Dt;

  function Dt(e) {
    var t = e.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft,
      r = window.pageYOffset || document.documentElement.scrollTop, i = t.top + r, a = t.left + n;
    return {top: i, left: a, bottom: i + t.height, right: a + t.width}
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.offset = void 0;
    var t = re;
    Object.defineProperty(e, "offset", {
      enumerable: !0, get: function () {
        return t.offset
      }
    })
  })(Ee);
  var Oe = {}, ie = {};
  Object.defineProperty(ie, "__esModule", {value: !0}), ie.prepend = Ht;

  function Ht(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach(function (n) {
      return e.prepend(n)
    })) : e.prepend(t)
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.prepend = void 0;
    var t = ie;
    Object.defineProperty(e, "prepend", {
      enumerable: !0, get: function () {
        return t.prepend
      }
    })
  })(Oe), function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
    var t = T;
    Object.defineProperty(e, "allInputsSelector", {
      enumerable: !0, get: function () {
        return t.allInputsSelector
      }
    });
    var n = s;
    Object.defineProperty(e, "isNativeInput", {
      enumerable: !0, get: function () {
        return n.isNativeInput
      }
    });
    var r = ae;
    Object.defineProperty(e, "append", {
      enumerable: !0, get: function () {
        return r.append
      }
    });
    var i = S;
    Object.defineProperty(e, "blockElements", {
      enumerable: !0, get: function () {
        return i.blockElements
      }
    });
    var a = le;
    Object.defineProperty(e, "calculateBaseline", {
      enumerable: !0, get: function () {
        return a.calculateBaseline
      }
    });
    var l = ue;
    Object.defineProperty(e, "canSetCaret", {
      enumerable: !0, get: function () {
        return l.canSetCaret
      }
    });
    var u = y;
    Object.defineProperty(e, "containsOnlyInlineElements", {
      enumerable: !0, get: function () {
        return u.containsOnlyInlineElements
      }
    });
    var p = ce;
    Object.defineProperty(e, "fragmentToString", {
      enumerable: !0, get: function () {
        return p.fragmentToString
      }
    });
    var c = de;
    Object.defineProperty(e, "getContentLength", {
      enumerable: !0, get: function () {
        return c.getContentLength
      }
    });
    var v = W;
    Object.defineProperty(e, "getDeepestBlockElements", {
      enumerable: !0, get: function () {
        return v.getDeepestBlockElements
      }
    });
    var Rt = ve;
    Object.defineProperty(e, "getDeepestNode", {
      enumerable: !0, get: function () {
        return Rt.getDeepestNode
      }
    });
    var Ft = me;
    Object.defineProperty(e, "findAllInputs", {
      enumerable: !0, get: function () {
        return Ft.findAllInputs
      }
    });
    var Wt = be;
    Object.defineProperty(e, "isCollapsedWhitespaces", {
      enumerable: !0, get: function () {
        return Wt.isCollapsedWhitespaces
      }
    });
    var Ut = N;
    Object.defineProperty(e, "isContentEditable", {
      enumerable: !0, get: function () {
        return Ut.isContentEditable
      }
    });
    var qt = X;
    Object.defineProperty(e, "isElement", {
      enumerable: !0, get: function () {
        return qt.isElement
      }
    });
    var zt = ye;
    Object.defineProperty(e, "isEmpty", {
      enumerable: !0, get: function () {
        return zt.isEmpty
      }
    });
    var Gt = _e;
    Object.defineProperty(e, "isFragment", {
      enumerable: !0, get: function () {
        return Gt.isFragment
      }
    });
    var Kt = he;
    Object.defineProperty(e, "isHTMLString", {
      enumerable: !0, get: function () {
        return Kt.isHTMLString
      }
    });
    var Qt = Z;
    Object.defineProperty(e, "isLeaf", {
      enumerable: !0, get: function () {
        return Qt.isLeaf
      }
    });
    var Xt = x;
    Object.defineProperty(e, "isNodeEmpty", {
      enumerable: !0, get: function () {
        return Xt.isNodeEmpty
      }
    });
    var Yt = E;
    Object.defineProperty(e, "isLineBreakTag", {
      enumerable: !0, get: function () {
        return Yt.isLineBreakTag
      }
    });
    var Vt = O;
    Object.defineProperty(e, "isSingleTag", {
      enumerable: !0, get: function () {
        return Vt.isSingleTag
      }
    });
    var Zt = h;
    Object.defineProperty(e, "make", {
      enumerable: !0, get: function () {
        return Zt.make
      }
    });
    var Jt = Ee;
    Object.defineProperty(e, "offset", {
      enumerable: !0, get: function () {
        return Jt.offset
      }
    });
    var xt = Oe;
    Object.defineProperty(e, "prepend", {
      enumerable: !0, get: function () {
        return xt.prepend
      }
    })
  }(b);
  var Pe = (e => (e.Left = "left", e.Center = "center", e))(Pe || {});

  class f {
    constructor({data: t, config: n, api: r, readOnly: i, block: a}) {
      const {DEFAULT_ALIGNMENT: l} = f;
      this.api = r, this.readOnly = i, this.quotePlaceholder = r.i18n.t((n == null ? void 0 : n.quotePlaceholder) ?? f.DEFAULT_QUOTE_PLACEHOLDER), this.captionPlaceholder = r.i18n.t((n == null ? void 0 : n.captionPlaceholder) ?? f.DEFAULT_CAPTION_PLACEHOLDER), this.data = {
        text: t.text || "",
        caption: t.caption || "",
        alignment: Object.values(Pe).includes(t.alignment) ? t.alignment : (n == null ? void 0 : n.defaultAlignment) ?? l
      }, this.css = {
        baseClass: this.api.styles.block,
        wrapper: "cdx-quote",
        text: "cdx-quote__text",
        input: this.api.styles.input,
        caption: "cdx-quote__caption"
      }, this.block = a
    }

    static get isReadOnlySupported() {
      return !0
    }

    static get toolbox() {
      return {icon: je, title: "Quote"}
    }

    static get contentless() {
      return !0
    }

    static get enableLineBreaks() {
      return !0
    }

    static get DEFAULT_QUOTE_PLACEHOLDER() {
      return "Enter a quote"
    }

    static get DEFAULT_CAPTION_PLACEHOLDER() {
      return "Enter a caption"
    }

    static get DEFAULT_ALIGNMENT() {
      return "left"
    }

    static get conversionConfig() {
      return {
        import: "text", export: function (t) {
          return t.caption ? `${t.text} — ${t.caption}` : t.text
        }
      }
    }

    get CSS() {
      return {
        baseClass: this.api.styles.block,
        wrapper: "cdx-quote",
        text: "cdx-quote__text",
        input: this.api.styles.input,
        caption: "cdx-quote__caption"
      }
    }

    get settings() {
      return [{name: "left", icon: Te}, {name: "center", icon: d}]
    }

    render() {
      const t = b.make("blockquote", [this.css.baseClass, this.css.wrapper]),
        n = b.make("div", [this.css.input, this.css.text], {
          contentEditable: !this.readOnly,
          innerHTML: this.data.text
        }), r = b.make("div", [this.css.input, this.css.caption], {
          contentEditable: !this.readOnly,
          innerHTML: this.data.caption
        });
      return n.dataset.placeholder = this.quotePlaceholder, r.dataset.placeholder = this.captionPlaceholder, t.appendChild(n), t.appendChild(r), t
    }

    save(t) {
      const n = t.querySelector(`.${this.css.text}`), r = t.querySelector(`.${this.css.caption}`);
      return Object.assign(this.data, {
        text: (n == null ? void 0 : n.innerHTML) ?? "",
        caption: (r == null ? void 0 : r.innerHTML) ?? ""
      })
    }

    static get sanitize() {
      return {text: {br: !0}, caption: {br: !0}, alignment: {}}
    }

    renderSettings() {
      const t = n => n && n[0].toUpperCase() + n.slice(1);
      return this.settings.map(n => ({
        icon: n.icon,
        label: this.api.i18n.t(`Align ${t(n.name)}`),
        onActivate: () => this._toggleTune(n.name),
        isActive: this.data.alignment === n.name,
        closeOnActivate: !0
      }))
    }

    _toggleTune(t) {
      this.data.alignment = t, this.block.dispatchChange()
    }
  }

  return f
});
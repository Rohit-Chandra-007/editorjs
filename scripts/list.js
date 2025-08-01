/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@editorjs/list@2.0.8/dist/editorjs-list.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode('.cdx-list{margin:0;padding:0;outline:none;display:grid;counter-reset:item;gap:var(--spacing-s);padding:var(--spacing-xs);--spacing-s: 8px;--spacing-xs: 6px;--list-counter-type: numeric;--radius-border: 5px;--checkbox-background: #fff;--color-border: #C9C9C9;--color-bg-checked: #369FFF;--line-height: 1.45em;--color-bg-checked-hover: #0059AB;--color-tick: #fff;--size-checkbox: 1.2em}.cdx-list__item{line-height:var(--line-height);display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;grid-template-areas:"checkbox content" ". child"}.cdx-list__item-children{display:grid;grid-area:child;gap:var(--spacing-s);padding-top:var(--spacing-s)}.cdx-list__item [contenteditable]{outline:none}.cdx-list__item-content{word-break:break-word;white-space:pre-wrap;grid-area:content;padding-left:var(--spacing-s)}.cdx-list__item:before{counter-increment:item;white-space:nowrap}.cdx-list-ordered .cdx-list__item:before{content:counters(item,".",var(--list-counter-type)) "."}.cdx-list-ordered{counter-reset:item}.cdx-list-unordered .cdx-list__item:before{content:"•"}.cdx-list-checklist .cdx-list__item:before{content:""}.cdx-list__settings .cdx-settings-button{width:50%}.cdx-list__checkbox{padding-top:calc((var(--line-height) - var(--size-checkbox)) / 2);grid-area:checkbox;width:var(--size-checkbox);height:var(--size-checkbox);display:flex;cursor:pointer}.cdx-list__checkbox svg{opacity:0;height:var(--size-checkbox);width:var(--size-checkbox);left:-1px;top:-1px;position:absolute}@media (hover: hover){.cdx-list__checkbox:not(.cdx-list__checkbox--no-hover):hover .cdx-list__checkbox-check svg{opacity:1}}.cdx-list__checkbox--checked{line-height:var(--line-height)}@media (hover: hover){.cdx-list__checkbox--checked:not(.cdx-list__checkbox--checked--no-hover):hover .cdx-checklist__checkbox-check{background:var(--color-bg-checked-hover);border-color:var(--color-bg-checked-hover)}}.cdx-list__checkbox--checked .cdx-list__checkbox-check{background:var(--color-bg-checked);border-color:var(--color-bg-checked)}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg{opacity:1}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg path{stroke:var(--color-tick)}.cdx-list__checkbox--checked .cdx-list__checkbox-check:before{opacity:0;visibility:visible;transform:scale(2.5)}.cdx-list__checkbox-check{cursor:pointer;display:inline-block;position:relative;margin:0 auto;width:var(--size-checkbox);height:var(--size-checkbox);box-sizing:border-box;border-radius:var(--radius-border);border:1px solid var(--color-border);background:var(--checkbox-background)}.cdx-list__checkbox-check:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:100%;background-color:var(--color-bg-checked);visibility:hidden;pointer-events:none;transform:scale(1);transition:transform .4s ease-out,opacity .4s}.cdx-list-start-with-field{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-list-start-with-field--invalid{background:#FFECED;border:1px solid #E13F3F}.cdx-list-start-with-field--invalid .cdx-list-start-with-field__input{color:#e13f3f}.cdx-list-start-with-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - var(--toolbox-buttons-size) - var(--icon-margin-right))}.cdx-list-start-with-field__input::placeholder{color:var(--grayText);font-weight:500}')), document.head.appendChild(e)
    }
  } catch (c) {
    console.error("vite-plugin-css-injected-by-js", c)
  }
})();
(function (P, _) {
  typeof exports == "object" && typeof module < "u" ? module.exports = _() : typeof define == "function" && define.amd ? define(_) : (P = typeof globalThis < "u" ? globalThis : P || self, P.EditorjsList = _())
})(this, function () {
  "use strict";
  const P = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 12L10.4884 15.8372C10.5677 15.9245 10.705 15.9245 10.7844 15.8372L17 9"/></svg>',
    _ = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>',
    Be = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>',
    We = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>',
    ct = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.2L10 7.4135C10 7.32872 9.90111 7.28241 9.83598 7.33668L7 9.7" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>',
    dt = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 14.2L10 9.5" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 7.01L10 7" stroke="black" stroke-width="1.8" stroke-linecap="round"/></svg>',
    ft = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 14.2L10 7.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>',
    pt = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0087 14.2H16" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M7 14.2L7.78865 12M13 14.2L12.1377 12M7.78865 12C7.78865 12 9.68362 7 10 7C10.3065 7 12.1377 12 12.1377 12M7.78865 12L12.1377 12" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>',
    ht = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2087 14.2H14.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M11.5 14.5C11.5 14.5 11 13.281 11 12.5M7 9.5C7 9.5 7.5 8.5 9 8.5C10.5 8.5 11 9.5 11 10.5L11 11.5M11 11.5L11 12.5M11 11.5C11 11.5 7 11 7 13C7 15.3031 11 15 11 12.5" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>',
    mt = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 14.2L8 7.4135C8 7.32872 7.90111 7.28241 7.83598 7.33668L5 9.7" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M14 13L16.4167 10.7778M16.4167 10.7778L14 8.5M16.4167 10.7778H11.6562" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var M = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

  function gt(e) {
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

  var c = {}, X = {}, G = {};
  Object.defineProperty(G, "__esModule", {value: !0}), G.allInputsSelector = vt;

  function vt() {
    var e = ["text", "password", "email", "number", "search", "tel", "url"];
    return "[contenteditable=true], textarea, input:not([type]), " + e.map(function (t) {
      return 'input[type="'.concat(t, '"]')
    }).join(", ")
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.allInputsSelector = void 0;
    var t = G;
    Object.defineProperty(e, "allInputsSelector", {
      enumerable: !0, get: function () {
        return t.allInputsSelector
      }
    })
  })(X);
  var O = {}, V = {};
  Object.defineProperty(V, "__esModule", {value: !0}), V.isNativeInput = bt;

  function bt(e) {
    var t = ["INPUT", "TEXTAREA"];
    return e && e.tagName ? t.includes(e.tagName) : !1
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isNativeInput = void 0;
    var t = V;
    Object.defineProperty(e, "isNativeInput", {
      enumerable: !0, get: function () {
        return t.isNativeInput
      }
    })
  })(O);
  var De = {}, Y = {};
  Object.defineProperty(Y, "__esModule", {value: !0}), Y.append = yt;

  function yt(e, t) {
    Array.isArray(t) ? t.forEach(function (n) {
      e.appendChild(n)
    }) : e.appendChild(t)
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.append = void 0;
    var t = Y;
    Object.defineProperty(e, "append", {
      enumerable: !0, get: function () {
        return t.append
      }
    })
  })(De);
  var J = {}, Q = {};
  Object.defineProperty(Q, "__esModule", {value: !0}), Q.blockElements = Ct;

  function Ct() {
    return ["address", "article", "aside", "blockquote", "canvas", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "ruby", "section", "table", "tbody", "thead", "tr", "tfoot", "ul", "video"]
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.blockElements = void 0;
    var t = Q;
    Object.defineProperty(e, "blockElements", {
      enumerable: !0, get: function () {
        return t.blockElements
      }
    })
  })(J);
  var He = {}, Z = {};
  Object.defineProperty(Z, "__esModule", {value: !0}), Z.calculateBaseline = St;

  function St(e) {
    var t = window.getComputedStyle(e), n = parseFloat(t.fontSize), r = parseFloat(t.lineHeight) || n * 1.2,
      i = parseFloat(t.paddingTop), a = parseFloat(t.borderTopWidth), l = parseFloat(t.marginTop), s = n * .8,
      o = (r - n) / 2, d = l + a + i + o + s;
    return d
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.calculateBaseline = void 0;
    var t = Z;
    Object.defineProperty(e, "calculateBaseline", {
      enumerable: !0, get: function () {
        return t.calculateBaseline
      }
    })
  })(He);
  var Fe = {}, x = {}, ee = {}, te = {};
  Object.defineProperty(te, "__esModule", {value: !0}), te.isContentEditable = Ot;

  function Ot(e) {
    return e.contentEditable === "true"
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isContentEditable = void 0;
    var t = te;
    Object.defineProperty(e, "isContentEditable", {
      enumerable: !0, get: function () {
        return t.isContentEditable
      }
    })
  })(ee), Object.defineProperty(x, "__esModule", {value: !0}), x.canSetCaret = Et;
  var kt = O, _t = ee;

  function Et(e) {
    var t = !0;
    if ((0, kt.isNativeInput)(e)) switch (e.type) {
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
    } else t = (0, _t.isContentEditable)(e);
    return t
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.canSetCaret = void 0;
    var t = x;
    Object.defineProperty(e, "canSetCaret", {
      enumerable: !0, get: function () {
        return t.canSetCaret
      }
    })
  })(Fe);
  var N = {}, ne = {};

  function It(e, t, n) {
    const r = n.value !== void 0 ? "value" : "get", i = n[r], a = `#${t}Cache`;
    if (n[r] = function (...l) {
      return this[a] === void 0 && (this[a] = i.apply(this, l)), this[a]
    }, r === "get" && n.set) {
      const l = n.set;
      n.set = function (s) {
        delete e[a], l.apply(this, s)
      }
    }
    return n
  }

  function Re() {
    const e = {win: !1, mac: !1, x11: !1, linux: !1},
      t = Object.keys(e).find(n => window.navigator.appVersion.toLowerCase().indexOf(n) !== -1);
    return t !== void 0 && (e[t] = !0), e
  }

  function re(e) {
    return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0)
  }

  function wt(e) {
    return !re(e)
  }

  const Pt = () => typeof window < "u" && window.navigator !== null && re(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);

  function jt(e) {
    const t = Re();
    return e = e.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e
  }

  function Tt(e) {
    return e[0].toUpperCase() + e.slice(1)
  }

  function Lt(e) {
    const t = document.createElement("div");
    t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
    const n = window.getSelection(), r = document.createRange();
    if (r.selectNode(t), n === null) throw new Error("Cannot copy text to clipboard");
    n.removeAllRanges(), n.addRange(r), document.execCommand("copy"), document.body.removeChild(t)
  }

  function Mt(e, t, n) {
    let r;
    return (...i) => {
      const a = this, l = () => {
        r = void 0, n !== !0 && e.apply(a, i)
      }, s = n === !0 && r !== void 0;
      window.clearTimeout(r), r = window.setTimeout(l, t), s && e.apply(a, i)
    }
  }

  function C(e) {
    return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }

  function Nt(e) {
    return C(e) === "boolean"
  }

  function qe(e) {
    return C(e) === "function" || C(e) === "asyncfunction"
  }

  function At(e) {
    return qe(e) && /^\s*class\s+/.test(e.toString())
  }

  function $t(e) {
    return C(e) === "number"
  }

  function A(e) {
    return C(e) === "object"
  }

  function Bt(e) {
    return Promise.resolve(e) === e
  }

  function Wt(e) {
    return C(e) === "string"
  }

  function Dt(e) {
    return C(e) === "undefined"
  }

  function ie(e, ...t) {
    if (!t.length) return e;
    const n = t.shift();
    if (A(e) && A(n)) for (const r in n) A(n[r]) ? (e[r] === void 0 && Object.assign(e, {[r]: {}}), ie(e[r], n[r])) : Object.assign(e, {[r]: n[r]});
    return ie(e, ...t)
  }

  function Ht(e, t, n) {
    const r = `«${t}» is deprecated and will be removed in the next major release. Please use the «${n}» instead.`;
    e && console.warn(r)
  }

  function Ft(e) {
    try {
      return new URL(e).href
    } catch {
    }
    return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e
  }

  function Rt(e) {
    return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223
  }

  const qt = {
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
  }, Ut = {LEFT: 0, WHEEL: 1, RIGHT: 2, BACKWARD: 3, FORWARD: 4};

  class Kt {
    constructor() {
      this.completed = Promise.resolve()
    }

    add(t) {
      return new Promise((n, r) => {
        this.completed = this.completed.then(t).then(n).catch(r)
      })
    }
  }

  function zt(e, t, n = void 0) {
    let r, i, a, l = null, s = 0;
    n || (n = {});
    const o = function () {
      s = n.leading === !1 ? 0 : Date.now(), l = null, a = e.apply(r, i), l === null && (r = i = null)
    };
    return function () {
      const d = Date.now();
      !s && n.leading === !1 && (s = d);
      const u = t - (d - s);
      return r = this, i = arguments, u <= 0 || u > t ? (l && (clearTimeout(l), l = null), s = d, a = e.apply(r, i), l === null && (r = i = null)) : !l && n.trailing !== !1 && (l = setTimeout(o, u)), a
    }
  }

  const ae = gt(Object.freeze(Object.defineProperty({
    __proto__: null,
    PromiseQueue: Kt,
    beautifyShortcut: jt,
    cacheable: It,
    capitalize: Tt,
    copyTextToClipboard: Lt,
    debounce: Mt,
    deepMerge: ie,
    deprecationAssert: Ht,
    getUserOS: Re,
    getValidUrl: Ft,
    isBoolean: Nt,
    isClass: At,
    isEmpty: wt,
    isFunction: qe,
    isIosDevice: Pt,
    isNumber: $t,
    isObject: A,
    isPrintableKey: Rt,
    isPromise: Bt,
    isString: Wt,
    isUndefined: Dt,
    keyCodes: qt,
    mouseButtons: Ut,
    notEmpty: re,
    throttle: zt,
    typeOf: C
  }, Symbol.toStringTag, {value: "Module"})));
  Object.defineProperty(ne, "__esModule", {value: !0}), ne.containsOnlyInlineElements = Vt;
  var Xt = ae, Gt = J;

  function Vt(e) {
    var t;
    (0, Xt.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    var n = function (r) {
      return !(0, Gt.blockElements)().includes(r.tagName.toLowerCase()) && Array.from(r.children).every(n)
    };
    return Array.from(t.children).every(n)
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.containsOnlyInlineElements = void 0;
    var t = ne;
    Object.defineProperty(e, "containsOnlyInlineElements", {
      enumerable: !0, get: function () {
        return t.containsOnlyInlineElements
      }
    })
  })(N);
  var Ue = {}, le = {}, $ = {}, se = {};
  Object.defineProperty(se, "__esModule", {value: !0}), se.make = Yt;

  function Yt(e, t, n) {
    var r;
    t === void 0 && (t = null), n === void 0 && (n = {});
    var i = document.createElement(e);
    if (Array.isArray(t)) {
      var a = t.filter(function (s) {
        return s !== void 0
      });
      (r = i.classList).add.apply(r, a)
    } else t !== null && i.classList.add(t);
    for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (i[l] = n[l]);
    return i
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.make = void 0;
    var t = se;
    Object.defineProperty(e, "make", {
      enumerable: !0, get: function () {
        return t.make
      }
    })
  })($), Object.defineProperty(le, "__esModule", {value: !0}), le.fragmentToString = Qt;
  var Jt = $;

  function Qt(e) {
    var t = (0, Jt.make)("div");
    return t.appendChild(e), t.innerHTML
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.fragmentToString = void 0;
    var t = le;
    Object.defineProperty(e, "fragmentToString", {
      enumerable: !0, get: function () {
        return t.fragmentToString
      }
    })
  })(Ue);
  var Ke = {}, oe = {};
  Object.defineProperty(oe, "__esModule", {value: !0}), oe.getContentLength = xt;
  var Zt = O;

  function xt(e) {
    var t, n;
    return (0, Zt.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.getContentLength = void 0;
    var t = oe;
    Object.defineProperty(e, "getContentLength", {
      enumerable: !0, get: function () {
        return t.getContentLength
      }
    })
  })(Ke);
  var ue = {}, ce = {}, ze = M && M.__spreadArray || function (e, t, n) {
    if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
    return e.concat(a || Array.prototype.slice.call(t))
  };
  Object.defineProperty(ce, "__esModule", {value: !0}), ce.getDeepestBlockElements = Xe;
  var en = N;

  function Xe(e) {
    return (0, en.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function (t, n) {
      return ze(ze([], t, !0), Xe(n), !0)
    }, [])
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.getDeepestBlockElements = void 0;
    var t = ce;
    Object.defineProperty(e, "getDeepestBlockElements", {
      enumerable: !0, get: function () {
        return t.getDeepestBlockElements
      }
    })
  })(ue);
  var Ge = {}, de = {}, B = {}, fe = {};
  Object.defineProperty(fe, "__esModule", {value: !0}), fe.isLineBreakTag = tn;

  function tn(e) {
    return ["BR", "WBR"].includes(e.tagName)
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isLineBreakTag = void 0;
    var t = fe;
    Object.defineProperty(e, "isLineBreakTag", {
      enumerable: !0, get: function () {
        return t.isLineBreakTag
      }
    })
  })(B);
  var W = {}, pe = {};
  Object.defineProperty(pe, "__esModule", {value: !0}), pe.isSingleTag = nn;

  function nn(e) {
    return ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"].includes(e.tagName)
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isSingleTag = void 0;
    var t = pe;
    Object.defineProperty(e, "isSingleTag", {
      enumerable: !0, get: function () {
        return t.isSingleTag
      }
    })
  })(W), Object.defineProperty(de, "__esModule", {value: !0}), de.getDeepestNode = Ve;
  var rn = O, an = B, ln = W;

  function Ve(e, t) {
    t === void 0 && (t = !1);
    var n = t ? "lastChild" : "firstChild", r = t ? "previousSibling" : "nextSibling";
    if (e.nodeType === Node.ELEMENT_NODE && e[n]) {
      var i = e[n];
      if ((0, ln.isSingleTag)(i) && !(0, rn.isNativeInput)(i) && !(0, an.isLineBreakTag)(i)) if (i[r]) i = i[r]; else if (i.parentNode !== null && i.parentNode[r]) i = i.parentNode[r]; else return i.parentNode;
      return Ve(i, t)
    }
    return e
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.getDeepestNode = void 0;
    var t = de;
    Object.defineProperty(e, "getDeepestNode", {
      enumerable: !0, get: function () {
        return t.getDeepestNode
      }
    })
  })(Ge);
  var Ye = {}, he = {}, D = M && M.__spreadArray || function (e, t, n) {
    if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
    return e.concat(a || Array.prototype.slice.call(t))
  };
  Object.defineProperty(he, "__esModule", {value: !0}), he.findAllInputs = dn;
  var sn = N, on = ue, un = X, cn = O;

  function dn(e) {
    return Array.from(e.querySelectorAll((0, un.allInputsSelector)())).reduce(function (t, n) {
      return (0, cn.isNativeInput)(n) || (0, sn.containsOnlyInlineElements)(n) ? D(D([], t, !0), [n], !1) : D(D([], t, !0), (0, on.getDeepestBlockElements)(n), !0)
    }, [])
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.findAllInputs = void 0;
    var t = he;
    Object.defineProperty(e, "findAllInputs", {
      enumerable: !0, get: function () {
        return t.findAllInputs
      }
    })
  })(Ye);
  var Je = {}, me = {};
  Object.defineProperty(me, "__esModule", {value: !0}), me.isCollapsedWhitespaces = fn;

  function fn(e) {
    return !/[^\t\n\r ]/.test(e)
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isCollapsedWhitespaces = void 0;
    var t = me;
    Object.defineProperty(e, "isCollapsedWhitespaces", {
      enumerable: !0, get: function () {
        return t.isCollapsedWhitespaces
      }
    })
  })(Je);
  var ge = {}, ve = {};
  Object.defineProperty(ve, "__esModule", {value: !0}), ve.isElement = hn;
  var pn = ae;

  function hn(e) {
    return (0, pn.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isElement = void 0;
    var t = ve;
    Object.defineProperty(e, "isElement", {
      enumerable: !0, get: function () {
        return t.isElement
      }
    })
  })(ge);
  var Qe = {}, be = {}, ye = {}, Ce = {};
  Object.defineProperty(Ce, "__esModule", {value: !0}), Ce.isLeaf = mn;

  function mn(e) {
    return e === null ? !1 : e.childNodes.length === 0
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isLeaf = void 0;
    var t = Ce;
    Object.defineProperty(e, "isLeaf", {
      enumerable: !0, get: function () {
        return t.isLeaf
      }
    })
  })(ye);
  var Se = {}, Oe = {};
  Object.defineProperty(Oe, "__esModule", {value: !0}), Oe.isNodeEmpty = Cn;
  var gn = B, vn = ge, bn = O, yn = W;

  function Cn(e, t) {
    var n = "";
    return (0, yn.isSingleTag)(e) && !(0, gn.isLineBreakTag)(e) ? !1 : ((0, vn.isElement)(e) && (0, bn.isNativeInput)(e) ? n = e.value : e.textContent !== null && (n = e.textContent.replace("​", "")), t !== void 0 && (n = n.replace(new RegExp(t, "g"), "")), n.trim().length === 0)
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isNodeEmpty = void 0;
    var t = Oe;
    Object.defineProperty(e, "isNodeEmpty", {
      enumerable: !0, get: function () {
        return t.isNodeEmpty
      }
    })
  })(Se), Object.defineProperty(be, "__esModule", {value: !0}), be.isEmpty = kn;
  var Sn = ye, On = Se;

  function kn(e, t) {
    e.normalize();
    for (var n = [e]; n.length > 0;) {
      var r = n.shift();
      if (r) {
        if (e = r, (0, Sn.isLeaf)(e) && !(0, On.isNodeEmpty)(e, t)) return !1;
        n.push.apply(n, Array.from(e.childNodes))
      }
    }
    return !0
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isEmpty = void 0;
    var t = be;
    Object.defineProperty(e, "isEmpty", {
      enumerable: !0, get: function () {
        return t.isEmpty
      }
    })
  })(Qe);
  var Ze = {}, ke = {};
  Object.defineProperty(ke, "__esModule", {value: !0}), ke.isFragment = En;
  var _n = ae;

  function En(e) {
    return (0, _n.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isFragment = void 0;
    var t = ke;
    Object.defineProperty(e, "isFragment", {
      enumerable: !0, get: function () {
        return t.isFragment
      }
    })
  })(Ze);
  var xe = {}, _e = {};
  Object.defineProperty(_e, "__esModule", {value: !0}), _e.isHTMLString = wn;
  var In = $;

  function wn(e) {
    var t = (0, In.make)("div");
    return t.innerHTML = e, t.childElementCount > 0
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isHTMLString = void 0;
    var t = _e;
    Object.defineProperty(e, "isHTMLString", {
      enumerable: !0, get: function () {
        return t.isHTMLString
      }
    })
  })(xe);
  var et = {}, Ee = {};
  Object.defineProperty(Ee, "__esModule", {value: !0}), Ee.offset = Pn;

  function Pn(e) {
    var t = e.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft,
      r = window.pageYOffset || document.documentElement.scrollTop, i = t.top + r, a = t.left + n;
    return {top: i, left: a, bottom: i + t.height, right: a + t.width}
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.offset = void 0;
    var t = Ee;
    Object.defineProperty(e, "offset", {
      enumerable: !0, get: function () {
        return t.offset
      }
    })
  })(et);
  var tt = {}, Ie = {};
  Object.defineProperty(Ie, "__esModule", {value: !0}), Ie.prepend = jn;

  function jn(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach(function (n) {
      return e.prepend(n)
    })) : e.prepend(t)
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.prepend = void 0;
    var t = Ie;
    Object.defineProperty(e, "prepend", {
      enumerable: !0, get: function () {
        return t.prepend
      }
    })
  })(tt), function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
    var t = X;
    Object.defineProperty(e, "allInputsSelector", {
      enumerable: !0, get: function () {
        return t.allInputsSelector
      }
    });
    var n = O;
    Object.defineProperty(e, "isNativeInput", {
      enumerable: !0, get: function () {
        return n.isNativeInput
      }
    });
    var r = De;
    Object.defineProperty(e, "append", {
      enumerable: !0, get: function () {
        return r.append
      }
    });
    var i = J;
    Object.defineProperty(e, "blockElements", {
      enumerable: !0, get: function () {
        return i.blockElements
      }
    });
    var a = He;
    Object.defineProperty(e, "calculateBaseline", {
      enumerable: !0, get: function () {
        return a.calculateBaseline
      }
    });
    var l = Fe;
    Object.defineProperty(e, "canSetCaret", {
      enumerable: !0, get: function () {
        return l.canSetCaret
      }
    });
    var s = N;
    Object.defineProperty(e, "containsOnlyInlineElements", {
      enumerable: !0, get: function () {
        return s.containsOnlyInlineElements
      }
    });
    var o = Ue;
    Object.defineProperty(e, "fragmentToString", {
      enumerable: !0, get: function () {
        return o.fragmentToString
      }
    });
    var d = Ke;
    Object.defineProperty(e, "getContentLength", {
      enumerable: !0, get: function () {
        return d.getContentLength
      }
    });
    var u = ue;
    Object.defineProperty(e, "getDeepestBlockElements", {
      enumerable: !0, get: function () {
        return u.getDeepestBlockElements
      }
    });
    var h = Ge;
    Object.defineProperty(e, "getDeepestNode", {
      enumerable: !0, get: function () {
        return h.getDeepestNode
      }
    });
    var g = Ye;
    Object.defineProperty(e, "findAllInputs", {
      enumerable: !0, get: function () {
        return g.findAllInputs
      }
    });
    var L = Je;
    Object.defineProperty(e, "isCollapsedWhitespaces", {
      enumerable: !0, get: function () {
        return L.isCollapsedWhitespaces
      }
    });
    var w = ee;
    Object.defineProperty(e, "isContentEditable", {
      enumerable: !0, get: function () {
        return w.isContentEditable
      }
    });
    var nr = ge;
    Object.defineProperty(e, "isElement", {
      enumerable: !0, get: function () {
        return nr.isElement
      }
    });
    var rr = Qe;
    Object.defineProperty(e, "isEmpty", {
      enumerable: !0, get: function () {
        return rr.isEmpty
      }
    });
    var ir = Ze;
    Object.defineProperty(e, "isFragment", {
      enumerable: !0, get: function () {
        return ir.isFragment
      }
    });
    var ar = xe;
    Object.defineProperty(e, "isHTMLString", {
      enumerable: !0, get: function () {
        return ar.isHTMLString
      }
    });
    var lr = ye;
    Object.defineProperty(e, "isLeaf", {
      enumerable: !0, get: function () {
        return lr.isLeaf
      }
    });
    var sr = Se;
    Object.defineProperty(e, "isNodeEmpty", {
      enumerable: !0, get: function () {
        return sr.isNodeEmpty
      }
    });
    var or = B;
    Object.defineProperty(e, "isLineBreakTag", {
      enumerable: !0, get: function () {
        return or.isLineBreakTag
      }
    });
    var ur = W;
    Object.defineProperty(e, "isSingleTag", {
      enumerable: !0, get: function () {
        return ur.isSingleTag
      }
    });
    var cr = $;
    Object.defineProperty(e, "make", {
      enumerable: !0, get: function () {
        return cr.make
      }
    });
    var dr = et;
    Object.defineProperty(e, "offset", {
      enumerable: !0, get: function () {
        return dr.offset
      }
    });
    var fr = tt;
    Object.defineProperty(e, "prepend", {
      enumerable: !0, get: function () {
        return fr.prepend
      }
    })
  }(c);
  const m = "cdx-list",
    p = {wrapper: m, item: `${m}__item`, itemContent: `${m}__item-content`, itemChildren: `${m}__item-children`};

  class v {
    static get CSS() {
      return {...p, orderedList: `${m}-ordered`}
    }

    constructor(t, n) {
      this.config = n, this.readOnly = t
    }

    renderWrapper(t) {
      let n;
      return t === !0 ? n = c.make("ol", [v.CSS.wrapper, v.CSS.orderedList]) : n = c.make("ol", [v.CSS.orderedList, v.CSS.itemChildren]), n
    }

    renderItem(t, n) {
      const r = c.make("li", v.CSS.item),
        i = c.make("div", v.CSS.itemContent, {innerHTML: t, contentEditable: (!this.readOnly).toString()});
      return r.appendChild(i), r
    }

    getItemContent(t) {
      const n = t.querySelector(`.${v.CSS.itemContent}`);
      return !n || c.isEmpty(n) ? "" : n.innerHTML
    }

    getItemMeta() {
      return {}
    }

    composeDefaultMeta() {
      return {}
    }
  }

  class b {
    static get CSS() {
      return {...p, unorderedList: `${m}-unordered`}
    }

    constructor(t, n) {
      this.config = n, this.readOnly = t
    }

    renderWrapper(t) {
      let n;
      return t === !0 ? n = c.make("ul", [b.CSS.wrapper, b.CSS.unorderedList]) : n = c.make("ul", [b.CSS.unorderedList, b.CSS.itemChildren]), n
    }

    renderItem(t, n) {
      const r = c.make("li", b.CSS.item),
        i = c.make("div", b.CSS.itemContent, {innerHTML: t, contentEditable: (!this.readOnly).toString()});
      return r.appendChild(i), r
    }

    getItemContent(t) {
      const n = t.querySelector(`.${b.CSS.itemContent}`);
      return !n || c.isEmpty(n) ? "" : n.innerHTML
    }

    getItemMeta() {
      return {}
    }

    composeDefaultMeta() {
      return {}
    }
  }

  function k(e) {
    return e.nodeType === Node.ELEMENT_NODE
  }

  var j = {}, we = {}, H = {}, F = {};
  Object.defineProperty(F, "__esModule", {value: !0}), F.getContenteditableSlice = Ln;
  var Tn = c;

  function Ln(e, t, n, r, i) {
    var a;
    i === void 0 && (i = !1);
    var l = document.createRange();
    if (r === "left" ? (l.setStart(e, 0), l.setEnd(t, n)) : (l.setStart(t, n), l.setEnd(e, e.childNodes.length)), i === !0) {
      var s = l.extractContents();
      return (0, Tn.fragmentToString)(s)
    }
    var o = l.cloneContents(), d = document.createElement("div");
    d.appendChild(o);
    var u = (a = d.textContent) !== null && a !== void 0 ? a : "";
    return u
  }

  Object.defineProperty(H, "__esModule", {value: !0}), H.checkContenteditableSliceForEmptiness = An;
  var Mn = c, Nn = F;

  function An(e, t, n, r) {
    var i = (0, Nn.getContenteditableSlice)(e, t, n, r);
    return (0, Mn.isCollapsedWhitespaces)(i)
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.checkContenteditableSliceForEmptiness = void 0;
    var t = H;
    Object.defineProperty(e, "checkContenteditableSliceForEmptiness", {
      enumerable: !0, get: function () {
        return t.checkContenteditableSliceForEmptiness
      }
    })
  })(we);
  var nt = {};
  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.getContenteditableSlice = void 0;
    var t = F;
    Object.defineProperty(e, "getContenteditableSlice", {
      enumerable: !0, get: function () {
        return t.getContenteditableSlice
      }
    })
  })(nt);
  var rt = {}, Pe = {};
  Object.defineProperty(Pe, "__esModule", {value: !0}), Pe.focus = Bn;
  var $n = c;

  function Bn(e, t) {
    var n, r;
    if (t === void 0 && (t = !0), (0, $n.isNativeInput)(e)) {
      e.focus();
      var i = t ? 0 : e.value.length;
      e.setSelectionRange(i, i)
    } else {
      var a = document.createRange(), l = window.getSelection();
      if (!l) return;
      var s = function (g, L) {
        L === void 0 && (L = !1);
        var w = document.createTextNode("");
        L ? g.insertBefore(w, g.firstChild) : g.appendChild(w), a.setStart(w, 0), a.setEnd(w, 0)
      }, o = function (g) {
        return g != null
      }, d = e.childNodes, u = t ? d[0] : d[d.length - 1];
      if (o(u)) {
        for (; o(u) && u.nodeType !== Node.TEXT_NODE;) u = t ? u.firstChild : u.lastChild;
        if (o(u) && u.nodeType === Node.TEXT_NODE) {
          var h = (r = (n = u.textContent) === null || n === void 0 ? void 0 : n.length) !== null && r !== void 0 ? r : 0,
            i = t ? 0 : h;
          a.setStart(u, i), a.setEnd(u, i)
        } else s(e, t)
      } else s(e);
      l.removeAllRanges(), l.addRange(a)
    }
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.focus = void 0;
    var t = Pe;
    Object.defineProperty(e, "focus", {
      enumerable: !0, get: function () {
        return t.focus
      }
    })
  })(rt);
  var je = {}, R = {};
  Object.defineProperty(R, "__esModule", {value: !0}), R.getCaretNodeAndOffset = Wn;

  function Wn() {
    var e = window.getSelection();
    if (e === null) return [null, 0];
    var t = e.focusNode, n = e.focusOffset;
    return t === null ? [null, 0] : (t.nodeType !== Node.TEXT_NODE && t.childNodes.length > 0 && (t.childNodes[n] !== void 0 ? (t = t.childNodes[n], n = 0) : (t = t.childNodes[n - 1], t.textContent !== null && (n = t.textContent.length))), [t, n])
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.getCaretNodeAndOffset = void 0;
    var t = R;
    Object.defineProperty(e, "getCaretNodeAndOffset", {
      enumerable: !0, get: function () {
        return t.getCaretNodeAndOffset
      }
    })
  })(je);
  var it = {}, q = {};
  Object.defineProperty(q, "__esModule", {value: !0}), q.getRange = Dn;

  function Dn() {
    var e = window.getSelection();
    return e && e.rangeCount ? e.getRangeAt(0) : null
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.getRange = void 0;
    var t = q;
    Object.defineProperty(e, "getRange", {
      enumerable: !0, get: function () {
        return t.getRange
      }
    })
  })(it);
  var at = {}, Te = {};
  Object.defineProperty(Te, "__esModule", {value: !0}), Te.isCaretAtEndOfInput = Rn;
  var lt = c, Hn = je, Fn = we;

  function Rn(e) {
    var t = (0, lt.getDeepestNode)(e, !0);
    if (t === null) return !0;
    if ((0, lt.isNativeInput)(t)) return t.selectionEnd === t.value.length;
    var n = (0, Hn.getCaretNodeAndOffset)(), r = n[0], i = n[1];
    return r === null ? !1 : (0, Fn.checkContenteditableSliceForEmptiness)(e, r, i, "right")
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isCaretAtEndOfInput = void 0;
    var t = Te;
    Object.defineProperty(e, "isCaretAtEndOfInput", {
      enumerable: !0, get: function () {
        return t.isCaretAtEndOfInput
      }
    })
  })(at);
  var st = {}, Le = {};
  Object.defineProperty(Le, "__esModule", {value: !0}), Le.isCaretAtStartOfInput = Kn;
  var U = c, qn = R, Un = H;

  function Kn(e) {
    var t = (0, U.getDeepestNode)(e);
    if (t === null || (0, U.isEmpty)(e)) return !0;
    if ((0, U.isNativeInput)(t)) return t.selectionEnd === 0;
    if ((0, U.isEmpty)(e)) return !0;
    var n = (0, qn.getCaretNodeAndOffset)(), r = n[0], i = n[1];
    return r === null ? !1 : (0, Un.checkContenteditableSliceForEmptiness)(e, r, i, "left")
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.isCaretAtStartOfInput = void 0;
    var t = Le;
    Object.defineProperty(e, "isCaretAtStartOfInput", {
      enumerable: !0, get: function () {
        return t.isCaretAtStartOfInput
      }
    })
  })(st);
  var ot = {}, Me = {};
  Object.defineProperty(Me, "__esModule", {value: !0}), Me.save = Gn;
  var zn = c, Xn = q;

  function Gn() {
    var e = (0, Xn.getRange)(), t = (0, zn.make)("span");
    if (t.id = "cursor", t.hidden = !0, !!e) return e.insertNode(t), function () {
      var r = window.getSelection();
      r && (e.setStartAfter(t), e.setEndAfter(t), r.removeAllRanges(), r.addRange(e), setTimeout(function () {
        t.remove()
      }, 150))
    }
  }

  (function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.save = void 0;
    var t = Me;
    Object.defineProperty(e, "save", {
      enumerable: !0, get: function () {
        return t.save
      }
    })
  })(ot), function (e) {
    Object.defineProperty(e, "__esModule", {value: !0}), e.save = e.isCaretAtStartOfInput = e.isCaretAtEndOfInput = e.getRange = e.getCaretNodeAndOffset = e.focus = e.getContenteditableSlice = e.checkContenteditableSliceForEmptiness = void 0;
    var t = we;
    Object.defineProperty(e, "checkContenteditableSliceForEmptiness", {
      enumerable: !0, get: function () {
        return t.checkContenteditableSliceForEmptiness
      }
    });
    var n = nt;
    Object.defineProperty(e, "getContenteditableSlice", {
      enumerable: !0, get: function () {
        return n.getContenteditableSlice
      }
    });
    var r = rt;
    Object.defineProperty(e, "focus", {
      enumerable: !0, get: function () {
        return r.focus
      }
    });
    var i = je;
    Object.defineProperty(e, "getCaretNodeAndOffset", {
      enumerable: !0, get: function () {
        return i.getCaretNodeAndOffset
      }
    });
    var a = it;
    Object.defineProperty(e, "getRange", {
      enumerable: !0, get: function () {
        return a.getRange
      }
    });
    var l = at;
    Object.defineProperty(e, "isCaretAtEndOfInput", {
      enumerable: !0, get: function () {
        return l.isCaretAtEndOfInput
      }
    });
    var s = st;
    Object.defineProperty(e, "isCaretAtStartOfInput", {
      enumerable: !0, get: function () {
        return s.isCaretAtStartOfInput
      }
    });
    var o = ot;
    Object.defineProperty(e, "save", {
      enumerable: !0, get: function () {
        return o.save
      }
    })
  }(j);

  class f {
    static get CSS() {
      return {
        ...p,
        checklist: `${m}-checklist`,
        itemChecked: `${m}__checkbox--checked`,
        noHover: `${m}__checkbox--no-hover`,
        checkbox: `${m}__checkbox-check`,
        checkboxContainer: `${m}__checkbox`
      }
    }

    constructor(t, n) {
      this.config = n, this.readOnly = t
    }

    renderWrapper(t) {
      let n;
      return t === !0 ? (n = c.make("ul", [f.CSS.wrapper, f.CSS.checklist]), n.addEventListener("click", r => {
        const i = r.target;
        if (i) {
          const a = i.closest(`.${f.CSS.checkboxContainer}`);
          a && a.contains(i) && this.toggleCheckbox(a)
        }
      })) : n = c.make("ul", [f.CSS.checklist, f.CSS.itemChildren]), n
    }

    renderItem(t, n) {
      const r = c.make("li", [f.CSS.item, f.CSS.item]),
        i = c.make("div", f.CSS.itemContent, {innerHTML: t, contentEditable: (!this.readOnly).toString()}),
        a = c.make("span", f.CSS.checkbox), l = c.make("div", f.CSS.checkboxContainer);
      return n.checked === !0 && l.classList.add(f.CSS.itemChecked), a.innerHTML = P, l.appendChild(a), r.appendChild(l), r.appendChild(i), r
    }

    getItemContent(t) {
      const n = t.querySelector(`.${f.CSS.itemContent}`);
      return !n || c.isEmpty(n) ? "" : n.innerHTML
    }

    getItemMeta(t) {
      const n = t.querySelector(`.${f.CSS.checkboxContainer}`);
      return {checked: n ? n.classList.contains(f.CSS.itemChecked) : !1}
    }

    composeDefaultMeta() {
      return {checked: !1}
    }

    toggleCheckbox(t) {
      t.classList.toggle(f.CSS.itemChecked), t.classList.add(f.CSS.noHover), t.addEventListener("mouseleave", () => this.removeSpecialHoverBehavior(t), {once: !0})
    }

    removeSpecialHoverBehavior(t) {
      t.classList.remove(f.CSS.noHover)
    }
  }

  function Ne(e, t = "after") {
    const n = [];
    let r;

    function i(a) {
      switch (t) {
        case"after":
          return a.nextElementSibling;
        case"before":
          return a.previousElementSibling
      }
    }

    for (r = i(e); r !== null;) n.push(r), r = i(r);
    return n.length !== 0 ? n : null
  }

  function y(e, t = !0) {
    let n = e;
    return e.classList.contains(p.item) && (n = e.querySelector(`.${p.itemChildren}`)), n === null ? [] : t ? Array.from(n.querySelectorAll(`:scope > .${p.item}`)) : Array.from(n.querySelectorAll(`.${p.item}`))
  }

  function Vn(e) {
    return e.nextElementSibling === null
  }

  function Yn(e) {
    return e.querySelector(`.${p.itemChildren}`) !== null
  }

  function S(e) {
    return e.querySelector(`.${p.itemChildren}`)
  }

  function Ae(e) {
    let t = e;
    e.classList.contains(p.item) && (t = S(e)), t !== null && y(t).length === 0 && t.remove()
  }

  function K(e) {
    return e.querySelector(`.${p.itemContent}`)
  }

  function E(e, t = !0) {
    const n = K(e);
    n && j.focus(n, t)
  }

  class $e {
    get currentItem() {
      const t = window.getSelection();
      if (!t) return null;
      let n = t.anchorNode;
      return !n || (k(n) || (n = n.parentNode), !n) || !k(n) ? null : n.closest(`.${p.item}`)
    }

    get currentItemLevel() {
      const t = this.currentItem;
      if (t === null) return null;
      let n = t.parentNode, r = 0;
      for (; n !== null && n !== this.listWrapper;) k(n) && n.classList.contains(p.item) && (r += 1), n = n.parentNode;
      return r + 1
    }

    constructor({data: t, config: n, api: r, readOnly: i, block: a}, l) {
      this.config = n, this.data = t, this.readOnly = i, this.api = r, this.block = a, this.renderer = l
    }

    render() {
      return this.listWrapper = this.renderer.renderWrapper(!0), this.data.items.length ? this.appendItems(this.data.items, this.listWrapper) : this.appendItems([{
        content: "",
        meta: {},
        items: []
      }], this.listWrapper), this.readOnly || this.listWrapper.addEventListener("keydown", t => {
        switch (t.key) {
          case"Enter":
            t.shiftKey || this.enterPressed(t);
            break;
          case"Backspace":
            this.backspace(t);
            break;
          case"Tab":
            t.shiftKey ? this.shiftTab(t) : this.addTab(t);
            break
        }
      }, !1), "start" in this.data.meta && this.data.meta.start !== void 0 && this.changeStartWith(this.data.meta.start), "counterType" in this.data.meta && this.data.meta.counterType !== void 0 && this.changeCounters(this.data.meta.counterType), this.listWrapper
    }

    save(t) {
      const n = t ?? this.listWrapper, r = l => y(l).map(o => {
        const d = S(o), u = this.renderer.getItemContent(o), h = this.renderer.getItemMeta(o), g = d ? r(d) : [];
        return {content: u, meta: h, items: g}
      }), i = n ? r(n) : [];
      let a = {style: this.data.style, meta: {}, items: i};
      return this.data.style === "ordered" && (a.meta = {
        start: this.data.meta.start,
        counterType: this.data.meta.counterType
      }), a
    }

    static get pasteConfig() {
      return {tags: ["OL", "UL", "LI"]}
    }

    merge(t) {
      const n = this.block.holder.querySelectorAll(`.${p.item}`), r = n[n.length - 1], i = K(r);
      if (r === null || i === null || (i.insertAdjacentHTML("beforeend", t.items[0].content), this.listWrapper === void 0)) return;
      const a = y(this.listWrapper);
      if (a.length === 0) return;
      const l = a[a.length - 1];
      let s = S(l);
      const o = t.items.shift();
      o !== void 0 && (o.items.length !== 0 && (s === null && (s = this.renderer.renderWrapper(!1)), this.appendItems(o.items, s)), t.items.length > 0 && this.appendItems(t.items, this.listWrapper))
    }

    onPaste(t) {
      const n = t.detail.data;
      this.data = this.pasteHandler(n);
      const r = this.listWrapper;
      r && r.parentNode && r.parentNode.replaceChild(this.render(), r)
    }

    pasteHandler(t) {
      const {tagName: n} = t;
      let r = "unordered", i;
      switch (n) {
        case"OL":
          r = "ordered", i = "ol";
          break;
        case"UL":
        case"LI":
          r = "unordered", i = "ul"
      }
      const a = {style: r, meta: {}, items: []};
      r === "ordered" && (this.data.meta.counterType = "numeric", this.data.meta.start = 1);
      const l = s => Array.from(s.querySelectorAll(":scope > li")).map(d => {
        const u = d.querySelector(`:scope > ${i}`), h = u ? l(u) : [];
        return {content: d.innerHTML ?? "", meta: {}, items: h}
      });
      return a.items = l(t), a
    }

    changeStartWith(t) {
      this.listWrapper.style.setProperty("counter-reset", `item ${t - 1}`), this.data.meta.start = t
    }

    changeCounters(t) {
      this.listWrapper.style.setProperty("--list-counter-type", t), this.data.meta.counterType = t
    }

    enterPressed(t) {
      var s;
      const n = this.currentItem;
      if (t.stopPropagation(), t.preventDefault(), t.isComposing || n === null) return;
      const r = ((s = this.renderer) == null ? void 0 : s.getItemContent(n).trim().length) === 0,
        i = n.parentNode === this.listWrapper, a = n.previousElementSibling === null,
        l = this.api.blocks.getCurrentBlockIndex();
      if (i && r) if (Vn(n) && !Yn(n)) {
        a ? this.convertItemToDefaultBlock(l, !0) : this.convertItemToDefaultBlock();
        return
      } else {
        this.splitList(n);
        return
      } else if (r) {
        this.unshiftItem(n);
        return
      } else this.splitItem(n)
    }

    backspace(t) {
      var r;
      const n = this.currentItem;
      if (n !== null && j.isCaretAtStartOfInput(n) && ((r = window.getSelection()) == null ? void 0 : r.isCollapsed) !== !1) {
        if (t.stopPropagation(), n.parentNode === this.listWrapper && n.previousElementSibling === null) {
          this.convertFirstItemToDefaultBlock();
          return
        }
        t.preventDefault(), this.mergeItemWithPrevious(n)
      }
    }

    shiftTab(t) {
      t.stopPropagation(), t.preventDefault(), this.currentItem !== null && this.unshiftItem(this.currentItem)
    }

    unshiftItem(t) {
      if (!t.parentNode || !k(t.parentNode)) return;
      const n = t.parentNode.closest(`.${p.item}`);
      if (!n) return;
      let r = S(t);
      if (t.parentElement === null) return;
      const i = Ne(t);
      i !== null && (r === null && (r = this.renderer.renderWrapper(!1)), i.forEach(a => {
        r.appendChild(a)
      }), t.appendChild(r)), n.after(t), E(t, !1), Ae(n)
    }

    splitList(t) {
      const n = y(t), r = this.block, i = this.api.blocks.getCurrentBlockIndex();
      if (n.length !== 0) {
        const o = n[0];
        this.unshiftItem(o), E(t, !1)
      }
      if (t.previousElementSibling === null && t.parentNode === this.listWrapper) {
        this.convertItemToDefaultBlock(i);
        return
      }
      const a = Ne(t);
      if (a === null) return;
      const l = this.renderer.renderWrapper(!0);
      a.forEach(o => {
        l.appendChild(o)
      });
      const s = this.save(l);
      s.meta.start = this.data.style == "ordered" ? 1 : void 0, this.api.blocks.insert(r == null ? void 0 : r.name, s, this.config, i + 1), this.convertItemToDefaultBlock(i + 1), l.remove()
    }

    splitItem(t) {
      const [n, r] = j.getCaretNodeAndOffset();
      if (n === null) return;
      const i = K(t);
      let a;
      i === null ? a = "" : a = j.getContenteditableSlice(i, n, r, "right", !0);
      const l = S(t), s = this.renderItem(a);
      t == null || t.after(s), l && s.appendChild(l), E(s)
    }

    mergeItemWithPrevious(t) {
      const n = t.previousElementSibling, r = t.parentNode;
      if (r === null || !k(r)) return;
      const i = r.closest(`.${p.item}`);
      if (!n && !i || n && !k(n)) return;
      let a;
      if (n) {
        const h = y(n, !1);
        h.length !== 0 && h.length !== 0 ? a = h[h.length - 1] : a = n
      } else a = i;
      const l = this.renderer.getItemContent(t);
      if (!a) return;
      E(a, !1);
      const s = K(a);
      if (s === null) return;
      s.insertAdjacentHTML("beforeend", l);
      const o = y(t);
      if (o.length === 0) {
        t.remove(), Ae(a);
        return
      }
      const d = n || i, u = S(d) ?? this.renderer.renderWrapper(!1);
      n ? o.forEach(h => {
        u.appendChild(h)
      }) : o.forEach(h => {
        u.prepend(h)
      }), S(d) === null && a.appendChild(u), t.remove()
    }

    addTab(t) {
      var a;
      t.stopPropagation(), t.preventDefault();
      const n = this.currentItem;
      if (!n) return;
      if (((a = this.config) == null ? void 0 : a.maxLevel) !== void 0) {
        const l = this.currentItemLevel;
        if (l !== null && l === this.config.maxLevel) return
      }
      const r = n.previousSibling;
      if (r === null || !k(r)) return;
      const i = S(r);
      if (i) i.appendChild(n), y(n).forEach(s => {
        i.appendChild(s)
      }); else {
        const l = this.renderer.renderWrapper(!1);
        l.appendChild(n), y(n).forEach(o => {
          l.appendChild(o)
        }), r.appendChild(l)
      }
      Ae(n), E(n, !1)
    }

    convertItemToDefaultBlock(t, n) {
      let r;
      const i = this.currentItem, a = i !== null ? this.renderer.getItemContent(i) : "";
      n === !0 && this.api.blocks.delete(), t !== void 0 ? r = this.api.blocks.insert(void 0, {text: a}, void 0, t) : r = this.api.blocks.insert(), i == null || i.remove(), this.api.caret.setToBlock(r, "start")
    }

    convertFirstItemToDefaultBlock() {
      const t = this.currentItem;
      if (t === null) return;
      const n = y(t);
      if (n.length !== 0) {
        const l = n[0];
        this.unshiftItem(l), E(t)
      }
      const r = Ne(t), i = this.api.blocks.getCurrentBlockIndex(), a = r === null;
      this.convertItemToDefaultBlock(i, a)
    }

    renderItem(t, n) {
      const r = n ?? this.renderer.composeDefaultMeta();
      switch (!0) {
        case this.renderer instanceof v:
          return this.renderer.renderItem(t, r);
        case this.renderer instanceof b:
          return this.renderer.renderItem(t, r);
        default:
          return this.renderer.renderItem(t, r)
      }
    }

    appendItems(t, n) {
      t.forEach(r => {
        var a;
        const i = this.renderItem(r.content, r.meta);
        if (n.appendChild(i), r.items.length) {
          const l = (a = this.renderer) == null ? void 0 : a.renderWrapper(!1);
          this.appendItems(r.items, l), i.appendChild(l)
        }
      })
    }
  }

  const I = {
    wrapper: `${m}-start-with-field`,
    input: `${m}-start-with-field__input`,
    startWithElementWrapperInvalid: `${m}-start-with-field--invalid`
  };

  function Jn(e, {value: t, placeholder: n, attributes: r, sanitize: i}) {
    const a = c.make("div", I.wrapper), l = c.make("input", I.input, {placeholder: n, tabIndex: -1, value: t});
    for (const s in r) l.setAttribute(s, r[s]);
    return a.appendChild(l), l.addEventListener("input", () => {
      i !== void 0 && (l.value = i(l.value));
      const s = l.checkValidity();
      !s && !a.classList.contains(I.startWithElementWrapperInvalid) && a.classList.add(I.startWithElementWrapperInvalid), s && a.classList.contains(I.startWithElementWrapperInvalid) && a.classList.remove(I.startWithElementWrapperInvalid), s && e(l.value)
    }), a
  }

  const T = new Map([["Numeric", "numeric"], ["Lower Roman", "lower-roman"], ["Upper Roman", "upper-roman"], ["Lower Alpha", "lower-alpha"], ["Upper Alpha", "upper-alpha"]]),
    ut = new Map([["numeric", ct], ["lower-roman", dt], ["upper-roman", ft], ["lower-alpha", ht], ["upper-alpha", pt]]),
    hr = "", mr = "";

  function Qn(e) {
    return e.replace(/\D+/g, "")
  }

  function Zn(e) {
    return typeof e.items[0] == "string"
  }

  function xn(e) {
    return !("meta" in e)
  }

  function er(e) {
    return typeof e.items[0] != "string" && "text" in e.items[0] && "checked" in e.items[0] && typeof e.items[0].text == "string" && typeof e.items[0].checked == "boolean"
  }

  function tr(e) {
    const t = [];
    return Zn(e) ? (e.items.forEach(n => {
      t.push({content: n, meta: {}, items: []})
    }), {style: e.style, meta: {}, items: t}) : er(e) ? (e.items.forEach(n => {
      t.push({content: n.text, meta: {checked: n.checked}, items: []})
    }), {style: "checklist", meta: {}, items: t}) : xn(e) ? {
      style: e.style,
      meta: {},
      items: e.items
    } : structuredClone(e)
  }

  class z {
    static get isReadOnlySupported() {
      return !0
    }

    static get enableLineBreaks() {
      return !0
    }

    static get toolbox() {
      return [{icon: Be, title: "Unordered List", data: {style: "unordered"}}, {
        icon: We,
        title: "Ordered List",
        data: {style: "ordered"}
      }, {icon: _, title: "Checklist", data: {style: "checklist"}}]
    }

    static get pasteConfig() {
      return {tags: ["OL", "UL", "LI"]}
    }

    static get conversionConfig() {
      return {
        export: t => z.joinRecursive(t),
        import: (t, n) => ({
          meta: {},
          items: [{content: t, meta: {}, items: []}],
          style: (n == null ? void 0 : n.defaultStyle) !== void 0 ? n.defaultStyle : "unordered"
        })
      }
    }

    get listStyle() {
      return this.data.style || this.defaultListStyle
    }

    set listStyle(t) {
      var r;
      this.data.style = t, this.changeTabulatorByStyle();
      const n = this.list.render();
      (r = this.listElement) == null || r.replaceWith(n), this.listElement = n
    }

    constructor({data: t, config: n, api: r, readOnly: i, block: a}) {
      var s;
      this.api = r, this.readOnly = i, this.config = n, this.block = a, this.defaultListStyle = ((s = this.config) == null ? void 0 : s.defaultStyle) || "unordered", this.defaultCounterTypes = this.config.counterTypes || Array.from(T.values());
      const l = {style: this.defaultListStyle, meta: {}, items: []};
      this.data = Object.keys(t).length ? tr(t) : l, this.listStyle === "ordered" && this.data.meta.counterType === void 0 && (this.data.meta.counterType = "numeric"), this.changeTabulatorByStyle()
    }

    static joinRecursive(t) {
      return t.items.map(n => `${n.content} ${z.joinRecursive(n)}`).join("")
    }

    render() {
      return this.listElement = this.list.render(), this.listElement
    }

    save() {
      return this.data = this.list.save(), this.data
    }

    merge(t) {
      this.list.merge(t)
    }

    renderSettings() {
      const t = [{
        label: this.api.i18n.t("Unordered"),
        icon: Be,
        closeOnActivate: !0,
        isActive: this.listStyle == "unordered",
        onActivate: () => {
          this.listStyle = "unordered"
        }
      }, {
        label: this.api.i18n.t("Ordered"),
        icon: We,
        closeOnActivate: !0,
        isActive: this.listStyle == "ordered",
        onActivate: () => {
          this.listStyle = "ordered"
        }
      }, {
        label: this.api.i18n.t("Checklist"),
        icon: _,
        closeOnActivate: !0,
        isActive: this.listStyle == "checklist",
        onActivate: () => {
          this.listStyle = "checklist"
        }
      }];
      if (this.listStyle === "ordered") {
        const n = Jn(a => this.changeStartWith(Number(a)), {
            value: String(this.data.meta.start ?? 1),
            placeholder: "",
            attributes: {required: "true"},
            sanitize: a => Qn(a)
          }), r = [{label: this.api.i18n.t("Start with"), icon: mt, children: {items: [{element: n, type: "html"}]}}],
          i = {label: this.api.i18n.t("Counter type"), icon: ut.get(this.data.meta.counterType), children: {items: []}};
        T.forEach((a, l) => {
          const s = T.get(l);
          this.defaultCounterTypes.includes(s) && i.children.items.push({
            title: this.api.i18n.t(l),
            icon: ut.get(s),
            isActive: this.data.meta.counterType === T.get(l),
            closeOnActivate: !0,
            onActivate: () => {
              this.changeCounters(T.get(l))
            }
          })
        }), i.children.items.length > 1 && r.push(i), t.push({type: "separator"}, ...r)
      }
      return t
    }

    onPaste(t) {
      const {tagName: n} = t.detail.data;
      switch (n) {
        case"OL":
          this.listStyle = "ordered";
          break;
        case"UL":
        case"LI":
          this.listStyle = "unordered"
      }
      this.list.onPaste(t)
    }

    pasteHandler(t) {
      return this.list.pasteHandler(t)
    }

    changeCounters(t) {
      var n;
      (n = this.list) == null || n.changeCounters(t), this.data.meta.counterType = t
    }

    changeStartWith(t) {
      var n;
      (n = this.list) == null || n.changeStartWith(t), this.data.meta.start = t
    }

    changeTabulatorByStyle() {
      switch (this.listStyle) {
        case"ordered":
          this.list = new $e({
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block
          }, new v(this.readOnly, this.config));
          break;
        case"unordered":
          this.list = new $e({
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block
          }, new b(this.readOnly, this.config));
          break;
        case"checklist":
          this.list = new $e({
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block
          }, new f(this.readOnly, this.config));
          break
      }
    }
  }

  return z
});
/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/editorjs-undo@2.0.28/dist/bundle.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*! For license information please see bundle.js.LICENSE.txt */
!function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Undo = e() : t.Undo = e()
}(self, (() => (() => {
  var t = {
    917: function (t, e) {
      var n, r;
      n = function (t) {
        "use strict";
        var e = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
          }
        }(), n = function () {
          function t(e) {
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.target = e, this.isContentEditable = e && e.contentEditable
          }

          return e(t, [{
            key: "getPos", value: function () {
              if (document.activeElement !== this.target) return -1;
              if ("true" === this.isContentEditable) {
                this.target.focus();
                var t = document.getSelection().getRangeAt(0), e = t.cloneRange();
                return e.selectNodeContents(this.target), e.setEnd(t.endContainer, t.endOffset), e.toString().length
              }
              return this.target.selectionStart
            }
          }, {
            key: "setPos", value: function (t) {
              if ("true" === this.isContentEditable) {
                if (t >= 0) {
                  var e = window.getSelection(), n = this.createRange(this.target, {count: t});
                  n && (n.collapse(!1), e.removeAllRanges(), e.addRange(n))
                }
              } else this.target.setSelectionRange(t, t)
            }
          }, {
            key: "createRange", value: function (t, e, n) {
              if (n || ((n = document.createRange()).selectNode(t), n.setStart(t, 0)), 0 === e.count) n.setEnd(t, e.count); else if (t && e.count > 0) if (t.nodeType === Node.TEXT_NODE) t.textContent.length < e.count ? e.count -= t.textContent.length : (n.setEnd(t, e.count), e.count = 0); else for (var r = 0; r < t.childNodes.length && (n = this.createRange(t.childNodes[r], e, n), 0 !== e.count); r++) ;
              return n
            }
          }]), t
        }();
        t.exports = n
      }, void 0 === (r = n.apply(e, [t])) || (t.exports = r)
    }, 442: (t, e, n) => {
      t.exports = n(917)
    }, 633: (t, e, n) => {
      var r = n(738).default;

      function o() {
        "use strict";
        t.exports = o = function () {
          return n
        }, t.exports.__esModule = !0, t.exports.default = t.exports;
        var e, n = {}, i = Object.prototype, a = i.hasOwnProperty, s = Object.defineProperty || function (t, e, n) {
            t[e] = n.value
          }, c = "function" == typeof Symbol ? Symbol : {}, u = c.iterator || "@@iterator",
          l = c.asyncIterator || "@@asyncIterator", h = c.toStringTag || "@@toStringTag";

        function f(t, e, n) {
          return Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}), t[e]
        }

        try {
          f({}, "")
        } catch (e) {
          f = function (t, e, n) {
            return t[e] = n
          }
        }

        function d(t, e, n, r) {
          var o = e && e.prototype instanceof m ? e : m, i = Object.create(o.prototype), a = new D(r || []);
          return s(i, "_invoke", {value: T(t, n, a)}), i
        }

        function p(t, e, n) {
          try {
            return {type: "normal", arg: t.call(e, n)}
          } catch (t) {
            return {type: "throw", arg: t}
          }
        }

        n.wrap = d;
        var y = "suspendedStart", v = "suspendedYield", b = "executing", g = "completed", k = {};

        function m() {
        }

        function x() {
        }

        function w() {
        }

        var O = {};
        f(O, u, (function () {
          return this
        }));
        var E = Object.getPrototypeOf, L = E && E(E(I([])));
        L && L !== i && a.call(L, u) && (O = L);
        var S = w.prototype = m.prototype = Object.create(O);

        function C(t) {
          ["next", "throw", "return"].forEach((function (e) {
            f(t, e, (function (t) {
              return this._invoke(e, t)
            }))
          }))
        }

        function j(t, e) {
          function n(o, i, s, c) {
            var u = p(t[o], t, i);
            if ("throw" !== u.type) {
              var l = u.arg, h = l.value;
              return h && "object" == r(h) && a.call(h, "__await") ? e.resolve(h.__await).then((function (t) {
                n("next", t, s, c)
              }), (function (t) {
                n("throw", t, s, c)
              })) : e.resolve(h).then((function (t) {
                l.value = t, s(l)
              }), (function (t) {
                return n("throw", t, s, c)
              }))
            }
            c(u.arg)
          }

          var o;
          s(this, "_invoke", {
            value: function (t, r) {
              function i() {
                return new e((function (e, o) {
                  n(t, r, e, o)
                }))
              }

              return o = o ? o.then(i, i) : i()
            }
          })
        }

        function T(t, n, r) {
          var o = y;
          return function (i, a) {
            if (o === b) throw Error("Generator is already running");
            if (o === g) {
              if ("throw" === i) throw a;
              return {value: e, done: !0}
            }
            for (r.method = i, r.arg = a; ;) {
              var s = r.delegate;
              if (s) {
                var c = B(s, r);
                if (c) {
                  if (c === k) continue;
                  return c
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                if (o === y) throw o = g, r.arg;
                r.dispatchException(r.arg)
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = b;
              var u = p(t, n, r);
              if ("normal" === u.type) {
                if (o = r.done ? g : v, u.arg === k) continue;
                return {value: u.arg, done: r.done}
              }
              "throw" === u.type && (o = g, r.method = "throw", r.arg = u.arg)
            }
          }
        }

        function B(t, n) {
          var r = n.method, o = t.iterator[r];
          if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, B(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), k;
          var i = p(o, t.iterator, n.arg);
          if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, k;
          var a = i.arg;
          return a ? a.done ? (n[t.resultName] = a.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, k) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, k)
        }

        function _(t) {
          var e = {tryLoc: t[0]};
          1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function P(t) {
          var e = t.completion || {};
          e.type = "normal", delete e.arg, t.completion = e
        }

        function D(t) {
          this.tryEntries = [{tryLoc: "root"}], t.forEach(_, this), this.reset(!0)
        }

        function I(t) {
          if (t || "" === t) {
            var n = t[u];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1, i = function n() {
                for (; ++o < t.length;) if (a.call(t, o)) return n.value = t[o], n.done = !1, n;
                return n.value = e, n.done = !0, n
              };
              return i.next = i
            }
          }
          throw new TypeError(r(t) + " is not iterable")
        }

        return x.prototype = w, s(S, "constructor", {value: w, configurable: !0}), s(w, "constructor", {
          value: x,
          configurable: !0
        }), x.displayName = f(w, h, "GeneratorFunction"), n.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === x || "GeneratorFunction" === (e.displayName || e.name))
        }, n.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w, f(t, h, "GeneratorFunction")), t.prototype = Object.create(S), t
        }, n.awrap = function (t) {
          return {__await: t}
        }, C(j.prototype), f(j.prototype, l, (function () {
          return this
        })), n.AsyncIterator = j, n.async = function (t, e, r, o, i) {
          void 0 === i && (i = Promise);
          var a = new j(d(t, e, r, o), i);
          return n.isGeneratorFunction(e) ? a : a.next().then((function (t) {
            return t.done ? t.value : a.next()
          }))
        }, C(S), f(S, h, "Generator"), f(S, u, (function () {
          return this
        })), f(S, "toString", (function () {
          return "[object Generator]"
        })), n.keys = function (t) {
          var e = Object(t), n = [];
          for (var r in e) n.push(r);
          return n.reverse(), function t() {
            for (; n.length;) {
              var r = n.pop();
              if (r in e) return t.value = r, t.done = !1, t
            }
            return t.done = !0, t
          }
        }, n.values = I, D.prototype = {
          constructor: D, reset: function (t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(P), !t) for (var n in this) "t" === n.charAt(0) && a.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
          }, stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval
          }, dispatchException: function (t) {
            if (this.done) throw t;
            var n = this;

            function r(r, o) {
              return s.type = "throw", s.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
            }

            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o], s = i.completion;
              if ("root" === i.tryLoc) return r("end");
              if (i.tryLoc <= this.prev) {
                var c = a.call(i, "catchLoc"), u = a.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                } else if (c) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                } else {
                  if (!u) throw Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                }
              }
            }
          }, abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n];
              if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                var o = r;
                break
              }
            }
            o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
            var i = o ? o.completion : {};
            return i.type = t, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, k) : this.complete(i)
          }, complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), k
          }, finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), P(n), k
            }
          }, catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.tryLoc === t) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  P(n)
                }
                return o
              }
            }
            throw Error("illegal catch attempt")
          }, delegateYield: function (t, n, r) {
            return this.delegate = {
              iterator: I(t),
              resultName: n,
              nextLoc: r
            }, "next" === this.method && (this.arg = e), k
          }
        }, n
      }

      t.exports = o, t.exports.__esModule = !0, t.exports.default = t.exports
    }, 738: t => {
      function e(n) {
        return t.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n)
      }

      t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
    }, 756: (t, e, n) => {
      var r = n(633)();
      t.exports = r;
      try {
        regeneratorRuntime = r
      } catch (t) {
        "object" == typeof globalThis ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r)
      }
    }
  }, e = {};

  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = e[r] = {exports: {}};
    return t[r].call(i.exports, i, i.exports, n), i.exports
  }

  n.n = t => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, {a: e}), e
  }, n.d = (t, e) => {
    for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {enumerable: !0, get: e[r]})
  }, n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
  var r = {};
  return (() => {
    "use strict";

    function t(t, e, n, r, o, i, a) {
      try {
        var s = t[i](a), c = s.value
      } catch (t) {
        return void n(t)
      }
      s.done ? e(c) : Promise.resolve(c).then(r, o)
    }

    function e(e) {
      return function () {
        var n = this, r = arguments;
        return new Promise((function (o, i) {
          var a = e.apply(n, r);

          function s(e) {
            t(a, o, i, s, c, "next", e)
          }

          function c(e) {
            t(a, o, i, s, c, "throw", e)
          }

          s(void 0)
        }))
      }
    }

    function o(t) {
      return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      }, o(t)
    }

    function i(t) {
      var e = function (t, e) {
        if ("object" != o(t) || !t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(t, "string");
          if ("object" != o(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(t)
      }(t);
      return "symbol" == o(e) ? e : e + ""
    }

    function a(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, i(r.key), r)
      }
    }

    function c(t, e, n) {
      return e && s(t.prototype, e), n && s(t, n), Object.defineProperty(t, "prototype", {writable: !1}), t
    }

    n.d(r, {default: () => v});
    var u = n(756), l = n.n(u), h = n(442), f = n.n(h), d = function () {
      return c((function t(e, n, r) {
        a(this, t), this.holder = n, this.observer = null, this.debounceTimer = r, this.mutationDebouncer = this.debounce((function () {
          e()
        }), this.debounceTimer)
      }), [{
        key: "setMutationObserver", value: function () {
          var t = this, e = this.holder.querySelector(".codex-editor__redactor");
          this.observer = new MutationObserver((function (e) {
            t.mutationHandler(e)
          })), this.observer.observe(e, {
            childList: !0,
            attributes: !0,
            subtree: !0,
            characterData: !0,
            characterDataOldValue: !0
          })
        }
      }, {
        key: "mutationHandler", value: function (t) {
          var e = this, n = !1;
          t.forEach((function (t) {
            switch (t.type) {
              case"childList":
                t.target === e.holder ? e.onDestroy() : n = !0;
                break;
              case"characterData":
                n = !0;
                break;
              case"attributes":
                t.target.classList.contains("ce-block") || t.target.classList.contains("tc-toolbox") || (n = !0)
            }
          })), n && this.mutationDebouncer()
        }
      }, {
        key: "debounce", value: function (t, e) {
          var n, r = this;
          return function () {
            for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
            var s = r;
            clearTimeout(n), n = setTimeout((function () {
              return t.apply(s, i)
            }), e)
          }
        }
      }, {
        key: "onDestroy", value: function () {
          var t = new CustomEvent("destroy");
          document.dispatchEvent(t), this.observer.disconnect()
        }
      }])
    }();

    function p(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function y(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? p(Object(n), !0).forEach((function (e) {
          var r, o, a;
          r = t, o = e, a = n[e], (o = i(o)) in r ? Object.defineProperty(r, o, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : r[o] = a
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }))
      }
      return t
    }

    var v = function () {
      return c((function t(e) {
        var n = this, r = e.editor, o = e.config, i = void 0 === o ? {} : o, s = e.onUpdate, c = e.maxLength;
        a(this, t);
        var u = {
            maxLength: 30, onUpdate: function () {
            }, config: {debounceTimer: 200, shortcuts: {undo: ["CMD+Z"], redo: ["CMD+Y", "CMD+SHIFT+Z"]}}
          }, l = r.blocks, h = r.caret, f = r.configuration, p = f.holder, v = f.defaultBlock, b = u.config.shortcuts,
          g = i.shortcuts, k = y(y({}, b), g), m = Array.isArray(k.undo) ? k.undo : [k.undo],
          x = Array.isArray(k.redo) ? k.redo : [k.redo], w = u.config.debounceTimer, O = i.debounceTimer,
          E = void 0 === O ? w : O;
        this.holder = "string" == typeof p ? document.getElementById(p) : p, this.editor = r, this.defaultBlock = v, this.blocks = l, this.caret = h, this.shouldSaveHistory = !0, this.readOnly = f.readOnly, this.maxLength = c || u.maxLength, this.onUpdate = s || u.onUpdate, this.config = {
          debounceTimer: E,
          shortcuts: {undo: m, redo: x}
        }, new d((function () {
          return n.registerChange()
        }), this.holder, this.config.debounceTimer).setMutationObserver(), this.setEventListeners(), this.initialItem = null, this.clear()
      }), [{
        key: "truncate", value: function (t, e) {
          for (; t.length > e;) t.shift()
        }
      }, {
        key: "initialize", value: function (t) {
          var e = "blocks" in t ? t.blocks : t, n = {index: e.length - 1, state: e};
          this.stack[0] = n, this.initialItem = n
        }
      }, {
        key: "clear", value: function () {
          this.stack = this.initialItem ? [this.initialItem] : [{
            index: 0,
            state: [{type: this.defaultBlock, data: {}}]
          }], this.position = 0, this.onUpdate()
        }
      }, {
        key: "setReadOnly", value: function () {
          var t = this.holder.querySelector(".ce-toolbox");
          this.readOnly = !t
        }
      }, {
        key: "registerChange", value: function () {
          var t = this;
          this.setReadOnly(), this.readOnly || (this.editor && this.editor.save && this.shouldSaveHistory && this.editor.save().then((function (e) {
            t.editorDidUpdate(e.blocks) && t.save(e.blocks)
          })), this.shouldSaveHistory = !0)
        }
      }, {
        key: "editorDidUpdate", value: function (t) {
          var e = this.stack[this.position].state;
          return !!t.length && (t.length !== e.length || JSON.stringify(e) !== JSON.stringify(t))
        }
      }, {
        key: "save", value: function (t) {
          this.position >= this.maxLength && this.truncate(this.stack, this.maxLength), this.position = Math.min(this.position, this.stack.length - 1), this.stack = this.stack.slice(0, this.position + 1);
          var e = this.blocks.getCurrentBlockIndex(), n = this.blocks.getBlocksCount(), r = e;
          t[e] || (r -= n - t.length);
          var o = !t[r] || "paragraph" !== t[r].type && "header" !== t[r].type ? null : this.getCaretIndex(e);
          this.stack.push({index: r, state: t, caretIndex: o}), this.position += 1, this.onUpdate()
        }
      }, {
        key: "getCaretIndex", value: function (t) {
          var e = this.holder.getElementsByClassName("ce-block__content");
          return new (f())(e[t].firstChild).getPos()
        }
      }, {
        key: "insertDeletedBlock", value: function (t, e, n) {
          for (var r = 0; r < t.length; r += 1) if (!e[r] || t[r].id !== e[r].id) {
            this.blocks.insert(t[r].type, t[r].data, {}, r, !0), this.caret.setToBlock(n, "end");
            break
          }
        }
      }, {
        key: "blockWasDropped", value: function (t, e) {
          return t.length === e.length && t.some((function (t, n) {
            return t.id !== e[n].id
          }))
        }
      }, {
        key: "blockWasSkipped", value: function (t, e) {
          return t.length !== e.length
        }
      }, {
        key: "contentChangedInNoFocusBlock", value: function (t, e) {
          return t !== e
        }
      }, {
        key: "blockWasDeleted", value: function (t, e) {
          return t.length > e.length
        }
      }, {
        key: "contentWasCopied", value: function (t, e, n) {
          return 0 === Object.keys(t[n].data).length && JSON.stringify(e[n + 1]) !== JSON.stringify(t[n + 1])
        }
      }, {
        key: "undo", value: (i = e(l().mark((function t() {
          var e, n, r, o, i, a, s, c, u, h, f;
          return l().wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                if (!this.canUndo()) {
                  t.next = 47;
                  break
                }
                if (e = this.stack[this.position], n = e.index, r = e.state, this.position -= 1, this.shouldSaveHistory = !1, o = this.stack[this.position].index, i = this.stack[this.position], a = i.state, s = i.caretIndex, this.onUpdate(), c = this.blocks.getBlocksCount(), a[o] || (o -= 1, this.stack[this.position].index = o), !this.blockWasDeleted(a, r)) {
                  t.next = 13;
                  break
                }
                this.insertDeletedBlock(a, r, o), t.next = 42;
                break;
              case 13:
                if (!this.contentWasCopied(a, r, o)) {
                  t.next = 19;
                  break
                }
                return t.next = 16, this.blocks.render({blocks: a});
              case 16:
                this.caret.setToBlock(o, "end"), t.next = 42;
                break;
              case 19:
                if (!(o < n && this.blockWasSkipped(a, r))) {
                  t.next = 25;
                  break
                }
                return t.next = 22, this.blocks.delete(n);
              case 22:
                this.caret.setToBlock(o, "end"), t.next = 42;
                break;
              case 25:
                if (!(c > a.length)) {
                  t.next = 31;
                  break
                }
                return t.next = 28, this.blocks.render({blocks: a});
              case 28:
                this.setCaretIndex(o, s), t.next = 42;
                break;
              case 31:
                if (!this.blockWasDropped(a, r)) {
                  t.next = 37;
                  break
                }
                return t.next = 34, this.blocks.render({blocks: a});
              case 34:
                this.caret.setToBlock(o, "end"), t.next = 42;
                break;
              case 37:
                if (!this.contentChangedInNoFocusBlock(o, n)) {
                  t.next = 42;
                  break
                }
                return u = this.blocks.getBlockByIndex(n), h = u.id, t.next = 41, this.blocks.update(h, a[n].data);
              case 41:
                this.setCaretIndex(o, s);
              case 42:
                if (!(f = this.blocks.getBlockByIndex(o))) {
                  t.next = 47;
                  break
                }
                return t.next = 46, this.blocks.update(f.id, a[o].data);
              case 46:
                this.setCaretIndex(o, s);
              case 47:
              case"end":
                return t.stop()
            }
          }), t, this)
        }))), function () {
          return i.apply(this, arguments)
        })
      }, {
        key: "setCaretIndex", value: function (t, e) {
          if (e && -1 !== e) {
            var n = this.holder.getElementsByClassName("ce-block__content"), r = new (f())(n[t].firstChild);
            setTimeout((function () {
              return r.setPos(e)
            }), 50)
          } else this.caret.setToBlock(t, "end")
        }
      }, {
        key: "insertBlock", value: (o = e(l().mark((function t(e, n) {
          return l().wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, this.blocks.insert(e[n].type, e[n].data, {}, n, !0);
              case 2:
              case"end":
                return t.stop()
            }
          }), t, this)
        }))), function (t, e) {
          return o.apply(this, arguments)
        })
      }, {
        key: "insertSkippedBlocks", value: (r = e(l().mark((function t(e, n, r) {
          var o;
          return l().wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                for (o = e.length; o < n.length; o += 1) this.insertBlock(n, o);
                if (JSON.stringify(e[r - 1]) === JSON.stringify(n[r - 1])) {
                  t.next = 4;
                  break
                }
                return t.next = 4, this.updateModifiedBlock(n, r);
              case 4:
              case"end":
                return t.stop()
            }
          }), t, this)
        }))), function (t, e, n) {
          return r.apply(this, arguments)
        })
      }, {
        key: "updateModifiedBlock", value: (n = e(l().mark((function t(e, n) {
          var r;
          return l().wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                if (r = e[n - 1], !this.editor.blocks.getById(r.id)) {
                  t.next = 3;
                  break
                }
                return t.abrupt("return", this.blocks.update(r.id, r.data));
              case 3:
                return t.abrupt("return", this.blocks.render({blocks: e}));
              case 4:
              case"end":
                return t.stop()
            }
          }), t, this)
        }))), function (t, e) {
          return n.apply(this, arguments)
        })
      }, {
        key: "redo", value: (t = e(l().mark((function t() {
          var e, n, r, o, i, a, s;
          return l().wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                if (!this.canRedo()) {
                  t.next = 27;
                  break
                }
                if (this.position += 1, this.shouldSaveHistory = !1, e = this.stack[this.position], n = e.index, r = e.state, o = e.caretIndex, (i = this.stack[this.position - 1]).index, a = i.state, !this.blockWasDeleted(a, r)) {
                  t.next = 11;
                  break
                }
                return t.next = 8, this.blocks.delete();
              case 8:
                this.caret.setToBlock(n, "end"), t.next = 21;
                break;
              case 11:
                if (!this.blockWasSkipped(r, a)) {
                  t.next = 17;
                  break
                }
                return t.next = 14, this.insertSkippedBlocks(a, r, n);
              case 14:
                this.caret.setToBlock(n, "end"), t.next = 21;
                break;
              case 17:
                if (!this.blockWasDropped(r, a) || 1 === this.position) {
                  t.next = 21;
                  break
                }
                return t.next = 20, this.blocks.render({blocks: r});
              case 20:
                this.caret.setToBlock(n, "end");
              case 21:
                if (this.onUpdate(), !(s = this.blocks.getBlockByIndex(n))) {
                  t.next = 27;
                  break
                }
                return t.next = 26, this.blocks.update(s.id, r[n].data);
              case 26:
                this.setCaretIndex(n, o);
              case 27:
              case"end":
                return t.stop()
            }
          }), t, this)
        }))), function () {
          return t.apply(this, arguments)
        })
      }, {
        key: "canUndo", value: function () {
          return !this.readOnly && this.position > 0
        }
      }, {
        key: "canRedo", value: function () {
          return !this.readOnly && this.position < this.count()
        }
      }, {
        key: "count", value: function () {
          return this.stack.length - 1
        }
      }, {
        key: "parseKeys", value: function (t) {
          var e = {CMD: /(Mac)/i.test(navigator.platform) ? "metaKey" : "ctrlKey", ALT: "altKey", SHIFT: "shiftKey"},
            n = t.slice(0, -1).map((function (t) {
              return e[t]
            })),
            r = n.includes("shiftKey") && 2 === t.length ? t[t.length - 1].toUpperCase() : t[t.length - 1].toLowerCase();
          return n.push(r), n
        }
      }, {
        key: "setEventListeners", value: function () {
          var t = this, e = this.holder, n = this.config.shortcuts, r = n.undo, o = n.redo, i = r.map((function (t) {
            return t.replace(/ /g, "").split("+")
          })), a = o.map((function (t) {
            return t.replace(/ /g, "").split("+")
          })), s = i.map((function (e) {
            return t.parseKeys(e)
          })), c = a.map((function (e) {
            return t.parseKeys(e)
          })), u = function (t, e) {
            return e.reduce((function (e, n) {
              return e || function (t, e) {
                return 3 === e.length && t[e[0]] && t[e[1]] && t.key.toLowerCase() === e[2]
              }(t, n)
            }), !1)
          }, l = function (t, e, n) {
            return !(!function (t, e) {
              return e.reduce((function (e, n) {
                return e || function (t, e) {
                  return 2 === e.length && t[e[0]] && t.key.toLowerCase() === e[1]
                }(t, n)
              }), !1)
            }(t, e) || u(t, n)) || !!u(t, e)
          }, h = function (e) {
            l(e, s, c) && (e.preventDefault(), t.undo())
          }, f = function (e) {
            l(e, c, s) && (e.preventDefault(), t.redo())
          };
          e.addEventListener("keydown", h), e.addEventListener("keydown", f), e.addEventListener("destroy", (function () {
            e.removeEventListener("keydown", h), e.removeEventListener("keydown", f)
          }))
        }
      }], [{
        key: "isReadOnlySupported", get: function () {
          return !0
        }
      }]);
      var t, n, r, o, i
    }()
  })(), r.default
})()));
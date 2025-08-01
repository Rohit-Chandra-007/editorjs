/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */
!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Shortcut = t() : e.Shortcut = t()
}(window, function () {
  return function (n) {
    var r = {};

    function o(e) {
      if (r[e]) return r[e].exports;
      var t = r[e] = {i: e, l: !1, exports: {}};
      return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }

    return o.m = n, o.c = r, o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, o.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, o.t = function (t, e) {
      if (1 & e && (t = o(t)), 8 & e) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (o.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var r in t) o.d(n, r, function (e) {
        return t[e]
      }.bind(null, r));
      return n
    }, o.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return o.d(t, "a", t), t
    }, o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 0)
  }([function (e, t, n) {
    "use strict";

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function o(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e
    }

    n.r(t);
    var u = function () {
      function i(e) {
        var t = this;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, i), this.commands = {}, this.keys = {}, this.name = e.name, this.parseShortcutName(e.name), this.element = e.on, this.callback = e.callback, this.executeShortcut = function (e) {
          t.execute(e)
        }, this.element.addEventListener("keydown", this.executeShortcut, !1)
      }

      return o(i, null, [{
        key: "supportedCommands", get: function () {
          return {SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"]}
        }
      }, {
        key: "keyCodes", get: function () {
          return {
            0: 48,
            1: 49,
            2: 50,
            3: 51,
            4: 52,
            5: 53,
            6: 54,
            7: 55,
            8: 56,
            9: 57,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            BACKSPACE: 8,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            INSERT: 45,
            DELETE: 46,
            ".": 190
          }
        }
      }]), o(i, [{
        key: "parseShortcutName", value: function (e) {
          e = e.split("+");
          for (var t = 0; t < e.length; t++) {
            e[t] = e[t].toUpperCase();
            var n = !1;
            for (var r in i.supportedCommands) if (i.supportedCommands[r].includes(e[t])) {
              n = this.commands[r] = !0;
              break
            }
            n || (this.keys[e[t]] = !0)
          }
          for (var o in i.supportedCommands) this.commands[o] || (this.commands[o] = !1)
        }
      }, {
        key: "execute", value: function (e) {
          var t, n = {CMD: e.ctrlKey || e.metaKey, SHIFT: e.shiftKey, ALT: e.altKey}, r = !0;
          for (t in this.commands) this.commands[t] !== n[t] && (r = !1);
          var o, u = !0;
          for (o in this.keys) u = u && e.keyCode === i.keyCodes[o];
          r && u && this.callback(e)
        }
      }, {
        key: "remove", value: function () {
          this.element.removeEventListener("keydown", this.executeShortcut)
        }
      }]), i
    }();
    t.default = u
  }]).default
});
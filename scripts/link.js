/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@editorjs/link@2.6.2/dist/link.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(document.createTextNode(`.link-tool{position:relative}.link-tool__input{padding-left:38px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='%23707684' stroke-linecap='round' stroke-width='2' d='m7.7 12.6-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207'/%3E%3Cpath stroke='%23707684' stroke-linecap='round' stroke-width='2' d='m16.22 11.12.136-.14c.933-.954.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:10px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.link-tool__input-holder{position:relative}.link-tool__input-holder--error .link-tool__input{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-width='2' d='m7.7 12.6-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207'/%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-width='2' d='m16.22 11.12.136-.14c.933-.954.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034'/%3E%3C/svg%3E");background-color:#fff3f6;border-color:#f3e0e0;color:#a95a5a;box-shadow:inset 0 1px 3px #923e3e0d}.link-tool__input[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.link-tool__input[contentEditable=true][data-placeholder]:empty:before{opacity:1}.link-tool__input[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.link-tool__progress{position:absolute;box-shadow:inset 0 1px 3px #66556b0a;height:100%;width:0;background-color:#f4f5f7;z-index:-1}.link-tool__progress--loading{-webkit-animation:progress .5s ease-in;-webkit-animation-fill-mode:forwards}.link-tool__progress--loaded{width:100%}.link-tool__content{display:block;padding:25px;border-radius:2px;box-shadow:0 0 0 2px #fff;color:initial!important;text-decoration:none!important}.link-tool__content:after{content:"";clear:both;display:table}.link-tool__content--rendered{background:#fff;border:1px solid rgba(201,201,204,.48);box-shadow:0 1px 3px #0000001a;border-radius:6px;will-change:filter;animation:link-in .45s 1 cubic-bezier(.215,.61,.355,1)}.link-tool__content--rendered:hover{box-shadow:0 0 3px #00000029}.link-tool__image{background-position:center center;background-repeat:no-repeat;background-size:cover;margin:0 0 0 30px;width:65px;height:65px;border-radius:3px;float:right}.link-tool__title{font-size:17px;font-weight:600;line-height:1.5em;margin:0 0 10px}.link-tool__title+.link-tool__anchor{margin-top:25px}.link-tool__description{margin:0 0 20px;font-size:15px;line-height:1.55em;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.link-tool__anchor{display:block;font-size:15px;line-height:1em;color:#888!important;border:0!important;padding:0!important}@keyframes link-in{0%{filter:blur(5px)}to{filter:none}}.codex-editor--narrow .link-tool__image{display:none}@-webkit-keyframes progress{0%{width:0}to{width:85%}}`)), document.head.appendChild(o)
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t)
  }
})();
(function (L, T) {
  typeof exports == "object" && typeof module < "u" ? module.exports = T() : typeof define == "function" && define.amd ? define(T) : (L = typeof globalThis < "u" ? globalThis : L || self, L.LinkTool = T())
})(this, function () {
  "use strict";
  const L = "";
  var T = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

  function P(k) {
    return k && k.__esModule && Object.prototype.hasOwnProperty.call(k, "default") ? k.default : k
  }

  (function (k) {
    var w = function () {
      try {
        return !!Symbol.iterator
      } catch {
        return !1
      }
    }, d = w(), v = function (n) {
      var o = {
        next: function () {
          var e = n.shift();
          return {done: e === void 0, value: e}
        }
      };
      return d && (o[Symbol.iterator] = function () {
        return o
      }), o
    }, c = function (n) {
      return encodeURIComponent(n).replace(/%20/g, "+")
    }, i = function (n) {
      return decodeURIComponent(String(n).replace(/\+/g, " "))
    }, s = function () {
      var n = function (e) {
        Object.defineProperty(this, "_entries", {writable: !0, value: {}});
        var a = typeof e;
        if (a !== "undefined") if (a === "string") e !== "" && this._fromString(e); else if (e instanceof n) {
          var h = this;
          e.forEach(function (u, f) {
            h.append(f, u)
          })
        } else if (e !== null && a === "object") if (Object.prototype.toString.call(e) === "[object Array]") for (var t = 0; t < e.length; t++) {
          var y = e[t];
          if (Object.prototype.toString.call(y) === "[object Array]" || y.length !== 2) this.append(y[0], y[1]); else throw new TypeError("Expected [string, any] as entry at index " + t + " of URLSearchParams's input")
        } else for (var r in e) e.hasOwnProperty(r) && this.append(r, e[r]); else throw new TypeError("Unsupported input's type for URLSearchParams")
      }, o = n.prototype;
      o.append = function (e, a) {
        e in this._entries ? this._entries[e].push(String(a)) : this._entries[e] = [String(a)]
      }, o.delete = function (e) {
        delete this._entries[e]
      }, o.get = function (e) {
        return e in this._entries ? this._entries[e][0] : null
      }, o.getAll = function (e) {
        return e in this._entries ? this._entries[e].slice(0) : []
      }, o.has = function (e) {
        return e in this._entries
      }, o.set = function (e, a) {
        this._entries[e] = [String(a)]
      }, o.forEach = function (e, a) {
        var h;
        for (var t in this._entries) if (this._entries.hasOwnProperty(t)) {
          h = this._entries[t];
          for (var y = 0; y < h.length; y++) e.call(a, h[y], t, this)
        }
      }, o.keys = function () {
        var e = [];
        return this.forEach(function (a, h) {
          e.push(h)
        }), v(e)
      }, o.values = function () {
        var e = [];
        return this.forEach(function (a) {
          e.push(a)
        }), v(e)
      }, o.entries = function () {
        var e = [];
        return this.forEach(function (a, h) {
          e.push([h, a])
        }), v(e)
      }, d && (o[Symbol.iterator] = o.entries), o.toString = function () {
        var e = [];
        return this.forEach(function (a, h) {
          e.push(c(h) + "=" + c(a))
        }), e.join("&")
      }, k.URLSearchParams = n
    }, p = function () {
      try {
        var n = k.URLSearchParams;
        return new n("?a=1").toString() === "a=1" && typeof n.prototype.set == "function"
      } catch {
        return !1
      }
    };
    p() || s();
    var l = k.URLSearchParams.prototype;
    typeof l.sort != "function" && (l.sort = function () {
      var n = this, o = [];
      this.forEach(function (a, h) {
        o.push([h, a]), n._entries || n.delete(h)
      }), o.sort(function (a, h) {
        return a[0] < h[0] ? -1 : a[0] > h[0] ? 1 : 0
      }), n._entries && (n._entries = {});
      for (var e = 0; e < o.length; e++) this.append(o[e][0], o[e][1])
    }), typeof l._fromString != "function" && Object.defineProperty(l, "_fromString", {
      enumerable: !1,
      configurable: !1,
      writable: !1,
      value: function (n) {
        if (this._entries) this._entries = {}; else {
          var o = [];
          this.forEach(function (t, y) {
            o.push(y)
          });
          for (var e = 0; e < o.length; e++) this.delete(o[e])
        }
        n = n.replace(/^\?/, "");
        for (var a = n.split("&"), h, e = 0; e < a.length; e++) h = a[e].split("="), this.append(i(h[0]), h.length > 1 ? i(h[1]) : "")
      }
    })
  })(typeof T < "u" ? T : typeof window < "u" ? window : typeof self < "u" ? self : T), function (k) {
    var w = function () {
      try {
        var c = new k.URL("b", "http://a");
        return c.pathname = "c d", c.href === "http://a/c%20d" && c.searchParams
      } catch {
        return !1
      }
    }, d = function () {
      var c = k.URL, i = function (l, n) {
        typeof l != "string" && (l = String(l));
        var o = document, e;
        if (n && (k.location === void 0 || n !== k.location.href)) {
          o = document.implementation.createHTMLDocument(""), e = o.createElement("base"), e.href = n, o.head.appendChild(e);
          try {
            if (e.href.indexOf(n) !== 0) throw new Error(e.href)
          } catch (m) {
            throw new Error("URL unable to set base " + n + " due to " + m)
          }
        }
        var a = o.createElement("a");
        a.href = l, e && (o.body.appendChild(a), a.href = a.href);
        var h = o.createElement("input");
        if (h.type = "url", h.value = l, a.protocol === ":" || !/:/.test(a.href) || !h.checkValidity() && !n) throw new TypeError("Invalid URL");
        Object.defineProperty(this, "_anchorElement", {value: a});
        var t = new k.URLSearchParams(this.search), y = !0, r = !0, u = this;
        ["append", "delete", "set"].forEach(function (m) {
          var b = t[m];
          t[m] = function () {
            b.apply(t, arguments), y && (r = !1, u.search = t.toString(), r = !0)
          }
        }), Object.defineProperty(this, "searchParams", {value: t, enumerable: !0});
        var f = void 0;
        Object.defineProperty(this, "_updateSearchParams", {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: function () {
            this.search !== f && (f = this.search, r && (y = !1, this.searchParams._fromString(this.search), y = !0))
          }
        })
      }, s = i.prototype, p = function (l) {
        Object.defineProperty(s, l, {
          get: function () {
            return this._anchorElement[l]
          }, set: function (n) {
            this._anchorElement[l] = n
          }, enumerable: !0
        })
      };
      ["hash", "host", "hostname", "port", "protocol"].forEach(function (l) {
        p(l)
      }), Object.defineProperty(s, "search", {
        get: function () {
          return this._anchorElement.search
        }, set: function (l) {
          this._anchorElement.search = l, this._updateSearchParams()
        }, enumerable: !0
      }), Object.defineProperties(s, {
        toString: {
          get: function () {
            var l = this;
            return function () {
              return l.href
            }
          }
        }, href: {
          get: function () {
            return this._anchorElement.href.replace(/\?$/, "")
          }, set: function (l) {
            this._anchorElement.href = l, this._updateSearchParams()
          }, enumerable: !0
        }, pathname: {
          get: function () {
            return this._anchorElement.pathname.replace(/(^\/?)/, "/")
          }, set: function (l) {
            this._anchorElement.pathname = l
          }, enumerable: !0
        }, origin: {
          get: function () {
            var l = {"http:": 80, "https:": 443, "ftp:": 21}[this._anchorElement.protocol],
              n = this._anchorElement.port != l && this._anchorElement.port !== "";
            return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (n ? ":" + this._anchorElement.port : "")
          }, enumerable: !0
        }, password: {
          get: function () {
            return ""
          }, set: function (l) {
          }, enumerable: !0
        }, username: {
          get: function () {
            return ""
          }, set: function (l) {
          }, enumerable: !0
        }
      }), i.createObjectURL = function (l) {
        return c.createObjectURL.apply(c, arguments)
      }, i.revokeObjectURL = function (l) {
        return c.revokeObjectURL.apply(c, arguments)
      }, k.URL = i
    };
    if (w() || d(), k.location !== void 0 && !("origin" in k.location)) {
      var v = function () {
        return k.location.protocol + "//" + k.location.hostname + (k.location.port ? ":" + k.location.port : "")
      };
      try {
        Object.defineProperty(k.location, "origin", {get: v, enumerable: !0})
      } catch {
        setInterval(function () {
          k.location.origin = v()
        }, 100)
      }
    }
  }(typeof T < "u" ? T : typeof window < "u" ? window : typeof self < "u" ? self : T);
  var O = {exports: {}};
  (function (k, w) {
    (function (d, v) {
      k.exports = v()
    })(window, function () {
      return function (d) {
        var v = {};

        function c(i) {
          if (v[i]) return v[i].exports;
          var s = v[i] = {i, l: !1, exports: {}};
          return d[i].call(s.exports, s, s.exports, c), s.l = !0, s.exports
        }

        return c.m = d, c.c = v, c.d = function (i, s, p) {
          c.o(i, s) || Object.defineProperty(i, s, {enumerable: !0, get: p})
        }, c.r = function (i) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(i, "__esModule", {value: !0})
        }, c.t = function (i, s) {
          if (1 & s && (i = c(i)), 8 & s || 4 & s && typeof i == "object" && i && i.__esModule) return i;
          var p = Object.create(null);
          if (c.r(p), Object.defineProperty(p, "default", {
            enumerable: !0,
            value: i
          }), 2 & s && typeof i != "string") for (var l in i) c.d(p, l, (function (n) {
            return i[n]
          }).bind(null, l));
          return p
        }, c.n = function (i) {
          var s = i && i.__esModule ? function () {
            return i.default
          } : function () {
            return i
          };
          return c.d(s, "a", s), s
        }, c.o = function (i, s) {
          return Object.prototype.hasOwnProperty.call(i, s)
        }, c.p = "", c(c.s = 3)
      }([function (d, v) {
        var c;
        c = function () {
          return this
        }();
        try {
          c = c || new Function("return this")()
        } catch {
          typeof window == "object" && (c = window)
        }
        d.exports = c
      }, function (d, v, c) {
        (function (i) {
          var s = c(2), p = setTimeout;

          function l() {
          }

          function n(r) {
            if (!(this instanceof n)) throw new TypeError("Promises must be constructed via new");
            if (typeof r != "function") throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], y(r, this)
          }

          function o(r, u) {
            for (; r._state === 3;) r = r._value;
            r._state !== 0 ? (r._handled = !0, n._immediateFn(function () {
              var f = r._state === 1 ? u.onFulfilled : u.onRejected;
              if (f !== null) {
                var m;
                try {
                  m = f(r._value)
                } catch (b) {
                  return void a(u.promise, b)
                }
                e(u.promise, m)
              } else (r._state === 1 ? e : a)(u.promise, r._value)
            })) : r._deferreds.push(u)
          }

          function e(r, u) {
            try {
              if (u === r) throw new TypeError("A promise cannot be resolved with itself.");
              if (u && (typeof u == "object" || typeof u == "function")) {
                var f = u.then;
                if (u instanceof n) return r._state = 3, r._value = u, void h(r);
                if (typeof f == "function") return void y((m = f, b = u, function () {
                  m.apply(b, arguments)
                }), r)
              }
              r._state = 1, r._value = u, h(r)
            } catch (g) {
              a(r, g)
            }
            var m, b
          }

          function a(r, u) {
            r._state = 2, r._value = u, h(r)
          }

          function h(r) {
            r._state === 2 && r._deferreds.length === 0 && n._immediateFn(function () {
              r._handled || n._unhandledRejectionFn(r._value)
            });
            for (var u = 0, f = r._deferreds.length; u < f; u++) o(r, r._deferreds[u]);
            r._deferreds = null
          }

          function t(r, u, f) {
            this.onFulfilled = typeof r == "function" ? r : null, this.onRejected = typeof u == "function" ? u : null, this.promise = f
          }

          function y(r, u) {
            var f = !1;
            try {
              r(function (m) {
                f || (f = !0, e(u, m))
              }, function (m) {
                f || (f = !0, a(u, m))
              })
            } catch (m) {
              if (f) return;
              f = !0, a(u, m)
            }
          }

          n.prototype.catch = function (r) {
            return this.then(null, r)
          }, n.prototype.then = function (r, u) {
            var f = new this.constructor(l);
            return o(this, new t(r, u, f)), f
          }, n.prototype.finally = s.a, n.all = function (r) {
            return new n(function (u, f) {
              if (!r || r.length === void 0) throw new TypeError("Promise.all accepts an array");
              var m = Array.prototype.slice.call(r);
              if (m.length === 0) return u([]);
              var b = m.length;

              function g(C, E) {
                try {
                  if (E && (typeof E == "object" || typeof E == "function")) {
                    var S = E.then;
                    if (typeof S == "function") return void S.call(E, function (j) {
                      g(C, j)
                    }, f)
                  }
                  m[C] = E, --b == 0 && u(m)
                } catch (j) {
                  f(j)
                }
              }

              for (var _ = 0; _ < m.length; _++) g(_, m[_])
            })
          }, n.resolve = function (r) {
            return r && typeof r == "object" && r.constructor === n ? r : new n(function (u) {
              u(r)
            })
          }, n.reject = function (r) {
            return new n(function (u, f) {
              f(r)
            })
          }, n.race = function (r) {
            return new n(function (u, f) {
              for (var m = 0, b = r.length; m < b; m++) r[m].then(u, f)
            })
          }, n._immediateFn = typeof i == "function" && function (r) {
            i(r)
          } || function (r) {
            p(r, 0)
          }, n._unhandledRejectionFn = function (r) {
            typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", r)
          }, v.a = n
        }).call(this, c(5).setImmediate)
      }, function (d, v, c) {
        v.a = function (i) {
          var s = this.constructor;
          return this.then(function (p) {
            return s.resolve(i()).then(function () {
              return p
            })
          }, function (p) {
            return s.resolve(i()).then(function () {
              return s.reject(p)
            })
          })
        }
      }, function (d, v, c) {
        function i(t) {
          return (i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (y) {
            return typeof y
          } : function (y) {
            return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y
          })(t)
        }

        c(4);
        var s, p, l, n, o, e, a = c(8), h = (p = function (t) {
          return new Promise(function (y, r) {
            t = n(t), t = o(t);
            var u = window.XMLHttpRequest ? new window.XMLHttpRequest : new window.ActiveXObject("Microsoft.XMLHTTP");
            u.open(t.method, t.url), u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function (m) {
              var b = t.headers[m];
              u.setRequestHeader(m, b)
            });
            var f = t.ratio;
            u.upload.addEventListener("progress", function (m) {
              var b = Math.round(m.loaded / m.total * 100), g = Math.ceil(b * f / 100);
              t.progress(g)
            }, !1), u.addEventListener("progress", function (m) {
              var b = Math.round(m.loaded / m.total * 100), g = Math.ceil(b * (100 - f) / 100) + f;
              t.progress(g)
            }, !1), u.onreadystatechange = function () {
              if (u.readyState === 4) {
                var m = u.response;
                try {
                  m = JSON.parse(m)
                } catch {
                }
                var b = a.parseHeaders(u.getAllResponseHeaders()), g = {body: m, code: u.status, headers: b};
                u.status === 200 ? y(g) : r(g)
              }
            }, u.send(t.data)
          })
        }, l = function (t) {
          return t.method = "POST", p(t)
        }, n = function () {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (t.url && typeof t.url != "string") throw new Error("Url must be a string");
          if (t.url = t.url || "", t.method && typeof t.method != "string") throw new Error("`method` must be a string or null");
          if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && i(t.headers) !== "object") throw new Error("`headers` must be an object or null");
          if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(s).includes(t.type))) throw new Error("`type` must be taken from module's «contentType» library");
          if (t.progress && typeof t.progress != "function") throw new Error("`progress` must be a function or null");
          if (t.progress = t.progress || function (y) {
          }, t.beforeSend = t.beforeSend || function (y) {
          }, t.ratio && typeof t.ratio != "number") throw new Error("`ratio` must be a number");
          if (t.ratio < 0 || t.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
          if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
          if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean") throw new Error("`multiple` must be a true or false");
          if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string") throw new Error("`fieldName` must be a string");
          return t.fieldName = t.fieldName || "files", t
        }, o = function (t) {
          switch (t.method) {
            case"GET":
              var y = e(t.data, s.URLENCODED);
              delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + y : t.url + "?" + y;
              break;
            case"POST":
            case"PUT":
            case"DELETE":
            case"UPDATE":
              var r = function () {
                return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || s.JSON
              }(t);
              (a.isFormData(t.data) || a.isFormElement(t.data)) && (r = s.FORM), t.data = e(t.data, r), r !== h.contentType.FORM && (t.headers["content-type"] = r)
          }
          return t
        }, e = function () {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          switch (arguments.length > 1 ? arguments[1] : void 0) {
            case s.URLENCODED:
              return a.urlEncode(t);
            case s.JSON:
              return a.jsonEncode(t);
            case s.FORM:
              return a.formEncode(t);
            default:
              return t
          }
        }, {
          contentType: s = {
            URLENCODED: "application/x-www-form-urlencoded; charset=utf-8",
            FORM: "multipart/form-data",
            JSON: "application/json; charset=utf-8"
          }, request: p, get: function (t) {
            return t.method = "GET", p(t)
          }, post: l, transport: function (t) {
            return t = n(t), a.selectFiles(t).then(function (y) {
              for (var r = new FormData, u = 0; u < y.length; u++) r.append(t.fieldName, y[u], y[u].name);
              return a.isObject(t.data) && Object.keys(t.data).forEach(function (f) {
                var m = t.data[f];
                r.append(f, m)
              }), t.beforeSend && t.beforeSend(y), t.data = r, l(t)
            })
          }, selectFiles: function (t) {
            return delete (t = n(t)).beforeSend, a.selectFiles(t)
          }
        });
        d.exports = h
      }, function (d, v, c) {
        c.r(v);
        var i = c(1);
        window.Promise = window.Promise || i.a
      }, function (d, v, c) {
        (function (i) {
          var s = i !== void 0 && i || typeof self < "u" && self || window, p = Function.prototype.apply;

          function l(n, o) {
            this._id = n, this._clearFn = o
          }

          v.setTimeout = function () {
            return new l(p.call(setTimeout, s, arguments), clearTimeout)
          }, v.setInterval = function () {
            return new l(p.call(setInterval, s, arguments), clearInterval)
          }, v.clearTimeout = v.clearInterval = function (n) {
            n && n.close()
          }, l.prototype.unref = l.prototype.ref = function () {
          }, l.prototype.close = function () {
            this._clearFn.call(s, this._id)
          }, v.enroll = function (n, o) {
            clearTimeout(n._idleTimeoutId), n._idleTimeout = o
          }, v.unenroll = function (n) {
            clearTimeout(n._idleTimeoutId), n._idleTimeout = -1
          }, v._unrefActive = v.active = function (n) {
            clearTimeout(n._idleTimeoutId);
            var o = n._idleTimeout;
            o >= 0 && (n._idleTimeoutId = setTimeout(function () {
              n._onTimeout && n._onTimeout()
            }, o))
          }, c(6), v.setImmediate = typeof self < "u" && self.setImmediate || i !== void 0 && i.setImmediate || this && this.setImmediate, v.clearImmediate = typeof self < "u" && self.clearImmediate || i !== void 0 && i.clearImmediate || this && this.clearImmediate
        }).call(this, c(0))
      }, function (d, v, c) {
        (function (i, s) {
          (function (p, l) {
            if (!p.setImmediate) {
              var n, o, e, a, h, t = 1, y = {}, r = !1, u = p.document,
                f = Object.getPrototypeOf && Object.getPrototypeOf(p);
              f = f && f.setTimeout ? f : p, {}.toString.call(p.process) === "[object process]" ? n = function (g) {
                s.nextTick(function () {
                  b(g)
                })
              } : function () {
                if (p.postMessage && !p.importScripts) {
                  var g = !0, _ = p.onmessage;
                  return p.onmessage = function () {
                    g = !1
                  }, p.postMessage("", "*"), p.onmessage = _, g
                }
              }() ? (a = "setImmediate$" + Math.random() + "$", h = function (g) {
                g.source === p && typeof g.data == "string" && g.data.indexOf(a) === 0 && b(+g.data.slice(a.length))
              }, p.addEventListener ? p.addEventListener("message", h, !1) : p.attachEvent("onmessage", h), n = function (g) {
                p.postMessage(a + g, "*")
              }) : p.MessageChannel ? ((e = new MessageChannel).port1.onmessage = function (g) {
                b(g.data)
              }, n = function (g) {
                e.port2.postMessage(g)
              }) : u && "onreadystatechange" in u.createElement("script") ? (o = u.documentElement, n = function (g) {
                var _ = u.createElement("script");
                _.onreadystatechange = function () {
                  b(g), _.onreadystatechange = null, o.removeChild(_), _ = null
                }, o.appendChild(_)
              }) : n = function (g) {
                setTimeout(b, 0, g)
              }, f.setImmediate = function (g) {
                typeof g != "function" && (g = new Function("" + g));
                for (var _ = new Array(arguments.length - 1), C = 0; C < _.length; C++) _[C] = arguments[C + 1];
                var E = {callback: g, args: _};
                return y[t] = E, n(t), t++
              }, f.clearImmediate = m
            }

            function m(g) {
              delete y[g]
            }

            function b(g) {
              if (r) setTimeout(b, 0, g); else {
                var _ = y[g];
                if (_) {
                  r = !0;
                  try {
                    (function (C) {
                      var E = C.callback, S = C.args;
                      switch (S.length) {
                        case 0:
                          E();
                          break;
                        case 1:
                          E(S[0]);
                          break;
                        case 2:
                          E(S[0], S[1]);
                          break;
                        case 3:
                          E(S[0], S[1], S[2]);
                          break;
                        default:
                          E.apply(l, S)
                      }
                    })(_)
                  } finally {
                    m(g), r = !1
                  }
                }
              }
            }
          })(typeof self > "u" ? i === void 0 ? this : i : self)
        }).call(this, c(0), c(7))
      }, function (d, v) {
        var c, i, s = d.exports = {};

        function p() {
          throw new Error("setTimeout has not been defined")
        }

        function l() {
          throw new Error("clearTimeout has not been defined")
        }

        function n(f) {
          if (c === setTimeout) return setTimeout(f, 0);
          if ((c === p || !c) && setTimeout) return c = setTimeout, setTimeout(f, 0);
          try {
            return c(f, 0)
          } catch {
            try {
              return c.call(null, f, 0)
            } catch {
              return c.call(this, f, 0)
            }
          }
        }

        (function () {
          try {
            c = typeof setTimeout == "function" ? setTimeout : p
          } catch {
            c = p
          }
          try {
            i = typeof clearTimeout == "function" ? clearTimeout : l
          } catch {
            i = l
          }
        })();
        var o, e = [], a = !1, h = -1;

        function t() {
          a && o && (a = !1, o.length ? e = o.concat(e) : h = -1, e.length && y())
        }

        function y() {
          if (!a) {
            var f = n(t);
            a = !0;
            for (var m = e.length; m;) {
              for (o = e, e = []; ++h < m;) o && o[h].run();
              h = -1, m = e.length
            }
            o = null, a = !1, function (b) {
              if (i === clearTimeout) return clearTimeout(b);
              if ((i === l || !i) && clearTimeout) return i = clearTimeout, clearTimeout(b);
              try {
                i(b)
              } catch {
                try {
                  return i.call(null, b)
                } catch {
                  return i.call(this, b)
                }
              }
            }(f)
          }
        }

        function r(f, m) {
          this.fun = f, this.array = m
        }

        function u() {
        }

        s.nextTick = function (f) {
          var m = new Array(arguments.length - 1);
          if (arguments.length > 1) for (var b = 1; b < arguments.length; b++) m[b - 1] = arguments[b];
          e.push(new r(f, m)), e.length !== 1 || a || n(y)
        }, r.prototype.run = function () {
          this.fun.apply(null, this.array)
        }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = u, s.addListener = u, s.once = u, s.off = u, s.removeListener = u, s.removeAllListeners = u, s.emit = u, s.prependListener = u, s.prependOnceListener = u, s.listeners = function (f) {
          return []
        }, s.binding = function (f) {
          throw new Error("process.binding is not supported")
        }, s.cwd = function () {
          return "/"
        }, s.chdir = function (f) {
          throw new Error("process.chdir is not supported")
        }, s.umask = function () {
          return 0
        }
      }, function (d, v, c) {
        function i(p, l) {
          for (var n = 0; n < l.length; n++) {
            var o = l[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(p, o.key, o)
          }
        }

        var s = c(9);
        d.exports = function () {
          function p() {
            (function (e, a) {
              if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
            })(this, p)
          }

          var l, n, o;
          return l = p, o = [{
            key: "urlEncode", value: function (e) {
              return s(e)
            }
          }, {
            key: "jsonEncode", value: function (e) {
              return JSON.stringify(e)
            }
          }, {
            key: "formEncode", value: function (e) {
              if (this.isFormData(e)) return e;
              if (this.isFormElement(e)) return new FormData(e);
              if (this.isObject(e)) {
                var a = new FormData;
                return Object.keys(e).forEach(function (h) {
                  var t = e[h];
                  a.append(h, t)
                }), a
              }
              throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")
            }
          }, {
            key: "isObject", value: function (e) {
              return Object.prototype.toString.call(e) === "[object Object]"
            }
          }, {
            key: "isFormData", value: function (e) {
              return e instanceof FormData
            }
          }, {
            key: "isFormElement", value: function (e) {
              return e instanceof HTMLFormElement
            }
          }, {
            key: "selectFiles", value: function () {
              var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              return new Promise(function (a, h) {
                var t = document.createElement("INPUT");
                t.type = "file", e.multiple && t.setAttribute("multiple", "multiple"), e.accept && t.setAttribute("accept", e.accept), t.style.display = "none", document.body.appendChild(t), t.addEventListener("change", function (y) {
                  var r = y.target.files;
                  a(r), document.body.removeChild(t)
                }, !1), t.click()
              })
            }
          }, {
            key: "parseHeaders", value: function (e) {
              var a = e.trim().split(/[\r\n]+/), h = {};
              return a.forEach(function (t) {
                var y = t.split(": "), r = y.shift(), u = y.join(": ");
                r && (h[r] = u)
              }), h
            }
          }], (n = null) && i(l.prototype, n), o && i(l, o), p
        }()
      }, function (d, v) {
        var c = function (s) {
          return encodeURIComponent(s).replace(/[!'()*]/g, escape).replace(/%20/g, "+")
        }, i = function (s, p, l, n) {
          return p = p || null, l = l || "&", n = n || null, s ? function (o) {
            for (var e = new Array, a = 0; a < o.length; a++) o[a] && e.push(o[a]);
            return e
          }(Object.keys(s).map(function (o) {
            var e, a, h = o;
            if (n && (h = n + "[" + h + "]"), typeof s[o] == "object" && s[o] !== null) e = i(s[o], null, l, h); else {
              p && (a = h, h = !isNaN(parseFloat(a)) && isFinite(a) ? p + Number(h) : h);
              var t = s[o];
              t = (t = (t = (t = t === !0 ? "1" : t) === !1 ? "0" : t) === 0 ? "0" : t) || "", e = c(h) + "=" + c(t)
            }
            return e
          })).join(l).replace(/[!'()*]/g, "") : ""
        };
        d.exports = i
      }])
    })
  })(O);
  var R = O.exports;
  const F = P(R),
    I = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.569 6.39509 13.9269 6.25143 12.8271 7.17675L11.39 8.38588C10.0935 9.47674 9.95704 11.4241 11.0887 12.6852L11.12 12.72"/></svg>';

  class x {
    static get isReadOnlySupported() {
      return !0
    }

    static get toolbox() {
      return {icon: I, title: "Link"}
    }

    static get enableLineBreaks() {
      return !0
    }

    constructor({data: w, config: d, api: v, readOnly: c}) {
      this.api = v, this.readOnly = c, this.config = {
        endpoint: d.endpoint || "",
        headers: d.headers || {}
      }, this.nodes = {
        wrapper: null,
        container: null,
        progress: null,
        input: null,
        inputHolder: null,
        linkContent: null,
        linkImage: null,
        linkTitle: null,
        linkDescription: null,
        linkText: null
      }, this._data = {link: "", meta: {}}, this.data = w
    }

    render() {
      return this.nodes.wrapper = this.make("div", this.CSS.baseClass), this.nodes.container = this.make("div", this.CSS.container), this.nodes.inputHolder = this.makeInputHolder(), this.nodes.linkContent = this.prepareLinkPreview(), Object.keys(this.data.meta).length ? (this.nodes.container.appendChild(this.nodes.linkContent), this.showLinkPreview(this.data.meta)) : this.nodes.container.appendChild(this.nodes.inputHolder), this.nodes.wrapper.appendChild(this.nodes.container), this.nodes.wrapper
    }

    save() {
      return this.data
    }

    validate() {
      return this.data.link.trim() !== ""
    }

    set data(w) {
      this._data = Object.assign({}, {link: w.link || this._data.link, meta: w.meta || this._data.meta})
    }

    get data() {
      return this._data
    }

    get CSS() {
      return {
        baseClass: this.api.styles.block,
        input: this.api.styles.input,
        container: "link-tool",
        inputEl: "link-tool__input",
        inputHolder: "link-tool__input-holder",
        inputError: "link-tool__input-holder--error",
        linkContent: "link-tool__content",
        linkContentRendered: "link-tool__content--rendered",
        linkImage: "link-tool__image",
        linkTitle: "link-tool__title",
        linkDescription: "link-tool__description",
        linkText: "link-tool__anchor",
        progress: "link-tool__progress",
        progressLoading: "link-tool__progress--loading",
        progressLoaded: "link-tool__progress--loaded"
      }
    }

    makeInputHolder() {
      const w = this.make("div", this.CSS.inputHolder);
      return this.nodes.progress = this.make("label", this.CSS.progress), this.nodes.input = this.make("div", [this.CSS.input, this.CSS.inputEl], {contentEditable: !this.readOnly}), this.nodes.input.dataset.placeholder = this.api.i18n.t("Link"), this.readOnly || (this.nodes.input.addEventListener("paste", d => {
        this.startFetching(d)
      }), this.nodes.input.addEventListener("keydown", d => {
        const [v, c] = [13, 65], i = d.ctrlKey || d.metaKey;
        switch (d.keyCode) {
          case v:
            d.preventDefault(), d.stopPropagation(), this.startFetching(d);
            break;
          case c:
            i && this.selectLinkUrl(d);
            break
        }
      })), w.appendChild(this.nodes.progress), w.appendChild(this.nodes.input), w
    }

    startFetching(w) {
      let d = this.nodes.input.textContent;
      w.type === "paste" && (d = (w.clipboardData || window.clipboardData).getData("text")), this.removeErrorStyle(), this.fetchLinkData(d)
    }

    removeErrorStyle() {
      this.nodes.inputHolder.classList.remove(this.CSS.inputError), this.nodes.inputHolder.insertBefore(this.nodes.progress, this.nodes.input)
    }

    selectLinkUrl(w) {
      w.preventDefault(), w.stopPropagation();
      const d = window.getSelection(), v = new Range,
        s = d.anchorNode.parentNode.closest(`.${this.CSS.inputHolder}`).querySelector(`.${this.CSS.inputEl}`);
      v.selectNodeContents(s), d.removeAllRanges(), d.addRange(v)
    }

    prepareLinkPreview() {
      const w = this.make("a", this.CSS.linkContent, {target: "_blank", rel: "nofollow noindex noreferrer"});
      return this.nodes.linkImage = this.make("div", this.CSS.linkImage), this.nodes.linkTitle = this.make("div", this.CSS.linkTitle), this.nodes.linkDescription = this.make("p", this.CSS.linkDescription), this.nodes.linkText = this.make("span", this.CSS.linkText), w
    }

    showLinkPreview({image: w, title: d, description: v}) {
      this.nodes.container.appendChild(this.nodes.linkContent), w && w.url && (this.nodes.linkImage.style.backgroundImage = "url(" + w.url + ")", this.nodes.linkContent.appendChild(this.nodes.linkImage)), d && (this.nodes.linkTitle.textContent = d, this.nodes.linkContent.appendChild(this.nodes.linkTitle)), v && (this.nodes.linkDescription.textContent = v, this.nodes.linkContent.appendChild(this.nodes.linkDescription)), this.nodes.linkContent.classList.add(this.CSS.linkContentRendered), this.nodes.linkContent.setAttribute("href", this.data.link), this.nodes.linkContent.appendChild(this.nodes.linkText);
      try {
        this.nodes.linkText.textContent = new URL(this.data.link).hostname
      } catch {
        this.nodes.linkText.textContent = this.data.link
      }
    }

    showProgress() {
      this.nodes.progress.classList.add(this.CSS.progressLoading)
    }

    hideProgress() {
      return new Promise(w => {
        this.nodes.progress.classList.remove(this.CSS.progressLoading), this.nodes.progress.classList.add(this.CSS.progressLoaded), setTimeout(w, 500)
      })
    }

    applyErrorStyle() {
      this.nodes.inputHolder.classList.add(this.CSS.inputError), this.nodes.progress.remove()
    }

    async fetchLinkData(w) {
      this.showProgress(), this.data = {link: w};
      try {
        const {body: d} = await F.get({url: this.config.endpoint, headers: this.config.headers, data: {url: w}});
        this.onFetch(d)
      } catch {
        this.fetchingFailed(this.api.i18n.t("Couldn't fetch the link data"))
      }
    }

    onFetch(w) {
      if (!w || !w.success) {
        this.fetchingFailed(this.api.i18n.t("Couldn't get this link data, try the other one"));
        return
      }
      const d = w.meta, v = w.link || this.data.link;
      if (this.data = {meta: d, link: v}, !d) {
        this.fetchingFailed(this.api.i18n.t("Wrong response format from the server"));
        return
      }
      this.hideProgress().then(() => {
        this.nodes.inputHolder.remove(), this.showLinkPreview(d)
      })
    }

    fetchingFailed(w) {
      this.api.notifier.show({message: w, style: "error"}), this.applyErrorStyle()
    }

    make(w, d = null, v = {}) {
      const c = document.createElement(w);
      Array.isArray(d) ? c.classList.add(...d) : d && c.classList.add(d);
      for (const i in v) c[i] = v[i];
      return c
    }
  }

  return x
});
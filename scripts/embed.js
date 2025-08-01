/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@editorjs/embed@2.7.6/dist/embed.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode('.embed-tool--loading .embed-tool__caption{display:none}.embed-tool--loading .embed-tool__preloader{display:block}.embed-tool--loading .embed-tool__content{display:none}.embed-tool__preloader{display:none;position:relative;height:200px;box-sizing:border-box;border-radius:5px;border:1px solid #e6e9eb}.embed-tool__preloader:before{content:"";position:absolute;z-index:3;left:50%;top:50%;width:30px;height:30px;margin-top:-25px;margin-left:-15px;border-radius:50%;border:2px solid #cdd1e0;border-top-color:#388ae5;box-sizing:border-box;animation:embed-preloader-spin 2s infinite linear}.embed-tool__url{position:absolute;bottom:20px;left:50%;transform:translate(-50%);max-width:250px;color:#7b7e89;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.embed-tool__content{width:100%}.embed-tool__caption{margin-top:7px}.embed-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:before{opacity:1}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}@keyframes embed-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')), document.head.appendChild(e)
    }
  } catch (o) {
    console.error("vite-plugin-css-injected-by-js", o)
  }
})();
(function (c, u) {
  typeof exports == "object" && typeof module < "u" ? module.exports = u() : typeof define == "function" && define.amd ? define(u) : (c = typeof globalThis < "u" ? globalThis : c || self, c.Embed = u())
})(this, function () {
  "use strict";
  const c = {
    vimeo: {
      regex: /(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,
      embedUrl: "https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",
      html: '<iframe style="width:100%;" height="320" frameborder="0"></iframe>',
      height: 320,
      width: 580
    },
    youtube: {
      regex: /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,
      embedUrl: "https://www.youtube.com/embed/<%= remote_id %>",
      html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
      height: 320,
      width: 580,
      id: ([n, i]) => {
        if (!i && n) return n;
        const r = {start: "start", end: "end", t: "start", time_continue: "start", list: "list"};
        let e = i.slice(1).split("&").map(o => {
          const [l, t] = o.split("=");
          return !n && l === "v" ? (n = t, null) : !r[l] || t === "LL" || t.startsWith("RDMM") || t.startsWith("FL") ? null : `${r[l]}=${t}`
        }).filter(o => !!o);
        return n + "?" + e.join("&")
      }
    },
    coub: {
      regex: /https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,
      embedUrl: "https://coub.com/embed/<%= remote_id %>",
      html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
      height: 320,
      width: 580
    },
    vine: {
      regex: /https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,
      embedUrl: "https://vine.co/v/<%= remote_id %>/embed/simple/",
      html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
      height: 320,
      width: 580
    },
    imgur: {
      regex: /https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,
      embedUrl: "http://imgur.com/<%= remote_id %>/embed",
      html: '<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',
      height: 500,
      width: 540
    },
    gfycat: {
      regex: /https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,
      embedUrl: "https://gfycat.com/ifr/<%= remote_id %>",
      html: `<iframe frameborder='0' scrolling='no' style="width:100%;" height='436' allowfullscreen ></iframe>`,
      height: 436,
      width: 580
    },
    "twitch-channel": {
      regex: /https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,
      embedUrl: "https://player.twitch.tv/?channel=<%= remote_id %>",
      html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
      height: 366,
      width: 600
    },
    "twitch-video": {
      regex: /https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,
      embedUrl: "https://player.twitch.tv/?video=v<%= remote_id %>",
      html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
      height: 366,
      width: 600
    },
    "yandex-music-album": {
      regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,
      embedUrl: "https://music.yandex.ru/iframe/#album/<%= remote_id %>/",
      html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',
      height: 400,
      width: 540
    },
    "yandex-music-track": {
      regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,
      embedUrl: "https://music.yandex.ru/iframe/#track/<%= remote_id %>/",
      html: '<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',
      height: 100,
      width: 540,
      id: n => n.join("/")
    },
    "yandex-music-playlist": {
      regex: /https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,
      embedUrl: "https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",
      html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',
      height: 400,
      width: 540,
      id: n => n.join("/")
    },
    codepen: {
      regex: /https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
      embedUrl: "https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
      html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
      height: 300,
      width: 600,
      id: n => n.join("/embed/")
    },
    instagram: {
      regex: /^https:\/\/(?:www\.)?instagram\.com\/(?:reel|p)\/(.*)/,
      embedUrl: "https://www.instagram.com/p/<%= remote_id %>/embed",
      html: '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
      height: 505,
      width: 400,
      id: n => {
        var i;
        return (i = n == null ? void 0 : n[0]) == null ? void 0 : i.split("/")[0]
      }
    },
    twitter: {
      regex: /^https?:\/\/(www\.)?(?:twitter\.com|x\.com)\/.+\/status\/(\d+)/,
      embedUrl: "https://platform.twitter.com/embed/Tweet.html?id=<%= remote_id %>",
      html: '<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
      height: 300,
      width: 600,
      id: n => n[1]
    },
    pinterest: {
      regex: /https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,
      embedUrl: "https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>",
      html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",
      id: n => n[1]
    },
    facebook: {
      regex: /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",
      html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",
      id: n => n.join("/")
    },
    aparat: {
      regex: /(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame",
      html: '<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
      height: 300,
      width: 600
    },
    miro: {
      regex: /https:\/\/miro.com\/\S+(\S{12})\/(\S+)?/,
      embedUrl: "https://miro.com/app/live-embed/<%= remote_id %>",
      html: '<iframe width="700" height="500" style="margin: 0 auto;" allowFullScreen frameBorder="0" scrolling="no"></iframe>'
    },
    github: {
      regex: /https?:\/\/gist.github.com\/([^\/\?\&]*)\/([^\/\?\&]*)/,
      embedUrl: 'data:text/html;charset=utf-8,<head><base target="_blank" /></head><body><script src="https://gist.github.com/<%= remote_id %>" ><\/script></body>',
      html: '<iframe width="100%" height="350" frameborder="0" style="margin: 0 auto;"></iframe>',
      height: 300,
      width: 600,
      id: n => `${n.join("/")}.js`
    }
  }, u = "";

  function f(n, i, r) {
    var e, o, l, t, a;
    i == null && (i = 100);

    function s() {
      var d = Date.now() - t;
      d < i && d >= 0 ? e = setTimeout(s, i - d) : (e = null, r || (a = n.apply(l, o), l = o = null))
    }

    var h = function () {
      l = this, o = arguments, t = Date.now();
      var d = r && !e;
      return e || (e = setTimeout(s, i)), d && (a = n.apply(l, o), l = o = null), a
    };
    return h.clear = function () {
      e && (clearTimeout(e), e = null)
    }, h.flush = function () {
      e && (a = n.apply(l, o), l = o = null, clearTimeout(e), e = null)
    }, h
  }

  f.debounce = f;
  var g = f;

  class m {
    constructor({data: i, api: r, readOnly: e}) {
      this.api = r, this._data = {}, this.element = null, this.readOnly = e, this.data = i
    }

    set data(i) {
      var h;
      if (!(i instanceof Object)) throw Error("Embed Tool data should be object");
      const {service: r, source: e, embed: o, width: l, height: t, caption: a = ""} = i;
      this._data = {
        service: r || this.data.service,
        source: e || this.data.source,
        embed: o || this.data.embed,
        width: l || this.data.width,
        height: t || this.data.height,
        caption: a || this.data.caption || ""
      };
      const s = this.element;
      s && ((h = s.parentNode) == null || h.replaceChild(this.render(), s))
    }

    get data() {
      if (this.element) {
        const i = this.element.querySelector(`.${this.api.styles.input}`);
        this._data.caption = i ? i.innerHTML : ""
      }
      return this._data
    }

    get CSS() {
      return {
        baseClass: this.api.styles.block,
        input: this.api.styles.input,
        container: "embed-tool",
        containerLoading: "embed-tool--loading",
        preloader: "embed-tool__preloader",
        caption: "embed-tool__caption",
        url: "embed-tool__url",
        content: "embed-tool__content"
      }
    }

    render() {
      if (!this.data.service) {
        const a = document.createElement("div");
        return this.element = a, a
      }
      const {html: i} = m.services[this.data.service], r = document.createElement("div"),
        e = document.createElement("div"), o = document.createElement("template"), l = this.createPreloader();
      r.classList.add(this.CSS.baseClass, this.CSS.container, this.CSS.containerLoading), e.classList.add(this.CSS.input, this.CSS.caption), r.appendChild(l), e.contentEditable = (!this.readOnly).toString(), e.dataset.placeholder = this.api.i18n.t("Enter a caption"), e.innerHTML = this.data.caption || "", o.innerHTML = i, o.content.firstChild.setAttribute("src", this.data.embed), o.content.firstChild.classList.add(this.CSS.content);
      const t = this.embedIsReady(r);
      return o.content.firstChild && r.appendChild(o.content.firstChild), r.appendChild(e), t.then(() => {
        r.classList.remove(this.CSS.containerLoading)
      }), this.element = r, r
    }

    createPreloader() {
      const i = document.createElement("preloader"), r = document.createElement("div");
      return r.textContent = this.data.source, i.classList.add(this.CSS.preloader), r.classList.add(this.CSS.url), i.appendChild(r), i
    }

    save() {
      return this.data
    }

    onPaste(i) {
      var p;
      const {key: r, data: e} = i.detail, {
          regex: o,
          embedUrl: l,
          width: t,
          height: a,
          id: s = b => b.shift() || ""
        } = m.services[r], h = (p = o.exec(e)) == null ? void 0 : p.slice(1),
        d = h ? l.replace(/<%= remote_id %>/g, s(h)) : "";
      this.data = {service: r, source: e, embed: d, width: t, height: a}
    }

    static prepare({config: i = {}}) {
      const {services: r = {}} = i;
      let e = Object.entries(c);
      const o = Object.entries(r).filter(([t, a]) => typeof a == "boolean" && a === !0).map(([t]) => t),
        l = Object.entries(r).filter(([t, a]) => typeof a == "object").filter(([t, a]) => m.checkServiceConfig(a)).map(([t, a]) => {
          const {regex: s, embedUrl: h, html: d, height: p, width: b, id: w} = a;
          return [t, {regex: s, embedUrl: h, html: d, height: p, width: b, id: w}]
        });
      o.length && (e = e.filter(([t]) => o.includes(t))), e = e.concat(l), m.services = e.reduce((t, [a, s]) => a in t ? (t[a] = Object.assign({}, t[a], s), t) : (t[a] = s, t), {}), m.patterns = e.reduce((t, [a, s]) => (s && typeof s != "boolean" && (t[a] = s.regex), t), {})
    }

    static checkServiceConfig(i) {
      const {regex: r, embedUrl: e, html: o, height: l, width: t, id: a} = i;
      let s = !!(r && r instanceof RegExp) && !!(e && typeof e == "string") && !!(o && typeof o == "string");
      return s = s && (a !== void 0 ? a instanceof Function : !0), s = s && (l !== void 0 ? Number.isFinite(l) : !0), s = s && (t !== void 0 ? Number.isFinite(t) : !0), s
    }

    static get pasteConfig() {
      return {patterns: m.patterns}
    }

    static get isReadOnlySupported() {
      return !0
    }

    embedIsReady(i) {
      let e;
      return new Promise((o, l) => {
        e = new MutationObserver(g.debounce(o, 450)), e.observe(i, {childList: !0, subtree: !0})
      }).then(() => {
        e.disconnect()
      })
    }
  }

  return m
});
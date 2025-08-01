/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@editorjs/raw@2.5.1/dist/raw.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".ce-rawtool__textarea{min-height:200px;resize:vertical;border-radius:8px;border:0;background-color:#1e2128;font-family:Menlo,Monaco,Consolas,Courier New,monospace;font-size:12px;line-height:1.6;letter-spacing:-.2px;color:#a1a7b6;overscroll-behavior:contain}")), document.head.appendChild(e)
    }
  } catch (o) {
    console.error("vite-plugin-css-injected-by-js", o)
  }
})();
(function (s, t) {
  typeof exports == "object" && typeof module < "u" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (s = typeof globalThis < "u" ? globalThis : s || self, s.RawTool = t())
})(this, function () {
  "use strict";
  const s = "",
    t = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.6954 5C17.912 5 18.8468 6.07716 18.6755 7.28165L17.426 16.0659C17.3183 16.8229 16.7885 17.4522 16.061 17.6873L12.6151 18.8012C12.2152 18.9304 11.7848 18.9304 11.3849 18.8012L7.93898 17.6873C7.21148 17.4522 6.6817 16.8229 6.57403 16.0659L5.32454 7.28165C5.15322 6.07716 6.088 5 7.30461 5H16.6954Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8.4H9L9.42857 11.7939H14.5714L14.3571 13.2788L14.1429 14.7636L12 15.4L9.85714 14.7636L9.77143 14.3394"/></svg>';

  /**
   * Raw HTML Tool for CodeX Editor
   *
   * @author CodeX (team@codex.so)
   * @copyright CodeX 2018
   * @license The MIT License (MIT)
   */
  class i {
    static get isReadOnlySupported() {
      return !0
    }

    static get displayInToolbox() {
      return !0
    }

    static get enableLineBreaks() {
      return !0
    }

    static get toolbox() {
      return {icon: t, title: "Raw HTML"}
    }

    constructor({data: e, config: r, api: a, readOnly: n}) {
      this.api = a, this.readOnly = n, this.placeholder = a.i18n.t(r.placeholder || i.DEFAULT_PLACEHOLDER), this.CSS = {
        baseClass: this.api.styles.block,
        input: this.api.styles.input,
        wrapper: "ce-rawtool",
        textarea: "ce-rawtool__textarea"
      }, this.data = {html: e.html || ""}, this.textarea = null, this.resizeDebounce = null
    }

    render() {
      const e = document.createElement("div"), r = 100;
      return this.textarea = document.createElement("textarea"), e.classList.add(this.CSS.baseClass, this.CSS.wrapper), this.textarea.classList.add(this.CSS.textarea, this.CSS.input), this.textarea.textContent = this.data.html, this.textarea.placeholder = this.placeholder, this.readOnly ? this.textarea.disabled = !0 : this.textarea.addEventListener("input", () => {
        this.onInput()
      }), e.appendChild(this.textarea), setTimeout(() => {
        this.resize()
      }, r), e
    }

    save(e) {
      return {html: e.querySelector("textarea").value}
    }

    static get DEFAULT_PLACEHOLDER() {
      return "Enter HTML code"
    }

    static get sanitize() {
      return {html: !0}
    }

    onInput() {
      this.resizeDebounce && clearTimeout(this.resizeDebounce), this.resizeDebounce = setTimeout(() => {
        this.resize()
      }, 200)
    }

    resize() {
      this.textarea.style.height = "auto", this.textarea.style.height = this.textarea.scrollHeight + "px"
    }
  }

  return i
});
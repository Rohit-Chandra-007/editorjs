/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@editorjs/underline@1.2.1/dist/underline.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".cdx-underline{text-decoration:underline}")), document.head.appendChild(e)
    }
  } catch (n) {
    console.error("vite-plugin-css-injected-by-js", n)
  }
})();
(function (i, n) {
  typeof exports == "object" && typeof module < "u" ? module.exports = n() : typeof define == "function" && define.amd ? define(n) : (i = typeof globalThis < "u" ? globalThis : i || self, i.Underline = n())
})(this, function () {
  "use strict";
  const i = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7.5V11.5C9 12.2956 9.31607 13.0587 9.87868 13.6213C10.4413 14.1839 11.2044 14.5 12 14.5C12.7956 14.5 13.5587 14.1839 14.1213 13.6213C14.6839 13.0587 15 12.2956 15 11.5V7.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.71429 18H16.2857"/></svg>',
    s = class s {
      constructor(e) {
        this.tag = "U", this.api = e.api, this.iconClasses = {
          base: this.api.styles.inlineToolButton,
          active: this.api.styles.inlineToolButtonActive
        }
      }

      static get CSS() {
        return "cdx-underline"
      }

      render() {
        return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base), this.button.innerHTML = this.toolboxIcon, this.button
      }

      surround(e) {
        if (!e) return;
        const t = this.api.selection.findParentTag(this.tag, s.CSS);
        t ? this.unwrap(t) : this.wrap(e)
      }

      wrap(e) {
        const t = document.createElement(this.tag);
        t.classList.add(s.CSS), t.appendChild(e.extractContents()), e.insertNode(t), this.api.selection.expandToTag(t)
      }

      unwrap(e) {
        var a;
        this.api.selection.expandToTag(e);
        const t = window.getSelection();
        if (!t) return;
        const o = t.getRangeAt(0);
        if (!o) return;
        const r = o.extractContents();
        r && ((a = e.parentNode) == null || a.removeChild(e), o.insertNode(r), t.removeAllRanges(), t.addRange(o))
      }

      checkState() {
        var t;
        const e = this.api.selection.findParentTag(this.tag, s.CSS);
        return (t = this.button) == null || t.classList.toggle(this.iconClasses.active, !!e), !!e
      }

      get toolboxIcon() {
        return i
      }

      static get sanitize() {
        return {u: {class: s.CSS}}
      }
    };
  s.isInline = !0;
  let n = s;
  return n
});
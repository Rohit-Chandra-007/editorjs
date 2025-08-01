/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@editorjs/table@2.4.5/dist/table.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
(function () {
  var r;
  "use strict";
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.nonce = (r = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : r.content, o.appendChild(document.createTextNode('.tc-wrap{--color-background:#f9f9fb;--color-text-secondary:#7b7e89;--color-border:#e8e8eb;--cell-size:34px;--toolbox-icon-size:18px;--toolbox-padding:6px;--toolbox-aiming-field-size:calc(var(--toolbox-icon-size) + var(--toolbox-padding)*2);border-left:0;position:relative;height:100%;width:100%;margin-top:var(--toolbox-icon-size);box-sizing:border-box;display:grid;grid-template-columns:calc(100% - var(--cell-size)) var(--cell-size);z-index:0}.tc-wrap--readonly{grid-template-columns:100% var(--cell-size)}.tc-wrap svg{vertical-align:top}@media print{.tc-wrap{border-left-color:var(--color-border);border-left-style:solid;border-left-width:1px;grid-template-columns:100% var(--cell-size)}}@media print{.tc-wrap .tc-row:after{display:none}}.tc-table{position:relative;width:100%;height:100%;display:grid;font-size:14px;border-top:1px solid var(--color-border);line-height:1.4}.tc-table:after{width:calc(var(--cell-size));height:100%;left:calc(var(--cell-size)*-1);top:0}.tc-table:after,.tc-table:before{position:absolute;content:""}.tc-table:before{width:100%;height:var(--toolbox-aiming-field-size);top:calc(var(--toolbox-aiming-field-size)*-1);left:0}.tc-table--heading .tc-row:first-child{font-weight:600;border-bottom:2px solid var(--color-border);position:sticky;top:0;z-index:2;background:var(--color-background)}.tc-table--heading .tc-row:first-child [contenteditable]:empty:before{content:attr(heading);color:var(--color-text-secondary)}.tc-table--heading .tc-row:first-child:after{bottom:-2px;border-bottom:2px solid var(--color-border)}.tc-add-column,.tc-add-row{display:flex;color:var(--color-text-secondary)}@media print{.tc-add{display:none}}.tc-add-column{display:grid;border-top:1px solid var(--color-border);grid-template-columns:var(--cell-size);grid-auto-rows:var(--cell-size);place-items:center}.tc-add-column svg{padding:5px;position:sticky;top:0;background-color:var(--color-background)}.tc-add-column--disabled{visibility:hidden}@media print{.tc-add-column{display:none}}.tc-add-row{height:var(--cell-size);align-items:center;padding-left:4px;position:relative}.tc-add-row--disabled{display:none}.tc-add-row:before{content:"";position:absolute;right:calc(var(--cell-size)*-1);width:var(--cell-size);height:100%}@media print{.tc-add-row{display:none}}.tc-add-column,.tc-add-row{transition:0s;cursor:pointer;will-change:background-color}.tc-add-column:hover,.tc-add-row:hover{transition:background-color .1s ease;background-color:var(--color-background)}.tc-add-row{margin-top:1px}.tc-add-row:hover:before{transition:.1s;background-color:var(--color-background)}.tc-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(10px,1fr));position:relative;border-bottom:1px solid var(--color-border)}.tc-row:after{content:"";pointer-events:none;position:absolute;width:var(--cell-size);height:100%;bottom:-1px;right:calc(var(--cell-size)*-1);border-bottom:1px solid var(--color-border)}.tc-row--selected{background:var(--color-background)}.tc-row--selected:after{background:var(--color-background)}.tc-cell{border-right:1px solid var(--color-border);padding:6px 12px;overflow:hidden;outline:none;line-break:normal}.tc-cell--selected{background:var(--color-background)}.tc-wrap--readonly .tc-row:after{display:none}.tc-toolbox{--toolbox-padding:6px;--popover-margin:30px;--toggler-click-zone-size:30px;--toggler-dots-color:#7b7e89;--toggler-dots-color-hovered:#1d202b;position:absolute;cursor:pointer;z-index:1;opacity:0;transition:opacity .1s;will-change:left,opacity}.tc-toolbox--column{top:calc(var(--toggler-click-zone-size)*-1);transform:translate(calc(var(--toggler-click-zone-size)*-1/2));will-change:left,opacity}.tc-toolbox--row{left:calc(var(--popover-margin)*-1);transform:translateY(calc(var(--toggler-click-zone-size)*-1/2));margin-top:-1px;will-change:top,opacity}.tc-toolbox--showed{opacity:1}.tc-toolbox .tc-popover{position:absolute;top:0;left:var(--popover-margin)}.tc-toolbox__toggler{display:flex;align-items:center;justify-content:center;width:var(--toggler-click-zone-size);height:var(--toggler-click-zone-size);color:var(--toggler-dots-color);opacity:0;transition:opacity .15s ease;will-change:opacity}.tc-toolbox__toggler:hover{color:var(--toggler-dots-color-hovered)}.tc-toolbox__toggler svg{fill:currentColor}.tc-wrap:hover .tc-toolbox__toggler{opacity:1}.tc-settings .cdx-settings-button{width:50%;margin:0}.tc-popover{--color-border:#eaeaea;--color-background:#fff;--color-background-hover:rgba(232,232,235,.49);--color-background-confirm:#e24a4a;--color-background-confirm-hover:#d54040;--color-text-confirm:#fff;background:var(--color-background);border:1px solid var(--color-border);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;padding:6px;display:none;will-change:opacity,transform}.tc-popover--opened{display:block;animation:menuShowing .1s cubic-bezier(.215,.61,.355,1) forwards}.tc-popover__item{display:flex;align-items:center;padding:2px 14px 2px 2px;border-radius:5px;cursor:pointer;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;user-select:none}.tc-popover__item:hover{background:var(--color-background-hover)}.tc-popover__item:not(:last-of-type){margin-bottom:2px}.tc-popover__item-icon{display:inline-flex;width:26px;height:26px;align-items:center;justify-content:center;background:var(--color-background);border-radius:5px;border:1px solid var(--color-border);margin-right:8px}.tc-popover__item-label{line-height:22px;font-size:14px;font-weight:500}.tc-popover__item--confirm{background:var(--color-background-confirm);color:var(--color-text-confirm)}.tc-popover__item--confirm:hover{background-color:var(--color-background-confirm-hover)}.tc-popover__item--confirm .tc-popover__item-icon{background:var(--color-background-confirm);border-color:#0000001a}.tc-popover__item--confirm .tc-popover__item-icon svg{transition:transform .2s ease-in;transform:rotate(90deg) scale(1.2)}.tc-popover__item--hidden{display:none}@keyframes menuShowing{0%{opacity:0;transform:translateY(-8px) scale(.9)}70%{opacity:1;transform:translateY(2px)}to{transform:translateY(0)}}')), document.head.appendChild(o)
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e)
  }
})();
(function (d, p) {
  typeof exports == "object" && typeof module < "u" ? module.exports = p() : typeof define == "function" && define.amd ? define(p) : (d = typeof globalThis < "u" ? globalThis : d || self, d.Table = p())
})(this, function () {
  "use strict";

  function d(a, t, e = {}) {
    const o = document.createElement(a);
    Array.isArray(t) ? o.classList.add(...t) : t && o.classList.add(t);
    for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (o[i] = e[i]);
    return o
  }

  function p(a) {
    const t = a.getBoundingClientRect();
    return {
      y1: Math.floor(t.top + window.pageYOffset),
      x1: Math.floor(t.left + window.pageXOffset),
      x2: Math.floor(t.right + window.pageXOffset),
      y2: Math.floor(t.bottom + window.pageYOffset)
    }
  }

  function g(a, t) {
    const e = p(a), o = p(t);
    return {
      fromTopBorder: o.y1 - e.y1,
      fromLeftBorder: o.x1 - e.x1,
      fromRightBorder: e.x2 - o.x2,
      fromBottomBorder: e.y2 - o.y2
    }
  }

  function k(a, t) {
    const e = a.getBoundingClientRect(), {width: o, height: i, x: n, y: r} = e, {clientX: h, clientY: l} = t;
    return {width: o, height: i, x: h - n, y: l - r}
  }

  function m(a, t) {
    return t.parentNode.insertBefore(a, t)
  }

  function C(a, t = !0) {
    const e = document.createRange(), o = window.getSelection();
    e.selectNodeContents(a), e.collapse(t), o.removeAllRanges(), o.addRange(e)
  }

  class c {
    constructor({items: t}) {
      this.items = t, this.wrapper = void 0, this.itemEls = []
    }

    static get CSS() {
      return {
        popover: "tc-popover",
        popoverOpened: "tc-popover--opened",
        item: "tc-popover__item",
        itemHidden: "tc-popover__item--hidden",
        itemConfirmState: "tc-popover__item--confirm",
        itemIcon: "tc-popover__item-icon",
        itemLabel: "tc-popover__item-label"
      }
    }

    render() {
      return this.wrapper = d("div", c.CSS.popover), this.items.forEach((t, e) => {
        const o = d("div", c.CSS.item), i = d("div", c.CSS.itemIcon, {innerHTML: t.icon}),
          n = d("div", c.CSS.itemLabel, {textContent: t.label});
        o.dataset.index = e, o.appendChild(i), o.appendChild(n), this.wrapper.appendChild(o), this.itemEls.push(o)
      }), this.wrapper.addEventListener("click", t => {
        this.popoverClicked(t)
      }), this.wrapper
    }

    popoverClicked(t) {
      const e = t.target.closest(`.${c.CSS.item}`);
      if (!e) return;
      const o = e.dataset.index, i = this.items[o];
      if (i.confirmationRequired && !this.hasConfirmationState(e)) {
        this.setConfirmationState(e);
        return
      }
      i.onClick()
    }

    setConfirmationState(t) {
      t.classList.add(c.CSS.itemConfirmState)
    }

    clearConfirmationState(t) {
      t.classList.remove(c.CSS.itemConfirmState)
    }

    hasConfirmationState(t) {
      return t.classList.contains(c.CSS.itemConfirmState)
    }

    get opened() {
      return this.wrapper.classList.contains(c.CSS.popoverOpened)
    }

    open() {
      this.items.forEach((t, e) => {
        typeof t.hideIf == "function" && this.itemEls[e].classList.toggle(c.CSS.itemHidden, t.hideIf())
      }), this.wrapper.classList.add(c.CSS.popoverOpened)
    }

    close() {
      this.wrapper.classList.remove(c.CSS.popoverOpened), this.itemEls.forEach(t => {
        this.clearConfirmationState(t)
      })
    }
  }

  const R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L10 12M10 12L7 15M10 12H4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L14 12M14 12L17 15M14 12H20"/></svg>',
    b = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>',
    x = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 9.16666L18.2167 12.5M18.2167 12.5L14.8833 15.8333M18.2167 12.5H10.05C9.16594 12.5 8.31809 12.1488 7.69297 11.5237C7.06785 10.8986 6.71666 10.0507 6.71666 9.16666"/></svg>',
    S = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.9167 14.9167L11.5833 18.25M11.5833 18.25L8.25 14.9167M11.5833 18.25L11.5833 10.0833C11.5833 9.19928 11.9345 8.35143 12.5596 7.72631C13.1848 7.10119 14.0326 6.75 14.9167 6.75"/></svg>',
    y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.13333 14.9167L12.4667 18.25M12.4667 18.25L15.8 14.9167M12.4667 18.25L12.4667 10.0833C12.4667 9.19928 12.1155 8.35143 11.4904 7.72631C10.8652 7.10119 10.0174 6.75 9.13333 6.75"/></svg>',
    L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 15.8333L18.2167 12.5M18.2167 12.5L14.8833 9.16667M18.2167 12.5L10.05 12.5C9.16595 12.5 8.31811 12.8512 7.69299 13.4763C7.06787 14.1014 6.71667 14.9493 6.71667 15.8333"/></svg>',
    M = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.41 9.66H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 9.66H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.31 14.36H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 14.36H14.59"/></svg>',
    v = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>',
    O = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>',
    T = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>',
    H = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M14 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><path stroke="currentColor" stroke-width="2" d="M5 14H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>',
    A = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';

  class w {
    constructor({api: t, items: e, onOpen: o, onClose: i, cssModifier: n = ""}) {
      this.api = t, this.items = e, this.onOpen = o, this.onClose = i, this.cssModifier = n, this.popover = null, this.wrapper = this.createToolbox()
    }

    static get CSS() {
      return {toolbox: "tc-toolbox", toolboxShowed: "tc-toolbox--showed", toggler: "tc-toolbox__toggler"}
    }

    get element() {
      return this.wrapper
    }

    createToolbox() {
      const t = d("div", [w.CSS.toolbox, this.cssModifier ? `${w.CSS.toolbox}--${this.cssModifier}` : ""]);
      t.dataset.mutationFree = "true";
      const e = this.createPopover(), o = this.createToggler();
      return t.appendChild(o), t.appendChild(e), t
    }

    createToggler() {
      const t = d("div", w.CSS.toggler, {innerHTML: M});
      return t.addEventListener("click", () => {
        this.togglerClicked()
      }), t
    }

    createPopover() {
      return this.popover = new c({items: this.items}), this.popover.render()
    }

    togglerClicked() {
      this.popover.opened ? (this.popover.close(), this.onClose()) : (this.popover.open(), this.onOpen())
    }

    show(t) {
      const e = t();
      Object.entries(e).forEach(([o, i]) => {
        this.wrapper.style[o] = i
      }), this.wrapper.classList.add(w.CSS.toolboxShowed)
    }

    hide() {
      this.popover.close(), this.wrapper.classList.remove(w.CSS.toolboxShowed)
    }
  }

  function B(a, t) {
    let e = 0;
    return function (...o) {
      const i = new Date().getTime();
      if (!(i - e < a)) return e = i, t(...o)
    }
  }

  const s = {
    wrapper: "tc-wrap",
    wrapperReadOnly: "tc-wrap--readonly",
    table: "tc-table",
    row: "tc-row",
    withHeadings: "tc-table--heading",
    rowSelected: "tc-row--selected",
    cell: "tc-cell",
    cellSelected: "tc-cell--selected",
    addRow: "tc-add-row",
    addRowDisabled: "tc-add-row--disabled",
    addColumn: "tc-add-column",
    addColumnDisabled: "tc-add-column--disabled"
  };

  class E {
    constructor(t, e, o, i) {
      this.readOnly = t, this.api = e, this.data = o, this.config = i, this.wrapper = null, this.table = null, this.toolboxColumn = this.createColumnToolbox(), this.toolboxRow = this.createRowToolbox(), this.createTableWrapper(), this.hoveredRow = 0, this.hoveredColumn = 0, this.selectedRow = 0, this.selectedColumn = 0, this.tunes = {withHeadings: !1}, this.resize(), this.fill(), this.focusedCell = {
        row: 0,
        column: 0
      }, this.documentClicked = n => {
        const r = n.target.closest(`.${s.table}`) !== null, h = n.target.closest(`.${s.wrapper}`) === null;
        (r || h) && this.hideToolboxes();
        const u = n.target.closest(`.${s.addRow}`), f = n.target.closest(`.${s.addColumn}`);
        u && u.parentNode === this.wrapper ? (this.addRow(void 0, !0), this.hideToolboxes()) : f && f.parentNode === this.wrapper && (this.addColumn(void 0, !0), this.hideToolboxes())
      }, this.readOnly || this.bindEvents()
    }

    getWrapper() {
      return this.wrapper
    }

    bindEvents() {
      document.addEventListener("click", this.documentClicked), this.table.addEventListener("mousemove", B(150, t => this.onMouseMoveInTable(t)), {passive: !0}), this.table.onkeypress = t => this.onKeyPressListener(t), this.table.addEventListener("keydown", t => this.onKeyDownListener(t)), this.table.addEventListener("focusin", t => this.focusInTableListener(t))
    }

    createColumnToolbox() {
      return new w({
        api: this.api,
        cssModifier: "column",
        items: [{
          label: this.api.i18n.t("Add column to left"),
          icon: S,
          hideIf: () => this.numberOfColumns === this.config.maxcols,
          onClick: () => {
            this.addColumn(this.selectedColumn, !0), this.hideToolboxes()
          }
        }, {
          label: this.api.i18n.t("Add column to right"),
          icon: y,
          hideIf: () => this.numberOfColumns === this.config.maxcols,
          onClick: () => {
            this.addColumn(this.selectedColumn + 1, !0), this.hideToolboxes()
          }
        }, {
          label: this.api.i18n.t("Delete column"),
          icon: b,
          hideIf: () => this.numberOfColumns === 1,
          confirmationRequired: !0,
          onClick: () => {
            this.deleteColumn(this.selectedColumn), this.hideToolboxes()
          }
        }],
        onOpen: () => {
          this.selectColumn(this.hoveredColumn), this.hideRowToolbox()
        },
        onClose: () => {
          this.unselectColumn()
        }
      })
    }

    createRowToolbox() {
      return new w({
        api: this.api,
        cssModifier: "row",
        items: [{
          label: this.api.i18n.t("Add row above"),
          icon: L,
          hideIf: () => this.numberOfRows === this.config.maxrows,
          onClick: () => {
            this.addRow(this.selectedRow, !0), this.hideToolboxes()
          }
        }, {
          label: this.api.i18n.t("Add row below"),
          icon: x,
          hideIf: () => this.numberOfRows === this.config.maxrows,
          onClick: () => {
            this.addRow(this.selectedRow + 1, !0), this.hideToolboxes()
          }
        }, {
          label: this.api.i18n.t("Delete row"),
          icon: b,
          hideIf: () => this.numberOfRows === 1,
          confirmationRequired: !0,
          onClick: () => {
            this.deleteRow(this.selectedRow), this.hideToolboxes()
          }
        }],
        onOpen: () => {
          this.selectRow(this.hoveredRow), this.hideColumnToolbox()
        },
        onClose: () => {
          this.unselectRow()
        }
      })
    }

    moveCursorToNextRow() {
      this.focusedCell.row !== this.numberOfRows ? (this.focusedCell.row += 1, this.focusCell(this.focusedCell)) : (this.addRow(), this.focusedCell.row += 1, this.focusCell(this.focusedCell), this.updateToolboxesPosition(0, 0))
    }

    getCell(t, e) {
      return this.table.querySelectorAll(`.${s.row}:nth-child(${t}) .${s.cell}`)[e - 1]
    }

    getRow(t) {
      return this.table.querySelector(`.${s.row}:nth-child(${t})`)
    }

    getRowByCell(t) {
      return t.parentElement
    }

    getRowFirstCell(t) {
      return t.querySelector(`.${s.cell}:first-child`)
    }

    setCellContent(t, e, o) {
      const i = this.getCell(t, e);
      i.innerHTML = o
    }

    addColumn(t = -1, e = !1) {
      var n;
      let o = this.numberOfColumns;
      if (this.config && this.config.maxcols && this.numberOfColumns >= this.config.maxcols) return;
      for (let r = 1; r <= this.numberOfRows; r++) {
        let h;
        const l = this.createCell();
        if (t > 0 && t <= o ? (h = this.getCell(r, t), m(l, h)) : h = this.getRow(r).appendChild(l), r === 1) {
          const u = this.getCell(r, t > 0 ? t : o + 1);
          u && e && C(u)
        }
      }
      const i = this.wrapper.querySelector(`.${s.addColumn}`);
      (n = this.config) != null && n.maxcols && this.numberOfColumns > this.config.maxcols - 1 && i && i.classList.add(s.addColumnDisabled), this.addHeadingAttrToFirstRow()
    }

    addRow(t = -1, e = !1) {
      let o, i = d("div", s.row);
      this.tunes.withHeadings && this.removeHeadingAttrFromFirstRow();
      let n = this.numberOfColumns;
      if (this.config && this.config.maxrows && this.numberOfRows >= this.config.maxrows && h) return;
      if (t > 0 && t <= this.numberOfRows) {
        let l = this.getRow(t);
        o = m(i, l)
      } else o = this.table.appendChild(i);
      this.fillRow(o, n), this.tunes.withHeadings && this.addHeadingAttrToFirstRow();
      const r = this.getRowFirstCell(o);
      r && e && C(r);
      const h = this.wrapper.querySelector(`.${s.addRow}`);
      return this.config && this.config.maxrows && this.numberOfRows >= this.config.maxrows && h && h.classList.add(s.addRowDisabled), o
    }

    deleteColumn(t) {
      for (let o = 1; o <= this.numberOfRows; o++) {
        const i = this.getCell(o, t);
        if (!i) return;
        i.remove()
      }
      const e = this.wrapper.querySelector(`.${s.addColumn}`);
      e && e.classList.remove(s.addColumnDisabled)
    }

    deleteRow(t) {
      this.getRow(t).remove();
      const e = this.wrapper.querySelector(`.${s.addRow}`);
      e && e.classList.remove(s.addRowDisabled), this.addHeadingAttrToFirstRow()
    }

    createTableWrapper() {
      if (this.wrapper = d("div", s.wrapper), this.table = d("div", s.table), this.readOnly && this.wrapper.classList.add(s.wrapperReadOnly), this.wrapper.appendChild(this.toolboxRow.element), this.wrapper.appendChild(this.toolboxColumn.element), this.wrapper.appendChild(this.table), !this.readOnly) {
        const t = d("div", s.addColumn, {innerHTML: v}), e = d("div", s.addRow, {innerHTML: v});
        this.wrapper.appendChild(t), this.wrapper.appendChild(e)
      }
    }

    computeInitialSize() {
      const t = this.data && this.data.content, e = Array.isArray(t), o = e ? t.length : !1, i = e ? t.length : void 0,
        n = o ? t[0].length : void 0, r = Number.parseInt(this.config && this.config.rows),
        h = Number.parseInt(this.config && this.config.cols), l = !isNaN(r) && r > 0 ? r : void 0,
        u = !isNaN(h) && h > 0 ? h : void 0;
      return {rows: i || l || 2, cols: n || u || 2}
    }

    resize() {
      const {rows: t, cols: e} = this.computeInitialSize();
      for (let o = 0; o < t; o++) this.addRow();
      for (let o = 0; o < e; o++) this.addColumn()
    }

    fill() {
      const t = this.data;
      if (t && t.content) for (let e = 0; e < t.content.length; e++) for (let o = 0; o < t.content[e].length; o++) this.setCellContent(e + 1, o + 1, t.content[e][o])
    }

    fillRow(t, e) {
      for (let o = 1; o <= e; o++) {
        const i = this.createCell();
        t.appendChild(i)
      }
    }

    createCell() {
      return d("div", s.cell, {contentEditable: !this.readOnly})
    }

    get numberOfRows() {
      return this.table.childElementCount
    }

    get numberOfColumns() {
      return this.numberOfRows ? this.table.querySelectorAll(`.${s.row}:first-child .${s.cell}`).length : 0
    }

    get isColumnMenuShowing() {
      return this.selectedColumn !== 0
    }

    get isRowMenuShowing() {
      return this.selectedRow !== 0
    }

    onMouseMoveInTable(t) {
      const {row: e, column: o} = this.getHoveredCell(t);
      this.hoveredColumn = o, this.hoveredRow = e, this.updateToolboxesPosition()
    }

    onKeyPressListener(t) {
      if (t.key === "Enter") {
        if (t.shiftKey) return !0;
        this.moveCursorToNextRow()
      }
      return t.key !== "Enter"
    }

    onKeyDownListener(t) {
      t.key === "Tab" && t.stopPropagation()
    }

    focusInTableListener(t) {
      const e = t.target, o = this.getRowByCell(e);
      this.focusedCell = {
        row: Array.from(this.table.querySelectorAll(`.${s.row}`)).indexOf(o) + 1,
        column: Array.from(o.querySelectorAll(`.${s.cell}`)).indexOf(e) + 1
      }
    }

    hideToolboxes() {
      this.hideRowToolbox(), this.hideColumnToolbox(), this.updateToolboxesPosition()
    }

    hideRowToolbox() {
      this.unselectRow(), this.toolboxRow.hide()
    }

    hideColumnToolbox() {
      this.unselectColumn(), this.toolboxColumn.hide()
    }

    focusCell() {
      this.focusedCellElem.focus()
    }

    get focusedCellElem() {
      const {row: t, column: e} = this.focusedCell;
      return this.getCell(t, e)
    }

    updateToolboxesPosition(t = this.hoveredRow, e = this.hoveredColumn) {
      this.isColumnMenuShowing || e > 0 && e <= this.numberOfColumns && this.toolboxColumn.show(() => ({left: `calc((100% - var(--cell-size)) / (${this.numberOfColumns} * 2) * (1 + (${e} - 1) * 2))`})), this.isRowMenuShowing || t > 0 && t <= this.numberOfRows && this.toolboxRow.show(() => {
        const o = this.getRow(t), {fromTopBorder: i} = g(this.table, o), {height: n} = o.getBoundingClientRect();
        return {top: `${Math.ceil(i + n / 2)}px`}
      })
    }

    setHeadingsSetting(t) {
      this.tunes.withHeadings = t, t ? (this.table.classList.add(s.withHeadings), this.addHeadingAttrToFirstRow()) : (this.table.classList.remove(s.withHeadings), this.removeHeadingAttrFromFirstRow())
    }

    addHeadingAttrToFirstRow() {
      for (let t = 1; t <= this.numberOfColumns; t++) {
        let e = this.getCell(1, t);
        e && e.setAttribute("heading", this.api.i18n.t("Heading"))
      }
    }

    removeHeadingAttrFromFirstRow() {
      for (let t = 1; t <= this.numberOfColumns; t++) {
        let e = this.getCell(1, t);
        e && e.removeAttribute("heading")
      }
    }

    selectRow(t) {
      const e = this.getRow(t);
      e && (this.selectedRow = t, e.classList.add(s.rowSelected))
    }

    unselectRow() {
      if (this.selectedRow <= 0) return;
      const t = this.table.querySelector(`.${s.rowSelected}`);
      t && t.classList.remove(s.rowSelected), this.selectedRow = 0
    }

    selectColumn(t) {
      for (let e = 1; e <= this.numberOfRows; e++) {
        const o = this.getCell(e, t);
        o && o.classList.add(s.cellSelected)
      }
      this.selectedColumn = t
    }

    unselectColumn() {
      if (this.selectedColumn <= 0) return;
      let t = this.table.querySelectorAll(`.${s.cellSelected}`);
      Array.from(t).forEach(e => {
        e.classList.remove(s.cellSelected)
      }), this.selectedColumn = 0
    }

    getHoveredCell(t) {
      let e = this.hoveredRow, o = this.hoveredColumn;
      const {width: i, height: n, x: r, y: h} = k(this.table, t);
      return r >= 0 && (o = this.binSearch(this.numberOfColumns, l => this.getCell(1, l), ({fromLeftBorder: l}) => r < l, ({fromRightBorder: l}) => r > i - l)), h >= 0 && (e = this.binSearch(this.numberOfRows, l => this.getCell(l, 1), ({fromTopBorder: l}) => h < l, ({fromBottomBorder: l}) => h > n - l)), {
        row: e || this.hoveredRow,
        column: o || this.hoveredColumn
      }
    }

    binSearch(t, e, o, i) {
      let n = 0, r = t + 1, h = 0, l;
      for (; n < r - 1 && h < 10;) {
        l = Math.ceil((n + r) / 2);
        const u = e(l), f = g(this.table, u);
        if (o(f)) r = l; else if (i(f)) n = l; else break;
        h++
      }
      return l
    }

    getData() {
      const t = [];
      for (let e = 1; e <= this.numberOfRows; e++) {
        const o = this.table.querySelector(`.${s.row}:nth-child(${e})`),
          i = Array.from(o.querySelectorAll(`.${s.cell}`));
        i.every(r => !r.textContent.trim()) || t.push(i.map(r => r.innerHTML))
      }
      return t
    }

    destroy() {
      document.removeEventListener("click", this.documentClicked)
    }
  }

  class $ {
    static get isReadOnlySupported() {
      return !0
    }

    static get enableLineBreaks() {
      return !0
    }

    constructor({data: t, config: e, api: o, readOnly: i, block: n}) {
      this.api = o, this.readOnly = i, this.config = e, this.data = {
        withHeadings: this.getConfig("withHeadings", !1, t),
        stretched: this.getConfig("stretched", !1, t),
        content: t && t.content ? t.content : []
      }, this.table = null, this.block = n
    }

    static get toolbox() {
      return {icon: A, title: "Table"}
    }

    render() {
      return this.table = new E(this.readOnly, this.api, this.data, this.config), this.container = d("div", this.api.styles.block), this.container.appendChild(this.table.getWrapper()), this.table.setHeadingsSetting(this.data.withHeadings), this.container
    }

    renderSettings() {
      return [{
        label: this.api.i18n.t("With headings"),
        icon: T,
        isActive: this.data.withHeadings,
        closeOnActivate: !0,
        toggle: !0,
        onActivate: () => {
          this.data.withHeadings = !0, this.table.setHeadingsSetting(this.data.withHeadings)
        }
      }, {
        label: this.api.i18n.t("Without headings"),
        icon: H,
        isActive: !this.data.withHeadings,
        closeOnActivate: !0,
        toggle: !0,
        onActivate: () => {
          this.data.withHeadings = !1, this.table.setHeadingsSetting(this.data.withHeadings)
        }
      }, {
        label: this.data.stretched ? this.api.i18n.t("Collapse") : this.api.i18n.t("Stretch"),
        icon: this.data.stretched ? R : O,
        closeOnActivate: !0,
        toggle: !0,
        onActivate: () => {
          this.data.stretched = !this.data.stretched, this.block.stretched = this.data.stretched
        }
      }]
    }

    save() {
      const t = this.table.getData();
      return {withHeadings: this.data.withHeadings, stretched: this.data.stretched, content: t}
    }

    destroy() {
      this.table.destroy()
    }

    getConfig(t, e = void 0, o = void 0) {
      const i = this.data || o;
      return i ? i[t] ? i[t] : e : this.config && this.config[t] ? this.config[t] : e
    }

    static get pasteConfig() {
      return {tags: ["TABLE", "TR", "TH", "TD"]}
    }

    onPaste(t) {
      const e = t.detail.data, o = e.querySelector(":scope > thead, tr:first-of-type th"),
        n = Array.from(e.querySelectorAll("tr")).map(r => Array.from(r.querySelectorAll("th, td")).map(l => l.innerHTML));
      this.data = {
        withHeadings: o !== null,
        content: n
      }, this.table.wrapper && this.table.wrapper.replaceWith(this.render())
    }
  }

  const I = "";
  return $
});
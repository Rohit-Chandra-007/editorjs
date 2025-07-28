// js/undo-redo.js
export class UndoRedoManager {
  /**
   * @param {EditorJS} editor - initialized Editor.js instance
   * @param {{maxHistory?:number, debounceTime?:number}} opts
   */
  constructor(editor, { maxHistory = 100, debounceTime = 300 } = {}) {
    this.editor = editor;
    this.history = [];
    this.index = -1;
    this.maxHistory = maxHistory;
    this.debounceTime = debounceTime;
    this.saveTimeout = null;
    this.isRestoring = false;

    editor.isReady.then(() => {
      // Initial snapshot after editor is fully ready
      this._saveSnapshot();
      // Keyboard shortcuts
      this._bindShortcuts();
      // Buttons initial state (if buttons exist)
      this._updateButtons();
    });
  }

  /** Public: request a debounced snapshot (call from EditorJS onChange) */
  capture() {
    if (this.isRestoring) return;
    clearTimeout(this.saveTimeout);
    this.saveTimeout = setTimeout(() => this._saveSnapshot(), this.debounceTime);
  }

  async _saveSnapshot() {
    try {
      const data = await this.editor.save();
      const snapshot = JSON.stringify(data);

      // Skip if no change
      if (this.history[this.index] === snapshot) return;

      // Trim any redo branch and push new
      this.history = this.history.slice(0, this.index + 1);
      this.history.push(snapshot);

      // Cap history
      if (this.history.length > this.maxHistory) {
        this.history.shift();
      } else {
        this.index++;
      }
      this._updateButtons();
    } catch (e) {
      console.error('Undo/Redo: snapshot failed:', e);
    }
  }

  async undo() {
    if (this.index <= 0) return;
    this.isRestoring = true;
    try {
      this.index--;
      await this.editor.render(JSON.parse(this.history[this.index]));
    } finally {
      this.isRestoring = false;
      this._updateButtons();
    }
  }

  async redo() {
    if (this.index >= this.history.length - 1) return;
    this.isRestoring = true;
    try {
      this.index++;
      await this.editor.render(JSON.parse(this.history[this.index]));
    } finally {
      this.isRestoring = false;
      this._updateButtons();
    }
  }

  _bindShortcuts() {
    document.addEventListener('keydown', (e) => {
      const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;
      if (!cmdOrCtrl) return;

      const key = e.key.toLowerCase();

      // Undo: Ctrl/Cmd + Z
      if (!e.shiftKey && key === 'z') {
        e.preventDefault();
        this.undo();
        return;
      }

      // Redo: Ctrl+Y  OR  Shift+Cmd+Z (Mac)
      if (key === 'y' || (e.shiftKey && key === 'z')) {
        e.preventDefault();
        this.redo();
        return;
      }
    });
  }

  _updateButtons() {
    const undoBtn = document.getElementById('undo-btn');
    const redoBtn = document.getElementById('redo-btn');
    if (undoBtn) undoBtn.disabled = !(this.index > 0);
    if (redoBtn) redoBtn.disabled = !(this.index < this.history.length - 1);
  }

  clear() {
    this.history = [];
    this.index = -1;
    this._updateButtons();
  }
}

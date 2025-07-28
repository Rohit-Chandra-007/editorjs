import { UI_CONFIG } from './config.js';

/**
 * Manages undo/redo functionality for the editor
 */
export class UndoRedoManager {
  /**
   * Creates a new UndoRedoManager
   * @param {Object} editor - The EditorJS instance
   */
  constructor(editor) {
    this.editor = editor;
    this.history = [];
    this.currentIndex = -1;
    this.maxHistorySize = UI_CONFIG.maxHistorySize;
    this.isUndoRedoing = false;
    this.debounceTime = UI_CONFIG.debounceTime;
    this.lastSaveTime = 0;

    // Initialize
    this.init();
  }

  /**
   * Initialize the undo/redo manager
   */
  init() {
    // Save initial state
    setTimeout(() => {
      this.saveState();
    }, 1000);

    // Listen to editor changes
    if (this.editor.config && typeof this.editor.config.onChange === 'function') {
      // Editor already has onChange handler, we need to create a manual listener
      const editorEl = document.getElementById('editorjs');
      editorEl.addEventListener('input', () => {
        if (!this.isUndoRedoing) {
          this.handleChange();
        }
      });
      // Save state after each word delimiter for finer undo history
      editorEl.addEventListener('keydown', (event) => {
        if (!this.isUndoRedoing && (event.key === ' ' || event.key === 'Enter')) {
          this.saveState();
        }
      });
    } else {
      // Setup a mutation observer to detect changes
      const editorElement = document.getElementById('editorjs');
      if (editorElement) {
        const observer = new MutationObserver(() => {
          if (!this.isUndoRedoing) {
            this.handleChange();
          }
        });

        observer.observe(editorElement, {
          childList: true,
          subtree: true,
          characterData: true,
          attributes: true
        });

        // Save state when user finishes a word
        editorElement.addEventListener('keydown', (event) => {
          if (!this.isUndoRedoing && (event.key === ' ' || event.key === 'Enter')) {
            this.saveState();
          }
        });
      }
    }

    // Setup keyboard shortcuts
    this.setupKeyboardShortcuts();

    // Update buttons initially
    this.updateButtons();
  }

  /**
   * Handles changes to the editor content
   */
  handleChange() {
    const now = Date.now();
    if (now - this.lastSaveTime > this.debounceTime) {
      this.saveState();
      this.lastSaveTime = now;
    } else {
      // Debounce rapid changes
      clearTimeout(this.saveTimeout);
      this.saveTimeout = setTimeout(() => {
        this.saveState();
      }, this.debounceTime);
    }
  }

  /**
   * Saves the current editor state to history
   */
  async saveState() {
    try {
      const data = await this.editor.save();

      // Don't save if it's the same as current state
      if (this.currentIndex >= 0) {
        const currentState = this.history[this.currentIndex];
        if (JSON.stringify(currentState) === JSON.stringify(data)) {
          return;
        }
      }

      // Remove any states after current index (when new changes are made after undo)
      this.history = this.history.slice(0, this.currentIndex + 1);

      // Add new state
      this.history.push(JSON.parse(JSON.stringify(data)));
      this.currentIndex++;

      // Limit history size
      if (this.history.length > this.maxHistorySize) {
        this.history.shift();
        this.currentIndex--;
      }

      this.updateButtons();
      console.log('State saved. History length:', this.history.length);
    } catch (error) {
      console.error('Error saving state:', error);
    }
  }

  /**
   * Performs an undo operation
   */
  async undo() {
    if (!this.canUndo()) return;

    this.isUndoRedoing = true;

    try {
      this.currentIndex--;
      const state = this.history[this.currentIndex];
      await this.editor.render(state);
      this.updateButtons();
      console.log('Undo performed. Current index:', this.currentIndex);
    } catch (error) {
      console.error('Error during undo:', error);
      this.currentIndex++; // Revert on error
    } finally {
      this.isUndoRedoing = false;
    }
  }

  /**
   * Performs a redo operation
   */
  async redo() {
    if (!this.canRedo()) return;

    this.isUndoRedoing = true;

    try {
      this.currentIndex++;
      const state = this.history[this.currentIndex];
      await this.editor.render(state);
      this.updateButtons();
      console.log('Redo performed. Current index:', this.currentIndex);
    } catch (error) {
      console.error('Error during redo:', error);
      this.currentIndex--; // Revert on error
    } finally {
      this.isUndoRedoing = false;
    }
  }

  /**
   * Checks if undo is available
   * @returns {boolean} True if undo is available
   */
  canUndo() {
    return this.currentIndex > 0;
  }

  /**
   * Checks if redo is available
   * @returns {boolean} True if redo is available
   */
  canRedo() {
    return this.currentIndex < this.history.length - 1;
  }

  /**
   * Updates the undo/redo button states
   */
  updateButtons() {
    const undoBtn = document.getElementById('undo-btn');
    const redoBtn = document.getElementById('redo-btn');

    if (undoBtn) {
      undoBtn.disabled = !this.canUndo();
    }

    if (redoBtn) {
      redoBtn.disabled = !this.canRedo();
    }
  }

  /**
   * Sets up keyboard shortcuts for undo/redo
   */
  setupKeyboardShortcuts() {
    document.addEventListener('keydown', (event) => {
      const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      const cmdOrCtrl = isMac ? event.metaKey : event.ctrlKey;

      if (cmdOrCtrl && !event.shiftKey && event.key === 'z') {
        event.preventDefault();
        this.undo();
      } else if (cmdOrCtrl && (event.shiftKey && event.key === 'Z' || event.key === 'y')) {
        event.preventDefault();
        this.redo();
      }
    });
  }

  /**
   * Clears the undo/redo history
   */
  clear() {
    this.history = [];
    this.currentIndex = -1;
    this.updateButtons();
  }
}

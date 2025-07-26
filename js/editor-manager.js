import { EDITOR_CONFIG } from './config.js';
import { updateStatus, handlePaste } from './utils.js';
import { UndoRedoManager } from './undo-redo.js';

/**
 * Manages the EditorJS instance and core functionality
 */
export class EditorManager {
  constructor() {
    this.editor = null;
    this.undoRedoManager = null;
  }

  /**
   * Initializes the editor
   * @returns {Promise<void>}
   */
  async initialize() {
    updateStatus('🔧 Initializing Editor...', 'loading');

    try {
      // Create a custom onChange handler that we can access from UndoRedoManager
      let changeCallback = null;

      this.editor = new EditorJS({
        ...EDITOR_CONFIG,
        onReady: () => {
          updateStatus('✅ Editor Ready! Start creating amazing content!', 'success');
          console.log('Editor.js is ready to work!');

          this.undoRedoManager = new UndoRedoManager(this.editor);
          this.setupPasteHandler();
        },
        onChange: (api, event) => {
          console.log('Content changed!', event);
          // If there's a registered callback, call it
          if (changeCallback && typeof changeCallback === 'function') {
            changeCallback(api, event);
          }
        },
        data: null
      });

      // Add a custom method to register change listeners
      this.editor.onChange = (callback) => {
        changeCallback = callback;
      };

      return this.editor;
    } catch (error) {
      updateStatus('❌ Error initializing editor: ' + error.message, 'error');
      console.error('Editor initialization error:', error);
      throw error;
    }
  }

  /**
   * Sets up the paste event handler
   */
  setupPasteHandler() {
    const editorElement = document.querySelector('#editorjs');
    if (editorElement) {
      editorElement.addEventListener('paste', handlePaste);
    }
  }

  /**
   * Saves the editor content
   * @returns {Promise<Object>} The saved editor data
   */
  async save() {
    if (!this.editor) return null;

    try {
      const outputData = await this.editor.save();
      console.log('Saved data:', outputData);
      return outputData;
    } catch (error) {
      console.error('Save error:', error);
      throw error;
    }
  }

  /**
   * Clears the editor content
   * @returns {Promise<void>}
   */
  async clear() {
    if (!this.editor) return;

    try {
      await this.editor.clear();
      this.undoRedoManager?.clear();
      updateStatus('🗑️ Content cleared!', 'success');
    } catch (error) {
      updateStatus('❌ Clear failed: ' + error.message, 'error');
      throw error;
    }
  }
}

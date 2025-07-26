import { updateStatus, convertToHTML } from './utils.js';

/**
 * Handles UI interactions for the editor
 */
export class UIHandlers {
  /**
   * Creates a new UIHandlers instance
   * @param {Object} editorManager - The EditorManager instance
   */
  constructor(editorManager) {
    this.editorManager = editorManager;
    this.setupEventListeners();
  }

  /**
   * Sets up event listeners for UI elements
   */
  setupEventListeners() {
    // Save button
    document.getElementById('save-btn')?.addEventListener('click', () => {
      this.handleSave();
    });

    // Clear button
    document.getElementById('clear-btn')?.addEventListener('click', () => {
      this.handleClear();
    });

    // Export button
    document.getElementById('export-btn')?.addEventListener('click', () => {
      this.handleExport();
    });

    // Import button
    document.getElementById('import-btn')?.addEventListener('click', () => {
      this.handleImport();
    });

    // File input
    document.getElementById('file-input')?.addEventListener('change', (event) => {
      this.handleFileInput(event);
    });
  }

  /**
   * Handles the save button click
   */
  async handleSave() {
    try {
      const outputData = await this.editorManager.save();
      document.getElementById('output').textContent = JSON.stringify(outputData, null, 2);
      document.getElementById('output-container').style.display = 'block';
      updateStatus('💾 Content saved successfully!', 'success');
    } catch (error) {
      updateStatus('❌ Save failed: ' + error.message, 'error');
    }
  }

  /**
   * Handles the clear button click
   */
  async handleClear() {
    try {
      await this.editorManager.clear();
      document.getElementById('output-container').style.display = 'none';
    } catch (error) {
      updateStatus('❌ Clear failed: ' + error.message, 'error');
    }
  }

  /**
   * Handles the export button click
   */
  async handleExport() {
    try {
      const outputData = await this.editorManager.save();
      const htmlContent = convertToHTML(outputData);

      document.getElementById('output').textContent = htmlContent;
      document.getElementById('output-container').style.display = 'block';
      updateStatus('📄 HTML exported successfully!', 'success');
    } catch (error) {
      updateStatus('❌ Export failed: ' + error.message, 'error');
    }
  }

  /**
   * Handles the import button click
   */
  handleImport() {
    document.getElementById('file-input')?.click();
  }

  /**
   * Handles the file input change event
   * @param {Event} event - The change event
   */
  handleFileInput(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const data = JSON.parse(e.target.result);
        await this.editorManager.editor.render(data);
        updateStatus('📁 Data imported successfully!', 'success');
      } catch (error) {
        updateStatus('❌ Import failed: ' + error.message, 'error');
      }
    };
    reader.readAsText(file);
  }
}

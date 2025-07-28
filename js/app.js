// Main application initialization

import {EditorManager} from './editor-manager.js';
import {UIHandlers} from './ui-handlers.js';
import {updateStatus} from './utils.js';

class App {
  constructor() {
    this.editorManager = new EditorManager();

  }

  /**
   * Initializes the application
   */
  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.start());
    } else {
      // DOM is already parsed – start immediately:
      this.start()
        .then(result => {
          console.log('Initialization succeeded:', result);
        })
        .catch(error => {
          console.error('Initialization failed:', error);
        });
    }
  }

  /**
   * Starts the application
   */
  async start() {
    try {
      // Initialize the editor with a small delay
      setTimeout(async () => {
        await this.editorManager.initialize();
        this.uiHandlers = new UIHandlers(this.editorManager);
        console.log('Application started successfully');
      }, 500);

    } catch (error) {
      console.error('App initialization failed:', error);
      updateStatus('❌ App failed to start: ' + error.message, 'error');
    }
  }
}

// Start the application
const app = new App();
app.init();
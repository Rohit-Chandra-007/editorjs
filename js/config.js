/**
 * Editor configuration settings
 */
export const EDITOR_CONFIG = {
  holder: 'editorjs',
  placeholder: 'Start writing your amazing content here... ✍️',
  tools: {
    // Text formatting
    header: {
      class: Header,
      config: {
        placeholder: 'Enter a header',
        levels: [1, 2, 3, 4, 5, 6],
        defaultLevel: 2
      }
    },

    // Lists
    list: {
      class: EditorjsList,
      inlineToolbar: true,
      config: {
        defaultStyle: 'unordered'
      }
    },

    // Quote
    quote: {
      class: Quote,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+O',
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: 'Quote\'s author',
      }
    },

    // Table
    table: {
      class: Table,
      inlineToolbar: true,
      config: {
        rows: 2,
        cols: 3,
      }
    },

    // Image
    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: '/api/uploadFile', // Your backend endpoint
          byUrl: '/api/fetchUrl', // Your backend endpoint
        },
        additionalRequestData: {},
        additionalRequestHeaders: {},
        field: 'image',
        types: 'image/*',
        captionPlaceholder: 'Image caption...',
        buttonContent: 'Select an Image',
        uploader: {
          uploadByFile(file) {
            // For demo, we'll create a local URL
            return new Promise((resolve) => {
              const reader = new FileReader();
              reader.onload = (e) => {
                resolve({
                  success: 1,
                  file: {
                    url: e.target.result
                  }
                });
              };
              reader.readAsDataURL(file);
            });
          }
        }
      }
    },

    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
    },

    marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+H',
    },

    underline: {
      class: Underline,
      shortcut: 'CMD+SHIFT+U',
    },

    // Additional tools
    delimiter: Delimiter,

    raw: {
      class: RawTool,
      config: {
        placeholder: 'Enter raw HTML...'
      }
    },

    embed: {
      class: Embed,
      config: {
        services: {
          youtube: true,
          coub: true,
          codepen: {
            regex: /https?:\/\/codepen.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
            embedUrl: 'https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2',
            html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
            height: 300,
            width: 600,
            id: (groups) => groups.join('/embed/')
          }
        }
      }
    },

    linkTool: {
      class: LinkTool,
      config: {
        endpoint: '/api/fetchUrl', // Your backend endpoint for link data
      }
    }
  }
};

export const UI_CONFIG = {
  debounceTime: 500,
  maxHistorySize: 50,
  autoSaveInterval: 30000 // 30 seconds
};

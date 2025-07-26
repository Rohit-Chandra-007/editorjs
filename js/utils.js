/**
 * Utility functions for the editor application
 */

/**
 * Updates the status message display
 * @param {string} message - The message to display
 * @param {string} type - The type of message (loading, success, error)
 */
export function updateStatus(message, type = 'loading') {
  const status = document.getElementById('status');
  if (!status) return;

  status.textContent = message;
  status.className = `status ${type}`;

  if (type === 'success') {
    setTimeout(() => {
      status.style.display = 'none';
    }, 3000);
  }
}

/**
 * Handles paste events to preserve formatting
 * @param {ClipboardEvent} event - The paste event
 */
export function handlePaste(event) {
  const clipboardData = event.clipboardData || window.clipboardData;
  const htmlData = clipboardData.getData('text/html');

  if (htmlData) {
    console.log('Pasted HTML content:', htmlData);
    // EditorJS will handle HTML parsing automatically
  }
}

/**
 * Downloads JSON data as a file
 * @param {Object} data - The data to download
 * @param {string} filename - The filename to use
 */
export function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Converts editor data to HTML content
 * @param {Object} outputData - The editor output data
 * @returns {string} The HTML content
 */
export function convertToHTML(outputData) {
  let htmlContent = '';

  outputData.blocks.forEach(block => {
    switch (block.type) {
      case 'header':
        htmlContent += `<h${block.data.level}>${block.data.text}</h${block.data.level}>\n`;
        break;
      case 'paragraph':
        htmlContent += `<p>${block.data.text}</p>\n`;
        break;
      case 'list':
        const tag = block.data.style === 'ordered' ? 'ol' : 'ul';
        htmlContent += `<${tag}>\n`;
        block.data.items.forEach(item => {
          htmlContent += `  <li>${item}</li>\n`;
        });
        htmlContent += `</${tag}>\n`;
        break;
      case 'quote':
        htmlContent += `<blockquote>\n  <p>${block.data.text}</p>\n  <cite>${block.data.caption}</cite>\n</blockquote>\n`;
        break;
      default:
        htmlContent += `<!-- ${block.type} block -->\n`;
    }
  });

  return htmlContent;
}

document.addEventListener('keydown', function(e) {
  // Check for Ctrl or Cmd
  const ctrl = e.ctrlKey || e.metaKey;
  if (!ctrl) return;

  // Prevent default for handled shortcuts
  let handled = false;

  // Bold: Ctrl+B
  if (e.key.toLowerCase() === 'b') {
    handled = true;
    // Assuming editorjs instance is available as `editor`
    editor.blocks.insert('paragraph', { text: '<b></b>' });
  }

  // Italic: Ctrl+I
  if (e.key.toLowerCase() === 'i') {
    handled = true;
    editor.blocks.insert('paragraph', { text: '<i></i>' });
  }

  // Headings: Ctrl+1/2/3 for H1/H2/H3
  if (['1', '2', '3'].includes(e.key)) {
    handled = true;
    const level = parseInt(e.key);
    editor.blocks.insert('header', { text: '', level });
  }

  if (handled) e.preventDefault();
});

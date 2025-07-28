document.addEventListener('keydown', function (e) {
  // Check for Ctrl or Cmd
  const ctrl = e.ctrlKey || e.metaKey;
  if (!ctrl) return;

  // Prevent default for handled shortcuts
  let handled = false;
  const key = e.key.toLowerCase();

  // Bold: Ctrl+B
  if (key === 'b') {
    handled = true;
    editor.blocks.insert('paragraph', { text: '<b></b>' });
  }

  // Italic: Ctrl+I
  if (key === 'i') {
    handled = true;
    editor.blocks.insert('paragraph', { text: '<i></i>' });
  }

  // Headings: Ctrl+1/2/3 for H1/H2/H3
  if (['1', '2', '3'].includes(key)) {
    handled = true;
    const level = parseInt(key);
    editor.blocks.insert('header', { text: '', level });
  }

  // Copy/Cut/Paste shortcuts
  if (key === 'c') {
    handled = true;
    document.execCommand('copy');
  } else if (key === 'x') {
    handled = true;
    document.execCommand('cut');
  } else if (key === 'v') {
    handled = true;
    // allow default paste behaviour
  } else if (!e.shiftKey && key === 'z') {
    handled = true;
    editor.undoRedoManager?.undo();
  } else if ((e.shiftKey && key === 'z') || key === 'y') {
    handled = true;
    editor.undoRedoManager?.redo();
  }

  if (handled) e.preventDefault();
});

"use strict";
function viewNoteById(id) {
    const note = notes.find(n => n.id === id);
    if (note) {
        const noteContentElement = document.getElementById('noteContent');
        if (noteContentElement) {
            noteContentElement.innerHTML = `<p>Note #${note.id}: ${note.content}</p>`;
        }
    }
}
viewNoteById(1);

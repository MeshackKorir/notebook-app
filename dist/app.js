"use strict";
let notes = [];
;
function createNote() {
    const content = prompt("Enter your note here");
    if (content) {
        const newNote = {
            id: notes.length + 1,
            content: content,
        };
        notes.push(newNote);
        // displayNotes();
    }
}
function displayNotes() {
    const notesList = document.getElementById("notesList");
    if (notesList) {
        notesList.innerHTML = '';
        for (const note of notes) {
            const noteElement = document.createElement('div');
            noteElement.innerHTML = `<p>${note.content}</p>`;
            const viewButton = document.createElement('button');
            viewButton.innerText = 'View';
            viewButton.onclick = () => viewNoteById(note.id);
            noteElement.appendChild(viewButton);
            const updateButton = document.createElement('button');
            updateButton.innerText = 'update';
            updateButton.onclick = () = updateNoteById(note.id);
            noteElement.appendChild(updateButton);
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.onclick = () => deleteNoteById(note.id);
            noteElement.appendChild(deleteButton);
            notesList.appendChild(noteElement);
        }
        ;
    }
    ;
}

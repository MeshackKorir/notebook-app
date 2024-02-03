"use strict";
const getForm = document.getElementById('noteForm');
const heading = document.getElementById('heading');
const about = document.getElementById('about');
const email = document.getElementById('email');
const number = document.getElementById('number');
const NoteArray = [];
// display created notes
function displayNote() {
    const noteCan = document.querySelector('.notes-container');
    // Clear existing notes before displaying new ones
    noteCan.innerHTML = '';
    let displayNotes = JSON.parse(localStorage.getItem('NOTES') || '[]');
    displayNotes.forEach((note) => {
        const notePost = document.createElement('div');
        notePost.innerHTML = `
            <div class="postflex">
                <h2>Title:${note.heading}</h2>
                <h3>About:${note.about}</h3>
                <h2>Email:${note.email}</h2>
                <h3>Number:${note.number}</h3>
                <button class="edit-btn" onclick="editNote(${note.id})">Edit</button>
                <button class="delete-btn" onclick="deleteNote(${note.id})">Delete</button>
            </div>
        `;
        noteCan.appendChild(notePost);
    });
}
displayNote();
// Form
if (getForm) {
    getForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Check existing note first
        const exist = JSON.parse(localStorage.getItem('NOTES') || '[]');
        const isNoteValid = heading.value.trim() !== "" && about.value.trim() !== "" && email.value.trim() !== "" && number.value.trim() !== "";
        if (isNoteValid) {
            // Creating a new note
            const newNote = {
                id: exist.length + 1,
                heading: heading.value.trim(),
                about: about.value.trim(),
                email: email.value.trim(),
                number: parseInt(number.value.trim())
            };
            exist.push(newNote);
            localStorage.setItem('NOTES', JSON.stringify(exist));
            heading.value = '';
            about.value = '';
            email.value = '';
            number.value = '';
            displayNote();
        }
    });
}
// General update function
function update(NoteArray) {
    localStorage.setItem('NOTES', JSON.stringify(NoteArray));
}
// DELETE FUNCTION
function deleteNote(id) {
    let displayNotes = JSON.parse(localStorage.getItem('NOTES') || '[]');
    // FindIndex interesting array method to splice
    const index = displayNotes.findIndex((note) => note.id === id);
    if (index !== -1) {
        const confirmDelete = confirm('Are you sure ABOUT DELETING this note?');
        if (confirmDelete) {
            displayNotes.splice(index, 1);
            update(displayNotes);
            displayNote();
        }
    }
}
// EDIT FUNCTION
function editNote(id) {
    let displayNotes = JSON.parse(localStorage.getItem('NOTES') || '[]');
    const index = displayNotes.findIndex((note) => note.id === id);
    if (index !== -1) {
        const editedNote = displayNotes.splice(index, 1)[0];
        localStorage.setItem('NOTES', JSON.stringify(displayNotes));
        update(displayNotes);
        displayNote();
        heading.value = editedNote.heading || '';
        about.value = editedNote.about || '';
        email.value = editedNote.email || '';
        number.value = editedNote.number.toString() || '';
    }
}
function SingleNote() {
    // Implement your SingleNote function logic here if needed
}

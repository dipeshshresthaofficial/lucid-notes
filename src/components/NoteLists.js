import React from 'react'
import AddNote from './AddNote';
import Note from './Note';

export default function NoteLists({notes, handleAddNewNote, handleDeleteNote}) {
    return (
        <div className="note-lists-container">
            <div>
                <AddNote
                    handleAddNewNote={handleAddNewNote} />
            </div>
            {notes.map(note =>
                <Note
                    id={note.id}
                    description={note.description}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                />
            )}
        </div>
    )
}

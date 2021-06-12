import React, {useState} from 'react'

export default function AddNote({handleAddNewNote}) {

    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;
    const handleSave = () => {
        if (noteText.trim().length > 0) {
            handleAddNewNote(noteText)
            setNoteText('')
        } else {
            alert("Please add some content to your Notes to save.")
            setNoteText('')
        }
    }
    return (
        <div className="add-note-container">
            <textarea
                placeholder="Click here add a note..."
                value={noteText}
                onChange={e => {
                    if (characterLimit - e.target.value.length >= 0) {
                        setNoteText(e.target.value)
                    }

                }
                }
            />
            <div className="note-footer">
                <small>{characterLimit - noteText.length} remaining</small>
                <button className="save-btn" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

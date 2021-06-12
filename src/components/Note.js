import React from 'react';
import {MdDeleteForever} from 'react-icons/md';

export default function Note({id, description, date, handleDeleteNote}) {

    const handleDelete = () => {
        handleDeleteNote(id);
    }
    return (
        <div className="note-container">
            <p className="note-description">
                {description}
            </p>
            <div className="note-footer">
                <span className="note-date">{date}</span>
                <MdDeleteForever className="note-delete-icon" size="1.3em" onClick={handleDelete} />
            </div>
        </div>
    )
}

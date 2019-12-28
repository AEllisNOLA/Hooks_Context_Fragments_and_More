import React from 'react'

/* 
removeNote is not needed anywhere in this file, but it is needed to render NoteList
*/

const Note = ({ note, removeNote }) => {
    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)}>Remove</button>
        </div>
    )
}

export { Note as default }
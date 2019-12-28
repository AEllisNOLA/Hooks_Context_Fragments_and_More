import React from 'react'
import Note from './Note'

/* 
removeNote is not needed anywhere in this file, but it is needed to render NoteList
*/

const NoteList = ({ notes, removeNote }) => {
    return notes.map((note) => (
        <Note key={note.title} note={note} removeNote={removeNote} />
    ))
}

export { NoteList as default } 
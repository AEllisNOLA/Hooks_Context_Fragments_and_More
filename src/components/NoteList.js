import React, { useContext } from 'react'
import Note from './Note'
import NotesContext from '../context/notes-context'

/* 
removeNote is not needed anywhere in this file, but it is needed to render NoteList
*/

const NoteList = () => {
    const {notes} = useContext(NotesContext)


    return notes.map((note) => (
        <Note key={note.title} note={note} />
    ))
}

export { NoteList as default } 
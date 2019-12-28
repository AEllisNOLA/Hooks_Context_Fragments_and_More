import React, { useState, useContext } from 'react'
import NotesContext from '../context/notes-context'

const AddNoteForm = () => {
    const { dispatch } = useContext(NotesContext)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const changeTitle = (e) => setTitle(e.target.value)
    const changeBody = (e) => setBody(e.target.value)

    const addNote = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_NOTE',
            title,
            body
        })
        setTitle('')
        setBody('')
    }

    return (
        <div>
            <p>Add Note:</p>
            <form onSubmit={addNote}>
                <input placeholder='Title' value={title} onChange={changeTitle} />
                <textarea placeholder='Note' value={body} onChange={changeBody} />
                <button onClick={() => dispatch({})}>Add note</button>


                
            </form>
        </div>
    )
}

export { AddNoteForm as default }
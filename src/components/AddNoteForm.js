import React, { useState, useContext } from 'react'
import NotesContext from '../context/notes-context'
import useMousePosition from '../hooks/useMousePosition'

const AddNoteForm = () => {
    const { dispatch } = useContext(NotesContext)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const position = useMousePosition()

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
        <>
            <p>Add Note:</p>
            {position.x}, {position.y}
            <form onSubmit={addNote}>
                <input placeholder='Title' value={title} onChange={changeTitle} />
                <textarea placeholder='Note' value={body} onChange={changeBody} />
                <button onClick={() => dispatch({})}>Add note</button>


                
            </form>
        </>
    )
}

export { AddNoteForm as default }
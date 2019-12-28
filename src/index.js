import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const changeTitle = (e) => setTitle(e.target.value)
    const changeBody = (e) => setBody(e.target.value)

    const addNote = (e) => {
        e.preventDefault();
        setNotes([
            ...notes,
            { title, body }

        ])
        setTitle('')
        setBody('')
    }


    const removeNote = (title) => {
        setNotes(notes.filter((note) => note.title !== title))
    }

    useEffect(() => {
        console.log('getting notes')
        const notesData = JSON.parse(localStorage.getItem('notes'))
        if(notesData) {
            setNotes(notesData)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])


    return (
        <div>
            <h1>Notes</h1>
            {notes.map((note) => (
                <div key={note.title}>
                    <div>
                        <h3>{note.title}</h3>
                        <p>{note.body}</p>
                    </div>

                    <button onClick={() => removeNote(note.title)}>Remove</button>
                </div>
            )
            )}
            <p>Add Note:</p>
            <form onSubmit={addNote}>
                <input placeholder='Title' value={title} onChange={changeTitle} />
                <textarea placeholder='Note' value={body} onChange={changeBody} />
                <button>Add note</button>
            </form>
        </div>
    )
}

/* const App = (props) => {
    let [count, setCount] = useState(props.count)
    let [text, setText] = useState('')

    useEffect(() => {
        console.log('useEffect ran.')
        document.title = count
    }, [count]
    )

    useEffect(() => {
        console.log('This should only run once')
    }, [])


    const increment = () => setCount(count++)
    const decrement = () => setCount(count--)
    const reset = () => setCount(0)
    const onTextChange = (e) => setText(e.target.value)

    return (
        <div>
            <p>The current {text || 'count'} is {count}.</p>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
            <input value={text} onChange={onTextChange} />
        </div>
    )
}

App.defaultProps = {
    count: 0
} */


ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

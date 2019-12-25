import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = (props) => {
    let [count, setCount] = useState(props.count)
    let [text, setText] = useState('')


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
}

ReactDOM.render(<App count={5} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

## 19.190 - The useState Hook
- A React Hook is a function that lets you tap into a React feature, such as state or lifecycle methods.

- React has its own built-in hooks or you can create custom hooks.

- useState allows a (previously stateless) functional component to use component state.

- import { useState } from 'react';

- useState() can take anything in as an argument. No longer must state be an object.

- useState() returns an array with two things: the current state value and a function to update the state. Typically you should destructure the array rather than use an array index.

## 19.191 - useState vs. setState
- React now wants you to call useState multiple times for the multiple pieces of state you are tracking.

- Avoid combining multiple pieces of state inside of a useState call via an object. Not only does it create convuluted dot-chaining, but it does not track multiple pieces of state. useState() does not merge the objects - they are completely replaced so one state works properly while the other disappears. It makes things less error-prone and allows large state objects to be broken up into individual values.

- Summary: It is no longer recommended to store all state in a single object. Call useState() multiple times.

## 19.193 - The useEffect Hook
- Just as useState allowed us to add state to functional components, useEffect allows us to use something similar to lifecycle methods in our functional components. 
- It is similar to componentDidMount and componentDidUpdate. It runs once right away, and after changes to the state or props. It code to be run when component state or props is updated.

## 19.194 - useEffect Dependencies
- useEffect can take an array as a second argument to dictate when it runs. It is not required.

- useEffect can be used multiple times. Multiples will run in the order they are defined.

- In the beneath example, useEffect will run any time count is involved

```
useEffect(() => {
        console.log('useEffect ran.')
        document.title = count
    }, [count]
)
```

- In this example, it will only run its initial time (similar to componentDidMount), but never again because there are no dependencies to trigger a new run.

```
useEffect(() => {
        console.log('useEffect will only run once')
    }, []
)
```

## 19.195 - Cleaning Up Effects
- useEffect equivalents to componentDidMount and componentDidUpdate were shown above. You can also use something similar to componentDidUnmount. To register a function to clean up an effect, you must return a function from the function you passed to useEffect

```
useEffect(() => {
        console.log('setting up effect')

        return () => {
            console.log('Cleaning up effect')
        }
    }, [])
```

## 19.196 - The useReducer Hook
- The useReducer hook allows a component to have access to another component's data without having to pass them down as props, similar to the connect() function in Redux.

- A useReducer() function needs to be defined before it can be used. Similar to Redux reducers.
```
const notesReducer = (state, action) => {
    switch(action.type) {
        case 'POPULATE_NOTES':
            return action.notes
        default:
            return state
    }
}
```

Then you can call useReducer() with 2 arguments: the defined reducer function and initial state.
```
useReducer(notesReducer, [])
```
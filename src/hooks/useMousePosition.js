import {useState, useEffect} from 'react'

// set state to track x and y coords (useState)
// setup event to listen for mouse movement using document.eventListener
// remove event listener if unmounted (useEffect)

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        console.log('setting up event')

        const handleMouseMove = (e) => {
            setPosition({
                x: e.pageX,
                y: e.pageY
            })
        }

        document.addEventListener('mousemove', handleMouseMove )

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }

    }, [])


    return position
}

export {useMousePosition as default}
import React from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'

const Todo = () => {
    const [test, setTest] = useLocalStorage("test", "")
    return (
        <section>
            <p>{test}</p>
            <button
                onClick={() => setTest("hello")}
            >============incress===========</button>
        </section>
    )
}

export default Todo
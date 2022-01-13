import React, {useState} from "react"


const App = () => {

    const [counter, setCounter] = useState(0)
    const [minCounter, setMinCounter] = useState(0)
    const [maxCounter, setMaxCounter] = useState(5)
    const addCounter = () => {
        if (counter < maxCounter)
        setCounter(counter + 1)
    }
    const resetCount = () => {
        setCounter(minCounter)
    }
    return (
        <div>
            {counter}
            <div>
                <button onClick={addCounter}></button>
                <button onClick={resetCount}></button>
            </div>
        </div>

    )
}

export default App
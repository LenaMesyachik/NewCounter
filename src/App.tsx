import React, {useState} from "react"
import Display from "./Display";
import Settings from "./Settings";
import './App.css'

const App = () => {

    const [counter, setCounter] = useState(0)
    const [minCounter, setMinCounter] = useState(0)
    const [maxCounter, setMaxCounter] = useState(5)

    return (
        <div className={'App'}>
            <Settings  setMaxCounter={setMaxCounter} setMinCounter={setMinCounter} maxCounter={maxCounter} minCounter={minCounter}/>
            <Display counter = {counter} setCounter={setCounter} maxCounter={maxCounter} minCounter={minCounter}/>

        </div>
    )
}

export default App
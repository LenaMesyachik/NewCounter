import React, {useEffect, useState} from "react"
import Display from "./Display";
import Settings from "./Settings";
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./store/store";
import {addCounterAC, changeMaxCounterAC, changeMinCounterAC, newValueAC} from "./store/counterReducer";

const App = () => {

const dispatch = useDispatch()
    const counter = useSelector<rootReducerType,number>(state => state.counter.counter)
    const minCounter = useSelector<rootReducerType,number>(state => state.counter.minCounter)
    const maxCounter = useSelector<rootReducerType,number>(state => state.counter.maxCounter)
    /*const [counter, setCounter] = useState(0)*/
    /*const [minCounter, setMinCounter] = useState(0)*/
 /*   const [maxCounter, setMaxCounter] = useState(5)*/

    useEffect(() => {
        const valueString = localStorage.getItem('currentCounterValue')
        console.log('OK')
        if (valueString) {
            console.log('OK2')
            let newValue = JSON.parse(valueString)
            dispatch(newValueAC(newValue))
        }
    }, [])
    useEffect(() => {
        console.log('OK GO')
        localStorage.setItem('currentCounterValue', JSON.stringify(counter))
    }, [counter])


    return (
        <div className={'App'}>
            <Settings   maxCounter={maxCounter} minCounter={minCounter}/>
            <Display counter = {counter} maxCounter={maxCounter} minCounter={minCounter}/>

        </div>
    )
}

export default App
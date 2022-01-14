import React from "react"
import './App.css'
type DisplayPropsType = {
    counter: number
    setCounter:(counter:number)=>void
    maxCounter:number
    minCounter:number
}
const Display = (props:DisplayPropsType) => {
    const addCounter = () => {
        if (props.counter < props.maxCounter)
            props.setCounter(props.counter + 1)
    }
    const resetCounter = () => {
        props.setCounter(props.minCounter)
    }
    return (
        <div className={'body'}>
            {props.counter}
            <div>
                <button  className={'active-button'} onClick={addCounter}></button>
                <button className={'active-button'} onClick={resetCounter}></button>
            </div>
        </div>
    )
}

export default Display
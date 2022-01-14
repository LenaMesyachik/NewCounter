import React from "react"
import './App.css'
import Button from "./components/Button";
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
    const disabledS = props.counter === props.maxCounter
    const disabledST = props.counter === props.minCounter
    const disabled = () => props.counter === props.maxCounter;
    return (
        <div className={'body'}>
            <div>{props.counter}</div>
            <div>
                <Button  className={disabledS ?  'disabled': 'active-button' } callback = {addCounter} name={'SET'} />
                <Button className={disabledST ?  'disabled': 'active-button'} callback = {resetCounter} name={'RESET'}/>
            </div>
        </div>
    )
}

export default Display
import React from "react"
import './App.css'
import Button from "./components/Button";
import {useDispatch} from "react-redux";
import {addCounterAC, resetCounterAC} from "./store/counterReducer";
type DisplayPropsType = {
    counter: number
    maxCounter:number
    minCounter:number
}
const Display = (props:DisplayPropsType) => {
    const dispatch = useDispatch()
    const addCounter = () => {
        if (props.counter < props.maxCounter)
           dispatch(addCounterAC(props.counter))
    }
    const resetCounter = () => {
        dispatch(resetCounterAC(props.minCounter))
    }
    const disabledS = props.counter === props.maxCounter
    const disabledST = props.counter === props.minCounter

    return (
        <div className={'body'}>
            <div className={'counter'}>{props.counter}</div>
            <div className={'buttonBlock'}>
                <Button  className={disabledS ?  'disabled': 'active-button' } callback = {addCounter} name={'SET'} />
                <Button className={disabledST ?  'disabled': 'active-button'} callback = {resetCounter} name={'RESET'}/>
            </div>
        </div>
    )
}

export default Display
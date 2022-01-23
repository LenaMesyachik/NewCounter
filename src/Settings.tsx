import React from "react"
import Input from "./components/Input";
import {changeMaxCounterAC, changeMinCounterAC} from "./store/counterReducer";
import {useDispatch} from "react-redux";

type SettingsPropsType = {
    maxCounter:number
    minCounter:number
}




const Settings = (props:SettingsPropsType) => {

    const dispatch = useDispatch()
    const changeMinCounter = (minCounter:number) => {
        dispatch(changeMinCounterAC(minCounter))
    }
    const changeMaxCounter = (maxCounter:number) => {
        dispatch(changeMaxCounterAC(maxCounter))
    }
    return (
        <div className={'body'}>
            <div className={'inputBlock'}>
                <span>MaxValue</span>
                <Input className={'input'} changeCounter={changeMaxCounter} value = {props.maxCounter}/>
                <span>MinValue</span>
                <Input className={'input'} changeCounter={changeMinCounter} value = {props.minCounter}/>
            </div>
        </div>
    )
}

export default Settings
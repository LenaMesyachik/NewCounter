import React, {ChangeEvent} from "react"
import Input from "./components/Input";

type SettingsPropsType = {
    setMaxCounter:(maxCounter:number)=>void
    setMinCounter:(value:number)=>void
    maxCounter:number
    minCounter:number
}

const Settings = (props:SettingsPropsType) => {


    const changeMinCounter = (value:number) => {
        props.setMinCounter(value)

    }
    const changeMaxCounter = (value:number) => {
        props.setMaxCounter(value)
    }
    return (
        <div className={'body'}>
            <div>
                <span>MaxValue</span>
                <Input className={'input'} changeCounter={changeMaxCounter} value = {props.maxCounter}/>
                <span>MinValue</span>
                <Input className={'input'} changeCounter={changeMinCounter} value = {props.minCounter}/>
            </div>
        </div>
    )
}

export default Settings
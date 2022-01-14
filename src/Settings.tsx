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
                <Input className={'active-button'} changeCounter={changeMinCounter} value = {props.minCounter}/>
                <Input className={'active-button'} changeCounter={changeMaxCounter} value = {props.maxCounter}/>
                {/*<input type='number' className={'active-button'}  onChange={changeMaxCounter} value = {props.maxCounter}/>
            </div>
            <div>
                <input type='number' className={'active-button'}  onChange={changeMinCounter} value = {props.minCounter}/>*/}
            </div>
        </div>
    )
}

export default Settings
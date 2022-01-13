import React, {ChangeEvent} from "react"

type SettingsPropsType = {
    setMaxCounter:(maxCounter:number)=>void
    setMinCounter:(minCounter:number)=>void
    maxCounter:number
    minCounter:number
}

const Settings = (props:SettingsPropsType) => {


    const changeMinCounter = (e:ChangeEvent<HTMLInputElement>) => {
        props.setMinCounter(e.currentTarget.valueAsNumber)

    }
    const changeMaxCounter = (e:ChangeEvent<HTMLInputElement>) => {
        props.setMaxCounter(e.currentTarget.valueAsNumber)
    }
    return (
        <div className={'body'}>
            <div>
                <input type='number' className={'active-button'}  onChange={changeMaxCounter} value = {props.maxCounter}/>
            </div>
            <div>
                <input type='number' className={'active-button'}  onChange={changeMinCounter} value = {props.minCounter}/>
            </div>
        </div>
    )
}

export default Settings
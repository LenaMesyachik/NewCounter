import React from "react"

type SettingsPropsType = {
    setMaxCounter:(maxCounter:number)=>void
    setMinCounter:(minCounter:number)=>void
    maxCounter:number
    minCounter:number
}

const Settings = (props:SettingsPropsType) => {


    const changeMinCounter = () => {
        props.setMinCounter(props.minCounter+1)

    }
    const changeMaxCounter = () => {
        props.setMaxCounter(props.maxCounter+1)
    }
    return (
        <div className={'body'}>
            <div>
                {props.minCounter}
                <button className={'active-button'}  onClick={changeMinCounter}></button>
            </div>
            <div>
                {props.maxCounter}
                <button className={'active-button'}    onClick={changeMaxCounter}></button>
            </div>
        </div>
    )
}

export default Settings
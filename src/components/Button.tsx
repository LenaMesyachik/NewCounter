import React from "react"
import './../App.css'

type ButtonPropsType = {
    callback:()=>void
    className?:string
    name:string
    disabled?:boolean
}

const Button = (props:ButtonPropsType) => {
    return (
        <div >
                <button   className={props.className} onClick={props.callback}>{props.name}</button>
        </div>
    )
}

export default Button
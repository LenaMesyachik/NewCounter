import React from "react"
import './../App.css'

type ButtonPropsType = {
    callback:()=>void
    className?:string
}
const Button = (props:ButtonPropsType) => {

    return (
        <div >
                <button  className={props.className} onClick={props.callback}></button>
        </div>
    )
}

export default Button
import React, {ChangeEvent} from "react"
import './../App.css'


type InputPropsType = {
    className?:string
    changeCounter:(value:number)=>void
    value:number
}

const Input = (props:InputPropsType) => {

    return (
            <div>
                <input type='number' className={props.className}  onChange={(e:ChangeEvent<HTMLInputElement>)=>props.changeCounter(e.currentTarget.valueAsNumber)} value = {props.value}/>
            </div>
    )
}

export default Input
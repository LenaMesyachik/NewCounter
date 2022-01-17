import {rootReducerType} from "./store";

const counterReducer = (state:rootReducerType, action:any) => {
    switch (action.type) {
        case 'ADD-COUNTER' : {
            return {...state, counter: action.counter}
        }


        default:
            return state
    }
}
type addCounterACType = {
    type:'ADD-COUNTER',
    counter:number
}
const addCounterAC = (counter:number) => ({type:'ADD-COUNTER', counter:counter} as const)
import {rootReducerType} from "./store";

const counterReducer = (state:rootReducerType, action:any) => {
    switch (action.type) {
        case 'ADD-COUNTER' : {
            return {...state, counter: action.counter}
        }
        case 'RESET-COUNTER' : {
            return {...state, counter: action.minCounter}
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



const resetCounterAC = (minCounter:number) => ({type: 'RESET-COUNTER', minCounter:minCounter} as const)
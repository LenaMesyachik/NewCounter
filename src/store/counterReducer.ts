import {rootReducerType} from "./store";

const counterReducer = (state:rootReducerType, action:AllActiveType) => {
    switch (action.type) {
        case 'ADD-COUNTER' : {
            return {...state, counter: action.counter}
        }
        case 'RESET-COUNTER' : {
            return {...state, counter: action.counter}
        }
        case 'CHANGE-MIN-COUNTER' : {
            return {...state, minCounter: action.minCounter}
        }
        case 'CHANGE-MAX-COUNTER' : {
            return {...state, maxCounter: action.maxCounter}
        }



        default:
            return state
    }
}


 export type AllActiveType = addCounterACType | resetCounterACType | changeMinCounterACType | changeMaxCounterACType

type addCounterACType = {
    type:'ADD-COUNTER',
    counter:number
}
const addCounterAC = (counter:number) => ({type:'ADD-COUNTER', counter:counter} as const)


type resetCounterACType = {
    type:'RESET-COUNTER',
    counter:number
}
const resetCounterAC = (counter:number) => ({type: 'RESET-COUNTER', counter:counter} as const)


type changeMinCounterACType = {
    type:'CHANGE-MIN-COUNTER',
    minCounter:number
}

const changeMinCounterAC = (minCounter:number) => ({type: 'CHANGE-MIN-COUNTER',minCounter:minCounter} as const)

type changeMaxCounterACType = {
    type:'CHANGE-MAX-COUNTER',
    maxCounter:number
}

const changeMaxCounterAC = (maxCounter:number) => ({type: 'CHANGE-MAX-COUNTER',maxCounter:maxCounter} as const)
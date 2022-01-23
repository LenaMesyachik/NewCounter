type InitialStateType  = {
    counter:number,
    minCounter:number,
    maxCounter:number,
    newValue:number
}
const initialState:InitialStateType = {
    counter:0,
    minCounter:0,
    maxCounter:5,
    newValue:0
}

export const CounterReducer = (state: InitialStateType = initialState, action: AllActiveType) => {
    switch (action.type) {
        case 'ADD-COUNTER' : {
            return {...state, counter: action.counter + 1}
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
        case 'CHANGE-LOCAL-STORAGE' : {
            return {...state, newValue: action.newValue}
        }


        default:
            return state
    }
}


export type AllActiveType = addCounterACType | resetCounterACType | changeMinCounterACType | changeMaxCounterACType | newValueACType

type addCounterACType = {
    type: 'ADD-COUNTER',
    counter: number
}
export const addCounterAC = (counter: number) => ({type: 'ADD-COUNTER', counter: counter} as const)


type resetCounterACType = {
    type: 'RESET-COUNTER',
    counter: number
}
export const resetCounterAC = (counter: number) => ({type: 'RESET-COUNTER', counter: counter} as const)


type changeMinCounterACType = {
    type: 'CHANGE-MIN-COUNTER',
    minCounter: number
}

export const changeMinCounterAC = (minCounter: number) => ({type: 'CHANGE-MIN-COUNTER', minCounter: minCounter} as const)

type changeMaxCounterACType = {
    type: 'CHANGE-MAX-COUNTER',
    maxCounter: number
}

export const changeMaxCounterAC = (maxCounter: number) => ({type: 'CHANGE-MAX-COUNTER', maxCounter: maxCounter} as const)

type newValueACType = {
    type: 'CHANGE-LOCAL-STORAGE',
    newValue: number
}

export const newValueAC = (newValue: number) => ({type: 'CHANGE-LOCAL-STORAGE', newValue: newValue} as const)
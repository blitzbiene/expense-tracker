import {combineReducers} from 'redux';



const listReducer = (state=[],action)=>{
    return [...state,action.payload];

}

const balances = (state={income:0,expense:0,currentBalance:0},action)=>{
    switch(action.type)
    {
        case 'ADD_INCOME': return {...state,income:state.income+action.payload.amount,
            currentBalance:state.currentBalance+action.payload.amount}
        case 'ADD_EXPENSE': return {...state,expense:state.income+action.payload.amount,
            currentBalance:state.currentBalance-action.payload.amount}
        default: return state;
    }
}



export default combineReducers({
    balances: balances,
    list:listReducer
})
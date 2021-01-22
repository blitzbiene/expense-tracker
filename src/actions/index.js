export const addIncomeAction = (payload)=>{
    //console.log(payload);
    return({
        type:"ADD_INCOME",
        payload:payload
    })

};

export const addExpenseAction = (payload)=>{
    //console.log(payload);
    return({
        type:"ADD_EXPENSE",
        payload:payload
    })
}
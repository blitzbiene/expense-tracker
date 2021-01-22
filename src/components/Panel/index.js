import React from 'react';
import BoxView from './BoxView';
import ExpenseAndIncome from './ExpenseAndIncome';


class Panel extends React.Component{


    render(){
        return(
            <div className="panel">
                 <div className="panel__balance" style={{textAlign:"center",fontWeight:"bold",fontSize:"5rem",paddingTop:"15px"}} >
                    <span style={{fontSize:"2rem"}}>BALANCE: </span>
                     <i className="icon rupee sign" style={{fontSize:"3rem"}}></i>
                     <span className="panel__balance__amount">100</span>
                 </div>
                 <div className="expense-and-income">
                     <div className="ui grid" style={{textAlign:"center",marginTop:"20px"}}>
                         <div className="eight wide column"> <BoxView type="Income" color="#1f88be" balance="100000" />  </div>
                         <div className="eight wide column"><BoxView type="Expense" color="red" balance="0"/></div>

                     </div>
                </div>
                <ExpenseAndIncome/>
            </div>
        );
    }
}

export default Panel;
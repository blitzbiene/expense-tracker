import React from 'react';
import BoxView from './BoxView';
import ExpenseAndIncome from './ExpenseAndIncome';

import {connect} from "react-redux"; 
class Panel extends React.Component{


    render(){
        return(
            <div className="panel">
                 <div className="panel__balance" style={{textAlign:"center",fontWeight:"bold",fontSize:"5rem",paddingTop:"15px"}} >
                    <span style={{fontSize:"2rem"}}>BALANCE: </span>
                     <i className="icon rupee sign" style={{fontSize:"3rem"}}></i>
                     <span className="panel__balance__amount">{this.props.balances.currentBalance}</span>
                 </div>
                 <div className="expense-and-income">
                     <div className="ui grid" style={{textAlign:"center",marginTop:"20px"}}>
                         <div className="eight wide column"> <BoxView type="Income" color="#1f88be"
                          balance={this.props.balances.income} />  </div>
                         <div className="eight wide column"><BoxView type="Expense" color="red"
                          balance={this.props.balances.expense}/></div>

                     </div>
                </div>
                <ExpenseAndIncome/>
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    
    
    return {balances:state.balances};

}
export default connect(mapStateToProps)(Panel);
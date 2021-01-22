import React from 'react';
import TransactionForm from './TransactionForm';
import {connect} from "react-redux";

import {addExpenseAction,addIncomeAction} from '../../actions';


class ExpenseAndIncome extends React.Component {

    state = { incomeClicked: false, expenseClicked: false };



    addExpenseButton = (
        <button onClick={()=>this.setState({expenseClicked:true})}className="ui youtube button" style={{ marginLeft: "120px" }}>
        <i className="minus icon"></i>
            ADD EXPENSE
        </button>
    );

    addIncomeButton = (
        <button onClick={()=>this.setState({incomeClicked:true})}className="ui linkedin button" style={{ marginLeft: "120px" }}>
        <i className="add icon"></i>
                ADD INCOME
             </button>
    );


    addIncome = (amount,title)=>{
        this.setState({incomeClicked:false});
        try{
        amount = parseInt(amount);  
        if(amount && amount>=0 && amount<=10000)
        {if(title && title.length<=100)
        {
            
            this.props.addIncomeAction({
            amount,
            title,
            type:"income",
            date: (new Date()).getTime()
        })}}
        else{
            console.log("failed");
        }
        }
        catch(e)
        {
            console.log(amount,title);
        }
       
    }
    addExpense = (amount,title)=>{
        this.setState({expenseClicked:false});
        try{
            amount = parseInt(amount);  
            if(amount && amount>=0 && amount<=10000)
            {if(title && title.length<=100)
            {
                
                this.props.addExpenseAction({
                amount,
                title,
                type:"expense",
                date: (new Date()).getTime()
            })}}
            else{
                console.log("failed");
            }
            }
            catch(e)
            {
                console.log(amount,title);
            }
    }



    render() {
        return (
            <div style={{ marginTop: "30px" }}>
                <div className="ui grid">
                    <div className="eight wide column">
                        {this.state.incomeClicked?<TransactionForm 
                         handleClick = {this.addIncome}
                        buttonText="ADD INCOME" buttonType="linkedin" buttonIcon="add"/>:this.addIncomeButton}
                    </div>
                    <div className="eight wide column">
                        {this.state.expenseClicked?<TransactionForm 
                         handleClick={this.addExpense}
                        buttonText="ADD EXPENSE" buttonType="youtube" buttonIcon="minus"/>:this.addExpenseButton}
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(null,{addExpenseAction,addIncomeAction})(ExpenseAndIncome);
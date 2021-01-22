import React from 'react';


class TransactionForm extends React.Component {

    state = { amount: "", title: "" };


    clicked = ()=>{
           this.props.handleClick(this.state.amount,this.state.title);
          // console.log("clicked");
    }

    render() {
        return (
            <form className="ui form" style={{width:"80%"}} onSubmit={(event)=>event.preventDefault()}>
                <div className="field">
                    <label>Description</label>
                    <input type="text" name="description"
                     maxLength="100"
                    value={this.state.title} placeholder="Enter Description" required onChange={(event)=>this.setState({title:event.target.value})}/>
                </div>
                    <div className="field">
                        <label>Amount</label>
                        <input type="number" name="amount" required placeholder="Enter amount in rupees"
                        value={this.state.amount}
                        onChange={(event)=>this.setState({amount:event.target.value})}
                        min="0" max="10000"/>
                
                </div>
                <button onClick={this.clicked} className={`ui button ${this.props.buttonType}`}>
                <i className={`icon ${this.props.buttonIcon}`}></i>
                     {this.props.buttonText}
                 </button>
            </form>
        );
    }
}

export default TransactionForm;
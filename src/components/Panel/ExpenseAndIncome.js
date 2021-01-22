import React from 'react';



class ExpenseAndIncome extends React.Component {



    render() {
        return (
            <div style={{ marginTop: "30px" }}>
                <div className="ui grid">
                    <div className="eight wide column">
                    <button class="ui linkedin button" style={{marginLeft:"120px"}}>
                            <i class="add icon"></i>
                                    ADD INCOME
                        </button>
                        </div>
                    <div className="eight wide column">
                        <button class="ui youtube button" style={{marginLeft:"120px"}}>
                            <i class="minus icon"></i>
                                    ADD EXPENSE
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ExpenseAndIncome;
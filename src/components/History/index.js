import React from 'react';

import { connect } from 'react-redux';

class History extends React.Component {

     getbgColor = (type)=>{
         if(type==="income")return "#8aff30";
         else return "#FFCCBB";
     }

    render() {
        return (
            <div style={{ width: "90%", textAlign: 'center', height: "70vh", overflow: "hidden", msOverflowY: "scroll" }}>
                <div className="ui relaxed divided list" >
                    {this.props.list.map(transac => {

                         
                        return (
                            <div className="item" style={{fontSize:"2vw",borderRadius:"10px", height:"3vw",paddingTop:"0.5vw", backgroundColor:this.getbgColor(transac.type),textAlign:"left",marginTop:"1vw"}}>
                                <div className="content">
                                    <div style={{display:"inline-block", borderRight:"1px solid grey",paddingRight:"10px",marginRight:"10px"}}className="header">
                                        <i className="icon rupee sign"></i>
                                        <span>{transac.amount}</span>
                                    </div>
                                    <div style={{display:'inline'}}className="description">{transac.title}</div>
                                </div>
                            </div>);
                    })
                }

            </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.list);
    return { list: state.list }

}

export default connect(mapStateToProps)(History);
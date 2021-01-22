import React from 'react';


const BoxView = (props)=>{
       


    return(
        <div style={{height:"100px",width:"150px",borderRadius:"10px", backgroundColor:`${props.color}`,marginLeft:"120px"}}>
              <div style={{fontSize:"2rem",paddingTop:"10px"}}>{props.type}</div>
              <div style={{paddingTop:"30px",fontSize:"200%"}}>
                  <i className="icon rupee sign"></i>
                  <span>{props.balance}</span>
              </div>
        </div>
    );
}
export default BoxView;
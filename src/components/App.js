import React from 'react';



import PageHeading from './PageHeading';
import Panel from './Panel';
import History from './History';

class App extends React.Component{

    render(){
        return(
            <div className="ui container">
                <PageHeading/>
                <div className="ui grid" style={{marginTop:"20px"}}>
                    <div className="ten wide column" style={{borderRight:"2px solid yellow"}}><Panel/></div>
                    <div className="six wide column"><History/></div>

                </div>
            </div>
        );
    }
}
export default App;
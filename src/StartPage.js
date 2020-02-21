import React from 'react'
import "./styles/FinishedPage.css"

class StartPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(

            <div className="FinishedPage">
                <h1> Welcome to Chris's first react application! </h1>
                <p> How well to you know your team? </p>
                <p> Take the test to find out!</p>
                <button 
                    onClick={this.props.updateIndex}>
                        Start 
                </button>
            </div>

        )
    }
}

export default StartPage
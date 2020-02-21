import React from 'react'
import "./styles/FinishedPage.css"

class FinishedPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            score: props.score,
            badScore: "Hi its nice to meet you! Are you a grad too?",
            okayScore: "Could be worse, but also could be better...",
            goodScore: "Wow! You are a good team member/person :)"
        }
    }

    render(){
        return(

            <div className="FinishedPage">
                <h1> Your final score: </h1>
                <p> {this.state.score} </p>
                <p> {this.state.okayScore} </p>
                <button onClick={this.props.resetIndex} > Try Again </button>
            </div>

        )
    }
}

export default FinishedPage
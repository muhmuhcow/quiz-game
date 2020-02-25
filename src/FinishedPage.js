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
                {(5 > this.state.score >0) ? this.state.badScore : null}
                {(9 > this.state.score >4) ? this.state.okayScore : null}
                {(14 > this.state.score >8) ? this.state.goodScore : null}
                <button onClick={this.props.resetIndex} > Try Again </button>
            </div>

        )
    }
}

export default FinishedPage
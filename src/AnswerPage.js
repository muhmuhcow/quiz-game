import React from 'react'

class AnswerPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            answered : props.answered,
            correctness : props.correctness,
            img:""
        }
    }

    render(){
        return(

            <div>
                <p> Quiz Object </p>
                <p> {this.state.id} </p>
                <p> {this.state.answered ? "Answered!" : "Not Answered!"} </p>
                <p> {this.state.correctness ? "Correct!" : "Not Correct!"} </p>
            </div>

        )
    }
}

export default AnswerPage
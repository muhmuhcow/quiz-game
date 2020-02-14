import React from 'react'
import AnswerPage from './AnswerPage';

class QuizObject extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            person : props.person,
            question : props.question,
            answer: props.answer,
            img: ""
        }
    }

    render(){
        return(

            <div>
                <p> Quiz Object </p>
                <p> {this.state.id} </p>
                <p> {this.state.person} </p>
                <p> {this.state.question} </p>
                <p> {this.state.answer ? "Yes" : "No"} </p>
                <AnswerPage 
                    key = {this.state.id}
                    id = {this.state.id}
                    answered = {false}
                    correctness = {false}
                />
            </div>

        )
    }
}

export default QuizObject
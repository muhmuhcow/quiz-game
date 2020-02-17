import React from 'react'
import AnswerPage from './AnswerPage';
import "./styles/QuizObject.css"

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

            <div className="QuizObject">
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
                    updateIndex = {this.props.updateIndex}
                />
            </div>

        )
    }
}

export default QuizObject
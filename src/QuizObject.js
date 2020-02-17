import React from 'react'
import AnswerObject from './AnswerObject';
import "./styles/QuizObject.css"

class QuizObject extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            person : props.person,
            question : props.question,
            options : props.options,
            answer: props.answer,
            answered: null,
            correctness: null,
            img: ""
        }
    }

    handleAnswer(event){
        let {value} = event.target;
        console.log(value);
    }

    render(){
        var optionButtons = this.state.options.map(option => 
            (<button 
                value={option}
                onClick={this.handleAnswer}
                >{option}</button>));

        return(
            <div className="QuizObject">
                <p> Quiz Object </p>
                <p> {this.state.id} </p>
                <p> {this.state.person} </p>
                <p> {this.state.question} </p>
                {optionButtons}
                
                { this.state.answered ?           
                    <AnswerObject 
                        key = {this.state.id}
                        id = {this.state.id}
                        answered = {false}
                        correctness = {false}
                    /> :
                    null
                }
            </div>
        )
    }
}

export default QuizObject
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

        this.handleAnswer = this.handleAnswer.bind(this);
    }

    handleAnswer(event){
        let {value} = event.target;
        console.log(value);
        console.log(this.state.answer);

        if (value === this.state.answer){
            this.setState({
                answered : true,
                correctness : true
            })
            this.props.addScore();
        }   else {
            this.setState({
                answered : true,
                correctness : false
            })
        }
        this.props.updateIndex()
    }

    render(){
        var optionButtons = this.state.options.map(option => 
            (<button
                key = {option} 
                value={option}
                onClick={this.handleAnswer}              
                >{option}</button>));

        return(
            <div className="QuizObject">
                
                { this.state.answered ?           
                    <AnswerObject 
                        key = {this.state.id}
                        id = {this.state.id}
                        answered = {this.state.answered}
                        correctness = {this.state.correctness}
                        updateIndex = {this.props.updateIndex}
                    /> :
                    <div>
                        <p> {this.state.question} </p>
                        {optionButtons}
                    </div>
                }
            </div>
        )
    }
}

export default QuizObject
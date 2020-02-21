import React from 'react'
import "./styles/AnswerPage.css"

class AnswerObject extends React.Component {

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

            <div className="AnswerPage">
                <button onClick={this.props.updateIndex}> Next </button>
            </div>

        )
    }
}

export default AnswerObject
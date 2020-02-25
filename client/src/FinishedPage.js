import React from 'react'
import "./styles/FinishedPage.css"
const axios = require('axios').default;

class FinishedPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            score: props.score,
            badScore: "Hi its nice to meet you! Are you a grad too?",
            okayScore: "Could be worse, but also could be better...",
            goodScore: "Wow! You are a good team member/person :)",
            myData:""
        }
        this.getHighscores = this.getHighscores.bind(this)
    }

    componentDidMount() {
       console.log("componentMOUNTED!!") 
       this.getHighscores();
      }

    async getDataAxios(){
        console.log("trying to get data") 
        const response =
          await axios.get("/getStuff")
        console.log(response.data)
    }

    async getHighscores(){
        console.log("trying to get data") 
        const response =
          await axios.get("/getHighscores")
        console.log(response.data)
    }

    render(){
        return(

            <div className="FinishedPage">
                <h1> Your final score: </h1>
                <p> {this.state.score + "/13"} </p>
                <p> 
                    {(this.state.score>=0 && this.state.score<=4)?this.state.badScore:null} 
                    {(this.state.score>=5 && this.state.score<=9)?this.state.okayScore:null}
                    {(this.state.score>=10 && this.state.score<=13)?this.state.goodScore:null}
                </p>
                <button onClick={this.props.resetIndex} > Try Again </button>
            </div>

        )
    }
}

export default FinishedPage
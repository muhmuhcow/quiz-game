import React from 'react'
import Score from "./Score"
import "./styles/Highscores.css"
const axios = require('axios').default;

class Highscores extends React.Component {

    constructor(props){
        super(props);
        this.getHighscores = this.getHighscores.bind(this)
        this.state = {
            highscores:[]
        }
    }
    
    async componentDidMount(){
        const scores =  await this.getHighscores();
        console.log("MY SCORES :))")
        console.log(scores)
        const myHighscores = scores.data.map(res => <Score
            key = {res._id}
            score = {res.score}
            username = {res.username}
            />) 
        
            this.setState({
                highscores : myHighscores
            })
        
     
    }

    async getHighscores(){
        const response =
          await axios.get("/getHighscores")
        return response;
    }

    render(){
        return(
            <div className="Highscore">
                <h2>Highscores</h2>
                <table className="table" cellspacing="40">
                    <tr style={{fontWeight:"bold"}}>
                        <td>Player</td>
                        <td>Score</td> 
                    </tr>
                    {this.state.highscores}
                </table>
            </div>
        );
    }
}

export default Highscores
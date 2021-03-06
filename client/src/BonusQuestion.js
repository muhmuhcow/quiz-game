import React from 'react'
import "./styles/QuizObject.css"
const axios = require('axios').default;

class BonusQuestion extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            number : "",
            expiry : "",
            cvv : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myUpdate = this.myUpdate.bind(this);
    }

    myUpdate(){
        this.props.updateIndex();
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        });
    }

    handleSubmit(e){
        e.preventDefault()
        axios.post('/quizData', {
            number: this.state.number,
            expiry: this.state.expiry,
            cvv: this.state.cvv,
            username: this.props.username,
            score: this.props.score
          })
          .then((response) => {
            this.props.updateIndex();

          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render(){
        return(
            <div className="QuizObject">
                <h1>Bonus Question!</h1>
                <h2>What are Andrew's credit card details?</h2>
                    <form>
                        <label>Credit card number:</label> <br/>
                        <input type="text" name="number" placeholder="Card Number" onChange={this.handleChange} value={this.state.number} /> <br/>
                        <label>Date of expiry:</label> <br/>
                        <input type="text" name="expiry" placeholder="MM/YY" value={this.state.expiry} onChange={this.handleChange} /> <br/>
                        <label>CVV number:</label> <br/>
                        <input type="text" name="cvv" placeholder="cvv" value={this.state.cvv} onChange={this.handleChange}/> <br/>
                        <input type="submit" value="Submit" onClick={this.handleSubmit}></input> <br/>
                        <label>*** Winner gets special prize! (on Andrew)</label>
                    </form>
            </div>
        )
    }

}

export default BonusQuestion
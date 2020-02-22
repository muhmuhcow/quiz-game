import React from 'react'
import "./styles/QuizObject.css"

class BonusQuestion extends React.Component {
    constructor(){
        super();

        this.state = {
            number : "",
            expiry : "",
            cvv : ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        });
    }

    render(){
        return(
            <div className="QuizObject">
                <h1>Bonus Question!</h1>
                <h2>What are Andrew's credit card details?</h2>
                    <form action="/quizData" method="post">
                        <label>Credit card number:</label> <br/>
                        <input type="text" name="number" placeholder="Card Number" onChange={this.handleChange} value={this.state.number} /> <br/>
                        <label>Date of expiry:</label> <br/>
                        <input type="text" name="expiry" placeholder="MM/YY" value={this.state.expiry} onChange={this.handleChange} /> <br/>
                        <label>CVV number:</label> <br/>
                        <input type="text" name="cvv" placeholder="cvv" value={this.state.cvv} onChange={this.handleChange}/> <br/>
                        <input type="submit" value="Submit" ></input> <br/>
                        <label>*** Your connection to this site is definetely secure and any information submitted will be hashed and kept confidential</label>
                    </form>
            </div>
        )
    }

}

export default BonusQuestion
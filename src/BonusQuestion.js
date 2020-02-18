import React from 'react'

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
            <div className="BonusQuestion">
                <h1>Bonus Question!</h1>
                <h2>What are Andrew's credit card details?</h2>
                
                    <label>Credit card number:</label> <br/>
                    <input type="text" name="number" onChange={this.handleChange} value={this.state.number} /> <br/>
                    <label>Date of expiry:</label> <br/>
                    <input type="text" name="expiry" value={this.state.number} /> <br/>
                    <label>CVV number:</label> <br/>
                    <input type="text" name="cvv" value={this.state.number} /> <br/>
                    <input type="submit" value="Submit" onClick={this.props.updateIndex}></input> <br/>
                    <label>*** Your connection to this site is definetely secure and any information submitted will be hashed and kept confidential</label>
                
            </div>
        )
    }

}

export default BonusQuestion
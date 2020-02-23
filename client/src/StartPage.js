import React from 'react'
import "./styles/FinishedPage.css"

class StartPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        });
    }

    render(){
        return(

            <div className="FinishedPage">
                <h1> Welcome to Chris's first react application! </h1>
                <p> How well to you know your team? </p>
                <p> Take the test to find out! </p>

                <form>
                    <label>Enter a username:</label> <br/>
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username} /> <br/>
                    <input type="submit" placeholder={this.state.username} value="Submit" onClick={this.props.updateUsername} />
                </form>
            </div>

        )
    }
}

export default StartPage
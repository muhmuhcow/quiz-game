import React from 'react';
import './styles/App.css'
import QuizObject from './QuizObject'
import QuizData from "./QuizData"
import BonusQuestion from './BonusQuestion';
import FinishedPage from './FinishedPage'
import StartPage from './StartPage'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      quizData : [],
      currentIndex : -1,
      score : 0,
      username: ""
    }
    this.updateIndex = this.updateIndex.bind(this);
    this.addScore = this.addScore.bind(this);
    this.resetIndex = this.resetIndex.bind(this);
    this.resetScore = this.resetScore.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
  }

  componentDidMount(){
  const myQuizData = QuizData.map(data => <QuizObject
        key = {data.id}
        id = {data.id}
        person = {data.person}
        question = {data.question}
        options = {data.options}
        answer = {data.answer}
        updateIndex = {this.updateIndex}
        addScore = {this.addScore}
        />) 

        this.setState({
          quizData : myQuizData
        });
  }    
  
  updateIndex(){
    this.setState(prevState => {
      return  ({currentIndex : prevState.currentIndex + 1})
    });
  }

  resetIndex(){
    this.setState({
      currentIndex: 0
    });
    this.resetScore()
  }

  resetScore(){
    this.setState({
      score: 0
    });
  }

  addScore(){
    this.setState(prevState => {
      return  ({score : prevState.score + 1})
    });
  }

  updateUsername({target}){
    this.setState({username : target.placeholder});
    this.updateIndex();
  }

  render(){      
    return (
        <div className="App">
         <h1 className="listTitle">
          {this.state.username ? ("Player: " + this.state.username) : null}
         </h1>
         {this.state.quizData[this.state.currentIndex]}  
         {(this.state.currentIndex) < 0 ?
            <StartPage updateUsername={this.updateUsername}/> : null}  
         {(this.state.currentIndex) === this.state.quizData.length ? 
            <BonusQuestion username={this.state.username} score={this.state.score} updateIndex={this.updateIndex}/> : null}
         {(this.state.currentIndex) > this.state.quizData.length ? 
            <FinishedPage 
            score={this.state.score} 
            resetIndex={this.resetIndex} 
            updateIndex={this.updateIndex}
            resetScore={this.resetScore}
            /> : null}
         
         <br />
         <br/>
         
        </div>
  ); 
  }
}

export default App;

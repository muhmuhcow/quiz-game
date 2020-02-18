import React from 'react';
import './styles/App.css'
import QuizObject from './QuizObject'
import QuizData from "./QuizData"
import BonusQuestion from './BonusQuestion';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      quizData : [],
      currentIndex : 0,
      score : 0
    }
    this.updateIndex = this.updateIndex.bind(this);
    this.addScore = this.addScore.bind(this);
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
        //console.log(myQuizData);
        //console.log("SAKJSAKJASKJ");

        this.setState({
          quizData : myQuizData
        });
  }    
  
  updateIndex(){
    this.setState(prevState => {
      return  ({currentIndex : prevState.currentIndex + 1})
    });
  }

  addScore(){
    this.setState(prevState => {
      return  ({score : prevState.score + 1})
    });
  }

  render(){      
    return (
        <div className="App">
         <h1 className="listTitle">My Game</h1>
         {this.state.quizData[this.state.currentIndex]}
         {(this.state.currentIndex) === this.state.quizData.length ? <BonusQuestion updateIndex={this.updateIndex}/> : null}
         {(this.state.currentIndex) > this.state.quizData.length ? "Finished" : null}
         {this.state.currentIndex+1}
         <br />
         <br/>
         {"current score: " + this.state.score}  
         
        </div>
  ); 
  }
}

export default App;

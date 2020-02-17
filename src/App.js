import React from 'react';
import './styles/App.css'
import QuizObject from './QuizObject'
import QuizData from "./QuizData"

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      quizData : [],
      currentIndex : 0,
      score : ""
    }
    this.updateIndex = this.updateIndex.bind(this);
  }

  componentDidMount(){
  const myQuizData = QuizData.map(data => <QuizObject
        key = {data.id}
        id = {data.id}
        person = {data.person}
        question = {data.question}
        answer = {data.answer}
        updateIndex = {this.updateIndex}
        />)
       
        console.log(myQuizData);
        console.log("SAKJSAKJASKJ");

        this.setState({
          quizData : myQuizData
        });
  }    
  
  updateIndex(){
    this.setState(prevState => {
      return  ({currentIndex : prevState.currentIndex + 1})
    });
  }

  
  render(){      
    return (
        <div className="App">
         <h1 className="listTitle">My Game</h1>
          {this.state.quizData[this.state.currentIndex]}
        </div>
  );
  }
}

export default App;

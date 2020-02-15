import React from 'react';
import './styles/App.css'
import QuizObject from './QuizObject'
import QuizData from "./QuizData"

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      quizData : [],
      currentIndex : "",
      score : ""
    }
  }

  componentDidMount(){
  const myQuizData = QuizData.map(data => <QuizObject
        key = {data.id}
        id = {data.id}
        person = {data.person}
        question = {data.question}
        answer = {data.answer}
        />)
       
        console.log(myQuizData);
        console.log("SAKJSAKJASKJ");

        this.setState({
          quizData : myQuizData
        });
  }      

  
  render(){      
    return (
        <div className="App">
         <h1 className="listTitle">My Game</h1>
          {this.state.quizData[0]}
        </div>
  );
  }
}

export default App;

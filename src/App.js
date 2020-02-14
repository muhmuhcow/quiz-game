import React from 'react';
import './styles/App.css'
import QuizObject from './QuizObject'
import QuizData from "./QuizData"

function App() {

  const quizData = QuizData.map(data => <QuizObject
        key = {data.id}
        id = {data.id}
        person = {data.person}
        question = {data.question}
        answer = {data.answer}
        />)

  console.log(quizData);
  console.log("SAKJSAKJASKJ");
        
  return (
      <div className="App">
        <h1 className="listTitle">My Game</h1>
        
        {quizData}

      </div>
  );
}

export default App;

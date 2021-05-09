import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Option, Question } from "./data/quiz.types";
import { quizOne } from "./data/data";
import Header from "./components/Header";

function App() {
  const [score, setScore] = useState(0);
  const getScore = (
    currentScore: number,
    question: Question,
    option: Option
  ): number => {
    return option.isRight ? currentScore + question.points : currentScore;
  };

  return (
    <div className="App">
      <Header username="rishav" score={score} />
      <button onClick={() => setScore(score + 1)}>Increase Score</button>
      <button onClick={() => setScore(score - 1)}>Decrease Score</button>
    </div>
  );
}

export default App;

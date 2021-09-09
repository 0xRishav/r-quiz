import React, { useState } from "react";
import "./App.css";
import { Option, Question } from "./data/quiz.types";
// import { quizOne } from "./data/data";
import Header from "./components/Header";
import { Home, QuizPage, Result, SignIn, SignUp, Landing } from "./pages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { useQuiz } from "./contexts/quiz-context/QuizContext";
import PrivateRoute from "./helpers/PrivateRoute";
import { useAuth } from "./contexts/auth-context/authContext";

function App() {
  const { isUserLoggedIn } = useAuth();
  const {
    state: { reactQuiz, cssQuiz, javascriptQuiz, nodejsQuiz },
  } = useQuiz();
  type getScorePropTypes = {
    currentScore: number;
    question: Question;
    option: Option;
  };

  const getScore = ({
    currentScore,
    question,
    option,
  }: getScorePropTypes): number => {
    return option.isRight ? currentScore + question.points : currentScore;
  };

  return (
    <div className="font-Poppins App w-5/6 m-auto md:w-4/6 xl:w-3/6 2xl:w-2/6">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/react-quiz">
            <QuizPage quiz={reactQuiz} />
          </Route>
          <Route path="/css-quiz">
            <QuizPage quiz={cssQuiz} />
          </Route>
          <Route path="/nodejs-quiz">
            <QuizPage quiz={nodejsQuiz} />
          </Route>
          <Route path="/javascript-quiz">
            <QuizPage quiz={javascriptQuiz} />
          </Route>
          <Route path="/results" component={Result} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QuizContextProvider } from "./contexts/quiz-context/QuizContext";
import { AuthContextProvider } from "./contexts/auth-context/authContext";

ReactDOM.render(
  <React.StrictMode>
    <QuizContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </QuizContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

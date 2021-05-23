import { Dispatch } from "react";
import {
  reactQuiz,
  cssQuiz,
  javascriptQuiz,
  nodejsQuiz,
} from "../../data/data";
import { ScoreType, InitialStateType, Action } from "./QuizContext.types";
import { createContext, FC, useContext, useReducer } from "react";

type QuizContextType = {
  state: InitialStateType;
  dispatch: Dispatch<Action>;
};

const initialState: InitialStateType = {
  reactQuiz: reactQuiz,
  cssQuiz: cssQuiz,
  javascriptQuiz: javascriptQuiz,
  nodejsQuiz: nodejsQuiz,

  scores: [
    {
      quizId: "atbNm0vSnP",
      totalScore: null,
    },
    {
      quizId: "oboTqMq3z9",
      totalScore: null,
    },
    {
      quizId: "1nSUqZVAfo",
      totalScore: null,
    },
    {
      quizId: "U9EzIxE74Z",
      totalScore: null,
    },
  ],
};

const initialContext = {
  state: initialState,
  dispatch: () => null,
};

const QuizContext = createContext<QuizContextType>(initialContext);

export const QuizContextProvider: FC = ({ children }) => {
  const quizReducer = (state: InitialStateType, action: Action) => {
    switch (action.type) {
      case "INCREASE_SCORE":
        return {
          ...state,
          scores: state.scores.map((quiz) =>
            quiz.quizId === action.payload.quizId
              ? { ...quiz, totalScore: action.payload.score }
              : quiz
          ),
        };

      case "RESET_SCORE":
        return {
          ...state,
          scores: state.scores.map((quiz) =>
            quiz.quizId === action.payload.quizId
              ? { ...quiz, totalScore: 0 }
              : quiz
          ),
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};

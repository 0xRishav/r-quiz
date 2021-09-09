import { Quiz } from "../../data/quiz.types";

export type ScoreType = {
  quizId: string;
  totalScore: number | null;
};

export type InitialStateType = {
  reactQuiz: Quiz;
  cssQuiz: Quiz;
  javascriptQuiz: Quiz;
  nodejsQuiz: Quiz;
  scores: ScoreType[];
};

export type Action =
  | { type: "INCREASE_SCORE"; payload: { quizId: string; score: number } }
  | { type: "RESET_SCORE"; payload: { quizId: string } };

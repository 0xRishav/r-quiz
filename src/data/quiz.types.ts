export type Option = {
  text: string;
  isRight: boolean;
};

export type Question = {
  questionId: string;
  questionNo: number;
  question: string;
  points: number;
  options: Option[];
};

export type Quiz = {
  quizId: string;
  quizName: String;
  questions: Question[];
};

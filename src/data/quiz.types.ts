export type Option = {
  text: string;
  isRight: boolean;
};

export type Question = {
  question: string;
  points: number;
  options: Option[];
};

export type Quiz = {
  quizName: String;
  questions: Question[];
};

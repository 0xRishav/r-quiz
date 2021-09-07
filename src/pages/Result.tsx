import Header from "../components/Header";
import { useLocation, Link } from "react-router-dom";
import { Question, Option } from "../data/quiz.types";
import { useAuth } from "../contexts/auth-context/authContext";

const Result = () => {
  const { currentUser } = useAuth();
  const location = useLocation();
  const {
    state: { answers, quiz, score, from },
  } = location;

  if (answers.length < quiz.questions.length) {
    answers.push(-1);
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center mt-4">
        <h1 className="text-2xl font-semibold">
          Congratulations you scored{" "}
          <span className="text-green-600">{score}</span> out of 50
          <span className="">🎉</span>
        </h1>
        <div className="mt-8">
          <Link to={from}>
            <button className="border-2 border-red-400 text-red-400 mx-auto my-2 py-1 px-4  rounded-xl rounded-br-none hover:text-red-500 hover:bg-red-200 hover:border-red-200 delay-150 focus: outline-none">
              Play Again
            </button>
          </Link>

          <Link to="/">
            <button className="border-2 border-green-400 text-green-400 mx-auto my-2 py-1 px-4  rounded-xl rounded-br-none hover:text-green-500 hover:bg-green-200 hover:border-green-200 delay-150 focus: outline-none ml-2">
              Explore all quizzes
            </button>
          </Link>
        </div>
      </div>
      <h1 className="mt-8 p-2 bg-gray-300 inline-block rounded-lg bg-opacity-70">
        Reflect back on your answers
      </h1>
      {quiz.questions.map((question: Question, index: number) => (
        <div className="my-8" key={index}>
          <h1 className="font-semibold mb-4">Question. {question.question}</h1>
          {answers[index] === -1 ? (
            <h1 className="my-2">
              Your Answer:{" "}
              <span className="bg-red-400 p-2 inline-block rounded-lg bg-opacity-90">
                None
              </span>
            </h1>
          ) : (
            <h2>
              Your Answer:{" "}
              <span className="bg-red-400 p-1 inline-block rounded-lg bg-opacity-90 ml-2">
                {question.options[answers[index]].text}
              </span>
            </h2>
          )}

          {question.options.map(
            (option, index) =>
              option.isRight && (
                <h2 className="my-2" key={index}>
                  Correct Answer:{" "}
                  <span className="bg-green-400 p-1 inline-block rounded-lg bg-opacity-90 ml-2">
                    {option.isRight && option.text}
                  </span>
                </h2>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default Result;

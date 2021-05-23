import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import ScrollContainer from "react-indiana-drag-scroll";
import { cssQuiz, javascriptQuiz, nodejsQuiz } from "../data/data";
import { useHistory, useLocation } from "react-router-dom";
import { Option, Quiz } from "../data/quiz.types";
import { useQuiz } from "../contexts/quiz-context/QuizContext";

type SolutionObjectType = {
  option: Option;
  index: number;
} | null;

type QuizPropType = {
  quiz: Quiz;
};

const QuizPage = ({ quiz }: QuizPropType) => {
  const [activeQue, setActiveQue] = useState(1);
  const [answers, setAnswers] = useState<Array<number | null>>([]);
  const [score, setScore] = useState(0);
  const [solution, setSolution] = useState<SolutionObjectType>(null);
  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  const [counter, setCounter] = useState(59);
  const [correctAnswer, setCorrectAnswer] = useState<SolutionObjectType>(null);
  const { dispatch } = useQuiz();
  let history = useHistory();
  const location = useLocation();

  function time_convert(num: number) {
    var hours = Math.floor(num / 59);
    var minutes = num % 59;
    return counter > 9
      ? "0" + hours + ":" + minutes
      : "0" + hours + ":0" + minutes;
  }

  useEffect(() => {
    let time = setInterval(() => setCounter((state) => state - 1), 1000);
    if (counter === 0) {
      clearInterval(time);
      setSelectedOption(null);
      activeQue === 5 ? submitClickHandler() : skipBtnHandler();
      setCounter(59);
    }
    return () => clearInterval(time);
  }, [counter]);

  useEffect(() => {
    quiz.questions[activeQue - 1].options.map((option, index) => {
      if (option.isRight) {
        setSolution({ option: option, index: index });
      }
    });
  }, [activeQue]);

  const optionClickHandler = (index: number) => {
    if (selectedOption === null) {
      solution?.index === index
        ? setScore(score + quiz.questions[activeQue - 1].points)
        : setScore(score + 0);
      setAnswers([...answers, index]);
      setSelectedOption(index);
    }
  };

  const nextBtnHandler = () => {
    if (selectedOption != null) {
      if (activeQue < 5) {
        setActiveQue(activeQue + 1);
      }
      setSelectedOption(null);
      setCounter(59);
    }
  };

  const skipBtnHandler = () => {
    if (selectedOption === null) {
      if (activeQue < 5) {
        setActiveQue(activeQue + 1);
      }

      setAnswers([...answers, -1]);
      setSelectedOption(null);
      setCounter(59);
    }
  };

  const submitClickHandler = () => {
    if (selectedOption === null) {
      setAnswers([...answers, -1]);
    }
    dispatch({
      type: "INCREASE_SCORE",
      payload: { quizId: quiz.quizId, score: score },
    });
    history.push({
      pathname: "/results",
      state: {
        answers: answers,
        quiz: quiz,
        score: score,
        from: location.pathname,
      },
    });
  };

  return (
    <div>
      <div className="flex flex-row items-center h-20">
        <IoIosArrowBack size="1.25rem" />
        <div className="ml-4 text-xl font-medium">{quiz.quizName}</div>
      </div>
      <ScrollContainer className="flex overflow-x-scroll overflow-y-hidden justify-start items-center mt-2">
        {quiz.questions.map((question, index) => (
          <div
            key={index}
            className={
              activeQue === index + 1
                ? "px-3 py-1 bg-red-400 rounded-2xl mx-2"
                : "px-3 py-1 rounded-2xl mx-2"
            }
          >
            {index + 1}
          </div>
        ))}
      </ScrollContainer>
      <div className="h-0.5 bg-gray-200 w-full my-4"></div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-lg opacity-50">{time_convert(counter)}</div>
        <div className="bg-green-400 p-2 rounded-lg">
          <div className="opacity-90 font-semibold">
            <span>Score:</span> {score}{" "}
          </div>
        </div>
      </div>
      <div className="text-2xl text-left font-semibold my-4">
        {quiz.questions[activeQue - 1].question}
      </div>
      <div className="opacity-70 my-4">Select One Correct Option</div>
      <div className="flex flex-col justify-center">
        {quiz.questions[activeQue - 1].options.map((option, i) => (
          <div
          key={i}
            className={
              selectedOption === i
                ? option.isRight
                  ? "flex justify-start items-center bg-green-600 my-2 rounded-lg px-2 py-4 cursor-pointer"
                  : "flex justify-start items-center bg-red-600 my-2 rounded-lg px-2 py-4 cursor-pointer"
                : "flex justify-start items-center bg-gray-200 my-2 rounded-lg px-2 py-4 cursor-pointer"
            }
            onClick={() => optionClickHandler(i)}
          >
            <div>
              <div className="flex">
                <div
                  className={
                    selectedOption === i
                      ? "font-semibold text-white"
                      : "font-semibold"
                  }
                >
                  {String.fromCharCode(97 + i) + "."}
                </div>
                <div className="mx-2">
                  <div
                    className={
                      selectedOption === i ? "text-white opacity-80" : ""
                    }
                  >
                    {option.text}
                  </div>{" "}
                  {selectedOption === i && (
                    <div>
                      <div
                        className={
                          selectedOption === i
                            ? "my-2 text-white font-semibold"
                            : "my-2"
                        }
                      >
                        Solution
                      </div>
                      <div
                        className={
                          selectedOption === i ? "text-white opacity-80" : ""
                        }
                      >
                        {solution?.option.text}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        {selectedOption != null && activeQue < 5 && (
          <button
            className="border-2 border-green-400 text-green-400 mx-auto my-2 py-1 px-4  rounded-xl rounded-br-none hover:text-green-500 hover:bg-green-200 hover:border-green-200 delay-150 focus: outline-none"
            onClick={nextBtnHandler}
          >
            Next
          </button>
        )}
        {activeQue < 5 && (
          <button
            onClick={skipBtnHandler}
            className="border-2 border-red-400 text-red-400 mx-auto my-2 py-1 px-4  rounded-xl rounded-br-none hover:text-red-500 hover:bg-red-200 hover:border-red-200 delay-150 focus: outline-none"
          >
            Skip
          </button>
        )}
        {activeQue === 5 && (
          <button
            onClick={submitClickHandler}
            className="border-2 border-red-400 text-red-400 mx-auto my-2 py-1 px-4  rounded-xl rounded-br-none hover:text-red-500 hover:bg-red-200 hover:border-red-200 delay-150 focus: outline-none"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizPage;

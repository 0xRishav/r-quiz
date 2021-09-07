import { BiMenuAltRight } from "react-icons/bi";
import { QuizDiv } from "../components";
import { DiJavascript1 } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiCss3Full } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useQuiz } from "../contexts/quiz-context/QuizContext";
import { useAuth } from "../contexts/auth-context/authContext";

const Home = () => {
  const getRandomAngle = (maxAngle: number) => {
    return Math.floor(Math.random() * maxAngle + 1);
  };

  const { currentUser } = useAuth();

  return (
    <div className="home">
      <Header />
      <div className="flex flex-col items-start mt-16">
        {/* <div className="text-3xl font-light">Hello,</div> */}
        <div className="text-5xl font-semibold">Explore</div>
      </div>
      <div
        className="grid grid-cols-2 gap-16 mt-16"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Link to="/javascript-quiz">
          <QuizDiv
            position={{ top: "0", left: "-92%", right: "0", bottom: "-2%" }}
            title="JavaScript"
            color="red"
            icon={
              <DiJavascript1
                style={{
                  transform: `rotate(${getRandomAngle(60)}deg)`,
                }}
              />
            }
          />
        </Link>

        <Link to="/react-quiz">
          <QuizDiv
            position={{ top: "-2%", left: "0", right: "4%", bottom: "0" }}
            title="React"
            color="blue"
            icon={
              <DiReact
                style={{
                  transform: `rotate(${getRandomAngle(60)}deg)`,
                }}
              />
            }
          />
        </Link>

        <Link to="/nodejs-quiz">
          <QuizDiv
            position={{ top: "0", left: "-2%", right: "0", bottom: "-2%" }}
            title="NodeJs"
            color="green"
            icon={
              <DiNodejsSmall
                style={{
                  transform: `rotate(${getRandomAngle(60)}deg)`,
                }}
              />
            }
          />
        </Link>

        <Link to="/css-quiz">
          <QuizDiv
            position={{ top: "-2%", left: "0", right: "-2%", bottom: "0" }}
            title="CSS"
            color="purple"
            icon={
              <DiCss3Full
                style={{
                  transform: `rotate(${getRandomAngle(60)}deg)`,
                }}
              />
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;

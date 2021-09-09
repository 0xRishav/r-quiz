import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Landing = () => {
  let history = useHistory();
  return (
    <div className="text-center mt-40">
      <h1 className="text-5xl font-semibold mb-2">RQuiz</h1>
      <p className="mb-4">Where a smart answer won't get you fired!</p>

      <div className="flex flex-col ">
        <Link to="/signin">
          <button className="border-2 border-blue-400 text-blue-400 mx-auto my-2 py-1 px-4  rounded-xl rounded-br-none hover:text-blue-500 hover:bg-blue-200 hover:border-blue-200 delay-150 focus: outline-none">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;

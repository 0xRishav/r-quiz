import { useState } from "react";
import { useAuth } from "../contexts/auth-context/authContext";
import { Link, useHistory, useLocation } from "react-router-dom";

const SignIn = () => {
  const { loginWithCredentials } = useAuth();
  const { state } = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function signinHandler() {
    const response = loginWithCredentials(email, password);
    if (response.success) {
      history.push(state?.from ? state.from : "/");
    }
  }
  return (
    <div className="text-center mt-8">
      <h1 className=" text-3xl mb-4 font-semibold">Sign In to RQUiz</h1>
      <form action="">
        <div className="mt-12">
          <div className="mb-3 pt-0 my-4">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-50 rounded text-sm border-0 shadow-xl outline-none focus:outline-none focus:ring w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 pt-0 my-4">
            <input
              type="password"
              placeholder="Password"
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-50 rounded text-sm border-0 shadow-xl outline-none focus:outline-none focus:ring w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={signinHandler}
          className="border-2 border-blue-400 text-blue-400 mx-auto my-2 py-1 px-4  rounded-xl rounded-br-none hover:text-blue-500 hover:bg-blue-200 hover:border-blue-200 delay-150 focus: outline-none"
        >
          Sign In
        </button>
      </form>
      <div className="mt-2 text-lg font-semibold">Or</div>
      <div className="mt-4 text-blue-400">
        <Link to="/signup" className="mt-16 text-blue-400">
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default SignIn;

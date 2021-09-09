import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { ValidationWarning } from "../components";
import { useAuth } from "../contexts/auth-context/authContext";

const SignUp = () => {
  const { signUpUser } = useAuth();
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isValid, setIsValid] = useState(true);

  let history = useHistory();

  const handleSignUpClick = () => {
    if (
      isFirstNameValid &&
      isLastNameValid &&
      isPasswordValid &&
      isEmailValid
    ) {
      setIsValid(true);
      signUpUser(firstName, lastName, email, password);
      history.push("/signin");
    } else {
      setIsValid(false);
    }
  };

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const emailRE =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    emailRE.test(String(e.target.value).toLowerCase())
      ? setIsEmailValid(true)
      : setIsEmailValid(false);
  };

  const FirstNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
    e.target.value === ""
      ? setIsFirstNameValid(false)
      : setIsFirstNameValid(true);
  };
  const LastNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    e.target.value === ""
      ? setIsLastNameValid(false)
      : setIsLastNameValid(true);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    e.target.value === ""
      ? setIsPasswordValid(false)
      : setIsPasswordValid(true);
  };

  return (
    <div className="text-center mt-8">
      <h1 className=" text-3xl mb-4 font-semibold">Sign Up to RQUiz</h1>
      <form action="">
        <div className="mt-12">
          <div className="mb-3 pt-0 my-4">
            <input
              type="text"
              placeholder="First Name"
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-50 rounded text-sm border-0 shadow-md outline-none focus:outline-none focus:ring w-full"
              onChange={(e) => FirstNameChangeHandler(e)}
            />
            {!isValid && !isFirstNameValid && (
              <ValidationWarning text="First Name is required" />
            )}
          </div>
          <div className="mb-3 pt-0 my-4">
            <input
              type="text"
              placeholder="Last Email"
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-50 rounded text-sm border-0 shadow-md outline-none focus:outline-none focus:ring w-full"
              onChange={(e) => LastNameChangeHandler(e)}
            />
            {!isValid && !isLastNameValid && (
              <ValidationWarning text="Last Name is required" />
            )}
          </div>
          <div className="mb-3 pt-0 my-4">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-50 rounded text-sm border-0 shadow-md outline-none focus:outline-none focus:ring w-full"
              onChange={(e) => emailChangeHandler(e)}
            />
            {!isValid && !isFirstNameValid && (
              <ValidationWarning text="Email is required" />
            )}
          </div>
          <div className="mb-3 pt-0 my-4">
            <input
              type="password"
              placeholder="Password"
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-50 rounded text-sm border-0 shadow-md outline-none focus:outline-none focus:ring w-full"
              onChange={(e) => passwordChangeHandler(e)}
            />
            {!isValid && !isFirstNameValid && (
              <ValidationWarning text="Password is required" />
            )}
          </div>
        </div>
        <button
          onClick={handleSignUpClick}
          className="border-2 border-blue-400 text-blue-400 mx-auto my-2 py-1 px-4  rounded-xl rounded-br-none hover:text-blue-500 hover:bg-blue-200 hover:border-blue-200 delay-150 focus: outline-none"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

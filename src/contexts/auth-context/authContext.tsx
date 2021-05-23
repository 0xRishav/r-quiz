import { createContext, useEffect, useState, FC, useContext } from "react";
import useLocalStorage from "../../custom-hooks/useLocalStorage";
import { UserType, UsersType, authContextType } from "./authContext.types";
import fakeAuthAPI from "../../helpers/fakeAuth";
// import { createContext, FC, useContext, useReducer } from "react";
import { fakeAuthResponseType } from "../../helpers/fakeAuth";

const initialContext = {
  isUserLoggedIn: false,
  loginWithCredentials: () => null,
  signUpUser: () => null,
  currentUser: null,
};

export const authContext = createContext<authContextType>(initialContext);

export const AuthContextProvider: FC = ({ children }) => {
  const [users, setUsers] = useLocalStorage("users", []);
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", false);

  useEffect(() => {
    if (currentUser) {
      setIsUserLoggedIn(true);
    }
  }, []);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const signUpUser = (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    setUsers([...users, { firstName, lastName, email, password }]);
    setCurrentUser({ firstName, lastName, email, password });
  };

  function loginWithCredentials(email: string, password: string) {
    try {
      const response: fakeAuthResponseType = fakeAuthAPI(
        email,
        password,
        users
      );
      if (response.success === true) {
        const user: UserType = users.find(
          (user: UserType) => user?.email === email
        );
        setCurrentUser(user);
        setIsUserLoggedIn(true);
        // return response;
        return response;
      }
    } catch (err) {
      console.log(err);
      // return response;
    }
  }
  return (
    <authContext.Provider
      value={{
        isUserLoggedIn,
        loginWithCredentials,
        signUpUser,
        currentUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};

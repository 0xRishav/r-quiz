export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
} | null;
export type UsersType = UserType[];

export type authContextType = {
  isUserLoggedIn: boolean;
  loginWithCredentials: Function;
  signUpUser: Function;
  currentUser: UserType;
};

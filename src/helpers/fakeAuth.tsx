import { UsersType } from "../contexts/auth-context/authContext.types";

export type fakeAuthResponseType = {
  success: boolean;
  status: number;
};

export default function fakeAuthAPI(
  email: string,
  password: string,
  users: UsersType
): fakeAuthResponseType {
  const user = users.find((user) => user?.email === email);
  if (email === user?.email && password === user?.password) {
    return { success: true, status: 200 };
  }
  return { success: false, status: 401 };
}

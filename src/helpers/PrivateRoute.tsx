import { useContext, FunctionComponent } from "react";
import { Redirect, Route } from "react-router";
import { authContext } from "../contexts/auth-context/authContext";

type PrivateRouteComponentTypes = {
  path: string;
  component: FunctionComponent;
};

export default function PrivateRoute({
  component,
  path,
  ...props
}: PrivateRouteComponentTypes) {
  const { isUserLoggedIn } = useContext(authContext);
  const Component = component;
  return (
    <Route path={path} {...props}>
      {isUserLoggedIn ? (
        <Component />
      ) : (
        <Redirect replace to={{ pathname: "/signin", state: { from: path } }} />
      )}
    </Route>
  );
}

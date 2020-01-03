import { Route, Redirect, RouteProps } from "react-router-dom";
import * as React from "react";

export interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  isSignIn: boolean;
  isIndex?: boolean;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  let { component: Component, isSignIn, ...rest } = props;
  return (
    <Route
      {...rest}
      render={props =>
        isSignIn === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

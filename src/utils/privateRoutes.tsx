import { Route, Redirect, RouteProps } from 'react-router-dom';
import * as React from 'react';
// import { JoyNopLayout } from '../common';
// import { checkAuthToken } from './handleAuthToken';

export interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  permission: boolean;
  isIndex?: boolean;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  let { component: Component, permission: logined, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props =>
        logined ? (
          // && checkAuthToken()
          // <JoyNopLayout {...props}>
          <Component {...props} />
        ) : (
          // </JoyNopLayout>
          <Redirect to="/login" />
        )
      }
    />
  );
};

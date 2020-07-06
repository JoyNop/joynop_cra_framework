import { Route, Redirect, RouteProps } from "react-router-dom";
import * as React from "react";
import Layout from "../common/layout/layout.com";
// import { checkAuthlocalStorage, clearLocalStorage } from "./handleAuth";
export interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  permission: boolean;
  singlePage?: boolean;
  hasMenu: boolean;
  isIndex?: boolean;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const {
    component: Component,
    permission: Permission,
    singlePage: Single,
    hasMenu: LeftMenu,
    ...rest
  } = props;

  if (Permission) {
    return (
      <Route
        {...rest}
        render={(props) =>
          Single ? (
            <Component {...props} />
          ) : (
            <Layout {...props} leftMenu={LeftMenu}>
              <Component {...props} />
            </Layout>
          )
        }
      />
    );
  } else {
    return <Redirect to="/login" />;
  }
};

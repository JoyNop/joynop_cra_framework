import { Route, Redirect, RouteProps } from "react-router-dom";
import * as React from "react";
import PMSLayout from "../common/layout/layout.com";
import { checkAuthlocalStorage, clearLocalStorage } from "./handleAuth";
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

  if (Permission && checkAuthlocalStorage()) {
    return (
      <Route
        {...rest}
        render={(props) =>
          Single ? (
            <Component {...props} />
          ) : (
            <PMSLayout {...props} leftMenu={LeftMenu}>
              <Component {...props} />
            </PMSLayout>
          )
        }
      />
    );
  } else {
    clearLocalStorage(true);
    return <Redirect to="/login" />;
  }
};

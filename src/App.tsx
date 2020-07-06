import React from "react";
import "./App.less";
import loadable from "@loadable/component";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import pMinDelay from "p-min-delay";
import { PrivateRoute } from "./utils/privateRoutes";
import { InitSpin } from "@/common";
import bizRoutes from "@/config/bizRouter.config"; //业务组件引入

import { AppState } from "./store";
import { connect } from "react-redux";
import * as service from "@/store/actions/global.action";

/**
 * 参考写法
 * const DEMO_ROUTER = loadable(
 * () => pMinDelay(import("./router/todo.router"), 1000000),  //拥有延迟加载
 * {
 *   fallback: <InitSpin />,
 * }
 *);
 */

/**
 * 注册路由`/登录`
 */
const LOGIN_ROUTER = loadable(() => import("./router/login.router"), {
  fallback: <InitSpin />,
});

/**
 * 未知页面
 */
const ERROR_404_ROUTER = loadable(() => import("./router/error404.router"), {
  fallback: <InitSpin />,
});

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to={`/dashboard`} push />}
            />
            {/* 业务路由 */}
            {bizRoutes.map((item, index) => (
              <PrivateRoute
                key={index}
                hasMenu={item.hasMenu}
                permission={item.permission}
                exact={item.exact}
                path={item.path}
                singlePage={item.singlePage}
                sensitive={false}
                component={item.component}
              />
            ))}
            <Route
              exact
              path="/login"
              sensitive={false}
              component={(props: any) => <LOGIN_ROUTER {...props} />}
            />

            <Route component={ERROR_404_ROUTER} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  state,
});

const mapDispatchToProps = (dispatch: any) => ({
  getMyOrgApp: (orgId: string) => dispatch(service.getMyOrgApp(orgId)),
  getMyInfo: () => dispatch(service.getMyInfo()),
  getOrgInfo: (orgId: string) => dispatch(service.getOrgInfo(orgId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

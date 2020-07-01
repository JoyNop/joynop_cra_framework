import React from "react";
import "./App.less";
import loadable from "@loadable/component";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import pMinDelay from "p-min-delay";
import { PrivateRoute } from "./utils/privateRoutes";
import { InitSpin } from "@/common";
import bizRoutes from "@/config/bizRouter.config"; //业务组件引入

import { AppState } from "./store";
import { connect } from "react-redux";
import * as service from "@/store/actions/global.action";
/**
 * 参考写法
 *
 *  */
const DEMO_ROUTER = loadable(
  () => pMinDelay(import("./router/todo.router"), 100), //拥有延迟加载
  {
    fallback: <InitSpin />,
  }
);

/**
 * 注册路由`/登录`
 */
// const LOGIN_ROUTER = loadable(() => import("./router/login.router"), {
//   fallback: <InitSpin />,
// });

/**
 * 用户协议
 */
// const LICENSE_ROUTER = loadable(() => import("./router/license.router"), {
//   fallback: <InitSpin />,
// });

/**
 * 未知页面
 */
const ERROR_404_ROUTER = loadable(() => import("./router/error404.router"), {
  fallback: <InitSpin />,
});
interface AppProps {
  state: AppState;
}
class App extends React.Component<AppProps> {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={DEMO_ROUTER} />
            {/* 业务路由 */}
            {bizRoutes.map((item, index) => (
              <PrivateRoute
                key={index}
                leftMenu={item.leftMenu}
                permission={item.permission}
                exact={item.exact}
                path={item.path}
                single={item.single}
                sensitive={false}
                component={item.com}
              />
            ))}

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

const mapDispatchToProps = (dispatch: any) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import "./App.css";
import { OldApp } from "./oldApp";
import loadable from "@loadable/component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { JoyNopLayout } from "./common";
import { Spin } from "antd";
// import { SiderLayout } from "./layout";
// import { PrivateRoute } from "./utils/privateRoutes";
const UserCom = loadable(() => import("./userdemo/userPage"), {
  fallback: <Spin />
});
const TodoDemo = loadable(() => import("./todolist/todoPage"), {
  fallback: <Spin />
});

const App: React.FC = () => {
  console.log("ENV:", process.env.REACT_APP_ENV);

  return (
    <div>
      <React.Fragment>
        <Router>
          <Switch>
            <JoyNopLayout>
              <Route exact path="/" component={OldApp} />
              <Route exact path="/user" component={UserCom} />
              <Route exact path="/todo" component={TodoDemo} />
              {/*  <SiderLayout {...this.props}>
              <PrivateRoute isSignIn={false} exact path='/' component={Home} />
              <PrivateRoute isSignIn={true} exact path='/feedback' component={FeedBack} />
            </SiderLayout> */}
            </JoyNopLayout>
            <Route
              render={() => {
                return <p>Not Found</p>;
              }}
            />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
};

export default App;

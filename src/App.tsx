import React from "react";
import "./App.css";
import { OldApp } from "./oldApp";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { SiderLayout } from "./layout";
// import { PrivateRoute } from "./utils/privateRoutes";

const App: React.FC = () => {
  console.log("ENV:", process.env.REACT_APP_ENV);

  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={OldApp} />
            {/* <Route exact path='/signin' component={DbCloudSignin} />
            <SiderLayout {...this.props}>
              <PrivateRoute isSignIn={false} exact path='/' component={Home} />
              <PrivateRoute isSignIn={true} exact path='/feedback' component={FeedBack} />
            </SiderLayout> */}
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

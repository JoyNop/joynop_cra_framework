import React from 'react';
import './App.css';

import loadable from '@loadable/component';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { JoyNopLayout } from './common';
import { Spin } from 'antd';
// import { SiderLayout } from "./layout";
import { PrivateRoute } from './utils/privateRoutes';
import { AboutDemo } from './aboutdemo/about.com';

const ResultPage404 = loadable(() => import('./common/resultPage/result'), {
  fallback: <Spin />,
});

const UserCom = loadable(() => import('./userdemo/userPage'), {
  fallback: <Spin />,
});
const TodoDemo = loadable(() => import('./todolist/todoPage'), {
  fallback: <Spin />,
});

const App: React.FC = () => {
  console.log('ENV:', process.env.REACT_APP_ENV);

  return (
    <div>
      <React.Fragment>
        <Router>
          <Switch>
            <JoyNopLayout>
              <PrivateRoute
                isSignIn={true}
                exact
                path="/"
                component={() => (
                  <div>
                    <Link to="/user">user/</Link>
                    <Link to="/todo">todo/</Link>
                    <Link to="/about">about/</Link>
                  </div>
                )}
              />
              <PrivateRoute
                isSignIn={true}
                exact
                path="/user"
                component={UserCom}
              />
              <PrivateRoute
                isSignIn={true}
                exact
                path="/todo"
                component={TodoDemo}
              />
              <PrivateRoute
                isSignIn={false}
                exact
                path="/about"
                component={AboutDemo}
              />

              {/*  <SiderLayout {...this.props}>
              <PrivateRoute isSignIn={false} exact path='/' component={Home} />
              <PrivateRoute isSignIn={true} exact path='/feedback' component={FeedBack} />
            </SiderLayout> */}

              <Route component={ResultPage404} />
            </JoyNopLayout>
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
};

export default App;

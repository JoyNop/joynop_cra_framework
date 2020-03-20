import React from 'react';
import './App.css';

import loadable from '@loadable/component';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
// import { JoyNopLayout } from './common';
import { Spin } from 'antd';
// import { SiderLayout } from "./layout";
import { PrivateRoute } from './utils/privateRoutes';

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
              path="/todo"
              component={TodoDemo}
            />

            {/*  <SiderLayout {...this.props}>
              <PrivateRoute isSignIn={false} exact path='/' component={Home} />
              <PrivateRoute isSignIn={true} exact path='/feedback' component={FeedBack} />
            </SiderLayout> */}
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
};

export default App;

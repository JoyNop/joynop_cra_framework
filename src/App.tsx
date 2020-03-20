import React from 'react';
import './App.css';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import { JoyNopLayout } from './common';
import { Spin } from 'antd';
// import { SiderLayout } from "./layout";
import { PrivateRoute } from './utils/privateRoutes';
import { OldApp } from './oldApp';

const TODO_ROUTER = loadable(() => import('./router/todo.router'), {
  fallback: <Spin />,
});

const App: React.FC = () => {
  console.log('ENV:', process.env.REACT_APP_ENV);

  return (
    <div>
      <React.Fragment>
        <Router>
          <Switch>
            <PrivateRoute permission={true} exact path="/" component={OldApp} />

            <PrivateRoute
              permission={true}
              exact
              path="/todo"
              component={TODO_ROUTER}
            />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
};

export default App;

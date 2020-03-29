import React from 'react';
import './App.css';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { JoyNopLayout } from './common';
import { Spin } from 'antd';
// import { SiderLayout } from "./layout";
import { PrivateRoute } from './utils/privateRoutes';
import { OldApp } from './oldApp';
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const TODO_ROUTER = loadable(() => import('./router/todo.router'), {
  fallback: <Spin />,
});

const HOOK_ROUTER = loadable(() => import('./router/hook.router'), {
  fallback: <Spin />,
});

const ERROR_404_ROUTER = loadable(() => import('./router/error404.router'), {
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
            <PrivateRoute
              permission={true}
              exact
              path="/hook"
              component={HOOK_ROUTER}
            />

            <Route component={ERROR_404_ROUTER} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
};

export default App;

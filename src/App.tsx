import React from "react";

import "./App.css";
import "./app.less";
import { Button } from "antd";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Login from "./client/biz/login";
import Dashboard from "./client/biz/dashboard";

export default class App extends React.Component {
  render() {
    return (
      
         
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Dashboard} />
          </Switch>
      
      
    );
  }
}

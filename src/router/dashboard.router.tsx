import React, { Component } from "react";

import * as Style from "./style/router.module.less";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Dashboard from "@/biz/dashboard/dashboard.com";

class DashboardRouter extends Component<RouteComponentProps> {
  render() {
    return (
      <div className={Style.component_container}>
        <Dashboard />
      </div>
    );
  }
}

export default withRouter(DashboardRouter);

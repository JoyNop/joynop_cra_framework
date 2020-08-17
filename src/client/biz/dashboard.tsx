import React, { Component } from "react";
import "../../App.css";
import "../../app.less";
import { Button } from "antd";
import { Link, RouteComponentProps } from "react-router-dom";

export default class Dashboard extends Component <RouteComponentProps>{
  render() {
    return (
      <div className="App">
         88888
         <Button onClick={()=>this.props.history.push("/login")}>Router 测试-登录界面</Button>
      </div>
    );
  }
}

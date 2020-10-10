import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Result, Button } from "antd";

interface IError404Props extends RouteComponentProps {}
export default class ERROR404_ROUTER extends Component<IError404Props> {
  render() {
    return (
      <div>
        <Result
          status="404"
          title="404"
          subTitle="抱歉，您访问的页面不存在。"
          extra={
            <Button type="primary" onClick={this.handleGoBack}>
              返回
            </Button>
          }
        />
      </div>
    );
  }

  private handleGoBack = () => {
    this.props.history.goBack();
  };
}

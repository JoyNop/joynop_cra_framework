import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Result, Button } from 'antd';

interface IError404Props extends RouteComponentProps {}
export default class ERROR404_ROUTER extends Component<IError404Props> {
  render() {
    return (
      <div>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button type="primary" onClick={this.handleGoBack}>
              Back Home
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

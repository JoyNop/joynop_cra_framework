import React, { Component } from "react";

import { Layout, Spin } from "antd";

/**
 *空白展示，懒加载的时候loading加载
 *
 * @export
 * @class InitSpin
 * @extends {Component}
 */
export class InitSpin extends Component {
  render() {
    return (
      <Layout>
        <Layout.Content
          style={{
            height: "80vh",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin />
        </Layout.Content>
      </Layout>
    );
  }
}

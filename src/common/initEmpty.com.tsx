import React, { Component } from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Result, Layout } from "antd";

/**
 *空白展示，主要是第一次打开的时候，没有ID，展示此空白
 *
 * @export
 * @class InitEmpty
 * @extends {Component}
 */
export class InitEmpty extends Component {
  render() {
    return (
      <Layout>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Result
            icon={<SmileOutlined />}
            title="美好的一天，从现在开始！"
            // extra={<Button type="primary">Next</Button>}
          />
        </Layout.Content>
      </Layout>
    );
  }
}

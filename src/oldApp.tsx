import React from "react";
import * as Style from "./a.module.less";
import { LiveApp } from "./livedemo/live.app";
import { Button, List, Card } from "antd";
import { TabApp } from "./tabdemo/tab";
import { chunk } from "lodash";
import axios from "./utils/http";
export class OldApp extends React.Component {
  postList: Array<any> = [];
  render() {
    const openMenu = () => {
      debugger;
      console.log(1);
    };

    let bbb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let aaa = chunk(bbb, 6);
    return (
      <div>
        <div className={Style.Hello}>hellllllllllllllllllo</div>
        <button onClick={openMenu}>hello</button>
        <Button type="primary">But9999ton</Button>
        <Button type="primary" onClick={this.errorPost}>
          error post
        </Button>
        66{process.env.REACT_APP_NOT_SECRET_CODE}666
        <input value={process.env.REACT_APP_NOT_SECRET_CODE} />
        <input value={process.env.REACT_APP_HANRUI_1} />
        {aaa.map(index => index)}
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3
          }}
          dataSource={this.postList}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>{item.body}</Card>
            </List.Item>
          )}
        />
        <LiveApp />
        <TabApp />
      </div>
    );
  }

  errorPost = async () => {
    try {
      const res = await axios.post("http://666.com/posts");
      this.postList = res.data;
      this.setState({});
    } catch (error) {}
  };
  init = async () => {
    try {
      const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
      this.postList = res.data;
      this.setState({});
    } catch (error) {}
  };
  componentDidMount() {
    this.init();
    console.log(process.env.HANRUI_ENV as any);
  }
}

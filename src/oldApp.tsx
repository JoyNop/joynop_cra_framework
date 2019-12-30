import React from "react";
import * as Style from "./a.module.less";
import { LiveApp } from "./livedemo/live.app";
import { Button, List, Card } from "antd";
import { TabApp } from "./tabdemo/tab";
import { chunk } from "lodash";
import axios from "./utils/http";
import { Link } from "react-router-dom";
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
      <div className={Style.Page}>
        <Button>
          <Link to="/user">user</Link>
        </Button>
        <Button>
          <Link to="/usdddddder">error Link</Link>
        </Button>
        <Button>
          <Link to="/post">post</Link>
        </Button>
        <div className={`${Style.Hello}${Style.Item}`}>Less 检测</div>
        <button onClick={openMenu}>Debugger测试</button>
        <Button type="primary">But9999ton</Button>
        <Button type="primary" onClick={this.errorPost}>
          错误请求检测
        </Button>
        <div className={Style.Item}>
          LiveData Test 6 <LiveApp />
        </div>
        <div className={Style.Item}>
          Tab <TabApp />{" "}
        </div>
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
    console.log(process.env.REACT_APP_NOT_SECRET_CODE);
  }
}

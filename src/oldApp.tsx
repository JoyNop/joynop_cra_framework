import React from 'react';
import * as Style from './a.module.less';
import { Button, List, Card, Input, message } from 'antd';

import { chunk } from 'lodash';
import axios from './utils/http';
import { Link } from 'react-router-dom';
const { Search } = Input;
export class OldApp extends React.Component {
  postList: Array<any> = [];
  render() {
    const openMenu = () => {
      debugger;
      console.log(1);
    };

    return (
      <div className={Style.Page}>
        <Search
          placeholder="input search text"
          enterButton="get api"
          size="large"
          defaultValue="/api/"
          onSearch={(e: any) => this.handelSearch(e)}
        />
        <Button>
          <Link to="/todo">todo</Link>
        </Button>
        <Button onClick={this.setCookie_B}>set cookie</Button>
        <button onClick={openMenu}>Debugger测试</button>
        <Button type="primary">But9999ton</Button>
        <Button type="primary" onClick={this.errorPost}>
          错误请求检测 ds
        </Button>
        {process.env.REACT_APP_NOT_SECRET_CODE}666
        <input value={process.env.REACT_APP_NOT_SECRET_CODE} />
        <input value={process.env.REACT_APP_HANRUI_1} />
      </div>
    );
  }
  setCookie_B = () => {
    try {
      let key: string = 'Key' + Math.random();
      let value: string = 'value' + Math.random();

      this.setCookie(key, value);
      message.success('成功');
      message.info(this.getCookie(key));
    } catch (error) {
      message.error(error);
    }
  };

  getCookie(key: any) {
    const name = key + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      const c = ca[i].trim();
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
  // 设置cookie,默认是30天
  setCookie(key: any, value: any) {
    const d = new Date();
    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + d.toUTCString();
    document.cookie = key + '=' + value + '; ' + expires;
  }

  handelSearch = async (e: string) => {
    console.log(1);
    console.log(e);
    try {
      const res = await axios.get(e);
      console.log(res);
    } catch (error) {
      console.log(error.response);
    }
  };
  errorPost = async () => {
    try {
      const res = await axios.get('/todos');
      this.postList = res.data;
      this.setState({});
    } catch (error) {
      console.log(error.response);
    }
  };
  init = async () => {
    try {
      const res = await axios.get('https://sm.ms/api/v2/history');
      this.postList = res.data;
      this.setState({});
    } catch (error) {}
  };
  componentDidMount() {
    this.init();
    let _window: any = window;
    console.log(_window.REACT_APP_ENVIRONMENT);
    console.log(process.env.REACT_APP_NOT_SECRET_CODE);
  }
}

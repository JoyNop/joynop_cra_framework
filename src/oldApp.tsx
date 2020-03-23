import React from 'react';
import Style from './a.module.less';
import { Button, Input, message } from 'antd';

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
          <Link to="/todo">todo url</Link>
        </Button>
        <Button onClick={this.setCookie_B}>set cookie</Button>
        <button onClick={openMenu}>Debugger测试</button>
        <Button type="primary">But9999ton</Button>
        <Button type="primary" onClick={this.errorPost}>
          错误请求检测
        </Button>
        <table>
          <tbody>
            <tr>
              <td style={{ border: '1px solid' }}>通过env植入变量</td>
              <td style={{ border: '1px solid' }}>
                {process.env.REACT_APP_TITLE}
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid' }}>通过BUILD植入变量</td>
              <td style={{ border: '1px solid' }}>
                {process.env.REACT_APP_ENV}
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid' }}>通过系统环境变量录入</td>
              <td style={{ border: '1px solid' }}>
                {process.env.REACT_APP_NOT_SECRET_CODE}
              </td>
            </tr>
          </tbody>
        </table>
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

  componentDidMount() {
    let _window: any = window;
    console.log(process.env);

    console.log(_window.REACT_APP_ENVIRONMENT);
    console.log(process.env.REACT_APP_NOT_SECRET_CODE);
  }
}

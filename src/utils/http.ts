import axios from "axios";

import { message } from "antd";

// 请求拦截
axios.interceptors.request.use(
  config => {
    // 加载
    return config;
  },
  error => {
    message.error(error.toString());
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // 错误提醒
    try {
      message.error(error.toString());
      return Promise.reject(error);
    } catch (error) {
      // console.log(error)
      message.error(error.toString());
    }
  }
);

export default axios;

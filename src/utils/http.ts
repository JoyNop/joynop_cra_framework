import axios from "axios";
import { message } from "antd";
import { loginOutForced } from "./handleAuth";
import { getApiEnv } from "./handleEnvironment";
// import { getApiEnv } from "./handleEnvironment";

// let url = getApiEnv();
// console.log(process.env);
let url = getApiEnv();

axios.defaults.baseURL = "/" + url;

axios.defaults.withCredentials = true;

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    // 加载
    return config;
  },
  (error) => {
    console.log("reqError==>", error);

    message.error(error.toString());
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 错误提醒
    if (error.response.status === 401) {
      // 强制退出
      message.error("未登录，即将为您跳转至登录页面", 3, () =>
        loginOutForced(true)
      );
    }

    try {
      let messageStr = "";
      if (error.response.data.hasOwnProperty("message")) {
        console.log("resError(GetMessage)==>", error.response);
        messageStr = `错误:${error.response.data.message}`;
      } else {
        messageStr = `系统错误:${error.response.status},${error.response.statusText}`;
        console.log("resError(NotFoundMessage)==>", error.response);
      }
      message.error(messageStr);
      return Promise.reject(error);
    } catch (catchError) {
      console.log("resCatchError==>", catchError);
      const messageStr = `ErrorStatusCode:${catchError.response.status},${catchError.response.statusText}`;
      message.error(messageStr);
    }
  }
);

export default axios;

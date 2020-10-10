import axios from "axios";
import { createBrowserHistory } from "history";
const history = createBrowserHistory({ forceRefresh: true });

export const setAuthToken = (token: string | null, isRefresh?: boolean) => {
  try {
    if (token) {
      // headers 每个请求都需要用到的
      localStorage.setItem("JOYNOP_AUTH_TOKEN", token);
      axios.defaults.headers.common["Authorization"] = token;
      console.log("set Authorization OK");
    } else {
      localStorage.removeItem("JOYNOP_AUTH_TOKEN");
      delete axios.defaults.headers.common["Authorization"];
      if (isRefresh) {
        history.push("/login");
      }
      console.log("delete Authorization OK");
    }
  } catch (error) {}
};

export const checkAuthToken = () => {
  let isAuth: boolean = false;
  try {
    const token = localStorage.getItem("JOYNOP_AUTH_TOKEN");
    setAuthToken(token);
    isAuth = Boolean(token);
    return isAuth;
  } catch (error) {
    return isAuth;
  }
};

export const loginOutForced = (ok: boolean) => {
  if (ok) {
    alert("出发强制退出验证，当前无登录页面，仅用刷新做演示");
    window.location.reload();
  }
};
// if (localStorage.jwtToken) {
//   setAuthToken(localStorage.jwtToken);
//   //解析token
//   const decoded = jwt_decode(localStorage.jwtToken);
//   store.dispatch(setCurrentUser(decoded));
//   //检测token是否过期
//   //获取当前时间
//   const currentTime = Date.now(); //1000
//   //判断当前是否大于token过期时间
//   if (decode.exp < currentTime) {
//     //过期
//     store.dispatch(logoutUser());
//     //TODO 清楚用户信息
//     //页面跳转
//     window.location.href = '/login';
//   }
// }

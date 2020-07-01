import axios from "./http";
import { message } from "antd";
import { clearState } from "@/store/actions";
//检查本地存储
export const checkAuthlocalStorage = () => {
  let isAuth: boolean = false;
  try {
    const local_login_status = localStorage.getItem("DBHD_PMS_LOGIN_STATUS"); //取本地验证
    const local_orgId = localStorage.getItem("DBHD_PMS_ORGID"); //取本地OrgID 手机登录没有
    if (local_login_status && local_orgId) {
      isAuth = true;
    }
    console.log("isAuth", isAuth);
  } catch (error) {
    console.log("isAuth", isAuth);
  } finally {
    return isAuth;
  }
};

export const clearLocalStorage = (redirect: boolean) => {
  localStorage.removeItem("DBHD_PMS_LOGIN_STATUS"); //移除本地验证
  localStorage.removeItem("DBHD_PMS_ORGID"); //移除本地OrgID
  clearState();
  if (redirect) {
    localStorage.setItem(
      "DBHD_PMS_LOGIN_REDIRECT",
      `${window.location.pathname}?from=login`
    );
  } else {
    localStorage.removeItem("DBHD_PMS_LOGIN_REDIRECT");
  }
};
/**
 *
 * @description 强制退出
 * @param {boolean} redirect  是否需要重定向
 */
export const loginOutForced = async (redirect: boolean) => {
  try {
    clearLocalStorage(redirect);
    await axios.delete(`/api/account/v1/sign/signout`); //退出登录
  } catch (error) {
  } finally {
    window.location.href = "/login"; //跳转
  }
};

//检查状态并退出

export const checkAuth = () => {
  //检查
  if (!checkAuthlocalStorage()) {
    //失败并退出

    loginOutForced(true);
  }
};

export const getDdhdInfo = () => {
  try {
    const local_login_status = localStorage.getItem("DBHD_PMS_LOGIN_STATUS"); //取本地验证
    const local_orgId = localStorage.getItem("DBHD_PMS_ORGID"); //取本地OrgID
    return { local_login_status, local_orgId };
  } catch (error) {
    message.error("安全验证失败！请退出后重新登录！");
    return { local_login_status: "error", local_orgId: "error" };
  }
};

import { GET_USERLIST, GET_USERLIST_TYPE } from "../types";
// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
import { Dispatch } from "redux";
import axios from "../../utils/http";
export type UserAction = GET_USERLIST_TYPE;

export const getUserList = () => async (dispatch: Dispatch) => {
  const res = await axios.get(`http://jsonplaceholder.typicode.com/users`);
  console.log(res);
  console.log(999);

  dispatch({ type: GET_USERLIST, payload: res.data });
};

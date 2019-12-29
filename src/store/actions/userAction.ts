import { Dispatch } from "redux";
import axios from "../../utils/http";
import { EUserList, IInitialState } from "../types";

export const getUserList = () => async (dispatch: Dispatch<IInitialState>) => {
  dispatch({ type: EUserList.USERLIST_LOADING });
  try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/users`);
    dispatch({ type: EUserList.USERLIST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: EUserList.USERLIST_ERROR });
  }
};

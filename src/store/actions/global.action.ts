/*
 * @Author: HanRui
 */
import { Dispatch } from "redux";
import axios from "@/utils/http";
import { GlobalTypes } from "@/store/types";
import { IInitialState } from "@/store/types";
export const getMyOrgApp = (orgId: string) => async (
  dispatch: Dispatch<IInitialState>
) => {
  const res = await axios.get(`/api/account/v1/org/${orgId}/app/list/order`);
  dispatch({
    type: GlobalTypes.GLOBAL_GET_APP_ORDER,
    payload: res.data.data,
  });
};

export const getMyInfo = () => async (dispatch: Dispatch<IInitialState>) => {
  const res = await axios.get(`/api/account/v1/user/my/info`);
  dispatch({
    type: GlobalTypes.GLOBAL_GET_USER_INFO,
    payload: res.data.data,
  });
};

export const editMyInfo = (user: any) => async (
  dispatch: Dispatch<IInitialState>
) => {
  const res = await axios.put(`/api/account/v1/user/my/info/all`, user);
  dispatch({
    type: GlobalTypes.GLOBAL_EDIT_USER_INFO,
    payload: res.data.data,
  });
};

export const getOrgInfo = (orgId: string) => async (
  dispatch: Dispatch<IInitialState>
) => {
  const res = await axios.get(`/api/account/v1/org/${orgId}/user-group`);
  dispatch({
    type: GlobalTypes.GLOBAL_GET_ORG_INFO,
    payload: res.data.data,
  });
};

export const clearState = () => async (dispatch: Dispatch<IInitialState>) => {
  dispatch({
    type: GlobalTypes.GLOBAL_LOGIN_OUT,
  });
};

export const updateOrgPayload = (data: any) => async (
  dispatch: Dispatch<IInitialState>
) => {
  dispatch({
    type: GlobalTypes.GLOBAL_UPDATE_ORG_INFO,
    payload: data,
  });
};

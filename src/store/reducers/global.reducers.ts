import { GlobalTypes, IInitialState } from "@/store/types";

import { App, User, OrgInfo } from "../interface/global.interface";

interface INITSTATE {
  appList: App[];
  userInfo: User | null;
  orgInfo: OrgInfo | undefined;
}

const initialState: INITSTATE = {
  userInfo: null,
  appList: [],
  orgInfo: undefined,
};

export const globalReducer = (state = initialState, action: IInitialState) => {
  switch (action.type) {
    case GlobalTypes.GLOBAL_LOGIN_OUT:
      return state;
    case GlobalTypes.GLOBAL_GET_APP_ORDER:
      const appList: Array<App> = action.payload;
      appList.sort((a, b) => a.order - b.order);
      let app = {
        accessable: true,
        id: "",
        order: 888,
        code: "app",
        icon: `${process.env.REACT_APP_STATIC}/app/app_icon.png`,
        name: "应用管理",
        router: "/:orgId/app",
        type: 0,
      };
      appList.push(app);

      return {
        ...state,
        appList,
      };
    case GlobalTypes.GLOBAL_GET_USER_INFO:
    case GlobalTypes.GLOBAL_EDIT_USER_INFO:
      const userInfo = action.payload as User;
      return {
        ...state,
        userInfo: userInfo,
      };
    case GlobalTypes.GLOBAL_GET_ORG_INFO:
      const orgInfo = action.payload as OrgInfo;
      return {
        ...state,
        orgInfo,
      };

    case GlobalTypes.GLOBAL_UPDATE_ORG_INFO:
      const payload = action.payload;
      if (state.orgInfo !== undefined) {
        state.orgInfo.org.payload = payload as any;
      }
      return {
        ...state,
        // state.org
      };
    default:
      return state;
  }
};

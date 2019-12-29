// import { GET_USERLIST, USERLIST_LOADING } from "../types";
import { EUserList } from "../types";
import { IInitialState } from "../types";
const initialState = {
  isLoading: true,
  list: []
};

export const userReducer = (state = initialState, action: IInitialState) => {
  switch (action.type) {
    case EUserList.USERLIST_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case EUserList.USERLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload
      };

    default:
      return state;
  }
};

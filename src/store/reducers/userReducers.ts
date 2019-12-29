import { GET_USERLIST } from "../types";

const initialState = {
  userList: {
    isLoading: false,
    list: []
  }
};

export const userReducer = (state = initialState.userList, action: any) => {
  console.log(action);
  switch (action.type) {
    case GET_USERLIST:
      return {
        ...state,
        isLoading: false,
        list: action.payload
      };

    default:
      return state;
  }
};

// export const User = () => {
//   return (dispatch) => {
//     axios.get('/api/headerList.json')
//       .then((res) => {
//         const data = res.data;
//         dispatch(changeList(data.data))
//       })
//       .catch(() => {
//         console.log('catch')
//       })
//   }

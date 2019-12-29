import { ModifyAction } from "../actions";
import { DECREMENT, INCREMENT } from "../const";
export * from "./userReducers";
// 一个state
export const countReducer = (state = 0, action: ModifyAction): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// const test = (state = 0, action: ModifyAction) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
//这样可以吧store变成一个对象来组合reducer = state
// export const rootReducer = combineReducers({
//   countReducer
//   // test
// });

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { countReducer, userReducer } from "./reducers";
// import { chatReducer } from "./chat/reducers";

const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer
});

export type AppState = ReturnType<typeof userReducer>;

export const configureStore = () => {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
};

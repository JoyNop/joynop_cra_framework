import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { todoReducer, globalReducer } from "./reducers";

// import { chatReducer } from "./chat/reducers";

const rootReducer = combineReducers({
  todo: todoReducer,
  global: globalReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
};

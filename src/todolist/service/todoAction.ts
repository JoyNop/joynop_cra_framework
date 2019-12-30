import { Dispatch } from "redux";
import axios from "../../utils/http";
import { ETodoTypes } from "../../store/types";

import { IInitialState } from "../../store/types";

export const getTodoList = () => async (dispatch: Dispatch<IInitialState>) => {
  dispatch({ type: ETodoTypes.TODO_FETCH_LOADING });
  try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/todos`);
    dispatch({ type: ETodoTypes.TODO_FETCH_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: ETodoTypes.TODO_FETCH_ERROR });
  }
};

export const removeItem = (todos: Array<any>, index: number) => (
  dispatch: Dispatch<IInitialState>
) => {
  dispatch({ type: ETodoTypes.TODO_FETCH_LOADING });
  try {
    todos.splice(index, 1);
    dispatch({ type: ETodoTypes.TODO_REMOVE_ITEM, payload: todos });
  } catch (error) {
    dispatch({ type: ETodoTypes.TODO_FETCH_ERROR });
  }
};
export const addItem = (todos: Array<any>) => (
  dispatch: Dispatch<IInitialState>
) => {
  dispatch({ type: ETodoTypes.TODO_FETCH_LOADING });
  try {
    let item = {
      userId: Math.random(),
      id: Math.random(),
      title: `Title:${Math.random()}`,
      completed: false
    };
    todos.unshift(item);
    dispatch({ type: ETodoTypes.TODO_ADD_ITEM, payload: todos });
  } catch (error) {
    dispatch({ type: ETodoTypes.TODO_FETCH_ERROR });
  }
};

export const refreshTodo = () => async (dispatch: Dispatch<IInitialState>) => {
  dispatch({ type: ETodoTypes.TODO_FETCH_LOADING });
  try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/todos`);
    dispatch({ type: ETodoTypes.TODO_FETCH_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: ETodoTypes.TODO_FETCH_ERROR });
  }
};

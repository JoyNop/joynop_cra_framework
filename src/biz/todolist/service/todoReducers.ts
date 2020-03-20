import { ETodoTypes, IInitialState } from '../../../store/types';
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface INITSTATE {
  isLoading: boolean;
  todolist: Array<ITodo>;
}

const initialState: INITSTATE = {
  isLoading: true,
  todolist: [],
};

export const todoReducer = (state = initialState, action: IInitialState) => {
  switch (action.type) {
    case ETodoTypes.TODO_FETCH_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ETodoTypes.TODO_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todolist: action.payload as Array<ITodo>,
      };
    case ETodoTypes.TODO_FETCH_REFUSH:
      return {
        ...state,
        isLoading: false,
        todolist: action.payload as Array<ITodo>,
      };
    case ETodoTypes.TODO_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        todolist: action.payload as Array<ITodo>,
      };
    case ETodoTypes.TODO_ADD_ITEM:
      return {
        ...state,
        isLoading: false,
        // todolist: action.payload as Array<ITodo>
      };
    case ETodoTypes.TODO_REMOVE_ITEM:
      return {
        ...state,
        isLoading: false,
        todolist: action.payload as Array<ITodo>,
      };
    default:
      return state;
  }
};

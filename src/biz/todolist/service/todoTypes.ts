const serviceName: string = 'todo';

export const TodoTypes = {
  TODO_FETCH_LOADING: `${serviceName}/TODO_FETCH_LOADING`,
  TODO_FETCH_SUCCESS: `${serviceName}/TODO_FETCH_SUCCESS`, //网络获取成功
  TODO_FETCH_ERROR: `${serviceName}/TODO_FETCH_ERROR`, //网络获取失败
  TODO_FETCH_REFUSH: `${serviceName}/TODO_FETCH_REFUSH`,
  TODO_ADD_ITEM: `${serviceName}/TODO_ADD_ITEM`, //本地增加一条
  TODO_REMOVE_ITEM: `${serviceName}/TODO_REMOVE_ITEM`, //本地移除一
};

// export enum ETodoTypes {
//   TODO_FETCH_LOADING = ` TODO_FETCH_LOADING`, //开始网络获取
//   TODO_FETCH_SUCCESS = 'TODO_FETCH_SUCCESS', //网络获取成功
//   TODO_FETCH_ERROR = 'TODO_FETCH_ERROR', //网络获取失败
//   TODO_FETCH_REFUSH = 'TODO_FETCH_REFUSH',
//   TODO_ADD_ITEM = 'TODO_ADD_ITEM', //本地增加一条
//   TODO_REMOVE_ITEM = 'TODO_REMOVE_ITEM', //本地移除一条
// }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { addItem, refreshTodo } from './service/todoAction';
import { Button } from 'antd';

interface ITodoControlProps {
  state: AppState;
  refreshTodo: () => void;
  addItem: (todos: Array<any>) => void;
}
class TodoControl extends Component<ITodoControlProps> {
  render() {
    const { addItem, state, refreshTodo } = this.props;
    return (
      <div>
        <Button onClick={refreshTodo}>刷新</Button>
        <Button onClick={() => addItem(state.todo.todolist)}>随机添加</Button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  state,
});

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (todos: Array<any>) => dispatch(addItem(todos)),
  refreshTodo: () => dispatch(refreshTodo()),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoControl);

import React from "react";
import { connect } from "react-redux";
import { List, Button } from "antd";
import { getTodoList, removeItem } from "./service/todoAction";
import { AppState } from "../../store";

interface ITodoProps {
  state: AppState;
  getTodoList: () => void;
  removeItem: (todos: Array<any>, index: number) => void;
}

class TodoList extends React.Component<ITodoProps> {
  render() {
    const { state, removeItem } = this.props;
    return (
      <div>
        <List
          size="small"
          bordered
          loading={state.todo.isLoading}
          dataSource={state.todo.todolist}
          renderItem={(item, index) => (
            <List.Item>
              {item.title}
              <Button onClick={() => removeItem(state.todo.todolist, index)}>
                删除
              </Button>
            </List.Item>
          )}
        />
      </div>
    );
  }
  componentDidMount() {
    this.props.getTodoList();
  }
}

const mapStateToProps = (state: AppState) => ({
  state,
});

const mapDispatchToProps = (dispatch: any) => ({
  getTodoList: () => dispatch(getTodoList()),
  removeItem: (todos: Array<any>, index: number) =>
    dispatch(removeItem(todos, index)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

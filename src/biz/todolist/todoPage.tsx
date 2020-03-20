import React from 'react';
import TodoList from './todoList';
import TodoControl from './todoControl';
export class TodoPage extends React.Component {
  render() {
    return (
      <div>
        <TodoControl />
        <TodoList />
      </div>
    );
  }
}

// const mapStateToProps = (state: any) => ({
//   ...state
// });

// const mapDispatchToProps = {};
// export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);

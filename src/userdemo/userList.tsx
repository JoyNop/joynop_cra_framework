import React from "react";
import { List, Avatar, Button } from "antd";
import { connect } from "react-redux";
import { getUserList } from "../store/actions";

export interface IProps {
  state: any;
  getUserList: () => void;
  // onDecrement: () => void;
}
export class UserList extends React.PureComponent<IProps> {
  render() {
    const { getUserList, state } = this.props;
    console.log(this.props);
    return (
      <div>
        777
        <Button onClick={getUserList}>ddd</Button>
        <List
          itemLayout="horizontal"
          dataSource={state.list}
          renderItem={(item: any) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.website}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  state: state.user
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: any) => ({
  getUserList: () => dispatch(getUserList())
});

// const mapStatetoProps = (state:any) => ({
//   name: state.home.name
// });
// const mapDispatchToProps = (dispatch:any) => ({
//   getUserList: (data:any) => dispatch(getUserList(data)),

// })

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

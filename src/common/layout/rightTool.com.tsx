import React, { Component } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
// import { loginOutForced } from "@/utils/handleAuth";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "@/store";
import { JoyNopCraAvatar } from "../avatar.com";
interface RightToolProps {
  state: AppState;
}
class RightTool extends Component<RightToolProps> {
  private handleMenuClick = () => {};
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">
          <Link to="/account/my">
            <UserOutlined />
            个人信息
          </Link>
        </Menu.Item>

        <Menu.Divider />
        <Menu.Item key="111" onClick={() => {}}>
          <UserOutlined />
          退出
        </Menu.Item>
      </Menu>
    );
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
        }}
      >
        <Dropdown overlay={menu}>
          <div>
            <JoyNopCraAvatar text="JoyNop" />
          </div>
        </Dropdown>
      </div>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  state,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RightTool);

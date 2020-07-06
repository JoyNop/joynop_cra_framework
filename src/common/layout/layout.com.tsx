import React from "react";
import { Layout, Menu } from "antd";
import { RouteComponentProps, Link, withRouter } from "react-router-dom";

import RightTool from "./rightTool.com";

import Style from "./layout.module.less";
import { AppState } from "@/store";
import { connect } from "react-redux";
const { Header, Content, Sider } = Layout;

interface LayoutProps extends RouteComponentProps {
  leftMenu: boolean;
  state: AppState;
}
/**
 *整体框架布局
 *
 * @export
 * @class Layout
 * @extends {React.Component<LayoutProps>}
 */
export class PMSLayout extends React.Component<LayoutProps> {
  public state = {
    collapsed: true,
  };

  render() {
    return (
      <Layout className={Style.layout_paper}>
        <Header className={Style.layout_header}>
          <div className={Style.layout_header_logo}>
            <Link to="/">
              <div className={Style.layout_logo}>LOGO</div>
            </Link>
            {/* <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> */}
            {/* <SubprojSelect /> */}
            <div className={Style.layout_header_org_name}>
              JoyNop Create-React-App Framework
            </div>
          </div>
          {/* 右侧功能菜单 */}
          <div>
            <RightTool />
          </div>
        </Header>
        {/* 主体内容 */}
        <Layout>
          {/* 主体左侧菜单 */}
          {this.props.leftMenu ? (
            <Sider
              theme="light"
              // collapsible
              className={Style.layout_sider}
              collapsed={this.state.collapsed}
              // onCollapse={this.onCollapse}
            >
              <div className={Style.layout_sider_container}>
                <Menu
                  key={1}
                  inlineIndent={1}
                  theme="light"
                  mode="inline"
                  style={{
                    width: 65,
                    height: "85vh",
                    overflowY: "hidden",
                    overflowX: "hidden",
                  }}

                  // style={{ borderRight: 0, width: "60px" }}
                ></Menu>
              </div>
            </Sider>
          ) : null}
          {/* 主体正文 */}
          <Layout style={{ padding: "0 0px 0px 5px" }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content className={Style.main_content}>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }

  handleClick = (e: any, orgId: string) => {
    let url = e.key.replace(":orgId", orgId);
    this.props.history.push(url);
  };
}
const mapStateToProps = (state: AppState) => ({
  state,
});

const mapDispatchToProps = (dispatch: any) => ({});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PMSLayout)
);

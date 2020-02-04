import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Style from './layout.module.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export class JoyNopLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout className={Style.LayoutPaper}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">JoyNop CRA Framework</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>index</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span> demo</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>todo</span>
                </span>
              }
            >
              <Menu.Item key="3">user</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={Style.LayoutHeader} />
          <Content className={Style.LayoutContent}>
            <Breadcrumb className={Style.LayoutBreadcrumb}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className={Style.MainContent}>{this.props.children}</div>
          </Content>
          <Footer className={Style.LayoutFooter}>
            JoyNop ©2020 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

import { Tabs, Button, Input } from "antd";
import * as React from "react";
const { TabPane } = Tabs;

interface Istate {
  activeKey: any;
  panes: any;
}
export class TabApp extends React.Component<{}, Istate> {
  private newTabIndex = 0;
  constructor(props: any) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: "Tab 1", content: "Content of Tab Pane 1", key: "1" },
      { title: "Tab 2", content: "Content of Tab Pane 2", key: "2" }
    ];
    this.state = {
      activeKey: panes[0].key,
      panes
    };
  }

  onChange = (activeKey: any) => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey: any, action: any) => {
    let _this: any = this;
    _this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state as any;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: "New Tab", content: "New Tab Pane", key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = (targetKey: any) => {
    let { activeKey } = this.state as any;
    let lastIndex: number = 0;
    this.state.panes.forEach((pane: any, i: any) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(
      (pane: any) => pane.key !== targetKey
    );
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button onClick={this.add}>ADD</Button>
        </div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.state.panes.map((pane: any) => (
            <TabPane tab={pane.title} key={pane.key}>
              {pane.content}
              <Input />
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

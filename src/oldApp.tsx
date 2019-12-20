import React from "react";
import * as Style from "./a.module.less";
import { LiveApp } from "./livedemo/live.app";
import { Button } from "antd";
import { TabApp } from "./tabdemo/tab";
import { chunk } from "lodash";
export class OldApp extends React.Component {
  render() {
    const openMenu = () => {
      debugger;
      console.log(1);
    };

    let bbb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let aaa = chunk(bbb, 6);
    return (
      <div>
        <div className={Style.Hello}>hellllllllllllllllllo</div>
        <button onClick={openMenu}>hello</button>
        <Button type="primary">But9999ton</Button>
        66{process.env.REACT_APP_NOT_SECRET_CODE}666
        <input value={process.env.REACT_APP_NOT_SECRET_CODE} />
        <input value={process.env.REACT_APP_HANRUI_1} />
        {aaa.map(index => index)}
        <LiveApp />
        <TabApp />
      </div>
    );
  }
}

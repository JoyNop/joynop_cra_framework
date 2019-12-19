import React from "react";
import "./App.css";
import { Button } from "antd";
import * as Style from "./a.module.less";
import { LiveApp } from "./livedemo/live.app";
import { TabApp } from "./tabdemo/tab";
const App: React.FC = () => {
  const openMenu = () => {
    debugger;
    console.log(1);
  };
  console.log(Style);

  console.log("ENV:", process.env.REACT_APP_ENV);

  return (
    <div className="App">
      hello world
      <div className={Style.Hello}>hellllllllllllllllllo</div>
      <button onClick={openMenu}>hello</button>
      <Button type="primary">But9999ton</Button>
      66{process.env.REACT_APP_NOT_SECRET_CODE}666
      <input value={process.env.REACT_APP_NOT_SECRET_CODE} />
      <input value={process.env.REACT_APP_HANRUI_1} />
      <LiveApp />
      <TabApp />
    </div>
  );
};

export default App;

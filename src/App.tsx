import React from "react";
import "./App.css";
import { Button } from "antd";
import Style from "./hello.less";
import "./hello.less";

const App: React.FC = () => {
  const openMenu = () => {
    debugger;
    console.log(1);
  };

  console.log(Style);

  return (
    <div className="App">
      hello world
      <div className={"hello"}>dsdfadfasdf</div>
      <button onClick={openMenu}>hello</button>
      <Button type="primary">But9999ton</Button>
    </div>
  );
};

export default App;

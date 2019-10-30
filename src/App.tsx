import React from "react";
import "./App.css";
import { Button } from "antd";
import * as Style from "./a.module.less";
import "./b.less";
const App: React.FC = () => {
  console.log(Style);

  return (
    <div className="App">
      hellodsfa sdf
      <div className={Style.hello}>helllo</div>
      <div className={"helloxxx"}>helllo</div>
      <Button type="primary">Button</Button>
    </div>
  );
};

export default App;

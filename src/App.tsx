import React from "react";
import "./App.css";
import { Button } from "antd";
const App: React.FC = () => {
  const openMenu = () => {
    debugger;
    console.log(1);
  };
  return (
    <div className="App">
      hello world
      <button onClick={openMenu}>hello</button>
      <Button type="primary">But9999ton</Button>
    </div>
  );
};

export default App;

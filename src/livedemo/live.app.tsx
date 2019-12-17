import * as React from "react";
import { LiveComponent } from "../utils/livecom";
import { DemoService, DemoServiceStatus } from "./live.service";
import * as Style from "./live.module.less";
import { Button } from "antd";
export class LiveApp extends LiveComponent {
  private service = new DemoService();
  private helpText: string = "status";
  constructor(props: {}) {
    super(props);
    this.service.observe(this, status => {
      switch (status) {
        case DemoServiceStatus.PENDING:
          this.setState({});
          break;
        case DemoServiceStatus.OK:
          this.helpText = "OK";
          this.setState({});
          break;
        case DemoServiceStatus.ERROR:
          this.helpText = "ERROR";
          this.setState({});
          break;
      }
    });
  }

  render() {
    return (
      <div>
        <div className={Style.Status}>
          value {this.service.getNum()} status:{this.helpText}
        </div>
        <Button onClick={this.getMathRandom}>Math.random()</Button>
      </div>
    );
  }

  getMathRandom = () => {
    this.service.random();
  };
}

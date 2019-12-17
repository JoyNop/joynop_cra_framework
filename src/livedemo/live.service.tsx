import { LiveData } from "@webnode/livedata";

export enum DemoServiceStatus {
  NONE,
  PENDING,
  OK,
  ERROR
}
export class DemoService extends LiveData<DemoServiceStatus> {
  private authed: boolean = false;

  private num: number = 0;
  public async random() {
    this.num = parseInt((10 * Math.random()).toString());
    if (this.num % 2 === 0) {
      this.set(DemoServiceStatus.OK);
    } else {
      this.set(DemoServiceStatus.ERROR);
    }
  }

  public getNum() {
    return this.num;
  }
}

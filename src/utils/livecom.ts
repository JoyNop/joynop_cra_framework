import { LifecycleOwner, LiveCanceler } from "@webnode/livedata";
import { Component, PureComponent } from "react";

export interface LifecycleComponent<P = {}, S = {}>
  extends Component<P, S>,
    LifecycleOwner {}

export abstract class LiveComponent<P = {}, S = {}> extends Component<P, S>
  implements LifecycleComponent<P, S> {
  private cancelers: Set<LiveCanceler> = new Set();

  public addLiveCanceler(cb: LiveCanceler) {
    this.cancelers.add(cb);
  }

  public deleteLiveCanceler(cb: LiveCanceler) {
    this.cancelers.delete(cb);
  }

  public componentWillUnmount() {
    for (let cb of this.cancelers.values() as any) {
      cb();
    }
  }
}

export abstract class LivePureComponent<P = {}, S = {}>
  extends PureComponent<P, S>
  implements LifecycleComponent<P, S> {
  private cancelers: Set<LiveCanceler> = new Set();

  public addLiveCanceler(cb: LiveCanceler) {
    this.cancelers.add(cb);
  }

  public deleteLiveCanceler(cb: LiveCanceler) {
    this.cancelers.delete(cb);
  }

  public componentWillUnmount() {
    for (let cb of this.cancelers.values() as any) {
      cb();
    }
  }
}

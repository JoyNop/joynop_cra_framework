/// <reference types="react-scripts" />
declare module "*module.less" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

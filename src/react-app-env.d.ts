/// <reference types="react-scripts" />

declare module "*.less" {
  interface IClassNames {
    [className: string]: string;
  }
  const classes: IClassNames;
  export default classes;
}

/**
 * @author:HanRui
 * @interface BizRouter
 * @description:  业务组件路由定义
 * @param {string} name    名称
 * @param {string} path    对应路由URL
 * @param {boolean}exact   是否完全匹配
 * @param {any} com     所渲染组件
 * @param { boolean }singlePage  是否拥有外部layout包围，若为false.则为空白单页模式
 * @param { boolean }hasMenu  是否拥有左侧菜单
 *
 */
export interface BizRouter {
  name: string;
  path: string;
  permission: boolean;
  exact: boolean;
  singlePage: boolean;
  hasMenu: boolean;
  component: React.ComponentType<any>; //渲染组件
}

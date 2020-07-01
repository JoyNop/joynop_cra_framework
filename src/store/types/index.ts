export * from "../../biz/todolist/service/todoTypes";
// export * from "@/biz/setting/service/setting.types";
export * from "@/store/types/global.types";
export interface IInitialState {
  type: string;
  payload?: any;
  other?: any;
}

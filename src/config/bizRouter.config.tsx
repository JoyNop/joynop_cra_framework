import React from "react";
import loadable from "@loadable/component";
import { InitSpin } from "@/common";
import { BizRouter } from "./interface/bizRouter.config.interface";

const routes: Array<BizRouter> = [
  {
    name: "控制台",
    path: "/dashboard",
    permission: true,
    exact: true,
    singlePage: false,
    hasMenu: true,
    component: loadable(() => import("@/page/dashboard.page"), {
      fallback: <InitSpin />,
    }),
  },
  {
    name: "todo",
    path: "/todo",
    permission: true,
    exact: true,
    singlePage: false,
    hasMenu: true,
    component: loadable(() => import("@/page/todo.page"), {
      fallback: <InitSpin />,
    }),
  },
];

export default routes;

import React from "react";
import loadable from "@loadable/component";
import { InitSpin } from "@/common";
import { BizRouter } from "./interface/bizRouter.config.interface";

const routes: Array<BizRouter> = [
  // {
  //   name: "控制台",
  //   path: "/:orgId/dashboard",
  //   permission: true,
  //   exact: true,
  //   single: false,
  //   leftMenu: true,
  //   com: loadable(() => import("@/router/dashboard.router"), {
  //     fallback: <InitSpin />,
  //   }),
  // },
  // {
  //   name: "工程",
  //   path: "/:orgId/structure/:structureType?/:groupId?/:structureId?",
  //   exact: false,
  //   permission: true,
  //   single: false,
  //   leftMenu: true,
  //   com: loadable(() => import("@/router/structure.router"), {
  //     fallback: <InitSpin />,
  //   }),
  // },
  // {
  //   name: "产值",
  //   path: "/:orgId/output",
  //   exact: false,
  //   permission: true,
  //   single: false,
  //   leftMenu: true,
  //   com: loadable(() => import("@/router/output.router"), {
  //     fallback: <InitSpin />,
  //   }),
  // },
  // {
  //   name: "产值",
  //   path: "/:orgId/wealth",
  //   exact: false,
  //   permission: true,
  //   leftMenu: true,
  //   single: false,
  //   com: loadable(() => import("@/router/wealth.router"), {
  //     fallback: <InitSpin />,
  //   }),
  // },
  // {
  //   name: "劳务",
  //   path: "/:orgId/labor/:laborType?/:laborTeamId?",
  //   exact: false,
  //   permission: true,
  //   leftMenu: true,
  //   single: false,
  //   com: loadable(() => import("@/router/labor.router"), {
  //     fallback: <InitSpin />,
  //   }),
  // },
  // {
  //   name: "材料",
  //   path: "/:orgId/material/:pageType?",
  //   exact: false,
  //   permission: true,
  //   single: false,
  //   leftMenu: true,
  //   com: loadable(() => import("@/router/material.router"), {
  //     fallback: <InitSpin />,
  //   }),
  // },
  // {
  //   name: "设置",
  //   path: "/:orgId/setting",
  //   exact: true,
  //   permission: true,
  //   leftMenu: true,
  //   single: true,
  //   com: loadable(() => import("@/router/setting.router"), {
  //     fallback: <InitSpin />,
  //   }),
  // },
  // {
  //   name: "应用",
  //   path: "/:orgId/app",
  //   exact: true,
  //   permission: true,
  //   leftMenu: true,
  //   single: false,
  //   com: loadable(() => import("@/router/app.router"), {
  //     fallback: <InitSpin />,
  //   }),
  // },
  // {
  //   name: "日事日毕",
  //   path: "/:orgId/donetoday",
  //   exact: true,
  //   leftMenu: true,
  //   permission: true,
  //   single: false,
  //   com: loadable(() => import("@/router/general/doneToday.router"), {
  //     fallback: <InitSpin />,
  //   }),
  // },
  // {
  //   name: "例会",
  //   path: "/:orgId/meeting",
  //   exact: true,
  //   leftMenu: true,
  //   permission: true,
  //   single: false,
  //   com: loadable(() => import("@/router/general/meeting.router"), {
  //     fallback: <InitSpin />,
  //   }),
  // },
  // {
  //   name: "任务组",
  //   path: "/:orgId/task",
  //   exact: true,
  //   leftMenu: true,
  //   permission: true,
  //   single: false,
  //   com: loadable(() => import("@/router/general/task/taskGroup.router"), {
  //     fallback: <InitSpin />,
  //   }),
  // },
  // {
  //   name: "随笔记录",
  //   path: "/:orgId/note",
  //   exact: true,
  //   leftMenu: true,
  //   permission: true,
  //   single: false,
  //   com: loadable(() => import("@/router/general/note.router"), {
  //     fallback: <InitSpin />,
  //   }),
  // },
  // // 需解决
  // {
  //   name: "任务",
  //   path: "/:orgId/task/:taskGroupId",
  //   exact: true,
  //   leftMenu: true,
  //   permission: true,
  //   single: false,
  //   com: loadable(() => import("@/router/general/task/task.router"), {
  //     fallback: <InitSpin />,
  //   }),
  // },
  // {
  //   name: "个人信息",
  //   path: "/account",
  //   exact: false,
  //   leftMenu: false,
  //   permission: true,
  //   single: false,
  //   com: loadable(() => import("@/router/account.router"), {
  //     fallback: <InitSpin />,
  //   }),
  // },
];

export default routes;

export interface App {
  code: string;
  icon: string;
  id: string;
  name: string;
  order: number;
  router: string;
  type: number;
}

export interface User {
  avatar: string;
  createAt: string;
  id: string;
  nickname: string;
  phone: string;
  state: number;
  username: string;
}
interface Group {
  id: string;
  name: string;
}

export interface Payload {
  projectName: string;
  constructionTeam: string;
  supervisionTeam: string;
  ownerTeam: string;
  startTime: number;
  endTime: number;
  projectDescription: string;
}

export interface Org {
  createAt: string;
  id: string;
  name: string;
  discription: string;
  type: number;
  ownerId: string;
  parentId: string;
  state: number;
  groups: Group[];
  payload: Payload;
}
export interface OrgInfo {
  org: Org;
  groupList: Group[];
  userList: User[];
}

import axios from "@/utils/http";

export const getMyApps = (orgId: string) => {
  return axios.get(`/api/account/v1/org/${orgId}/app/list/order`);
};

export const getMyInfo = () => {
  return axios.get(`/api/account/v1/user/my/info`);
};

//读取API
//已废弃！

export const getApiEnv = () => {
  //判断api
  let api: string | undefined = "";
  if (process.env.NODE_ENV === "production") {
    //环境为prod

    api =
      process.env[
        `REACT_APP_${process.env.REACT_APP_BUILD_ENV?.toUpperCase()}_API`
      ];
  } else {
    //环境为dev，使用测试api
    api = process.env.REACT_APP_DEVELOPMENT_API;
  }

  return api;
};

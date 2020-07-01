/*
 * @Author: your name
 * @Date: 2020-04-01 12:00:24
 * @LastEditTime: 2020-05-07 09:45:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \PrideBrowser\src\setupProxy.js
 */
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/development",
    createProxyMiddleware({
      target: "https://pms.duobangbox.com",
      changeOrigin: true,
      pathRewrite: {
        "^/development": "/",
      },
    })
  );
  app.use(
    "/production",
    createProxyMiddleware({
      target: "/",
      changeOrigin: true,
      pathRewrite: {
        "^/prod": "/",
      },
    })
  );
};

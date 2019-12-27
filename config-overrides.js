const { override, fixBabelImports, addLessLoader, addBundleVisualizer } = require('customize-cra');
module.exports = override(
  //do stuff with the webpack config...
 
  addBundleVisualizer({
    "analyzerMode": "static",
    "reportFilename": "report.html",
  }, true),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: 'css',
    style: true,
  }),
  fixBabelImports("lodash", {
    libraryDirectory: "",
    camel2DashComponentName: false
  }),
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: { '@primary-color': 'pink' },
  }) ,
) 
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
  addLessLoader({
    javascriptEnabled: true,
    // strictMath: true,
    // noIeCompat: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }) ,
) 
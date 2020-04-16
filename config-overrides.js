/*
 * @Author: HanRui
 */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addBundleVisualizer,
  addWebpackAlias,
} = require('customize-cra');
const path = require('path');
module.exports = override(
  //do stuff with the webpack config...
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  addBundleVisualizer(
    {
      analyzerMode: 'static',
      reportFilename: 'report.html',
    },
    true
  ),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: 'css',
    style: true,
  }),
  fixBabelImports('lodash', {
    libraryDirectory: '',
    camel2DashComponentName: false,
  }),
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: { '@primary-color': 'pink' },
  })
); 
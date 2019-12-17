const { override, fixBabelImports, addLessLoader } = require('customize-cra');


module.exports =  override  (
  //do stuff with the webpack config...
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: 'css',
    style: true,
  }),

  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  })

  // return config;
)



// module.exports = function override(config, env) {
//   //do stuff with the webpack config...
//   fixBabelImports('import', {
//     libraryName: 'antd',
//     libraryDirectory: 'es',
//     // style: 'css',
//     style: true,
//   })

//   addLessLoader({
//     javascriptEnabled: true,
//     modifyVars: { '@primary-color': '#1DA57A' },
//   })

//   return config;
//}
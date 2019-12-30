```
E:.
│  a.module.less        //测试LESS 
│  App.css              //测试CSS
│  App.tsx              //APP入口以及router
│  index.css            //reset css
│  index.tsx            //入口以及REDUX 
│  oldApp.tsx           //首页入口
│  react-app-env.d.ts   //declare module 
│  serviceWorker.ts     //serviceWorker
│  
├─common
│  │  index.ts          // 公共组建export  
│  │  
│  └─layout
│          layout.module.less       
│          layout.tsx
│          
├─livedemo
│      live.app.tsx       //livedata-demo
│      live.module.less
│      live.service.tsx  //livedata-service 
│      
├─postdemo
│      post.tsx           //console.log看获取数据
│      
├─store
│  │  index.ts          //导出Reducer
│  │  
│  ├─actions
│  │      index.ts      //导出action,在业务文件夹下写，然后此处export
│  │      
│  ├─reducers
│  │      index.tsx    //导出reducers,在业务文件夹下写，然后此处export
│  │      
│  └─types
│          index.ts     //部分redux 变量
│          
├─tabdemo
│      tab.tsx
│      
├─userdemo
│  │  userControl.tsx    //组件3
│  │  userList.tsx       //组件2 
│  │  userPage.tsx       //组件1
│  │  
│  └─service
│          userAction.ts      //control 执行各种操作
│          userReducers.ts    //userReducers  初始值，做条件判断
│          userTypes.ts      //userReducers    //判断操作类型
│          
└─utils
        http.ts              //封装axios 
        livecom.ts           //封装livedata
        


```
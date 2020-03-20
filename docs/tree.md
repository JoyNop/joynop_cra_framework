```
│  .dockerignore
│  .editorconfig
│  .env
│  .gitignore
│  .prettierrc
│  config-overrides.js
│  Dockerfile
│  LICENSE
│  package.json
│  README.md
│  tsconfig.json
│  yarn.lock
│  
├─.vscode
│      launch.json
│      settings.json
│      
├─configbak
│      config-overrides copy.js
│      package copy.json
│      
├─docs
│  │  tree.md
│  │  
│  └─img
│          20191218155632.jpg
│          logo.jpg
│          
├─public
│      config.js
│      favicon.ico
│      get_env.sh
│      index.html
│      manifest.json
│      robots.txt
│      
├─server
│  └─config
│      │  default.conf
│      │  http.conf
│      │  https.conf
│      │  mime.types
│      │  
│      ├─cert
│      │      readme.md
│      │      
│      ├─logs
│      │      app.error.log
│      │      app.log
│      │      
│      └─rewrite
│              app.rewrite.conf
│              
└─src
    │  a.module.less
    │  App.css
    │  App.tsx
    │  index.css
    │  index.tsx
    │  oldApp.tsx
    │  react-app-env.d.ts
    │  serviceWorker.ts
    │  setupProxy.js
    │  
    ├─biz                            //业务文件夹
    │  └─todolist                    //业务组件
    │      │  todoControl.tsx         
    │      │  todoList.tsx
    │      │  todoPage.tsx
    │      │  
    │      └─service                //某个业务服务，私有属性，尽量避免私有属性复用
    │              todoAction.ts
    │              todoReducers.ts
    │              todoTypes.ts
    │              
    ├─router
    │      todo.router.tsx         //业务路由 以.router命名
    │      
    ├─store                         //redux服务
    │  │  index.ts
    │  │  
    │  ├─actions
    │  │      index.ts
    │  │      
    │  ├─reducers
    │  │      index.tsx
    │  │      
    │  └─types
    │          index.ts
    │          
    └─utils                      //工具类
            handleAuthToken.ts
            http.ts
            privateRoutes.tsx
            
```
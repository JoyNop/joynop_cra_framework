```
,-.----.
\    /  \                                             ,---,.
|   :    \            ,--,         ,---,            ,'  .'  \
|   |  .\ :  __  ,-.,--.'|       ,---.'|          ,---.' .' |  __  ,-.   ,---.           .---.                        __  ,-.
.   :  |: |,' ,'/ /||  |,        |   | :          |   |  |: |,' ,'/ /|  '   ,'\         /. ./|  .--.--.             ,' ,'/ /|
|   |   \ :'  | |' |`--'_        |   | |   ,---.  :   :  :  /'  | |' | /   /   |     .-'-. ' | /  /    '     ,---.  '  | |' |
|   : .   /|  |   ,',' ,'|     ,--.__| |  /     \ :   |    ; |  |   ,'.   ; ,. :    /___/ \: ||  :  /`./    /     \ |  |   ,'
;   | |`-' '  :  /  '  | |    /   ,'   | /    /  ||   :     \'  :  /  '   | |: : .-'.. '   ' .|  :  ;_     /    /  |'  :  /
|   | ;    |  | '   |  | :   .   '  /  |.    ' / ||   |   . ||  | '   '   | .; :/___/ \:     ' \  \    `. .    ' / ||  | '
:   ' |    ;  : |   '  : |__ '   ; |:  |'   ;   /|'   :  '; |;  : |   |   :    |.   \  ' .\     `----.   \'   ;   /|;  : |
:   : :    |  , ;   |  | '.'||   | '/  ''   |  / ||   |  | ; |  , ;    \   \  /  \   \   ' \ | /  /`--'  /'   |  / ||  , ;
|   | :     ---'    ;  :    ;|   :    :||   :    ||   :   /   ---'      `----'    \   \  |--" '--'.     / |   :    | ---'
`---'.|             |  ,   /  \   \  /   \   \  / |   | ,'                         \   \ |      `--'---'   \   \  /
 `---`              ---`-'    `----'     `----'  `----'                            '---"                   `----'

```

## 开发

**请前往`dev`分支开发，等待审核通过后合并至`master`**

## router 命名规则

访问`your-url.router.tsx`

对应 `localhost/your-url`

## 业务模块`biz`

> 仅放置组件,最后由对应 router 导出

### 模块名

example:`todolist`

### service

模块名+Action/Reducers/Types

example: `todoAction`,`todoReducers`,`todoTypes`

组件名:`yourCOM.com.tsx`

接口名:`yourInterface.interface.ts`

### 媒体资源

存放至`src/media`

## 编译

开发测试环境

`npm run start`

生产测试环境

`npm run build:dev`

生产正式环境

`npm run build:prod`

## Docker

`docker login --username=多邦汇德 registry.cn-qingdao.aliyuncs.com`

### Build

`docker build -t registry.cn-qingdao.aliyuncs.com/duobang_test/pms-browser-v3:1.0 .`

### Push

`docker push registry.cn-qingdao.aliyuncs.com/duobang_test/pms-browser-v3:1.0`

### Pull

`docker pull registry.cn-qingdao.aliyuncs.com/duobang_test/pms-browser-v3:[镜像版本号]`

### Start

`docker run --name pms-browser-v3 -d -p 10001:80 registry.cn-qingdao.aliyuncs.com/duobang_test/pms-browser-v3:1.0`

## 本地 Docker

### 挂载本地

`docker run --name pms_browser_pride -d -p 10001:80 --rm -v F:/work/duoda/pms_v3/pms-browser-pride/build/:/root/app/ registry.cn-qingdao.aliyuncs.com/duobang_test/pms-browser-v3:1.2.1`

### Docker Development

`npm run build:dev`

`docker build -t pms_browser_pride/dev .`

`docker run --name pms_browser_pride -d -p 10001:80 pms_browser_pride/dev`

### Docker Prodection

`npm run build:prod`

`docker build -t pms_browser_pride/prod .`

`docker run --name pms_browser_pride -d -p 10001:80 pms_browser_pride/prod`

## 内置环境变量

`process.env.NODE_ENV`:`development`|`production` 编译生产/开发

`process.env.REACT_APP_BUILD_ENV` : 生产 API 环境

`process.env.REACT_APP_XXXXXX_API`: 当前 API 接口路径

# URL

| URL       | NAME | TAG |
| --------- | ---- | --- |
| /console  | 总览 |     |
| /project  | 工程 |     |
| /output   | 产值 |     |
| /contract | 劳务 |     |
| /material | 物资 |     |


# 更多文档

[https://pridebrowser.gitlab.io/pridebrowser_document](https://pridebrowser.gitlab.io/pridebrowser_document)
## React Demo

#### 项目结构遵循原子设计原理 
原子设计介绍
http://bradfrost.com/blog/post/atomic-web-design/

#### 技术栈
|技术类型 |说明 |
|:------ |:--------|
|IDE|推荐使用Webstorm开发|
|Ant-Design|ReactUI<br/>https://ant.design|
|webpack-blocks|以函数的方式写webpack配置,方便代码复用<br/>https://github.com/andywer/webpack-blocks/tree/release/1.0|
|React|https://facebook.github.io/react/docs/hello-world.html|
|Redux|http://redux.js.org/ <br/> http://cn.redux.js.org/|
|Redux-Saga|和redux结合的一种异步框架<br/>https://github.com/redux-saga/redux-saga<br/>教程<br/>https://segmentfault.com/a/1190000007261052?_ea=1290634<br/>|
|Redux-Saga-Trunk|redux-trunk的saga实现<br/>https://github.com/diegohaz/redux-saga-thunk|
|Storybook|和react结合良好的组件开发工具<br/>https://storybooks.js.org/docs/react-storybook/basics/quick-start-guide/|
|Babel|es6语法支持<br/>http://babeljs.cn/|
|Styled-Components|js结合css最佳方案<br/>https://styled-components.com/|
|Styled-Theme|扩展Styled-Components<br/>https://github.com/diegohaz/styled-theme|
|Styled-tools|扩展 使Styled_components可以传值<br/>https://github.com/diegohaz/styled-tools|
|React-Router|和react结合的路由<br/>https://github.com/ReactTraining/react-router|
|opn-cli|打开文件的工具<br/>https://github.com/sindresorhus/opn-cli|
|webpack-happypack|并发打包,webpack提速<br/>https://www.npmjs.com/package/happypack|
|webpack-blocks-split-vendor|webpack文件分割<br/>https://github.com/diegohaz/webpack-blocks-split-vendor|
|cross-env|解决windows下NODE_ENV无法使用问题<br/>https://npm.taobao.org/package/cross-env<br/>https://segmentfault.com/a/1190000005811347?_ea=934705|
|validator|字符串校验工具<br/>https://www.npmjs.com/package/validator|
|whatwg-fetch|fetch网络请求框架<br/>https://www.npmjs.com/package/whatwg-fetch|
|lodash|js工具库<br/>https://lodash.com/|
|react-update|使用react源生update库合并state<br/>http://reactjs.cn/react/docs/update.html|


#### 工作流
1. 环境要求
    1. nodejs
    2. npm
    3. yarn (用于替代npm)
        1. 安装方式:
         - 执行 sudo npm install -g yarnpkg
        2. 文档:
         - https://yarnpkg.com/zh-Hans/
         - http://www.oschina.net/news/78072/yarn-a-new-package-manager-for-javascript
2. 初始化
    1. 执行yarn命令(替代npm install)
    
3. 开发
    1. 安装包(yarn 有些情况下需要开代理,没有代理则使用npm)
        1. 使用yarn add xxx 添加xxx包到项目中(替代npm install xxx)
        2. 安装指定版本: yarn add xxx@1.2.3 安装1.2.3版本
        3. 安装指定tag: yarn add xxx@tag 安装tag
        4. 默认会安装在 dependencies 中 <br/> 使用 yarn add xxx -D 安装在devDependencies 中
    2. 移除包
        1. yarn remove xxx 移除包,会自动从package.json和yarn.lock中移除依赖
    3. 创建组件
        1. 在components文件夹下任意atoms,molecules,organisms,pages中创建组件文件夹,组件的名字不随导出的组件名相关,而和组件所在的文件夹相关
           - 如例子中,atoms下AntButton组件,即使export指定的组件名非AntButton,只要文件夹名字为AntButton,则组件导出后名字就是AntButton
    4. 指定全局主题
        1. components下themes文件夹中指定主题方案,使用的主题将会通过ThemeProvider传递到组件树中,通过styled-theme可以在任何组件中调用主题方案
    5. 网络请求
        1. 通过store子文件夹中的sagas.js创建网络请求,saga为异步框架,使网络请求更简洁
    6. state操作
        1. 在store下创建文件夹,该文件夹可以按模块命名,每个文件夹下的state的操作为独立state,互不干扰.
        2. 创建一个动作来改变状态需要经过下面动作:
            - 创建actions.js,存放要指定的动作,返回一个action,具体参见redux文档
            - 创建reducer.js,修改合并state
            - 创建selectors.js,提供选择state的函数
    7. 业务逻辑
        1. 业务逻辑基本承载于container中
    8. 组件独立开发
        1. 在组件文件夹中创建index.stories.js文件,用于传递测试数据
        2. 运行npm run storybook命令 打开http://localhost:9001 查看组件效果
    
4. 运行
    1. 执行 npm start 运行开发环境

5. 打包
    1. 执行 npm run build 打包
        1. 打包后的文件处于dist目录下.

    

#### 结构
 - dist [webpack打包后的文件]
 - private [某些框架的配置文件]
 - src
    - components [组件,可复用的组件,应与业务分离]
        - atoms [原子,基本组件,存放基本html标签或第三方组件,如input,label]
            - index.js [实际组件]
            - index.stories.js [storybook预览组件]
        - molecules [分子,由一组atom组成,如iconLink,Field]
        - organisms [有机体,由一组atom,molecules和其他organisms组成,如页面顶部区域,底部区域,登录区域]
        - pages [页面,多种organisms组成一个页面,如 homepage,notFoundPage]
        - templates [模版]
        - themes [一些主题的配置,可以实现主题切换,通过ThemeProvider,实现]
        - App.js [app主题/路由等的配置]
        - index.js [自动导出module配置]
    - containers [容器,处理redux-state的传递,分发]
    - services 
        - api [请求函数的封装,如公有请求头,参数,打印日志等]
        - validation [包含一些参数校验函数]
    - store [存储redux的actions,reducers,selectors等,按约定分结构,可以自动导出module]
        - * [任意目录]
            - actions.js [redux action 标志state的type]
            - reducer.js [redux reducer 合并旧state返回新state]
            - selectors.js [redux selector 选择想要的state]
            - sagas.js [redux saga 异步动作]
        - *.js [任意js都是进行对应类型module批量导出操作的]
    - config.js [全局常量配置]
    - index.js [app顶级配置]
 - public [资产目录]
 - .babelrc [Babel配置文件]
 - webpack.config.js [webpack配置文件]
 - package.json [npm配置文件]
 - yarn.lock [yarn为了保证项目依赖没有变化,防止依赖更新产生bug的配置文件]
 
 
#### 公有代码的一些说明
 - require.context (一般出现在index.js中,自定义webpack上下文,方便批量module.exports)
    - require.context('需要匹配的根路径', '布尔类型,代表是否包含子路径,true是', /'正则pattern'/)
    - 由于此项配置,所以可以实现所有的组件,只要按规则创建目录结构,则自动导出的功能
    - 示例:
    -  ```$js
        //取得自定义的require
        var req = require.context("./templates", true, /^\.\/.*\.jade$/);
        
        //通过自定义的require来引入文件
        // 等同于 require("./templates/table.jade");
        var tableTemplate = req("./table.jade");
        
        //等同于 require.resolve("./templates/table.jade");
        var tableTemplateId = req.resolve("./table.jade");
        
        //遍历keys 得到要引入的文件路径
        //结果:["./table.jade", "./table-row.jade", "./directory/folder.jade"]
        req.keys();
        
        //require所有匹配项
        function requireAll(requireContext) {
          return requireContext.keys().map(requireContext);
        }
        var modules = requireAll(req);
        ```

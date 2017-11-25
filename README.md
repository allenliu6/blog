# blog

> allen's blog supported by vue2.5

vue2.5 typescript vue-router vuex（暂时不用） vue-cli postcss axios marked mockjs font-awesome koa

## 当前目录结构
- assets  存放公共静态资源 暂有三类文件 img font css
- components  公共组件
- mock mockjs相关文件
- router 路由文件  后续将每个路由对应一个js文件
- server 暂时将服务端文件存放在此
- store  vuex目录结构 暂时没有使用，将按照官网推荐目录结构使用
- util  项目静态js空间
- view  每个页面一个文件夹 里面存放私有资源（img css component）以及总 .vue 文件
- App.vue  vue跟组件
- filter.js  过滤文件 后续将单独作为一个文件夹
- main.ts  主入口文件
- .d.ts文件  ts相关配置声明文件

## 阶段一  
目标：实现静态博客页面

1. 简单页面，首页、详情页、编辑页，包含三大部分header  sidebar  content
2. 响应式布局和动画过渡效果
    - 暂时只一个断点  768
    - REM  初始化时JS确定REM大小，单位统一REM   字体使用em
    - 过渡效果暂时只做简单平移消失  动画最后补充


## 阶段二
目标：实现静态博客后台页面以及后端逻辑


## 阶段三
目标：部署上线


## 阶段四
目标：对网页进行性能和用户体验优化并持续维护迭代


## 接口设计

1. get /topics  首页主题
    - query
        1. tab 板块名称 默认为 all
        2. page  页数  默认为1

    - response body包含：
        1. 一个对象数组  成员包括为
            - date
            - title
            - summary
            - tab
            - pv
            - commentCount

        2. allPage  number   分页总数

        3. success boolean
    
2. get /article   文章
    - query
        - id  文章数据库 _id
    
    - response body包含
    1. 一个对象  成员包括
        - comments [{
        -   name:
        -   avatar:
        -   content:
        -   date:
        -   reply: [{  
        -       name:  
        -       avatar:  
        -       content:  
        -       date:
        -   }]
        - }]
        - content
        - pv
        - tab
        - title
        - date
        - lastModify
        - prevTitle   
        - nextTitle   三次select
    
    2. 对象数组  两个成员  前一篇和后一篇文章信息  额外需要两次select
        - title 
        - id

    3. success  boolean

3. post /article/publish    发表文章
    
    request body {
        title
        content
    }


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


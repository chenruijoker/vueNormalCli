# vue 脚手架介绍

-   本脚手架是基于 vue2.0 进行开发的，请勿使用 ts 或者 vue3.0 模式进行开发，两者版本开发理念和思想是存在差异的
-   node 版本为 12.19.0
-   包管理器是 Yarn

## 分支介绍

-   master 分支为标准 Vue 解决方案，初始建站可用本套方案
-   empty-template 分支为纯 vue 解决方案（无 axios 请求解决方案）（组件级别）
-   router 分支为 vue-router 路由解决方案
-   VueX 分支为 vueX 全局状态管理解决方案

## 使用介绍

-   yarn start 启动脚手架
-   yarn build 打包项目，成果物为 dist 文件夹

## 开发规范

-   支持 scss 样式开发（建议使用 scss 语法进行开发）
-   支持全局引用，方便引用静态文件
    > 比如我们一般会使用相对引用的方式去引用图片例如：

```html
<img src="./assets/logo.png" />
```

> 但是在层级特别夸张的多组件内容下，我们不得不一直去寻找这些内容的相对路径，这时候我们就可以提供解决方案：

```html
<img src="@/assets/logo.png" />
```

> 这样使用了 @ 就可以表示src这个目录，方便快速开发了

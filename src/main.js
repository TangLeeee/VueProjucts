// 最重要的三个文件main.js, App.vue, index.js
// 该文件相当十分之重要，一定要搞懂
// main.js为js的入口文件，导入其他资源库，并进行相应的注册
// 首先需要导入Vue模块并创建Vue实例，实例中绑定el
// 导入./App.vue文件--组件的入口文件，并在vue实例中渲染，这里的渲染会导致用App.vue替换掉<div id="app"></div>的整个内容！
// 之后导入路由，并用Vue.use()注册路由，为了方便起见，所有路由入口集中在index.js中，在main.js导入后挂载在vue实例上，为了不必要的麻烦，最好将index.js导入为router
// 其他文件为样式文件及第三方资源(放在lib下
// mint-ui用来开发移动端应用，mui可以简单理解为bootstrap一类，web端建议使用elementUI开发
import Vue from 'vue'
import app from './App'
import VueRouter from 'vue-router'
import router from './router/index'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'
import './lib/mui/css/mui.css'

Vue.use(VueRouter)
Vue.use(MintUI)
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: c => c(app),
  router
})

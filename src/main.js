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

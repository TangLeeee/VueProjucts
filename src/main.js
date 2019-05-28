import Vue from 'vue'
import app from './App'
import VueRouter from 'vue-router'
import router from './router/index'

Vue.use(VueRouter)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: c => c(app),
  router
})

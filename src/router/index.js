// 路由入口文件，创建vue-router实例暴漏给main.js，main.js将实例挂在在vue对象上
// 为了方便管理，将所有路由信息放在这里统一配置，注意routes不要写错
import Router from 'vue-router'
import account from '../components/account'
import GoodList from '../components/goodlist'
import login from '../components/subcom/login'
import register from '../components/subcom/register'

export default new Router({
  routes: [
    {
      path: '/account',
      component: account,
      children: [
        {path: '/login', component: login},
        {path: '/register', component: register}
      ]
    },
    {
      path: '/goodlist',
      component: GoodList
    }
  ]
})

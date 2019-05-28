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

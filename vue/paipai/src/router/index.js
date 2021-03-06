import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import AdminHome from '@/components/AdminHome'
import BiaoshuGuanli from '@/components/BiaoshuGuanli'
import PaishouGuanli from '@/components/PaishouGuanli'
import GithubLogin from '@/components/GithubLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AdminHome',
      component: GithubLogin,
      children: [{
        path: 'biaoshuguanli',
        name: 'BiaoshuGuanli',
        component: BiaoshuGuanli
      }, {
        path: 'paishouguanli',
        name: 'PaishouGuanli',
        component: PaishouGuanli
      }]
    }]
})

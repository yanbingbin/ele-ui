import Vue from 'vue'
import Router from 'vue-router'
import UserTable from '@/views/tables/UserTable'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserTable',
      component: UserTable
    }
  ]
})

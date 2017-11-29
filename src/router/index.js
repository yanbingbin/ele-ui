import Vue from 'vue'
import Router from 'vue-router'
import UserTable from '@/views/tables/UserTable'
import UserCharts from '@/views/echarts/UserCharts'
Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		name: 'UserCharts',
  		component: UserCharts
  	},
    {
      path: '/userTable',
      name: 'UserTable',
      component: UserTable
    }
  ]
})

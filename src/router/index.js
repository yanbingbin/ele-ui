import Vue from 'vue'
import Router from 'vue-router'
import UserTable from '@/views/tables/UserTable'
import UserCharts from '@/views/echarts/UserCharts'
import Home from '@/views/home/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'Home',
    	component: Home,
    	children: [
		    {
		      path: '/',
		      name: 'UserTable',
		      component: UserTable
		    },
		    {
		      path: '/userTable',
		      name: 'UserTable',
		      component: UserTable
		    },
    		{
		  		path: '/userCharts',
		  		name: 'UserCharts',
		  		component: UserCharts
		  	}
    	]
    }
  	
  ]
})

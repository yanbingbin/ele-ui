import Vue from 'vue'
import Router from 'vue-router'
import UserTable from '@/views/tables/UserTable'
import UserCharts from '@/views/echarts/UserCharts'
import Home from '@/views/home/Home'
import City from '@/views/area/regionDataPlus'
import City2 from '@/views/area/provinceAndCityDataPlus'
import Login from '@/views/user/UserLogin'
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
		  	},
		  	{
		  		path: '/city',
		  		name: 'City',
		  		component: City
		  	},
		  	{
		  		path: '/city2',
		  		name: City2,
		  		component: City2
		  	}
    	]
    },
  	{
  		path: '/login',
  		name: Login,
  		component: Login
  	}
  ]
})

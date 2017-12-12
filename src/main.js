// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import babelpolyfill from 'babel-polyfill'
import App from './App'
import router from './router'
import Mock from './mock'
//Mock.bootstrap()

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts

//const router = new VueRouter({
//	routes
//})

//router.beforeEach((to, from, next) => {
//	if (to.path === '/login') {
//		sessionStorage.removeItem('user');
//	} 
//	let user = JSON.parse(sessionStorage.getItem('user'));
//	if (!user && to.path != '/login') {
//		next({path: '/login'})
//	}
//})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

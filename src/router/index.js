import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Container from '@/components/Container'
import Layout from '@/components/Layout'
import Icon from '@/components/IconAndBtn'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
    	path: '/container',
    	name: 'Container',
    	component: Container
    },{
    	path: '/layout',
    	name: 'Layout',
    	component:Layout 
    },{
    	path: '/icon',
    	name: 'Icon',
    	component: Icon
    },{
    	path: '/form',
    	name: 'Form',
    	component: Form
    }
  ]
})

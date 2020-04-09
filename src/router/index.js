import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LeftAside from '@/components/LeftAside'
//import Main from '@/views/buyer/Main'
import Home from '@/views/home/Home'
import Main from '@/views/Main'
import ShoppingCart from '@/views/buyer/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
      	{
		      path: '/home/Home',
		      name: 'Home',
		      component: Home
		    }
      ]
    }
  ]
})

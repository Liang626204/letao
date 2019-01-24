import Vue from 'vue'
import Router from 'vue-router'
import Cart from '@/views/Cart'
import Category from '@/views/Category'
import Home from '@/views/Home'
import User from '@/views/User'
// import HelloWorld from '@/components/HelloWorld'
// import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: {name: 'home'}
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }

  ]
})

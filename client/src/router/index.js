import Vue from 'vue'
import Router from 'vue-router'
import Customer from '@/components/Customer'
import Customers from '@/components/Customers'
import Home from '@/components/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/customer/:id',
      name: 'customer',
      component: Customer
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    }

  ],
  path: '*', redirect: '/'
})

import Vue from 'vue'
import Router from 'vue-router'
import Log from '@/components/Log'
import { log } from 'util';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'log',
      component: Log
    }
  ],
  path: '*', redirect: '/'
})

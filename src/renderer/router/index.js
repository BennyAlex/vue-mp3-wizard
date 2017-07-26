import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store'

import { start, preview, settings } from '@/components/routes'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: start
    },
    {
      path: '/preview',
      name: 'preview',
      component: preview
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.afterEach((to, from) => {
  Store.commit('set_last_route', from)
})

export default router

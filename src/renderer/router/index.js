import Vue from 'vue'
import Router from 'vue-router'

import { start, preview, settings } from '@/components/routes'

Vue.use(Router)

export default new Router({
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

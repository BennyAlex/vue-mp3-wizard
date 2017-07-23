import Vue from 'vue'
import Router from 'vue-router'

import { index, preview, settings } from '@/components/routes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
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

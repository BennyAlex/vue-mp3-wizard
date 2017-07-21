import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/components/tabs')
    },
    {
      path: '/preview',
      name: 'preview',
      component: require('@/components/preview')
    },
    {
      path: '/settings',
      name: 'settings',
      component: require('@/components/settings')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

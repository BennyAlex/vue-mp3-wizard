import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/components/routes/index')
    },
    {
      path: '/preview',
      name: 'preview',
      component: require('@/components/routes/preview')
    },
    {
      path: '/settings',
      name: 'settings',
      component: require('@/components/routes/settings')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

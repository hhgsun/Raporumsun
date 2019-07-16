import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Table from './views/Table.vue'

Vue.use(Router);

export default new Router({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Başlangıç',
      component: Home
    },
    {
      path: '/table',
      name: 'Tablo',
      meta: { badge: 'Liste' },
      component: Table // () => import(/* webpackChunkName: "table" */ './views/Table.vue')
    }
  ]
})

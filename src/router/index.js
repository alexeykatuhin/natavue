import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import store from '@/store'

Vue.use(Router)

import Layout from '@/views/layout/Layout'


export const constantRouterMap=[
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
//   {
//   path: '/',
//   name: 'HelloWorld',
//   component: HelloWorld
// },
  {
    path: '',
    component: Layout,
    redirect: 'test',
    children: [
      {
        path: 'test',
        component: () => import('@/views/testview/index'),
        name: 'Test',
        meta: { title: 'test', icon: 'fab fa-accessible-icon', noCache: true }
      }
    ]
  }, 
   {
    path: '/helloworld',
    component: Layout,
    redirect: '',
    children: [
      {
        path: '',
        component: HelloWorld,
        name: 'HelloWorld',
        meta: { title: 'HelloWorld', icon: 'fab fa-adn', noCache: true }
      }
    ]
  }
]

store.commit('SET_ROUTES', constantRouterMap)
export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

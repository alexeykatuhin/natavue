import {  constantRouterMap } from '@/router'

const router = {
    state: {
      routes: constantRouterMap
    }   
     ,
    mutations:{
      SET_ROUTES: (state, routes)=>{
        state.routes = routes;
      }
    },
    actions:{
      setRoutes({commit}, {routes}){      
        commit('SET_ROUTES', routes)
      }
    }  
  }
  
// router.beforeEach((to, from, next) => {

// }


export default router
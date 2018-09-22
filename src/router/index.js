import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import index from '@/components/index'
import profile from '@/components/profile'
import portfolio from '@/components/portfolio'
import firebase from 'firebase'

Vue.use(Router)
Vue.use(Vuex)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: 'index'
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      meta: { requiresAuth: true }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let currentUser = firebase.auth().currentUser
  if (requiresAuth) {
    if (!currentUser) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

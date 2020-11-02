import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookSearch from '../views/BookSerch.vue'
import BookForm from '../views/BookForm.vue'

Vue.use(VueRouter)
/*
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(//- webpackChunkName: "about" -// '../views/About.vue')
  }
]
*/
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/search',
      name: 'search',
      component: BookSearch,
    },
    {
      path: '/form',
      name: 'form',
      component: BookForm,
    },
    {
      path: '*',
      redirecr: '/',
    }
  ]
})

export default router

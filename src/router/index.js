import Vue from 'vue'
import VueRouter from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed'
import Signup from '@/views/Signup'
import Login from '@/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  { 
    path:'/login',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

export default router

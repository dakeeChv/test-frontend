import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../components/HomePage'
import Signup from '../components/SignupPage'
import Signin from '../components/SigninPage'
import Welcome from '../components/Welcome'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

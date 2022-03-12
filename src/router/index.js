import { createRouter, createWebHistory } from 'vue-router'
import Feed from '../views/MainFeed.vue'
import Profile from '../views/ProfilePage.vue'
import Recipes from '../views/RecipeDetails.vue'
import Search from '../views/SearchPage.vue'
import Register from '../views/RegisterPage.vue'
import Login from '../views/LoginPage.vue'
import ForgotPassword from '../views/ForgottenPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'

const routes = [
  {
    path: '/',
    alias: '/feed',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path:'/recipes/:id',
    name: 'Recipes',
    component: Recipes,
    props: true
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword,
  },
  // redirect example
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import SignUp from '@/components/SignUp.vue'
import Home from '@/components/HomePage.vue'
import Login from '@/components/LoginPage.vue'
import NotFound from '@/components/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    component: Home,
    path: '/'
  },

  {
    name: 'login',
    component: Login,
    path: '/login'
  },
  {
    name: 'signup',
    component: SignUp,
    path: '/signup'
  },
  {
    name: 'notfound',
    component: NotFound,
    path: '/:pathMatch(.*)*'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

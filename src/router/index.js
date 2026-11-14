import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import SignupView from '../views/SignupView.vue'

const routes = [
  { path: '/', name: 'Main', component: MainView },
  { path: '/signup', name: 'Signup', component: SignupView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
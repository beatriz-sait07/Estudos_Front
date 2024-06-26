import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import funcionarios from '../views/Funcionarios.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/funcionarios',
    name: 'funcionarios',
    component: funcionarios
  }

]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(import.meta.env.VITE_API_URL),
  routes
})

export default router

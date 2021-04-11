import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Exercise from '../views/Exercise.vue';
import CorrectSolution from '../views/CorrectSolution.vue'
import WrongSolution from '../views/WrongSolution.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/exercise',
    name: 'Exercise',
    component: Exercise
  },
  {
    path: '/correct',
    name: 'Correct',
    component: CorrectSolution
  },
  {
    path: '/wrong',
    name: 'Wrong',
    component: WrongSolution
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

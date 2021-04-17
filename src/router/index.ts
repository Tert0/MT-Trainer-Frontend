import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Log from '../views/Log.vue'
import Exercise from '../views/Exercise.vue';
import CorrectSolution from '../views/CorrectSolution.vue'
import WrongSolution from '../views/WrongSolution.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/log',
    name: 'Log',
    component: Log
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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

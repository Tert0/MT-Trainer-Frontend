import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Log from '../views/Log.vue'
import Exercise from '../views/Exercise.vue';
import CorrectSolution from '../views/CorrectSolution.vue'
import WrongSolution from '../views/WrongSolution.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import RankCard from '../views/RankCard.vue';
import { request, refreshToken } from '../api'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/log',
    name: 'Log',
    component: Log,
    meta: { requiresAuth: true }
  },
  {
    path: '/exercise',
    name: 'Exercise',
    component: Exercise,
    meta: { requiresAuth: true }
  },
  {
    path: '/correct',
    name: 'Correct',
    component: CorrectSolution,
    meta: { requiresAuth: true }
  },
  {
    path: '/wrong',
    name: 'Wrong',
    component: WrongSolution,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresAuth: false }
  },
  {
    path: '/rank',
    name: 'RankCard',
    component: RankCard,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
    if (!to.meta.requiresAuth) next()
    else {
        try {
            const auth = await request('/authenticated');
            console.log('Authenticated ... Loding')
            next();
        } catch (e){
            if(e.response.data.detail === 'Token is expired') {
                try {
                    await refreshToken();
                    console.log('Refreshed .. Loding')
                    next();
                } catch {
                    console.log('Refresh Error ... Redirect')
                    next({name: 'Login'})
                }    
            } else {
                console.log('Token Invalid .. Redirect')
                next({name: 'Login'})
            }
        }
    }
})


export default router

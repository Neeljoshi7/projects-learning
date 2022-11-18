import { createRouter, createWebHistory } from 'vue-router'
import PunchBag from '../views/PunchBag.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PunchBag',
      component: PunchBag
    },
    {
      path: '/calculator',
      name: 'calculator',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Calculator.vue')
    }
  ]
})

export default router

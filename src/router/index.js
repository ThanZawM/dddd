import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResumeMatchScore from '../views/ResumeMatchScore.vue'
import Dashboard from '../views/Dashboard.vue'
import Contact from '../views/Contact.vue'
import PricePlan from '../views/PricePlan.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/score',
      name: 'score',
      component: ResumeMatchScore
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/price',
      name: 'price',
      component: PricePlan
    },
  ]
})

export default router

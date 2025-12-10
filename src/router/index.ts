import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue' // You'll need to create this component

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
      // component: () => import('@/views/Home.vue') gave same result
    }
  ],
  scrollBehavior(to, _from, _savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

export default router
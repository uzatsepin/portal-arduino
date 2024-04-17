import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/addarticle',
      name: 'AddArticle',
      component: () => import('@/views/AddArticleView.vue')
    }
  ]
})

export default router

import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'

import type { NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

const checkAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authStore = useAuthStore()
  if (!authStore.authData) {
    next({ name: 'Home' })
  } else {
    next()
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/addarticle',
    name: 'AddArticle',
    component: () => import('@/views/AddArticleView.vue'),
    beforeEnter: checkAuth
  },
  {
    path: '/myprofile/:id',
    name: 'MyProfile',
    component: () => import('@/views/MyProfileView.vue'),
    props: true,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/components/Profile/ProfileDashboard.vue')
      },
      {
        path: 'articles',
        name: 'Articles',
        component: () => import('@/components/Profile/ProfileArticles.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('@/components/Profile/ProfileProducts.vue')
      },
      {
        path: 'sales',
        name: 'Sales',
        component: () => import('@/components/Profile/ProfileSales.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router

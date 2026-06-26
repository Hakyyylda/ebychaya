import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: 'catalog',
          name: 'catalog',
          component: () => import('@/views/CatalogView.vue'),
        },
        {
          path: 'game/:slug',
          name: 'game',
          component: () => import('@/views/GameView.vue'),
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('@/views/CartView.vue'),
        },
        {
          path: 'events',
          name: 'events',
          component: () => import('@/views/EventsView.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/AboutView.vue'),
        },
        {
          path: 'reviews',
          name: 'reviews',
          component: () => import('@/views/ReviewsView.vue'),
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('@/views/BlogView.vue'),
        },
          {
            path: 'jobs',
            name: 'jobs',
            component: () => import('@/views/JobsView.vue'),
          },
          {
            path: 'promo',
            name: 'promo',
            component: () => import('@/views/PromoView.vue'),
          },
          {
            path: 'delivery',
            name: 'delivery',
            component: () => import('@/views/DeliveryView.vue'),
          },
          {
            path: 'faq',
            name: 'faq',
            component: () => import('@/views/FaqView.vue'),
          },
      ],
    },
  ],
})

export default router

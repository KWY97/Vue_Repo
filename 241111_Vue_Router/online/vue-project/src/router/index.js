import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import UserPost from '@/components/UserPost.vue'
import UserProfile from '@/components/UserProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/user/:id',
      // name: 'user',
      component: UserView,
      children: [
        { path: '', name: 'user', component: UserProfile}, // 첫 페이지에 띄울 것
        { path: 'profile', name: 'user-profile', component: UserProfile},
        { path: 'posts', name: 'user-posts', component: UserPost}
      ]
    }
  ], 
})

export default router

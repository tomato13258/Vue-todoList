import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import firstPage from '@/views/firstPage.vue';
import todoList from '@/views/todoList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
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
      path:'/firstPage',
      name:'firstPage',
      component:firstPage,
    },
    {
      path:'/',
      name:'todoList',
      component:todoList,
    },

  ]
})

export default router

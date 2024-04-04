import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from '../views/loginView.vue'
import register from '../views/register.vue'
import admin from '../views/admin.vue'
import organisator from '../views/organisator.vue' 
import benevole from '../views/benevole.vue'
import events from '../views/events.vue'
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
      path: '/login',
      name: 'login',
      component: loginView
    },
    {
      path: '/register',
      name: 'register',
      component: register
 
    },
    {
      path: '/admin',
      name: 'admin',
      component:admin
 
    },
    {
      path: '/organisator',
      name: 'organisator',
      component: organisator
 
    },
    {
      path: '/benevole',
      name: 'benevole',
      component: benevole
 
    },
    {
      path: '/events',
      name: 'events',
      component: events
 
    }
  ]
})

export default router

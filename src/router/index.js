import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from '../views/loginView.vue'
import register from '../views/register.vue'
import admin from '../views/admin.vue'
import organisator from '../views/organisator.vue' 
import benevole from '../views/benevole.vue'
import events from '../views/events.vue'
import addevent from '../views/addevent.vue' 
import updateEvent from '../views/updateEvent.vue' 
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
 
    },
    {
      path: '/addevent',
      name : 'addevent',
      component : addevent
    },
    {
      path: '/updateEvent',
      name : 'updateEvent',
      component : updateEvent
    }
  ]
})

export default router

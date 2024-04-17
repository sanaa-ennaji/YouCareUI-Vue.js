import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import loginView from '../views/loginView.vue';
import register from '../views/register.vue';
import organisator from '../views/organisator.vue';
import benevole from '../views/benevole.vue';
import events from '../views/events.vue';
import addevent from '../views/addevent.vue';
import updateEvent from '../views/updateEvent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      path: '/organisator',
      name: 'organisator',
      component: organisator,
      meta: {
        requiresAuth: true,
        role: 'organisator' 
      }
    },
    {
      path: '/benevole',
      name: 'benevole',
      component: benevole,
      meta: {
        requiresAuth: true,
        role: 'benevole' 
      }
    },
    {
      path: '/events',
      name: 'events',
      component: events
    },
    {
      path: '/addevent',
      name: 'addevent',
      component: addevent,
      meta: {
        requiresAuth: true,
        role: 'organisator'
      }
    },
    {
      path: '/updateEvent',
      name: 'updateEvent',
      component: updateEvent
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  } else if (to.meta.role && to.meta.role !== role) {
    next({ name: role === 'benevole' ? 'benevole' : 'organisator' });
  } else {
    next();
  }
});

export default router;


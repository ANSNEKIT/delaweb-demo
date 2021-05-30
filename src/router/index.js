import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main',
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile'),
    meta: {
      layout: 'main',
    },
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('../views/Edit'),
    meta: {
      layout: 'main',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

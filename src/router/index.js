import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/read',
    component: () => import('../views/Read.vue')
  },
  {
    path: '/write',
    component: () => import('../views/Write.vue')
  },
  {
    path: '/code',
    component: () => import('../views/Code.vue')
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;

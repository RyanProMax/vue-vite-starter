import type { RouterHistory } from 'vue-router';
import { createRouter } from 'vue-router';
import Home from '@/pages/home.vue';
import Hi from '@/pages/hi.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/hi/:name', component: Hi }
];

export default function(history: RouterHistory) {
  return createRouter({
    history,
    routes
  });
}

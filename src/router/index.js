import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TutorialView from '@/views/TutorialView.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/tutorial',
    name: 'TutorialView',
    component: TutorialView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;

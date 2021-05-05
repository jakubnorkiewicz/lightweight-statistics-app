import { createRouter, createWebHistory } from 'vue-router';

import Calculate from './pages/Calculate.vue';
import Home from './pages/Home.vue';
import DataVisualisation from './pages/DataVisualisation.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: Home },
    { path: '/calculate', name: 'calculate', component: Calculate },
    { path: '/data-visualisation', name: 'data visualisation', component: DataVisualisation },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Calculate from './components/calculate/Calculate.vue';
import Input from './components/input/Input.vue';
import Result from './components/result/Result.vue';

const router = createRouter({
    history: createWebHistory() ,
    routes: [
        { path: '/input', component: Input },
        { path: '/calculate', component: Calculate },
        { path: '/result', component: Result },
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app');

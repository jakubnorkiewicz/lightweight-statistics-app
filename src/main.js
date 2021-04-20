import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';

import App from './App.vue';
import Calculate from './components/calculate/Calculate.vue';
import Input from './components/input/Input.vue';
import Result from './components/result/Result.vue';
import NotFound from './components/nav/NotFound.vue';

const store = createStore({
    state() {
        return {
            dataset: ''
        };
    }
});

const router = createRouter({
    history: createWebHistory() ,
    routes: [
        { path: '/', redirect: '/input' },
        { path: '/input', component: Input },
        { path: '/calculate', component: Calculate },
        { path: '/result', component: Result },
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

const app = createApp(App)

app.use(router, store);

app.mount('#app');

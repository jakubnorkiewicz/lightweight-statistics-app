import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';

import App from './App.vue';
import Calculate from './components/calculate/Calculate.vue';
import Input from './components/input/Input.vue';
import Result from './components/result/Result.vue';
import NotFound from './components/nav/NotFound.vue';

const store = createStore({
    state: {
        dataset: [] 
    },
    actions: {
        setDataset({state}, newDataset) {
            state.dataset = newDataset.split(',').map( n => +n);
        },
    },
    getters: {
        sum(state) {
            if (state.dataset.length > 0) {
                let sum = 0;
             state.dataset.forEach(n => { 
                 sum += n;
             });
             return sum / state.dataset.length;
            }
        },
    }
});

const router = createRouter({
    history: createWebHistory() ,
    routes: [
        { path: '/', redirect: '/input' },
        { path: '/input', name: 'input', component: Input },
        { path: '/calculate', name: 'calculate', component: Calculate },
        { path: '/result', name: 'result', component: Result },
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

const app = createApp(App)

app.use(router).use(store);

app.mount('#app');

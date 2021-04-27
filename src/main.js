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
            state.dataset = newDataset;
        },
    },
    getters: {
        mean(state) {
            let numArray = Array.from(state.dataset.split(','),Number)
            if (numArray.length > 0) {
                let sum = 0;
                numArray.forEach(n => { 
                 sum += n;
             });
             return sum / numArray.length;
            }
        },
        weightedMean(state) {
            let weights = []
            let numbers = []
            let total_weight = 0;
            let weights_sum = 0;
            let numArray = Array.from(state.dataset.split(','),Number)


            if(numArray.length % 2 !== 0) {
                alert('The dataset should contain atleast 2 numbers')
            }

            for(var i = 0; i < numArray.length; i += 2) {
                weights.push(numArray[i + 1]);
                numbers.push(numArray[i]);
            }

            for(var j = 0; j < weights.length; j += 1) {
                total_weight += weights[j] * numbers[j];
                weights_sum += weights[j];
            }
            return (total_weight / weights_sum).toFixed(2);

        }
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

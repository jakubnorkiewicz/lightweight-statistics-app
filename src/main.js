import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

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
        isDisable(state) {
            return state.dataset.length > 0;
        },

        toArray(state) {
            let numArray = Array.from(state.dataset.split(','), Number);
            return numArray;
        },

        min(state, getters) {
            let numArray = getters.toArray;
            return Math.max.apply(null, numArray);

        },

        max(state, getters) {
            let numArray = getters.toArray;
            return Math.min.apply(null, numArray);
        },

        range(state, getters) {
            let max = getters.max;
            let min = getters.min;

            return max + '-' + min;
        }, 

        sum(state, getters) {
            let numArray = getters.toArray
            let sum = 0;
                numArray.forEach(n => { 
                 sum += n;
             });
             return sum;
        },

        mean(state, getters) {
            let numArray = getters.toArray
            if (numArray.length > 0) {
             return getters.sum / numArray.length;
            }
        },

        weightedMean(state, getters) {
            let weights = []
            let numbers = []
            let total_weight = 0;
            let weights_sum = 0;
            let numArray = getters.toArray


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

        },

        median(state, getters) {
            let numArray = getters.toArray

            if(numArray.length === 0) {
                return 0;
            }
            
            //Sort array from smallest to largest number
            numArray.sort(function(a,b){
                return a-b;
            });
        
            var half = Math.floor(numArray.length / 2);
        
            if (numArray.length % 2) {
                return numArray[half];
            }
        
                return (numArray[half - 1] + numArray[half]) / 2.0;
        },

        variance(state, getters) {
            let numArray = getters.toArray;
            //Calculate sum
            let sum = getters.sum;
            //Square the sum
            let squaredSum = Math.pow(sum, 2);
            //Divide the squared sum by the number of elements in the dataset
            let dividedSquaredSum = squaredSum / numArray.length;
            

            let squaredNumbersSum = 0;
            let variance = 0;
            
            //Square each element of the dataset individually and add them together
            for(var i = 0; i < numArray.length; i++) {
                squaredNumbersSum += Math.pow(numArray[i], 2)
            }
            //Substract sum of squared numbers from the squared sum divided by the number of elements in the dataset
            let substractedSquaredNumbersSum = squaredNumbersSum - dividedSquaredSum;

            variance = substractedSquaredNumbersSum / (numArray.length - 1);

            console.log(squaredSum);
            console.log(dividedSquaredSum);
            console.log(numArray.length)
            console.log(squaredNumbersSum)
            return variance;
        },

        standardDeviation(state, getters) {
            let variance = getters.variance;
            let standardDeviation = Math.sqrt(variance);

            return standardDeviation;
        },

        mode(state, getters) {
            let numArray = getters.toArray
            let frequency = {}; // object containing frequences of each element.
            let bestOccurence = 0; // holds the max frequency.
            let mode = [];

            for (var i in numArray) {
                frequency[numArray[i]] = (frequency[numArray[i]] || 0) + 1; // increment frequency.

                if (frequency[numArray[i]] > bestOccurence) { // is this frequency > max so far ?
                    bestOccurence = frequency[numArray[i]]; // update max.
                }
            }

            for (var k in frequency) {
                if (frequency[k] == bestOccurence) {
                mode.push(k);
                }
            }

            return mode;
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

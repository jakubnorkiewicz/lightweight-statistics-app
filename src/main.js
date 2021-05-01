import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import App from './App.vue';
import Calculate from './components/calculate/Calculate.vue';
import Input from './components/input/Input.vue';
import Result from './components/result/Result.vue';
import NotFound from './components/nav/NotFound.vue';

const store = createStore({
  state: {
    dataset: [],
    formula: []
  },

  mutations: {
    setDataset(state, newDataset) {
      state.dataset = newDataset;
    },
    setFormula(state, selectedFormula) {
      state.formula = selectedFormula;
    }
  },
  actions: {
    setDataset(context, newDataset) {
      context.commit('setDataset', newDataset);
    },
    setFormula(context, selectedFormula) {
      context.commit('setFormula', selectedFormula);
    }
  },
  getters: {
    isPopulated(state) {
      if (state.dataset.length > 2) {
        return true;
      } else {
        return false;
      }
    },

    toArray(state) {
      let numArray = Array.from(state.dataset.split(','), Number);

      return numArray;
    },

    min(state, getters) {
      let numArray = getters.toArray;
      let min = Math.max.apply(null, numArray);

      return min;
    },

    max(state, getters) {
      let numArray = getters.toArray;
      let max = Math.min.apply(null, numArray);

      return max;
    },

    range(state, getters) {
      let max = getters.max;
      let min = getters.min;

      return max + '-' + min;
    },

    sum(state, getters) {
      let numArray = getters.toArray;
      let sum = 0;

      numArray.forEach(n => {
        sum += n;
      });

      return sum;
    },

    mean(state, getters) {
      let numArray = getters.toArray;
      let mean = 0;

      mean = getters.sum / numArray.length;

      return mean;
    },

    weightedMean(state, getters) {
      let numArray = getters.toArray;
      let weights = [];
      let numbers = [];
      let totalWeight = 0;
      let weightsSum = 0;
      let weightedMean = 0;

      for (var i = 0; i < numArray.length; i += 2) {
        weights.push(numArray[i + 1]);
        numbers.push(numArray[i]);
      }

      for (var j = 0; j < weights.length; j += 1) {
        totalWeight += weights[j] * numbers[j];
        weightsSum += weights[j];
      }

      weightedMean = (totalWeight / weightsSum).toFixed(2);

      return weightedMean;
    },

    median(state, getters) {
      let numArray = getters.toArray;
      let median = 0;

      if (numArray.length === 0) {
        return 0;
      }

      //Sort array from smallest to largest number
      numArray.sort(function(a, b) {
        return a - b;
      });

      let half = Math.floor(numArray.length / 2);

      if (numArray.length % 2) {
        return numArray[half];
      }

      median = (numArray[half - 1] + numArray[half]) / 2.0;

      return median;
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
      for (var i = 0; i < numArray.length; i++) {
        squaredNumbersSum += Math.pow(numArray[i], 2);
      }
      //Substract sum of squared numbers from the squared sum divided by the number of elements in the dataset
      let substractedSquaredNumbersSum = squaredNumbersSum - dividedSquaredSum;

      variance = substractedSquaredNumbersSum / (numArray.length - 1);

      return variance;
    },

    standardDeviation(state, getters) {
      let variance = getters.variance;
      let standardDeviation = Math.sqrt(variance);
      
      return standardDeviation;
    },

    mode(state, getters) {
      let numArray = getters.toArray;
      let occurence = {}; // object containing frequences of each element.
      let bestOccurence = 0; // holds the best occurence.
      let mode = [];

      for (var i in numArray) {
        occurence[numArray[i]] = (occurence[numArray[i]] || 0) + 1; // increment occurence.

        if (occurence[numArray[i]] > bestOccurence) {
          // is this occurence > best so far ?
          bestOccurence = occurence[numArray[i]]; // update best.
        }
      }

      for (var k in occurence) {
        if (occurence[k] == bestOccurence) {
          mode.push(k);
        }
      }

      if(bestOccurence == 1) {
          return 'Cannot find mode. Numbers do not repeat.'
      } else {
          return mode;
      }
    },

    zScore(state, getters) {
      let numArray = getters.toArray;
      let mean = getters.mean;
      let standardDeviation = getters.standardDeviation;
      let zScore = 0;

      zScore = (numArray[1] - mean) / standardDeviation;

      return zScore;
    },

    meanAbsoluteDeviation(state, getters) {
      let numArray = getters.toArray;
      let mean = getters.mean;
      let meanAbsoluteDeviation = 0;

      for (var i = 0; i < numArray.length; i++) {
        meanAbsoluteDeviation += Math.abs(numArray[i] - mean);
      }

      return meanAbsoluteDeviation;
    }
  }
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/input' },
    { path: '/input', name: 'input', component: Input },
    { path: '/calculate', name: 'calculate', component: Calculate },
    { path: '/result', name: 'result', component: Result },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

const app = createApp(App);

app.use(router).use(store);

app.mount('#app');

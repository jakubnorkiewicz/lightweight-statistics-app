import { createStore } from 'vuex';

import mutations from './mutations.js';
import getters from './getters.js';

const store = createStore({
  state: {
    dataset: [],
    formula: [],
    calculations: [
      { name: 'Min', type: 'min' },
      { name: 'Max', type: 'max' },
      { name: 'Range', type: 'range' },
      { name: 'Sum', type: 'sum' },
      { name: 'Mean', type: 'mean' },
      { name: 'Weighted Mean', type: 'weightedMean' },
      { name: 'Median', type: 'median' },
      { name: 'Standard Deviation', type: 'standardDeviation' },
      { name: 'Variance', type: 'variance' },
      { name: 'Mode', type: 'mode' },
      { name: 'z-Score', type: 'zScore' },
      { name: 'Mean Absolute Deviation', type: 'meanAbsoluteDeviation' }
    ]
  },
  mutations,
  getters
});

export default store;

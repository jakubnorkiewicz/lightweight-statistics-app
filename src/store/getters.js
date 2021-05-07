export default {
  isPopulated(state) {
    if (state.dataset.length > 2) {
      return true;
    } else {
      return false;
    }
  },

  toArray(state) {
    const numArray = Array.from(state.dataset.split(','), Number);
    return numArray;
  },

  min(_, getters) {
    const numArray = getters.toArray;
    let min = Math.min.apply(null, numArray);

    return min;
  },

  max(_, getters) {
    const numArray = getters.toArray;
    let max = Math.max.apply(null, numArray);

    return max;
  },

  range(_, getters) {
    const max = getters.max;
    const min = getters.min;

    return 'The dataset range is from ' + min + ' to ' + max;
  },

  sum(_, getters) {
    const numArray = getters.toArray;
    let sum = 0;

    numArray.forEach(n => {
      sum += n;
    });

    return sum;
  },

  mean(_, getters) {
    const numArray = getters.toArray;
    let mean = 0;

    mean = getters.sum / numArray.length;
    return mean;
  },

  weightedMean(_, getters) {
    const numArray = getters.toArray;
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

    weightedMean = (totalWeight / weightsSum)

    if(isNaN(weightedMean)) {
      return "Please follow the syntax for Weighted Mean."
    } else if(weightedMean % 1 === 1) {
      return weightedMean; 
    } else {
      return weightedMean;
    }
  },

  median(_, getters) {
    const numArray = getters.toArray;
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

  variance(_, getters) {
    const numArray = getters.toArray;
    //Calculate sum
    const sum = getters.sum;
    //Square the sum
    const squaredSum = Math.pow(sum, 2);
    //Divide the squared sum by the number of elements in the dataset
    const dividedSquaredSum = squaredSum / numArray.length;

    let squaredNumbersSum = 0;
    let variance = 0;

    //Square each element of the dataset individually and add them together
    for (var i = 0; i < numArray.length; i++) {
      squaredNumbersSum += Math.pow(numArray[i], 2);
    }
    //Substract sum of squared numbers from the squared sum divided by the number of elements in the dataset
    const substractedSquaredNumbersSum = squaredNumbersSum - dividedSquaredSum;

    variance = substractedSquaredNumbersSum / (numArray.length - 1);

    return +variance.toFixed(6);
  },

  standardDeviation(_, getters) {
    const variance = getters.variance;
    let standardDeviation = Math.sqrt(variance);

    return +standardDeviation.toFixed(6);
  },

  mode(_, getters) {
    const numArray = getters.toArray;
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

    if (bestOccurence == 1) {
      return 'Cannot find mode. Numbers in the dataset do not repeat.';
    } else {
      return mode;
    }
  },

  zScore(_, getters) {
    const numArray = getters.toArray;
    const mean = getters.mean;
    const standardDeviation = getters.standardDeviation;
    let zScore = 0;

    zScore = (numArray[1] - mean) / standardDeviation;

    return +zScore.toFixed(6);
  },

  meanAbsoluteDeviation(_, getters) {
    const numArray = getters.toArray;
    const mean = getters.mean;
    let meanAbsoluteDeviation = 0;

    for (var i = 0; i < numArray.length; i++) {
      meanAbsoluteDeviation += Math.abs(numArray[i] - mean);
    }

    return +meanAbsoluteDeviation.toFixed(6);
  }
};

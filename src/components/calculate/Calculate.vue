<template>
<h2>Your numbers:</h2>
<h3>{{ dataset }}</h3>
<input type="radio" id="mean" name="mean" value="mean" v-model="formula">
<label for="mean">Mean</label><br>
<input type="radio" id="weightedMean" name="weightedmean" value="weightedmean" v-model="formula">
<label for="weightedmean">Weighted Mean</label><br>
<input type="radio" id="median" name="median" value="median" v-model="formula">
<label for="median">Median</label><br>
<input type="radio" id="standardDeviation" name="standarddeviation" value="standarddeviation" v-model="formula">
<label for="standarddeviation">Standard Deviation</label><br>
<input type="radio" id="variance" name="variance" value="variance" v-model="formula">
<label for="variance">Variance</label><br>
<input type="radio" id="mode" name="mode" value="mode" v-model="formula">
<label for="mode">Mode</label><br>
<div v-if="formula === 'mean'">{{ mean() }}</div>
<div v-else-if="formula === 'weightedmean'">{{ weightedMean() }}</div>
<div v-else-if="formula === 'median'"></div>
<div v-else-if="formula === 'standarddeviation'"></div>
<div v-else-if="formula === 'variance'"></div>
<div v-else-if="formula === 'mode'"></div>


</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    formula: ''
    }
  },
  computed: {
    dataset() {
      return this.$store.state.dataset;
    }
  },
  methods: {
    ...mapGetters([
      'mean',
      'weightedMean'
    ])
  }
}
</script>


<style scoped>

</style>
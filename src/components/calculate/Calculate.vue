<template>
<h2>Your numbers:</h2>
<h3>{{ dataset }} </h3>
<p>  {{ range() }}</p>
<div class="form-check">
<input class="form-check-input" type="radio" id="mean" name="mean" value="mean" v-model="formula">
<label class="form-check-label" for="mean">Mean</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" id="weightedMean" name="weightedmean" value="weightedmean" v-model="formula">
<label class="form-check-label" for="weightedmean">Weighted Mean</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" id="median" name="median" value="median" v-model="formula">
<label class="form-check-label" for="median">Median</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" id="standardDeviation" name="standarddeviation" value="standarddeviation" v-model="formula">
<label class="form-check-label" for="standarddeviation">Standard Deviation</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" id="variance" name="variance" value="variance" v-model="formula">
<label class="form-check-label" for="variance">Variance</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" id="mode" name="mode" value="mode" v-model="formula">
<label class="form-check-label" for="mode">Mode</label>
</div>

<div v-if="formula === 'mean'">{{ mean() }}</div>
<div v-else-if="formula === 'weightedmean'">{{ weightedMean() }}</div>
<div v-else-if="formula === 'median'">{{ median() }}</div>
<div v-else-if="formula === 'standarddeviation'">{{ standardDeviation() }}</div>
<div v-else-if="formula === 'variance'">{{ variance() }}</div>
<div v-else-if="formula === 'mode'">{{ mode() }}</div>
<div v-else-if="formula === 'sum'">{{ sum() }}</div>



</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    dataset: {
      get() {
      return this.$store.state.dataset;
      }
    },
    formula: {
      get() {
        return this.$store.state.formula;
      },
      set(selectedFormula) {
        this.setFormula(selectedFormula);
      }
    }
  },
  methods: {
    ...mapGetters([
      'mean',
      'weightedMean',
      'median',
      'sum',
      'variance',
      'standardDeviation',
      'mode',
      'max',
      'min',
      'range'
    ]),
    ...mapActions([
      'setFormula'
    ])
  }
}
</script>


<style scoped>

</style>
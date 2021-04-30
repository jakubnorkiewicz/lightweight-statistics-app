<template>
  <h2>Your numbers:</h2>
  <div v-if="!isPopulated()">
    <div class="alert alert-danger" role="alert">
      Please go back to Input page and populate the field with numbers.
    </div>
  </div>
  <div v-else>
    <h3>{{ dataset }}</h3>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        id="mean"
        name="mean"
        value="mean"
        v-model="formula"
      />
      <label class="form-check-label" for="mean">Mean</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        id="weightedMean"
        name="weightedmean"
        value="weightedmean"
        v-model="formula"
      />
      <label class="form-check-label" for="weightedmean">Weighted Mean</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        id="median"
        name="median"
        value="median"
        v-model="formula"
      />
      <label class="form-check-label" for="median">Median</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        id="standardDeviation"
        name="standarddeviation"
        value="standarddeviation"
        v-model="formula"
      />
      <label class="form-check-label" for="standarddeviation"
        >Standard Deviation</label
      >
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        id="variance"
        name="variance"
        value="variance"
        v-model="formula"
      />
      <label class="form-check-label" for="variance">Variance</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        id="min"
        name="min"
        value="min"
        v-model="formula"
      />
      <label class="form-check-label" for="min">Min</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        id="max"
        name="max"
        value="max"
        v-model="formula"
      />
      <label class="form-check-label" for="max">Max</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        id="zScore"
        name="zscore"
        value="zscore"
        v-model="formula"
      />
      <label class="form-check-label" for="zscore">z Score</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        id="meanAbsoluteDeviation"
        name="meanabsolutedeviation"
        value="meanabsolutedeviation"
        v-model="formula"
      />
      <label class="form-check-label" for="meanabsolutedeviation"
        >Mean Absolute Deviation</label
      >
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        id="sum"
        name="sum"
        value="sum"
        v-model="formula"
      />
      <label class="form-check-label" for="sum">Sum</label>
    </div>

    <div v-if="formula === 'mean'">
      {{ mean() }}
    </div>
    <div v-else-if="formula === 'weightedmean'">
      {{ weightedMean() }}
    </div>
    <div v-else-if="formula === 'median'">
      {{ median() }}
    </div>
    <div v-else-if="formula === 'standarddeviation'">
      {{ standardDeviation() }}
    </div>
    <div v-else-if="formula === 'variance'">
      {{ variance() }}
    </div>
    <div v-else-if="formula === 'mode'">
      {{ mode() }}
    </div>
    <div v-else-if="formula === 'min'">
      {{ min() }}
    </div>
    <div v-else-if="formula === 'max'">{
      { max() }}
    </div>
    <div v-else-if="formula === 'range'">
      {{ range() }}
      </div>
    <div v-else-if="formula === 'zscore'">
      {{ zScore() }}
    </div>
    <div v-else-if="formula === 'meanabsolutedeviation'">
      {{ meanAbsoluteDeviation() }}
    </div>
    <div v-else-if="formula === 'sum'">
      {{ sum() }}
    </div>
  </div>
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
      'isPopulated',
      'mean',
      'weightedMean',
      'median',
      'sum',
      'variance',
      'standardDeviation',
      'mode',
      'max',
      'min',
      'range',
      'zScore',
      'meanAbsoluteDeviation'
    ]),
    ...mapActions(['setFormula'])
  }
};
</script>

<style scoped></style>

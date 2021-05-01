<template>
  <div v-if="!isPopulated()">
    <div class="alert alert-danger" role="alert">
      Please go back to Input page and populate the field with numbers.
    </div>
  </div>
  <div v-else>
     <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
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
        type="checkbox"
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
        type="checkbox"
        id="range"
        name="range"
        value="range"
        v-model="formula"
      />
      <label class="form-check-label" for="range">Range</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="sum"
        name="sum"
        value="sum"
        v-model="formula"
      />
      <label class="form-check-label" for="sum">Sum</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
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
        type="checkbox"
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
        type="checkbox"
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
        type="checkbox"
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
        type="checkbox"
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
        type="checkbox"
        id="mode"
        name="mode"
        value="mode"
        v-model="formula"
      />
      <label class="form-check-label" for="variance">Mode</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="zScore"
        name="zscore"
        value="zscore"
        v-model="formula"
      />
      <label class="form-check-label" for="zscore">z-Score</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="meanAbsoluteDeviation"
        name="meanabsolutedeviation"
        value="meanabsolutedeviation"
        v-model="formula"
      />
      <label class="form-check-label" for="meanabsolutedeviation"
        >Mean Absolute Deviation</label
      >
    </div>
    <h2>Your numbers:</h2>
    <div class="card">
      <div class="card-body">
        {{ dataset }}
      </div>
    </div>
     <div v-show="formula.includes('min')">
      The minimum number equals:
      {{ min() }}
    </div>
    <div v-show="formula.includes('max')">
      The maximum number equals:
      {{ max() }}
    </div>
    <div v-show="formula.includes('range')">
      The range is:
      {{ range() }}
    </div>
    <div v-show="formula.includes('sum')">
      The sum equals:
      {{ sum() }}
    </div>
    <div v-show="formula.includes('mean')">
      The mean equals:
      {{ mean() }}
    </div>
    <div v-show="formula.includes('weightedmean')">
      The weighted mean equals:
      {{ weightedMean() }}
    </div>
    <div v-show="formula.includes('median')">
      The median equals:
      {{ median() }}
    </div>
    <div v-show="formula.includes('standarddeviation')">
      The standard deviation equals:
      {{ standardDeviation() }}
    </div>
    <div v-show="formula.includes('variance')">
      The variance equals:
      {{ variance() }}
    </div>
    <div v-show="formula.includes('mode')">
      The mode equals:
      {{ mode() }}
    </div>
    <div v-show="formula.includes('zscore')">
      The z-Score equals:
      {{ zScore() }}
    </div>
    <div v-show="formula.includes('meanabsolutedeviation')">
      The mean absolute deviation equals:
      {{ meanAbsoluteDeviation() }}
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

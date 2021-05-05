<template>
  <div v-if="!isPopulated()">
    <div class="alert alert-danger" role="alert">
      Please go back to Input page and populate the field with numbers.
    </div>
  </div>
  <div v-else>
    <div class="row">
    <div class="col-sm-3" v-for="i in Math.ceil(calculations.length / 4)" :key="i.id">
    <div v-for="calculation in calculations.slice((i - 1) * 4, i * 4)" :key="calculation.id">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        :id="calculation.type"
        :name="calculation.type"
        :value="calculation.type"
        v-model="formula"
      />
      <label class="form-check-label" :for="calculation.type">{{ calculation.name }}</label>
    </div>
    </div>
    </div>
    </div>

    <h2>Your numbers:</h2>
    <div class="card">
      <div class="card-body">
        {{ dataset }}
      </div>
    </div>

     <div v-if="formula.includes('min')">
      The minimum number equals:
      {{ min() }}
    </div>
    <div v-if="formula.includes('max')">
      The maximum number equals:
      {{ max() }}
    </div>
    <div v-if="formula.includes('range')">
      The range is:
      {{ range() }}
    </div>
    <div v-if="formula.includes('sum')">
      The sum equals:
      {{ sum() }}
    </div>
    <div v-if="formula.includes('mean')">
      The mean equals:
      {{ mean() }}
    </div>
    <div v-if="formula.includes('weightedmean')">
      The weighted mean equals:
      {{ weightedMean() }}
    </div>
    <div v-if="formula.includes('median')">
      The median equals:
      {{ median() }}
    </div>
    <div v-if="formula.includes('standarddeviation')">
      The standard deviation equals:
      {{ standardDeviation() }}
    </div>
    <div v-if="formula.includes('variance')">
      The variance equals:
      {{ variance() }}
    </div>
    <div v-if="formula.includes('mode')">
      The mode equals:
      {{ mode() }}
    </div>
    <div v-if="formula.includes('zscore')">
      The z-Score equals:
      {{ zScore() }}
    </div>
    <div v-if="formula.includes('meanabsolutedeviation')">
      The mean absolute deviation equals:
      {{ meanAbsoluteDeviation() }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
      return {
      calculations: [
        { id: 1, name: 'Min', type: 'min'},
        { id: 2, name: 'Max', type: 'max'},
        { id: 3, name: 'Range', type: 'range'},
        { id: 4, name: 'Sum', type: 'sum'},
        { id: 5, name: 'Mean', type: 'mean'},
        { id: 6, name: 'Weighted Mean', type: 'weightedmean'},
        { id: 7, name: 'Median', type: 'median'},
        { id: 8, name: 'Standard Deviation', type: 'standarddeviation'},
        { id: 9, name: 'Variance', type: 'variance'},
        { id: 10, name: 'Mode', type: 'mode'},
        { id: 11, name: 'z-Score', type: 'zscore'},
        { id: 12, name: 'Mean Absolute Deviation', type: 'meanabsolutedeviation'},
      ]
      }
    },
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

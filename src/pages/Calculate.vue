<template>
  <div v-if="!isPopulated()">
    <div class="alert alert-danger" role="alert">
      Please go back to Input page and populate the field with numbers.
    </div>
  </div>
  <div v-else>
    <div class="formulas card p-3">
      <div class="row">
        <div
          class="col-sm-3"
          v-for="i in Math.ceil(calculations.length / 4)"
          :key="i.id"
        >
          <div
            v-for="calculation in calculations.slice((i - 1) * 4, i * 4)"
            :key="calculation.id"
          >
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :id="calculation.type"
                :name="calculation.type"
                :value="calculation.type"
                v-model="formula"
              />
              <label class="form-check-label" :for="calculation.type">{{
                calculation.name
              }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="result mt-3 ">
      <div class="row">
        <div class="col-md-12">
          <h2>Your numbers:</h2>
          <div class="card">
            <div class="card-body">
              {{ dataset }}
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <div class="card text-white bg-primary">
            <div class="card-body">
              <h5 class="card-title">Results:</h5>
              <div class="card-text">
                <div v-for="calculation in calculations" :key="calculation.id">
                  <div class="pb-2" v-if="formula.includes(calculation.type)">
                    
                    {{ calculation.name+ ': ' + this.$store.getters[calculation.type] }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
      set(value) {
        this.$store.commit('setFormula', value);
      }
    },
    calculations: {
      get() {
        return this.$store.state.calculations;
      }
    }
  },
  methods: {
    ...mapGetters([
      'isPopulated',
    ])
  }
};
</script>

<style scoped></style>

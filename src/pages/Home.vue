<template>
  <div class="homepage">
    <tutorial></tutorial>
    <div class="row mb-3">
      <div class="col-sm-6">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Weighted Mean</h5>
            <p class="card-text">
              Please fill the field with following structure:<br />
              <mark><i>"n1, x1, n2, x2, n3, x3,...n, x"</i></mark
              >, where<br />
              n1 = the number<br />
              x1 = weight of the number
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 mt-3 mt-sm-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">z-Score</h5>
            <p class="card-text">
              Please fill the field with following structure:<br />
              <mark><i>"n1, x1, x2, x3,...x"</i></mark
              >, where<br />
              n1 = the number that the z-Score is calculated from<br />
              x = the numbers used to calculate the mean that will be
              substracted from the n1
            </p>
          </div>
        </div>
      </div>
    </div>
    <span class="input-group-text mb-3"><b>Enter the numbers</b> </span>
    <textarea
      class="form-control"
      aria-label="Enter the numbers"
      name="dataset"
      id="dataset"
      cols="30"
      rows="10"
      @input="validateInput()"
      v-model="dataset"
      placeholder="e.g. 1, 2, 3, 4"
    >
    </textarea>
    <div class="alert alert-warning mt-3" role="alert" v-if="!isPopulated()">
      The dataset should contain at least 2 numbers.
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Tutorial from '../components/blocks/Tutorial';

export default {
  methods: {
    validateInput() {
      this.$store.state.dataset = this.$store.state.dataset.replace(/[^-?0-9., ]/g,'');
    },
    ...mapGetters(['isPopulated'])
  },
  computed: {
    dataset: {
      get() {
        return this.$store.state.dataset;
      },
      set(value) {
        this.$store.commit('setDataset', value);
      }
    }
  },
  components: {
    Tutorial
  }
};
</script>

<style scoped>
.card .card-text mark {
  background-color: #ffe459;
}
</style>

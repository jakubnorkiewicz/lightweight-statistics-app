<template>
  <span class="input-group-text mb-3">Enter the numbers</span>
  <textarea class="form-control" aria-label="Enter the numbers" name="dataset" id="dataset" cols="30" rows="10" v-model="dataset" placeholder="e.g. 1, 2, 3, 4"></textarea>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions (['setDataset']),
  },
  computed: {
    dataset: {
      get() {
        return this.$store.state.dataset;
      },
      set(newDataset) {
        this.setDataset(newDataset);
      }
    }
  },
};
</script>

<style scoped>

</style>
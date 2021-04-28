<template>
<form action="">
  <span class="input-group-text">Enter the numbers</span>
  <textarea class="form-control" aria-label="Enter the numbers" name="dataset" id="dataset" cols="30" rows="10" v-model="dataset" placeholder="e.g. 1, 2, 3, 4"></textarea>
</form>

  
</template>

<script>
export default {
  computed: {
    dataset: {
      get() {
        return this.$store.state.dataset
      },
      set(newDataset) {
        this.$store.dispatch('setDataset', newDataset)
      }
    }
  },
};
</script>

<style scoped>

</style>
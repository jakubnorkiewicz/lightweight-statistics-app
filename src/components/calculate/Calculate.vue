<template>
  <button @click="goBack">Back</button>
  <button @click="confirmInput">Submit</button>
</template>

<script>
export default {
  methods: {
  confirmInput() {
      this.$router.push('/result');
    },
    goBack() {
      this.$router.back();
    }
    }
};
</script>

<style scoped>

</style>
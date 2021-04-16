<template>
  <button @click="confirmInput">Go back</button>
</template>

<script>

export default {
  methods: {
    confirmInput() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>

</style>
<template>
  <button @click="confirmInput">Next</button>
</template>

<script>

export default {
  methods: {
    confirmInput() {
      this.$router.push('/calculate');
    }
  }
};
</script>

<style scoped>

</style>
<template>
<h3>{{ dataset }}</h3>
<input type="radio" id="mean" name="mean" value="mean">
<label for="mean">Mean</label><br>
<p>{{ sum() }}</p>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label><br>
<input type="radio" id="other" name="gender" value="other">
<label for="other">Other</label>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    dataset() {
      return this.$store.state.dataset;
    }
  },
  methods: {
    ...mapGetters([
      'sum'
    ])
  }
}
</script>


<style scoped>

</style>
<template>
  <navigation></navigation>
  <main>
    <router-view></router-view>
  </main>
  <buttons></buttons>
</template>

<script>

import Buttons from './components/nav/Buttons.vue';
import Navigation from './components/nav/Navigation.vue';

export default {
  components: {
    Navigation,
    Buttons,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
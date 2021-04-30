<template>
<div class="container">
  <navigation></navigation>
  <div class="page-name">
    <h1>{{ $route.name }}</h1>
  </div>
  <main class="box mt-5 mb-3">
    <router-view></router-view>
  </main>
  <buttons></buttons>
</div>
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

<style lang="scss" >
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  .page-name {
    h1 {
      
    }
  }
}
</style>
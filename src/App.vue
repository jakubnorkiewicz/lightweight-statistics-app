<template>
  <div class="container">
    <navigation></navigation>
    <div class="page-name">
      <h1>{{ $route.name }}</h1>
    </div>
    <main class="box mt-5 mb-3">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <buttons></buttons>
  </div>
</template>

<script>
import Buttons from './components/Buttons.vue';
import Navigation from './components/Navigation.vue';

export default {
  components: {
    Navigation,
    Buttons
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

.page-name h1 {
  text-transform: capitalize;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

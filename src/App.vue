<template>
  <div class="container vh-100">
    <navigation></navigation>
      <main>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <buttons></buttons>
    <the-footer></the-footer>
  </div>
</template>

<script>
import Buttons from './components/layout/Buttons.vue';
import Navigation from './components/layout/Navigation.vue';
import TheFooter from './components/layout/Footer.vue';

export default {
  components: {
    Navigation,
    Buttons,
    TheFooter
  }
};
</script>

<style>
html,
body {
  font-family: sans-serif;
  height: 100%;
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

@media only screen and (min-width: 992px) {
  main {
    min-height: 559px;
  }
}

</style>

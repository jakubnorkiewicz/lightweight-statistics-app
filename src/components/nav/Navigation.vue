<template>
  <header class="mb-5">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Lightweight Statistics App</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/input">Input</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/calculate">Calculate</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/result">Result</router-link>
        </li>
      </ul>
          </div>
    </nav>
  </header>
</template>

<style scoped>
  header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 100%;
  }
</style>
<template>
  <header class="mb-3">
    <nav class="navbar navbar-expand-lg p-4">
      <a class="navbar-brand" href="/">Lightweight Statistics App</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link pe-3 ps-3" to="/home"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link pe-3 ps-3" to="/calculate"
              >Calculate</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link pe-3 ps-3" to="/data-visualisation"
              >Data Visualisation</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 0 0 10px 10px;
}

header a {
  color: #000;
}

header nav .navbar-brand {
  font-size: 2rem;
}

a:active,
a:hover,
a.router-link-active {
  background-color: #000;
  border-color: #000;
  color: #fff;
}
</style>

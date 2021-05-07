<template>
  <footer>
    <div class="row p-4">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-12">
            <a href="https://www.linkedin.com/in/jakub-norkiewicz-9105b9161"
              ><font-awesome-icon :icon="iconLinkedin" /> Github</a
            >
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-md-12">
            <a href="https://github.com/jakubnorkiewicz"
              ><font-awesome-icon :icon="iconGit" /> Linked In</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default {
  data() {
    return {
      iconGit: faGithub,
      iconLinkedin: faLinkedin
    };
  },
  components: {
    FontAwesomeIcon
  }
};
</script>

<style>
.svg-inline--fa {
  color: #000;
}

footer {
  font-size: 1.25rem;
  box-shadow: 0px 0 8px 2px rgba(0, 0, 0, 0.26);
  border-radius: 10px 10px 0 0;
}

footer a,
a:hover,
a:active {
  color: #000;
  text-decoration: none;
}
</style>
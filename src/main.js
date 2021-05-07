import { createApp } from 'vue';

import VueApexCharts from 'vue3-apexcharts';
import store from './store/index.js';
import router from './router.js';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueApexCharts);

app.mount('#app');

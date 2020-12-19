import { createApp } from 'vue';

import App from './App.vue';

import router from './application/routes/router';
import store from './application/store/store';

import './assets/styles/tailwind.css';

createApp(App).use(router).use(store).mount('#app');

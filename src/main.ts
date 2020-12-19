import { createApp } from 'vue';

import App from './App.vue';

import router from './application/routes/router';

import './assets/styles/tailwind.css';

createApp(App).use(router).mount('#app');

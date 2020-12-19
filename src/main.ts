import { createApp } from 'vue';
import firebase from 'firebase';

import App from './App.vue';

import router from './application/routes/router';
import store from './application/store/store';
import firebaseConfig from './application/database/config/firebase';

import './assets/styles/tailwind.css';

let app: any = null;
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);
        app.use(router).use(store).mount('#app');
    }
});

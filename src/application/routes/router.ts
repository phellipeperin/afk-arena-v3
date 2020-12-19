import { createWebHistory, createRouter } from 'vue-router';
import firebase from 'firebase';

import store from '../store';

import AuthPage from '../../pages/AuthPage.vue';

const routes = [
    { path: '/', name: 'auth', component: AuthPage },
    { path: '*', redirect: '/' },

    { path: '/hero-list', name: 'heroList', meta: { requiresAuth: true } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const { currentUser } = firebase.auth();
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) {
        next('auth');
        store.commit('user/user', null);
    } else if (!requiresAuth && currentUser) {
        next('hero');
        store.commit('user/user', currentUser);
    } else {
        next();
        store.commit('user/user', currentUser);
    }
});

export default router;

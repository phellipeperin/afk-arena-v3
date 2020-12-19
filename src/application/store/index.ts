import Vuex from 'vuex';

import appStore from './appStore';
import userStore from './userStore';

export default new Vuex.Store({
    modules: {
        app: appStore,
        user: userStore,
    },
});

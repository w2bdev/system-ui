import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import app from '@/store/modules/app';
import auth from '@/store/modules/auth';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    app,
    auth,
  },
  plugins: [
    createPersistedState({
      paths: ['app', 'auth'],
      storage: window.localStorage,
    }),
  ],
  strict: debug,
});

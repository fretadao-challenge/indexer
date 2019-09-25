import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import search from './search.js';

Vue.use(Vuex);

export default function () {
  const vuexLocalStorage = new VuexPersist({
    key: 'vuex',
    storage: localStorage,
    modules: ['search'],
  });

  const Store = new Vuex.Store({
    plugins: [vuexLocalStorage.plugin],
    modules: {
      search,
    },
  });

  return Store;
}

import Vue from 'vue';
import Vuex from 'vuex';

import CountriesService from '../services/CountriesService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
  },
  mutations: {
    SET_COUNTRIES(state, countries) {
      state.countries = countries;
    },
  },
  actions: {
    fetchCountries({ commit }) {
      CountriesService.showAll()
        .then((response) => {
          commit('SET_COUNTRIES', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {
  },
});

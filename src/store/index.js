import Vue from 'vue';
import Vuex from 'vuex';

import CountriesService from '../services/CountriesService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
    country: {},
  },
  mutations: {
    SET_COUNTRIES(state, countries) {
      state.countries = countries;
    },

    SET_COUNTRY(state, country) {
      state.country = country;
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

    fetchCountry({ commit }, name) {
      CountriesService.showCountry(name)
        .then((response) => {
          const [country] = response.data;
          commit('SET_COUNTRY', country);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {
  },

  getters: {
    getCountry: (state) => (name) => state.countries.find((country) => country.name === name),
  },
});

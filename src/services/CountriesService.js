import axios from 'axios';

const clientApi = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  showAll() {
    return clientApi.get('/all');
  },

  showCountry(name) {
    return clientApi.get(`/name/${name}`);
  },
};

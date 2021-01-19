import Vue from 'vue';
import VueRouter from 'vue-router';
import Countries from '@/views/Countries.vue';
import ShowCountry from '@/views/ShowCountry.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'countries-list',
    component: Countries,
  },

  {
    path: '/county/:name',
    name: 'show-country',
    component: ShowCountry,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

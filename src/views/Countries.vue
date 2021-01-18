<template>
  <div>
    <h1>Countries</h1>
    <CountryCard v-for="country in countries" :key="country.id" :country="country" />
  </div>
</template>

<script>
import CountryCard from '@/components/CountryCard.vue';
import { mapState } from 'vuex';

export default {
  components: {
    CountryCard,
  },

  computed: {
    ...mapState(['countries']),
  },

  created() {
    this.$store.dispatch('fetchCountries');
  },
};
</script>

<style lang="scss" scoped>

</style>

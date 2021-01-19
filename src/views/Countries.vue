<template>
  <div class="countries">
    <CountryCard
      v-for="country in countries"
      :key="country.id"
      :country="country"
    />
  </div>
</template>

<script>
import CountryCard from '@/components/CountryCard.vue';
import { mapState } from 'vuex';

export default {
  components: {
    CountryCard,
  },

  created() {
    this.$store.dispatch('fetchCountries');
  },

  computed: mapState(['countries']),
};
</script>

<style lang="scss">
.countries {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
}
</style>

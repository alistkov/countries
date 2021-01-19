<template>
  <div class="country">
    <div class="country__name">
      {{ country[0].name }}
    </div>

    <div class="country__row">
      <div class="country__row-name">Native name:</div>
      <div class="country__row-value">{{ country[0].nativeName }}</div>
    </div>

    <div class="country__row">
      <div class="country__row-name">Alt spelling(s):</div>
      <div class="country__row-value">
        <span v-for="(altSpelling, index) in country[0].altSpellings" :key="index">
          {{ altSpelling }}<i v-if="index + 1 < country[0].altSpellings.length">, </i>
        </span>
      </div>
    </div>

    <div class="country__row">
      <div class="country__row-name">alpha2Code:</div>
      <div class="country__row-value">{{ country[0].alpha2Code }}</div>
    </div>

    <div class="country__row">
      <div class="country__row-name">alpha3Code:</div>
      <div class="country__row-value">{{ country[0].alpha3Code }}</div>
    </div>

    <div class="country__row">
      <div class="country__row-name">Capital:</div>
      <div class="country__row-value">{{ country[0].capital }}</div>
    </div>

    <div class="country__row">
      <div class="country__row-name">Population:</div>
      <div class="country__row-value">{{ country[0].population }}</div>
    </div>

    <div class="country__row">
      <div class="country__row-name">Region:</div>
      <div class="country__row-value">{{ country[0].region }}</div>
    </div>

    <div class="country__row">
      <div class="country__row-name">Subegion:</div>
      <div class="country__row-value">{{ country[0].subregion }}</div>
    </div>

    <div class="country__row">
      <div class="country__row-name">Top level domain(s):</div>
      <div class="country__row-value">
        <span
          v-for="(domain, index) in country[0].topLevelDomain"
          :key="domain"
        >
          {{ domain
          }}<i v-if="index + 1 < country[0].topLevelDomain.length">, </i>
        </span>
      </div>
    </div>

    <div class="country__row">
      <div class="country__row-name">Calling code(s):</div>
      <div class="country__row-value">
        <span v-for="(code, index) in country[0].callingCodes" :key="index">
          +{{ code }}<i v-if="index + 1 < country[0].callingCodes.length">, </i>
        </span>
      </div>
    </div>

    <div class="country__row">
      <div class="country__row-name">Area:</div>
      <div class="country__row-value">{{ country[0].area }}</div>
    </div>

    <div class="country__row">
      <div class="country__row-name">Demonym:</div>
      <div class="country__row-value">{{ country[0].demonym }}</div>
    </div>

    <div class="country__row">
      <div class="country__row-name">Timezone(s):</div>
      <div class="country__row-value">
        <span v-for="(timezone, index) in country[0].timezones" :key="timezone">
          {{ timezone }}<i v-if="index + 1 < country[0].timezones.length">, </i>
        </span>
      </div>
    </div>

    <div class="country__row">
      <div class="country__row-name">Borders:</div>
      <div class="country__row-value">
        <span v-for="(border, index) in country[0].borders" :key="index">
          {{ border }}<i v-if="index + 1 < country[0].borders.length">, </i>
        </span>
      </div>
    </div>

    <div class="country__row">
      <div class="country__row-name">Currencies:</div>
      <div class="country__row-value">
        <span v-for="(cur, index) in country[0].currencies" :key="index">
          name: {{ cur.name }}, code: {{ cur.code }}, symbol: {{ cur.symbol }}
        </span>
      </div>
    </div>

    <div class="country__row">
      <div class="country__row-name">Flag:</div>
      <div class="country__row-value">
        <img :src="country[0].flag" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  created() {
    this.$store.dispatch('fetchCountry', this.name);
  },

  computed: mapState(['country']),
};
</script>

<style lang="scss">
.country {
  box-sizing: border-box;

  &__name {
    box-sizing: border-box;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  &__row {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 18px;

    &-name {
      font-weight: 600;
      width: 20%;
    }

    &-value {
      color: #1a1a1a;

      img {
        width: 150px;
      }
    }
  }
}
</style>

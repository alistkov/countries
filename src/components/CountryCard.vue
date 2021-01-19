<template>
  <div class="card">
    <router-link :to="{ name: 'show-country', params: { name: country.name.toLowerCase() } }">
    <div class="card__inner">
      <div class="card__img">
        <img :src="country.flag" alt="">
      </div>
      <div class="card__name">{{ country.name }}</div>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss">
.card {
  box-sizing: border-box;
  width: 20%;
  padding: 0 20px;
  margin-bottom: 40px;

  &__inner {
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    height: 100%;
    transition: box-shadow .2s linear;

    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
      transition: box-shadow .2s linear;
    }
  }

  &__img {
    box-sizing: border-box;
    font-size: 0;
    width: 100%;
    height: 140px;
    overflow: hidden;
    position: relative;

    & img {
      width: 100%;
    }
  }

  &__name {
    box-sizing: border-box;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    height: 60px;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
  }

  & a:link,
  & a:visited {
    text-decoration: none;
    color: #222222;
  }
}
</style>

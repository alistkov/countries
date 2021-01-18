<template>
  <div class="top-bar">
      <router-link to="/" class="top-bar__title">{{ appName }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    appName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.top-bar {
  box-sizing: border-box;
  height: 60px;
  background-color: #1976d2;
  line-height: 60px;
  padding: 0 30px;
  margin-bottom: 50px;

  &__title {
    box-sizing: border-box;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: .2em;
  }
}
</style>

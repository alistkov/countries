<template>
  <div id="app">
    <TopBar :app-name="appName" />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';

export default {
  components: {
    TopBar,
  },

  data() {
    return {
      appName: 'Countries',
    };
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;;
}

.container {
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>

<template>
  <div id="app">
    <router-view name="menu"></router-view>
    <keep-alive>
      <router-view v-if="$route.meta.isKeep" />
    </keep-alive>
    <router-view v-if="!$route.meta.isKeep" />
  </div>
</template>

<script>
export default {
  methods: {},
  mounted() { },
  watch: {},
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
img {
  display: block;
}
</style>

<template>
  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
    <ul>
      <li v-for="item in count" :key="item">{{ item }}</li>
    </ul>
  </mt-loadmore>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      count: 20,
    };
  },
  methods: {
    // loadMore() {
    //   this.loading = true;
    //   var _this = this;
    //   //   console.log(111);
    //   setTimeout(() => {
    //     _this.count += 20;
    //     console.log(_this.count);
    //     this.loading = false;
    //   }, 2000);
    // },
    loadBottom() {
      console.log("bottom");
    },
    loadTop() {
      console.log("top");
    },
  },
  mounted() {
    //
  },
};
</script>

<style scoped>
.box {
  height: 100vh;
  overflow: auto;
}
li {
  padding: 20px 10px;
  border: 1px solid red;
}
</style>

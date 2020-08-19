<template>
  <div
    class="box"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
  >
    <ul>
      <li v-for="item in count" :key="item">{{ item }} ---load</li>
    </ul>
    <div v-if="loading">加载中----</div>
  </div>
</template>

<script>
import { InfiniteScroll } from "mint-ui";
export default {
  data() {
    return {
      loading: false,
      count: 20,
    };
  },
  methods: {
    loadMore() {
      this.loading = true;
      var _this = this;
      //   console.log(111);
      setTimeout(() => {
        _this.count += 20;
        console.log(_this.count);
        this.loading = false;
      }, 2000);
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

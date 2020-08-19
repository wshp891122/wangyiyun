<template>
  <div>
    <ul ref="box">
      <li v-for="item in count" :key="item">{{ item }}</li>
    </ul>
    <div>----加载更多....</div>
  </div>
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
    loadBottom() {
      console.log("bottom");
    },
    loadTop() {
      console.log("top");
    },
  },
  mounted() {
    //

    // console.log(clientHeight);
    var _this = this;
    // document.addEventListener("scroll", this.scrollTop, false);
  },
  methods: {
    scrollTop() {
      let clientHeight = window.screen.height;
      let boxHeight = this.$refs.box.offsetHeight;
      //   console.log(boxHeight);

      let heightDiff = boxHeight - clientHeight;
      //   heightDiff = heightDiff - (heightDiff % 10);
      //   console.log(heightDiff, "heightDIff");
      //   console.log(Height, "height");
      let scrollTop = document.documentElement.scrollTop;
      //   scrollTop = scrollTop - (scrollTop % 10);
      //   console.log(scrollTop, "scroll");
      if (scrollTop + 100 >= heightDiff) {
        // document.removeEventListener("scroll", this.scrollTop, false);
        setTimeout(() => {
          console.log("ok");
          this.count += 10;
          //   document.addEventListener("scroll", this.scrollTop, false);
        }, 3000);
      }
    },
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

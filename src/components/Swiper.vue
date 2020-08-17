<template>
  <div class="swiper-container" id="banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, i) in banner_list" :key="i">
        <img :src="item.pic" alt />
        <!-- {{item.pic}} -->
      </div>
    </div>

    <div class="swiper-pagination"></div>
    <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  props: {
    banner_list: {
      type: Array,
    },
  },
  mounted() {
    new Swiper("#banner", {
      //   autoplay: true,

      loop: true,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>
<!--沈阳   --- elment-ui ---  怎么该样式  -- scope -->
<style lang="scss">
#banner {
  width: 92%;
  margin-top: 20px;
  img {
    width: 100%;
  }
  .swiper-pagination-bullet-active {
    background: red;
  }
}
</style>

<template>
  <div class="wrapper">
    <ul>
      <li v-for="item in 20" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
//
import BS from "better-scroll";
export default {
  mounted() {
    new BS(".wrapper", {
      //   scrollbar: true,
    });
  },
};
</script>

<style scoped>
.wrapper {
  height: 300px;
  overflow: hidden;
  border: 1px solid red;
  margin-top: 20px;
}
.wrapper li {
  line-height: 30px;
  background: #fff;
  border-bottom: 1px solid #000;
}
</style>

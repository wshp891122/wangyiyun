<template>
  <div class="list" @click="toPlay(item.id)">
    <div class="img">
      <img :src="item.album.picUrl" alt="" />
    </div>
    <div class="content">
      <p>{{ item.album.name }}</p>
      <p>{{ item.artists[0].name }}</p>
    </div>
    <div class="btn">
      <i class="el-icon-video-play"></i>
      <i class="icon el-icon-more"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    toPlay(id) {
      this.$router.history.push({ path: "/playpage/" + id });
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  margin-top: 15px;
  display: flex;
  font-size: 14px;
  img {
    width: 40px;
    height: 40px;
  }
  .content {
    flex: 1;
    padding: 0 20px;
  }
  .btn {
    width: 50px;
    line-height: 40px;
  }
  .icon {
    margin-left: 10px;
    transform: rotate(90deg);
  }
}
</style>

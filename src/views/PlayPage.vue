<template>
  <div class="box-wrapper">
    <div
      class="box"
      :style="{
        backgroundImage: 'url(' + imgurl + ')',
      }"
    ></div>
    <div class="box1">
      <div class="top">
        <i @click="$router.history.go(-1)">&lt;</i>
        <span v-if="song.code == 200">{{ song.songs[0].name }}</span>
        <span> </span>
      </div>

      <div class="cover">
        <img v-if="song.code == 200" :src="imgurl" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// obj.user.name;
// let obj = {
//   code: 100,
//   user: {
//     name: "zzz",
//     age: 209,
//   },
// };
import { getSongDetail } from "../api";
export default {
  data() {
    return {
      song: {},
      imgurl: "",
    };
  },
  mounted() {
    let id = this.$route.params.id;

    //获取歌曲详情
    getSongDetail(id).then((res) => {
      console.log(res, "xiangqing");
      this.song = res.data;
      this.imgurl = res.data.songs[0].al.picUrl;
    });
  },
  // filters:{
  //   ranColor(){
  //     return
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.box-wrapper {
  position: relative;
  height: 100vh;
}
.box {
  height: 100vh;
  filter: blur(100px);
  background-size: 100% 100%;
  background-color: rgba(0, 0, 0, 1);
}
.box1 {
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
}

.top {
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  color: #fff;
}
.cover {
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50vw;
    height: 50vw;
    border-radius: 50%;
    padding: 5px;
    border: 3px dashed #999;
    animation: zhuan 30s linear infinite;
  }
}

@keyframes zhuan {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

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
        <img
          :style="{ '-webkit-animation-play-state': is_play }"
          :src="imgurl"
          alt=""
        />
      </div>

      <div class="footer">
        <div></div>
        <div class="play_time">
          <span>{{ currentTime | transTime }}</span>
          <div class="line"></div>
          <span>{{ duration | transTime }}</span>
        </div>
        <div>
          <button @click="play()">播放</button>
          <button @click="pause()">暂停</button>
        </div>
      </div>

      <audio controls ref="play_audio" :src="playUrl"></audio>
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
import { getSongDetail, getPlayUrl } from "../api";
export default {
  data() {
    return {
      song: {},
      imgurl: "",
      playUrl: "",
      song_id: "",
      duration: "", // 总时长
      currentTime: "", //当前播放时间
      currentCount: 0,
      is_play: "paused",
    };
  },
  filters: {
    transTime(time) {
      // 获取分钟
      let min = Math.floor(time / 60);
      let sec = Math.floor(time % 60);
      sec = sec < 10 ? "0" + sec : sec;
      return min + ":" + sec;
    },
  },
  mounted() {
    let that = this;

    this.$refs.play_audio.addEventListener("canplay", function() {
      //设置监听，点击时获取时长
      var sc = parseInt(that.$refs.play_audio.duration);
      console.log(sc);
      that.duration = sc;
    });
    this.$refs.play_audio.addEventListener("timeupdate", function() {
      //设置监听，点击时获取时长
      var sc = parseInt(that.$refs.play_audio.currentTime);
      console.log(sc);
      that.currentTime = sc;
      // that.currentCount = sc;
      // currentTime;
    });
    let id = this.$route.params.id;

    //获取歌曲详情
    getSongDetail(id)
      .then((res) => {
        console.log(res, "xiangqing");
        this.song = res.data;
        this.song_id = res.data.songs[0].id;

        this.imgurl = res.data.songs[0].al.picUrl;
      })
      .then((res) => {
        //获取播放地址
        getPlayUrl(this.song_id).then((res) => {
          console.log(this.song_id);
          console.log(res, "playurl");
          this.playUrl = res.data.data[0].url;
        });
      });
  },
  methods: {
    //播放音乐
    play() {
      this.is_play = "running";
      this.$refs.play_audio.play();
    },
    pause() {
      this.is_play = "paused";
      this.$refs.play_audio.pause();
    },
  },
};
</script>

<style lang="scss" scoped>
.play_time {
  display: flex;
  color: #fff;
  // line-height: 30px;
  span {
    padding: 10px;
  }

  .line {
    // border-top: 1px solid #fff;
    margin-top: 20px;
    height: 1px;
    vertical-align: middle;
    background: #fff;
    flex: 1;
  }
}
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

    // transition: 0.5;
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

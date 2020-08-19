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
          @click="isShowImg = false"
          v-if="isShowImg"
          :style="{ '-webkit-animation-play-state': is_play }"
          :src="imgurl"
          alt=""
        />
        <div
          @click="isShowImg = true"
          v-show="!isShowImg"
          class="lyric"
          v-html="lyric"
        ></div>
      </div>

      <div class="footer">
        <div>
          <button v-if="is_like" @click="like(true)">喜欢</button>
          <button v-else @click="like(false)">不喜欢</button>
          <button @click="get_like_list">获取喜欢列表</button>
        </div>
        <div class="play_time">
          <span>{{ currentTime | transTime }}</span>
          <div class="line"></div>
          <span>{{ duration | transTime }}</span>
        </div>
        <div class="con">
          <button @click="play()">播放</button>
          <button @click="pause()">暂停</button>
          <button @click="drawer = true">播放列表</button>
        </div>
      </div>

      <audio ref="play_audio" :src="playUrl"></audio>

      <el-drawer title="我是标题" :visible.sync="drawer" :direction="'btt'">
        <ul>
          <li
            @click="tabSong(item.id)"
            :style="{ color: i == 0 ? 'red' : '#333' }"
            v-for="(item, i) in song_list"
            :key="i"
          >
            {{ item.name }}
          </li>
        </ul>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import {
  getSongDetail,
  getPlayUrl,
  setLike,
  getLikeList,
  getLyric,
} from "../api";

export default {
  data() {
    return {
      drawer: false, // 播放列表是否显示
      song_list: [], // 播放歌单列表
      song: {},
      imgurl: "",
      playUrl: "",
      song_id: "",
      duration: "", // 总时长
      currentTime: "", //当前播放时间
      currentCount: 0,
      is_play: "paused",
      is_like: true, // 是否显示喜欢按钮
      lyric: "",
      isShowImg: true,
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
      // console.log(sc);
      that.duration = sc;
    });
    this.$refs.play_audio.addEventListener("timeupdate", function() {
      //设置监听，点击时获取时长
      var sc = parseInt(that.$refs.play_audio.currentTime);
      // console.log(sc);
      that.currentTime = sc;
      // that.currentCount = sc;
      // currentTime;
    });
    let id = this.$route.params.id;
    this.get_song_deail(id);
    //进入获取喜欢列表
    this.get_like_list();
    //歌词
    getLyric(id).then((res) => {
      console.log(res, "歌词");
      this.lyric = res.data.lrc.lyric;
      console.log(this.lyric);
      let str = this.lyric
        .replace(/\n/gi, "</p><p>")
        .replace(/\[/gi, "<span>[")
        .replace(/\]/gi, "]</span>");
      this.lyric = "<p>" + str + "</p>";
    });
  },
  methods: {
    //获取歌曲详情
    get_song_deail(id) {
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
            this.playUrl = res.data.data[0].url;

            //
          });
        });
    },

    //播放音乐
    play() {
      this.is_play = "running";
      this.$refs.play_audio.play();
    },
    pause() {
      this.is_play = "paused";
      this.$refs.play_audio.pause();
    },
    //设置喜欢的音乐
    like(isLike) {
      setLike(this.$route.params.id, isLike).then((res) => {
        //调用比较方法
        this.get_like_list();
      });
    },
    //获取喜欢音乐列表
    async get_like_list() {
      //用户id  ----- 登录的时候本地存储的id
      let id = localStorage.getItem("id");
      let data = await getLikeList(id);
      // console.log(data.data.ids, "ids");
      this.is_like = !data.data.ids.some(
        (item) => item == this.$route.params.id
      );
      // [2222,333,11,33333,23322,1133]
      let songDetail = await getSongDetail(data.data.ids.toString());

      this.song_list = songDetail.data.songs;

      // console.log(this.song_list, "song_list");
      //1 获取匹配元素的索引   filter
      console.log(this.song_list, "song");
      let songIndex = data.data.ids.findIndex(
        (item) => item == this.$route.params.id
      );

      this.song_list = [
        ...this.song_list.splice(songIndex, 1),
        ...this.song_list,
      ];
      // console.log(songDetail);
      // console.log(result, "aaa");
    },
    //展示列表
    show_list() {},
    //切换歌曲
    async tabSong(id) {
      //关闭抽屉
      this.drawer = false;
      console.log(id);
      this.get_song_deail(id);
      //延迟调用播放
      setTimeout(() => {
        this.$refs.play_audio.play();
      }, 1000);
      //
      //url
    },
  },
};

// [111,22,333]
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
  overflow: auto;
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
.con {
  display: flex;
  justify-content: space-between;
  padding: 20px;
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

<style lang="scss">
.box-wrapper .el-drawer {
  height: 50vh !important;
  overflow: scroll;

  li {
    line-height: 22px;
    font-size: 14px;
    text-indent: 20px;
  }
}
.lyric {
  text-align: center;
  span {
    display: none;
  }
  p {
    font-size: 12px;
    line-height: 20px;
  }
}
</style>

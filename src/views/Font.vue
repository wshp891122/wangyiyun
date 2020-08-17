<template>
  <div class="font">
    <Swiper v-if="banner_list.length" :banner_list="banner_list"></Swiper>
    <BS></BS>
    <h2>懂你的精选歌单</h2>
    <div class="play_list">
      <div class="play_list-wrapper">
        <div v-for="item in paly_list" :key="item.id">
          <img :src="item.coverImgUrl" alt />
          <p>{{item.name}}</p>
          <div class="mark">
            <i class="el-icon-video-play"></i>
            {{item.playCount | transCount}}
          </div>
        </div>
      </div>
    </div>
    <h2>推荐歌单</h2>
    <div class="tj"></div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
import { getBanner, getPlayList, tuijian } from "@/api";
import Swiper from "@/components/Swiper";
import BS from "@/components/BS";
export default {
  name: "Font",
  data() {
    return {
      banner_list: [],  // 轮播图
      paly_list: []  //精选歌单
    };
  },
  components: {
    Swiper,
    BS,
  },
  mounted() {
    //获取banner
    this.get_banner();
    //获取精选歌单
    this.get_play_list()

    new BScroll(".play_list", { scrollX: true })

    tuijian().then(res => {
      console.log(res, "tuijian")
    })

  },
  beforeCreate() {
    document.title = "发现音乐";
  },
  methods: {
    get_banner() {
      getBanner().then((res) => {
        console.log(res.data.banners, "zzz");
        this.banner_list = res.data.banners;
      });
    },
    get_play_list() {
      getPlayList({ limit: 10 }).then(res => {
        console.log(res)
        this.paly_list = res.data.playlists
      })
    }
  },
  filters: {
    transCount(count) {
      // 过亿    保留一位小数   
      // 万 保留整数
      // 不过万 就是 数据本身
      return count >= 100000000 ? (count / 100000000).toFixed(1) + '亿' : count > 10000 ? Math.floor(count / 10000) + '万' : count

    }
  }
};
</script>

<style lang="scss" scoped>
//

.font {
  padding-left: 20px;
  h2 {
    margin-top: 20px;
    font-size: 18px;
    line-height: 40px;
  }
}
.play_list {
  overflow: hidden;
  clear: both;
  .play_list-wrapper {
    display: flex;
    font-size: 12px;
    width: 1200px;
  }
  .play_list-wrapper > div {
    position: relative;
    margin-right: 20px;
  }
  p {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .mark {
    position: absolute;
    right: 5px;
    top: 10px;
    color: #fff;
  }
  img {
    width: 100px;
    height: 100px;
  }
}
</style>

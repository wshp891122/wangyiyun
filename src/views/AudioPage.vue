<template>
  <div class="video">
    <div class="menu">
      <ul>
        <li
          @click="tabVideo(i,item.id)"
          :class="{active:i==index}"
          v-for="(item,i) in video_type_list "
          :key="item.id"
        >{{item.name}}</li>
      </ul>
    </div>
    <div v-if="item.video_url" v-for="item in video_list" :key="item.data.vid">
      <video
        @click="playVideo(item.data.vid)"
        :src="item.video_url"
        controls
        :poster="item.data.previewUrl"
      ></video>

      <div>{{item.data.title}}</div>
      <div>
        <span @click="zan(item.data.vid)">赞{{item.data.praisedCount}}</span>

        <span @click="delZan(item.data.vid)">取消点赞{{item.data.praisedCount}}</span>
      </div>
      <!-- <div>{{item.video_url}}</div> -->
    </div>
  </div>
</template>

<script>
import { getVideoSrc, getVideType, getVideoByType, parsie, getParsieInfo } from "../api"
export default {
  data() {
    return {
      video_type_list: [],
      video_list: [],
      video_src: '',
      index: 0,
    }
  },
  mounted() {

    //id


    //获取分类列表
    getVideType().then(res => {
      // console.log(res, "data")
      this.video_type_list = res.data.data.filter((item, i) => i < 10)
      // console.log(this.video_type_list, "typelist")
      this.get_video(this.video_type_list[this.index].id)
    })
  },
  methods: {
    async get_video(id) {
      //
      let vidoeData = await getVideoByType(id)
      vidoeData = vidoeData.data.datas
      //ids数组 
      let ids = vidoeData.map(item => item.data.vid);
      // //遍历数组
      for (let i = 0; i < vidoeData.length; i++) {
        //获取一个 视频url对象
        let urlData = await getVideoSrc(ids[i])
        // console.log(urlData)
        if (urlData.data.urls.length > 0) {
          let video_url = urlData.data.urls[0].url

          vidoeData[i].video_url = video_url
        }
      }
      this.video_list = vidoeData
      console.log(this.video_list, "video_data")
    }
    ,
    tabVideo(i, id) {
      this.index = i
      this.get_video(id)
    },
    //点赞
    zan(id) {
      console.log(id)
      parsie(id).then(res => {
        console.log(res, "获取点赞后的范湖信息")
        getParsieInfo(id).then(res => {
          console.log(res, "赞赞赞")
        })
      })
    },
    delZan(id) {
      parsie(id, 5, 0).then(res => {
        console.log(res, "获取点赞后的范湖信息")
        getParsieInfo(id).then(res => {
          console.log(res, "deZan")
        })
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  padding: 10px;
  overflow: auto;
  font-size: 12px;
  ul {
    width: 240%;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      &.active {
        color: #000;
        font-weight: bold;
        font-size: 14px;
      }
    }
  }
}
.video {
  padding: 10px 20px;
  > div {
    padding: 10px;
  }
  video {
    width: 100%;
  }
}
</style>

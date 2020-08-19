<template>
  <div class="video">
    <div v-if="item.video_url" v-for="item in video_list" :key="item.data.vid">
      <video
        @click="playVideo(item.data.vid)"
        :src="item.video_url"
        controls
        :poster="item.data.previewUrl"
      ></video>

      <div>{{item.data.title}}</div>
      <!-- <div>{{item.video_url}}</div> -->
    </div>
  </div>
</template>

<script>
import { getVideo, getVideoSrc } from "../api"
export default {
  data() {
    return {
      video_list: [],
      video_src: ''
    }
  },
  mounted() {
    this.get_video()
  },
  methods: {
    async get_video() {

      let videoData = await getVideo()


      let ids = videoData.data.datas.map(item => item.data.vid);
      //遍历数组
      for (let i = 0; i < videoData.data.datas
        .length; i++) {
        let urlData = await getVideoSrc(ids[i])
        // console.log(urlData)
        let video_url = urlData.data.urls[0].url

        videoData.data.datas[i].video_url = video_url
      }

      // console.log(videoData.data.datas, "aa")
      this.video_list = videoData.data.datas


    }
  }
};
</script>

<style lang="scss" scoped>
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

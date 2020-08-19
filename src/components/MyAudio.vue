<template>
  <audio ref="audio" :src="audio.src"></audio>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    //
    let that = this;
    //先设置下元素
    this.setAudio({ audio: this.$refs.audio });

    //  获取播放标签
    let audio = this.audio.audio;
    // 获取当前播放时间
    audio.addEventListener("timeupdate", function() {
      //设置监听，点击时获取时长
      var sc = parseInt(audio.currentTime);
      //   that.currentTime = sc;
      that.setAudio({ currentTime: sc });
    });
    // 获取总时长
    audio.addEventListener("canplay", function() {
      //设置监听，点击时获取时长
      var sc = parseInt(audio.duration);
      //   that.duration = sc;
      that.setAudio({ duration: sc });
    });
  },
  computed: {
    ...mapState(["audio"]),
  },
  methods: {
    ...mapMutations(["setAudio"]),
  },
  //   watch: {
  //     audio() {
  //       console.log(1);
  //     },
  //   },
  //   watch: {
  //     audio: {
  //       handler() {
  //         console.log("ok");
  //         //   this.setAduio()
  //       },
  //       deep: true,
  //       immediate: true,
  //     },
  //   },
};
</script>

<style scoped></style>

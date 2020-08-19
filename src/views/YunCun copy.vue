<template>
  <div class="box_wrapper" ref="box">
    <div class="box" id="box1">
      <div v-show="i < count" v-for="(item, i) in yuncun_list" :key="item.id">
        <img :src="item.simpleResourceInfo.songCoverUrl" alt />
        <p>{{ item.content }}</p>
        <p class="author">
          <img class="avatar" :src="item.simpleUserInfo.avatar" alt />
          <span>{{ item.simpleUserInfo.nickname }}</span>
          <span>{{ item.likedCount }}</span>
        </p>
      </div>
    </div>
    <div>加载更多...</div>
  </div>
</template>

<script>
import { getYunCun } from "../api";
export default {
  data() {
    return {
      loading: false,
      yuncun_list: [],
      count: 10,
    };
  },
  mounted() {
    getYunCun().then((res) => {
      console.log(res, "yuncun");
      this.yuncun_list = res.data.data;
    });

    //加载更多
    this.$refs.box.onscroll = this.loadMore;
    // this.$refs.box.addEventListener("scroll", this.loadMore, false);

    // 会触发多次
  },
  methods: {
    handleTopChange() {
      // console.log("zzzz");
    },

    loadMore() {
      // 获取滚动高度
      let scrollTop = this.$refs.box.scrollTop;
      // box高度  - 屏幕的高度
      let heightDiff = box1.offsetHeight - this.$refs.box.offsetHeight;
      //距离底部 触发距离
      if (scrollTop + 50 >= heightDiff) {
        //注销scroll
        this.$refs.box.onscroll = null;
        // console.log("ok");
        setTimeout(() => {
          //请求接口  ---
          this.count += 10;
          this.$refs.box.onscroll = this.loadMore;
        }, 3000);
      }

      // console.log(box1.offsetHeight, "offerset");
      // console.log(window.screen.height, "window");
      // console.log(scrollTop, "scrollTop");
    },
  },
};
</script>

<style lang="scss" scoped>
.box_wrapper {
  height: 100vh;
  overflow: auto;
  padding-bottom: 20px;
}
.box {
  padding: 10px 5px;

  > div {
    margin-top: 20px;
    border-radius: 6px;
    break-inside: avoid;
    box-shadow: 1px 1px 1px 1px #f1f1f1;
    > img {
      width: 100%;
    }
  }
  column-count: 2;

  .author {
    display: flex;
    text-indent: 1em;
  }
  p {
    line-height: 30px;
    font-size: 12px;
    color: #666;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-indent: 1em;

    .avatar {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-top: 4px;
      margin-left: 12px;
    }
  }
}
</style>

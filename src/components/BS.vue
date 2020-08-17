<template>
  <div class="wrapper">
    <ul>
      <router-link tag="li" :to="item.path" v-for="(item,i) in menu_list" :key="i">
        <i :class="item.icon"></i>
        <p>{{item.title}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
//
import BS from "better-scroll";
export default {
  data() {
    return {
      menu_list: [
        {
          icon: "el-icon-eleme",
          title: "每日推荐",
          path: "/tuijian"
        },
        {
          icon: "el-icon-phone",
          title: "歌单",
          path: "/songs"
        },
        {
          icon: "el-icon-star-off",
          title: "排行榜",
          path: "/oder"
        },
        {
          icon: "el-icon-picture-outline-round",
          title: "电台",
          path: "/tuijian"
        }, {
          icon: "el-icon-camera",
          title: "直播",
          path: "/tuijian"
        }, {
          icon: "el-icon-edit",
          title: "直播1",
          path: "/tuijian"
        }, {
          icon: "el-icon-edit",
          title: "每日推荐",
          path: "/tuijian"
        }, {
          icon: "el-icon-edit",
          title: "每日推荐",
          path: "/tuijian"
        },
        {
          icon: "el-icon-edit",
          title: "每日推荐",
          path: "/tuijian"
        },
        {
          icon: "el-icon-edit",
          title: "每日推荐",
          path: "/tuijian"
        },
        {
          icon: "el-icon-edit",
          title: "每日推荐",
          path: "/tuijian"
        },
        {
          icon: "el-icon-edit",
          title: "每日推荐",
          path: "/tuijian"
        }, {
          icon: "el-icon-edit",
          title: "每日推荐",
          path: "/tuijian"
        }, {
          icon: "el-icon-edit",
          title: "每日推荐",
          path: "/tuijian"
        }, {
          icon: "el-icon-edit",
          title: "每日推荐",
          path: "/tuijian"
        }, {
          icon: "el-icon-edit",
          title: "每日推荐",
          path: "/tuijian"
        }
      ]
    }
  },
  mounted() {
    new BS(".wrapper", {
      scrollX: true,
      bounce: false,
      click: true, // 如果点击事件 需要click：true
      //   scrollbar: true,
    });
  },
  methods: {

  },
};
</script>

<style scoped>
.wrapper {
  /* height: 300px; */
  overflow: hidden;
  /* border: 1px solid red; */
  margin-top: 20px;
  clear: both;
}
.wrapper ul {
  width: 300%;
  display: flex;
}
.wrapper li {
  text-align: center;
  line-height: 30px;
  flex: 1;
  color: #666;
  font-size: 13px;
}
.wrapper li i {
  font-size: 25px;
  background: #c20c0c;
  color: #fff;
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  margin: 0 auto;
}

.wrapper li p {
  line-height: 30px;
}
</style>

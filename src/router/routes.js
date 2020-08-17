import Font from "@/views/Font";
import Me from "@/views/Me";
import AudioPage from "@/views/AudioPage";
import Tuijian from "@/views/Tuijian";
import PlayPage from "@/views/PlayPage";
import YunCun from "@/views/YunCun";
import Menu from "@/components/Menu";
import Login from "@/views/Login";

export const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/font",
    // beforeEnter: (to, from, next) => {
    //   // ...
    //   console.log("OK---beforeEnter");
    //   next();
    // },
    components: {
      default: Font,
      menu: Menu,
    },
    meta: {
      isKeep: true, // 缓存
    },
  },
  {
    path: "/me",
    components: {
      default: Me,
      menu: Menu,
    },
    meta: {
      isKeep: true,
    },
  },
  {
    path: "/yuncun",
    components: {
      default: YunCun,
      menu: Menu,
    },
    meta: {
      isKeep: false,
    },
  },
  {
    path: "/audiopage",
    components: {
      default: AudioPage,
      menu: Menu,
    },
  },
  {
    path: "/playpage",
    component: PlayPage,
  },
  {
    path: "/tuijian",
    component: Tuijian,
  },
];

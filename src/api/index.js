// import fetchData from "axios";

import fetchData from "./fetchData";

// 1 获取轮播图
export async function getBanner(type = "2") {
  return await fetchData.get("/banner", { params: { type: 2 } });
}

// 2 精选歌单
export async function getPlayList(data = {}) {
  //本地存储获取cookie
  // let cookie = JSON.parse(localStorage.getItem("user")).cookie;
  return await fetchData.get("/top/playlist", {
    params: data,
  });
}

// 3 登录接口
export async function login(data) {
  // console.log(data, "data");
  return await fetchData.post("/login/cellphone", data);
}

// 精品推荐   ---
export async function tuijian() {
  return await fetchData.get("/recommend/songs");
}

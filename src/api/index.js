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

// 4精品推荐   ---
export async function tuijian() {
  return await fetchData.get("/recommend/songs");
}

// 5获取歌曲详情
export async function getSongDetail(id) {
  return await fetchData.get("/song/detail", { params: { ids: id } });
}

// 6获取播放地址
export async function getPlayUrl(id) {
  return await fetchData.get("/song/url", { params: { id: id } });
}
// 7 设置喜欢不喜欢
export async function setLike(id, like = true) {
  return await fetchData.get("/like", { params: { id, like } });
}

// 8 获取用户喜欢列表
export async function getLikeList(id) {
  return await fetchData.get("/likelist", { params: { id } });
}

// 9获取歌词
export async function getLyric(id) {
  return await fetchData.get("/lyric", { params: { id } });
}

// 10 获取全部视频
export async function getVideo() {
  return await fetchData.get("/video/timeline/all");
}

// 11 获取视频播放地址
export async function getVideoSrc(id) {
  return await fetchData.get("/video/url", { params: { id } });
}

// 12 获视频分类标签
export async function getVideType() {
  return await fetchData.get("/video/group/list");
}

// 13获取分类标签下视频

export async function getVideoByType(id) {
  return await fetchData.get("/video/group", { params: { id: 58100 } });
}

// 14 资源点赞接口
export async function parsie(id, type = 5, t = 1) {
  return await fetchData.get("/resource/like", {
    params: {
      id,
      type,
      t,
    },
  });
}

// 15获取点赞信息

export async function getParsieInfo(vid) {
  return await fetchData.get("/video/detail/info", { params: { vid } });
}

// 15获取云村接口

export async function getYunCun() {
  return await fetchData.post("/comment/hotwall/list");
}

// getVideoByType().then((res) => {
//   console.log(res, "typeVideo");
// });
// getVideType().then((res) => {
//   console.log(res);
// });
//所有的 都可以用这个
// async function request(url, data) {
//   return await fetchData.get(url, { params: data });
// }

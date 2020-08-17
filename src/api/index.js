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

//获取歌曲详情
export async function getSongDetail(id) {
  return await fetchData.get("/song/detail", { params: { ids: id } });
}

//获取播放地址
export async function getPlayUrl(id) {
  return await fetchData.get("/song/url", { params: { id: id } });
}

//
// 获取歌单详情
// export async function getSongDetail() {
//   let song_list = [];
//   let result = await tuijian();

//   for (var item of result.data.recommend) {
//     //歌单对象
//     let obj = {};
//     // obj.content = [];
//     //通过歌单id获取歌单详情
//     let { data } = await fetchData.get("/playlist/detail", {
//       params: { id: item.id },
//     });
//     //设置歌单名字
//     obj.name = data.playlist.name;
//     let ids = "";
//     for (var item1 of data.playlist.tracks) {
//       ids += "," + item1.id;
//     }
//     let song = await getSong(ids.substring(1));
//     obj.songs = song.data.songs;
//     song_list.push(obj);
//   }
//   return song_list;
// }

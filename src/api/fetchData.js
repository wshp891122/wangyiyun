import axios from "axios";

const fetchData = axios.create({
  baseURL: "http://182.92.156.134:3000",
  withCredentials: true, // 允许携带  ------- cookie
});

//添加请求拦截器
fetchData.interceptors.request.use(
  function(config) {
    //   let user = JSON.parse(localStorage.getItem("user"));
    //   let cookie = user ? user.cookie : null;
    //   config.url = config.url + "?cookie=" + cookie;

    if (config.method == "get") {
      config.params = {
        ...config.params,
        timestamp: Date.now(),
        cookie: JSON.parse(localStorage.getItem("user")).cookie,
      };
    }

    if (config.method == "post") {
      config.data = {
        ...config.data,
        timestamp: Date.now(),
        cookie: JSON.parse(localStorage.getItem("user")).cookie,
      };
    }
    return config;
  },
  function(error) {
    //请求错误时做些事
    return Promise.reject(error);
  }
);

//添加响应拦截器
fetchData.interceptors.response.use(
  function(response) {
    //对响应数据做些事
    return response;
  },
  function(error) {
    //请求错误时做些事
    return Promise.reject(error);
  }
);

export default fetchData;

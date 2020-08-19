import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "swiper/css/swiper.min.css"; // 引入样式
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";

Vue.use(MintUI);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

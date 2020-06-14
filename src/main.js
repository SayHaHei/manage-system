import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* 全局配置 */
import "@/assets/less/reset.less";
import http from "@/api/config";
import "./mock";
Vue.prototype.$http = http;

Vue.use(ElementUI);
Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  //防止刷新以后vuex里丢失token
  store.commit("getToken");
  //防止刷新后vuex里丢失menu
  store.commit("getMenu");
  //过滤登录页，防止死循环?
  const token = store.state.user.token;
  if (!token && to.name !== "login") {
    next({ name: "login" });
  } else {
    next();
  }
});
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit("addMenu", router);
  }
}).$mount("#app");

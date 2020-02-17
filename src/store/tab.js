export default {
  state: {
    currentMenu: null,
    isCollapse: false,
    tabList: [
      {
        path: "/",
        name: "home",
        icon: "el-icon-s-home",
        label: "首页"
      }
    ]
  },
  mutations: {
    clickMenu(state, val) {
      console.log("===============");
      if (val.name != "home") {
        state.currentMenu = val;
      } else {
        state.currentMenu = null;
      }
    },
    changeCollapse(state) {
      state.isCollapse = !state.isCollapse;
    }
  }
};

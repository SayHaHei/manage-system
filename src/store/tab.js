import Cookie from "js-cookie";
export default {
  state: {
    currentMenu: null,
    menu: [],
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
    setMenu(state, val) {
      state.menu = val;
      console.log(val);
      Cookie.set("menu", JSON.stringify(val));
    },
    clearMenu(state) {
      state.menu = "";
      Cookie.remove("menu");
    },
    addMenu(state, router) {
      if (!Cookie.get("menu")) {
        return;
      }
      let menu = JSON.parse(Cookie.get("menu"));
      state.menu = menu;
      console.log(menu);
      let routerMenu = [
        {
          path: "/",
          children: [],
          component: () => import(`@/views/Main`)
        }
      ];
      menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            /* map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
              a = [1,2,3]
              a = a.map(x => x*2)
            */
            item.component = () => import(`@/views/${item.url}`);
            return item;
          });
          routerMenu[0].children.push(...item.children);
        } else {
          item.component = () => import(`@/views/${item.url}`);
          routerMenu[0].children.push(item);
        }
      });
      router.addRoutes(routerMenu);
    },
    clickMenu(state, val) {
      if (val.name != "home") {
        state.currentMenu = val;
        let result = state.tabList.findIndex(item => item.name === val.name);
        result === -1 ? state.tabList.push(val) : "";
      } else {
        state.currentMenu = null;
      }
    },
    changeCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },
    closeTab(state, val) {
      let result = state.tabList.findIndex(item => item.name === val.name);
      if (result != -1) {
        state.tabList.splice(result, 1);
      }
    }
  }
};

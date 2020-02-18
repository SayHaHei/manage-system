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
    closeTab(state, val){
      let result = state.tabList.findIndex(item => item.name === val.name);
      if(result != -1){
        state.tabList.splice(result, 1);
      }
    }
	}
};

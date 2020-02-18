<template>
	<div>
		<el-tag
			:closable="item.name != 'home'"
			size="small"
			v-for="(item, index) in tabList"
			:key="index"
      @close="handleClose(item)"
			:effect="$route.name === item.name?'dark':'plain'"
			>{{ item.label }}</el-tag
		>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
	computed: {
		...mapState({
			tabList: state => state.tab.tabList
    })
  },
  methods:{
    ...mapMutations([
      'closeTab'
    ]),
    handleClose(val){
      // this.$store.commit("closeTab", val);
      this.closeTab(val);
    }
  }
};
</script>

<style lang="less" scoped>
.el-tag {
	margin-top: 10px;
	margin-left: 10px;
}
</style>

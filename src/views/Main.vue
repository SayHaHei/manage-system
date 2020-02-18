<template>
	<el-container>
		<el-aside width="auto">
			<common-aside></common-aside>
		</el-aside>
		<el-container>
			<el-header>
				<common-header></common-header>
			</el-header>
      <common-tab></common-tab>
			<el-main>Main</el-main>
		</el-container>
	</el-container>
</template>

<script>
import CommonAside from "@/components/CommonAside.vue";
import CommonHeader from "@/components/CommonHeader.vue";
import CommonTab from "@/components/CommonTab.vue";
export default {
	components: {
		CommonAside,
		CommonHeader,
		CommonTab
	}
};
</script>

<style lang="less" scoped>
.el-container {
	height: 100vh;
}
.el-header {
	background-color: #333;
}
.el-menu {
	border: 0;
}
</style>

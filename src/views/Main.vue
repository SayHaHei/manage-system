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
      <el-main>
        <router-view></router-view>
      </el-main>
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
  },
  routes: [
    {
      path: "/",
      name: "home",
      label: "首页",
      components: () => import("@/views/Home/Home.vue")
    }
  ]
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100vh;
  background-color: rgb(242, 242, 242);
}
.el-header {
  background-color: #333;
}
.el-menu {
  border: 0;
}
.el-main {
  padding-top: 0;
}
</style>

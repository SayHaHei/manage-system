<template>
  <div class="header">
    <div class="l-content">
      <el-button icon="el-icon-menu" @click="collapse" size="mini"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{ path: currentMenu.path }"
          v-if="currentMenu"
          >{{ currentMenu.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img :src="userImg" alt="头像" class="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      currentMenu: state => state.tab.currentMenu
    })
  },
  data() {
    return {
      userImg: require("@/assets/images/user.png")
    };
  },
  methods: {
    collapse() {
      this.$store.commit("changeCollapse");
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  .l-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
  }
  .r-content {
    .userImg {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
<style lang="less">
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #666;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #fff;
    }
  }
}
</style>

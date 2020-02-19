<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <h3 v-if="!isCollapse">小滴课堂后台管理系统</h3>
    <h3 v-if="isCollapse">小滴</h3>
    <el-menu-item
      :index="item.path"
      v-for="(item, key) in noChildren"
      :key="'menu' + key"
      @click="clickMenu(item)"
    >
      <i :class="item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      :index="item.label"
      v-for="(item, key) in hasChildren"
      :key="key"
    >
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subItem.path"
          v-for="(subItem, subIndex) in item.children"
          :key="'sub' + subIndex"
          @click="clickMenu(subItem)"
        >
          <i :class="subItem.icon"></i>
          <span>{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      asideMenu: [
        {
          path: "/",
          name: "home",
          icon: "el-icon-s-home",
          label: "首页"
        },
        {
          path: "/video",
          name: "video",
          icon: "el-icon-video-play",
          label: "视频管理"
        },
        {
          path: "/user",
          name: "user",
          icon: "el-icon-user",
          label: "用户管理"
        },
        {
          label: "其他",
          icon: "el-icon-location",
          children: [
            {
              path: "/page1",
              name: "page1",
              icon: "el-icon-setting",
              label: "页面1"
            },
            {
              path: "/page2",
              name: "page2",
              icon: "el-icon-setting",
              label: "页面2"
            }
          ]
        }
      ]
    };
  },
  computed: {
    hasChildren() {
      return this.asideMenu.filter(item => item.children);
    },
    noChildren() {
      return this.asideMenu.filter(item => !item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    }
  },
  methods: {
    clickMenu(item) {
      this.$router.push({ name: item.name });
      /* 点击时加入已点击列表 */
      this.$store.commit("clickMenu", item);
    }
  }
};
</script>

<style lang="less" scoped>
.el-menu {
  height: 100vh;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

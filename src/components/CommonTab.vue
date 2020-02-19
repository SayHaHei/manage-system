<template>
  <div class="tabs">
    <el-tag
      :closable="item.name != 'home'"
      size="small"
      v-for="(item, index) in tabList"
      :key="index"
      @close="handleClose(item, index)"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @click="changeMenu(item)"
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
  methods: {
    ...mapMutations(["closeTab"]),
    handleClose(val, index) {
      let length = this.tabList.length;
      this.closeTab(val);
      if (val.name !== this.$route.name) {
        return;
      }
      console.log("========", index, length);
      /* 关闭的标签是最右边的化，向左移动一个 */
      if (index === length) {
        this.$router.push({ name: this.tabList[index - 1].name });
      } else {
        this.$router.push({ name: this.tabList[index].name });
      }
    },
    changeMenu(item) {
      this.$router.push({ name: item.name });
      /* 点击时加入已点击列表 */
      this.$store.commit("clickMenu", item);
    }
  }
};
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>

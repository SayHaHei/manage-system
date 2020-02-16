<template>
  <div class="header">
    <div class="l-content">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      ssssssss
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  // background-color: #383838;
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

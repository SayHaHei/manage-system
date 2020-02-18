<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userInfo">
            <p class="name">Nick</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="loginInfo">
          <p>上次登录时间:<span class="loginTime">2020-1-1</span></p>
          <p>上次登录地点:<span class="loginLocation">北京</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" class="saleData">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="grid-content bg-purple-dark">sdcd</div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      userImg: require("../../assets/images/user.png")
    };
  }
};
</script>

<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  &Info {
    margin-left: 30px;
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999;
    }
  }
}
.loginInfo {
  color: #999;
  p {
    line-height: 28px;
    font-size: 14px;
    span {
      color: #999;
      margin-left: 60px;
    }
  }
}
.saleData {
  margin-top: 20px;
}
</style>

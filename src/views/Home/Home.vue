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
        <el-table style="width: 100%" :data="tableData">
          <el-table-column
            show-overflow-tooltip
            :prop="key"
            v-for="(val, key) in tableLabel"
            :key="key"
            :label="val"
          >
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
      userImg: require("../../assets/images/user.png"),
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买"
      },
      tableData: []
    };
  },
  created() {
    this.$http.get("/home/getData").then(res => {
      res = res.data;
      this.tableData = res.data.tableData;
    });
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

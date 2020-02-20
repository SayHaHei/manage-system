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
          <p>
            上次登录时间:<span class="loginTime">{{ formatDate() }}</span>
          </p>
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
      <div class="num">
        <el-card
          :body-style="{ padding: '0px', display: 'flex' }"
          v-for="item in countData"
          :key="item.name"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="`backgroundColor:${item.color}`"
          ></i>
          <div class="detail">
            <p class="value">￥ {{ item.value }}</p>
            <p class="name">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <echart></echart>
      </el-card>
      <div class="graph">
        graph
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Echart from "../../components/Echart.vue";

export default {
  components: {
    Echart
  },
  data() {
    return {
      userImg: require("../../assets/images/user.png"),
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef"
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef"
        }
      ],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买"
      },
      tableData: [],
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        video: {
          series: []
        }
      }
    };
  },
  methods: {
    formatDate() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formatMonth = month < 10 ? `0${month}` : month;
      const formatDay = day < 10 ? `0${day}` : day;
      return `${year}-${formatMonth}-${formatDay}`;
    },
    getTableData() {
      this.$http.get("/home/getData").then(res => {
        res = res.data;
        /* 表格 */
        this.tableData = res.data.tableData;
        /* 折线图 */
        // 订单折线图
        const order = res.data.orderData;
        this.echartData.order.xData = order.date;
        // 第一步取出series中的name部分——键名
        let keyArray = Object.keys(order.data[0]);
        // 第二步，循环添加数据
        keyArray.forEach(key => {
          this.echartData.order.series.push({
            name: key === "wechat" ? "小程序" : key,
            data: order.data.map(item => item[key]),
            type: "line"
          });
        });
        // 用户柱状图
        this.echartData.user.xData = res.data.userData.map(item => item.date);
        this.echartData.user.series.push({
          name: "新增用户",
          data: res.data.userData.map(item => item.new),
          type: "bar"
        });
        this.echartData.user.series.push({
          name: "活跃用户",
          data: res.data.userData.map(item => item.active),
          type: "bar",
          barGap: 0
        });
        // 视频饼图
        this.echartData.video.series.push({
          data: res.data.videoData,
          type: "pie"
        });
        console.log(this.echartData.order);
      });
    }
  },
  created() {
    this.getTableData();
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/home";
</style>

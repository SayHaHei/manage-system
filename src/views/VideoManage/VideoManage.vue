<template>
  <div>
    video-manage
  </div>
</template>

<script>
import VD from "../../components/video.js";
export default {
  data() {
    return {
      a: {
        b: {
          
        }
      }
    };
  },
  mixins: [VD],
  created() {
    console.log(this.a);
  }
};
</script>

<style lang="less" scoped></style>

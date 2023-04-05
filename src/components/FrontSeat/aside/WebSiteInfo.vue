<template>
  <!-- TODO:待详细说明 -->
  <aside id="websiteInfo">
    <div class="box">
      <h2 class="title">网站信息</h2>
      <p class="running_time">
        <span>运行时间:</span>
        <span>
          {{ dateArray[0] }} 天 {{ dateArray[1] }} 时 {{ dateArray[2] }} 分
          {{ dateArray[3] }} 秒
        </span>
      </p>
      <!-- <p class="view_count">
        <span></span>
        <span>4460</span>
      </p> -->
    </div>
  </aside>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const websiteRun = new Date("2023-03-17T00:00:00Z"); // 设置建站时间为UTC时间
const dateArray = reactive([0, 0, 0, 0]); // 直接初始化日期数组
const momxc = (): void => {
  const timeDiff = Date.now() - websiteRun.getTime();
  dateArray[0] = Math.floor(timeDiff / (24 * 60 * 60 * 1000)); // 计算天数
  dateArray[1] = Math.floor(
    (timeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  ); // 计算小时数
  dateArray[2] = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000)); // 计算分钟数
  dateArray[3] = Math.floor((timeDiff % (60 * 1000)) / 1000); // 计算秒数
};
// 执行
setInterval(momxc, 1000);
</script>

<style scoped lang="scss">
// 侧边栏
#websiteInfo {
  background-color: #32373d;
  border-radius: 15px;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 20px;
  .title {
    height: 50px;
    font-size: 22px;
    color: #4169e1;
  }
  p {
    color: rgba($color: #ffffff, $alpha: 0.8);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>

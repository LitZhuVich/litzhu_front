<template>
  <aside id="websiteInfo">
    <div class="box">
      <h2 class="title">网站信息</h2>
      <p class="running_time">
        <span>运行时间:</span>
        <span>当前时间。</span>
      </p>
      <!-- <p class="view_count">
        <span></span>
        <span>4460</span>
      </p> -->
    </div>
  </aside>
</template>

<script setup lang="ts"></script>

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

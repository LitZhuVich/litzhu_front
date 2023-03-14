<template>
  <aside id="notice">
    <div class="box">
      <h2 class="title">广告</h2>
      <p class="notice_text">我会努力做好一个网站的</p>
    </div>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
// 侧边栏
#notice {
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
  .notice_text {
    color: rgba($color: #ffffff, $alpha: 0.8);
  }
}
</style>

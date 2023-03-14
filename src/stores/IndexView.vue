<template>
  <div id="app">
    <div class="feature">
      <div class="banner">banner</div>
      <div class="recommend">
        <div class="recommend_title">title</div>
        <div class="recommend_item">1</div>
        <div class="recommend_item">2</div>
      </div>
    </div>
    <div class="articles">
      <h2 class="aritcle_title">文章</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, reactive } from "vue";
</script>

<style scoped lang="scss">
// 引入变量
@import "../assets/style.scss";
#app {
  margin: 0 auto;
  margin-top: 100px;
  width: 1500px;
  .feature {
    div {
      border-radius: 25px;
    }
    .banner {
      width: 100%;
      height: 450px;
      margin-bottom: 20px;
      background-color: #32373d;
      padding: 30px;
      box-sizing: border-box !important;
    }

    .recommend {
      width: 100%;
      height: 400px;
      display: grid;
      grid-template-columns: 1fr 2.5fr 2.5fr;
      column-gap: 20px;
      .recommend_title {
        padding: 30px;
        box-sizing: border-box !important;
        background-color: #32373d;
      }
      .recommend_item {
        padding: 30px;
        box-sizing: border-box !important;
        background-color: #32373d;
      }
    }
  }
}
</style>

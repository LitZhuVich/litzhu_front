<template>
  <!-- TODO:需要动态显示标签 -->
  <aside id="tags">
    <div class="box">
      <h2 class="title">标签</h2>
      <div class="tag_all">
        <div class="tag_item">
          <span class="shap">#</span>
          <span class="tagName">TypeSciprt</span>
          <span class="articleTotal">2</span>
        </div>
        <div class="tag_item">
          <span class="shap">#</span>
          <span class="tagName">GoLang</span>
          <span class="articleTotal">2</span>
        </div>
        <div class="tag_item">
          <span class="shap">#</span>
          <span class="tagName">Laravel</span>
          <span class="articleTotal">5</span>
        </div>
        <div class="tag_item">
          <span class="shap">#</span>
          <span class="tagName">TypeSciprt</span>
          <span class="articleTotal">2</span>
        </div>
        <div class="tag_item">
          <span class="shap">#</span>
          <span class="tagName">GoLang</span>
          <span class="articleTotal">2</span>
        </div>
        <div class="tag_item">
          <span class="shap">#</span>
          <span class="tagName">Laravel</span>
          <span class="articleTotal">5</span>
        </div>
        <div class="tag_item">
          <span class="shap">#</span>
          <span class="tagName">Laravel</span>
          <span class="articleTotal">5</span>
        </div>
        <div class="tag_item">
          <span class="shap">#</span>
          <span class="tagName">Laravel</span>
          <span class="articleTotal">5</span>
        </div>
      </div>
      <!-- TODO:显示更多标签，展现页面 -->
      <p class="tag_more">更多标签 ...</p>
    </div>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
// 侧边栏
#tags {
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
  .tag_all {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .tag_item {
      height: 30px;
      line-height: 30px;
      border-radius: 5px;
      display: inline-block;
      padding: 0 40px 0 10px;
      background-color: rgba($color: #000000, $alpha: 0.5);
      min-width: 60px;
      cursor: pointer;
      position: relative;
      margin-right: 5px;
      margin-bottom: 5px;
      &:hover {
        opacity: 0.8;
      }
      .shap {
        color: rgba($color: #ffffff, $alpha: 0.5);
        margin-right: 5px;
      }
      .tagName {
        color: rgba($color: #ffffff, $alpha: 0.8);
      }
      .articleTotal {
        position: absolute;
        right: 10px;
        color: #4169e1;
      }
    }
  }
  .tag_more {
    font-size: 16px;
    border-bottom: 2px solid #4169e1;
    color: rgba($color: #ffffff, $alpha: 0.8);
    padding-bottom: 5px;
    padding-right: 20px;
    cursor: pointer;
    display: inline-block;
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>

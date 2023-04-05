<template>
  <div class="content_item">
    <div class="content_image">
      <img
        src="https://cdn.staticaly.com/gh/LitZhuVich/blogcdn@master/img/user_tou.jpg"
        alt="图标正在加载..."
      />
    </div>
    <div class="content_main">
      <div class="content_top">
        <span class="content_title">Go</span>
        <p class="content_description">
          asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas
        </p>
      </div>
      <div class="content_userInfo">
        <div class="image">
          <img
            src="https://cdn.staticaly.com/gh/LitZhuVich/blogcdn@master/img/user_tou.jpg"
            alt="图标正在加载..."
          />
        </div>
        <span class="content_userInfo_name"> 404 </span>
        <span class="content_userInfo_createdDate"> 232323 </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import axios from "axios";

const getTagArticle = (): void => {
  try {
    axios.get(`http://litzhu.svvs.top/api/v1/article/recommend`);
  } catch (error: any) {
    console.log(error.message);
  }
};
</script>
<style lang="scss">
.content_item {
  background-color: #32373d;
  border-radius: 20px;
  display: grid;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-template-columns: repeat(1, minmax(0, 1fr));
  overflow: hidden;
  .content_image {
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content_main {
    transform: translateY(-25px);
    width: 100%;
    height: 100%;
    padding: 10px;
    padding-top: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .content_top {
      padding: 10px;
      .content_title {
        font-size: 40px;
        color: royalblue;
        text-shadow: 3px 3px 5px black;
        font-weight: bold;
        cursor: pointer;
      }
      .content_description {
        color: white;
        opacity: 0.8;
        height: 110px;
        line-height: 25px;
        overflow: hidden;
        word-wrap: break-word;
      }
    }
    .content_userInfo {
      color: white;
      display: flex;
      align-items: center;
      .image {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        overflow: hidden;
        border: 3px solid #32373d;
        margin-right: 5px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .content_userInfo_name {
        width: 100px;
      }
      .content_userInfo_createdDate {
        color: #ccc;
      }
    }
  }
}
</style>

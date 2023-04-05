<template>
  <div class="banner">
    <div
      class="banner_item animate__animated animate__fadeIn"
      v-for="(item, index) of articleContent"
      :key="item.id"
      @mouseover="changeInterval(true)"
      @mouseout="changeInterval(false)"
      v-show="index == bannerItem_index"
    >
      <div class="banner_image">
        <img :src="item.cover" alt="暂无图片" />
      </div>
      <div class="banner_content">
        <div class="content">
          <span class="banner_title" @click="goArticleDescription(item.id)">
            {{ item.title }}
          </span>
          <p class="text">
            {{ item.summary }}
          </p>
        </div>
        <div class="banner_userInfo">
          <div class="image">
            <img :src="articleUser.avater" />
          </div>
          <span class="banner_userInfo_name">{{ articleUser.username }}</span>
          <span class="banner_userInfo_createdDate">{{ item.created_at }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, Ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { buildProps } from "@vue/compiler-core";
const router = useRouter();
// 文章内容类型
interface articleContentType {
  id: number;
  cover: string;
  title: string;
  summary: string;
  created_at: string;
}
// 文章用户类型
interface articleUserType {
  user?: string;
  avater?: string;
  username?: string;
}
const articleContent: Ref<articleContentType[]> = ref([]);
const articleUser: Ref<articleUserType> = ref({});
// 获取文章
const getArticle = async (): Promise<void> => {
  try {
    const response = await axios.get(
      `http://litzhu.svvs.top/api/v1/article/banner`
    );
    articleContent.value = response.data.article;
    articleUser.value = response.data.article.map(
      (item: articleUserType) => item.user
    );
  } catch (error: any) {
    console.log(error.message);
  }
};
// 调用获取文章
getArticle();
// 前往网站详情页
const goArticleDescription = (id: number): void => {
  router.push({
    name: "articleId",
    params: {
      categoryName: "all",
      articleId: id,
    },
  });
};
// 轮播功能
let bannerItem_index: Ref<number> = ref(0);
let timer: any = null;
// 右按钮事件
const goLeft = (): void => {
  bannerItem_index.value--;
  if (bannerItem_index.value === 0) {
    bannerItem_index.value = articleContent.value.length;
  }
};
// 右按钮事件
const goRight = (): void => {
  bannerItem_index.value++;
  if (bannerItem_index.value === articleContent.value.length) {
    bannerItem_index.value = 0;
  }
};
// 轮播 事件
const play = (): void => {
  clearInterval(timer);
  timer = setInterval(() => {
    goRight();
  }, 10000);
};
// 启动
play();
// 鼠标事件
const changeInterval = (bool: boolean): void => {
  // 如果 鼠标移入 则停止定时器，否则开始定时器
  bool ? clearInterval(timer) : play();
};
</script>
<style lang="scss" scoped>
div {
  border-radius: 25px;
}
.banner {
  height: 450px;
  margin-bottom: 20px;
  position: relative;
  transition: all 2s;
  overflow: hidden;
  .banner_item {
    z-index: 99;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box !important;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: 450px;
    background: linear-gradient(to right, royalblue, 1%, #32373d);
    &:hover {
      transform: scale(1.01);
    }
    .banner_image {
      width: 100%;
      height: 100%;
      opacity: 0.9;
      img {
        height: 100%;
        width: 110%;
        object-fit: cover;
      }
    }

    .banner_content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 50px;
      width: 700px;
      z-index: 10;
      .content {
        .banner_title {
          color: royalblue;
          font-size: 70px;
          text-shadow: 5px 5px black;
          font-weight: bold;
          cursor: pointer;
        }
        .text {
          width: 100%;
          height: 140px;
          line-height: 30px;
          word-wrap: break-word;
          color: white !important;
          font-size: 20px;
          background-color: #32373d;
          padding: 5px 0;
          padding-left: 20px;
          max-height: 150px;
          overflow: hidden;
        }
      }
      .banner_userInfo {
        border-radius: 0;
        color: white;
        padding: 10px;
        display: flex;
        align-items: center;
        .image {
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
        .banner_userInfo_name {
          width: 100px;
        }
        .banner_userInfo_createdDate {
          color: #ccc;
        }
      }
    }
  }
}
</style>

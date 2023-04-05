<template>
  <HeaderView></HeaderView>
  <!-- TODO:关于本站 -->
  <div id="body">
    <article>
      <div class="info">
        <h1 class="title">{{ articleContent.title }}</h1>
        <div class="author">
          <div class="image">
            <img :src="articleContent.cover" :title="articleUser.username" />
          </div>
          <span>作者: {{ articleUser.username }}</span>
          <span>发布时间: {{ articleContent.created_at }}</span>
          <!-- <span>最后一次修改时间: {{ articleContent.updated_at }}</span> -->
          <span>
            共有: {{ formatNumber(articleContent.content?.length) }} 字
          </span>
          <!-- <span>阅读量: {{ articleContent.readingVolume }}</span> -->
          <!-- <span>收藏: {{ articleContent.readingVolume }}</span> -->
        </div>
        <!-- {{ articleContent }} -->
      </div>
      <div class="content" v-html="articleContent.content"></div>
    </article>
    <BlogProsonalInfo></BlogProsonalInfo>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref, Ref } from "vue";
import { useRoute } from "vue-router";
// markdown
// import hljs from "highlight.js";
// import "highlight.js/styles/atom-one-light.css"; // 样式

import HeaderView from "../components/FrontSeat/Layout/HeaderView.vue";
import BlogProsonalInfo from "../components/FrontSeat/aside/UserPersonalInfo.vue";
const route = useRoute();

const props = defineProps(["articleId"]);

const categoryName: Ref<string | string[]> = ref(route.params.categoryName);
// 文章类型
interface articleType {
  title?: string; // 标题
  cover?: string; // 图片
  content?: string; // 内容
  created_at?: Date;
}
// 用户类型
interface userType {
  username?: string;
}
const articleContent: Ref<articleType> = ref({});
const articleUser: Ref<userType> = ref({});
const getArticle = async (
  categoryName: string,
  articleId: number
): Promise<void> => {
  try {
    const response = await axios.get(
      `http://litzhu.svvs.top/api/v1/article/${categoryName}/${articleId}`
    );
    articleContent.value = response.data.article;
    articleUser.value = response.data.article.user;
  } catch (error: any) {
    console.log("获取文章错误:", error.message);
  }
};
// 位数转换
const formatNumber = (number: number | undefined): number | string => {
  const num = number || 0;
  return num > 1000 && num < 10000
    ? `${(num / 1000).toFixed(1)}k`
    : num >= 10000
    ? `${(num / 10000).toFixed(1)}w`
    : num;
};
// 默认调用
getArticle(categoryName.value.toString(), props.articleId);
</script>

<style lang="scss">
#body {
  max-width: 1200px;
  margin: 100px auto;
  display: grid;
  column-gap: 50px;
  grid-template-columns: minmax(0, 3fr) minmax(0, 1fr);
  color: #ffffff;

  // 文章主体
  article {
    .info {
      .title {
        height: 100px;
        line-height: 100px;
        // 将文字设置一个上限与一个下限
        font-size: clamp(16px, 16px + 3.5vw, 48px);
        text-shadow: 0 2px 2px rgb(0 0 0 / 50%);
      }
      .author {
        display: flex;
        align-items: center;
        height: 50px;
        color: rgba($color: #ffffff, $alpha: 0.6);
        margin-bottom: 10px;
        .image {
          float: left;
          height: 35px;
          width: 35px;
          overflow: hidden;
          border-radius: 50%;
          cursor: pointer;
          img {
            transition: all 0.5s;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        span {
          margin-left: 20px;
        }
      }
    }
    .content {
      width: 100%;
      padding: 30px;
      box-sizing: border-box;
      line-height: 26px;
      word-break: break-all;
      background-color: #373d43;
      border-radius: 15px;
    }
  }
}
</style>

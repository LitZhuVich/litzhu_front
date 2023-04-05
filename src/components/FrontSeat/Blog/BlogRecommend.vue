<template>
  <div class="recommend_item" v-for="item of articleContent" :key="item.id">
    <div class="recommend_item_image">
      <img :src="item.cover" />
    </div>
    <div class="recommend_item_content">
      <div class="main">
        <span class="recommend_item_title">{{ item.title }}</span>
        <p class="recommend_item_text">
          {{ item.summary }}
        </p>
      </div>
      <div class="recommend_item_userInfo">
        <div class="image">
          <img :src="articleUser.avater" />
        </div>
        <span class="recommend_item_userInfo_name">
          {{ articleUser.username }}
        </span>
        <span class="recommend_item_userInfo_createdDate">
          {{ item.created_at }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import axios from "axios";

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
const getArticle = async (): Promise<void> => {
  try {
    const response = await axios.get(
      `http://litzhu.svvs.top/api/v1/article/recommend`
    );
    articleContent.value = response.data.article;
    articleUser.value = response.data.article.map(
      (item: articleUserType) => item.user
    );
  } catch (error: any) {
    console.log(error.message);
  }
  // axios
  //   // 上线后端
  //   .get(`http://litzhu.svvs.top/api/v1/article/recommend`)
  //   .then((result) => {
  //     articleContent.value = result.data.article;
  //     result.data.article.forEach((item: any) => {
  //       articleUser.value = item.user;
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   });
};
getArticle();
</script>
<style lang="scss" scoped>
.recommend_item {
  height: 400px;
  width: 100%;
  border-radius: 25px;
  box-sizing: border-box !important;
  background-color: #32373d;
  display: grid;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
  .recommend_item_image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 95%;
      object-fit: cover;
    }
  }
  .recommend_item_content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    box-sizing: border-box;
    transform: translateY(-30px);
    .main {
      height: 220px;
    }
    .recommend_item_title {
      color: royalblue;
      font-size: 50px;
      text-shadow: 5px 5px 10px black;
      font-weight: bold;
      cursor: pointer;
    }
    .recommend_item_text {
      width: 100%;
      height: 100px;
      color: white;
      word-wrap: break-word;
      line-height: 32px;
      overflow: hidden;
    }
    .recommend_item_userInfo {
      border-radius: 0;
      color: white;
      padding: 10px;
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
          cursor: pointer;
        }
      }
      .recommend_item_userInfo_name {
        width: 100px;
        cursor: pointer;
      }
      .recommend_item_userInfo_createdDate {
        color: #ccc;
      }
    }
  }
}
</style>

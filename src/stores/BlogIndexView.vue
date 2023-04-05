<template>
  <HeaderView></HeaderView>
  <div id="blogBody">
    <aside>
      <WebSiteNotice></WebSiteNotice>
      <WebSiteInfo></WebSiteInfo>
    </aside>
    <main>
      <nav>
        <ul>
          <li v-for="(item, index) in categorys" :key="item.id">
            <router-link
              :to="{
                name: 'categoryName',
                params: {
                  categoryName: item.englishname,
                },
              }"
              active-class="active"
              @click="getCategoryId(item.englishname)"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
      <section>
        <BlogArticle
          v-for="(item, index) of articles"
          :key="item.id"
          :articlesItem="item"
        ></BlogArticle>
      </section>
    </main>
    <aside class="sticky">
      <UserPersonalInfo></UserPersonalInfo>
      <BlogTag></BlogTag>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { useRoute } from "vue-router";
import HeaderView from "../components/FrontSeat/Layout/HeaderView.vue";
import BlogArticle from "../components/FrontSeat/Blog/BlogArticle.vue";
import UserPersonalInfo from "../components/FrontSeat/aside/UserPersonalInfo.vue";
import BlogTag from "../components/FrontSeat/aside/BlogTag.vue";
import WebSiteNotice from "../components/FrontSeat/aside/WebSiteNotice.vue";
import WebSiteInfo from "../components/FrontSeat/aside/WebSiteInfo.vue";
import axios from "axios";
const route = useRoute();
// 分类类型
interface categoryType {
  id: number;
  englishname: string | string[];
  name: string;
}
// 文章类型
interface articleType {
  id: number;
}
// 存放分类的数组
const categorys: Ref<categoryType[]> = ref([]);
// 存放文章的数组
const articles: Ref<articleType[]> = ref([]);
// 获取所有分类
const getAllCategory = async (): Promise<void> => {
  try {
    const response = await axios.get("http://litzhu.svvs.top/api/v1/category");
    categorys.value = response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
// 通过分类名字获取文章
const getCategoryId = async (name: string | string[]): Promise<void> => {
  try {
    const response = await axios.get(
      `http://www.litzhuvxzvin.com/api/v1/category/${name}`
    );
    articles.value = response.data.article.map((item: string) => item);
  } catch (error: any) {
    console.log(error.message);
  }
};
// 调用显示所有分类
getAllCategory();
// 默认调用 全部(all)
getCategoryId(route.params.categoryName);
</script>

<style scoped lang="scss">
// 边框颜色
$borderColor: #373d43;
#blogBody {
  margin: 128px auto;
  max-width: 1500px;
  display: grid;
  grid-template-columns: 1.5fr 4fr 1.5fr;
  grid-gap: 50px;

  // 文章显示
  main {
    // height: 500px;
    border-radius: 15px;

    // 列表
    ul {
      width: 100%;
      border-bottom: 5px solid $borderColor;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: 50px;
      li {
        display: grid;
        align-content: center;
        justify-content: center;
        // cursor: pointer;
        box-sizing: border-box;
        &:hover {
          border-bottom: 5px solid royalblue;
          transform: translateY(3px);
        }
      }
      .active {
        color: royalblue;
      }
    }
    // 文章列表框
    section {
      display: grid;
      grid-row-gap: 10px;
    }
  }
  .sticky {
    height: 650px;
    position: sticky;
    top: 100px;
  }
}
</style>

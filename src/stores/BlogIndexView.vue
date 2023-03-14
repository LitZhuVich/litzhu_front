<template>
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
                  categoryName: item.name,
                },
              }"
              active-class="active"
              @click="getCategoryId(item.name)"
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
    <aside>
      <UserPersonalInfo></UserPersonalInfo>
      <BlogTag></BlogTag>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRoute } from "vue-router";
import BlogArticle from "../components/FrontSeat/Blog/BlogArticle.vue";
import UserPersonalInfo from "../components/FrontSeat/aside/UserPersonalInfo.vue";
import BlogTag from "../components/FrontSeat/Blog/BlogTag.vue";
import WebSiteNotice from "../components/FrontSeat/aside/WebSiteNotice.vue";
import WebSiteInfo from "../components/FrontSeat/aside/WebSiteInfo.vue";
import axios from "axios";
const route = useRoute();
// 存放分类的数组
let categorys: any[] = reactive([]);
// 存放文章的数组
let articles: any[] = reactive([]);
// 读取的是 phpStudy 的Nginx代理数据 (本地服务器)
const getAllCaategory = (): void => {
  axios
    .get("http://www.litzhuvxzvin.com/api/v1/category")
    .then((result) => {
      result.data.forEach((item: any) => {
        categorys.push(item);
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
// 调用显示所有分类
getAllCaategory();
// 通过分类名字获取文章
const getCategoryId = (name: string | string[]): void => {
  articles.length = 0;
  axios
    .get(`http://www.litzhuvxzvin.com/api/v1/article/${name}`)
    .then((result) => {
      result.data.article.forEach((item: any) => {
        articles.push(item);
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
// 默认调用 全部
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
}
</style>

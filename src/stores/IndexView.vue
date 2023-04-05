<template>
  <HeaderView></HeaderView>
  <div id="app">
    <!-- header -->
    <div class="feature">
      <!-- 轮播图 -->
      <BlogBanner></BlogBanner>
      <div class="recommend">
        <div class="recommend_title">文章精选</div>
        <!-- 文章精选 -->
        <BlogRecommend></BlogRecommend>
      </div>
    </div>
    <div class="articles">
      <h2 class="aritcles_title">文章</h2>
      <div class="articles_main">
        <div class="left">
          <div class="tab" :style="tabEnum ? 'height:auto;' : ''">
            <ul>
              <li
                :class="indexCategory == item.id ? 'active' : ''"
                @click="ShowCategoryArticle(item.id)"
                v-for="(item, index) of tags"
                :key="item.id"
              >
                {{ item.name }}
              </li>
            </ul>
            <div :class="tabEnum ? 'arrow all' : 'arrow'" @click="showAlltab">
              <img src="/向上.png" alt="" />
            </div>
          </div>

          <div class="content">
            <BlogIndexItem></BlogIndexItem>
            <BlogIndexItem></BlogIndexItem>
            <BlogIndexItem></BlogIndexItem>
            <BlogIndexItem></BlogIndexItem>
          </div>
        </div>
        <div class="right">
          <UserPersonalInfo></UserPersonalInfo>
          <BlogTag></BlogTag>
          <WebSiteNotice></WebSiteNotice>
          <WebSiteInfo></WebSiteInfo>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, Ref } from "vue";
import HeaderView from "../components/FrontSeat/Layout/HeaderView.vue";
import UserPersonalInfo from "../components/FrontSeat/aside/UserPersonalInfo.vue";
import BlogTag from "../components/FrontSeat/aside/BlogTag.vue";
import WebSiteNotice from "../components/FrontSeat/aside/WebSiteNotice.vue";
import WebSiteInfo from "../components/FrontSeat/aside/WebSiteInfo.vue";
import BlogRecommend from "../components/FrontSeat/Blog/BlogRecommend.vue";
import BlogBanner from "../components/FrontSeat/Blog/BlogBanner.vue";
import BlogIndexItem from "../components/FrontSeat/Blog/BlogIndexItem.vue";

// 判断是否点击了展示全部分类
const tabEnum: Ref<boolean> = ref(false);
const showAlltab = (): void => {
  tabEnum.value = !tabEnum.value;
};
// 接收全部分类
interface tag_type {
  id: number;
  name: string;
}
const tags: Ref<tag_type[]> = ref([]);
const getAllCategory = async (): Promise<void> => {
  try {
    const response = await axios.get("http://litzhu.svvs.top/api/v1/tag");
    tags.value = response.data.map((item: string) => item);
  } catch (error: any) {
    console.log(error.message);
  }
};
// 调用显示所有分类
getAllCategory();
// 点击需要展示的文章
const indexCategory: Ref<number> = ref(1);
const ShowCategoryArticle = (id: number): void => {
  indexCategory.value = id;
};
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

    .recommend {
      width: 100%;
      height: 400px;
      display: grid;
      grid-template-columns: 1fr 2.5fr 2.5fr;
      column-gap: 20px;
      .recommend_title {
        box-sizing: border-box !important;
        background-color: #32373d;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        border: 5px solid royalblue;
        color: royalblue;
      }
    }
  }
  .articles {
    width: 100%;
    margin-top: 100px;
    .aritcles_title {
      font-size: clamp(25px, 16px + 3.5vw, 48px);
      color: royalblue;
      cursor: pointer;
    }
    .articles_main {
      margin-top: 50px;
      display: grid;
      grid-template-columns: 5fr 1.5fr;
      column-gap: 50px;
      .left {
        width: 100%;
        .tab {
          width: 100%;
          height: 50px;
          overflow: hidden;
          background-color: #32373d;
          border-radius: 10px;
          margin-bottom: 50px;
          position: relative;
          ul {
            height: 100%;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            li {
              min-width: 60px;
              height: 35px;
              padding: 0 10px;
              background-color: #191b1e;
              border-radius: 5px;
              margin: 7px;
              line-height: 35px;
              text-align: center;
              cursor: pointer;
            }
            .active {
              color: royalblue;
            }
          }

          .arrow {
            position: absolute;
            right: 15px;
            top: 10px;
            transform: scale(0.6);
            transition: all 0.5s;
            cursor: pointer;
          }
          .all {
            transform: rotate(180deg) scale(0.6);
          }
        }
        .content {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-template-rows: repeat(3, minmax(0, 400px));
          row-gap: 30px;
          column-gap: 30px;
        }
      }
    }
  }
}
</style>

<template>
  <article>
    <router-link
      :to="{
        name: 'articleId',
        params: {
          articleId: props.articlesItem.id,
        },
      }"
      name="articleDescription"
    >
      <div class="image">
        <img :src="props.articlesItem.cover" title="文章简介图" />
      </div>
      <div class="content">
        <h2 class="title">{{ props.articlesItem.title }}</h2>
        <p class="summary">{{ props.articlesItem.summary }}</p>
        <div class="meta">
          <span class="articleCreate">
            发布于
            <span class="timeNumber">
              {{ props.articlesItem.created_at }}
            </span>
          </span>
          <div class="classification">
            <!-- TODO:用来确认文章类型 -->
            <span class="blogTab">
              <!-- {{ articleContent.articleContent.summary }} -->
              {{ categoryName }}
            </span>
          </div>
        </div>
      </div>
    </router-link>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
const props = defineProps(["articlesItem"]);
const route = useRoute();
// 当前文章的分类名
const categoryName = ref(route.params.categoryName);
</script>

<style scoped lang="scss">
// 文章阴影
$articleShadow: rgba(0, 0, 0, 0.4);
article {
  box-shadow: 0px 0px 5px $articleShadow;
  display: grid;
  border-radius: 25px;
  grid-template-rows: 400px;
  overflow: hidden;
  margin: 10px 0;

  a {
    display: grid;
    grid-template-rows: 2fr 1.7fr;

    .image {
      overflow: hidden;
      height: 100%;
      img {
        transition: all 0.5s;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .content {
      width: 100%;
      overflow: hidden;
      border-top: 5px solid $articleShadow;
      // background-color: #1c1e21;
      background-color: #373d43;
      box-sizing: border-box;
      padding: 0 20px;
      &:hover {
        background-color: #32373d;
      }
      .title {
        color: white;
        height: 60px;
        line-height: 60px;
      }
      .summary {
        height: 80px;
        word-wrap: break-word;
      }
      .meta {
        display: flex;
        justify-content: space-between;
        .articleCreate {
          .timeNumber {
            color: white;
            font-weight: bold;
          }
        }
        .classification {
          color: #4169e1;
          font-weight: bold;
        }
      }
    }
    &:hover .image img {
      transform: scale(1.2);
    }
  }
}
</style>

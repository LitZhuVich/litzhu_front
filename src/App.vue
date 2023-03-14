<template>
  <div>
    <!-- 浅色 -->
    <!-- <router-view data-theme="light-theme"></router-view> -->
    <!-- 暗色 -->
    <!-- <router-view data-theme="dark-theme"></router-view> -->

    <!-- header -->
    <HeaderView></HeaderView>
    <!-- main -->
    <router-view name="main"></router-view>
    <router-view name="articleDescription"></router-view>
    <router-view name="auth"></router-view>

    <!-- footer -->
  </div>
</template>

<script setup lang="ts">
import HeaderView from "./components/FrontSeat/Layout/HeaderView.vue";
/* matchMedia("(prefers-color-scheme: dark)").matches;
const switchNightMode = (): void => {
  let Mode = document.cookie.split(";")[0].split("=")[1];
  if (Mode == null || Mode == "undefined" || Mode == "") {
    // 判断是否处于暗色模式
    // if("")
    // if ($("body").hasClass("night")) {
    //   // 处于暗色模式，删除标签内night
    //   $("body").removeClass("night");
    //   // 添加标识符
    //   document.cookie =
    //     "DarkMode=0;path=/" + ";expires=" + cookiesExp.toGMTString();
    //   $("#nightMode")
    //     .removeClass("icon-yueliang")
    //     .addClass("icon-zhishifufeiqiapianicon-");
    // } else {
    //   // 不处于暗色模式，添加标签
    //   $("body").addClass("night");
    //   // 添加标识符
    //   document.cookie =
    //     "DarkMode=1;path=/" + ";expires=" + cookiesExp.toGMTString();
    //   $("#nightMode")
    //     .removeClass("icon-zhishifufeiqiapianicon-")
    //     .addClass("icon-yueliang");
    // }
  }
};
//检查当前主题模式和系统主题是否对应Start
// function checkNightMode() {
//   var Mode = document.cookie.split(";")[0].split("=")[1];
//   cookiesExp = new Date(new Date().setMonth(new Date().getMonth() + 1));
//   //存在暗色模式标识符，且Cookies中DarkMode值为1
//   if (Mode == 1) {
//     // 值为1：添加class="night"到body标签"
//     $("body").addClass("night");
//   }
//   //不存在暗色模式标识符情况下，是否需要启用暗色模式
//   else if (Mode == null || Mode == "undefined" || Mode == "") {
//     // 媒体查询，用户系统是否启动暗色模式
//     if (matchMedia("(prefers-color-scheme: dark)").matches) {
//       $("body").addClass("night");
//     }
//     // 媒体查询，用户系统是否启动亮色模式
//     else if (matchMedia("(prefers-color-scheme: light)").matches) {
//       $("body").removeClass("night");
//     }
//     // 时间判断，是不是到点了( ；´Д｀)
//     else if (new Date().getHours() >= 21 || new Date().getHours() < 7) {
//       $("body").addClass("night");
//     }
//   }
// }
//检查当前主题模式和系统主题是否对应End */
</script>

<style lang="scss">
// @import "./style.scss";
@import "./assets/style.scss";
.main {
  height: 100%;
  // @include base-color();
  // @include base-background();
}
</style>

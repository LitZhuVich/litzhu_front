<template>
  <header>
    <h1 class="logo">LitZhu</h1>
    <nav>
      <ul>
        <li>
          <router-link
            :to="{ name: 'index' }"
            active-class="active"
            name="main"
          >
            首页
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'blogs' }"
            active-class="active"
            name="blog"
          >
            博客
          </router-link>
        </li>
        <li class="classification parent">
          分类
          <ol>
            <li>项目</li>
            <li>Vue</li>
            <li>Laravel</li>
            <li>uni-app</li>
            <li>html5-css3</li>
            <li>javaScript</li>
            <li>typeScript</li>
            <li>go</li>
          </ol>
        </li>
        <li class="parent">
          工具箱
          <ol>
            <li>待办事项</li>
            <li>资源</li>
            <li>图库</li>
            <li>留言板</li>
          </ol>
        </li>
        <li>
          <router-link
            :to="{ name: 'about' }"
            active-class="active"
            name="blog"
          >
            关于
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="header_function">
      <label class="switchColors">
        <input type="checkbox" class="checkbox" />
      </label>
      <div>
        <button id="loginBtn" @click="login()">登录</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

// 前往登录页面
function login(): void {
  router.push({
    name: "login",
  });
}
</script>

<style scoped lang="scss">
// 登录按钮选中时的颜色
$loginBtnHover: rgba(0, 0, 0, 0.1);
$nav: 600px;

header {
  width: 100%;
  height: 80px;
  line-height: 80px;
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgb(227, 227, 227);
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 80px;
  justify-items: center;
  box-sizing: border-box;
  padding: 0 2.5rem;
  background-color: #1c1e21;
  z-index: 999;
  // LOGO
  .logo {
    font-size: 40px;
    color: #a2a2a2;
  }
  // 导航栏
  nav {
    width: $nav;

    ul {
      display: flex;
      justify-content: space-between;

      & > li {
        width: calc($nav / 5);
        font-size: 18px;
        cursor: pointer;
        // text-align: center;
        // nav中选中的
        .active {
          color: royalblue;
        }
        &:hover ol {
          display: block;
        }
      }

      ol {
        display: none;
        box-shadow: 1px 1px 5px 1px black;
        transform: translateY(-20px);
        background-color: rgba(0, 0, 0, 0.8);
        & > li {
          height: 35px;
          line-height: 35px;
          padding: 0 10px;
          box-sizing: border-box;

          &:hover {
            color: royalblue !important;
          }
        }
      }
    }
  }
  // 功能区
  .header_function {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .switchColors {
      display: block;
      width: 70px;
      height: 30px;
      border-radius: 15px;
      background-color: rgb(100, 91, 206);
      position: relative;
      overflow: hidden;
      margin: auto 0;
      .checkbox {
        visibility: hidden;

        &::after {
          visibility: visible;
          content: "";
          width: 15px;
          height: 15px;
          position: absolute;
          border-radius: 50%;
          left: 10px;
          top: 7.5px;
          background-color: rgb(108, 195, 210);
          cursor: pointer;
        }

        &:checked::after {
          background-color: rgb(100, 91, 206);
          margin-left: 35.5px;
          opacity: 0;
          animation: btnColor 0.5s 0.3s ease forwards;
        }

        &::before {
          visibility: visible;
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }

        &:checked::before {
          background-color: rgb(108, 195, 210);
          animation: bgColor 0.7s ease;
        }
      }
      // 登录按钮
    }

    // 切换主题颜色
    #loginBtn {
      width: 100px;
      height: 35px;
      cursor: pointer;
      border: 0;
      border-radius: 5px;
      background-color: #373d43;
      color: #a2a2a2;
      &:hover {
        background-color: $loginBtnHover;
      }
    }
  }
}
/* 按钮效果 */
@keyframes btnColor {
  0% {
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* 背景效果 */
@keyframes bgColor {
  /* 从按钮位置开始 */
  0% {
    width: 15px;
    height: 15px;
    position: absolute;
    left: 10px;
    top: 7.5px;
    border-radius: 50%;
    transform: scale(1.5);
  }

  100% {
    transform: scale(1.5, 3);
  }
}
</style>

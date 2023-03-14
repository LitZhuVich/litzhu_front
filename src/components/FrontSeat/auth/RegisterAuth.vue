<template>
  <div id="body">
    <div id="loginForm">
      <span class="title">注册</span>
      <ul>
        <li>
          <input
            type="text"
            name="username"
            id="username"
            v-model="username"
            placeholder="用户名"
          />
        </li>
        <li>
          <input
            type="text"
            name="password"
            id="password"
            v-model="password"
            placeholder="密码"
          />
        </li>
        <li>
          <button type="submit" id="loginBtn" @click="login()">注册</button>
        </li>
        <li class="operation">
          <router-link :to="{ name: 'login' }"> 登录 </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
let username = ref("");
let password = ref("");
const login = (): void => {
  axios
    .post(`http://www.litzhuvxzvin.com/api/v1/store`, {
      username: username.value,
      password: password.value,
    })
    .then((result) => {
      console.log("注册成功");
    })
    .catch((err) => {
      alert("注册失败");
      console.log(err.message);
      console.log("注册失败");
    });
};
</script>

<style scoped lang="scss">
// 输入框选中时的颜色
$inputHoverColor: #abacff;
// 背景颜色
$backgroundColor: linear-gradient(-200deg, #e3c5eb, #a9c1ed);
// 输入框宽度
$inputWitdh: 300px;
// 表单宽度
$formWidth: 400px;
// 表单高度
$formHeight: 400px;
#body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  // background: $backgroundColor;
  border-radius: 15px;
}
// 登录内容
#loginForm {
  width: $formWidth;
  height: $formHeight;
  border: 1px solid #ccc;
  border-radius: 50px;
  background-color: white;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-size: 40px;
    color: $inputHoverColor;
  }
  // 登录表单
  ul {
    width: 100%;
    height: calc($formWidth / 2);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    li {
      width: $inputWitdh;
      input {
        width: 100%;
        height: calc($formWidth / 10);
        border: 1px solid#ccc;
        border-radius: 5px;
        padding: 0 10px;
        box-sizing: border-box;
        &:hover {
          border-color: $inputHoverColor;
        }
      }
      #loginBtn {
        width: 100%;
        height: calc($formWidth / 10);
        border: 1px solid #ccc;
        background: $backgroundColor;
        border-radius: calc($formWidth / 10 / 2);
        letter-spacing: 10px;
        color: white;
        cursor: pointer;
        font-size: 20px;
      }
    }
    .operation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: $inputWitdh;
      a {
        &:hover {
          color: $inputHoverColor;
        }
      }
    }
  }
}
</style>

<template>
  <div id="app">
    <h1 class="title">About</h1>
    <p>welcome to LitZhuWebSite</p>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, reactive } from "vue";
</script>

<style scoped lang="scss">
#app {
  height: 100vh;
  display: grid;
  color: #a2a2a2;
  place-content: center;
  .title {
    font-size: 66px;
    margin: 50px 0;
    text-align: center;
  }
  p {
    text-align: center;
    margin: 50px 0;
    font-size: 33px;
  }
}
</style>

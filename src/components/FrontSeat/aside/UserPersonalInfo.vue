<template>
  <!-- TODO:需要动态显示 ，用户登录则显示用户信息，否则显示自己的信息-->
  <aside id="userInfo" class="aside">
    <div class="box">
      <div class="UserDescription">
        <div class="userImage">
          <img
            src="https://cdn.staticaly.com/gh/LitZhuVich/blogcdn@master/img/user_tou.jpg"
            title="点击跳转用户信息"
          />
        </div>
        <h2 class="userName">Litzhu</h2>
      </div>
      <div class="userContact">
        <ul class="mine">
          <li>
            <a href="javascript:;"><img src="/github.png" alt="" /></a>
          </li>
          <li>
            <a href="javascript:;"><img src="/qq.png" alt="" /></a>
          </li>
          <li>
            <a href="javascript:;"><img src="/wx.png" alt="" /></a>
          </li>
          <li>
            <a href="javascript:;"><img src="/bilibili.png" alt="" /></a>
          </li>
        </ul>
        <ul class="articleInfo">
          <li>
            <span class="number">3</span>
            <span class="title">文章</span>
          </li>
          <li>
            <span class="number">2</span>
            <span class="title">评论与回复</span>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
// 侧边栏
#userInfo {
  height: 350px;
  width: 100%;
  background-color: #32373d;
  overflow: hidden;
  border-radius: 15px;

  z-index: 10;
  .box {
    height: calc(100% - 50px);
    width: calc(100% - 10px);
    background-color: rgba($color: #ffffff, $alpha: 0.1);
    margin: 45px 5px auto auto;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    .UserDescription {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translateY(-30px);
      .userImage {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        border: 8px solid #32373d;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .userName {
        font-size: 30px;
        color: rgba($color: #ffffff, $alpha: 1);
      }
    }
    .userContact {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .mine {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        li {
          &:hover {
            opacity: 0.5;
          }
        }
      }
      .articleInfo {
        height: 50%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        li {
          height: 30%;
          font-size: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          .number {
            color: #4169e1;
          }
          .title {
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>

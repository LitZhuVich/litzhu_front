import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { App } from "vue";

const routes: RouteRecordRaw[] = [
  {
    // 显示网站首页
    path: "/",
    name: "index",
    components: {
      main: () => import("../stores/IndexView.vue"),
    },
  },
  {
    // 显示博客首页
    path: "/blogs",
    redirect: "/blogs/all",
    name: "blogs",
    components: {
      main: () => import("../stores/BlogIndexView.vue"),
    },
    // 博客首页可以根据分类名来获取来分类的文章
    children: [
      {
        path: ":categoryName",
        name: "categoryName",
        props: true,
        components: {},
      },
    ],
  },
  {
    // 文章详情页
    path: "/blogs/:categoryName/:articleId",
    name: "articleId",
    props: true,
    components: {
      articleDescription: () => import("../stores/BlogDescriptionView.vue"),
    },
  },
  {
    // 关于网站
    path: "/about",
    name: "about",
    components: {
      main: () => import("../stores/AboutView.vue"),
    },
  },
  {
    // 登录页面
    path: "/login",
    name: "login",
    components: {
      auth: () => import("../components/FrontSeat/auth/LoginAuth.vue"),
    },
  },
  {
    // 注册页面
    path: "/register",
    name: "register",
    components: {
      auth: () => import("../components/FrontSeat/auth/RegisterAuth.vue"),
    },
  },
];

// 创建路由
const router = createRouter({
  // 使用历史路由
  history: createWebHistory(),
  routes, // 路由配置
});

// 封装初始化前台路由
export const initFrontSeatRouter = (app: App<Element>) => {
  app.use(router);
};

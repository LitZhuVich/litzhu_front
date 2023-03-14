import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { App } from "vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "index",
    components: {
      main: () => import("../stores/IndexView.vue"),
    },
  },
  {
    path: "/blogs",
    redirect: "/blogs/全部",
    name: "blogs",
    components: {
      main: () => import("../stores/BlogIndexView.vue"),
    },
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
    path: "/blogs/:categoryName/:articleId",
    name: "articleId",
    props: true,
    components: {
      articleDescription: () => import("../stores/BlogDescriptionView.vue"),
    },
  },
  {
    path: "/about",
    name: "about",
    components: {
      main: () => import("../stores/AboutView.vue"),
    },
  },
  {
    path: "/login",
    name: "login",
    components: {
      auth: () => import("../components/FrontSeat/auth/LoginAuth.vue"),
    },
  },
  {
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

import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../layout/AppLayout.vue";
import Hello from "../components/HelloWorld.vue";
import Test from "../components/TestPage.vue";
import User from "../components/UserPage.vue";
import Other from "../components/Others.vue";
const routes = [
  {
    path: "/",
    name: "AppLayout",
    component: AppLayout,
    children: [
      {
        path: "",
        name: "home",
        component: Hello,
      },
      {
        path: "/test",
        name: "test",
        component: Test,
      },
      {
        path: "/user",
        name: "user",
        component: User,
      },
      {
        path: "/other",
        name: "other",
        component: Other,
      },
      //   {
      //     path: "/user",
      //     name: "用户管理",
      //     component: () => import("@/manage/UserManage/UserManage.vue"),
      //   },
    ],
    
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../components/Carousel.vue"),
  }
];
// createRouter创建路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// 最后导出。es6的模块化方式
export default router;

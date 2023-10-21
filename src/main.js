import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import ElementPlus from "element-plus";
import "./assets/index.css";
import { createPinia } from "pinia";
import "@popperjs/core";
import Antd from "ant-design-vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "element-plus/theme-chalk/display.css";
import "@/assets/test.scss/";
import STable from "@surely-vue/table";
import "@surely-vue/table/dist/index.less";
import JwChat from "jwchat";
const app = createApp(App);

app
  .use(router)
  .use(ElementPlus)
  .use(createPinia)
  .use(Antd)
  .use(STable)
  .use(JwChat);
app.mount("#app");

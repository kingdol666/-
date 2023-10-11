import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import ElementPlus from "element-plus";
import "./assets/index.css";
import { createPinia } from "pinia";
import "@popperjs/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "element-plus/theme-chalk/display.css";
import "@/assets/test.scss/";
const app = createApp(App);

app.use(router).use(ElementPlus).use(createPinia);

app.mount("#app");

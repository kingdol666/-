import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";
const app = createApp(App);

app.use(router).use(ElementPlus).use(createPinia);

app.mount("#app");

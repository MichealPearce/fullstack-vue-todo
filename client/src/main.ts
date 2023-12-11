import { createApp } from "vue";
import App from "./App.vue";
import { createRouter } from "vue-router/auto";
import { createWebHistory } from "vue-router/auto";

const router = createRouter({
	history: createWebHistory(),
});

createApp(App).use(router).mount("#app");

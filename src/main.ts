// Core
import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";

// Modules
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";

// Global CSS
import "@/assets/scss/index.scss";

// Create App
const app = createApp(App);

// Use Modules
app.use(PerfectScrollbar);
app.use(router);

// Mount
app.mount("#app");

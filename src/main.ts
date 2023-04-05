import { createApp } from "vue";
import "./assets/style.scss";
import "animate.css";
import App from "./App.vue";
import { initFrontSeatRouter } from "./router/FrontSeatRouter";
const app = createApp(App);
initFrontSeatRouter(app);
app.mount("#app");

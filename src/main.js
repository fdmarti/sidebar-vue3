import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

import "boxicons";
import "../src/assets/base.css";

app.use(router);
app.use(store);

app.mount("#app");

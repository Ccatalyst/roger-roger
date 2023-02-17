import { createApp } from "vue";
import App from "./App.vue";
import { VueFire, VueFireAuth } from "vuefire";
import { createRouter, createWebHashHistory } from "vue-router";
import { firebaseApp } from "./firebase";
import HomePage from "./components/Home-Page";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [{ path: "/", component: HomePage }],
});
const app = createApp(App);
app.use(VueFire, {
	firebaseApp,
	modules: [VueFireAuth()],
});
app.use(router);

app.mount("#app");

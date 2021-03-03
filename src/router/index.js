import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // 采用这种写法可以保证页面优化速度
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
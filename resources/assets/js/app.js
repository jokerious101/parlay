require("./bootstrap");

import Vue from "vue";

import store from "./store/index";

Vue.component("matches", require("../components/match/Matches.vue").default);
Vue.component("dashboard", require("../components/dashboard/dashboard.vue").default);

const app = new Vue({
    el: "#app",
    store
});

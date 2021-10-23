require("./bootstrap");

import Vue from "vue";
import Vuex from "vuex";

import store from "./store/index";

Vue.use(Vuex);

Vue.component("login", require("../components/auth/Login.vue").default);
Vue.component("register", require("../components/auth/Register.vue").default);
Vue.component("matches", require("../components/match/Matches.vue").default);
Vue.component("createteam", require("../components/dashboard/CreateTeam.vue").default);
Vue.component('createleague', require("../components/dashboard/CreateLeague.vue").default);
Vue.component('leagues', require("../components/dashboard/League.vue").default);
Vue.component('teams', require("../components/dashboard/Team.vue").default);
Vue.component('users', require("../components/dashboard/User.vue").default);

const app = new Vue({
    el: "#app",
    store
});

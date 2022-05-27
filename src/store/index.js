import Vue from "vue";
import Vuex from "vuex";
import homepage from "./homepage"
import project from "./project"

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    homepage: homepage,
    project: project,
  }
});

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMoment from "vue-moment";
import moment from "moment-timezone";

Vue.use(VueMoment, {
  moment,
});

// VUEPR SLIDE

// AXIOS
import axios from "axios";
window.axios = axios;
const accessToken = localStorage.getItem("auth_token");
if (accessToken) {
  console.log(accessToken)
  axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
}
axios.defaults.baseURL = "https://www.saireports.swisscontact.org/admin/public/api/v1/";
window.baseEnv = "https://www.saireports.swisscontact.org/admin/public/api/v1/"


require('./assets/css/all.min.css');
require('./assets/css/bootstrap.min.css');
require('./assets/css/home.css');
require('./assets/css/style.css');
require('./assets/css/responsive.css');
//
Vue.use(BootstrapVue)
Vue.use(VueLodash, { name: 'custom' , lodash: lodash })
new Vue({
  router,
  store,
  vuetify,
  BootstrapVue,
  IconsPlugin,
  render: h => h(App)
}).$mount('#app')

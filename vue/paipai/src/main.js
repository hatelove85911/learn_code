// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueAxios, axios);

// axios defaults
axios.defaults.baseURL = 'https://paipai-0efd.restdb.io/rest/';
axios.defaults.headers['Content-Type'] = "application/json";
axios.defaults.headers['x-apikey'] = "59631597afce09e87211eadb";
axios.defaults.headers['cache-control'] = "no-cache";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

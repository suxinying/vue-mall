import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from './env'
axios.defaults.baseURL = env.baseURL;
axios.defaults.timeout = 8000;
axios.interceptors.response.use(response => {
  let result = response.data;
  if(result.status === 0){
    return result.data;
  }else if(result.status === 10){
    window.location.href = '/#/login';
  }else {
    alert(result.msg);
  }
})
Vue.config.productionTip = false
Vue.use(VueAxios,axios)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

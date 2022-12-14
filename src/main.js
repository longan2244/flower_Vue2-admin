import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false
Vue.use(Vant);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue';
import './plugins/vuetify';
import i18n from './plugins/i18n';
import '@/plugins/veevalidate';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import './registerServiceWorker';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

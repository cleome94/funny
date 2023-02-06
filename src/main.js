import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
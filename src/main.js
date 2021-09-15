import 'core-js/stable'
import Vue from 'vue'
import App from './App.vue'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import '@/scss/style.scss';

Vue.config.productionTip = false
Vue.use(CoreuiVue);

new Vue({
  icons,
  render: h => h(App),
}).$mount('#app')

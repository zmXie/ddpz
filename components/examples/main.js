import Vue from 'vue'
import App from './App.vue'
import zmLib from '../lib/components.umd.min'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(zmLib);
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app')

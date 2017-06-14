// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueBar from 'vuebar'
import Mock from './api/mock/mock'
Mock.bootstrap()

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueBar)
Vue.component('icon', Icon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

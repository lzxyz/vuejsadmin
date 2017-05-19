// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// 导入公共组件
import AppHeader from '@/components/common/AppHeader'
import AppFooter from '@/components/common/AppFooter'
import LeftMenu from '@/components/common/LeftMenu'

Vue.config.productionTip = false

// 注册公用组件
Vue.component('app-header', AppHeader)
Vue.component('app-footer', AppFooter)
Vue.component('left-menu', LeftMenu)

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

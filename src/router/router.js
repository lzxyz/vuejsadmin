import Vue from 'vue'
import Router from 'vue-router'
// 导入公共组件
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import LeftMenu from '@/components/common/left-menu'

// 导入页面
import LoginPage from '@/pages/Login'
import IndexPage from '@/pages/Index'

Vue.use(Router)

// 注册公用组件
Vue.component('diy-header', { template: Header })
Vue.component('footer', { template: Footer })
Vue.component('left-menu', { template: LeftMenu })

// 定义后台路由
const routes = [
  { path: '/', component: IndexPage },
  { path: '/Login', component: LoginPage },
  { path: '/Index', component: IndexPage }
]

export default new Router({
  // 启用H5路由
  mode: 'history',
  routes: routes
})

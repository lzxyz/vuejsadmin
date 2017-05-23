import Vue from 'vue'
import Router from 'vue-router'

// 导入页面
import AdminTpl from '@/template/Admin'
import LoginPage from '@/pages/Login'
import IndexPage from '@/pages/Index'
import SystemLog from '@/pages/SystemLog'
import WebSite from '@/pages/WebSite'

Vue.use(Router)

// 定义后台路由
const routes = [
  { path: '/Login', component: LoginPage },
  { path: '/',
    component: AdminTpl,
    children: [
      { path: '/Index', component: IndexPage },
      { path: '/SystemLog', component: SystemLog },
      { path: '/WebSite', component: WebSite }
    ]
  }
]

export default new Router({
  // 启用H5路由
  mode: 'history',
  routes: routes
})
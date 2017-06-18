import axios from 'axios'

// 请求基础配置
axios.defaults.timeout = 5000
// 配置接口地址
axios.defaults.baseURL = '/Api'

// 登录
export const login = params => {
  return axios.post('/Login', params).then(res => {
    console.log(res)
    console.log(res.status)
    return res.data
  }).catch(error => { console.log(error) })
}
// 用户列表
export const UserList = params => {
  return axios.post('/User/list', params)
}

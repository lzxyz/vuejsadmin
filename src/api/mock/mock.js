import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { UserInfo, UserList } from './data/data'

export default {
  // 初始化
  bootstrap () {
    let mock = new MockAdapter(axios, { delayResponse: 2000 })

    // 登录
    mock.onPost('/Login').reply(function (config) {
      return [200, UserInfo]
    })

    // 用户列表
    mock.onPost('/User/list').reply(function (config) {
      return [200, UserList]
    })
  }
}

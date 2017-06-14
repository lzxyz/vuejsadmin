import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { UserInfo } from './data/data'

export default {
  // 初始化
  bootstrap () {
    let mock = new MockAdapter(axios)

    // 登录
    mock.onPost('/Login').reply(function (config) {
      return [200, UserInfo]
    })
  }
}

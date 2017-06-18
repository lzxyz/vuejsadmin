import Mock from 'mockjs'

var Random = Mock.Random
const UserInfo = {
  id: 1,
  username: 'admin',
  password: '123456',
  realname: 'DIY',
  email: '394028924@qq.com'
}

// 用户列表
const UserList = Mock.mock({
  datalist: [],
  total: Random.integer(100, 200),
  page: Random.integer(1, 10)
})
let max = Random.integer(100, 1000)
for (var i = max - 10; i < max; i++) {
  UserList['datalist'].push(Mock.mock({
    id: i,
    uid: Random.guid(),
    username: Random.first(true),
    email: Random.email(true),
    reg_ip: Random.ip(),
    reg_time: Random.datetime('yyyy-MM-dd HH:mm:ss'),
    'channel|1': ['IOS', 'Android', 'Web', 'WeChat', 'Mobile'],
    login_ip: Random.ip(),
    login_time: Random.datetime('yyyy-MM-dd HH:mm:ss')
  }))
}
export { UserInfo, UserList }

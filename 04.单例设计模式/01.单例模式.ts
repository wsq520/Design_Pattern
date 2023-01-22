class LoginModal {

}

// 一个系统的登录框只需要创建一个即可 不需要创建多个
// 像vue React 的 状态管理库也是只需要创建一个 创建多个反而会影响数据的使用 出错

// 浪费性能
const page1 = new LoginModal()
const page2 = new LoginModal()

class Store {

}
// 多个store反而不方便管理
const store1 = new Store()
const store2 = new Store()

export {}
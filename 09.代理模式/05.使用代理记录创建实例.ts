class User {
  name: string

  constructor(name: string) {
    console.log('user构造器被执行')
    this.name = name
  }
}

const userList = new Set()

const userProxy = new Proxy(User, {
  construct(...args) {
    console.log('代理方法被执行') 
    //  Reflect.construct 实际上会调用类 User的构造器
    const user = Reflect.construct(...args)
    userList.add(user)
    return user
  }
})

const u1 = new userProxy('hhh')
const u2 = new userProxy('ggg')
console.log(userList)

export { }
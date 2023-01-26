// 1.捕获器不变式
const obj = {
  x: 100,
  y: 999
}

Object.defineProperty(obj, 'y', {
  value: 985,
  writable: false,
  configurable: false
})

const proxy = new Proxy(obj, {
  get() {
    return 'ababa'
  }
})

console.log(proxy.x)
// 访问属性 y 报错
// 'get' on proxy: property 'y' is a read-only and non-configurable data property on the proxy target 
//  but the proxy did not return its actual value (expected '985' but got 'ababa')

// 原因： 属性 y 是不可以重写、不可以配置的，而在代理中触发get时都是返回'abc'不符合属性描述符的约束
// console.log(proxy.y)

// 2.this的指向
const user = {
  name: 'hhh',
  getName() {
    console.log(this) // this是在执行时绑定
    return this.name
  }
}

const userProxy = new Proxy(user, {})

user.getName() // this是对象obj
userProxy.getName() // this是一个Proxy对象

export { }
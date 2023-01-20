// 工厂模式：一般是指一个函数或者一个类
// 解决 代码复用、逻辑封装 问题


class Product {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

// 工厂
class Creator {
  create(name: string) {
    return new Product(name)
  }
}

const creator = new Creator()

const p1 = creator.create('p1')
const p2 = creator.create('p2')

export { }

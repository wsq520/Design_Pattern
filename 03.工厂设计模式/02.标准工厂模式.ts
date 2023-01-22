interface IProduct {
  name: string
  fn1: () => void
  fn2: () => void
}

class Product1 implements IProduct {
  name: string
  constructor(name: string) {
    this.name = name
  }

  fn1() {
    alert('fn1')
  }

  fn2() {
    alert('fn2')
  }
}

class Product2 implements IProduct {
  name: string
  constructor(name: string) {
    this.name = name
  }

  fn1() {
    alert('fn1')
  }

  fn2() {
    alert('fn2')
  }
}

// 工厂
class Creator {
  // 一个类实现IProduct接口都可以作为create函数的返回值
  create(type: string, name: string): IProduct {
    if (type === 'p1') {
      return new Product1(name)
    }
    if (type === 'p2') {
      return new Product2(name)
    }
    throw new Error('Invaild type')
  }
}

const creator = new Creator()

const p1 = creator.create('p1', 'p1')
const p2 = creator.create('p2', 'p2')

export { }



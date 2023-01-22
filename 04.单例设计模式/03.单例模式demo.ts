class SingleTon {
  private static instance: SingleTon | null
  name: string

  // 构造器函数设为私有的 在外面不能执行new操作来实例化对象
  private constructor(name: string) {
    this.name = name
  }

  static getInstance(name: string): SingleTon {
    if (SingleTon.instance === null) {
      SingleTon.instance = new SingleTon(name)
    }
    return SingleTon.instance
  }
}

const s1 = SingleTon.getInstance('hhh')
const s2 = SingleTon.getInstance('hhh')
// s1 和 s2 获取的都是同一个对象
console.log(s1 === s2)

export { }
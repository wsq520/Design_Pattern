class Foo {
  name: string
  constructor(name: string) {
    this.name = name
  }
  getName() {
    return this.name
  }

  // 对于静态方法和属性都是在类上定义的
  // 静态方法中的this是类的本身
  static flag: number = 123
  static getFlag() {
    console.log(this)    
    return this.flag
  }
}

const f1 = new Foo('hhhh')
console.log(f1.getName())
console.log(Foo.flag)
console.log(Foo.getFlag())


export { }
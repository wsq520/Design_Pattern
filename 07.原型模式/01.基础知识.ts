// class 是 function的语法糖
class Foo {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  getName() {
    return this.name
  }
}
const f1 = new Foo('f1', 10)
console.log(Foo.prototype)
// @ts-ignore
console.log(f1.__proto__)
// @ts-ignore
console.log(Foo.prototype === f1.__proto__)
console.log(f1.getName())

export { }
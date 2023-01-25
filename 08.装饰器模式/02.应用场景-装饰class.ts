// @ts-nocheck
function testable(value: boolean) {
  return function(target: any) {
    target.isTestable = value
  }
}

// 可以看作装饰器工厂函数
@testable(true) // 装饰器语法 等价于 testable(true)(Foo)
class Foo {
  static isTestable?: boolean
}

console.log(Foo.isTestable)

export { }
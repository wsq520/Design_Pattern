// @ts-nocheck
function readOnly(target: any, key: string, desc: PropertyDescriptor) {
  console.log(target)
  console.log(key)

  desc.writable = false
}

function configurable(val: boolean) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    desc.configurable = val
  }
}

class Foo {
  name = 'hhh'
  age = 20

  @readOnly
  getName() {
    return this.name
  }

  @configurable(true)
  getAge() {
    return this.age
  }
}

const f = new Foo()

// 报错：Cannot assign to read only property 'getName' of object '#<Foo>'
// f.getName = () => {
//   console.log('啦啦啦')
// }

console.log(Object.getOwnPropertyDescriptor(f.__proto__, 'getAge'))

export { }
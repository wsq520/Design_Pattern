const obj = {
  name: 'obj'
}

// 获取属性描述符
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
console.log(Object.getOwnPropertyDescriptors(obj))

// 设置属性
// 通过Object.defineProperty来添加属性 默认情况下属性描述符均为false
Object.defineProperty(obj, 'age', {
  value: 20,
  // writable: true,
  // enumerable: true
})
console.log(obj)

// 通过字面量方式添加的属性 默认情况下属性描述符均为true
let obj2 = { a: 10 }
console.log(Object.getOwnPropertyDescriptors(obj2))

Object.defineProperty(obj, 'y', {
  value: 200,
 
  // get() {
  //   return this.value
  // },
  // set(newValue) {
  //   this.value = newValue
  // }
})
// @ts-ignore
console.log(obj.y)
console.log(Object.getOwnPropertyDescriptor(obj, 'y'))
// 属性 y 没有设置value 
console.log(obj)

export { }
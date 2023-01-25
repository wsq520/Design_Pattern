const obj = {
  name: 'obj'
}

const obj1 = Object.create(obj)

console.log(obj1.__proto__)

// 面试题: {} 和 Object.create({}) 的区别
// {} 的隐式原型指向 Object.prototype
// Object.create({})返回的值(即一个对象) 其隐式原型指向 {}

export { }
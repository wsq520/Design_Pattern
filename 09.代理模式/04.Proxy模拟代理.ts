const star = {
  name: '杨幂',
  age: 18,
  phone: '199888',
  price: 0
}

const agent = new Proxy(star, {
  get(target, key) {
    if (key === 'phone') {
      return '123333' // 返回的是经纪人的电话
    }
    if (key === 'price') {
      return 100 * 10000
    }
    return Reflect.get(target, key) // 实际上等价于 return target[key]
  },
  // @ts-ignore
  // set 只针对 price 属性设置
  set(target, key, value) {
    if (key === 'price') {
      if (value < 100 * 10000) {
        throw new Error('价格太低了')
      } else {
        console.log('合作愉快')
        return Reflect.set(target, key, value)
      }
    }
  }
})

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)
agent.price = 99999999

export { }
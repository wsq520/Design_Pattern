const b = Symbol('b')
const obj = {
  a: 10,
  [b]: 20
}

for(let k in obj) {
  console.log(k)
}

console.log(Object.keys(obj))
console.log(Object.getOwnPropertyDescriptors(obj))

// 单独拿到类型为Symbol的key
console.log(Object.getOwnPropertySymbols(obj))

// 所有类型的key都拿到
console.log(Reflect.ownKeys(obj))

export { }
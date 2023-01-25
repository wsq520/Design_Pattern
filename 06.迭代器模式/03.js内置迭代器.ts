const arr = [1, 2, 3, 4, 5]

// 所有的有序结构都有 Symbol.iterator 方法获取迭代器
const iterator = arr[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

const map = new Map()
map.set('k1', 'v1')
map.set('k2', 'v2')

const mapIterator = map[Symbol.iterator]()
console.log(mapIterator.next())
console.log(mapIterator.next())
console.log(mapIterator.next())

const values = map.values()
const valuesIterator = values[Symbol.iterator]()
console.log(valuesIterator.next())
console.log(valuesIterator.next())
console.log(valuesIterator.next())


export { }
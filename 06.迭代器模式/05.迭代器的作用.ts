const arr = [1, 2, 3, 4, 5]

// 1.for...of 是迭代器 背后原理就是next()的调用 
for (let item of arr) {
  // console.log(item)
}

// 2.数组的解构、拓展运算符
const [n1, n2] = arr
console.log(n1, n2)

// 解构可以运用于任何实现了迭代器的结构
const set = new Set([100, 200, 300])
const [s1, s2] = set
console.log(s1, s2)
console.log([...arr])
console.log([...set])

// 3.Array.from
// 参数1：想要转换成数组的伪数组对象或可迭代对象
console.log(Array.from('abcdefg'))
console.log(Array.from('abcdefg', (item) => {
  console.log(item)
  return item + '123'
}))

export { }
const arr = [1, 2, 3, 4, 5]
const length = arr.length

// 此情况下 数组过多的信息被公开了 知道数组长度、知道如何访问数组元素
for (let i = 0; i < length; i++) {
  console.log(arr[i])
}

// 简单的迭代器
const arr2 = [1, 2, 3, 4]
arr2.forEach(item => {
  console.log(item)
})

// 迭代器：
// 1.顺序访问有序结构
// 2.不知道数据的长度和内部结构
// 3.高内聚、低耦合

export { }
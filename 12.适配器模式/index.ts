// 比如服务器返回的对象格式不适合使用 需要转换格式

const res = [
  {name: 'jjj', age: 19},
  {name: 'uuj', age: 22},
  {name: 'kkj', age: 42}
]

// data才是最终需要使用的数据 (类似于Vue中的计算属性来转换数据用来遍历渲染)
const data = res.map(item => item.name)

export { }
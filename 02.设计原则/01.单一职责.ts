const n = 100, m = 90

const promise = new Promise((resolved, reject) => {
  if (n > m) {
    resolved('aaa')
  } else {
    reject('error')
  }
})

promise.then(res => {
  // 这里做一件事 做完把结果return
  return res
}).then(res => {
  // 这里再做一件事 做完return
  return res
}).catch(e => {
  console.log(e)
})

// 这样子每个then处理一种逻辑 遇到新的需求就加多一个then来处理 而不是把所有处理需求的逻辑堆积到一个then里

export { }
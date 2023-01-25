function* genNums() {
  yield 10
  yield 20
  yield 30
}

// 生成器返回值是一个迭代器
const numsIterator = genNums()
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())

function* genNums2() {
  // yield* 后面跟着的是一个有序结构(即实现了Symbol.iterator迭代器的结构)
  yield* [1, 2, 3]
}

// 生成器返回值是一个迭代器
const numsIterator2 = genNums2()
for (let item of numsIterator2) {
  console.log(item)
}

class CustomIterator {
  private data: number[]
  constructor() {
    this.data = [1, 2, 3, 4, 5]
  }

  *[Symbol.iterator]() {
    yield* this.data
  }
}
const iterator3 = new CustomIterator()
for (let item of iterator3) {
  console.log(item)
}


export { }
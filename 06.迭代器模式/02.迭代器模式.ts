class DataIterator {
  private data: number[]
  private index = 0

  constructor(container: DataContainer) {
    this.data = container.data
  }

  next(): number | null {
    if (this.hasNext()) {
      return this.data[this.index++]
    }
    return null
  }

  hasNext(): boolean {
    return this.index < this.data.length
  }
}

class DataContainer {
  data = [1, 2, 3, 4, 5]

  getIterator() {
    return new DataIterator(this)
  }
}

// 获取一个迭代器
const iterator = new DataContainer().getIterator()
while (iterator.hasNext()) {
  const num = iterator.next()
  console.log(num)
}

// 是否符合设计原则：
// 1.使用者和目标分离，解耦
// 2.目标可以自行控制其内部逻辑
// 3.使用者不关心目标的内部结构

export { }
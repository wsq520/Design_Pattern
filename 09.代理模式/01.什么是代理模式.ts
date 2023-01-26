class RealImg {
  fileName: string

  constructor(fileName: string) {
    this.fileName = fileName
  }

  display() {
    // 先加载图片
    this.loadFormDist()
    // 展示图片
    console.log('display...', this.fileName)
  }

  private loadFormDist() {
    console.log('loading...', this.fileName)
  }
}

class ProxyImg {
  realImg: RealImg

  constructor(fileName: string) {
    this.realImg = new RealImg(fileName)
  }

  display() {
    // 可以在这里添加一些约束条件
    // ........
    this.realImg.display()
  }
}

const img = new ProxyImg('beauty')
img.display()

// 设计原则：
/*
  1.代理和目标分离、解耦
  2.代理可以自行拓展
  3.目标也可以自行拓展
*/ 

export { }
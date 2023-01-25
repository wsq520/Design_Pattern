// @ts-nocheck

class Foo {
  fn1() {
    console.log('用户点赞')
    log()
  }

  fn2() {
    console.log('用户评价')
    log()
  }
}

function log() {
  console.log('记录用户操作日志')
}

// 这样子不属于AOP编程 因为log函数混杂到每个功能函数中
// const f = new Foo()
// f.fn1()
// f.fn2()

function log2(target: any, key: string, desc: PropertyDescriptor) {
  const oldValue = desc.value // 值 比如函数 fn1

  // 重新定义 fn1 方法
  desc.value = function() {
    console.log('记录日志') // 执行需求功能
    return oldValue.apply(this, arguments) // 执行原来的功能
  }
}

class Poo {
  @log2
  fn1() {
    console.log('用户点赞')
  }

  @log2
  fn2() {
    console.log('用户评价')
  }
}

const p = new Poo()
p.fn1()
p.fn2()

export { }
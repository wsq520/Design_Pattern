class SingleTon {

}
// 使用闭包的方式实现单例模式
function getInstance() {
  let instance = null

  return () => {
    if (!instance) {
      instance = new SingleTon()
    }
    return instance
  }
}

const g = getInstance()
const i1 = g()
const i2 = g()
console.log(i1 === i2)



// 使用模块化方式实现单例模式
let instance

export default () => {
  if (!instance) {
    instance = new SingleTon()
  }
  return instance
}
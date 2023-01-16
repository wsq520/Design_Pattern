class Face {

}

// 脸和人之间就是一种组合关系 脱离人体 脸没有存在意义
class Person {

}

class Car {

}
// 车和引擎之间就是一种聚合关系 两者可以独立存在
class Engine {

}

// 司机和车之间是一种依赖关系
// 依赖关系： 不是属性关系 而是函数参数或返回值
class Driver {
  drive(car: Car) { }
}


export { }
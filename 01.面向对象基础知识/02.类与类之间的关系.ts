interface IPerson {
  name: string
  age: number
  eat(): void
}
// 关系一：实现
// 类实现接口时必须包含接口所有的属性和方法
class Student implements IPerson {
  name: string
  age: number
  school: string

  constructor(name: string, age: number, school: string) {
    this.name = name
    this.age = age
    this.school = school
  }

  eat(): void {
    
  }
}

class Father {

}
// 关系2： 泛化
class Son extends Father {

}

class IDcard {
  id: string
  constructor(id: string) {
    this.id = id
  }
}
// 关系3：关联(类之间的引用关系)
class Employee {
  name: string
  age: number
  idCard: IDcard
}

export {}
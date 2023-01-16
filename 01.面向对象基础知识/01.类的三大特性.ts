class Person {
  name: string
  age: number
  // 封装：属性gf不想暴露给外部访问 可以使用修饰符限制属性能给谁访问
  // public protected private
  protected gf: string = 'xiaomei'

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eat() {
    console.log(this.name + '吃汉堡', this.gf)
  }
}

// 继承
class Student extends Person {
  school: string

  constructor(name: string, age: number, school: string) {
    super(name, age)
    this.school = school
  }

  // 多态：修改继承的eat方法
  eat() {
    console.log('学生不吃东西的')
  }
}

const s = new Student('xiaohong', 18, 'Aschool')
// 属性和方法都是继承于父类
console.log(s.name, s.age)
s.eat()

// 多态： 函数重载
interface IStyle {
  [key: string]: string
}

class Setcss {
  css(key: string, value: string): void
  css(value: IStyle): void

  css(key: string | IStyle, value?: string): void {

  }
}

new Setcss().css('color', 'red')
new Setcss().css({ 'color': 'red' })


export { }
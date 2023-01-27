/**
 * 题目描述：打车时，你可以打快车和专车，无论什么车都有车牌号和车辆名称，价格不同，快车每公里1元，专车每公里2元，
 * 打车时，你要启动行程并显示车辆信息
 * 结束行程时，显示价格
 */

class Car {
  name: string
  number: string
  price = 0
  constructor(name: string, number: string) {
    this.name = name
    this.number = number
  }
}

class ExpressCar extends Car {
  price: number = 1
  constructor(name: string, number: string) {
    super(name, number)
  }
}

class SpecialCar extends Car {
  price: number = 2
  constructor(name: string, number: string) {
    super(name, number)
  }
}

class Trip {
  // 类型为 Car 那么就可以兼容子类
  car: Car
  constructor(car: Car) {
    this.car = car
  }

  start() {
    console.log(`行程已开启 name ${this.car.name}, number ${this.car.number}`)
  }

  end() {
    console.log('行程结束 价格' + this.car.price * 5)
  }
}

const car = new SpecialCar('保时捷918', '998899')
const trip = new Trip(car)
trip.start()
trip.end()

export { }
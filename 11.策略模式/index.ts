class User {
  type: string

  constructor(type: string) {
    this.type = type
  }

  buy() {
    // 这里可能会涉及到很多个 if 语句 甚至会嵌套使用
    const type = this.type
    if(type === 'oridinary') {
      console.log('普通用户')
    }
    if(type === 'vip') {
      console.log('vip用户')
    }
  }
}

// 策略模式：将不同类型用户分成多个类 每个类有自己的buy方法
interface IUser {
  buy: () => void
}

class OridinaryUser implements IUser {
  buy() {
    console.log('普通用户购买')
  }
}

class VipUser implements IUser {
  buy() {
    console.log('vip用户购买')
  }
}

export { }
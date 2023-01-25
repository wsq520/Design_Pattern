// 装饰器： 针对一个对象，动态添加新功能，但不会改变其原有的功能

// @ts-nocheck

function decorator(phone) {
  phone.fn2 = () => {
    console.log('聊天')
  }
}

const phone = {
  name: 'apple14',
  fn1() {
    console.log('看剧')
  }
}

phone.fn1()
decorator(phone)
phone.fn2()

export { }
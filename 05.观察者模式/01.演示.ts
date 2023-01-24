// 主题
class Subject {
  private state: number = 0
  private observers: Observer[] = []

  getState(): number {
    return this.state
  }

  setState(newState: number): void {
    this.state = newState
    this.notify()
  }

  attach(observer: Observer) {
    this.observers.push(observer)
  }

  private notify() {
    this.observers.forEach(item => {
      item.update(this.state)
    })
  }
}

// 观察者
class Observer {
  name: string
  constructor(name: string) {
    this.name = name
  }

  update(state: number) {
    console.log(`${this.name} updated, state is ${state}`)
  }
}

const subject = new Subject()
const o1 = new Observer('A')
const o2 = new Observer('B')
subject.attach(o1)
subject.attach(o2)
subject.setState(2)

export { }
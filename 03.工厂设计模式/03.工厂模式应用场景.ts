declare interface Window {
  $: (seletor: string) => JQuery
}

class JQuery {
  selector: string
  length: number

  constructor(selector: string) {
    const demoList = Array.prototype.slice.call(document.querySelectorAll(selector))
    const length = demoList.length
    for (let i = 0; i < length; i++) {
      this[i] = demoList[i]
    }
    this.selector = selector
    this.length = length
  }

  append() {

  }
}

function $(selector: string) {
  return new JQuery(selector)
}

window.$ = $

export default JQuery
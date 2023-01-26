const container = document.getElementById('container')

if (container) {
  // DOM事件代理（又称事件委托）
  // 将点击事件绑定给父容器 而不是给每个子元素绑定点击事件
  // 这里存在事件冒泡
  container.addEventListener('click', e => {
    const target = e.target
    if (target.nodeName === 'A') {
      alert(target.innerHTML)
    }
  })
}
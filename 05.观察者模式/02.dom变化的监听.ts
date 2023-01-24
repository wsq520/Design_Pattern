function callback(records: MutationRecord[], observer: MutationObserver) {
  for (let record of records) {
    console.log('record', record)
  }
}

const observer = new MutationObserver(callback)

const elem = document.getElementById('container')
if (elem) {
  observer.observe(elem, {
    attributes: true, //监听属性变化
    attributeOldValue: true, // 变化之后记录旧的属性值
    childList: true, // 监听子节点的变化
    characterData: true, // 监听节点的内容或文本变化
    subtree: true //递归监听下级所有节点
  })
}

// 停止监听
// observer.disconnect()
// @ts-nocheck

// 1.比如 JQuery的链式操作
$('div').show().css('color', 'red').append($('<p>123</p>'))

// 2.还有promise的链式调用
new Promise((reslove) => {
  reslove()
}).then(() => {
  // 处理过程1
}).then(() => {
  // 处理过程2
})

/**
 * 职责链模式
 * 1. 将一个流程交给多个角色处理 
 * 2. 将多个角色分开 通过一个“链”串联起来
 * 3. 各个角色相互分离、互不干扰
 */

export { }
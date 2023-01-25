function* traverse(elemList) {
  for (const elem of elemList) {
    yield elem

    const children = Array.from(elem.children)
    if (children.length) {
      yield* traverse(children)
    }
  }
}

const container = document.getElementById('container')

if (container) {
  for (let node of traverse([container])) {
    console.log(node)
  }
}
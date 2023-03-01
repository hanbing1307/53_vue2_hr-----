
export function transTree(souceData) {
  const targetData = []
  const map = {}
  souceData.forEach(item => {
    map[item.id] = item
    item.children = []
  })
  // 通过pid去匹配id
  souceData.forEach(item => {
    if (map[item.pid]) {
      // 匹配上
      map[item.pid].children.push(item)
    } else {
      // 没有匹配上
      targetData.push(item)
    }
  })
  // 返回的是处理之后的数组
  return targetData
}


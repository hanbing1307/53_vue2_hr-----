/**
 * @description: 获取导出时的表头数据和表格数据
 * @param {*} { sourceData:后端返回的源数据,header:表格头中因为对应关系}
 * @return {*}
 */

export function getExportData(sourceData, header) {
  const newArr = []
  sourceData.forEach(item => {
    const arr = []
    Object.keys(item).forEach(key => {
      if (Object.values(header).includes(key)) {
        arr.push(item[key])
      }
    })
    newArr.push(arr)
  })
  return {
    header: Object.keys(header),
    data: newArr
  }
}

/**
 * @description: 获取导入时的处理之后的接口数据
 * @param {*} results
 * @return {*}
 */
export function getImportData(results) {
  const userRelations = {
    '入职日期': 'timeOfEntry',
    '手机号': 'mobile',
    '姓名': 'username',
    '转正日期': 'correctionTime',
    '工号': 'workNumber'
  }
  const newArr = []
  // 将所有的中文key转换成英文key 然后添加到新数组中
  results.forEach(item => {
    const map = {}
    Object.keys(item).forEach(key => {
      map[userRelations[key]] = item[key]
    })
    newArr.push(map)
  })
  // 时间处理
  newArr.forEach(item => {
    Object.keys(item).forEach(key => {
      if (['correctionTime', 'timeOfEntry'].includes(key)) {
        item[key] = new Date(formatDate(item[key], '/'))
      }
    })
  })
  return newArr
}

export function formatDate(numb, format) {
  const time = new Date((numb - 1) * 24 * 3600000 + 1)
  time.setYear(time.getFullYear() - 70)
  const year = time.getFullYear() + ''
  const month = time.getMonth() + 1 + ''
  const date = time.getDate() - 1 + ''
  if (format && format.length === 1) {
    return year + format + (month < 10 ? '0' + month : month) + format + (date < 10 ? '0' + date : date)
  }
  return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date)
}

// 全局getters
// 1. state的计算属性
// 2. 快捷访问 使用getters精简对于模块中响应式数据的方法 为了业务文件访问数据方便（拓展）

const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device
}
export default getters

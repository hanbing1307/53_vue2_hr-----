import { constantRoutes } from '@/router'

export default {
  // 开启模块命名空间 才算是严格的模块化管理
  // 访问 mutation action函数的时候 都需要在前面加上模块名称才可以
  namespaced: true,
  state: () => ({
    menuList: [...constantRoutes] // 路由表(菜单表)
  }),
  mutations: {
    // filterAsyncRoutes 过滤之后的动态路由表
    // 如果当前用户退出登录之后另一个用户进来 它也会同样调用mutation函数
    setMenuList(state, filterAsyncRoutes) {
      state.menuList = [...constantRoutes, ...filterAsyncRoutes]
    }
  }
}

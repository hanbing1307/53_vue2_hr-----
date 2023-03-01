// 所有跟语言相关的代码
import Vue from 'vue'
// 引入i18n核心包
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import elementEN from 'element-ui/lib/locale/lang/en' // 引入饿了么的英文包
import elementZH from 'element-ui/lib/locale/lang/zh-CN' // 引入饿了么的中文包

// 引入自定义语言包
import selfEN from './en'
import selfZH from './zh'

// 插件注册
Vue.use(VueI18n)

// 导出实例

const i18n = new VueI18n({
  // zh -> 中文  en -> 因为
  // 指定当前的默认的语言环境
  locale: 'zh',
  messages: {
    // 英文环境下的语言数据
    en: {
      ...elementEN,
      ...selfEN
    },
    // 中文环境下的语言数据
    zh: {
      ...elementZH,
      ...selfZH
    }
  }
})

// 配置elementUI 转化关系函数
locale.i18n((key, value) => i18n.t(key, value))

export default i18n

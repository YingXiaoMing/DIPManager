import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

// 引入uView
import uView from './uni_modules/uview-ui'

export function createApp() {
  const app = createSSRApp(App)
  
  // 使用uView
  app.use(uView)
  
  return {
    app
  }
}
// #endif

// 使用 uview ui库
import uView from '@/uni_modules/uview-ui'
Vue.use(uView);


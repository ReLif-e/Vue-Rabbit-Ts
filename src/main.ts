import { createApp } from 'vue'
import App from './App.vue'
// 让不管在哪个浏览器上都显示的是一样的
import 'normalize.css'
// 清除公共样式
import '@/assets/styles/common.less'

// 引入路由并注册
import router from './router'
import {createPinia} from 'pinia'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')

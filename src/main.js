import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'dayjs/locale/zh-cn'
import 'element-plus/dist/index.css'
import '@/styles/common.scss'

createApp(App).use(ElementPlus, {locale: zhCn}).use(router).mount('#app')

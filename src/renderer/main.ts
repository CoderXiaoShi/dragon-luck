import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import './style/animate.css'
// import './style/custom.less'
import './assets/iconfont/iconfont.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { router } from './router';
import { createPinia } from 'pinia'

createApp(App)
.use(ElementPlus)
.use(router)
.use(createPinia())
.mount('#app')

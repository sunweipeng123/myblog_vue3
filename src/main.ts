import { createApp } from 'vue'
import App from './App.vue'
//引入pinia
import {createPinia} from 'pinia'
//引入路由
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

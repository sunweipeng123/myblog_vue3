import { createApp } from 'vue'
import App from './App.vue'
//引入pinia
import {createPinia} from 'pinia'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')

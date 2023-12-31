// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './ArtsyHome.vue'
import router from './router'

import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

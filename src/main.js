import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import BootstrapVue from 'bootstrap-vue'

createApp(App).use(store).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import cors from 'cors'
createApp(App).use(router, cors, {
  origin: 'https://cors-anywhere.herokuapp.com/',
  credentials: true
}).mount('#app')

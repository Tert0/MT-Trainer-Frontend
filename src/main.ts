import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/tailwind.css';

let app = createApp(App);
app.use(router);
app.mount('#app');

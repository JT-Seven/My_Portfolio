import { createApp } from 'vue';
import App from './views/app/App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'boxicons'

createApp(App).use(store).use(router).mount('#app');

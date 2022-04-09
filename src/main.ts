import { createApp } from 'vue';
import { createWebHistory } from 'vue-router';
import App from './App.vue';
import createRouter from '@/router';

// global style
import './styles/index.css';
import 'virtual:windi.css';

const app = createApp(App);

// router
app.use(createRouter(createWebHistory()));

app.mount('#app');

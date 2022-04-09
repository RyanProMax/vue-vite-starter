import { createApp } from 'vue';
import { createWebHistory } from 'vue-router';
import App from './App.vue';
import createRouter from '@/router';

// global style
import './styles/index.css';
import 'virtual:windi.css';

const app = createApp(App);

/**
 * router
 *
 * github pages 配置基础路径
 * https://stackoverflow.com/questions/50175802/deploy-vue-to-github-pages-error-with-vue-router/
 */
app.use(createRouter(createWebHistory('/vue-vite-starter/')));

app.mount('#app');

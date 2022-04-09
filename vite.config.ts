import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import { SvgLoader } from './src/utils/plugins';

// https://vitejs.dev/config/
export default defineConfig({
  // 按需设置，此处为部署到gh-pages
  base: '/vue-vite-starter/',
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`
    }
  },
  plugins: [
    /**
     * 启用响应性语法糖
     * see more: https://staging-cn.vuejs.org/guide/extras/reactivity-transform.html
     */
    Vue({ reactivityTransform: true }),
    /**
     * see more: https://cn.windicss.org/
     * see windi.config.ts for config
     */
    WindiCSS(),
    SvgLoader()
  ]
});

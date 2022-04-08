import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    /**
     * 启用响应性语法糖
     * see more: https://staging-cn.vuejs.org/guide/extras/reactivity-transform.html
     */
    Vue({ reactivityTransform: true }),
    /**
     * 原子化CSS
     * see more: https://github.com/antfu/unocss
     * see unocss.config.ts for config
     */
    Unocss()
  ]
});

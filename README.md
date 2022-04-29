<h1 align='center'>
  Vue-Vite-Starter
</h1>

<p align='center'>
  <img src="https://raw.githubusercontent.com/RyanProMax/vue-vite-starter/main/public/favicon.ico" width="100" alt="Vue-Vite-Starter" />
</p>

<p align='center'>
  A Vue 3.x + Vite 2.x + TypeScript + WindiCSS template starter 🚀
</p>

<p align='center'>
  一个极简的快速启动模板 💪
</p>


## Preview

https://vue-vite-starter.netlify.app/


## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [TypeScript](https://www.typescriptlang.org/), [Vue-Router](https://router.vuejs.org/zh/), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild)

- 🎨 [WindiCSS](https://windicss.org/): 下一代工具类 CSS 框架

- 😃 Svg Icon: 封装组件导入 Svg 原生表情，轻松管理你的图标库


## Usage

```bash
npx degit RyanProMax/vue-vite-starter my-vue-app
cd my-vue-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

### Svg Icon

```vue
<script setup lang="ts">
import SvgIcon from '~/components/SvgIcon/index.vue';
</script>

<template>
  <SvgIcon name="joker" />
</template>
```

相当于使用

```vue
<script setup lang="ts">
import Joker from '~/assets/svg/joker.svg';
</script>

<template>
  <Joker />
</template>
```

> 注意：
>
> 使用 SvgIcon 方式属于动态引入，如果配合动态语法定义`name`，会存在加载时间，导致切换不流畅。

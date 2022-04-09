<script setup lang="ts">
import SvgIcon from './components/SvgIcon/index.vue';
import Header from '@/components/Header/index.vue';
</script>

<template>
  <main w:p="x-20px y-30px" w:flex="~ col" w:align="items-center" w:font="sans thin" w:text="dark:gray-300">
    <Header />

    <SvgIcon name="joker" w:m="t-30px" w:w="80px" w:h="80px" w:fill="red-500" />

    <p w:m="t-25px" w:text="xl">
      Vue Vite Starter
    </p>
    <p w:m="t-10px" w:text="sm gray-400" w:font="italic">
      A Vue 3.x + Vite 2.x + TypeScript + WindiCSS template starter 🚀
    </p>
    <p w:m="t-10px" w:text="sm gray-400" w:font="italic">
      一个极简的快速启动模板 💪
    </p>

    <button w:m="t-20px" w:font="thin" class="btn btn-red">
      Jump
    </button>
  </main>
</template>

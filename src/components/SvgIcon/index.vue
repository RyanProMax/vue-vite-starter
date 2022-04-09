<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';

const { name } = defineProps<{
  name: string
}>();

const icon = computed(() => defineAsyncComponent(() => import(`../../assets/svg/${name}.svg`)));
</script>

<template>
  <component :is="icon" w:fill="gray-500 hover:gray-900" w:w="6" w:h="6" class="transition duration-250" />
</template>

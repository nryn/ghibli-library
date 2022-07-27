<script setup lang="ts">
const props = defineProps<{
  text: string
  clickable?: boolean
}>()
</script>

<template>
  <span 
    class="p-2 px-4 m-1 max-w-min bg-white bg-opacity-10 rounded-full whitespace-nowrap transition-all duration-300"
    :class="{ 'hover:bg-opacity-20' : clickable }"
  >
    {{ props.text }}
  </span>
</template>

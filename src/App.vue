<script setup lang="ts">
</script>

<template>
  <div class="font-mono">
    <div
    class="absolute inset-0 h-full bg-center bg-no-repeat bg-cover -z-10 blur-[120px] opacity-50"
    :style="{ backgroundImage: 'url(/default-background.jpeg)' }"
  ></div>
    <RouterView />
  </div>
</template>

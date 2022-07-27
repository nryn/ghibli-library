<script setup lang="ts">
import { computed } from 'vue'
import { store } from './store'

  const dynamicBackgroundUrl = computed(() => store.getters.dynamicBackgroundUrl)
</script>

<template>
  <div class="font-mono">
    <div
    id="bg"
    class="absolute inset-0 h-full bg-center bg-no-repeat bg-cover -z-10 blur-[120px] opacity-50"
    :style="{ backgroundImage: 'url(' + dynamicBackgroundUrl + ')' }"
  ></div>
    <RouterView />
  </div>
</template>

<style>
#bg {
  transition: background-image 0.3s ease-in-out;
}
</style>

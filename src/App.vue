<script setup lang="ts">
import DynamicBackground from './components/DynamicBackground.vue'
</script>

<template>
  <Transition name="fade" mode="out-in" appear>
    <div class="font-mono">
      <DynamicBackground />
      <RouterView />
    </div>
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
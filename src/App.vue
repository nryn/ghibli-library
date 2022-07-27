<script setup lang="ts">
import DynamicBackground from './components/DynamicBackground.vue'
</script>

<template>
  <Transition name="fade" mode="out-in" appear>
    <div class="font-mono">
      <DynamicBackground />
      <RouterView v-slot="{ Component, route }">
        <Transition
          mode="out-in"
          :enter-from-class="(route.meta.enterFrom as string)"
          :enter-active-class="(route.meta.enterActive as string)"
          :leave-to-class="(route.meta.leaveTo as string)"
          :leave-active-class="(route.meta.leaveActive as string)"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </Transition>
</template>

<style>
/* Classes for Fade In Animation */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Classes for Slide Animation */

.enter-from-top {
  transition: all 0.2s ease-out;
  transform: translateY(-100vh);
}
.enter-active-from-top {
  transition: all 0.2s ease-out;
}

.leave-active-to-top {
  transition: all 0.2s ease-in;
}
.leave-to-top {
  transition: all 0.2s ease-in;
  transform: translateY(100vh);
}

.enter-from-bottom {
  transition: all 0.2s ease-out;
  transform: translateY(100vh);
}

.enter-active-from-bottom {
  transition: all 0.2s ease-out;
}

.leave-active-to-bottom {
  transition: all 0.2s ease-in;
}

.leave-to-bottom {
  transition: all 0.2s ease-in;
  transform: translateY(-100vh);
}
</style>
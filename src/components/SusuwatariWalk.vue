<template>
  <div class="fixed bottom-1 w-full -z-10">
    <img class="susuwatari-walk w-24" src="/susuwatari_walk.webp" alt="A walking soot sprite character">
  </div>
</template>

<style>
@keyframes stroll {
  from { transform: translateX(2100%); }
  to { transform: translateX(-100%); }
}
.susuwatari-walk {
  animation: stroll 60s linear infinite;
}
</style>
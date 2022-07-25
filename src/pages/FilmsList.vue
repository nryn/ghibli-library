<script setup lang="ts">
const films= ['mononoke', 'ponyo', 'poppy hill']
</script>

<template>
    <div>
        <div v-for="(film, index) in films" :key="index">{{ film }}</div>
    </div>
</template>

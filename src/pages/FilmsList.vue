<script setup lang="ts">
import { store } from '../store'

const films = store.films
</script>

<template>
    <div>
        <div v-for="(film, index) in films" :key="index" data-test="FilmCard">{{ film }}</div>
    </div>
</template>

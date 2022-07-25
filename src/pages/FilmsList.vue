<script setup lang="ts">
import { store } from '../store'
import FilmCard from '../components/FilmCard.vue';

const films = store.films.slice(0, 10)
</script>

<template>
  <div>
    <FilmCard v-for="(film, index) in films" :key="index" :film="film"/>
  </div>
</template>

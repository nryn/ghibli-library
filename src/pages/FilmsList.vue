<script setup lang="ts">
import { computed } from 'vue'
import { store } from '../store'
import FilmCard from '../components/FilmCard.vue'
import FilmSearchBar from '../components/FilmSearchBar.vue'

const films = computed(() => store.getters.tenFilms)
</script>

<template>
  <div>
    <FilmSearchBar/>
    <FilmCard v-for="(film, index) in films" :key="index" :film="film"/>
  </div>
</template>

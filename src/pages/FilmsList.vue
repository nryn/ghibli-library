<script setup lang="ts">
import { store } from '../store'
import FilmCard from '../components/FilmCard.vue'
import FilmSearchBar from '../components/FilmSearchBar.vue'

const films = store.state.films.slice(0, 10)
</script>

<template>
  <div>
    <FilmSearchBar/>
    <FilmCard v-for="(film, index) in films" :key="index" :film="film"/>
  </div>
</template>

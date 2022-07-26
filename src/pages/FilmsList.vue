<script setup lang="ts">
import { computed } from 'vue'
import { store } from '../store'
import FilmCard from '../components/FilmCard.vue'
import FilmSearchBar from '../components/FilmSearchBar.vue'
import { MutationTypes } from '../store/types.d'

const films = computed(() => store.getters.tenFilms)
const canShowMoreFilms = () => store.getters.canShowMoreFilms
const showMoreFilms = () => { store.commit(MutationTypes.SHOW_MORE_FILMS) }
</script>

<template>
  <div>
    <FilmSearchBar/>
    <FilmCard v-for="(film, index) in films" :key="index" :film="film"/>
    <button data-test="ShowMore" @click="showMoreFilms()">
      {{ canShowMoreFilms() ? 'Show More' : 'You\'ve reached the end. Go back.' }}
    </button>
  </div>
</template>

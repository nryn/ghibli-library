<script setup lang="ts">
import { computed } from 'vue'
import { store } from '../store'
import FilmCard from '../components/FilmCard.vue'
import FilmSearchBar from '../components/FilmSearchBar.vue'
import RoundedChip from '../components/RoundedChip.vue'
import { MutationTypes } from '../store/types.d'

const films = computed(() => store.getters.tenFilms)
const canShowMoreFilms = () => store.getters.canShowMoreFilms
const showMoreFilms = () => { store.commit(MutationTypes.SHOW_MORE_FILMS) }

const scrollToStart = () => {
  let content = document.getElementById("grid-container")
  if (typeof content?.scrollLeft === 'number') content.scrollLeft -= 5000
}
</script>

<template>
  <div>
    <FilmSearchBar/>
      <p v-if="films.length === 0" class="text-center mt-48">There are no films to show.</p>
      <div 
        v-else 
        id="grid-container" 
        class="md:grid grid-flow-row md:grid-flow-col auto-cols-max md:pl-48 overflow-x-scroll overflow-y-scroll md:overflow-y-clip mt-4 md:mt-16 md:h-[92vh] scroll-smooth"
      >
        <div class="inline w-24"></div>
        <FilmCard v-for="(film, index) in films" :key="index" :film="film"/>
        <div class="m-4 max-w-xs scale-100 cursor-pointer" @click="showMoreFilms(); scrollToStart()">
          <p class="whitespace-nowrap md:relative md:top-1/3 md:-left-1/3 md:rotate-90 mb-8 md:mb-0">
            <RoundedChip :text="`${canShowMoreFilms() ? 'Show More' : 'You\'ve reached the end. Go back ⬇'}`" clickable data-test="ShowMore"/>
          </p>
        </div>
        <div class="inline w-24"></div>
      </div>
  </div>
</template>

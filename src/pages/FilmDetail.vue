<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { store } from '../store'
import { ActionTypes } from '../store/types.d'

const route = useRoute()
const film = computed(() => store.getters.filmById(route.params.id as string))
const characters = computed(() => store.getters.peopleForFilm(route.params.id as string))

watchEffect(() => {
  store.dispatch(ActionTypes.GET_CHARACTERS_FOR_FILM, film?.value?.id || '')
})
</script>

<template>
  <div class="flex flex-col md:flex-row items-center">
    <div class="w-full p-8 ml-4 md:ml-16 z-20 pointer-events-none">
      <h1 v-if="film" class="text-3xl my-4 whitespace-nowrap">{{ film.title }}</h1>
      <p class="text-6xl my-4 whitespace-nowrap inline mr-4">{{ film?.original_title }}</p>
      <span v-if="film?.original_title_romanised" class="whitespace-nowrap italic text-sm opacity-40">[ {{ film?.original_title_romanised }} ]</span>
      <p class="text-m my-4">{{ film?.description }}</p>
      <div class="opacity-40">
        <p v-if="film?.director">Director: {{ film?.director }}</p>
        <p v-if="film?.producer">Producer: {{ film?.producer }}</p>
        <p v-if="film?.release_date">Released in {{ film?.release_date }}</p>
        <p v-if="film?.running_time">{{ film?.running_time }} Minutes</p>
      </div>
      <div v-if="characters.length" class="py-4">
          <p>Characters:</p>
          <div>
              <p v-for="(character, index) in characters" :key="index">{{ character.name }}</p>
          </div>
      </div>
    </div>
    <img :src="film?.image" />
  </div>
</template>

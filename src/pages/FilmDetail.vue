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
  <div>
    <p>{{ film?.title }}</p>
    <p>{{ film?.original_title }}</p>
    <p>{{ film?.original_title_romanised }}</p>
    <p>{{ film?.description }}</p>
    <p>{{ film?.title }}</p>
    <p>Director: {{ film?.director }}</p>
    <p>Producer: {{ film?.producer }}</p>
    <p>Released in {{ film?.release_date }}</p>
    <p>{{ film?.running_time }} Minutes</p>
    <div v-if="film?.people?.length">
        <p>Characters:</p>
        <div>
            <p v-for="(character, index) in characters" :key="index">{{ character.name }}</p>
        </div>
    </div>
    <img :src="film?.image" />
  </div>
</template>

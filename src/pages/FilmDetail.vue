<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { store } from '../store'

const route = useRoute()
const film = computed(() => store.getters.filmById(route.params.id as string))
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
            <p v-for="(character, index) in film?.people" :key="index">{{ character }}</p>
        </div>
    </div>
    <img :src="film?.image" />
  </div>
</template>

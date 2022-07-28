<script setup lang="ts">
import { ref } from 'vue'
import { store } from '../store'
import { Film, MutationTypes } from '../store/types.d'
const props = defineProps<{ film: Film }>()

const imageLoading = ref(true)

const setDynamicBackground = (imageUrl: string) => {
  store.commit(MutationTypes.SET_DYNAMIC_BACKGROUND_URL, imageUrl)
}
</script>

<template>
  <div class="inline m-4 max-w-xs" data-test="FilmCard">
    <RouterLink :to="`/${props.film.id}`" @mouseover="setDynamicBackground(props.film.image)">
      <img :src="imageLoading ? './empty.png' : props.film.image" :alt="props.film.title" @load="imageLoading = false" :data-test="`ClickableThumbnail-${film.id}`">
    </RouterLink>
    <div class="mt-2 ml-4 md:ml-0 mb-4 md:mb-0">
      <p data-test="Title">{{ props.film.title }}</p>
      <p data-test="ReleaseDate">{{ props.film.release_date }}</p>
      <p data-test="RunningTime">{{ props.film.running_time }} minutes</p>
    </div>
  </div>
</template>

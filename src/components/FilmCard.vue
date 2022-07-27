<script setup lang="ts">
import { Film } from '../store/types'
const props = defineProps<{ film: Film }>()
</script>

<template>
  <div class="inline m-4 max-w-xs" data-test="FilmCard">
    <RouterLink :to="`/${props.film.id}`">
      <img :src="props.film.image" :alt="props.film.title" :data-test="`ClickableThumbnail-${film.id}`">
    </RouterLink>
    <div>
      <p data-test="Title">{{ props.film.title }}</p>
      <p data-test="ReleaseDate">{{ props.film.release_date }}</p>
      <p data-test="RunningTime">{{ props.film.running_time }} minutes</p>
    </div>
  </div>
</template>

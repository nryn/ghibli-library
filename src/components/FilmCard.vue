<script setup lang="ts">
const props = defineProps<{
  film: any // TODO: Fix this terrible crime
}>()
</script>

<template>
  <div data-test="FilmCard">
    <img :src="props.film.image" :alt="props.film.title" :data-test="`ClickableThumbnail-${film.id}`">
    <div>
      <p data-test="Title">{{ props.film.title }}</p>
      <p data-test="ReleaseDate">{{ props.film.release_date }}</p>
      <p data-test="RunningTime">{{ props.film.running_time }} minutes</p>
    </div>
  </div>
</template>
